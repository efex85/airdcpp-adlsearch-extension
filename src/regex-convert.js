// Converts the regular expressions found in ADLSearch.xml (Boost flavour) to JavaScript RegExp objects.
//
// The goal is to reproduce what adlchecker.py does with Python's `re` module:
//   - every pattern is compiled with re.IGNORECASE
//   - the leading "(?i:" wrapper is dropped (it changes nothing, ignore case is global anyway)
//   - "(?-i:...)" groups are case sensitive (Python supports scoped flags natively)
//   - \d, \w and \s are Unicode aware (Python 3 str patterns)
//
// JavaScript (up to at least V8 12.4 / Node 22) doesn't support inline modifier groups, so patterns
// that contain "(?-i:" are rewritten without the "i" flag: every letter that is outside of a
// case sensitive group is expanded into an explicit set, such as "a" -> "[aA]".
// Everything else uses the native "i" flag. All patterns are compiled in Unicode mode ("u").

const SYNTAX_CHARS = '^$\\.*+?()[]{}|/';

// All distinct case variants of a single character (including the character itself)
const caseVariants = (ch) => {
  const variants = new Set([ch]);
  const lower = ch.toLowerCase();
  const upper = ch.toUpperCase();

  // Ignore multi-character mappings (such as "ß" -> "SS")
  if ([...lower].length === 1) {
    variants.add(lower);
  }

  if ([...upper].length === 1) {
    variants.add(upper);
  }

  return [...variants];
};

const escapeForClass = (ch) => {
  return '\\^]-['.includes(ch) ? `\\${ch}` : ch;
};

const HEX2 = /^[0-9a-fA-F]{2}/;
const HEX4 = /^[0-9a-fA-F]{4}/;

class UnsupportedPatternError extends Error { }

const unsupported = (message) => {
  throw new UnsupportedPatternError(message);
};

// Returns { source, flags } for a Boost style pattern
export const convertPattern = (originalPattern) => {
  // Same handling as unboost_regex() in adlchecker.py
  const pattern = originalPattern.replace(/\(\?-i\)/g, '').replace(/\(\?i\)/g, '');
  const hasSensitiveGroups = pattern.includes('(?-i:');

  const out = [];
  const groupStack = [];
  let sensitive = false; // Case sensitive matching is currently on (only possible inside (?-i: ...))
  let i = 0;

  // Only needed when we have to expand the letters ourselves
  const expanding = () => hasSensitiveGroups && !sensitive;

  const readEscape = (inClass) => {
    // pattern[i] is the backslash
    const c = pattern[i + 1];
    if (c === undefined) {
      unsupported('Trailing backslash');
    }

    // Returns { text, literal } where literal is set if the escape stands for exactly one character
    switch (c) {
      case 'd': i += 2; return { text: '\\p{Nd}' };
      case 'D': i += 2; return { text: '\\P{Nd}' };
      case 'w': i += 2; return { text: inClass ? '\\p{L}\\p{N}_' : '[\\p{L}\\p{N}_]' };
      case 'W':
        if (inClass) {
          unsupported('\\W inside a character class');
        }

        i += 2;
        return { text: '[^\\p{L}\\p{N}_]' };
      case 's': case 'S': case 'b': case 'B':
      case 't': case 'n': case 'r': case 'f': case 'v':
        i += 2;
        return { text: `\\${c}` };
      case '0':
        i += 2;
        return { text: '\\0' };
      case 'x': {
        const hex = pattern.slice(i + 2).match(HEX2);
        if (!hex) {
          unsupported('Invalid \\x escape');
        }

        const ch = String.fromCharCode(parseInt(hex[0], 16));
        const text = `\\x${hex[0]}`;
        i += 4;
        return { text, literal: ch };
      }
      case 'u': {
        const hex = pattern.slice(i + 2).match(HEX4);
        if (!hex) {
          unsupported('Invalid \\u escape');
        }

        const ch = String.fromCharCode(parseInt(hex[0], 16));
        const text = `\\u${hex[0]}`;
        i += 6;
        return { text, literal: ch };
      }
      default:
        break;
    }

    if (/[0-9]/.test(c)) {
      if (inClass) {
        unsupported('Back reference inside a character class');
      }

      // Back reference (the following digits belong to it)
      const digits = pattern.slice(i + 1).match(/^[0-9]+/)[0];
      if (hasSensitiveGroups) {
        // Back references can't keep the "(?-i:" semantics once we expand the letters ourselves
        unsupported('Back references together with (?-i: groups');
      }

      i += 1 + digits.length;
      return { text: `\\${digits}`, backref: true };
    }

    if (/[A-Za-z]/.test(c)) {
      unsupported(`Unsupported escape \\${c}`);
    }

    // Escaped punctuation
    i += 2;
    if (SYNTAX_CHARS.includes(c)) {
      return { text: `\\${c}`, literal: c };
    }

    if (c === '-') {
      // "\-" is valid only inside of a class in Unicode mode
      return { text: inClass ? '\\-' : '-', literal: c };
    }

    // Any other escaped punctuation/whitespace stands for the character itself
    return { text: inClass ? escapeForClass(c) : c, literal: c };
  };

  const emitLiteral = (ch) => {
    if (expanding()) {
      const variants = caseVariants(ch);
      if (variants.length > 1) {
        out.push(`[${variants.map(escapeForClass).join('')}]`);
        return;
      }
    }

    out.push(ch);
  };

  const parseClass = () => {
    // pattern[i] is the opening bracket
    out.push('[');
    i++;

    if (pattern[i] === '^') {
      out.push('^');
      i++;
    }

    if (pattern[i] === ']') {
      unsupported('Empty character class / "]" as the first class member');
    }

    const extras = [];
    const addExtraForChar = (ch) => {
      if (!expanding()) {
        return;
      }

      for (const variant of caseVariants(ch)) {
        if (variant !== ch) {
          extras.push(escapeForClass(variant));
        }
      }
    };

    const addExtraForRange = (lo, hi) => {
      if (!expanding()) {
        return;
      }

      const loCode = lo.codePointAt(0);
      const hiCode = hi.codePointAt(0);
      if (hiCode - loCode <= 1024) {
        for (let code = loCode; code <= hiCode; code++) {
          addExtraForChar(String.fromCodePoint(code));
        }

        return;
      }

      // Huge range, handle ASCII letters only
      const addAsciiRange = (from, to, delta) => {
        const a = Math.max(loCode, from.charCodeAt(0));
        const b = Math.min(hiCode, to.charCodeAt(0));
        if (a <= b) {
          extras.push(`${String.fromCharCode(a + delta)}-${String.fromCharCode(b + delta)}`);
        }
      };

      addAsciiRange('a', 'z', -32);
      addAsciiRange('A', 'Z', 32);
    };

    // Reads a single class member that can be a range endpoint
    const readAtom = () => {
      if (pattern[i] === '\\') {
        const esc = readEscape(true);
        return { text: esc.text, literal: esc.literal };
      }

      // Plain characters (including "[", "^" and "-") are valid as they are inside of a Unicode mode class
      const ch = String.fromCodePoint(pattern.codePointAt(i));
      i += ch.length;
      return { text: ch, literal: ch };
    };

    let closed = false;
    while (i < pattern.length) {
      if (pattern[i] === ']') {
        closed = true;
        i++;
        break;
      }

      const atom = readAtom();

      // Range?
      if (pattern[i] === '-' && i + 1 < pattern.length && pattern[i + 1] !== ']' && atom.literal !== undefined) {
        const savedIndex = i;
        i++; // '-'
        const end = readAtom();
        if (end.literal === undefined) {
          // Something like [a-\d], treat the hyphen as a literal one
          i = savedIndex;
          out.push(atom.text);
          addExtraForChar(atom.literal);
          continue;
        }

        out.push(`${atom.text}-${end.text}`);
        addExtraForRange(atom.literal, end.literal);
        continue;
      }

      out.push(atom.text);
      if (atom.literal !== undefined) {
        addExtraForChar(atom.literal);
      }
    }

    if (!closed) {
      unsupported('Unterminated character class');
    }

    out.push(...extras);
    out.push(']');
  };

  const openGroup = (text, newSensitive) => {
    groupStack.push(sensitive);
    sensitive = newSensitive;
    out.push(text);
  };

  while (i < pattern.length) {
    const c = pattern[i];

    switch (c) {
      case '\\': {
        const esc = readEscape(false);
        if (esc.literal !== undefined && expanding()) {
          const variants = caseVariants(esc.literal);
          if (variants.length > 1) {
            out.push(`[${variants.map(escapeForClass).join('')}]`);
            break;
          }
        }

        out.push(esc.text);
        break;
      }
      case '[':
        parseClass();
        break;
      case '(': {
        if (pattern[i + 1] !== '?') {
          openGroup('(', sensitive);
          i++;
          break;
        }

        const rest = pattern.slice(i + 2);
        let named;
        if (rest.startsWith(':')) {
          openGroup('(?:', sensitive);
          i += 3;
        } else if (rest.startsWith('=') || rest.startsWith('!')) {
          openGroup(`(?${rest[0]}`, sensitive);
          i += 3;
        } else if (rest.startsWith('<=') || rest.startsWith('<!')) {
          openGroup(`(?${rest.slice(0, 2)}`, sensitive);
          i += 4;
        } else if ((named = rest.match(/^<([A-Za-z_][A-Za-z0-9_]*)>/))) {
          openGroup(`(?<${named[1]}>`, sensitive);
          i += 2 + named[0].length;
        } else if (rest.startsWith('i:')) {
          openGroup('(?:', false);
          i += 4;
        } else if (rest.startsWith('-i:')) {
          openGroup('(?:', true);
          i += 5;
        } else {
          unsupported(`Unsupported group construct "(?${rest.slice(0, 3)}"`);
        }

        break;
      }
      case ')':
        if (!groupStack.length) {
          unsupported('Unbalanced parentheses');
        }

        sensitive = groupStack.pop();
        out.push(')');
        i++;
        break;
      case '{': {
        const quantifier = pattern.slice(i).match(/^\{\d+(?:,\d*)?\}/);
        if (quantifier) {
          out.push(quantifier[0]);
          i += quantifier[0].length;
        } else {
          out.push('\\{');
          i++;
        }

        break;
      }
      case '}':
        out.push('\\}');
        i++;
        break;
      case ']':
        out.push('\\]');
        i++;
        break;
      case '.': case '^': case '$': case '|': case '*': case '+': case '?':
        out.push(c);
        i++;
        break;
      default: {
        const ch = String.fromCodePoint(pattern.codePointAt(i));
        i += ch.length;
        emitLiteral(ch);
        break;
      }
    }
  }

  if (groupStack.length) {
    unsupported('Unbalanced parentheses');
  }

  return {
    source: out.join(''),
    flags: hasSensitiveGroups ? 'u' : 'iu',
  };
};

// Throws if the pattern can't be converted or compiled
export const compileAdlRegex = (pattern) => {
  const { source, flags } = convertPattern(pattern);
  return new RegExp(source, flags);
};

export { UnsupportedPatternError };
