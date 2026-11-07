var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/color-name/index.js
var require_color_name = __commonJS({
  "node_modules/color-name/index.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      "aliceblue": [240, 248, 255],
      "antiquewhite": [250, 235, 215],
      "aqua": [0, 255, 255],
      "aquamarine": [127, 255, 212],
      "azure": [240, 255, 255],
      "beige": [245, 245, 220],
      "bisque": [255, 228, 196],
      "black": [0, 0, 0],
      "blanchedalmond": [255, 235, 205],
      "blue": [0, 0, 255],
      "blueviolet": [138, 43, 226],
      "brown": [165, 42, 42],
      "burlywood": [222, 184, 135],
      "cadetblue": [95, 158, 160],
      "chartreuse": [127, 255, 0],
      "chocolate": [210, 105, 30],
      "coral": [255, 127, 80],
      "cornflowerblue": [100, 149, 237],
      "cornsilk": [255, 248, 220],
      "crimson": [220, 20, 60],
      "cyan": [0, 255, 255],
      "darkblue": [0, 0, 139],
      "darkcyan": [0, 139, 139],
      "darkgoldenrod": [184, 134, 11],
      "darkgray": [169, 169, 169],
      "darkgreen": [0, 100, 0],
      "darkgrey": [169, 169, 169],
      "darkkhaki": [189, 183, 107],
      "darkmagenta": [139, 0, 139],
      "darkolivegreen": [85, 107, 47],
      "darkorange": [255, 140, 0],
      "darkorchid": [153, 50, 204],
      "darkred": [139, 0, 0],
      "darksalmon": [233, 150, 122],
      "darkseagreen": [143, 188, 143],
      "darkslateblue": [72, 61, 139],
      "darkslategray": [47, 79, 79],
      "darkslategrey": [47, 79, 79],
      "darkturquoise": [0, 206, 209],
      "darkviolet": [148, 0, 211],
      "deeppink": [255, 20, 147],
      "deepskyblue": [0, 191, 255],
      "dimgray": [105, 105, 105],
      "dimgrey": [105, 105, 105],
      "dodgerblue": [30, 144, 255],
      "firebrick": [178, 34, 34],
      "floralwhite": [255, 250, 240],
      "forestgreen": [34, 139, 34],
      "fuchsia": [255, 0, 255],
      "gainsboro": [220, 220, 220],
      "ghostwhite": [248, 248, 255],
      "gold": [255, 215, 0],
      "goldenrod": [218, 165, 32],
      "gray": [128, 128, 128],
      "green": [0, 128, 0],
      "greenyellow": [173, 255, 47],
      "grey": [128, 128, 128],
      "honeydew": [240, 255, 240],
      "hotpink": [255, 105, 180],
      "indianred": [205, 92, 92],
      "indigo": [75, 0, 130],
      "ivory": [255, 255, 240],
      "khaki": [240, 230, 140],
      "lavender": [230, 230, 250],
      "lavenderblush": [255, 240, 245],
      "lawngreen": [124, 252, 0],
      "lemonchiffon": [255, 250, 205],
      "lightblue": [173, 216, 230],
      "lightcoral": [240, 128, 128],
      "lightcyan": [224, 255, 255],
      "lightgoldenrodyellow": [250, 250, 210],
      "lightgray": [211, 211, 211],
      "lightgreen": [144, 238, 144],
      "lightgrey": [211, 211, 211],
      "lightpink": [255, 182, 193],
      "lightsalmon": [255, 160, 122],
      "lightseagreen": [32, 178, 170],
      "lightskyblue": [135, 206, 250],
      "lightslategray": [119, 136, 153],
      "lightslategrey": [119, 136, 153],
      "lightsteelblue": [176, 196, 222],
      "lightyellow": [255, 255, 224],
      "lime": [0, 255, 0],
      "limegreen": [50, 205, 50],
      "linen": [250, 240, 230],
      "magenta": [255, 0, 255],
      "maroon": [128, 0, 0],
      "mediumaquamarine": [102, 205, 170],
      "mediumblue": [0, 0, 205],
      "mediumorchid": [186, 85, 211],
      "mediumpurple": [147, 112, 219],
      "mediumseagreen": [60, 179, 113],
      "mediumslateblue": [123, 104, 238],
      "mediumspringgreen": [0, 250, 154],
      "mediumturquoise": [72, 209, 204],
      "mediumvioletred": [199, 21, 133],
      "midnightblue": [25, 25, 112],
      "mintcream": [245, 255, 250],
      "mistyrose": [255, 228, 225],
      "moccasin": [255, 228, 181],
      "navajowhite": [255, 222, 173],
      "navy": [0, 0, 128],
      "oldlace": [253, 245, 230],
      "olive": [128, 128, 0],
      "olivedrab": [107, 142, 35],
      "orange": [255, 165, 0],
      "orangered": [255, 69, 0],
      "orchid": [218, 112, 214],
      "palegoldenrod": [238, 232, 170],
      "palegreen": [152, 251, 152],
      "paleturquoise": [175, 238, 238],
      "palevioletred": [219, 112, 147],
      "papayawhip": [255, 239, 213],
      "peachpuff": [255, 218, 185],
      "peru": [205, 133, 63],
      "pink": [255, 192, 203],
      "plum": [221, 160, 221],
      "powderblue": [176, 224, 230],
      "purple": [128, 0, 128],
      "rebeccapurple": [102, 51, 153],
      "red": [255, 0, 0],
      "rosybrown": [188, 143, 143],
      "royalblue": [65, 105, 225],
      "saddlebrown": [139, 69, 19],
      "salmon": [250, 128, 114],
      "sandybrown": [244, 164, 96],
      "seagreen": [46, 139, 87],
      "seashell": [255, 245, 238],
      "sienna": [160, 82, 45],
      "silver": [192, 192, 192],
      "skyblue": [135, 206, 235],
      "slateblue": [106, 90, 205],
      "slategray": [112, 128, 144],
      "slategrey": [112, 128, 144],
      "snow": [255, 250, 250],
      "springgreen": [0, 255, 127],
      "steelblue": [70, 130, 180],
      "tan": [210, 180, 140],
      "teal": [0, 128, 128],
      "thistle": [216, 191, 216],
      "tomato": [255, 99, 71],
      "turquoise": [64, 224, 208],
      "violet": [238, 130, 238],
      "wheat": [245, 222, 179],
      "white": [255, 255, 255],
      "whitesmoke": [245, 245, 245],
      "yellow": [255, 255, 0],
      "yellowgreen": [154, 205, 50]
    };
  }
});

// node_modules/color-convert/conversions.js
var require_conversions = __commonJS({
  "node_modules/color-convert/conversions.js"(exports2, module2) {
    var cssKeywords = require_color_name();
    var reverseKeywords = {};
    for (const key of Object.keys(cssKeywords)) {
      reverseKeywords[cssKeywords[key]] = key;
    }
    var convert = {
      rgb: { channels: 3, labels: "rgb" },
      hsl: { channels: 3, labels: "hsl" },
      hsv: { channels: 3, labels: "hsv" },
      hwb: { channels: 3, labels: "hwb" },
      cmyk: { channels: 4, labels: "cmyk" },
      xyz: { channels: 3, labels: "xyz" },
      lab: { channels: 3, labels: "lab" },
      lch: { channels: 3, labels: "lch" },
      hex: { channels: 1, labels: ["hex"] },
      keyword: { channels: 1, labels: ["keyword"] },
      ansi16: { channels: 1, labels: ["ansi16"] },
      ansi256: { channels: 1, labels: ["ansi256"] },
      hcg: { channels: 3, labels: ["h", "c", "g"] },
      apple: { channels: 3, labels: ["r16", "g16", "b16"] },
      gray: { channels: 1, labels: ["gray"] }
    };
    module2.exports = convert;
    for (const model of Object.keys(convert)) {
      if (!("channels" in convert[model])) {
        throw new Error("missing channels property: " + model);
      }
      if (!("labels" in convert[model])) {
        throw new Error("missing channel labels property: " + model);
      }
      if (convert[model].labels.length !== convert[model].channels) {
        throw new Error("channel and label counts mismatch: " + model);
      }
      const { channels, labels } = convert[model];
      delete convert[model].channels;
      delete convert[model].labels;
      Object.defineProperty(convert[model], "channels", { value: channels });
      Object.defineProperty(convert[model], "labels", { value: labels });
    }
    convert.rgb.hsl = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const min = Math.min(r, g, b);
      const max = Math.max(r, g, b);
      const delta = max - min;
      let h;
      let s;
      if (max === min) {
        h = 0;
      } else if (r === max) {
        h = (g - b) / delta;
      } else if (g === max) {
        h = 2 + (b - r) / delta;
      } else if (b === max) {
        h = 4 + (r - g) / delta;
      }
      h = Math.min(h * 60, 360);
      if (h < 0) {
        h += 360;
      }
      const l = (min + max) / 2;
      if (max === min) {
        s = 0;
      } else if (l <= 0.5) {
        s = delta / (max + min);
      } else {
        s = delta / (2 - max - min);
      }
      return [h, s * 100, l * 100];
    };
    convert.rgb.hsv = function(rgb) {
      let rdif;
      let gdif;
      let bdif;
      let h;
      let s;
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const v = Math.max(r, g, b);
      const diff = v - Math.min(r, g, b);
      const diffc = function(c) {
        return (v - c) / 6 / diff + 1 / 2;
      };
      if (diff === 0) {
        h = 0;
        s = 0;
      } else {
        s = diff / v;
        rdif = diffc(r);
        gdif = diffc(g);
        bdif = diffc(b);
        if (r === v) {
          h = bdif - gdif;
        } else if (g === v) {
          h = 1 / 3 + rdif - bdif;
        } else if (b === v) {
          h = 2 / 3 + gdif - rdif;
        }
        if (h < 0) {
          h += 1;
        } else if (h > 1) {
          h -= 1;
        }
      }
      return [
        h * 360,
        s * 100,
        v * 100
      ];
    };
    convert.rgb.hwb = function(rgb) {
      const r = rgb[0];
      const g = rgb[1];
      let b = rgb[2];
      const h = convert.rgb.hsl(rgb)[0];
      const w = 1 / 255 * Math.min(r, Math.min(g, b));
      b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
      return [h, w * 100, b * 100];
    };
    convert.rgb.cmyk = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const k = Math.min(1 - r, 1 - g, 1 - b);
      const c = (1 - r - k) / (1 - k) || 0;
      const m = (1 - g - k) / (1 - k) || 0;
      const y = (1 - b - k) / (1 - k) || 0;
      return [c * 100, m * 100, y * 100, k * 100];
    };
    function comparativeDistance(x, y) {
      return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
    }
    convert.rgb.keyword = function(rgb) {
      const reversed = reverseKeywords[rgb];
      if (reversed) {
        return reversed;
      }
      let currentClosestDistance = Infinity;
      let currentClosestKeyword;
      for (const keyword of Object.keys(cssKeywords)) {
        const value = cssKeywords[keyword];
        const distance = comparativeDistance(rgb, value);
        if (distance < currentClosestDistance) {
          currentClosestDistance = distance;
          currentClosestKeyword = keyword;
        }
      }
      return currentClosestKeyword;
    };
    convert.keyword.rgb = function(keyword) {
      return cssKeywords[keyword];
    };
    convert.rgb.xyz = function(rgb) {
      let r = rgb[0] / 255;
      let g = rgb[1] / 255;
      let b = rgb[2] / 255;
      r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
      g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
      b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
      const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
      const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
      const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
      return [x * 100, y * 100, z * 100];
    };
    convert.rgb.lab = function(rgb) {
      const xyz = convert.rgb.xyz(rgb);
      let x = xyz[0];
      let y = xyz[1];
      let z = xyz[2];
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
      const l = 116 * y - 16;
      const a = 500 * (x - y);
      const b = 200 * (y - z);
      return [l, a, b];
    };
    convert.hsl.rgb = function(hsl) {
      const h = hsl[0] / 360;
      const s = hsl[1] / 100;
      const l = hsl[2] / 100;
      let t2;
      let t3;
      let val;
      if (s === 0) {
        val = l * 255;
        return [val, val, val];
      }
      if (l < 0.5) {
        t2 = l * (1 + s);
      } else {
        t2 = l + s - l * s;
      }
      const t1 = 2 * l - t2;
      const rgb = [0, 0, 0];
      for (let i = 0; i < 3; i++) {
        t3 = h + 1 / 3 * -(i - 1);
        if (t3 < 0) {
          t3++;
        }
        if (t3 > 1) {
          t3--;
        }
        if (6 * t3 < 1) {
          val = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
          val = t2;
        } else if (3 * t3 < 2) {
          val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
          val = t1;
        }
        rgb[i] = val * 255;
      }
      return rgb;
    };
    convert.hsl.hsv = function(hsl) {
      const h = hsl[0];
      let s = hsl[1] / 100;
      let l = hsl[2] / 100;
      let smin = s;
      const lmin = Math.max(l, 0.01);
      l *= 2;
      s *= l <= 1 ? l : 2 - l;
      smin *= lmin <= 1 ? lmin : 2 - lmin;
      const v = (l + s) / 2;
      const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
      return [h, sv * 100, v * 100];
    };
    convert.hsv.rgb = function(hsv) {
      const h = hsv[0] / 60;
      const s = hsv[1] / 100;
      let v = hsv[2] / 100;
      const hi = Math.floor(h) % 6;
      const f = h - Math.floor(h);
      const p = 255 * v * (1 - s);
      const q = 255 * v * (1 - s * f);
      const t = 255 * v * (1 - s * (1 - f));
      v *= 255;
      switch (hi) {
        case 0:
          return [v, t, p];
        case 1:
          return [q, v, p];
        case 2:
          return [p, v, t];
        case 3:
          return [p, q, v];
        case 4:
          return [t, p, v];
        case 5:
          return [v, p, q];
      }
    };
    convert.hsv.hsl = function(hsv) {
      const h = hsv[0];
      const s = hsv[1] / 100;
      const v = hsv[2] / 100;
      const vmin = Math.max(v, 0.01);
      let sl;
      let l;
      l = (2 - s) * v;
      const lmin = (2 - s) * vmin;
      sl = s * vmin;
      sl /= lmin <= 1 ? lmin : 2 - lmin;
      sl = sl || 0;
      l /= 2;
      return [h, sl * 100, l * 100];
    };
    convert.hwb.rgb = function(hwb) {
      const h = hwb[0] / 360;
      let wh = hwb[1] / 100;
      let bl = hwb[2] / 100;
      const ratio = wh + bl;
      let f;
      if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
      }
      const i = Math.floor(6 * h);
      const v = 1 - bl;
      f = 6 * h - i;
      if ((i & 1) !== 0) {
        f = 1 - f;
      }
      const n = wh + f * (v - wh);
      let r;
      let g;
      let b;
      switch (i) {
        default:
        case 6:
        case 0:
          r = v;
          g = n;
          b = wh;
          break;
        case 1:
          r = n;
          g = v;
          b = wh;
          break;
        case 2:
          r = wh;
          g = v;
          b = n;
          break;
        case 3:
          r = wh;
          g = n;
          b = v;
          break;
        case 4:
          r = n;
          g = wh;
          b = v;
          break;
        case 5:
          r = v;
          g = wh;
          b = n;
          break;
      }
      return [r * 255, g * 255, b * 255];
    };
    convert.cmyk.rgb = function(cmyk) {
      const c = cmyk[0] / 100;
      const m = cmyk[1] / 100;
      const y = cmyk[2] / 100;
      const k = cmyk[3] / 100;
      const r = 1 - Math.min(1, c * (1 - k) + k);
      const g = 1 - Math.min(1, m * (1 - k) + k);
      const b = 1 - Math.min(1, y * (1 - k) + k);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.rgb = function(xyz) {
      const x = xyz[0] / 100;
      const y = xyz[1] / 100;
      const z = xyz[2] / 100;
      let r;
      let g;
      let b;
      r = x * 3.2406 + y * -1.5372 + z * -0.4986;
      g = x * -0.9689 + y * 1.8758 + z * 0.0415;
      b = x * 0.0557 + y * -0.204 + z * 1.057;
      r = r > 31308e-7 ? 1.055 * r ** (1 / 2.4) - 0.055 : r * 12.92;
      g = g > 31308e-7 ? 1.055 * g ** (1 / 2.4) - 0.055 : g * 12.92;
      b = b > 31308e-7 ? 1.055 * b ** (1 / 2.4) - 0.055 : b * 12.92;
      r = Math.min(Math.max(0, r), 1);
      g = Math.min(Math.max(0, g), 1);
      b = Math.min(Math.max(0, b), 1);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.lab = function(xyz) {
      let x = xyz[0];
      let y = xyz[1];
      let z = xyz[2];
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
      const l = 116 * y - 16;
      const a = 500 * (x - y);
      const b = 200 * (y - z);
      return [l, a, b];
    };
    convert.lab.xyz = function(lab) {
      const l = lab[0];
      const a = lab[1];
      const b = lab[2];
      let x;
      let y;
      let z;
      y = (l + 16) / 116;
      x = a / 500 + y;
      z = y - b / 200;
      const y2 = y ** 3;
      const x2 = x ** 3;
      const z2 = z ** 3;
      y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
      x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
      z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
      x *= 95.047;
      y *= 100;
      z *= 108.883;
      return [x, y, z];
    };
    convert.lab.lch = function(lab) {
      const l = lab[0];
      const a = lab[1];
      const b = lab[2];
      let h;
      const hr = Math.atan2(b, a);
      h = hr * 360 / 2 / Math.PI;
      if (h < 0) {
        h += 360;
      }
      const c = Math.sqrt(a * a + b * b);
      return [l, c, h];
    };
    convert.lch.lab = function(lch) {
      const l = lch[0];
      const c = lch[1];
      const h = lch[2];
      const hr = h / 360 * 2 * Math.PI;
      const a = c * Math.cos(hr);
      const b = c * Math.sin(hr);
      return [l, a, b];
    };
    convert.rgb.ansi16 = function(args, saturation = null) {
      const [r, g, b] = args;
      let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation;
      value = Math.round(value / 50);
      if (value === 0) {
        return 30;
      }
      let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
      if (value === 2) {
        ansi += 60;
      }
      return ansi;
    };
    convert.hsv.ansi16 = function(args) {
      return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
    };
    convert.rgb.ansi256 = function(args) {
      const r = args[0];
      const g = args[1];
      const b = args[2];
      if (r === g && g === b) {
        if (r < 8) {
          return 16;
        }
        if (r > 248) {
          return 231;
        }
        return Math.round((r - 8) / 247 * 24) + 232;
      }
      const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
      return ansi;
    };
    convert.ansi16.rgb = function(args) {
      let color = args % 10;
      if (color === 0 || color === 7) {
        if (args > 50) {
          color += 3.5;
        }
        color = color / 10.5 * 255;
        return [color, color, color];
      }
      const mult = (~~(args > 50) + 1) * 0.5;
      const r = (color & 1) * mult * 255;
      const g = (color >> 1 & 1) * mult * 255;
      const b = (color >> 2 & 1) * mult * 255;
      return [r, g, b];
    };
    convert.ansi256.rgb = function(args) {
      if (args >= 232) {
        const c = (args - 232) * 10 + 8;
        return [c, c, c];
      }
      args -= 16;
      let rem;
      const r = Math.floor(args / 36) / 5 * 255;
      const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
      const b = rem % 6 / 5 * 255;
      return [r, g, b];
    };
    convert.rgb.hex = function(args) {
      const integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
      const string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.hex.rgb = function(args) {
      const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!match) {
        return [0, 0, 0];
      }
      let colorString = match[0];
      if (match[0].length === 3) {
        colorString = colorString.split("").map((char) => {
          return char + char;
        }).join("");
      }
      const integer = parseInt(colorString, 16);
      const r = integer >> 16 & 255;
      const g = integer >> 8 & 255;
      const b = integer & 255;
      return [r, g, b];
    };
    convert.rgb.hcg = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const max = Math.max(Math.max(r, g), b);
      const min = Math.min(Math.min(r, g), b);
      const chroma = max - min;
      let grayscale;
      let hue;
      if (chroma < 1) {
        grayscale = min / (1 - chroma);
      } else {
        grayscale = 0;
      }
      if (chroma <= 0) {
        hue = 0;
      } else if (max === r) {
        hue = (g - b) / chroma % 6;
      } else if (max === g) {
        hue = 2 + (b - r) / chroma;
      } else {
        hue = 4 + (r - g) / chroma;
      }
      hue /= 6;
      hue %= 1;
      return [hue * 360, chroma * 100, grayscale * 100];
    };
    convert.hsl.hcg = function(hsl) {
      const s = hsl[1] / 100;
      const l = hsl[2] / 100;
      const c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l);
      let f = 0;
      if (c < 1) {
        f = (l - 0.5 * c) / (1 - c);
      }
      return [hsl[0], c * 100, f * 100];
    };
    convert.hsv.hcg = function(hsv) {
      const s = hsv[1] / 100;
      const v = hsv[2] / 100;
      const c = s * v;
      let f = 0;
      if (c < 1) {
        f = (v - c) / (1 - c);
      }
      return [hsv[0], c * 100, f * 100];
    };
    convert.hcg.rgb = function(hcg) {
      const h = hcg[0] / 360;
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      if (c === 0) {
        return [g * 255, g * 255, g * 255];
      }
      const pure = [0, 0, 0];
      const hi = h % 1 * 6;
      const v = hi % 1;
      const w = 1 - v;
      let mg = 0;
      switch (Math.floor(hi)) {
        case 0:
          pure[0] = 1;
          pure[1] = v;
          pure[2] = 0;
          break;
        case 1:
          pure[0] = w;
          pure[1] = 1;
          pure[2] = 0;
          break;
        case 2:
          pure[0] = 0;
          pure[1] = 1;
          pure[2] = v;
          break;
        case 3:
          pure[0] = 0;
          pure[1] = w;
          pure[2] = 1;
          break;
        case 4:
          pure[0] = v;
          pure[1] = 0;
          pure[2] = 1;
          break;
        default:
          pure[0] = 1;
          pure[1] = 0;
          pure[2] = w;
      }
      mg = (1 - c) * g;
      return [
        (c * pure[0] + mg) * 255,
        (c * pure[1] + mg) * 255,
        (c * pure[2] + mg) * 255
      ];
    };
    convert.hcg.hsv = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const v = c + g * (1 - c);
      let f = 0;
      if (v > 0) {
        f = c / v;
      }
      return [hcg[0], f * 100, v * 100];
    };
    convert.hcg.hsl = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const l = g * (1 - c) + 0.5 * c;
      let s = 0;
      if (l > 0 && l < 0.5) {
        s = c / (2 * l);
      } else if (l >= 0.5 && l < 1) {
        s = c / (2 * (1 - l));
      }
      return [hcg[0], s * 100, l * 100];
    };
    convert.hcg.hwb = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const v = c + g * (1 - c);
      return [hcg[0], (v - c) * 100, (1 - v) * 100];
    };
    convert.hwb.hcg = function(hwb) {
      const w = hwb[1] / 100;
      const b = hwb[2] / 100;
      const v = 1 - b;
      const c = v - w;
      let g = 0;
      if (c < 1) {
        g = (v - c) / (1 - c);
      }
      return [hwb[0], c * 100, g * 100];
    };
    convert.apple.rgb = function(apple) {
      return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
    };
    convert.rgb.apple = function(rgb) {
      return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
    };
    convert.gray.rgb = function(args) {
      return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
    };
    convert.gray.hsl = function(args) {
      return [0, 0, args[0]];
    };
    convert.gray.hsv = convert.gray.hsl;
    convert.gray.hwb = function(gray) {
      return [0, 100, gray[0]];
    };
    convert.gray.cmyk = function(gray) {
      return [0, 0, 0, gray[0]];
    };
    convert.gray.lab = function(gray) {
      return [gray[0], 0, 0];
    };
    convert.gray.hex = function(gray) {
      const val = Math.round(gray[0] / 100 * 255) & 255;
      const integer = (val << 16) + (val << 8) + val;
      const string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.rgb.gray = function(rgb) {
      const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
      return [val / 255 * 100];
    };
  }
});

// node_modules/color-convert/route.js
var require_route = __commonJS({
  "node_modules/color-convert/route.js"(exports2, module2) {
    var conversions = require_conversions();
    function buildGraph() {
      const graph = {};
      const models = Object.keys(conversions);
      for (let len = models.length, i = 0; i < len; i++) {
        graph[models[i]] = {
          // http://jsperf.com/1-vs-infinity
          // micro-opt, but this is simple.
          distance: -1,
          parent: null
        };
      }
      return graph;
    }
    function deriveBFS(fromModel) {
      const graph = buildGraph();
      const queue = [fromModel];
      graph[fromModel].distance = 0;
      while (queue.length) {
        const current = queue.pop();
        const adjacents = Object.keys(conversions[current]);
        for (let len = adjacents.length, i = 0; i < len; i++) {
          const adjacent = adjacents[i];
          const node = graph[adjacent];
          if (node.distance === -1) {
            node.distance = graph[current].distance + 1;
            node.parent = current;
            queue.unshift(adjacent);
          }
        }
      }
      return graph;
    }
    function link(from, to) {
      return function(args) {
        return to(from(args));
      };
    }
    function wrapConversion(toModel, graph) {
      const path5 = [graph[toModel].parent, toModel];
      let fn = conversions[graph[toModel].parent][toModel];
      let cur = graph[toModel].parent;
      while (graph[cur].parent) {
        path5.unshift(graph[cur].parent);
        fn = link(conversions[graph[cur].parent][cur], fn);
        cur = graph[cur].parent;
      }
      fn.conversion = path5;
      return fn;
    }
    module2.exports = function(fromModel) {
      const graph = deriveBFS(fromModel);
      const conversion = {};
      const models = Object.keys(graph);
      for (let len = models.length, i = 0; i < len; i++) {
        const toModel = models[i];
        const node = graph[toModel];
        if (node.parent === null) {
          continue;
        }
        conversion[toModel] = wrapConversion(toModel, graph);
      }
      return conversion;
    };
  }
});

// node_modules/color-convert/index.js
var require_color_convert = __commonJS({
  "node_modules/color-convert/index.js"(exports2, module2) {
    var conversions = require_conversions();
    var route = require_route();
    var convert = {};
    var models = Object.keys(conversions);
    function wrapRaw(fn) {
      const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        return fn(args);
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    function wrapRounded(fn) {
      const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        const result = fn(args);
        if (typeof result === "object") {
          for (let len = result.length, i = 0; i < len; i++) {
            result[i] = Math.round(result[i]);
          }
        }
        return result;
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    models.forEach((fromModel) => {
      convert[fromModel] = {};
      Object.defineProperty(convert[fromModel], "channels", { value: conversions[fromModel].channels });
      Object.defineProperty(convert[fromModel], "labels", { value: conversions[fromModel].labels });
      const routes = route(fromModel);
      const routeModels = Object.keys(routes);
      routeModels.forEach((toModel) => {
        const fn = routes[toModel];
        convert[fromModel][toModel] = wrapRounded(fn);
        convert[fromModel][toModel].raw = wrapRaw(fn);
      });
    });
    module2.exports = convert;
  }
});

// node_modules/ansi-styles/index.js
var require_ansi_styles = __commonJS({
  "node_modules/ansi-styles/index.js"(exports2, module2) {
    "use strict";
    var wrapAnsi16 = (fn, offset) => (...args) => {
      const code = fn(...args);
      return `\x1B[${code + offset}m`;
    };
    var wrapAnsi256 = (fn, offset) => (...args) => {
      const code = fn(...args);
      return `\x1B[${38 + offset};5;${code}m`;
    };
    var wrapAnsi16m = (fn, offset) => (...args) => {
      const rgb = fn(...args);
      return `\x1B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
    };
    var ansi2ansi = (n) => n;
    var rgb2rgb = (r, g, b) => [r, g, b];
    var setLazyProperty = (object, property, get) => {
      Object.defineProperty(object, property, {
        get: () => {
          const value = get();
          Object.defineProperty(object, property, {
            value,
            enumerable: true,
            configurable: true
          });
          return value;
        },
        enumerable: true,
        configurable: true
      });
    };
    var colorConvert;
    var makeDynamicStyles = (wrap, targetSpace, identity, isBackground) => {
      if (colorConvert === void 0) {
        colorConvert = require_color_convert();
      }
      const offset = isBackground ? 10 : 0;
      const styles = {};
      for (const [sourceSpace, suite] of Object.entries(colorConvert)) {
        const name = sourceSpace === "ansi16" ? "ansi" : sourceSpace;
        if (sourceSpace === targetSpace) {
          styles[name] = wrap(identity, offset);
        } else if (typeof suite === "object") {
          styles[name] = wrap(suite[targetSpace], offset);
        }
      }
      return styles;
    };
    function assembleStyles() {
      const codes = /* @__PURE__ */ new Map();
      const styles = {
        modifier: {
          reset: [0, 0],
          // 21 isn't widely supported and 22 does the same thing
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29]
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          // Bright color
          blackBright: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39]
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          // Bright color
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49]
        }
      };
      styles.color.gray = styles.color.blackBright;
      styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
      styles.color.grey = styles.color.blackBright;
      styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;
      for (const [groupName, group] of Object.entries(styles)) {
        for (const [styleName, style] of Object.entries(group)) {
          styles[styleName] = {
            open: `\x1B[${style[0]}m`,
            close: `\x1B[${style[1]}m`
          };
          group[styleName] = styles[styleName];
          codes.set(style[0], style[1]);
        }
        Object.defineProperty(styles, groupName, {
          value: group,
          enumerable: false
        });
      }
      Object.defineProperty(styles, "codes", {
        value: codes,
        enumerable: false
      });
      styles.color.close = "\x1B[39m";
      styles.bgColor.close = "\x1B[49m";
      setLazyProperty(styles.color, "ansi", () => makeDynamicStyles(wrapAnsi16, "ansi16", ansi2ansi, false));
      setLazyProperty(styles.color, "ansi256", () => makeDynamicStyles(wrapAnsi256, "ansi256", ansi2ansi, false));
      setLazyProperty(styles.color, "ansi16m", () => makeDynamicStyles(wrapAnsi16m, "rgb", rgb2rgb, false));
      setLazyProperty(styles.bgColor, "ansi", () => makeDynamicStyles(wrapAnsi16, "ansi16", ansi2ansi, true));
      setLazyProperty(styles.bgColor, "ansi256", () => makeDynamicStyles(wrapAnsi256, "ansi256", ansi2ansi, true));
      setLazyProperty(styles.bgColor, "ansi16m", () => makeDynamicStyles(wrapAnsi16m, "rgb", rgb2rgb, true));
      return styles;
    }
    Object.defineProperty(module2, "exports", {
      enumerable: true,
      get: assembleStyles
    });
  }
});

// node_modules/has-flag/index.js
var require_has_flag = __commonJS({
  "node_modules/has-flag/index.js"(exports2, module2) {
    "use strict";
    module2.exports = (flag, argv = process.argv) => {
      const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
      const position = argv.indexOf(prefix + flag);
      const terminatorPosition = argv.indexOf("--");
      return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
    };
  }
});

// node_modules/supports-color/index.js
var require_supports_color = __commonJS({
  "node_modules/supports-color/index.js"(exports2, module2) {
    "use strict";
    var os2 = require("os");
    var tty = require("tty");
    var hasFlag = require_has_flag();
    var { env } = process;
    var forceColor;
    if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
      forceColor = 0;
    } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
      forceColor = 1;
    }
    if ("FORCE_COLOR" in env) {
      if (env.FORCE_COLOR === "true") {
        forceColor = 1;
      } else if (env.FORCE_COLOR === "false") {
        forceColor = 0;
      } else {
        forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
      }
    }
    function translateLevel(level) {
      if (level === 0) {
        return false;
      }
      return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
      };
    }
    function supportsColor(haveStream, streamIsTTY) {
      if (forceColor === 0) {
        return 0;
      }
      if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
        return 3;
      }
      if (hasFlag("color=256")) {
        return 2;
      }
      if (haveStream && !streamIsTTY && forceColor === void 0) {
        return 0;
      }
      const min = forceColor || 0;
      if (env.TERM === "dumb") {
        return min;
      }
      if (process.platform === "win32") {
        const osRelease = os2.release().split(".");
        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
          return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
      }
      if ("CI" in env) {
        if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
          return 1;
        }
        return min;
      }
      if ("TEAMCITY_VERSION" in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
      }
      if (env.COLORTERM === "truecolor") {
        return 3;
      }
      if ("TERM_PROGRAM" in env) {
        const version2 = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (env.TERM_PROGRAM) {
          case "iTerm.app":
            return version2 >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
      }
      if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
      }
      if ("COLORTERM" in env) {
        return 1;
      }
      return min;
    }
    function getSupportLevel(stream) {
      const level = supportsColor(stream, stream && stream.isTTY);
      return translateLevel(level);
    }
    module2.exports = {
      supportsColor: getSupportLevel,
      stdout: translateLevel(supportsColor(true, tty.isatty(1))),
      stderr: translateLevel(supportsColor(true, tty.isatty(2)))
    };
  }
});

// node_modules/chalk/source/util.js
var require_util = __commonJS({
  "node_modules/chalk/source/util.js"(exports2, module2) {
    "use strict";
    var stringReplaceAll = (string, substring, replacer) => {
      let index = string.indexOf(substring);
      if (index === -1) {
        return string;
      }
      const substringLength = substring.length;
      let endIndex = 0;
      let returnValue = "";
      do {
        returnValue += string.substr(endIndex, index - endIndex) + substring + replacer;
        endIndex = index + substringLength;
        index = string.indexOf(substring, endIndex);
      } while (index !== -1);
      returnValue += string.substr(endIndex);
      return returnValue;
    };
    var stringEncaseCRLFWithFirstIndex = (string, prefix, postfix, index) => {
      let endIndex = 0;
      let returnValue = "";
      do {
        const gotCR = string[index - 1] === "\r";
        returnValue += string.substr(endIndex, (gotCR ? index - 1 : index) - endIndex) + prefix + (gotCR ? "\r\n" : "\n") + postfix;
        endIndex = index + 1;
        index = string.indexOf("\n", endIndex);
      } while (index !== -1);
      returnValue += string.substr(endIndex);
      return returnValue;
    };
    module2.exports = {
      stringReplaceAll,
      stringEncaseCRLFWithFirstIndex
    };
  }
});

// node_modules/chalk/source/templates.js
var require_templates = __commonJS({
  "node_modules/chalk/source/templates.js"(exports2, module2) {
    "use strict";
    var TEMPLATE_REGEX = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
    var STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
    var STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
    var ESCAPE_REGEX = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi;
    var ESCAPES = /* @__PURE__ */ new Map([
      ["n", "\n"],
      ["r", "\r"],
      ["t", "	"],
      ["b", "\b"],
      ["f", "\f"],
      ["v", "\v"],
      ["0", "\0"],
      ["\\", "\\"],
      ["e", "\x1B"],
      ["a", "\x07"]
    ]);
    function unescape(c) {
      const u = c[0] === "u";
      const bracket = c[1] === "{";
      if (u && !bracket && c.length === 5 || c[0] === "x" && c.length === 3) {
        return String.fromCharCode(parseInt(c.slice(1), 16));
      }
      if (u && bracket) {
        return String.fromCodePoint(parseInt(c.slice(2, -1), 16));
      }
      return ESCAPES.get(c) || c;
    }
    function parseArguments(name, arguments_) {
      const results = [];
      const chunks = arguments_.trim().split(/\s*,\s*/g);
      let matches;
      for (const chunk of chunks) {
        const number = Number(chunk);
        if (!Number.isNaN(number)) {
          results.push(number);
        } else if (matches = chunk.match(STRING_REGEX)) {
          results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, character) => escape ? unescape(escape) : character));
        } else {
          throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
        }
      }
      return results;
    }
    function parseStyle(style) {
      STYLE_REGEX.lastIndex = 0;
      const results = [];
      let matches;
      while ((matches = STYLE_REGEX.exec(style)) !== null) {
        const name = matches[1];
        if (matches[2]) {
          const args = parseArguments(name, matches[2]);
          results.push([name].concat(args));
        } else {
          results.push([name]);
        }
      }
      return results;
    }
    function buildStyle(chalk3, styles) {
      const enabled = {};
      for (const layer of styles) {
        for (const style of layer.styles) {
          enabled[style[0]] = layer.inverse ? null : style.slice(1);
        }
      }
      let current = chalk3;
      for (const [styleName, styles2] of Object.entries(enabled)) {
        if (!Array.isArray(styles2)) {
          continue;
        }
        if (!(styleName in current)) {
          throw new Error(`Unknown Chalk style: ${styleName}`);
        }
        current = styles2.length > 0 ? current[styleName](...styles2) : current[styleName];
      }
      return current;
    }
    module2.exports = (chalk3, temporary) => {
      const styles = [];
      const chunks = [];
      let chunk = [];
      temporary.replace(TEMPLATE_REGEX, (m, escapeCharacter, inverse, style, close, character) => {
        if (escapeCharacter) {
          chunk.push(unescape(escapeCharacter));
        } else if (style) {
          const string = chunk.join("");
          chunk = [];
          chunks.push(styles.length === 0 ? string : buildStyle(chalk3, styles)(string));
          styles.push({ inverse, styles: parseStyle(style) });
        } else if (close) {
          if (styles.length === 0) {
            throw new Error("Found extraneous } in Chalk template literal");
          }
          chunks.push(buildStyle(chalk3, styles)(chunk.join("")));
          chunk = [];
          styles.pop();
        } else {
          chunk.push(character);
        }
      });
      chunks.push(chunk.join(""));
      if (styles.length > 0) {
        const errMessage = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? "" : "s"} (\`}\`)`;
        throw new Error(errMessage);
      }
      return chunks.join("");
    };
  }
});

// node_modules/chalk/source/index.js
var require_source = __commonJS({
  "node_modules/chalk/source/index.js"(exports2, module2) {
    "use strict";
    var ansiStyles = require_ansi_styles();
    var { stdout: stdoutColor, stderr: stderrColor } = require_supports_color();
    var {
      stringReplaceAll,
      stringEncaseCRLFWithFirstIndex
    } = require_util();
    var { isArray } = Array;
    var levelMapping = [
      "ansi",
      "ansi",
      "ansi256",
      "ansi16m"
    ];
    var styles = /* @__PURE__ */ Object.create(null);
    var applyOptions = (object, options = {}) => {
      if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
        throw new Error("The `level` option should be an integer from 0 to 3");
      }
      const colorLevel = stdoutColor ? stdoutColor.level : 0;
      object.level = options.level === void 0 ? colorLevel : options.level;
    };
    var ChalkClass = class {
      constructor(options) {
        return chalkFactory(options);
      }
    };
    var chalkFactory = (options) => {
      const chalk4 = {};
      applyOptions(chalk4, options);
      chalk4.template = (...arguments_) => chalkTag(chalk4.template, ...arguments_);
      Object.setPrototypeOf(chalk4, Chalk.prototype);
      Object.setPrototypeOf(chalk4.template, chalk4);
      chalk4.template.constructor = () => {
        throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.");
      };
      chalk4.template.Instance = ChalkClass;
      return chalk4.template;
    };
    function Chalk(options) {
      return chalkFactory(options);
    }
    for (const [styleName, style] of Object.entries(ansiStyles)) {
      styles[styleName] = {
        get() {
          const builder = createBuilder(this, createStyler(style.open, style.close, this._styler), this._isEmpty);
          Object.defineProperty(this, styleName, { value: builder });
          return builder;
        }
      };
    }
    styles.visible = {
      get() {
        const builder = createBuilder(this, this._styler, true);
        Object.defineProperty(this, "visible", { value: builder });
        return builder;
      }
    };
    var usedModels = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
    for (const model of usedModels) {
      styles[model] = {
        get() {
          const { level } = this;
          return function(...arguments_) {
            const styler = createStyler(ansiStyles.color[levelMapping[level]][model](...arguments_), ansiStyles.color.close, this._styler);
            return createBuilder(this, styler, this._isEmpty);
          };
        }
      };
    }
    for (const model of usedModels) {
      const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
      styles[bgModel] = {
        get() {
          const { level } = this;
          return function(...arguments_) {
            const styler = createStyler(ansiStyles.bgColor[levelMapping[level]][model](...arguments_), ansiStyles.bgColor.close, this._styler);
            return createBuilder(this, styler, this._isEmpty);
          };
        }
      };
    }
    var proto = Object.defineProperties(() => {
    }, {
      ...styles,
      level: {
        enumerable: true,
        get() {
          return this._generator.level;
        },
        set(level) {
          this._generator.level = level;
        }
      }
    });
    var createStyler = (open, close, parent) => {
      let openAll;
      let closeAll;
      if (parent === void 0) {
        openAll = open;
        closeAll = close;
      } else {
        openAll = parent.openAll + open;
        closeAll = close + parent.closeAll;
      }
      return {
        open,
        close,
        openAll,
        closeAll,
        parent
      };
    };
    var createBuilder = (self, _styler, _isEmpty) => {
      const builder = (...arguments_) => {
        if (isArray(arguments_[0]) && isArray(arguments_[0].raw)) {
          return applyStyle(builder, chalkTag(builder, ...arguments_));
        }
        return applyStyle(builder, arguments_.length === 1 ? "" + arguments_[0] : arguments_.join(" "));
      };
      Object.setPrototypeOf(builder, proto);
      builder._generator = self;
      builder._styler = _styler;
      builder._isEmpty = _isEmpty;
      return builder;
    };
    var applyStyle = (self, string) => {
      if (self.level <= 0 || !string) {
        return self._isEmpty ? "" : string;
      }
      let styler = self._styler;
      if (styler === void 0) {
        return string;
      }
      const { openAll, closeAll } = styler;
      if (string.indexOf("\x1B") !== -1) {
        while (styler !== void 0) {
          string = stringReplaceAll(string, styler.close, styler.open);
          styler = styler.parent;
        }
      }
      const lfIndex = string.indexOf("\n");
      if (lfIndex !== -1) {
        string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
      }
      return openAll + string + closeAll;
    };
    var template;
    var chalkTag = (chalk4, ...strings) => {
      const [firstString] = strings;
      if (!isArray(firstString) || !isArray(firstString.raw)) {
        return strings.join(" ");
      }
      const arguments_ = strings.slice(1);
      const parts = [firstString.raw[0]];
      for (let i = 1; i < firstString.length; i++) {
        parts.push(
          String(arguments_[i - 1]).replace(/[{}\\]/g, "\\$&"),
          String(firstString.raw[i])
        );
      }
      if (template === void 0) {
        template = require_templates();
      }
      return template(chalk4, parts.join(""));
    };
    Object.defineProperties(Chalk.prototype, styles);
    var chalk3 = Chalk();
    chalk3.supportsColor = stdoutColor;
    chalk3.stderr = Chalk({ level: stderrColor ? stderrColor.level : 0 });
    chalk3.stderr.supportsColor = stderrColor;
    module2.exports = chalk3;
  }
});

// node_modules/invariant/invariant.js
var require_invariant = __commonJS({
  "node_modules/invariant/invariant.js"(exports2, module2) {
    "use strict";
    var NODE_ENV = process.env.NODE_ENV;
    var invariant5 = function(condition, format, a, b, c, d, e, f) {
      if (NODE_ENV !== "production") {
        if (format === void 0) {
          throw new Error("invariant requires an error message argument");
        }
      }
      if (!condition) {
        var error;
        if (format === void 0) {
          error = new Error(
            "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
          );
        } else {
          var args = [a, b, c, d, e, f];
          var argIndex = 0;
          error = new Error(
            format.replace(/%s/g, function() {
              return args[argIndex++];
            })
          );
          error.name = "Invariant Violation";
        }
        error.framesToPop = 1;
        throw error;
      }
    };
    module2.exports = invariant5;
  }
});

// node_modules/asap/raw.js
var require_raw = __commonJS({
  "node_modules/asap/raw.js"(exports2, module2) {
    "use strict";
    var domain;
    var hasSetImmediate = typeof setImmediate === "function";
    module2.exports = rawAsap;
    function rawAsap(task) {
      if (!queue.length) {
        requestFlush();
        flushing = true;
      }
      queue[queue.length] = task;
    }
    var queue = [];
    var flushing = false;
    var index = 0;
    var capacity = 1024;
    function flush() {
      while (index < queue.length) {
        var currentIndex = index;
        index = index + 1;
        queue[currentIndex].call();
        if (index > capacity) {
          for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
            queue[scan] = queue[scan + index];
          }
          queue.length -= index;
          index = 0;
        }
      }
      queue.length = 0;
      index = 0;
      flushing = false;
    }
    rawAsap.requestFlush = requestFlush;
    function requestFlush() {
      var parentDomain = process.domain;
      if (parentDomain) {
        if (!domain) {
          domain = require("domain");
        }
        domain.active = process.domain = null;
      }
      if (flushing && hasSetImmediate) {
        setImmediate(flush);
      } else {
        process.nextTick(flush);
      }
      if (parentDomain) {
        domain.active = process.domain = parentDomain;
      }
    }
  }
});

// node_modules/promise/lib/core.js
var require_core = __commonJS({
  "node_modules/promise/lib/core.js"(exports2, module2) {
    "use strict";
    var asap = require_raw();
    function noop() {
    }
    var LAST_ERROR = null;
    var IS_ERROR = {};
    function getThen(obj) {
      try {
        return obj.then;
      } catch (ex) {
        LAST_ERROR = ex;
        return IS_ERROR;
      }
    }
    function tryCallOne(fn, a) {
      try {
        return fn(a);
      } catch (ex) {
        LAST_ERROR = ex;
        return IS_ERROR;
      }
    }
    function tryCallTwo(fn, a, b) {
      try {
        fn(a, b);
      } catch (ex) {
        LAST_ERROR = ex;
        return IS_ERROR;
      }
    }
    module2.exports = Promise2;
    function Promise2(fn) {
      if (typeof this !== "object") {
        throw new TypeError("Promises must be constructed via new");
      }
      if (typeof fn !== "function") {
        throw new TypeError("Promise constructor's argument is not a function");
      }
      this._x = 0;
      this._y = 0;
      this._z = null;
      this._A = null;
      if (fn === noop) return;
      doResolve(fn, this);
    }
    Promise2._B = null;
    Promise2._C = null;
    Promise2._D = noop;
    Promise2.prototype.then = function(onFulfilled, onRejected) {
      if (this.constructor !== Promise2) {
        return safeThen(this, onFulfilled, onRejected);
      }
      var res = new Promise2(noop);
      handle(this, new Handler(onFulfilled, onRejected, res));
      return res;
    };
    function safeThen(self, onFulfilled, onRejected) {
      return new self.constructor(function(resolve3, reject2) {
        var res = new Promise2(noop);
        res.then(resolve3, reject2);
        handle(self, new Handler(onFulfilled, onRejected, res));
      });
    }
    function handle(self, deferred) {
      while (self._y === 3) {
        self = self._z;
      }
      if (Promise2._B) {
        Promise2._B(self);
      }
      if (self._y === 0) {
        if (self._x === 0) {
          self._x = 1;
          self._A = deferred;
          return;
        }
        if (self._x === 1) {
          self._x = 2;
          self._A = [self._A, deferred];
          return;
        }
        self._A.push(deferred);
        return;
      }
      handleResolved(self, deferred);
    }
    function handleResolved(self, deferred) {
      asap(function() {
        var cb = self._y === 1 ? deferred.onFulfilled : deferred.onRejected;
        if (cb === null) {
          if (self._y === 1) {
            resolve2(deferred.promise, self._z);
          } else {
            reject(deferred.promise, self._z);
          }
          return;
        }
        var ret = tryCallOne(cb, self._z);
        if (ret === IS_ERROR) {
          reject(deferred.promise, LAST_ERROR);
        } else {
          resolve2(deferred.promise, ret);
        }
      });
    }
    function resolve2(self, newValue) {
      if (newValue === self) {
        return reject(
          self,
          new TypeError("A promise cannot be resolved with itself.")
        );
      }
      if (newValue && (typeof newValue === "object" || typeof newValue === "function")) {
        var then = getThen(newValue);
        if (then === IS_ERROR) {
          return reject(self, LAST_ERROR);
        }
        if (then === self.then && newValue instanceof Promise2) {
          self._y = 3;
          self._z = newValue;
          finale(self);
          return;
        } else if (typeof then === "function") {
          doResolve(then.bind(newValue), self);
          return;
        }
      }
      self._y = 1;
      self._z = newValue;
      finale(self);
    }
    function reject(self, newValue) {
      self._y = 2;
      self._z = newValue;
      if (Promise2._C) {
        Promise2._C(self, newValue);
      }
      finale(self);
    }
    function finale(self) {
      if (self._x === 1) {
        handle(self, self._A);
        self._A = null;
      }
      if (self._x === 2) {
        for (var i = 0; i < self._A.length; i++) {
          handle(self, self._A[i]);
        }
        self._A = null;
      }
    }
    function Handler(onFulfilled, onRejected, promise) {
      this.onFulfilled = typeof onFulfilled === "function" ? onFulfilled : null;
      this.onRejected = typeof onRejected === "function" ? onRejected : null;
      this.promise = promise;
    }
    function doResolve(fn, promise) {
      var done = false;
      var res = tryCallTwo(fn, function(value) {
        if (done) return;
        done = true;
        resolve2(promise, value);
      }, function(reason) {
        if (done) return;
        done = true;
        reject(promise, reason);
      });
      if (!done && res === IS_ERROR) {
        done = true;
        reject(promise, LAST_ERROR);
      }
    }
  }
});

// node_modules/promise/lib/done.js
var require_done = __commonJS({
  "node_modules/promise/lib/done.js"(exports2, module2) {
    "use strict";
    var Promise2 = require_core();
    module2.exports = Promise2;
    Promise2.prototype.done = function(onFulfilled, onRejected) {
      var self = arguments.length ? this.then.apply(this, arguments) : this;
      self.then(null, function(err) {
        setTimeout(function() {
          throw err;
        }, 0);
      });
    };
  }
});

// node_modules/promise/lib/finally.js
var require_finally = __commonJS({
  "node_modules/promise/lib/finally.js"(exports2, module2) {
    "use strict";
    var Promise2 = require_core();
    module2.exports = Promise2;
    Promise2.prototype.finally = function(f) {
      return this.then(function(value) {
        return Promise2.resolve(f()).then(function() {
          return value;
        });
      }, function(err) {
        return Promise2.resolve(f()).then(function() {
          throw err;
        });
      });
    };
  }
});

// node_modules/promise/lib/es6-extensions.js
var require_es6_extensions = __commonJS({
  "node_modules/promise/lib/es6-extensions.js"(exports2, module2) {
    "use strict";
    var Promise2 = require_core();
    module2.exports = Promise2;
    var TRUE = valuePromise(true);
    var FALSE = valuePromise(false);
    var NULL = valuePromise(null);
    var UNDEFINED = valuePromise(void 0);
    var ZERO = valuePromise(0);
    var EMPTYSTRING = valuePromise("");
    function valuePromise(value) {
      var p = new Promise2(Promise2._D);
      p._y = 1;
      p._z = value;
      return p;
    }
    Promise2.resolve = function(value) {
      if (value instanceof Promise2) return value;
      if (value === null) return NULL;
      if (value === void 0) return UNDEFINED;
      if (value === true) return TRUE;
      if (value === false) return FALSE;
      if (value === 0) return ZERO;
      if (value === "") return EMPTYSTRING;
      if (typeof value === "object" || typeof value === "function") {
        try {
          var then = value.then;
          if (typeof then === "function") {
            return new Promise2(then.bind(value));
          }
        } catch (ex) {
          return new Promise2(function(resolve2, reject) {
            reject(ex);
          });
        }
      }
      return valuePromise(value);
    };
    var iterableToArray = function(iterable) {
      if (typeof Array.from === "function") {
        iterableToArray = Array.from;
        return Array.from(iterable);
      }
      iterableToArray = function(x) {
        return Array.prototype.slice.call(x);
      };
      return Array.prototype.slice.call(iterable);
    };
    Promise2.all = function(arr) {
      var args = iterableToArray(arr);
      return new Promise2(function(resolve2, reject) {
        if (args.length === 0) return resolve2([]);
        var remaining = args.length;
        function res(i2, val) {
          if (val && (typeof val === "object" || typeof val === "function")) {
            if (val instanceof Promise2 && val.then === Promise2.prototype.then) {
              while (val._y === 3) {
                val = val._z;
              }
              if (val._y === 1) return res(i2, val._z);
              if (val._y === 2) reject(val._z);
              val.then(function(val2) {
                res(i2, val2);
              }, reject);
              return;
            } else {
              var then = val.then;
              if (typeof then === "function") {
                var p = new Promise2(then.bind(val));
                p.then(function(val2) {
                  res(i2, val2);
                }, reject);
                return;
              }
            }
          }
          args[i2] = val;
          if (--remaining === 0) {
            resolve2(args);
          }
        }
        for (var i = 0; i < args.length; i++) {
          res(i, args[i]);
        }
      });
    };
    function onSettledFulfill(value) {
      return { status: "fulfilled", value };
    }
    function onSettledReject(reason) {
      return { status: "rejected", reason };
    }
    function mapAllSettled(item) {
      if (item && (typeof item === "object" || typeof item === "function")) {
        if (item instanceof Promise2 && item.then === Promise2.prototype.then) {
          return item.then(onSettledFulfill, onSettledReject);
        }
        var then = item.then;
        if (typeof then === "function") {
          return new Promise2(then.bind(item)).then(onSettledFulfill, onSettledReject);
        }
      }
      return onSettledFulfill(item);
    }
    Promise2.allSettled = function(iterable) {
      return Promise2.all(iterableToArray(iterable).map(mapAllSettled));
    };
    Promise2.reject = function(value) {
      return new Promise2(function(resolve2, reject) {
        reject(value);
      });
    };
    Promise2.race = function(values) {
      return new Promise2(function(resolve2, reject) {
        iterableToArray(values).forEach(function(value) {
          Promise2.resolve(value).then(resolve2, reject);
        });
      });
    };
    Promise2.prototype["catch"] = function(onRejected) {
      return this.then(null, onRejected);
    };
    function getAggregateError(errors) {
      if (typeof AggregateError === "function") {
        return new AggregateError(errors, "All promises were rejected");
      }
      var error = new Error("All promises were rejected");
      error.name = "AggregateError";
      error.errors = errors;
      return error;
    }
    Promise2.any = function promiseAny(values) {
      return new Promise2(function(resolve2, reject) {
        var promises = iterableToArray(values);
        var hasResolved = false;
        var rejectionReasons = [];
        function resolveOnce(value) {
          if (!hasResolved) {
            hasResolved = true;
            resolve2(value);
          }
        }
        function rejectionCheck(reason) {
          rejectionReasons.push(reason);
          if (rejectionReasons.length === promises.length) {
            reject(getAggregateError(rejectionReasons));
          }
        }
        if (promises.length === 0) {
          reject(getAggregateError(rejectionReasons));
        } else {
          promises.forEach(function(value) {
            Promise2.resolve(value).then(resolveOnce, rejectionCheck);
          });
        }
      });
    };
  }
});

// node_modules/asap/asap.js
var require_asap = __commonJS({
  "node_modules/asap/asap.js"(exports2, module2) {
    "use strict";
    var rawAsap = require_raw();
    var freeTasks = [];
    module2.exports = asap;
    function asap(task) {
      var rawTask;
      if (freeTasks.length) {
        rawTask = freeTasks.pop();
      } else {
        rawTask = new RawTask();
      }
      rawTask.task = task;
      rawTask.domain = process.domain;
      rawAsap(rawTask);
    }
    function RawTask() {
      this.task = null;
      this.domain = null;
    }
    RawTask.prototype.call = function() {
      if (this.domain) {
        this.domain.enter();
      }
      var threw = true;
      try {
        this.task.call();
        threw = false;
        if (this.domain) {
          this.domain.exit();
        }
      } finally {
        if (threw) {
          rawAsap.requestFlush();
        }
        this.task = null;
        this.domain = null;
        freeTasks.push(this);
      }
    };
  }
});

// node_modules/promise/lib/node-extensions.js
var require_node_extensions = __commonJS({
  "node_modules/promise/lib/node-extensions.js"(exports2, module2) {
    "use strict";
    var Promise2 = require_core();
    var asap = require_asap();
    module2.exports = Promise2;
    Promise2.denodeify = function(fn, argumentCount) {
      if (typeof argumentCount === "number" && argumentCount !== Infinity) {
        return denodeifyWithCount(fn, argumentCount);
      } else {
        return denodeifyWithoutCount(fn);
      }
    };
    var callbackFn = "function (err, res) {if (err) { rj(err); } else { rs(res); }}";
    function denodeifyWithCount(fn, argumentCount) {
      var args = [];
      for (var i = 0; i < argumentCount; i++) {
        args.push("a" + i);
      }
      var body = [
        "return function (" + args.join(",") + ") {",
        "var self = this;",
        "return new Promise(function (rs, rj) {",
        "var res = fn.call(",
        ["self"].concat(args).concat([callbackFn]).join(","),
        ");",
        "if (res &&",
        '(typeof res === "object" || typeof res === "function") &&',
        'typeof res.then === "function"',
        ") {rs(res);}",
        "});",
        "};"
      ].join("");
      return Function(["Promise", "fn"], body)(Promise2, fn);
    }
    function denodeifyWithoutCount(fn) {
      var fnLength = Math.max(fn.length - 1, 3);
      var args = [];
      for (var i = 0; i < fnLength; i++) {
        args.push("a" + i);
      }
      var body = [
        "return function (" + args.join(",") + ") {",
        "var self = this;",
        "var args;",
        "var argLength = arguments.length;",
        "if (arguments.length > " + fnLength + ") {",
        "args = new Array(arguments.length + 1);",
        "for (var i = 0; i < arguments.length; i++) {",
        "args[i] = arguments[i];",
        "}",
        "}",
        "return new Promise(function (rs, rj) {",
        "var cb = " + callbackFn + ";",
        "var res;",
        "switch (argLength) {",
        args.concat(["extra"]).map(function(_, index) {
          return "case " + index + ":res = fn.call(" + ["self"].concat(args.slice(0, index)).concat("cb").join(",") + ");break;";
        }).join(""),
        "default:",
        "args[argLength] = cb;",
        "res = fn.apply(self, args);",
        "}",
        "if (res &&",
        '(typeof res === "object" || typeof res === "function") &&',
        'typeof res.then === "function"',
        ") {rs(res);}",
        "});",
        "};"
      ].join("");
      return Function(
        ["Promise", "fn"],
        body
      )(Promise2, fn);
    }
    Promise2.nodeify = function(fn) {
      return function() {
        var args = Array.prototype.slice.call(arguments);
        var callback = typeof args[args.length - 1] === "function" ? args.pop() : null;
        var ctx = this;
        try {
          return fn.apply(this, arguments).nodeify(callback, ctx);
        } catch (ex) {
          if (callback === null || typeof callback == "undefined") {
            return new Promise2(function(resolve2, reject) {
              reject(ex);
            });
          } else {
            asap(function() {
              callback.call(ctx, ex);
            });
          }
        }
      };
    };
    Promise2.prototype.nodeify = function(callback, ctx) {
      if (typeof callback != "function") return this;
      this.then(function(value) {
        asap(function() {
          callback.call(ctx, null, value);
        });
      }, function(err) {
        asap(function() {
          callback.call(ctx, err);
        });
      });
    };
  }
});

// node_modules/promise/lib/synchronous.js
var require_synchronous = __commonJS({
  "node_modules/promise/lib/synchronous.js"(exports2, module2) {
    "use strict";
    var Promise2 = require_core();
    module2.exports = Promise2;
    Promise2.enableSynchronous = function() {
      Promise2.prototype.isPending = function() {
        return this.getState() == 0;
      };
      Promise2.prototype.isFulfilled = function() {
        return this.getState() == 1;
      };
      Promise2.prototype.isRejected = function() {
        return this.getState() == 2;
      };
      Promise2.prototype.getValue = function() {
        if (this._y === 3) {
          return this._z.getValue();
        }
        if (!this.isFulfilled()) {
          throw new Error("Cannot get a value of an unfulfilled promise.");
        }
        return this._z;
      };
      Promise2.prototype.getReason = function() {
        if (this._y === 3) {
          return this._z.getReason();
        }
        if (!this.isRejected()) {
          throw new Error("Cannot get a rejection reason of a non-rejected promise.");
        }
        return this._z;
      };
      Promise2.prototype.getState = function() {
        if (this._y === 3) {
          return this._z.getState();
        }
        if (this._y === -1 || this._y === -2) {
          return 0;
        }
        return this._y;
      };
    };
    Promise2.disableSynchronous = function() {
      Promise2.prototype.isPending = void 0;
      Promise2.prototype.isFulfilled = void 0;
      Promise2.prototype.isRejected = void 0;
      Promise2.prototype.getValue = void 0;
      Promise2.prototype.getReason = void 0;
      Promise2.prototype.getState = void 0;
    };
  }
});

// node_modules/promise/lib/index.js
var require_lib = __commonJS({
  "node_modules/promise/lib/index.js"(exports2, module2) {
    "use strict";
    module2.exports = require_core();
    require_done();
    require_finally();
    require_es6_extensions();
    require_node_extensions();
    require_synchronous();
  }
});

// node_modules/promise/index.js
var require_promise = __commonJS({
  "node_modules/promise/index.js"(exports2, module2) {
    "use strict";
    module2.exports = require_lib();
  }
});

// node_modules/minimist/index.js
var require_minimist = __commonJS({
  "node_modules/minimist/index.js"(exports2, module2) {
    "use strict";
    function hasKey(obj, keys) {
      var o = obj;
      keys.slice(0, -1).forEach(function(key2) {
        o = o[key2] || {};
      });
      var key = keys[keys.length - 1];
      return key in o;
    }
    function isNumber(x) {
      if (typeof x === "number") {
        return true;
      }
      if (/^0x[0-9a-f]+$/i.test(x)) {
        return true;
      }
      return /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(x);
    }
    function isConstructorOrProto(obj, key) {
      return key === "constructor" && typeof obj[key] === "function" || key === "__proto__";
    }
    module2.exports = function(args, opts) {
      if (!opts) {
        opts = {};
      }
      var flags = {
        bools: {},
        strings: {},
        unknownFn: null
      };
      if (typeof opts.unknown === "function") {
        flags.unknownFn = opts.unknown;
      }
      if (typeof opts.boolean === "boolean" && opts.boolean) {
        flags.allBools = true;
      } else {
        [].concat(opts.boolean).filter(Boolean).forEach(function(key2) {
          flags.bools[key2] = true;
        });
      }
      var aliases = {};
      function aliasIsBoolean(key2) {
        return aliases[key2].some(function(x) {
          return flags.bools[x];
        });
      }
      Object.keys(opts.alias || {}).forEach(function(key2) {
        aliases[key2] = [].concat(opts.alias[key2]);
        aliases[key2].forEach(function(x) {
          aliases[x] = [key2].concat(aliases[key2].filter(function(y) {
            return x !== y;
          }));
        });
      });
      [].concat(opts.string).filter(Boolean).forEach(function(key2) {
        flags.strings[key2] = true;
        if (aliases[key2]) {
          [].concat(aliases[key2]).forEach(function(k) {
            flags.strings[k] = true;
          });
        }
      });
      var defaults = opts.default || {};
      var argv = { _: [] };
      function argDefined(key2, arg2) {
        return flags.allBools && /^--[^=]+$/.test(arg2) || flags.strings[key2] || flags.bools[key2] || aliases[key2];
      }
      function setKey(obj, keys, value2) {
        var o = obj;
        for (var i2 = 0; i2 < keys.length - 1; i2++) {
          var key2 = keys[i2];
          if (isConstructorOrProto(o, key2)) {
            return;
          }
          if (o[key2] === void 0) {
            o[key2] = {};
          }
          if (o[key2] === Object.prototype || o[key2] === Number.prototype || o[key2] === String.prototype) {
            o[key2] = {};
          }
          if (o[key2] === Array.prototype) {
            o[key2] = [];
          }
          o = o[key2];
        }
        var lastKey = keys[keys.length - 1];
        if (isConstructorOrProto(o, lastKey)) {
          return;
        }
        if (o === Object.prototype || o === Number.prototype || o === String.prototype) {
          o = {};
        }
        if (o === Array.prototype) {
          o = [];
        }
        if (o[lastKey] === void 0 || flags.bools[lastKey] || typeof o[lastKey] === "boolean") {
          o[lastKey] = value2;
        } else if (Array.isArray(o[lastKey])) {
          o[lastKey].push(value2);
        } else {
          o[lastKey] = [o[lastKey], value2];
        }
      }
      function setArg(key2, val, arg2) {
        if (arg2 && flags.unknownFn && !argDefined(key2, arg2)) {
          if (flags.unknownFn(arg2) === false) {
            return;
          }
        }
        var value2 = !flags.strings[key2] && isNumber(val) ? Number(val) : val;
        setKey(argv, key2.split("."), value2);
        (aliases[key2] || []).forEach(function(x) {
          setKey(argv, x.split("."), value2);
        });
      }
      Object.keys(flags.bools).forEach(function(key2) {
        setArg(key2, defaults[key2] === void 0 ? false : defaults[key2]);
      });
      var notFlags = [];
      if (args.indexOf("--") !== -1) {
        notFlags = args.slice(args.indexOf("--") + 1);
        args = args.slice(0, args.indexOf("--"));
      }
      for (var i = 0; i < args.length; i++) {
        var arg = args[i];
        var key;
        var next;
        if (/^--.+=/.test(arg)) {
          var m = arg.match(/^--([^=]+)=([\s\S]*)$/);
          key = m[1];
          var value = m[2];
          if (flags.bools[key]) {
            value = value !== "false";
          }
          setArg(key, value, arg);
        } else if (/^--no-.+/.test(arg)) {
          key = arg.match(/^--no-(.+)/)[1];
          setArg(key, false, arg);
        } else if (/^--.+/.test(arg)) {
          key = arg.match(/^--(.+)/)[1];
          next = args[i + 1];
          if (next !== void 0 && !/^(-|--)[^-]/.test(next) && !flags.bools[key] && !flags.allBools && (aliases[key] ? !aliasIsBoolean(key) : true)) {
            setArg(key, next, arg);
            i += 1;
          } else if (/^(true|false)$/.test(next)) {
            setArg(key, next === "true", arg);
            i += 1;
          } else {
            setArg(key, flags.strings[key] ? "" : true, arg);
          }
        } else if (/^-[^-]+/.test(arg)) {
          var letters = arg.slice(1, -1).split("");
          var broken = false;
          for (var j = 0; j < letters.length; j++) {
            next = arg.slice(j + 2);
            if (next === "-") {
              setArg(letters[j], next, arg);
              continue;
            }
            if (/[A-Za-z]/.test(letters[j]) && next[0] === "=") {
              setArg(letters[j], next.slice(1), arg);
              broken = true;
              break;
            }
            if (/[A-Za-z]/.test(letters[j]) && /-?\d+(\.\d*)?(e-?\d+)?$/.test(next)) {
              setArg(letters[j], next, arg);
              broken = true;
              break;
            }
            if (letters[j + 1] && letters[j + 1].match(/\W/)) {
              setArg(letters[j], arg.slice(j + 2), arg);
              broken = true;
              break;
            } else {
              setArg(letters[j], flags.strings[letters[j]] ? "" : true, arg);
            }
          }
          key = arg.slice(-1)[0];
          if (!broken && key !== "-") {
            if (args[i + 1] && !/^(-|--)[^-]/.test(args[i + 1]) && !flags.bools[key] && (aliases[key] ? !aliasIsBoolean(key) : true)) {
              setArg(key, args[i + 1], arg);
              i += 1;
            } else if (args[i + 1] && /^(true|false)$/.test(args[i + 1])) {
              setArg(key, args[i + 1] === "true", arg);
              i += 1;
            } else {
              setArg(key, flags.strings[key] ? "" : true, arg);
            }
          }
        } else {
          if (!flags.unknownFn || flags.unknownFn(arg) !== false) {
            argv._.push(flags.strings._ || !isNumber(arg) ? arg : Number(arg));
          }
          if (opts.stopEarly) {
            argv._.push.apply(argv._, args.slice(i + 1));
            break;
          }
        }
      }
      Object.keys(defaults).forEach(function(k) {
        if (!hasKey(argv, k.split("."))) {
          setKey(argv, k.split("."), defaults[k]);
          (aliases[k] || []).forEach(function(x) {
            setKey(argv, x.split("."), defaults[k]);
          });
        }
      });
      if (opts["--"]) {
        argv["--"] = notFlags.slice();
      } else {
        notFlags.forEach(function(k) {
          argv._.push(k);
        });
      }
      return argv;
    };
  }
});

// node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/ms/index.js"(exports2, module2) {
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var y = d * 365.25;
    module2.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse2(val);
      } else if (type === "number" && isNaN(val) === false) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse2(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      if (ms >= d) {
        return Math.round(ms / d) + "d";
      }
      if (ms >= h) {
        return Math.round(ms / h) + "h";
      }
      if (ms >= m) {
        return Math.round(ms / m) + "m";
      }
      if (ms >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      return plural(ms, d, "day") || plural(ms, h, "hour") || plural(ms, m, "minute") || plural(ms, s, "second") || ms + " ms";
    }
    function plural(ms, n, name) {
      if (ms < n) {
        return;
      }
      if (ms < n * 1.5) {
        return Math.floor(ms / n) + " " + name;
      }
      return Math.ceil(ms / n) + " " + name + "s";
    }
  }
});

// node_modules/debug/src/debug.js
var require_debug = __commonJS({
  "node_modules/debug/src/debug.js"(exports2, module2) {
    exports2 = module2.exports = createDebug.debug = createDebug["default"] = createDebug;
    exports2.coerce = coerce;
    exports2.disable = disable;
    exports2.enable = enable;
    exports2.enabled = enabled;
    exports2.humanize = require_ms();
    exports2.names = [];
    exports2.skips = [];
    exports2.formatters = {};
    var prevTime;
    function selectColor(namespace) {
      var hash = 0, i;
      for (i in namespace) {
        hash = (hash << 5) - hash + namespace.charCodeAt(i);
        hash |= 0;
      }
      return exports2.colors[Math.abs(hash) % exports2.colors.length];
    }
    function createDebug(namespace) {
      function debug() {
        if (!debug.enabled) return;
        var self = debug;
        var curr = +/* @__PURE__ */ new Date();
        var ms = curr - (prevTime || curr);
        self.diff = ms;
        self.prev = prevTime;
        self.curr = curr;
        prevTime = curr;
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        args[0] = exports2.coerce(args[0]);
        if ("string" !== typeof args[0]) {
          args.unshift("%O");
        }
        var index = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
          if (match === "%%") return match;
          index++;
          var formatter = exports2.formatters[format];
          if ("function" === typeof formatter) {
            var val = args[index];
            match = formatter.call(self, val);
            args.splice(index, 1);
            index--;
          }
          return match;
        });
        exports2.formatArgs.call(self, args);
        var logFn = debug.log || exports2.log || console.log.bind(console);
        logFn.apply(self, args);
      }
      debug.namespace = namespace;
      debug.enabled = exports2.enabled(namespace);
      debug.useColors = exports2.useColors();
      debug.color = selectColor(namespace);
      if ("function" === typeof exports2.init) {
        exports2.init(debug);
      }
      return debug;
    }
    function enable(namespaces) {
      exports2.save(namespaces);
      exports2.names = [];
      exports2.skips = [];
      var split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
      var len = split.length;
      for (var i = 0; i < len; i++) {
        if (!split[i]) continue;
        namespaces = split[i].replace(/\*/g, ".*?");
        if (namespaces[0] === "-") {
          exports2.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
        } else {
          exports2.names.push(new RegExp("^" + namespaces + "$"));
        }
      }
    }
    function disable() {
      exports2.enable("");
    }
    function enabled(name) {
      var i, len;
      for (i = 0, len = exports2.skips.length; i < len; i++) {
        if (exports2.skips[i].test(name)) {
          return false;
        }
      }
      for (i = 0, len = exports2.names.length; i < len; i++) {
        if (exports2.names[i].test(name)) {
          return true;
        }
      }
      return false;
    }
    function coerce(val) {
      if (val instanceof Error) return val.stack || val.message;
      return val;
    }
  }
});

// node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "node_modules/debug/src/browser.js"(exports2, module2) {
    exports2 = module2.exports = require_debug();
    exports2.log = log;
    exports2.formatArgs = formatArgs;
    exports2.save = save;
    exports2.load = load;
    exports2.useColors = useColors;
    exports2.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : localstorage();
    exports2.colors = [
      "lightseagreen",
      "forestgreen",
      "goldenrod",
      "dodgerblue",
      "darkorchid",
      "crimson"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && window.process.type === "renderer") {
        return true;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    exports2.formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (err) {
        return "[UnexpectedJSONParseError]: " + err.message;
      }
    };
    function formatArgs(args) {
      var useColors2 = this.useColors;
      args[0] = (useColors2 ? "%c" : "") + this.namespace + (useColors2 ? " %c" : " ") + args[0] + (useColors2 ? "%c " : " ") + "+" + exports2.humanize(this.diff);
      if (!useColors2) return;
      var c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      var index = 0;
      var lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, function(match) {
        if ("%%" === match) return;
        index++;
        if ("%c" === match) {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    function log() {
      return "object" === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }
    function save(namespaces) {
      try {
        if (null == namespaces) {
          exports2.storage.removeItem("debug");
        } else {
          exports2.storage.debug = namespaces;
        }
      } catch (e) {
      }
    }
    function load() {
      var r;
      try {
        r = exports2.storage.debug;
      } catch (e) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    exports2.enable(load());
    function localstorage() {
      try {
        return window.localStorage;
      } catch (e) {
      }
    }
  }
});

// node_modules/debug/src/node.js
var require_node = __commonJS({
  "node_modules/debug/src/node.js"(exports2, module2) {
    var tty = require("tty");
    var util = require("util");
    exports2 = module2.exports = require_debug();
    exports2.init = init;
    exports2.log = log;
    exports2.formatArgs = formatArgs;
    exports2.save = save;
    exports2.load = load;
    exports2.useColors = useColors;
    exports2.colors = [6, 2, 3, 4, 5, 1];
    exports2.inspectOpts = Object.keys(process.env).filter(function(key) {
      return /^debug_/i.test(key);
    }).reduce(function(obj, key) {
      var prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, function(_, k) {
        return k.toUpperCase();
      });
      var val = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val)) val = true;
      else if (/^(no|off|false|disabled)$/i.test(val)) val = false;
      else if (val === "null") val = null;
      else val = Number(val);
      obj[prop] = val;
      return obj;
    }, {});
    var fd = parseInt(process.env.DEBUG_FD, 10) || 2;
    if (1 !== fd && 2 !== fd) {
      util.deprecate(function() {
      }, "except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)")();
    }
    var stream = 1 === fd ? process.stdout : 2 === fd ? process.stderr : createWritableStdioStream(fd);
    function useColors() {
      return "colors" in exports2.inspectOpts ? Boolean(exports2.inspectOpts.colors) : tty.isatty(fd);
    }
    exports2.formatters.o = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts).split("\n").map(function(str) {
        return str.trim();
      }).join(" ");
    };
    exports2.formatters.O = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts);
    };
    function formatArgs(args) {
      var name = this.namespace;
      var useColors2 = this.useColors;
      if (useColors2) {
        var c = this.color;
        var prefix = "  \x1B[3" + c + ";1m" + name + " \x1B[0m";
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push("\x1B[3" + c + "m+" + exports2.humanize(this.diff) + "\x1B[0m");
      } else {
        args[0] = (/* @__PURE__ */ new Date()).toUTCString() + " " + name + " " + args[0];
      }
    }
    function log() {
      return stream.write(util.format.apply(util, arguments) + "\n");
    }
    function save(namespaces) {
      if (null == namespaces) {
        delete process.env.DEBUG;
      } else {
        process.env.DEBUG = namespaces;
      }
    }
    function load() {
      return process.env.DEBUG;
    }
    function createWritableStdioStream(fd2) {
      var stream2;
      var tty_wrap = process.binding("tty_wrap");
      switch (tty_wrap.guessHandleType(fd2)) {
        case "TTY":
          stream2 = new tty.WriteStream(fd2);
          stream2._type = "tty";
          if (stream2._handle && stream2._handle.unref) {
            stream2._handle.unref();
          }
          break;
        case "FILE":
          var fs6 = require("fs");
          stream2 = new fs6.SyncWriteStream(fd2, { autoClose: false });
          stream2._type = "fs";
          break;
        case "PIPE":
        case "TCP":
          var net = require("net");
          stream2 = new net.Socket({
            fd: fd2,
            readable: false,
            writable: true
          });
          stream2.readable = false;
          stream2.read = null;
          stream2._type = "pipe";
          if (stream2._handle && stream2._handle.unref) {
            stream2._handle.unref();
          }
          break;
        default:
          throw new Error("Implement me. Unknown stream file type!");
      }
      stream2.fd = fd2;
      stream2._isStdio = true;
      return stream2;
    }
    function init(debug) {
      debug.inspectOpts = {};
      var keys = Object.keys(exports2.inspectOpts);
      for (var i = 0; i < keys.length; i++) {
        debug.inspectOpts[keys[i]] = exports2.inspectOpts[keys[i]];
      }
    }
    exports2.enable(load());
  }
});

// node_modules/debug/src/index.js
var require_src = __commonJS({
  "node_modules/debug/src/index.js"(exports2, module2) {
    if (typeof process !== "undefined" && process.type === "renderer") {
      module2.exports = require_browser();
    } else {
      module2.exports = require_node();
    }
  }
});

// node_modules/websocket/lib/utils.js
var require_utils = __commonJS({
  "node_modules/websocket/lib/utils.js"(exports2) {
    var noop = exports2.noop = function() {
    };
    exports2.extend = function extend(dest, source) {
      for (var prop in source) {
        dest[prop] = source[prop];
      }
    };
    exports2.eventEmitterListenerCount = require("events").EventEmitter.listenerCount || function(emitter, type) {
      return emitter.listeners(type).length;
    };
    exports2.bufferAllocUnsafe = Buffer.allocUnsafe ? Buffer.allocUnsafe : function oldBufferAllocUnsafe(size) {
      return new Buffer(size);
    };
    exports2.bufferFromString = Buffer.from ? Buffer.from : function oldBufferFromString(string, encoding) {
      return new Buffer(string, encoding);
    };
    exports2.BufferingLogger = function createBufferingLogger(identifier, uniqueID) {
      var logFunction = require_src()(identifier);
      if (logFunction.enabled) {
        var logger = new BufferingLogger(identifier, uniqueID, logFunction);
        var debug = logger.log.bind(logger);
        debug.printOutput = logger.printOutput.bind(logger);
        debug.enabled = logFunction.enabled;
        return debug;
      }
      logFunction.printOutput = noop;
      return logFunction;
    };
    function BufferingLogger(identifier, uniqueID, logFunction) {
      this.logFunction = logFunction;
      this.identifier = identifier;
      this.uniqueID = uniqueID;
      this.buffer = [];
    }
    BufferingLogger.prototype.log = function() {
      this.buffer.push([/* @__PURE__ */ new Date(), Array.prototype.slice.call(arguments)]);
      return this;
    };
    BufferingLogger.prototype.clear = function() {
      this.buffer = [];
      return this;
    };
    BufferingLogger.prototype.printOutput = function(logFunction) {
      if (!logFunction) {
        logFunction = this.logFunction;
      }
      var uniqueID = this.uniqueID;
      this.buffer.forEach(function(entry) {
        var date = entry[0].toLocaleString();
        var args = entry[1].slice();
        var formatString = args[0];
        if (formatString !== void 0 && formatString !== null) {
          formatString = "%s - %s - " + formatString.toString();
          args.splice(0, 1, formatString, date, uniqueID);
          logFunction.apply(global, args);
        }
      });
    };
  }
});

// node_modules/bufferutil/fallback.js
var require_fallback = __commonJS({
  "node_modules/bufferutil/fallback.js"(exports2, module2) {
    "use strict";
    var mask = (source, mask2, output, offset, length) => {
      for (var i = 0; i < length; i++) {
        output[offset + i] = source[i] ^ mask2[i & 3];
      }
    };
    var unmask = (buffer, mask2) => {
      const length = buffer.length;
      for (var i = 0; i < length; i++) {
        buffer[i] ^= mask2[i & 3];
      }
    };
    module2.exports = { mask, unmask };
  }
});

// node_modules/websocket/lib/WebSocketFrame.js
var require_WebSocketFrame = __commonJS({
  "node_modules/websocket/lib/WebSocketFrame.js"(exports2, module2) {
    var bufferUtil = require_fallback();
    var bufferAllocUnsafe = require_utils().bufferAllocUnsafe;
    var DECODE_HEADER = 1;
    var WAITING_FOR_16_BIT_LENGTH = 2;
    var WAITING_FOR_64_BIT_LENGTH = 3;
    var WAITING_FOR_MASK_KEY = 4;
    var WAITING_FOR_PAYLOAD = 5;
    var COMPLETE = 6;
    function WebSocketFrame(maskBytes, frameHeader, config) {
      this.maskBytes = maskBytes;
      this.frameHeader = frameHeader;
      this.config = config;
      this.maxReceivedFrameSize = config.maxReceivedFrameSize;
      this.protocolError = false;
      this.frameTooLarge = false;
      this.invalidCloseFrameLength = false;
      this.parseState = DECODE_HEADER;
      this.closeStatus = -1;
    }
    WebSocketFrame.prototype.addData = function(bufferList) {
      if (this.parseState === DECODE_HEADER) {
        if (bufferList.length >= 2) {
          bufferList.joinInto(this.frameHeader, 0, 0, 2);
          bufferList.advance(2);
          var firstByte = this.frameHeader[0];
          var secondByte = this.frameHeader[1];
          this.fin = Boolean(firstByte & 128);
          this.rsv1 = Boolean(firstByte & 64);
          this.rsv2 = Boolean(firstByte & 32);
          this.rsv3 = Boolean(firstByte & 16);
          this.mask = Boolean(secondByte & 128);
          this.opcode = firstByte & 15;
          this.length = secondByte & 127;
          if (this.opcode >= 8) {
            if (this.length > 125) {
              this.protocolError = true;
              this.dropReason = "Illegal control frame longer than 125 bytes.";
              return true;
            }
            if (!this.fin) {
              this.protocolError = true;
              this.dropReason = "Control frames must not be fragmented.";
              return true;
            }
          }
          if (this.length === 126) {
            this.parseState = WAITING_FOR_16_BIT_LENGTH;
          } else if (this.length === 127) {
            this.parseState = WAITING_FOR_64_BIT_LENGTH;
          } else {
            this.parseState = WAITING_FOR_MASK_KEY;
          }
        }
      }
      if (this.parseState === WAITING_FOR_16_BIT_LENGTH) {
        if (bufferList.length >= 2) {
          bufferList.joinInto(this.frameHeader, 2, 0, 2);
          bufferList.advance(2);
          this.length = this.frameHeader.readUInt16BE(2);
          this.parseState = WAITING_FOR_MASK_KEY;
        }
      } else if (this.parseState === WAITING_FOR_64_BIT_LENGTH) {
        if (bufferList.length >= 8) {
          bufferList.joinInto(this.frameHeader, 2, 0, 8);
          bufferList.advance(8);
          var lengthPair = [
            this.frameHeader.readUInt32BE(2),
            this.frameHeader.readUInt32BE(2 + 4)
          ];
          if (lengthPair[0] !== 0) {
            this.protocolError = true;
            this.dropReason = "Unsupported 64-bit length frame received";
            return true;
          }
          this.length = lengthPair[1];
          this.parseState = WAITING_FOR_MASK_KEY;
        }
      }
      if (this.parseState === WAITING_FOR_MASK_KEY) {
        if (this.mask) {
          if (bufferList.length >= 4) {
            bufferList.joinInto(this.maskBytes, 0, 0, 4);
            bufferList.advance(4);
            this.parseState = WAITING_FOR_PAYLOAD;
          }
        } else {
          this.parseState = WAITING_FOR_PAYLOAD;
        }
      }
      if (this.parseState === WAITING_FOR_PAYLOAD) {
        if (this.length > this.maxReceivedFrameSize) {
          this.frameTooLarge = true;
          this.dropReason = "Frame size of " + this.length.toString(10) + " bytes exceeds maximum accepted frame size";
          return true;
        }
        if (this.length === 0) {
          this.binaryPayload = bufferAllocUnsafe(0);
          this.parseState = COMPLETE;
          return true;
        }
        if (bufferList.length >= this.length) {
          this.binaryPayload = bufferList.take(this.length);
          bufferList.advance(this.length);
          if (this.mask) {
            bufferUtil.unmask(this.binaryPayload, this.maskBytes);
          }
          if (this.opcode === 8) {
            if (this.length === 1) {
              this.binaryPayload = bufferAllocUnsafe(0);
              this.invalidCloseFrameLength = true;
            }
            if (this.length >= 2) {
              this.closeStatus = this.binaryPayload.readUInt16BE(0);
              this.binaryPayload = this.binaryPayload.slice(2);
            }
          }
          this.parseState = COMPLETE;
          return true;
        }
      }
      return false;
    };
    WebSocketFrame.prototype.throwAwayPayload = function(bufferList) {
      if (bufferList.length >= this.length) {
        bufferList.advance(this.length);
        this.parseState = COMPLETE;
        return true;
      }
      return false;
    };
    WebSocketFrame.prototype.toBuffer = function(nullMask) {
      var maskKey;
      var headerLength = 2;
      var data;
      var outputPos;
      var firstByte = 0;
      var secondByte = 0;
      if (this.fin) {
        firstByte |= 128;
      }
      if (this.rsv1) {
        firstByte |= 64;
      }
      if (this.rsv2) {
        firstByte |= 32;
      }
      if (this.rsv3) {
        firstByte |= 16;
      }
      if (this.mask) {
        secondByte |= 128;
      }
      firstByte |= this.opcode & 15;
      if (this.opcode === 8) {
        this.length = 2;
        if (this.binaryPayload) {
          this.length += this.binaryPayload.length;
        }
        data = bufferAllocUnsafe(this.length);
        data.writeUInt16BE(this.closeStatus, 0);
        if (this.length > 2) {
          this.binaryPayload.copy(data, 2);
        }
      } else if (this.binaryPayload) {
        data = this.binaryPayload;
        this.length = data.length;
      } else {
        this.length = 0;
      }
      if (this.length <= 125) {
        secondByte |= this.length & 127;
      } else if (this.length > 125 && this.length <= 65535) {
        secondByte |= 126;
        headerLength += 2;
      } else if (this.length > 65535) {
        secondByte |= 127;
        headerLength += 8;
      }
      var output = bufferAllocUnsafe(this.length + headerLength + (this.mask ? 4 : 0));
      output[0] = firstByte;
      output[1] = secondByte;
      outputPos = 2;
      if (this.length > 125 && this.length <= 65535) {
        output.writeUInt16BE(this.length, outputPos);
        outputPos += 2;
      } else if (this.length > 65535) {
        output.writeUInt32BE(0, outputPos);
        output.writeUInt32BE(this.length, outputPos + 4);
        outputPos += 8;
      }
      if (this.mask) {
        maskKey = nullMask ? 0 : Math.random() * 4294967295 >>> 0;
        this.maskBytes.writeUInt32BE(maskKey, 0);
        this.maskBytes.copy(output, outputPos);
        outputPos += 4;
        if (data) {
          bufferUtil.mask(data, this.maskBytes, output, outputPos, this.length);
        }
      } else if (data) {
        data.copy(output, outputPos);
      }
      return output;
    };
    WebSocketFrame.prototype.toString = function() {
      return "Opcode: " + this.opcode + ", fin: " + this.fin + ", length: " + this.length + ", hasPayload: " + Boolean(this.binaryPayload) + ", masked: " + this.mask;
    };
    module2.exports = WebSocketFrame;
  }
});

// node_modules/websocket/vendor/FastBufferList.js
var require_FastBufferList = __commonJS({
  "node_modules/websocket/vendor/FastBufferList.js"(exports2, module2) {
    var Buffer2 = require("buffer").Buffer;
    var EventEmitter2 = require("events").EventEmitter;
    var bufferAllocUnsafe = require_utils().bufferAllocUnsafe;
    module2.exports = BufferList;
    module2.exports.BufferList = BufferList;
    function BufferList(opts) {
      if (!(this instanceof BufferList)) return new BufferList(opts);
      EventEmitter2.call(this);
      var self = this;
      if (typeof opts == "undefined") opts = {};
      self.encoding = opts.encoding;
      var head = { next: null, buffer: null };
      var last = { next: null, buffer: null };
      var length = 0;
      self.__defineGetter__("length", function() {
        return length;
      });
      var offset = 0;
      self.write = function(buf) {
        if (!head.buffer) {
          head.buffer = buf;
          last = head;
        } else {
          last.next = { next: null, buffer: buf };
          last = last.next;
        }
        length += buf.length;
        self.emit("write", buf);
        return true;
      };
      self.end = function(buf) {
        if (Buffer2.isBuffer(buf)) self.write(buf);
      };
      self.push = function() {
        var args = [].concat.apply([], arguments);
        args.forEach(self.write);
        return self;
      };
      self.forEach = function(fn) {
        if (!head.buffer) return bufferAllocUnsafe(0);
        if (head.buffer.length - offset <= 0) return self;
        var firstBuf = head.buffer.slice(offset);
        var b = { buffer: firstBuf, next: head.next };
        while (b && b.buffer) {
          var r = fn(b.buffer);
          if (r) break;
          b = b.next;
        }
        return self;
      };
      self.join = function(start, end) {
        if (!head.buffer) return bufferAllocUnsafe(0);
        if (start == void 0) start = 0;
        if (end == void 0) end = self.length;
        var big = bufferAllocUnsafe(end - start);
        var ix = 0;
        self.forEach(function(buffer) {
          if (start < ix + buffer.length && ix < end) {
            buffer.copy(
              big,
              Math.max(0, ix - start),
              Math.max(0, start - ix),
              Math.min(buffer.length, end - ix)
            );
          }
          ix += buffer.length;
          if (ix > end) return true;
        });
        return big;
      };
      self.joinInto = function(targetBuffer, targetStart, sourceStart, sourceEnd) {
        if (!head.buffer) return new bufferAllocUnsafe(0);
        if (sourceStart == void 0) sourceStart = 0;
        if (sourceEnd == void 0) sourceEnd = self.length;
        var big = targetBuffer;
        if (big.length - targetStart < sourceEnd - sourceStart) {
          throw new Error("Insufficient space available in target Buffer.");
        }
        var ix = 0;
        self.forEach(function(buffer) {
          if (sourceStart < ix + buffer.length && ix < sourceEnd) {
            buffer.copy(
              big,
              Math.max(targetStart, targetStart + ix - sourceStart),
              Math.max(0, sourceStart - ix),
              Math.min(buffer.length, sourceEnd - ix)
            );
          }
          ix += buffer.length;
          if (ix > sourceEnd) return true;
        });
        return big;
      };
      self.advance = function(n) {
        offset += n;
        length -= n;
        while (head.buffer && offset >= head.buffer.length) {
          offset -= head.buffer.length;
          head = head.next ? head.next : { buffer: null, next: null };
        }
        if (head.buffer === null) last = { next: null, buffer: null };
        self.emit("advance", n);
        return self;
      };
      self.take = function(n, encoding) {
        if (n == void 0) n = self.length;
        else if (typeof n !== "number") {
          encoding = n;
          n = self.length;
        }
        var b = head;
        if (!encoding) encoding = self.encoding;
        if (encoding) {
          var acc = "";
          self.forEach(function(buffer) {
            if (n <= 0) return true;
            acc += buffer.toString(
              encoding,
              0,
              Math.min(n, buffer.length)
            );
            n -= buffer.length;
          });
          return acc;
        } else {
          return self.join(0, n);
        }
      };
      self.toString = function() {
        return self.take("binary");
      };
    }
    require("util").inherits(BufferList, EventEmitter2);
  }
});

// node_modules/utf-8-validate/fallback.js
var require_fallback2 = __commonJS({
  "node_modules/utf-8-validate/fallback.js"(exports2, module2) {
    "use strict";
    function isValidUTF8(buf) {
      const len = buf.length;
      let i = 0;
      while (i < len) {
        if ((buf[i] & 128) === 0) {
          i++;
        } else if ((buf[i] & 224) === 192) {
          if (i + 1 === len || (buf[i + 1] & 192) !== 128 || (buf[i] & 254) === 192) {
            return false;
          }
          i += 2;
        } else if ((buf[i] & 240) === 224) {
          if (i + 2 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || buf[i] === 224 && (buf[i + 1] & 224) === 128 || // overlong
          buf[i] === 237 && (buf[i + 1] & 224) === 160) {
            return false;
          }
          i += 3;
        } else if ((buf[i] & 248) === 240) {
          if (i + 3 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || (buf[i + 3] & 192) !== 128 || buf[i] === 240 && (buf[i + 1] & 240) === 128 || // overlong
          buf[i] === 244 && buf[i + 1] > 143 || buf[i] > 244) {
            return false;
          }
          i += 4;
        } else {
          return false;
        }
      }
      return true;
    }
    module2.exports = isValidUTF8;
  }
});

// node_modules/websocket/lib/WebSocketConnection.js
var require_WebSocketConnection = __commonJS({
  "node_modules/websocket/lib/WebSocketConnection.js"(exports2, module2) {
    var util = require("util");
    var utils = require_utils();
    var EventEmitter2 = require("events").EventEmitter;
    var WebSocketFrame = require_WebSocketFrame();
    var BufferList = require_FastBufferList();
    var isValidUTF8 = require_fallback2();
    var bufferAllocUnsafe = utils.bufferAllocUnsafe;
    var bufferFromString = utils.bufferFromString;
    var STATE_OPEN = "open";
    var STATE_PEER_REQUESTED_CLOSE = "peer_requested_close";
    var STATE_ENDING = "ending";
    var STATE_CLOSED = "closed";
    var setImmediateImpl = "setImmediate" in global ? global.setImmediate.bind(global) : process.nextTick.bind(process);
    var idCounter = 0;
    function WebSocketConnection(socket, extensions, protocol, maskOutgoingPackets, config) {
      this._debug = utils.BufferingLogger("websocket:connection", ++idCounter);
      this._debug("constructor");
      if (this._debug.enabled) {
        instrumentSocketForDebugging(this, socket);
      }
      EventEmitter2.call(this);
      this._pingListenerCount = 0;
      this.on("newListener", function(ev) {
        if (ev === "ping") {
          this._pingListenerCount++;
        }
      }).on("removeListener", function(ev) {
        if (ev === "ping") {
          this._pingListenerCount--;
        }
      });
      this.config = config;
      this.socket = socket;
      this.protocol = protocol;
      this.extensions = extensions;
      this.remoteAddress = socket.remoteAddress;
      this.closeReasonCode = -1;
      this.closeDescription = null;
      this.closeEventEmitted = false;
      this.maskOutgoingPackets = maskOutgoingPackets;
      this.maskBytes = bufferAllocUnsafe(4);
      this.frameHeader = bufferAllocUnsafe(10);
      this.bufferList = new BufferList();
      this.currentFrame = new WebSocketFrame(this.maskBytes, this.frameHeader, this.config);
      this.fragmentationSize = 0;
      this.frameQueue = [];
      this.connected = true;
      this.state = STATE_OPEN;
      this.waitingForCloseResponse = false;
      this.receivedEnd = false;
      this.closeTimeout = this.config.closeTimeout;
      this.assembleFragments = this.config.assembleFragments;
      this.maxReceivedMessageSize = this.config.maxReceivedMessageSize;
      this.outputBufferFull = false;
      this.inputPaused = false;
      this.receivedDataHandler = this.processReceivedData.bind(this);
      this._closeTimerHandler = this.handleCloseTimer.bind(this);
      this.socket.setNoDelay(this.config.disableNagleAlgorithm);
      this.socket.setTimeout(0);
      if (this.config.keepalive && !this.config.useNativeKeepalive) {
        if (typeof this.config.keepaliveInterval !== "number") {
          throw new Error("keepaliveInterval must be specified and numeric if keepalive is true.");
        }
        this._keepaliveTimerHandler = this.handleKeepaliveTimer.bind(this);
        this.setKeepaliveTimer();
        if (this.config.dropConnectionOnKeepaliveTimeout) {
          if (typeof this.config.keepaliveGracePeriod !== "number") {
            throw new Error("keepaliveGracePeriod  must be specified and numeric if dropConnectionOnKeepaliveTimeout is true.");
          }
          this._gracePeriodTimerHandler = this.handleGracePeriodTimer.bind(this);
        }
      } else if (this.config.keepalive && this.config.useNativeKeepalive) {
        if (!("setKeepAlive" in this.socket)) {
          throw new Error("Unable to use native keepalive: unsupported by this version of Node.");
        }
        this.socket.setKeepAlive(true, this.config.keepaliveInterval);
      }
      this.socket.removeAllListeners("error");
    }
    WebSocketConnection.CLOSE_REASON_NORMAL = 1e3;
    WebSocketConnection.CLOSE_REASON_GOING_AWAY = 1001;
    WebSocketConnection.CLOSE_REASON_PROTOCOL_ERROR = 1002;
    WebSocketConnection.CLOSE_REASON_UNPROCESSABLE_INPUT = 1003;
    WebSocketConnection.CLOSE_REASON_RESERVED = 1004;
    WebSocketConnection.CLOSE_REASON_NOT_PROVIDED = 1005;
    WebSocketConnection.CLOSE_REASON_ABNORMAL = 1006;
    WebSocketConnection.CLOSE_REASON_INVALID_DATA = 1007;
    WebSocketConnection.CLOSE_REASON_POLICY_VIOLATION = 1008;
    WebSocketConnection.CLOSE_REASON_MESSAGE_TOO_BIG = 1009;
    WebSocketConnection.CLOSE_REASON_EXTENSION_REQUIRED = 1010;
    WebSocketConnection.CLOSE_REASON_INTERNAL_SERVER_ERROR = 1011;
    WebSocketConnection.CLOSE_REASON_TLS_HANDSHAKE_FAILED = 1015;
    WebSocketConnection.CLOSE_DESCRIPTIONS = {
      1e3: "Normal connection closure",
      1001: "Remote peer is going away",
      1002: "Protocol error",
      1003: "Unprocessable input",
      1004: "Reserved",
      1005: "Reason not provided",
      1006: "Abnormal closure, no further detail available",
      1007: "Invalid data received",
      1008: "Policy violation",
      1009: "Message too big",
      1010: "Extension requested by client is required",
      1011: "Internal Server Error",
      1015: "TLS Handshake Failed"
    };
    function validateCloseReason(code) {
      if (code < 1e3) {
        return false;
      }
      if (code >= 1e3 && code <= 2999) {
        return [1e3, 1001, 1002, 1003, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015].indexOf(code) !== -1;
      }
      if (code >= 3e3 && code <= 3999) {
        return true;
      }
      if (code >= 4e3 && code <= 4999) {
        return true;
      }
      if (code >= 5e3) {
        return false;
      }
    }
    util.inherits(WebSocketConnection, EventEmitter2);
    WebSocketConnection.prototype._addSocketEventListeners = function() {
      this.socket.on("error", this.handleSocketError.bind(this));
      this.socket.on("end", this.handleSocketEnd.bind(this));
      this.socket.on("close", this.handleSocketClose.bind(this));
      this.socket.on("drain", this.handleSocketDrain.bind(this));
      this.socket.on("pause", this.handleSocketPause.bind(this));
      this.socket.on("resume", this.handleSocketResume.bind(this));
      this.socket.on("data", this.handleSocketData.bind(this));
    };
    WebSocketConnection.prototype.setKeepaliveTimer = function() {
      this._debug("setKeepaliveTimer");
      if (!this.config.keepalive || this.config.useNativeKeepalive) {
        return;
      }
      this.clearKeepaliveTimer();
      this.clearGracePeriodTimer();
      this._keepaliveTimeoutID = setTimeout(this._keepaliveTimerHandler, this.config.keepaliveInterval);
    };
    WebSocketConnection.prototype.clearKeepaliveTimer = function() {
      if (this._keepaliveTimeoutID) {
        clearTimeout(this._keepaliveTimeoutID);
      }
    };
    WebSocketConnection.prototype.handleKeepaliveTimer = function() {
      this._debug("handleKeepaliveTimer");
      this._keepaliveTimeoutID = null;
      this.ping();
      if (this.config.dropConnectionOnKeepaliveTimeout) {
        this.setGracePeriodTimer();
      } else {
        this.setKeepaliveTimer();
      }
    };
    WebSocketConnection.prototype.setGracePeriodTimer = function() {
      this._debug("setGracePeriodTimer");
      this.clearGracePeriodTimer();
      this._gracePeriodTimeoutID = setTimeout(this._gracePeriodTimerHandler, this.config.keepaliveGracePeriod);
    };
    WebSocketConnection.prototype.clearGracePeriodTimer = function() {
      if (this._gracePeriodTimeoutID) {
        clearTimeout(this._gracePeriodTimeoutID);
      }
    };
    WebSocketConnection.prototype.handleGracePeriodTimer = function() {
      this._debug("handleGracePeriodTimer");
      this._gracePeriodTimeoutID = null;
      this.drop(WebSocketConnection.CLOSE_REASON_ABNORMAL, "Peer not responding.", true);
    };
    WebSocketConnection.prototype.handleSocketData = function(data) {
      this._debug("handleSocketData");
      this.setKeepaliveTimer();
      this.bufferList.write(data);
      this.processReceivedData();
    };
    WebSocketConnection.prototype.processReceivedData = function() {
      this._debug("processReceivedData");
      if (!this.connected) {
        return;
      }
      if (this.inputPaused) {
        return;
      }
      var frame = this.currentFrame;
      if (!frame.addData(this.bufferList)) {
        this._debug("-- insufficient data for frame");
        return;
      }
      var self = this;
      if (frame.protocolError) {
        this._debug("-- protocol error");
        process.nextTick(function() {
          self.drop(WebSocketConnection.CLOSE_REASON_PROTOCOL_ERROR, frame.dropReason);
        });
        return;
      } else if (frame.frameTooLarge) {
        this._debug("-- frame too large");
        process.nextTick(function() {
          self.drop(WebSocketConnection.CLOSE_REASON_MESSAGE_TOO_BIG, frame.dropReason);
        });
        return;
      }
      if (frame.rsv1 || frame.rsv2 || frame.rsv3) {
        this._debug("-- illegal rsv flag");
        process.nextTick(function() {
          self.drop(
            WebSocketConnection.CLOSE_REASON_PROTOCOL_ERROR,
            "Unsupported usage of rsv bits without negotiated extension."
          );
        });
        return;
      }
      if (!this.assembleFragments) {
        this._debug("-- emitting frame");
        process.nextTick(function() {
          self.emit("frame", frame);
        });
      }
      process.nextTick(function() {
        self.processFrame(frame);
      });
      this.currentFrame = new WebSocketFrame(this.maskBytes, this.frameHeader, this.config);
      if (this.bufferList.length > 0) {
        setImmediateImpl(this.receivedDataHandler);
      }
    };
    WebSocketConnection.prototype.handleSocketError = function(error) {
      this._debug("handleSocketError: %j", error);
      if (this.state === STATE_CLOSED) {
        this._debug("  --- Socket 'error' after 'close'");
        return;
      }
      this.closeReasonCode = WebSocketConnection.CLOSE_REASON_ABNORMAL;
      this.closeDescription = "Socket Error: " + error.syscall + " " + error.code;
      this.connected = false;
      this.state = STATE_CLOSED;
      this.fragmentationSize = 0;
      if (utils.eventEmitterListenerCount(this, "error") > 0) {
        this.emit("error", error);
      }
      this.socket.destroy();
      this._debug.printOutput();
    };
    WebSocketConnection.prototype.handleSocketEnd = function() {
      this._debug("handleSocketEnd: received socket end.  state = %s", this.state);
      this.receivedEnd = true;
      if (this.state === STATE_CLOSED) {
        this._debug("  --- Socket 'end' after 'close'");
        return;
      }
      if (this.state !== STATE_PEER_REQUESTED_CLOSE && this.state !== STATE_ENDING) {
        this._debug("  --- UNEXPECTED socket end.");
        this.socket.end();
      }
    };
    WebSocketConnection.prototype.handleSocketClose = function(hadError) {
      this._debug("handleSocketClose: received socket close");
      this.socketHadError = hadError;
      this.connected = false;
      this.state = STATE_CLOSED;
      if (this.closeReasonCode === -1) {
        this.closeReasonCode = WebSocketConnection.CLOSE_REASON_ABNORMAL;
        this.closeDescription = "Connection dropped by remote peer.";
      }
      this.clearCloseTimer();
      this.clearKeepaliveTimer();
      this.clearGracePeriodTimer();
      if (!this.closeEventEmitted) {
        this.closeEventEmitted = true;
        this._debug("-- Emitting WebSocketConnection close event");
        this.emit("close", this.closeReasonCode, this.closeDescription);
      }
    };
    WebSocketConnection.prototype.handleSocketDrain = function() {
      this._debug("handleSocketDrain: socket drain event");
      this.outputBufferFull = false;
      this.emit("drain");
    };
    WebSocketConnection.prototype.handleSocketPause = function() {
      this._debug("handleSocketPause: socket pause event");
      this.inputPaused = true;
      this.emit("pause");
    };
    WebSocketConnection.prototype.handleSocketResume = function() {
      this._debug("handleSocketResume: socket resume event");
      this.inputPaused = false;
      this.emit("resume");
      this.processReceivedData();
    };
    WebSocketConnection.prototype.pause = function() {
      this._debug("pause: pause requested");
      this.socket.pause();
    };
    WebSocketConnection.prototype.resume = function() {
      this._debug("resume: resume requested");
      this.socket.resume();
    };
    WebSocketConnection.prototype.close = function(reasonCode, description) {
      if (this.connected) {
        this._debug("close: Initating clean WebSocket close sequence.");
        if ("number" !== typeof reasonCode) {
          reasonCode = WebSocketConnection.CLOSE_REASON_NORMAL;
        }
        if (!validateCloseReason(reasonCode)) {
          throw new Error("Close code " + reasonCode + " is not valid.");
        }
        if ("string" !== typeof description) {
          description = WebSocketConnection.CLOSE_DESCRIPTIONS[reasonCode];
        }
        this.closeReasonCode = reasonCode;
        this.closeDescription = description;
        this.setCloseTimer();
        this.sendCloseFrame(this.closeReasonCode, this.closeDescription);
        this.state = STATE_ENDING;
        this.connected = false;
      }
    };
    WebSocketConnection.prototype.drop = function(reasonCode, description, skipCloseFrame) {
      this._debug("drop");
      if (typeof reasonCode !== "number") {
        reasonCode = WebSocketConnection.CLOSE_REASON_PROTOCOL_ERROR;
      }
      if (typeof description !== "string") {
        description = WebSocketConnection.CLOSE_DESCRIPTIONS[reasonCode];
      }
      this._debug(
        "Forcefully dropping connection. skipCloseFrame: %s, code: %d, description: %s",
        skipCloseFrame,
        reasonCode,
        description
      );
      this.closeReasonCode = reasonCode;
      this.closeDescription = description;
      this.frameQueue = [];
      this.fragmentationSize = 0;
      if (!skipCloseFrame) {
        this.sendCloseFrame(reasonCode, description);
      }
      this.connected = false;
      this.state = STATE_CLOSED;
      this.clearCloseTimer();
      this.clearKeepaliveTimer();
      this.clearGracePeriodTimer();
      if (!this.closeEventEmitted) {
        this.closeEventEmitted = true;
        this._debug("Emitting WebSocketConnection close event");
        this.emit("close", this.closeReasonCode, this.closeDescription);
      }
      this._debug("Drop: destroying socket");
      this.socket.destroy();
    };
    WebSocketConnection.prototype.setCloseTimer = function() {
      this._debug("setCloseTimer");
      this.clearCloseTimer();
      this._debug("Setting close timer");
      this.waitingForCloseResponse = true;
      this.closeTimer = setTimeout(this._closeTimerHandler, this.closeTimeout);
    };
    WebSocketConnection.prototype.clearCloseTimer = function() {
      this._debug("clearCloseTimer");
      if (this.closeTimer) {
        this._debug("Clearing close timer");
        clearTimeout(this.closeTimer);
        this.waitingForCloseResponse = false;
        this.closeTimer = null;
      }
    };
    WebSocketConnection.prototype.handleCloseTimer = function() {
      this._debug("handleCloseTimer");
      this.closeTimer = null;
      if (this.waitingForCloseResponse) {
        this._debug("Close response not received from client.  Forcing socket end.");
        this.waitingForCloseResponse = false;
        this.state = STATE_CLOSED;
        this.socket.end();
      }
    };
    WebSocketConnection.prototype.processFrame = function(frame) {
      this._debug("processFrame");
      this._debug(" -- frame: %s", frame);
      if (this.frameQueue.length !== 0 && (frame.opcode > 0 && frame.opcode < 8)) {
        this.drop(
          WebSocketConnection.CLOSE_REASON_PROTOCOL_ERROR,
          "Illegal frame opcode 0x" + frame.opcode.toString(16) + " received in middle of fragmented message."
        );
        return;
      }
      switch (frame.opcode) {
        case 2:
          this._debug("-- Binary Frame");
          if (this.assembleFragments) {
            if (frame.fin) {
              this._debug("---- Emitting 'message' event");
              this.emit("message", {
                type: "binary",
                binaryData: frame.binaryPayload
              });
            } else {
              this.frameQueue.push(frame);
              this.fragmentationSize = frame.length;
            }
          }
          break;
        case 1:
          this._debug("-- Text Frame");
          if (this.assembleFragments) {
            if (frame.fin) {
              if (!isValidUTF8(frame.binaryPayload)) {
                this.drop(
                  WebSocketConnection.CLOSE_REASON_INVALID_DATA,
                  "Invalid UTF-8 Data Received"
                );
                return;
              }
              this._debug("---- Emitting 'message' event");
              this.emit("message", {
                type: "utf8",
                utf8Data: frame.binaryPayload.toString("utf8")
              });
            } else {
              this.frameQueue.push(frame);
              this.fragmentationSize = frame.length;
            }
          }
          break;
        case 0:
          this._debug("-- Continuation Frame");
          if (this.assembleFragments) {
            if (this.frameQueue.length === 0) {
              this.drop(
                WebSocketConnection.CLOSE_REASON_PROTOCOL_ERROR,
                "Unexpected Continuation Frame"
              );
              return;
            }
            this.fragmentationSize += frame.length;
            if (this.fragmentationSize > this.maxReceivedMessageSize) {
              this.drop(
                WebSocketConnection.CLOSE_REASON_MESSAGE_TOO_BIG,
                "Maximum message size exceeded."
              );
              return;
            }
            this.frameQueue.push(frame);
            if (frame.fin) {
              var bytesCopied = 0;
              var binaryPayload = bufferAllocUnsafe(this.fragmentationSize);
              var opcode = this.frameQueue[0].opcode;
              this.frameQueue.forEach(function(currentFrame) {
                currentFrame.binaryPayload.copy(binaryPayload, bytesCopied);
                bytesCopied += currentFrame.binaryPayload.length;
              });
              this.frameQueue = [];
              this.fragmentationSize = 0;
              switch (opcode) {
                case 2:
                  this.emit("message", {
                    type: "binary",
                    binaryData: binaryPayload
                  });
                  break;
                case 1:
                  if (!isValidUTF8(binaryPayload)) {
                    this.drop(
                      WebSocketConnection.CLOSE_REASON_INVALID_DATA,
                      "Invalid UTF-8 Data Received"
                    );
                    return;
                  }
                  this.emit("message", {
                    type: "utf8",
                    utf8Data: binaryPayload.toString("utf8")
                  });
                  break;
                default:
                  this.drop(
                    WebSocketConnection.CLOSE_REASON_PROTOCOL_ERROR,
                    "Unexpected first opcode in fragmentation sequence: 0x" + opcode.toString(16)
                  );
                  return;
              }
            }
          }
          break;
        case 9:
          this._debug("-- Ping Frame");
          if (this._pingListenerCount > 0) {
            var cancelled = false;
            var cancel = function() {
              cancelled = true;
            };
            this.emit("ping", cancel, frame.binaryPayload);
            if (!cancelled) {
              this.pong(frame.binaryPayload);
            }
          } else {
            this.pong(frame.binaryPayload);
          }
          break;
        case 10:
          this._debug("-- Pong Frame");
          this.emit("pong", frame.binaryPayload);
          break;
        case 8:
          this._debug("-- Close Frame");
          if (this.waitingForCloseResponse) {
            this._debug("---- Got close response from peer.  Completing closing handshake.");
            this.clearCloseTimer();
            this.waitingForCloseResponse = false;
            this.state = STATE_CLOSED;
            this.socket.end();
            return;
          }
          this._debug("---- Closing handshake initiated by peer.");
          this.state = STATE_PEER_REQUESTED_CLOSE;
          var respondCloseReasonCode;
          if (frame.invalidCloseFrameLength) {
            this.closeReasonCode = 1005;
            respondCloseReasonCode = WebSocketConnection.CLOSE_REASON_PROTOCOL_ERROR;
          } else if (frame.closeStatus === -1 || validateCloseReason(frame.closeStatus)) {
            this.closeReasonCode = frame.closeStatus;
            respondCloseReasonCode = WebSocketConnection.CLOSE_REASON_NORMAL;
          } else {
            this.closeReasonCode = frame.closeStatus;
            respondCloseReasonCode = WebSocketConnection.CLOSE_REASON_PROTOCOL_ERROR;
          }
          if (frame.binaryPayload.length > 1) {
            if (!isValidUTF8(frame.binaryPayload)) {
              this.drop(
                WebSocketConnection.CLOSE_REASON_INVALID_DATA,
                "Invalid UTF-8 Data Received"
              );
              return;
            }
            this.closeDescription = frame.binaryPayload.toString("utf8");
          } else {
            this.closeDescription = WebSocketConnection.CLOSE_DESCRIPTIONS[this.closeReasonCode];
          }
          this._debug(
            "------ Remote peer %s - code: %d - %s - close frame payload length: %d",
            this.remoteAddress,
            this.closeReasonCode,
            this.closeDescription,
            frame.length
          );
          this._debug("------ responding to remote peer's close request.");
          this.sendCloseFrame(respondCloseReasonCode, null);
          this.connected = false;
          break;
        default:
          this._debug("-- Unrecognized Opcode %d", frame.opcode);
          this.drop(
            WebSocketConnection.CLOSE_REASON_PROTOCOL_ERROR,
            "Unrecognized Opcode: 0x" + frame.opcode.toString(16)
          );
          break;
      }
    };
    WebSocketConnection.prototype.send = function(data, cb) {
      this._debug("send");
      if (Buffer.isBuffer(data)) {
        this.sendBytes(data, cb);
      } else if (typeof data["toString"] === "function") {
        this.sendUTF(data, cb);
      } else {
        throw new Error("Data provided must either be a Node Buffer or implement toString()");
      }
    };
    WebSocketConnection.prototype.sendUTF = function(data, cb) {
      data = bufferFromString(data.toString(), "utf8");
      this._debug("sendUTF: %d bytes", data.length);
      var frame = new WebSocketFrame(this.maskBytes, this.frameHeader, this.config);
      frame.opcode = 1;
      frame.binaryPayload = data;
      this.fragmentAndSend(frame, cb);
    };
    WebSocketConnection.prototype.sendBytes = function(data, cb) {
      this._debug("sendBytes");
      if (!Buffer.isBuffer(data)) {
        throw new Error("You must pass a Node Buffer object to WebSocketConnection.prototype.sendBytes()");
      }
      var frame = new WebSocketFrame(this.maskBytes, this.frameHeader, this.config);
      frame.opcode = 2;
      frame.binaryPayload = data;
      this.fragmentAndSend(frame, cb);
    };
    WebSocketConnection.prototype.ping = function(data) {
      this._debug("ping");
      var frame = new WebSocketFrame(this.maskBytes, this.frameHeader, this.config);
      frame.opcode = 9;
      frame.fin = true;
      if (data) {
        if (!Buffer.isBuffer(data)) {
          data = bufferFromString(data.toString(), "utf8");
        }
        if (data.length > 125) {
          this._debug("WebSocket: Data for ping is longer than 125 bytes.  Truncating.");
          data = data.slice(0, 124);
        }
        frame.binaryPayload = data;
      }
      this.sendFrame(frame);
    };
    WebSocketConnection.prototype.pong = function(binaryPayload) {
      this._debug("pong");
      var frame = new WebSocketFrame(this.maskBytes, this.frameHeader, this.config);
      frame.opcode = 10;
      if (Buffer.isBuffer(binaryPayload) && binaryPayload.length > 125) {
        this._debug("WebSocket: Data for pong is longer than 125 bytes.  Truncating.");
        binaryPayload = binaryPayload.slice(0, 124);
      }
      frame.binaryPayload = binaryPayload;
      frame.fin = true;
      this.sendFrame(frame);
    };
    WebSocketConnection.prototype.fragmentAndSend = function(frame, cb) {
      this._debug("fragmentAndSend");
      if (frame.opcode > 7) {
        throw new Error("You cannot fragment control frames.");
      }
      var threshold = this.config.fragmentationThreshold;
      var length = frame.binaryPayload.length;
      if (!this.config.fragmentOutgoingMessages || frame.binaryPayload && length <= threshold) {
        frame.fin = true;
        this.sendFrame(frame, cb);
        return;
      }
      var numFragments = Math.ceil(length / threshold);
      var sentFragments = 0;
      var sentCallback = function fragmentSentCallback(err) {
        if (err) {
          if (typeof cb === "function") {
            cb(err);
            cb = null;
          }
          return;
        }
        ++sentFragments;
        if (sentFragments === numFragments && typeof cb === "function") {
          cb();
        }
      };
      for (var i = 1; i <= numFragments; i++) {
        var currentFrame = new WebSocketFrame(this.maskBytes, this.frameHeader, this.config);
        currentFrame.opcode = i === 1 ? frame.opcode : 0;
        currentFrame.fin = i === numFragments;
        var currentLength = i === numFragments ? length - threshold * (i - 1) : threshold;
        var sliceStart = threshold * (i - 1);
        currentFrame.binaryPayload = frame.binaryPayload.slice(sliceStart, sliceStart + currentLength);
        this.sendFrame(currentFrame, sentCallback);
      }
    };
    WebSocketConnection.prototype.sendCloseFrame = function(reasonCode, description, cb) {
      if (typeof reasonCode !== "number") {
        reasonCode = WebSocketConnection.CLOSE_REASON_NORMAL;
      }
      this._debug("sendCloseFrame state: %s, reasonCode: %d, description: %s", this.state, reasonCode, description);
      if (this.state !== STATE_OPEN && this.state !== STATE_PEER_REQUESTED_CLOSE) {
        return;
      }
      var frame = new WebSocketFrame(this.maskBytes, this.frameHeader, this.config);
      frame.fin = true;
      frame.opcode = 8;
      frame.closeStatus = reasonCode;
      if (typeof description === "string") {
        frame.binaryPayload = bufferFromString(description, "utf8");
      }
      this.sendFrame(frame, cb);
      this.socket.end();
    };
    WebSocketConnection.prototype.sendFrame = function(frame, cb) {
      this._debug("sendFrame");
      frame.mask = this.maskOutgoingPackets;
      var flushed = this.socket.write(frame.toBuffer(), cb);
      this.outputBufferFull = !flushed;
      return flushed;
    };
    module2.exports = WebSocketConnection;
    function instrumentSocketForDebugging(connection, socket) {
      if (!connection._debug.enabled) {
        return;
      }
      var originalSocketEmit = socket.emit;
      socket.emit = function(event) {
        connection._debug("||| Socket Event  '%s'", event);
        originalSocketEmit.apply(this, arguments);
      };
      for (var key in socket) {
        if ("function" !== typeof socket[key]) {
          continue;
        }
        if (["emit"].indexOf(key) !== -1) {
          continue;
        }
        (function(key2) {
          var original = socket[key2];
          if (key2 === "on") {
            socket[key2] = function proxyMethod__EventEmitter__On() {
              connection._debug("||| Socket method called:  %s (%s)", key2, arguments[0]);
              return original.apply(this, arguments);
            };
            return;
          }
          socket[key2] = function proxyMethod() {
            connection._debug("||| Socket method called:  %s", key2);
            return original.apply(this, arguments);
          };
        })(key);
      }
    }
  }
});

// node_modules/websocket/lib/WebSocketRequest.js
var require_WebSocketRequest = __commonJS({
  "node_modules/websocket/lib/WebSocketRequest.js"(exports2, module2) {
    var crypto2 = require("crypto");
    var util = require("util");
    var url = require("url");
    var EventEmitter2 = require("events").EventEmitter;
    var WebSocketConnection = require_WebSocketConnection();
    var headerValueSplitRegExp = /,\s*/;
    var headerParamSplitRegExp = /;\s*/;
    var headerSanitizeRegExp = /[\r\n]/g;
    var xForwardedForSeparatorRegExp = /,\s*/;
    var separators = [
      "(",
      ")",
      "<",
      ">",
      "@",
      ",",
      ";",
      ":",
      "\\",
      '"',
      "/",
      "[",
      "]",
      "?",
      "=",
      "{",
      "}",
      " ",
      String.fromCharCode(9)
    ];
    var controlChars = [
      String.fromCharCode(127)
      /* DEL */
    ];
    for (i = 0; i < 31; i++) {
      controlChars.push(String.fromCharCode(i));
    }
    var i;
    var cookieNameValidateRegEx = /([\x00-\x20\x22\x28\x29\x2c\x2f\x3a-\x3f\x40\x5b-\x5e\x7b\x7d\x7f])/;
    var cookieValueValidateRegEx = /[^\x21\x23-\x2b\x2d-\x3a\x3c-\x5b\x5d-\x7e]/;
    var cookieValueDQuoteValidateRegEx = /^"[^"]*"$/;
    var controlCharsAndSemicolonRegEx = /[\x00-\x20\x3b]/g;
    var cookieSeparatorRegEx = /[;,] */;
    var httpStatusDescriptions = {
      100: "Continue",
      101: "Switching Protocols",
      200: "OK",
      201: "Created",
      203: "Non-Authoritative Information",
      204: "No Content",
      205: "Reset Content",
      206: "Partial Content",
      300: "Multiple Choices",
      301: "Moved Permanently",
      302: "Found",
      303: "See Other",
      304: "Not Modified",
      305: "Use Proxy",
      307: "Temporary Redirect",
      400: "Bad Request",
      401: "Unauthorized",
      402: "Payment Required",
      403: "Forbidden",
      404: "Not Found",
      406: "Not Acceptable",
      407: "Proxy Authorization Required",
      408: "Request Timeout",
      409: "Conflict",
      410: "Gone",
      411: "Length Required",
      412: "Precondition Failed",
      413: "Request Entity Too Long",
      414: "Request-URI Too Long",
      415: "Unsupported Media Type",
      416: "Requested Range Not Satisfiable",
      417: "Expectation Failed",
      426: "Upgrade Required",
      500: "Internal Server Error",
      501: "Not Implemented",
      502: "Bad Gateway",
      503: "Service Unavailable",
      504: "Gateway Timeout",
      505: "HTTP Version Not Supported"
    };
    function WebSocketRequest(socket, httpRequest, serverConfig) {
      EventEmitter2.call(this);
      this.socket = socket;
      this.httpRequest = httpRequest;
      this.resource = httpRequest.url;
      this.remoteAddress = socket.remoteAddress;
      this.remoteAddresses = [this.remoteAddress];
      this.serverConfig = serverConfig;
      this._socketIsClosing = false;
      this._socketCloseHandler = this._handleSocketCloseBeforeAccept.bind(this);
      this.socket.on("end", this._socketCloseHandler);
      this.socket.on("close", this._socketCloseHandler);
      this._resolved = false;
    }
    util.inherits(WebSocketRequest, EventEmitter2);
    WebSocketRequest.prototype.readHandshake = function() {
      var self = this;
      var request = this.httpRequest;
      this.resourceURL = url.parse(this.resource, true);
      this.host = request.headers["host"];
      if (!this.host) {
        throw new Error("Client must provide a Host header.");
      }
      this.key = request.headers["sec-websocket-key"];
      if (!this.key) {
        throw new Error("Client must provide a value for Sec-WebSocket-Key.");
      }
      this.webSocketVersion = parseInt(request.headers["sec-websocket-version"], 10);
      if (!this.webSocketVersion || isNaN(this.webSocketVersion)) {
        throw new Error("Client must provide a value for Sec-WebSocket-Version.");
      }
      switch (this.webSocketVersion) {
        case 8:
        case 13:
          break;
        default:
          var e = new Error("Unsupported websocket client version: " + this.webSocketVersion + "Only versions 8 and 13 are supported.");
          e.httpCode = 426;
          e.headers = {
            "Sec-WebSocket-Version": "13"
          };
          throw e;
      }
      if (this.webSocketVersion === 13) {
        this.origin = request.headers["origin"];
      } else if (this.webSocketVersion === 8) {
        this.origin = request.headers["sec-websocket-origin"];
      }
      var protocolString = request.headers["sec-websocket-protocol"];
      this.protocolFullCaseMap = {};
      this.requestedProtocols = [];
      if (protocolString) {
        var requestedProtocolsFullCase = protocolString.split(headerValueSplitRegExp);
        requestedProtocolsFullCase.forEach(function(protocol) {
          var lcProtocol = protocol.toLocaleLowerCase();
          self.requestedProtocols.push(lcProtocol);
          self.protocolFullCaseMap[lcProtocol] = protocol;
        });
      }
      if (!this.serverConfig.ignoreXForwardedFor && request.headers["x-forwarded-for"]) {
        var immediatePeerIP = this.remoteAddress;
        this.remoteAddresses = request.headers["x-forwarded-for"].split(xForwardedForSeparatorRegExp);
        this.remoteAddresses.push(immediatePeerIP);
        this.remoteAddress = this.remoteAddresses[0];
      }
      if (this.serverConfig.parseExtensions) {
        var extensionsString = request.headers["sec-websocket-extensions"];
        this.requestedExtensions = this.parseExtensions(extensionsString);
      } else {
        this.requestedExtensions = [];
      }
      if (this.serverConfig.parseCookies) {
        var cookieString = request.headers["cookie"];
        this.cookies = this.parseCookies(cookieString);
      } else {
        this.cookies = [];
      }
    };
    WebSocketRequest.prototype.parseExtensions = function(extensionsString) {
      if (!extensionsString || extensionsString.length === 0) {
        return [];
      }
      var extensions = extensionsString.toLocaleLowerCase().split(headerValueSplitRegExp);
      extensions.forEach(function(extension, index, array) {
        var params = extension.split(headerParamSplitRegExp);
        var extensionName = params[0];
        var extensionParams = params.slice(1);
        extensionParams.forEach(function(rawParam, index2, array2) {
          var arr = rawParam.split("=");
          var obj2 = {
            name: arr[0],
            value: arr[1]
          };
          array2.splice(index2, 1, obj2);
        });
        var obj = {
          name: extensionName,
          params: extensionParams
        };
        array.splice(index, 1, obj);
      });
      return extensions;
    };
    WebSocketRequest.prototype.parseCookies = function(str) {
      if (!str || typeof str !== "string") {
        return [];
      }
      var cookies = [];
      var pairs = str.split(cookieSeparatorRegEx);
      pairs.forEach(function(pair) {
        var eq_idx = pair.indexOf("=");
        if (eq_idx === -1) {
          cookies.push({
            name: pair,
            value: null
          });
          return;
        }
        var key = pair.substr(0, eq_idx).trim();
        var val = pair.substr(++eq_idx, pair.length).trim();
        if ('"' === val[0]) {
          val = val.slice(1, -1);
        }
        cookies.push({
          name: key,
          value: decodeURIComponent(val)
        });
      });
      return cookies;
    };
    WebSocketRequest.prototype.accept = function(acceptedProtocol, allowedOrigin, cookies) {
      this._verifyResolution();
      var protocolFullCase;
      if (acceptedProtocol) {
        protocolFullCase = this.protocolFullCaseMap[acceptedProtocol.toLocaleLowerCase()];
        if (typeof protocolFullCase === "undefined") {
          protocolFullCase = acceptedProtocol;
        }
      } else {
        protocolFullCase = acceptedProtocol;
      }
      this.protocolFullCaseMap = null;
      var sha1 = crypto2.createHash("sha1");
      sha1.update(this.key + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11");
      var acceptKey = sha1.digest("base64");
      var response = "HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Accept: " + acceptKey + "\r\n";
      if (protocolFullCase) {
        for (var i2 = 0; i2 < protocolFullCase.length; i2++) {
          var charCode = protocolFullCase.charCodeAt(i2);
          var character = protocolFullCase.charAt(i2);
          if (charCode < 33 || charCode > 126 || separators.indexOf(character) !== -1) {
            this.reject(500);
            throw new Error('Illegal character "' + String.fromCharCode(character) + '" in subprotocol.');
          }
        }
        if (this.requestedProtocols.indexOf(acceptedProtocol) === -1) {
          this.reject(500);
          throw new Error("Specified protocol was not requested by the client.");
        }
        protocolFullCase = protocolFullCase.replace(headerSanitizeRegExp, "");
        response += "Sec-WebSocket-Protocol: " + protocolFullCase + "\r\n";
      }
      this.requestedProtocols = null;
      if (allowedOrigin) {
        allowedOrigin = allowedOrigin.replace(headerSanitizeRegExp, "");
        if (this.webSocketVersion === 13) {
          response += "Origin: " + allowedOrigin + "\r\n";
        } else if (this.webSocketVersion === 8) {
          response += "Sec-WebSocket-Origin: " + allowedOrigin + "\r\n";
        }
      }
      if (cookies) {
        if (!Array.isArray(cookies)) {
          this.reject(500);
          throw new Error('Value supplied for "cookies" argument must be an array.');
        }
        var seenCookies = {};
        cookies.forEach(function(cookie) {
          if (!cookie.name || !cookie.value) {
            this.reject(500);
            throw new Error('Each cookie to set must at least provide a "name" and "value"');
          }
          cookie.name = cookie.name.replace(controlCharsAndSemicolonRegEx, "");
          cookie.value = cookie.value.replace(controlCharsAndSemicolonRegEx, "");
          if (seenCookies[cookie.name]) {
            this.reject(500);
            throw new Error("You may not specify the same cookie name twice.");
          }
          seenCookies[cookie.name] = true;
          var invalidChar = cookie.name.match(cookieNameValidateRegEx);
          if (invalidChar) {
            this.reject(500);
            throw new Error("Illegal character " + invalidChar[0] + " in cookie name");
          }
          if (cookie.value.match(cookieValueDQuoteValidateRegEx)) {
            invalidChar = cookie.value.slice(1, -1).match(cookieValueValidateRegEx);
          } else {
            invalidChar = cookie.value.match(cookieValueValidateRegEx);
          }
          if (invalidChar) {
            this.reject(500);
            throw new Error("Illegal character " + invalidChar[0] + " in cookie value");
          }
          var cookieParts = [cookie.name + "=" + cookie.value];
          if (cookie.path) {
            invalidChar = cookie.path.match(controlCharsAndSemicolonRegEx);
            if (invalidChar) {
              this.reject(500);
              throw new Error("Illegal character " + invalidChar[0] + " in cookie path");
            }
            cookieParts.push("Path=" + cookie.path);
          }
          if (cookie.domain) {
            if (typeof cookie.domain !== "string") {
              this.reject(500);
              throw new Error("Domain must be specified and must be a string.");
            }
            invalidChar = cookie.domain.match(controlCharsAndSemicolonRegEx);
            if (invalidChar) {
              this.reject(500);
              throw new Error("Illegal character " + invalidChar[0] + " in cookie domain");
            }
            cookieParts.push("Domain=" + cookie.domain.toLowerCase());
          }
          if (cookie.expires) {
            if (!(cookie.expires instanceof Date)) {
              this.reject(500);
              throw new Error('Value supplied for cookie "expires" must be a vaild date object');
            }
            cookieParts.push("Expires=" + cookie.expires.toGMTString());
          }
          if (cookie.maxage) {
            var maxage = cookie.maxage;
            if (typeof maxage === "string") {
              maxage = parseInt(maxage, 10);
            }
            if (isNaN(maxage) || maxage <= 0) {
              this.reject(500);
              throw new Error('Value supplied for cookie "maxage" must be a non-zero number');
            }
            maxage = Math.round(maxage);
            cookieParts.push("Max-Age=" + maxage.toString(10));
          }
          if (cookie.secure) {
            if (typeof cookie.secure !== "boolean") {
              this.reject(500);
              throw new Error('Value supplied for cookie "secure" must be of type boolean');
            }
            cookieParts.push("Secure");
          }
          if (cookie.httponly) {
            if (typeof cookie.httponly !== "boolean") {
              this.reject(500);
              throw new Error('Value supplied for cookie "httponly" must be of type boolean');
            }
            cookieParts.push("HttpOnly");
          }
          response += "Set-Cookie: " + cookieParts.join(";") + "\r\n";
        }.bind(this));
      }
      this._resolved = true;
      this.emit("requestResolved", this);
      response += "\r\n";
      var connection = new WebSocketConnection(this.socket, [], acceptedProtocol, false, this.serverConfig);
      connection.webSocketVersion = this.webSocketVersion;
      connection.remoteAddress = this.remoteAddress;
      connection.remoteAddresses = this.remoteAddresses;
      var self = this;
      if (this._socketIsClosing) {
        cleanupFailedConnection(connection);
      } else {
        this.socket.write(response, "ascii", function(error) {
          if (error) {
            cleanupFailedConnection(connection);
            return;
          }
          self._removeSocketCloseListeners();
          connection._addSocketEventListeners();
        });
      }
      this.emit("requestAccepted", connection);
      return connection;
    };
    WebSocketRequest.prototype.reject = function(status, reason, extraHeaders) {
      this._verifyResolution();
      this._resolved = true;
      this.emit("requestResolved", this);
      if (typeof status !== "number") {
        status = 403;
      }
      var response = "HTTP/1.1 " + status + " " + httpStatusDescriptions[status] + "\r\nConnection: close\r\n";
      if (reason) {
        reason = reason.replace(headerSanitizeRegExp, "");
        response += "X-WebSocket-Reject-Reason: " + reason + "\r\n";
      }
      if (extraHeaders) {
        for (var key in extraHeaders) {
          var sanitizedValue = extraHeaders[key].toString().replace(headerSanitizeRegExp, "");
          var sanitizedKey = key.replace(headerSanitizeRegExp, "");
          response += sanitizedKey + ": " + sanitizedValue + "\r\n";
        }
      }
      response += "\r\n";
      this.socket.end(response, "ascii");
      this.emit("requestRejected", this);
    };
    WebSocketRequest.prototype._handleSocketCloseBeforeAccept = function() {
      this._socketIsClosing = true;
      this._removeSocketCloseListeners();
    };
    WebSocketRequest.prototype._removeSocketCloseListeners = function() {
      this.socket.removeListener("end", this._socketCloseHandler);
      this.socket.removeListener("close", this._socketCloseHandler);
    };
    WebSocketRequest.prototype._verifyResolution = function() {
      if (this._resolved) {
        throw new Error("WebSocketRequest may only be accepted or rejected one time.");
      }
    };
    function cleanupFailedConnection(connection) {
      process.nextTick(function() {
        connection.drop(1006, "TCP connection lost before handshake completed.", true);
      });
    }
    module2.exports = WebSocketRequest;
  }
});

// node_modules/websocket/lib/WebSocketServer.js
var require_WebSocketServer = __commonJS({
  "node_modules/websocket/lib/WebSocketServer.js"(exports2, module2) {
    var extend = require_utils().extend;
    var utils = require_utils();
    var util = require("util");
    var debug = require_src()("websocket:server");
    var EventEmitter2 = require("events").EventEmitter;
    var WebSocketRequest = require_WebSocketRequest();
    var WebSocketServer = function WebSocketServer2(config) {
      EventEmitter2.call(this);
      this._handlers = {
        upgrade: this.handleUpgrade.bind(this),
        requestAccepted: this.handleRequestAccepted.bind(this),
        requestResolved: this.handleRequestResolved.bind(this)
      };
      this.connections = [];
      this.pendingRequests = [];
      if (config) {
        this.mount(config);
      }
    };
    util.inherits(WebSocketServer, EventEmitter2);
    WebSocketServer.prototype.mount = function(config) {
      this.config = {
        // The http server instance to attach to.  Required.
        httpServer: null,
        // 64KiB max frame size.
        maxReceivedFrameSize: 65536,
        // 1MiB max message size, only applicable if
        // assembleFragments is true
        maxReceivedMessageSize: 1048576,
        // Outgoing messages larger than fragmentationThreshold will be
        // split into multiple fragments.
        fragmentOutgoingMessages: true,
        // Outgoing frames are fragmented if they exceed this threshold.
        // Default is 16KiB
        fragmentationThreshold: 16384,
        // If true, the server will automatically send a ping to all
        // clients every 'keepaliveInterval' milliseconds.  The timer is
        // reset on any received data from the client.
        keepalive: true,
        // The interval to send keepalive pings to connected clients if the
        // connection is idle.  Any received data will reset the counter.
        keepaliveInterval: 2e4,
        // If true, the server will consider any connection that has not
        // received any data within the amount of time specified by
        // 'keepaliveGracePeriod' after a keepalive ping has been sent to
        // be dead, and will drop the connection.
        // Ignored if keepalive is false.
        dropConnectionOnKeepaliveTimeout: true,
        // The amount of time to wait after sending a keepalive ping before
        // closing the connection if the connected peer does not respond.
        // Ignored if keepalive is false.
        keepaliveGracePeriod: 1e4,
        // Whether to use native TCP keep-alive instead of WebSockets ping
        // and pong packets.  Native TCP keep-alive sends smaller packets
        // on the wire and so uses bandwidth more efficiently.  This may
        // be more important when talking to mobile devices.
        // If this value is set to true, then these values will be ignored:
        //   keepaliveGracePeriod
        //   dropConnectionOnKeepaliveTimeout
        useNativeKeepalive: false,
        // If true, fragmented messages will be automatically assembled
        // and the full message will be emitted via a 'message' event.
        // If false, each frame will be emitted via a 'frame' event and
        // the application will be responsible for aggregating multiple
        // fragmented frames.  Single-frame messages will emit a 'message'
        // event in addition to the 'frame' event.
        // Most users will want to leave this set to 'true'
        assembleFragments: true,
        // If this is true, websocket connections will be accepted
        // regardless of the path and protocol specified by the client.
        // The protocol accepted will be the first that was requested
        // by the client.  Clients from any origin will be accepted.
        // This should only be used in the simplest of cases.  You should
        // probably leave this set to 'false' and inspect the request
        // object to make sure it's acceptable before accepting it.
        autoAcceptConnections: false,
        // Whether or not the X-Forwarded-For header should be respected.
        // It's important to set this to 'true' when accepting connections
        // from untrusted clients, as a malicious client could spoof its
        // IP address by simply setting this header.  It's meant to be added
        // by a trusted proxy or other intermediary within your own
        // infrastructure.
        // See:  http://en.wikipedia.org/wiki/X-Forwarded-For
        ignoreXForwardedFor: false,
        // If this is true, 'cookie' headers are parsed and exposed as WebSocketRequest.cookies
        parseCookies: true,
        // If this is true, 'sec-websocket-extensions' headers are parsed and exposed as WebSocketRequest.requestedExtensions
        parseExtensions: true,
        // The Nagle Algorithm makes more efficient use of network resources
        // by introducing a small delay before sending small packets so that
        // multiple messages can be batched together before going onto the
        // wire.  This however comes at the cost of latency, so the default
        // is to disable it.  If you don't need low latency and are streaming
        // lots of small messages, you can change this to 'false'
        disableNagleAlgorithm: true,
        // The number of milliseconds to wait after sending a close frame
        // for an acknowledgement to come back before giving up and just
        // closing the socket.
        closeTimeout: 5e3
      };
      extend(this.config, config);
      if (this.config.httpServer) {
        if (!Array.isArray(this.config.httpServer)) {
          this.config.httpServer = [this.config.httpServer];
        }
        var upgradeHandler = this._handlers.upgrade;
        this.config.httpServer.forEach(function(httpServer) {
          httpServer.on("upgrade", upgradeHandler);
        });
      } else {
        throw new Error("You must specify an httpServer on which to mount the WebSocket server.");
      }
    };
    WebSocketServer.prototype.unmount = function() {
      var upgradeHandler = this._handlers.upgrade;
      this.config.httpServer.forEach(function(httpServer) {
        httpServer.removeListener("upgrade", upgradeHandler);
      });
    };
    WebSocketServer.prototype.closeAllConnections = function() {
      this.connections.forEach(function(connection) {
        connection.close();
      });
      this.pendingRequests.forEach(function(request) {
        process.nextTick(function() {
          request.reject(503);
        });
      });
    };
    WebSocketServer.prototype.broadcast = function(data) {
      if (Buffer.isBuffer(data)) {
        this.broadcastBytes(data);
      } else if (typeof data.toString === "function") {
        this.broadcastUTF(data);
      }
    };
    WebSocketServer.prototype.broadcastUTF = function(utfData) {
      this.connections.forEach(function(connection) {
        connection.sendUTF(utfData);
      });
    };
    WebSocketServer.prototype.broadcastBytes = function(binaryData) {
      this.connections.forEach(function(connection) {
        connection.sendBytes(binaryData);
      });
    };
    WebSocketServer.prototype.shutDown = function() {
      this.unmount();
      this.closeAllConnections();
    };
    WebSocketServer.prototype.handleUpgrade = function(request, socket) {
      var self = this;
      var wsRequest = new WebSocketRequest(socket, request, this.config);
      try {
        wsRequest.readHandshake();
      } catch (e) {
        wsRequest.reject(
          e.httpCode ? e.httpCode : 400,
          e.message,
          e.headers
        );
        debug("Invalid handshake: %s", e.message);
        this.emit("upgradeError", e);
        return;
      }
      this.pendingRequests.push(wsRequest);
      wsRequest.once("requestAccepted", this._handlers.requestAccepted);
      wsRequest.once("requestResolved", this._handlers.requestResolved);
      socket.once("close", function() {
        self._handlers.requestResolved(wsRequest);
      });
      if (!this.config.autoAcceptConnections && utils.eventEmitterListenerCount(this, "request") > 0) {
        this.emit("request", wsRequest);
      } else if (this.config.autoAcceptConnections) {
        wsRequest.accept(wsRequest.requestedProtocols[0], wsRequest.origin);
      } else {
        wsRequest.reject(404, "No handler is configured to accept the connection.");
      }
    };
    WebSocketServer.prototype.handleRequestAccepted = function(connection) {
      var self = this;
      connection.once("close", function(closeReason, description) {
        self.handleConnectionClose(connection, closeReason, description);
      });
      this.connections.push(connection);
      this.emit("connect", connection);
    };
    WebSocketServer.prototype.handleConnectionClose = function(connection, closeReason, description) {
      var index = this.connections.indexOf(connection);
      if (index !== -1) {
        this.connections.splice(index, 1);
      }
      this.emit("close", connection, closeReason, description);
    };
    WebSocketServer.prototype.handleRequestResolved = function(request) {
      var index = this.pendingRequests.indexOf(request);
      if (index !== -1) {
        this.pendingRequests.splice(index, 1);
      }
    };
    module2.exports = WebSocketServer;
  }
});

// node_modules/websocket/lib/WebSocketClient.js
var require_WebSocketClient = __commonJS({
  "node_modules/websocket/lib/WebSocketClient.js"(exports2, module2) {
    var utils = require_utils();
    var extend = utils.extend;
    var util = require("util");
    var EventEmitter2 = require("events").EventEmitter;
    var http = require("http");
    var https = require("https");
    var url = require("url");
    var crypto2 = require("crypto");
    var WebSocketConnection = require_WebSocketConnection();
    var bufferAllocUnsafe = utils.bufferAllocUnsafe;
    var protocolSeparators = [
      "(",
      ")",
      "<",
      ">",
      "@",
      ",",
      ";",
      ":",
      "\\",
      '"',
      "/",
      "[",
      "]",
      "?",
      "=",
      "{",
      "}",
      " ",
      String.fromCharCode(9)
    ];
    var excludedTlsOptions = ["hostname", "port", "method", "path", "headers"];
    function WebSocketClient(config) {
      EventEmitter2.call(this);
      this.config = {
        // 1MiB max frame size.
        maxReceivedFrameSize: 1048576,
        // 8MiB max message size, only applicable if
        // assembleFragments is true
        maxReceivedMessageSize: 8388608,
        // Outgoing messages larger than fragmentationThreshold will be
        // split into multiple fragments.
        fragmentOutgoingMessages: true,
        // Outgoing frames are fragmented if they exceed this threshold.
        // Default is 16KiB
        fragmentationThreshold: 16384,
        // Which version of the protocol to use for this session.  This
        // option will be removed once the protocol is finalized by the IETF
        // It is only available to ease the transition through the
        // intermediate draft protocol versions.
        // At present, it only affects the name of the Origin header.
        webSocketVersion: 13,
        // If true, fragmented messages will be automatically assembled
        // and the full message will be emitted via a 'message' event.
        // If false, each frame will be emitted via a 'frame' event and
        // the application will be responsible for aggregating multiple
        // fragmented frames.  Single-frame messages will emit a 'message'
        // event in addition to the 'frame' event.
        // Most users will want to leave this set to 'true'
        assembleFragments: true,
        // The Nagle Algorithm makes more efficient use of network resources
        // by introducing a small delay before sending small packets so that
        // multiple messages can be batched together before going onto the
        // wire.  This however comes at the cost of latency, so the default
        // is to disable it.  If you don't need low latency and are streaming
        // lots of small messages, you can change this to 'false'
        disableNagleAlgorithm: true,
        // The number of milliseconds to wait after sending a close frame
        // for an acknowledgement to come back before giving up and just
        // closing the socket.
        closeTimeout: 5e3,
        // Options to pass to https.connect if connecting via TLS
        tlsOptions: {}
      };
      if (config) {
        var tlsOptions;
        if (config.tlsOptions) {
          tlsOptions = config.tlsOptions;
          delete config.tlsOptions;
        } else {
          tlsOptions = {};
        }
        extend(this.config, config);
        extend(this.config.tlsOptions, tlsOptions);
      }
      this._req = null;
      switch (this.config.webSocketVersion) {
        case 8:
        case 13:
          break;
        default:
          throw new Error("Requested webSocketVersion is not supported. Allowed values are 8 and 13.");
      }
    }
    util.inherits(WebSocketClient, EventEmitter2);
    WebSocketClient.prototype.connect = function(requestUrl, protocols, origin, headers, extraRequestOptions) {
      var self = this;
      if (typeof protocols === "string") {
        if (protocols.length > 0) {
          protocols = [protocols];
        } else {
          protocols = [];
        }
      }
      if (!(protocols instanceof Array)) {
        protocols = [];
      }
      this.protocols = protocols;
      this.origin = origin;
      if (typeof requestUrl === "string") {
        this.url = url.parse(requestUrl);
      } else {
        this.url = requestUrl;
      }
      if (!this.url.protocol) {
        throw new Error("You must specify a full WebSocket URL, including protocol.");
      }
      if (!this.url.host) {
        throw new Error("You must specify a full WebSocket URL, including hostname. Relative URLs are not supported.");
      }
      this.secure = this.url.protocol === "wss:";
      this.protocols.forEach(function(protocol) {
        for (var i2 = 0; i2 < protocol.length; i2++) {
          var charCode = protocol.charCodeAt(i2);
          var character = protocol.charAt(i2);
          if (charCode < 33 || charCode > 126 || protocolSeparators.indexOf(character) !== -1) {
            throw new Error('Protocol list contains invalid character "' + String.fromCharCode(charCode) + '"');
          }
        }
      });
      var defaultPorts = {
        "ws:": "80",
        "wss:": "443"
      };
      if (!this.url.port) {
        this.url.port = defaultPorts[this.url.protocol];
      }
      var nonce = bufferAllocUnsafe(16);
      for (var i = 0; i < 16; i++) {
        nonce[i] = Math.round(Math.random() * 255);
      }
      this.base64nonce = nonce.toString("base64");
      var hostHeaderValue = this.url.hostname;
      if (this.url.protocol === "ws:" && this.url.port !== "80" || this.url.protocol === "wss:" && this.url.port !== "443") {
        hostHeaderValue += ":" + this.url.port;
      }
      var reqHeaders = {};
      if (this.secure && this.config.tlsOptions.hasOwnProperty("headers")) {
        extend(reqHeaders, this.config.tlsOptions.headers);
      }
      if (headers) {
        extend(reqHeaders, headers);
      }
      extend(reqHeaders, {
        "Upgrade": "websocket",
        "Connection": "Upgrade",
        "Sec-WebSocket-Version": this.config.webSocketVersion.toString(10),
        "Sec-WebSocket-Key": this.base64nonce,
        "Host": reqHeaders.Host || hostHeaderValue
      });
      if (this.protocols.length > 0) {
        reqHeaders["Sec-WebSocket-Protocol"] = this.protocols.join(", ");
      }
      if (this.origin) {
        if (this.config.webSocketVersion === 13) {
          reqHeaders["Origin"] = this.origin;
        } else if (this.config.webSocketVersion === 8) {
          reqHeaders["Sec-WebSocket-Origin"] = this.origin;
        }
      }
      var pathAndQuery;
      if (this.url.pathname) {
        pathAndQuery = this.url.path;
      } else if (this.url.path) {
        pathAndQuery = "/" + this.url.path;
      } else {
        pathAndQuery = "/";
      }
      function handleRequestError(error) {
        self._req = null;
        self.emit("connectFailed", error);
      }
      var requestOptions = {
        agent: false
      };
      if (extraRequestOptions) {
        extend(requestOptions, extraRequestOptions);
      }
      extend(requestOptions, {
        hostname: this.url.hostname,
        port: this.url.port,
        method: "GET",
        path: pathAndQuery,
        headers: reqHeaders
      });
      if (this.secure) {
        var tlsOptions = this.config.tlsOptions;
        for (var key in tlsOptions) {
          if (tlsOptions.hasOwnProperty(key) && excludedTlsOptions.indexOf(key) === -1) {
            requestOptions[key] = tlsOptions[key];
          }
        }
      }
      var req = this._req = (this.secure ? https : http).request(requestOptions);
      req.on("upgrade", function handleRequestUpgrade(response, socket, head) {
        self._req = null;
        req.removeListener("error", handleRequestError);
        self.socket = socket;
        self.response = response;
        self.firstDataChunk = head;
        self.validateHandshake();
      });
      req.on("error", handleRequestError);
      req.on("response", function(response) {
        self._req = null;
        if (utils.eventEmitterListenerCount(self, "httpResponse") > 0) {
          self.emit("httpResponse", response, self);
          if (response.socket) {
            response.socket.end();
          }
        } else {
          var headerDumpParts = [];
          for (var headerName in response.headers) {
            headerDumpParts.push(headerName + ": " + response.headers[headerName]);
          }
          self.failHandshake(
            "Server responded with a non-101 status: " + response.statusCode + " " + response.statusMessage + "\nResponse Headers Follow:\n" + headerDumpParts.join("\n") + "\n"
          );
        }
      });
      req.end();
    };
    WebSocketClient.prototype.validateHandshake = function() {
      var headers = this.response.headers;
      if (this.protocols.length > 0) {
        this.protocol = headers["sec-websocket-protocol"];
        if (this.protocol) {
          if (this.protocols.indexOf(this.protocol) === -1) {
            this.failHandshake("Server did not respond with a requested protocol.");
            return;
          }
        } else {
          this.failHandshake("Expected a Sec-WebSocket-Protocol header.");
          return;
        }
      }
      if (!(headers["connection"] && headers["connection"].toLocaleLowerCase() === "upgrade")) {
        this.failHandshake("Expected a Connection: Upgrade header from the server");
        return;
      }
      if (!(headers["upgrade"] && headers["upgrade"].toLocaleLowerCase() === "websocket")) {
        this.failHandshake("Expected an Upgrade: websocket header from the server");
        return;
      }
      var sha1 = crypto2.createHash("sha1");
      sha1.update(this.base64nonce + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11");
      var expectedKey = sha1.digest("base64");
      if (!headers["sec-websocket-accept"]) {
        this.failHandshake("Expected Sec-WebSocket-Accept header from server");
        return;
      }
      if (headers["sec-websocket-accept"] !== expectedKey) {
        this.failHandshake("Sec-WebSocket-Accept header from server didn't match expected value of " + expectedKey);
        return;
      }
      this.succeedHandshake();
    };
    WebSocketClient.prototype.failHandshake = function(errorDescription) {
      if (this.socket && this.socket.writable) {
        this.socket.end();
      }
      this.emit("connectFailed", new Error(errorDescription));
    };
    WebSocketClient.prototype.succeedHandshake = function() {
      var connection = new WebSocketConnection(this.socket, [], this.protocol, true, this.config);
      connection.webSocketVersion = this.config.webSocketVersion;
      connection._addSocketEventListeners();
      this.emit("connect", connection);
      if (this.firstDataChunk.length > 0) {
        connection.handleSocketData(this.firstDataChunk);
      }
      this.firstDataChunk = null;
    };
    WebSocketClient.prototype.abort = function() {
      if (this._req) {
        this._req.abort();
      }
    };
    module2.exports = WebSocketClient;
  }
});

// node_modules/websocket/lib/WebSocketRouterRequest.js
var require_WebSocketRouterRequest = __commonJS({
  "node_modules/websocket/lib/WebSocketRouterRequest.js"(exports2, module2) {
    var util = require("util");
    var EventEmitter2 = require("events").EventEmitter;
    function WebSocketRouterRequest(webSocketRequest, resolvedProtocol) {
      EventEmitter2.call(this);
      this.webSocketRequest = webSocketRequest;
      if (resolvedProtocol === "____no_protocol____") {
        this.protocol = null;
      } else {
        this.protocol = resolvedProtocol;
      }
      this.origin = webSocketRequest.origin;
      this.resource = webSocketRequest.resource;
      this.resourceURL = webSocketRequest.resourceURL;
      this.httpRequest = webSocketRequest.httpRequest;
      this.remoteAddress = webSocketRequest.remoteAddress;
      this.webSocketVersion = webSocketRequest.webSocketVersion;
      this.requestedExtensions = webSocketRequest.requestedExtensions;
      this.cookies = webSocketRequest.cookies;
    }
    util.inherits(WebSocketRouterRequest, EventEmitter2);
    WebSocketRouterRequest.prototype.accept = function(origin, cookies) {
      var connection = this.webSocketRequest.accept(this.protocol, origin, cookies);
      this.emit("requestAccepted", connection);
      return connection;
    };
    WebSocketRouterRequest.prototype.reject = function(status, reason, extraHeaders) {
      this.webSocketRequest.reject(status, reason, extraHeaders);
      this.emit("requestRejected", this);
    };
    module2.exports = WebSocketRouterRequest;
  }
});

// node_modules/websocket/lib/WebSocketRouter.js
var require_WebSocketRouter = __commonJS({
  "node_modules/websocket/lib/WebSocketRouter.js"(exports2, module2) {
    var extend = require_utils().extend;
    var util = require("util");
    var EventEmitter2 = require("events").EventEmitter;
    var WebSocketRouterRequest = require_WebSocketRouterRequest();
    function WebSocketRouter(config) {
      EventEmitter2.call(this);
      this.config = {
        // The WebSocketServer instance to attach to.
        server: null
      };
      if (config) {
        extend(this.config, config);
      }
      this.handlers = [];
      this._requestHandler = this.handleRequest.bind(this);
      if (this.config.server) {
        this.attachServer(this.config.server);
      }
    }
    util.inherits(WebSocketRouter, EventEmitter2);
    WebSocketRouter.prototype.attachServer = function(server) {
      if (server) {
        this.server = server;
        this.server.on("request", this._requestHandler);
      } else {
        throw new Error("You must specify a WebSocketServer instance to attach to.");
      }
    };
    WebSocketRouter.prototype.detachServer = function() {
      if (this.server) {
        this.server.removeListener("request", this._requestHandler);
        this.server = null;
      } else {
        throw new Error("Cannot detach from server: not attached.");
      }
    };
    WebSocketRouter.prototype.mount = function(path5, protocol, callback) {
      if (!path5) {
        throw new Error("You must specify a path for this handler.");
      }
      if (!protocol) {
        protocol = "____no_protocol____";
      }
      if (!callback) {
        throw new Error("You must specify a callback for this handler.");
      }
      path5 = this.pathToRegExp(path5);
      if (!(path5 instanceof RegExp)) {
        throw new Error("Path must be specified as either a string or a RegExp.");
      }
      var pathString = path5.toString();
      protocol = protocol.toLocaleLowerCase();
      if (this.findHandlerIndex(pathString, protocol) !== -1) {
        throw new Error("You may only mount one handler per path/protocol combination.");
      }
      this.handlers.push({
        "path": path5,
        "pathString": pathString,
        "protocol": protocol,
        "callback": callback
      });
    };
    WebSocketRouter.prototype.unmount = function(path5, protocol) {
      var index = this.findHandlerIndex(this.pathToRegExp(path5).toString(), protocol);
      if (index !== -1) {
        this.handlers.splice(index, 1);
      } else {
        throw new Error("Unable to find a route matching the specified path and protocol.");
      }
    };
    WebSocketRouter.prototype.findHandlerIndex = function(pathString, protocol) {
      protocol = protocol.toLocaleLowerCase();
      for (var i = 0, len = this.handlers.length; i < len; i++) {
        var handler = this.handlers[i];
        if (handler.pathString === pathString && handler.protocol === protocol) {
          return i;
        }
      }
      return -1;
    };
    WebSocketRouter.prototype.pathToRegExp = function(path5) {
      if (typeof path5 === "string") {
        if (path5 === "*") {
          path5 = /^.*$/;
        } else {
          path5 = path5.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
          path5 = new RegExp("^" + path5 + "$");
        }
      }
      return path5;
    };
    WebSocketRouter.prototype.handleRequest = function(request) {
      var requestedProtocols = request.requestedProtocols;
      if (requestedProtocols.length === 0) {
        requestedProtocols = ["____no_protocol____"];
      }
      for (var i = 0; i < requestedProtocols.length; i++) {
        var requestedProtocol = requestedProtocols[i].toLocaleLowerCase();
        for (var j = 0, len = this.handlers.length; j < len; j++) {
          var handler = this.handlers[j];
          if (handler.path.test(request.resourceURL.pathname)) {
            if (requestedProtocol === handler.protocol || handler.protocol === "*") {
              var routerRequest = new WebSocketRouterRequest(request, requestedProtocol);
              handler.callback(routerRequest);
              return;
            }
          }
        }
      }
      request.reject(404, "No handler is available for the given request.");
    };
    module2.exports = WebSocketRouter;
  }
});

// node_modules/is-typedarray/index.js
var require_is_typedarray = __commonJS({
  "node_modules/is-typedarray/index.js"(exports2, module2) {
    module2.exports = isTypedArray;
    isTypedArray.strict = isStrictTypedArray;
    isTypedArray.loose = isLooseTypedArray;
    var toString = Object.prototype.toString;
    var names = {
      "[object Int8Array]": true,
      "[object Int16Array]": true,
      "[object Int32Array]": true,
      "[object Uint8Array]": true,
      "[object Uint8ClampedArray]": true,
      "[object Uint16Array]": true,
      "[object Uint32Array]": true,
      "[object Float32Array]": true,
      "[object Float64Array]": true
    };
    function isTypedArray(arr) {
      return isStrictTypedArray(arr) || isLooseTypedArray(arr);
    }
    function isStrictTypedArray(arr) {
      return arr instanceof Int8Array || arr instanceof Int16Array || arr instanceof Int32Array || arr instanceof Uint8Array || arr instanceof Uint8ClampedArray || arr instanceof Uint16Array || arr instanceof Uint32Array || arr instanceof Float32Array || arr instanceof Float64Array;
    }
    function isLooseTypedArray(arr) {
      return names[toString.call(arr)];
    }
  }
});

// node_modules/typedarray-to-buffer/index.js
var require_typedarray_to_buffer = __commonJS({
  "node_modules/typedarray-to-buffer/index.js"(exports2, module2) {
    var isTypedArray = require_is_typedarray().strict;
    module2.exports = function typedarrayToBuffer(arr) {
      if (isTypedArray(arr)) {
        var buf = Buffer.from(arr.buffer);
        if (arr.byteLength !== arr.buffer.byteLength) {
          buf = buf.slice(arr.byteOffset, arr.byteOffset + arr.byteLength);
        }
        return buf;
      } else {
        return Buffer.from(arr);
      }
    };
  }
});

// node_modules/yaeti/lib/EventTarget.js
var require_EventTarget = __commonJS({
  "node_modules/yaeti/lib/EventTarget.js"(exports2, module2) {
    module2.exports = _EventTarget;
    function _EventTarget() {
      if (typeof this.addEventListener === "function") {
        return;
      }
      this._listeners = {};
      this.addEventListener = _addEventListener;
      this.removeEventListener = _removeEventListener;
      this.dispatchEvent = _dispatchEvent;
    }
    Object.defineProperties(_EventTarget.prototype, {
      listeners: {
        get: function() {
          return this._listeners;
        }
      }
    });
    function _addEventListener(type, newListener) {
      var listenersType, i, listener;
      if (!type || !newListener) {
        return;
      }
      listenersType = this._listeners[type];
      if (listenersType === void 0) {
        this._listeners[type] = listenersType = [];
      }
      for (i = 0; !!(listener = listenersType[i]); i++) {
        if (listener === newListener) {
          return;
        }
      }
      listenersType.push(newListener);
    }
    function _removeEventListener(type, oldListener) {
      var listenersType, i, listener;
      if (!type || !oldListener) {
        return;
      }
      listenersType = this._listeners[type];
      if (listenersType === void 0) {
        return;
      }
      for (i = 0; !!(listener = listenersType[i]); i++) {
        if (listener === oldListener) {
          listenersType.splice(i, 1);
          break;
        }
      }
      if (listenersType.length === 0) {
        delete this._listeners[type];
      }
    }
    function _dispatchEvent(event) {
      var type, listenersType, dummyListener, stopImmediatePropagation = false, i, listener;
      if (!event || typeof event.type !== "string") {
        throw new Error("`event` must have a valid `type` property");
      }
      if (event._yaeti) {
        event.target = this;
        event.cancelable = true;
      }
      try {
        event.stopImmediatePropagation = function() {
          stopImmediatePropagation = true;
        };
      } catch (error) {
      }
      type = event.type;
      listenersType = this._listeners[type] || [];
      dummyListener = this["on" + type];
      if (typeof dummyListener === "function") {
        dummyListener.call(this, event);
      }
      for (i = 0; !!(listener = listenersType[i]); i++) {
        if (stopImmediatePropagation) {
          break;
        }
        listener.call(this, event);
      }
      return !event.defaultPrevented;
    }
  }
});

// node_modules/yaeti/lib/Event.js
var require_Event = __commonJS({
  "node_modules/yaeti/lib/Event.js"(exports2, module2) {
    module2.exports = _Event;
    function _Event(type) {
      this.type = type;
      this.isTrusted = false;
      this._yaeti = true;
    }
  }
});

// node_modules/yaeti/index.js
var require_yaeti = __commonJS({
  "node_modules/yaeti/index.js"(exports2, module2) {
    module2.exports = {
      EventTarget: require_EventTarget(),
      Event: require_Event()
    };
  }
});

// node_modules/websocket/lib/W3CWebSocket.js
var require_W3CWebSocket = __commonJS({
  "node_modules/websocket/lib/W3CWebSocket.js"(exports2, module2) {
    var WebSocketClient = require_WebSocketClient();
    var toBuffer = require_typedarray_to_buffer();
    var yaeti = require_yaeti();
    var CONNECTING = 0;
    var OPEN = 1;
    var CLOSING = 2;
    var CLOSED = 3;
    module2.exports = W3CWebSocket;
    function W3CWebSocket(url, protocols, origin, headers, requestOptions, clientConfig) {
      yaeti.EventTarget.call(this);
      clientConfig = clientConfig || {};
      clientConfig.assembleFragments = true;
      var self = this;
      this._url = url;
      this._readyState = CONNECTING;
      this._protocol = void 0;
      this._extensions = "";
      this._bufferedAmount = 0;
      this._binaryType = "arraybuffer";
      this._connection = void 0;
      this._client = new WebSocketClient(clientConfig);
      this._client.on("connect", function(connection) {
        onConnect.call(self, connection);
      });
      this._client.on("connectFailed", function() {
        onConnectFailed.call(self);
      });
      this._client.connect(url, protocols, origin, headers, requestOptions);
    }
    Object.defineProperties(W3CWebSocket.prototype, {
      url: { get: function() {
        return this._url;
      } },
      readyState: { get: function() {
        return this._readyState;
      } },
      protocol: { get: function() {
        return this._protocol;
      } },
      extensions: { get: function() {
        return this._extensions;
      } },
      bufferedAmount: { get: function() {
        return this._bufferedAmount;
      } }
    });
    Object.defineProperties(W3CWebSocket.prototype, {
      binaryType: {
        get: function() {
          return this._binaryType;
        },
        set: function(type) {
          if (type !== "arraybuffer") {
            throw new SyntaxError('just "arraybuffer" type allowed for "binaryType" attribute');
          }
          this._binaryType = type;
        }
      }
    });
    [["CONNECTING", CONNECTING], ["OPEN", OPEN], ["CLOSING", CLOSING], ["CLOSED", CLOSED]].forEach(function(property) {
      Object.defineProperty(W3CWebSocket.prototype, property[0], {
        get: function() {
          return property[1];
        }
      });
    });
    [["CONNECTING", CONNECTING], ["OPEN", OPEN], ["CLOSING", CLOSING], ["CLOSED", CLOSED]].forEach(function(property) {
      Object.defineProperty(W3CWebSocket, property[0], {
        get: function() {
          return property[1];
        }
      });
    });
    W3CWebSocket.prototype.send = function(data) {
      if (this._readyState !== OPEN) {
        throw new Error("cannot call send() while not connected");
      }
      if (typeof data === "string" || data instanceof String) {
        this._connection.sendUTF(data);
      } else {
        if (data instanceof Buffer) {
          this._connection.sendBytes(data);
        } else if (data.byteLength || data.byteLength === 0) {
          data = toBuffer(data);
          this._connection.sendBytes(data);
        } else {
          throw new Error("unknown binary data:", data);
        }
      }
    };
    W3CWebSocket.prototype.close = function(code, reason) {
      switch (this._readyState) {
        case CONNECTING:
          onConnectFailed.call(this);
          this._client.on("connect", function(connection) {
            if (code) {
              connection.close(code, reason);
            } else {
              connection.close();
            }
          });
          break;
        case OPEN:
          this._readyState = CLOSING;
          if (code) {
            this._connection.close(code, reason);
          } else {
            this._connection.close();
          }
          break;
        case CLOSING:
        case CLOSED:
          break;
      }
    };
    function createCloseEvent(code, reason) {
      var event = new yaeti.Event("close");
      event.code = code;
      event.reason = reason;
      event.wasClean = typeof code === "undefined" || code === 1e3;
      return event;
    }
    function createMessageEvent(data) {
      var event = new yaeti.Event("message");
      event.data = data;
      return event;
    }
    function onConnect(connection) {
      var self = this;
      this._readyState = OPEN;
      this._connection = connection;
      this._protocol = connection.protocol;
      this._extensions = connection.extensions;
      this._connection.on("close", function(code, reason) {
        onClose.call(self, code, reason);
      });
      this._connection.on("message", function(msg) {
        onMessage.call(self, msg);
      });
      this.dispatchEvent(new yaeti.Event("open"));
    }
    function onConnectFailed() {
      destroy.call(this);
      this._readyState = CLOSED;
      try {
        this.dispatchEvent(new yaeti.Event("error"));
      } finally {
        this.dispatchEvent(createCloseEvent(1006, "connection failed"));
      }
    }
    function onClose(code, reason) {
      destroy.call(this);
      this._readyState = CLOSED;
      this.dispatchEvent(createCloseEvent(code, reason || ""));
    }
    function onMessage(message) {
      if (message.utf8Data) {
        this.dispatchEvent(createMessageEvent(message.utf8Data));
      } else if (message.binaryData) {
        if (this.binaryType === "arraybuffer") {
          var buffer = message.binaryData;
          var arraybuffer = new ArrayBuffer(buffer.length);
          var view = new Uint8Array(arraybuffer);
          for (var i = 0, len = buffer.length; i < len; ++i) {
            view[i] = buffer[i];
          }
          this.dispatchEvent(createMessageEvent(arraybuffer));
        }
      }
    }
    function destroy() {
      this._client.removeAllListeners();
      if (this._connection) {
        this._connection.removeAllListeners();
      }
    }
  }
});

// node_modules/websocket/lib/Deprecation.js
var require_Deprecation = __commonJS({
  "node_modules/websocket/lib/Deprecation.js"(exports2, module2) {
    var Deprecation = {
      disableWarnings: false,
      deprecationWarningMap: {},
      warn: function(deprecationName) {
        if (!this.disableWarnings && this.deprecationWarningMap[deprecationName]) {
          console.warn("DEPRECATION WARNING: " + this.deprecationWarningMap[deprecationName]);
          this.deprecationWarningMap[deprecationName] = false;
        }
      }
    };
    module2.exports = Deprecation;
  }
});

// node_modules/websocket/package.json
var require_package = __commonJS({
  "node_modules/websocket/package.json"(exports2, module2) {
    module2.exports = {
      name: "websocket",
      description: "Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.",
      keywords: [
        "websocket",
        "websockets",
        "socket",
        "networking",
        "comet",
        "push",
        "RFC-6455",
        "realtime",
        "server",
        "client"
      ],
      author: "Brian McKelvey <theturtle32@gmail.com> (https://github.com/theturtle32)",
      contributors: [
        "I\xF1aki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)"
      ],
      version: "1.0.35",
      repository: {
        type: "git",
        url: "https://github.com/theturtle32/WebSocket-Node.git"
      },
      homepage: "https://github.com/theturtle32/WebSocket-Node",
      engines: {
        node: ">=4.0.0"
      },
      dependencies: {
        bufferutil: "^4.0.1",
        debug: "^2.2.0",
        "es5-ext": "^0.10.63",
        "typedarray-to-buffer": "^3.1.5",
        "utf-8-validate": "^5.0.2",
        yaeti: "^0.0.6"
      },
      devDependencies: {
        "buffer-equal": "^1.0.0",
        gulp: "^4.0.2",
        "gulp-jshint": "^2.0.4",
        "jshint-stylish": "^2.2.1",
        jshint: "^2.0.0",
        tape: "^4.9.1"
      },
      config: {
        verbose: false
      },
      scripts: {
        test: "tape test/unit/*.js",
        gulp: "gulp"
      },
      main: "index",
      directories: {
        lib: "./lib"
      },
      browser: "lib/browser.js",
      license: "Apache-2.0"
    };
  }
});

// node_modules/websocket/lib/version.js
var require_version = __commonJS({
  "node_modules/websocket/lib/version.js"(exports2, module2) {
    module2.exports = require_package().version;
  }
});

// node_modules/websocket/lib/websocket.js
var require_websocket = __commonJS({
  "node_modules/websocket/lib/websocket.js"(exports2, module2) {
    module2.exports = {
      "server": require_WebSocketServer(),
      "client": require_WebSocketClient(),
      "router": require_WebSocketRouter(),
      "frame": require_WebSocketFrame(),
      "request": require_WebSocketRequest(),
      "connection": require_WebSocketConnection(),
      "w3cwebsocket": require_W3CWebSocket(),
      "deprecation": require_Deprecation(),
      "version": require_version()
    };
  }
});

// node_modules/websocket/index.js
var require_websocket2 = __commonJS({
  "node_modules/websocket/index.js"(exports2, module2) {
    module2.exports = require_websocket();
  }
});

// node_modules/airdcpp-extension-settings/dist/settings-manager.js
var require_settings_manager = __commonJS({
  "node_modules/airdcpp-extension-settings/dist/settings-manager.js"(exports2, module2) {
    var invariant5 = require_invariant();
    var filterDefaultValues = (settingValueMap, definitions) => {
      const nonDefaultValues = Object.keys(settingValueMap).reduce((reduced, key) => {
        const definition = definitions.find((def) => def.key === key);
        if (!definition) {
          return reduced;
        }
        if (settingValueMap[key] === definition.default_value) {
          return reduced;
        }
        reduced[key] = settingValueMap[key];
        return reduced;
      }, {});
      return nonDefaultValues;
    };
    module2.exports = function(extension, logger, fs6, api) {
      const {
        configFile,
        configVersion,
        definitions
      } = extension;
      let settings;
      let valuesUpdatedCallback;
      const onSettingsUpdated = (updatedValues) => {
        settings = {
          ...settings,
          ...updatedValues
        };
        if (valuesUpdatedCallback) {
          valuesUpdatedCallback(updatedValues);
        }
        logger.verbose(`Writing settings to ${configFile}...`);
        const fileContent = {
          version: configVersion,
          settings: filterDefaultValues(settings, definitions)
        };
        fs6.writeFile(configFile, JSON.stringify(fileContent, null, 2), (err) => {
          if (err) {
            logger.error(`Failed to save settings to ${configFile}: ${err}`);
          }
        });
      };
      const hasDefinition = (key) => {
        return !!definitions.find((def) => def.key === key);
      };
      const getValue = (key) => {
        invariant5(hasDefinition(key), `Definition for key ${key} was not found`);
        return settings[key];
      };
      const setValue = (key, value) => {
        invariant5(hasDefinition(key), `Definition for key ${key} was not found`);
        return api.updateSettings({
          [key]: value
        });
      };
      const registerApi = async (settingsLoaded) => {
        await api.postDefinitions(definitions);
        if (settingsLoaded) {
          const filteredSettings = Object.keys(settings).reduce((reduced, key) => {
            if (hasDefinition(key)) {
              reduced[key] = settings[key];
            }
            return reduced;
          }, {});
          await api.updateSettings(filteredSettings);
        }
        settings = await api.getSettings();
        api.addSettingUpdateListener(onSettingsUpdated);
      };
      const load = async (convertHandler) => {
        let settingsLoaded = false;
        try {
          logger.verbose(`Loading settings from ${configFile}...`);
          const data = JSON.parse(fs6.readFileSync(configFile, "utf8"));
          if (data && (!data.version || !data.settings)) {
            throw "Invalid settings format";
          }
          if (data.version !== configVersion && convertHandler) {
            settings = convertHandler(data.version, data.settings);
            invariant5(settings, `Migration handler should return the new settings`);
          } else {
            settings = data.settings;
          }
          settingsLoaded = true;
        } catch (err) {
          logger.verbose(`Failed to load settings: ${err}`);
        }
        try {
          await registerApi(settingsLoaded);
        } catch (err) {
          logger.error("Failed to register settings: " + err.message);
        }
        if (valuesUpdatedCallback) {
          valuesUpdatedCallback(settings);
        }
      };
      return {
        getValue,
        setValue,
        load,
        set onValuesUpdated(handler) {
          valuesUpdatedCallback = handler;
        },
        getValues: () => ({
          ...settings
        })
      };
    };
  }
});

// node_modules/airdcpp-extension-settings/dist/index.js
var require_dist = __commonJS({
  "node_modules/airdcpp-extension-settings/dist/index.js"(exports2, module2) {
    var invariant5 = require_invariant();
    var settingsManager = require_settings_manager();
    var DefaultAPIHandler = (socket, extensionName) => ({
      postDefinitions: (definitions) => {
        return socket.post(`extensions/${extensionName}/settings/definitions`, definitions);
      },
      getSettings: () => {
        return socket.get(`extensions/${extensionName}/settings`);
      },
      updateSettings: (settings) => {
        return socket.patch(`extensions/${extensionName}/settings`, settings);
      },
      addSettingUpdateListener: (callback) => {
        return socket.addListener("extensions", "extension_settings_updated", callback, extensionName);
      }
    });
    module2.exports = function(socket, extension) {
      const {
        extensionName,
        configVersion,
        definitions
      } = extension;
      invariant5(configVersion, "Settings version should be a positive integer");
      invariant5(Array.isArray(definitions), "Setting definitions should be an array");
      const API2 = DefaultAPIHandler(socket, extensionName);
      const manager = settingsManager(extension, socket.logger, require("fs"), API2);
      return manager;
    };
  }
});

// node_modules/fast-xml-parser/src/util.js
var require_util2 = __commonJS({
  "node_modules/fast-xml-parser/src/util.js"(exports2) {
    "use strict";
    var nameStartChar = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
    var nameChar = nameStartChar + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
    var nameRegexp = "[" + nameStartChar + "][" + nameChar + "]*";
    var regexName = new RegExp("^" + nameRegexp + "$");
    var getAllMatches = function(string, regex) {
      const matches = [];
      let match = regex.exec(string);
      while (match) {
        const allmatches = [];
        allmatches.startIndex = regex.lastIndex - match[0].length;
        const len = match.length;
        for (let index = 0; index < len; index++) {
          allmatches.push(match[index]);
        }
        matches.push(allmatches);
        match = regex.exec(string);
      }
      return matches;
    };
    var isName = function(string) {
      const match = regexName.exec(string);
      return !(match === null || typeof match === "undefined");
    };
    exports2.isExist = function(v) {
      return typeof v !== "undefined";
    };
    exports2.isEmptyObject = function(obj) {
      return Object.keys(obj).length === 0;
    };
    exports2.merge = function(target, a, arrayMode) {
      if (a) {
        const keys = Object.keys(a);
        const len = keys.length;
        for (let i = 0; i < len; i++) {
          if (arrayMode === "strict") {
            target[keys[i]] = [a[keys[i]]];
          } else {
            target[keys[i]] = a[keys[i]];
          }
        }
      }
    };
    exports2.getValue = function(v) {
      if (exports2.isExist(v)) {
        return v;
      } else {
        return "";
      }
    };
    var DANGEROUS_PROPERTY_NAMES = [
      // '__proto__',
      // 'constructor',
      // 'prototype',
      "hasOwnProperty",
      "toString",
      "valueOf",
      "__defineGetter__",
      "__defineSetter__",
      "__lookupGetter__",
      "__lookupSetter__"
    ];
    var criticalProperties = ["__proto__", "constructor", "prototype"];
    exports2.isName = isName;
    exports2.getAllMatches = getAllMatches;
    exports2.nameRegexp = nameRegexp;
    exports2.DANGEROUS_PROPERTY_NAMES = DANGEROUS_PROPERTY_NAMES;
    exports2.criticalProperties = criticalProperties;
  }
});

// node_modules/fast-xml-parser/src/validator.js
var require_validator = __commonJS({
  "node_modules/fast-xml-parser/src/validator.js"(exports2) {
    "use strict";
    var util = require_util2();
    var defaultOptions2 = {
      allowBooleanAttributes: false,
      //A tag can have attributes without any value
      unpairedTags: []
    };
    exports2.validate = function(xmlData, options) {
      options = Object.assign({}, defaultOptions2, options);
      const tags = [];
      let tagFound = false;
      let reachedRoot = false;
      if (xmlData[0] === "\uFEFF") {
        xmlData = xmlData.substr(1);
      }
      for (let i = 0; i < xmlData.length; i++) {
        if (xmlData[i] === "<" && xmlData[i + 1] === "?") {
          i += 2;
          i = readPI(xmlData, i);
          if (i.err) return i;
        } else if (xmlData[i] === "<") {
          let tagStartPos = i;
          i++;
          if (xmlData[i] === "!") {
            i = readCommentAndCDATA(xmlData, i);
            continue;
          } else {
            let closingTag = false;
            if (xmlData[i] === "/") {
              closingTag = true;
              i++;
            }
            let tagName = "";
            for (; i < xmlData.length && xmlData[i] !== ">" && xmlData[i] !== " " && xmlData[i] !== "	" && xmlData[i] !== "\n" && xmlData[i] !== "\r"; i++) {
              tagName += xmlData[i];
            }
            tagName = tagName.trim();
            if (tagName[tagName.length - 1] === "/") {
              tagName = tagName.substring(0, tagName.length - 1);
              i--;
            }
            if (!validateTagName(tagName)) {
              let msg;
              if (tagName.trim().length === 0) {
                msg = "Invalid space after '<'.";
              } else {
                msg = "Tag '" + tagName + "' is an invalid name.";
              }
              return getErrorObject("InvalidTag", msg, getLineNumberForPosition(xmlData, i));
            }
            const result = readAttributeStr(xmlData, i);
            if (result === false) {
              return getErrorObject("InvalidAttr", "Attributes for '" + tagName + "' have open quote.", getLineNumberForPosition(xmlData, i));
            }
            let attrStr = result.value;
            i = result.index;
            if (attrStr[attrStr.length - 1] === "/") {
              const attrStrStart = i - attrStr.length;
              attrStr = attrStr.substring(0, attrStr.length - 1);
              const isValid = validateAttributeString(attrStr, options);
              if (isValid === true) {
                tagFound = true;
              } else {
                return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, attrStrStart + isValid.err.line));
              }
            } else if (closingTag) {
              if (!result.tagClosed) {
                return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' doesn't have proper closing.", getLineNumberForPosition(xmlData, i));
              } else if (attrStr.trim().length > 0) {
                return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, tagStartPos));
              } else if (tags.length === 0) {
                return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' has not been opened.", getLineNumberForPosition(xmlData, tagStartPos));
              } else {
                const otg = tags.pop();
                if (tagName !== otg.tagName) {
                  let openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
                  return getErrorObject(
                    "InvalidTag",
                    "Expected closing tag '" + otg.tagName + "' (opened in line " + openPos.line + ", col " + openPos.col + ") instead of closing tag '" + tagName + "'.",
                    getLineNumberForPosition(xmlData, tagStartPos)
                  );
                }
                if (tags.length == 0) {
                  reachedRoot = true;
                }
              }
            } else {
              const isValid = validateAttributeString(attrStr, options);
              if (isValid !== true) {
                return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i - attrStr.length + isValid.err.line));
              }
              if (reachedRoot === true) {
                return getErrorObject("InvalidXml", "Multiple possible root nodes found.", getLineNumberForPosition(xmlData, i));
              } else if (options.unpairedTags.indexOf(tagName) !== -1) {
              } else {
                tags.push({ tagName, tagStartPos });
              }
              tagFound = true;
            }
            for (i++; i < xmlData.length; i++) {
              if (xmlData[i] === "<") {
                if (xmlData[i + 1] === "!") {
                  i++;
                  i = readCommentAndCDATA(xmlData, i);
                  continue;
                } else if (xmlData[i + 1] === "?") {
                  i = readPI(xmlData, ++i);
                  if (i.err) return i;
                } else {
                  break;
                }
              } else if (xmlData[i] === "&") {
                const afterAmp = validateAmpersand(xmlData, i);
                if (afterAmp == -1)
                  return getErrorObject("InvalidChar", "char '&' is not expected.", getLineNumberForPosition(xmlData, i));
                i = afterAmp;
              } else {
                if (reachedRoot === true && !isWhiteSpace(xmlData[i])) {
                  return getErrorObject("InvalidXml", "Extra text at the end", getLineNumberForPosition(xmlData, i));
                }
              }
            }
            if (xmlData[i] === "<") {
              i--;
            }
          }
        } else {
          if (isWhiteSpace(xmlData[i])) {
            continue;
          }
          return getErrorObject("InvalidChar", "char '" + xmlData[i] + "' is not expected.", getLineNumberForPosition(xmlData, i));
        }
      }
      if (!tagFound) {
        return getErrorObject("InvalidXml", "Start tag expected.", 1);
      } else if (tags.length == 1) {
        return getErrorObject("InvalidTag", "Unclosed tag '" + tags[0].tagName + "'.", getLineNumberForPosition(xmlData, tags[0].tagStartPos));
      } else if (tags.length > 0) {
        return getErrorObject("InvalidXml", "Invalid '" + JSON.stringify(tags.map((t) => t.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
      }
      return true;
    };
    function isWhiteSpace(char) {
      return char === " " || char === "	" || char === "\n" || char === "\r";
    }
    function readPI(xmlData, i) {
      const start = i;
      for (; i < xmlData.length; i++) {
        if (xmlData[i] == "?" || xmlData[i] == " ") {
          const tagname = xmlData.substr(start, i - start);
          if (i > 5 && tagname === "xml") {
            return getErrorObject("InvalidXml", "XML declaration allowed only at the start of the document.", getLineNumberForPosition(xmlData, i));
          } else if (xmlData[i] == "?" && xmlData[i + 1] == ">") {
            i++;
            break;
          } else {
            continue;
          }
        }
      }
      return i;
    }
    function readCommentAndCDATA(xmlData, i) {
      if (xmlData.length > i + 5 && xmlData[i + 1] === "-" && xmlData[i + 2] === "-") {
        for (i += 3; i < xmlData.length; i++) {
          if (xmlData[i] === "-" && xmlData[i + 1] === "-" && xmlData[i + 2] === ">") {
            i += 2;
            break;
          }
        }
      } else if (xmlData.length > i + 8 && xmlData[i + 1] === "D" && xmlData[i + 2] === "O" && xmlData[i + 3] === "C" && xmlData[i + 4] === "T" && xmlData[i + 5] === "Y" && xmlData[i + 6] === "P" && xmlData[i + 7] === "E") {
        let angleBracketsCount = 1;
        for (i += 8; i < xmlData.length; i++) {
          if (xmlData[i] === "<") {
            angleBracketsCount++;
          } else if (xmlData[i] === ">") {
            angleBracketsCount--;
            if (angleBracketsCount === 0) {
              break;
            }
          }
        }
      } else if (xmlData.length > i + 9 && xmlData[i + 1] === "[" && xmlData[i + 2] === "C" && xmlData[i + 3] === "D" && xmlData[i + 4] === "A" && xmlData[i + 5] === "T" && xmlData[i + 6] === "A" && xmlData[i + 7] === "[") {
        for (i += 8; i < xmlData.length; i++) {
          if (xmlData[i] === "]" && xmlData[i + 1] === "]" && xmlData[i + 2] === ">") {
            i += 2;
            break;
          }
        }
      }
      return i;
    }
    var doubleQuote = '"';
    var singleQuote = "'";
    function readAttributeStr(xmlData, i) {
      let attrStr = "";
      let startChar = "";
      let tagClosed = false;
      for (; i < xmlData.length; i++) {
        if (xmlData[i] === doubleQuote || xmlData[i] === singleQuote) {
          if (startChar === "") {
            startChar = xmlData[i];
          } else if (startChar !== xmlData[i]) {
          } else {
            startChar = "";
          }
        } else if (xmlData[i] === ">") {
          if (startChar === "") {
            tagClosed = true;
            break;
          }
        }
        attrStr += xmlData[i];
      }
      if (startChar !== "") {
        return false;
      }
      return {
        value: attrStr,
        index: i,
        tagClosed
      };
    }
    var validAttrStrRegxp = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
    function validateAttributeString(attrStr, options) {
      const matches = util.getAllMatches(attrStr, validAttrStrRegxp);
      const attrNames = {};
      for (let i = 0; i < matches.length; i++) {
        if (matches[i][1].length === 0) {
          return getErrorObject("InvalidAttr", "Attribute '" + matches[i][2] + "' has no space in starting.", getPositionFromMatch(matches[i]));
        } else if (matches[i][3] !== void 0 && matches[i][4] === void 0) {
          return getErrorObject("InvalidAttr", "Attribute '" + matches[i][2] + "' is without value.", getPositionFromMatch(matches[i]));
        } else if (matches[i][3] === void 0 && !options.allowBooleanAttributes) {
          return getErrorObject("InvalidAttr", "boolean attribute '" + matches[i][2] + "' is not allowed.", getPositionFromMatch(matches[i]));
        }
        const attrName = matches[i][2];
        if (!validateAttrName(attrName)) {
          return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is an invalid name.", getPositionFromMatch(matches[i]));
        }
        if (!attrNames.hasOwnProperty(attrName)) {
          attrNames[attrName] = 1;
        } else {
          return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is repeated.", getPositionFromMatch(matches[i]));
        }
      }
      return true;
    }
    function validateNumberAmpersand(xmlData, i) {
      let re = /\d/;
      if (xmlData[i] === "x") {
        i++;
        re = /[\da-fA-F]/;
      }
      for (; i < xmlData.length; i++) {
        if (xmlData[i] === ";")
          return i;
        if (!xmlData[i].match(re))
          break;
      }
      return -1;
    }
    function validateAmpersand(xmlData, i) {
      i++;
      if (xmlData[i] === ";")
        return -1;
      if (xmlData[i] === "#") {
        i++;
        return validateNumberAmpersand(xmlData, i);
      }
      let count = 0;
      for (; i < xmlData.length; i++, count++) {
        if (xmlData[i].match(/\w/) && count < 20)
          continue;
        if (xmlData[i] === ";")
          break;
        return -1;
      }
      return i;
    }
    function getErrorObject(code, message, lineNumber) {
      return {
        err: {
          code,
          msg: message,
          line: lineNumber.line || lineNumber,
          col: lineNumber.col
        }
      };
    }
    function validateAttrName(attrName) {
      return util.isName(attrName);
    }
    function validateTagName(tagname) {
      return util.isName(tagname);
    }
    function getLineNumberForPosition(xmlData, index) {
      const lines = xmlData.substring(0, index).split(/\r?\n/);
      return {
        line: lines.length,
        // column number is last line's length + 1, because column numbering starts at 1:
        col: lines[lines.length - 1].length + 1
      };
    }
    function getPositionFromMatch(match) {
      return match.startIndex + match[1].length;
    }
  }
});

// node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js
var require_OptionsBuilder = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js"(exports2) {
    var { DANGEROUS_PROPERTY_NAMES, criticalProperties } = require_util2();
    var defaultOnDangerousProperty = (name) => {
      if (DANGEROUS_PROPERTY_NAMES.includes(name)) {
        return "__" + name;
      }
      return name;
    };
    var defaultOptions2 = {
      preserveOrder: false,
      attributeNamePrefix: "@_",
      attributesGroupName: false,
      textNodeName: "#text",
      ignoreAttributes: true,
      removeNSPrefix: false,
      // remove NS from tag name or attribute name if true
      allowBooleanAttributes: false,
      //a tag can have attributes without any value
      //ignoreRootElement : false,
      parseTagValue: true,
      parseAttributeValue: false,
      trimValues: true,
      //Trim string values of tag and attributes
      cdataPropName: false,
      numberParseOptions: {
        hex: true,
        leadingZeros: true,
        eNotation: true
      },
      tagValueProcessor: function(tagName, val) {
        return val;
      },
      attributeValueProcessor: function(attrName, val) {
        return val;
      },
      stopNodes: [],
      //nested tags will not be parsed even for errors
      alwaysCreateTextNode: false,
      isArray: () => false,
      commentPropName: false,
      unpairedTags: [],
      processEntities: true,
      htmlEntities: false,
      ignoreDeclaration: false,
      ignorePiTags: false,
      transformTagName: false,
      transformAttributeName: false,
      updateTag: function(tagName, jPath, attrs) {
        return tagName;
      },
      // skipEmptyListItem: false
      captureMetaData: false,
      maxNestedTags: 100,
      strictReservedNames: true,
      onDangerousProperty: defaultOnDangerousProperty
    };
    function validatePropertyName(propertyName, optionName) {
      if (typeof propertyName !== "string") {
        return;
      }
      const normalized = propertyName.toLowerCase();
      if (DANGEROUS_PROPERTY_NAMES.some((dangerous) => normalized === dangerous.toLowerCase())) {
        throw new Error(
          `[SECURITY] Invalid ${optionName}: "${propertyName}" is a reserved JavaScript keyword that could cause prototype pollution`
        );
      }
      if (criticalProperties.some((dangerous) => normalized === dangerous.toLowerCase())) {
        throw new Error(
          `[SECURITY] Invalid ${optionName}: "${propertyName}" is a reserved JavaScript keyword that could cause prototype pollution`
        );
      }
    }
    function normalizeProcessEntities(value) {
      if (typeof value === "boolean") {
        return {
          enabled: value,
          // true or false
          maxEntitySize: 1e4,
          maxExpansionDepth: 10,
          maxTotalExpansions: 1e3,
          maxExpandedLength: 1e5,
          allowedTags: null,
          tagFilter: null
        };
      }
      if (typeof value === "object" && value !== null) {
        return {
          enabled: value.enabled !== false,
          maxEntitySize: Math.max(1, value.maxEntitySize ?? 1e4),
          maxExpansionDepth: Math.max(1, value.maxExpansionDepth ?? 1e4),
          maxTotalExpansions: Math.max(1, value.maxTotalExpansions ?? Infinity),
          maxExpandedLength: Math.max(1, value.maxExpandedLength ?? 1e5),
          maxEntityCount: Math.max(1, value.maxEntityCount ?? 1e3),
          allowedTags: value.allowedTags ?? null,
          tagFilter: value.tagFilter ?? null
        };
      }
      return normalizeProcessEntities(true);
    }
    var buildOptions = function(options) {
      const built = Object.assign({}, defaultOptions2, options);
      const propertyNameOptions = [
        { value: built.attributeNamePrefix, name: "attributeNamePrefix" },
        { value: built.attributesGroupName, name: "attributesGroupName" },
        { value: built.textNodeName, name: "textNodeName" },
        { value: built.cdataPropName, name: "cdataPropName" },
        { value: built.commentPropName, name: "commentPropName" }
      ];
      for (const { value, name } of propertyNameOptions) {
        if (value) {
          validatePropertyName(value, name);
        }
      }
      if (built.onDangerousProperty === null) {
        built.onDangerousProperty = defaultOnDangerousProperty;
      }
      built.processEntities = normalizeProcessEntities(built.processEntities);
      return built;
    };
    exports2.buildOptions = buildOptions;
    exports2.defaultOptions = defaultOptions2;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/xmlNode.js
var require_xmlNode = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/xmlNode.js"(exports2, module2) {
    "use strict";
    var XmlNode = class {
      constructor(tagname) {
        this.tagname = tagname;
        this.child = [];
        this[":@"] = {};
      }
      add(key, val) {
        if (key === "__proto__") key = "#__proto__";
        this.child.push({ [key]: val });
      }
      addChild(node) {
        if (node.tagname === "__proto__") node.tagname = "#__proto__";
        if (node[":@"] && Object.keys(node[":@"]).length > 0) {
          this.child.push({ [node.tagname]: node.child, [":@"]: node[":@"] });
        } else {
          this.child.push({ [node.tagname]: node.child });
        }
      }
    };
    module2.exports = XmlNode;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js
var require_DocTypeReader = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js"(exports2, module2) {
    var util = require_util2();
    var DocTypeReader = class {
      constructor(options) {
        this.suppressValidationErr = !options;
        this.options = options || {};
      }
      readDocType(xmlData, i) {
        const entities = /* @__PURE__ */ Object.create(null);
        let entityCount = 0;
        if (xmlData[i + 3] === "O" && xmlData[i + 4] === "C" && xmlData[i + 5] === "T" && xmlData[i + 6] === "Y" && xmlData[i + 7] === "P" && xmlData[i + 8] === "E") {
          i = i + 9;
          let angleBracketsCount = 1;
          let hasBody = false, comment = false;
          let exp = "";
          for (; i < xmlData.length; i++) {
            if (xmlData[i] === "<" && !comment) {
              if (hasBody && hasSeq(xmlData, "!ENTITY", i)) {
                i += 7;
                let entityName, val;
                [entityName, val, i] = this.readEntityExp(xmlData, i + 1, this.suppressValidationErr);
                if (val.indexOf("&") === -1) {
                  if (this.options.enabled !== false && this.options.maxEntityCount != null && entityCount >= this.options.maxEntityCount) {
                    throw new Error(
                      `Entity count (${entityCount + 1}) exceeds maximum allowed (${this.options.maxEntityCount})`
                    );
                  }
                  const escaped = entityName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                  entities[entityName] = {
                    regx: RegExp(`&${escaped};`, "g"),
                    val
                  };
                  entityCount++;
                }
              } else if (hasBody && hasSeq(xmlData, "!ELEMENT", i)) {
                i += 8;
                const { index } = this.readElementExp(xmlData, i + 1);
                i = index;
              } else if (hasBody && hasSeq(xmlData, "!ATTLIST", i)) {
                i += 8;
              } else if (hasBody && hasSeq(xmlData, "!NOTATION", i)) {
                i += 9;
                const { index } = this.readNotationExp(xmlData, i + 1, this.suppressValidationErr);
                i = index;
              } else if (hasSeq(xmlData, "!--", i)) {
                comment = true;
              } else {
                throw new Error(`Invalid DOCTYPE`);
              }
              angleBracketsCount++;
              exp = "";
            } else if (xmlData[i] === ">") {
              if (comment) {
                if (xmlData[i - 1] === "-" && xmlData[i - 2] === "-") {
                  comment = false;
                  angleBracketsCount--;
                }
              } else {
                angleBracketsCount--;
              }
              if (angleBracketsCount === 0) {
                break;
              }
            } else if (xmlData[i] === "[") {
              hasBody = true;
            } else {
              exp += xmlData[i];
            }
          }
          if (angleBracketsCount !== 0) {
            throw new Error(`Unclosed DOCTYPE`);
          }
        } else {
          throw new Error(`Invalid Tag instead of DOCTYPE`);
        }
        return { entities, i };
      }
      readEntityExp(xmlData, i) {
        i = skipWhitespace(xmlData, i);
        let entityName = "";
        while (i < xmlData.length && !/\s/.test(xmlData[i]) && xmlData[i] !== '"' && xmlData[i] !== "'") {
          entityName += xmlData[i];
          i++;
        }
        validateEntityName(entityName);
        i = skipWhitespace(xmlData, i);
        if (!this.suppressValidationErr) {
          if (xmlData.substring(i, i + 6).toUpperCase() === "SYSTEM") {
            throw new Error("External entities are not supported");
          } else if (xmlData[i] === "%") {
            throw new Error("Parameter entities are not supported");
          }
        }
        let entityValue = "";
        [i, entityValue] = this.readIdentifierVal(xmlData, i, "entity");
        if (this.options.enabled !== false && this.options.maxEntitySize != null && entityValue.length > this.options.maxEntitySize) {
          throw new Error(
            `Entity "${entityName}" size (${entityValue.length}) exceeds maximum allowed size (${this.options.maxEntitySize})`
          );
        }
        i--;
        return [entityName, entityValue, i];
      }
      readNotationExp(xmlData, i) {
        i = skipWhitespace(xmlData, i);
        let notationName = "";
        while (i < xmlData.length && !/\s/.test(xmlData[i])) {
          notationName += xmlData[i];
          i++;
        }
        !this.suppressValidationErr && validateEntityName(notationName);
        i = skipWhitespace(xmlData, i);
        const identifierType = xmlData.substring(i, i + 6).toUpperCase();
        if (!this.suppressValidationErr && identifierType !== "SYSTEM" && identifierType !== "PUBLIC") {
          throw new Error(`Expected SYSTEM or PUBLIC, found "${identifierType}"`);
        }
        i += identifierType.length;
        i = skipWhitespace(xmlData, i);
        let publicIdentifier = null;
        let systemIdentifier = null;
        if (identifierType === "PUBLIC") {
          [i, publicIdentifier] = this.readIdentifierVal(xmlData, i, "publicIdentifier");
          i = skipWhitespace(xmlData, i);
          if (xmlData[i] === '"' || xmlData[i] === "'") {
            [i, systemIdentifier] = this.readIdentifierVal(xmlData, i, "systemIdentifier");
          }
        } else if (identifierType === "SYSTEM") {
          [i, systemIdentifier] = this.readIdentifierVal(xmlData, i, "systemIdentifier");
          if (!this.suppressValidationErr && !systemIdentifier) {
            throw new Error("Missing mandatory system identifier for SYSTEM notation");
          }
        }
        return { notationName, publicIdentifier, systemIdentifier, index: --i };
      }
      readIdentifierVal(xmlData, i, type) {
        let identifierVal = "";
        const startChar = xmlData[i];
        if (startChar !== '"' && startChar !== "'") {
          throw new Error(`Expected quoted string, found "${startChar}"`);
        }
        i++;
        while (i < xmlData.length && xmlData[i] !== startChar) {
          identifierVal += xmlData[i];
          i++;
        }
        if (xmlData[i] !== startChar) {
          throw new Error(`Unterminated ${type} value`);
        }
        i++;
        return [i, identifierVal];
      }
      readElementExp(xmlData, i) {
        i = skipWhitespace(xmlData, i);
        let elementName = "";
        while (i < xmlData.length && !/\s/.test(xmlData[i])) {
          elementName += xmlData[i];
          i++;
        }
        if (!this.suppressValidationErr && !util.isName(elementName)) {
          throw new Error(`Invalid element name: "${elementName}"`);
        }
        i = skipWhitespace(xmlData, i);
        let contentModel = "";
        if (xmlData[i] === "E" && hasSeq(xmlData, "MPTY", i)) {
          i += 4;
        } else if (xmlData[i] === "A" && hasSeq(xmlData, "NY", i)) {
          i += 2;
        } else if (xmlData[i] === "(") {
          i++;
          while (i < xmlData.length && xmlData[i] !== ")") {
            contentModel += xmlData[i];
            i++;
          }
          if (xmlData[i] !== ")") {
            throw new Error("Unterminated content model");
          }
        } else if (!this.suppressValidationErr) {
          throw new Error(`Invalid Element Expression, found "${xmlData[i]}"`);
        }
        return {
          elementName,
          contentModel: contentModel.trim(),
          index: i
        };
      }
      readAttlistExp(xmlData, i) {
        i = skipWhitespace(xmlData, i);
        let elementName = "";
        while (i < xmlData.length && !/\s/.test(xmlData[i])) {
          elementName += xmlData[i];
          i++;
        }
        validateEntityName(elementName);
        i = skipWhitespace(xmlData, i);
        let attributeName = "";
        while (i < xmlData.length && !/\s/.test(xmlData[i])) {
          attributeName += xmlData[i];
          i++;
        }
        if (!validateEntityName(attributeName)) {
          throw new Error(`Invalid attribute name: "${attributeName}"`);
        }
        i = skipWhitespace(xmlData, i);
        let attributeType = "";
        if (xmlData.substring(i, i + 8).toUpperCase() === "NOTATION") {
          attributeType = "NOTATION";
          i += 8;
          i = skipWhitespace(xmlData, i);
          if (xmlData[i] !== "(") {
            throw new Error(`Expected '(', found "${xmlData[i]}"`);
          }
          i++;
          let allowedNotations = [];
          while (i < xmlData.length && xmlData[i] !== ")") {
            let notation = "";
            while (i < xmlData.length && xmlData[i] !== "|" && xmlData[i] !== ")") {
              notation += xmlData[i];
              i++;
            }
            notation = notation.trim();
            if (!validateEntityName(notation)) {
              throw new Error(`Invalid notation name: "${notation}"`);
            }
            allowedNotations.push(notation);
            if (xmlData[i] === "|") {
              i++;
              i = skipWhitespace(xmlData, i);
            }
          }
          if (xmlData[i] !== ")") {
            throw new Error("Unterminated list of notations");
          }
          i++;
          attributeType += " (" + allowedNotations.join("|") + ")";
        } else {
          while (i < xmlData.length && !/\s/.test(xmlData[i])) {
            attributeType += xmlData[i];
            i++;
          }
          const validTypes = ["CDATA", "ID", "IDREF", "IDREFS", "ENTITY", "ENTITIES", "NMTOKEN", "NMTOKENS"];
          if (!this.suppressValidationErr && !validTypes.includes(attributeType.toUpperCase())) {
            throw new Error(`Invalid attribute type: "${attributeType}"`);
          }
        }
        i = skipWhitespace(xmlData, i);
        let defaultValue = "";
        if (xmlData.substring(i, i + 8).toUpperCase() === "#REQUIRED") {
          defaultValue = "#REQUIRED";
          i += 8;
        } else if (xmlData.substring(i, i + 7).toUpperCase() === "#IMPLIED") {
          defaultValue = "#IMPLIED";
          i += 7;
        } else {
          [i, defaultValue] = this.readIdentifierVal(xmlData, i, "ATTLIST");
        }
        return {
          elementName,
          attributeName,
          attributeType,
          defaultValue,
          index: i
        };
      }
    };
    var skipWhitespace = (data, index) => {
      while (index < data.length && /\s/.test(data[index])) {
        index++;
      }
      return index;
    };
    function hasSeq(data, seq, i) {
      for (let j = 0; j < seq.length; j++) {
        if (seq[j] !== data[i + j + 1]) return false;
      }
      return true;
    }
    function validateEntityName(name) {
      if (util.isName(name))
        return name;
      else
        throw new Error(`Invalid entity name ${name}`);
    }
    module2.exports = DocTypeReader;
  }
});

// node_modules/strnum/strnum.js
var require_strnum = __commonJS({
  "node_modules/strnum/strnum.js"(exports2, module2) {
    var hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
    var numRegex = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/;
    var consider = {
      hex: true,
      // oct: false,
      leadingZeros: true,
      decimalPoint: ".",
      eNotation: true
      //skipLike: /regex/
    };
    function toNumber(str, options = {}) {
      options = Object.assign({}, consider, options);
      if (!str || typeof str !== "string") return str;
      let trimmedStr = str.trim();
      if (options.skipLike !== void 0 && options.skipLike.test(trimmedStr)) return str;
      else if (str === "0") return 0;
      else if (options.hex && hexRegex.test(trimmedStr)) {
        return parse_int(trimmedStr, 16);
      } else if (trimmedStr.search(/[eE]/) !== -1) {
        const notation = trimmedStr.match(/^([-\+])?(0*)([0-9]*(\.[0-9]*)?[eE][-\+]?[0-9]+)$/);
        if (notation) {
          if (options.leadingZeros) {
            trimmedStr = (notation[1] || "") + notation[3];
          } else {
            if (notation[2] === "0" && notation[3][0] === ".") {
            } else {
              return str;
            }
          }
          return options.eNotation ? Number(trimmedStr) : str;
        } else {
          return str;
        }
      } else {
        const match = numRegex.exec(trimmedStr);
        if (match) {
          const sign = match[1];
          const leadingZeros = match[2];
          let numTrimmedByZeros = trimZeros(match[3]);
          if (!options.leadingZeros && leadingZeros.length > 0 && sign && trimmedStr[2] !== ".") return str;
          else if (!options.leadingZeros && leadingZeros.length > 0 && !sign && trimmedStr[1] !== ".") return str;
          else if (options.leadingZeros && leadingZeros === str) return 0;
          else {
            const num = Number(trimmedStr);
            const numStr = "" + num;
            if (numStr.search(/[eE]/) !== -1) {
              if (options.eNotation) return num;
              else return str;
            } else if (trimmedStr.indexOf(".") !== -1) {
              if (numStr === "0" && numTrimmedByZeros === "") return num;
              else if (numStr === numTrimmedByZeros) return num;
              else if (sign && numStr === "-" + numTrimmedByZeros) return num;
              else return str;
            }
            if (leadingZeros) {
              return numTrimmedByZeros === numStr || sign + numTrimmedByZeros === numStr ? num : str;
            } else {
              return trimmedStr === numStr || trimmedStr === sign + numStr ? num : str;
            }
          }
        } else {
          return str;
        }
      }
    }
    function trimZeros(numStr) {
      if (numStr && numStr.indexOf(".") !== -1) {
        numStr = numStr.replace(/0+$/, "");
        if (numStr === ".") numStr = "0";
        else if (numStr[0] === ".") numStr = "0" + numStr;
        else if (numStr[numStr.length - 1] === ".") numStr = numStr.substr(0, numStr.length - 1);
        return numStr;
      }
      return numStr;
    }
    function parse_int(numStr, base) {
      if (parseInt) return parseInt(numStr, base);
      else if (Number.parseInt) return Number.parseInt(numStr, base);
      else if (window && window.parseInt) return window.parseInt(numStr, base);
      else throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
    }
    module2.exports = toNumber;
  }
});

// node_modules/fast-xml-parser/src/ignoreAttributes.js
var require_ignoreAttributes = __commonJS({
  "node_modules/fast-xml-parser/src/ignoreAttributes.js"(exports2, module2) {
    function getIgnoreAttributesFn(ignoreAttributes) {
      if (typeof ignoreAttributes === "function") {
        return ignoreAttributes;
      }
      if (Array.isArray(ignoreAttributes)) {
        return (attrName) => {
          for (const pattern of ignoreAttributes) {
            if (typeof pattern === "string" && attrName === pattern) {
              return true;
            }
            if (pattern instanceof RegExp && pattern.test(attrName)) {
              return true;
            }
          }
        };
      }
      return () => false;
    }
    module2.exports = getIgnoreAttributesFn;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js
var require_OrderedObjParser = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js"(exports2, module2) {
    "use strict";
    var util = require_util2();
    var xmlNode = require_xmlNode();
    var DocTypeReader = require_DocTypeReader();
    var toNumber = require_strnum();
    var getIgnoreAttributesFn = require_ignoreAttributes();
    var OrderedObjParser = class {
      constructor(options) {
        this.options = options;
        this.currentNode = null;
        this.tagsNodeStack = [];
        this.docTypeEntities = {};
        this.lastEntities = {
          "apos": { regex: /&(apos|#39|#x27);/g, val: "'" },
          "gt": { regex: /&(gt|#62|#x3E);/g, val: ">" },
          "lt": { regex: /&(lt|#60|#x3C);/g, val: "<" },
          "quot": { regex: /&(quot|#34|#x22);/g, val: '"' }
        };
        this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" };
        this.htmlEntities = {
          "space": { regex: /&(nbsp|#160);/g, val: " " },
          // "lt" : { regex: /&(lt|#60);/g, val: "<" },
          // "gt" : { regex: /&(gt|#62);/g, val: ">" },
          // "amp" : { regex: /&(amp|#38);/g, val: "&" },
          // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
          // "apos" : { regex: /&(apos|#39);/g, val: "'" },
          "cent": { regex: /&(cent|#162);/g, val: "\xA2" },
          "pound": { regex: /&(pound|#163);/g, val: "\xA3" },
          "yen": { regex: /&(yen|#165);/g, val: "\xA5" },
          "euro": { regex: /&(euro|#8364);/g, val: "\u20AC" },
          "copyright": { regex: /&(copy|#169);/g, val: "\xA9" },
          "reg": { regex: /&(reg|#174);/g, val: "\xAE" },
          "inr": { regex: /&(inr|#8377);/g, val: "\u20B9" },
          "num_dec": { regex: /&#([0-9]{1,7});/g, val: (_, str) => fromCodePoint(str, 10, "&#") },
          "num_hex": { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (_, str) => fromCodePoint(str, 16, "&#x") }
        };
        this.addExternalEntities = addExternalEntities;
        this.parseXml = parseXml;
        this.parseTextData = parseTextData;
        this.resolveNameSpace = resolveNameSpace;
        this.buildAttributesMap = buildAttributesMap;
        this.isItStopNode = isItStopNode;
        this.replaceEntitiesValue = replaceEntitiesValue;
        this.readStopNodeData = readStopNodeData;
        this.saveTextToParentTag = saveTextToParentTag;
        this.addChild = addChild;
        this.ignoreAttributesFn = getIgnoreAttributesFn(this.options.ignoreAttributes);
        this.entityExpansionCount = 0;
        this.currentExpandedLength = 0;
        if (this.options.stopNodes && this.options.stopNodes.length > 0) {
          this.stopNodesExact = /* @__PURE__ */ new Set();
          this.stopNodesWildcard = /* @__PURE__ */ new Set();
          for (let i = 0; i < this.options.stopNodes.length; i++) {
            const stopNodeExp = this.options.stopNodes[i];
            if (typeof stopNodeExp !== "string") continue;
            if (stopNodeExp.startsWith("*.")) {
              this.stopNodesWildcard.add(stopNodeExp.substring(2));
            } else {
              this.stopNodesExact.add(stopNodeExp);
            }
          }
        }
      }
    };
    function addExternalEntities(externalEntities) {
      const entKeys = Object.keys(externalEntities);
      for (let i = 0; i < entKeys.length; i++) {
        const ent = entKeys[i];
        const escaped = ent.replace(/[.\-+*:]/g, "\\.");
        this.lastEntities[ent] = {
          regex: new RegExp("&" + escaped + ";", "g"),
          val: externalEntities[ent]
        };
      }
    }
    function parseTextData(val, tagName, jPath, dontTrim, hasAttributes, isLeafNode, escapeEntities) {
      if (val !== void 0) {
        if (this.options.trimValues && !dontTrim) {
          val = val.trim();
        }
        if (val.length > 0) {
          if (!escapeEntities) val = this.replaceEntitiesValue(val, tagName, jPath);
          const newval = this.options.tagValueProcessor(tagName, val, jPath, hasAttributes, isLeafNode);
          if (newval === null || newval === void 0) {
            return val;
          } else if (typeof newval !== typeof val || newval !== val) {
            return newval;
          } else if (this.options.trimValues) {
            return parseValue(val, this.options.parseTagValue, this.options.numberParseOptions);
          } else {
            const trimmedVal = val.trim();
            if (trimmedVal === val) {
              return parseValue(val, this.options.parseTagValue, this.options.numberParseOptions);
            } else {
              return val;
            }
          }
        }
      }
    }
    function resolveNameSpace(tagname) {
      if (this.options.removeNSPrefix) {
        const tags = tagname.split(":");
        const prefix = tagname.charAt(0) === "/" ? "/" : "";
        if (tags[0] === "xmlns") {
          return "";
        }
        if (tags.length === 2) {
          tagname = prefix + tags[1];
        }
      }
      return tagname;
    }
    var attrsRegx = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
    function buildAttributesMap(attrStr, jPath, tagName) {
      if (this.options.ignoreAttributes !== true && typeof attrStr === "string") {
        const matches = util.getAllMatches(attrStr, attrsRegx);
        const len = matches.length;
        const attrs = {};
        for (let i = 0; i < len; i++) {
          const attrName = this.resolveNameSpace(matches[i][1]);
          if (this.ignoreAttributesFn(attrName, jPath)) {
            continue;
          }
          let oldVal = matches[i][4];
          let aName = this.options.attributeNamePrefix + attrName;
          if (attrName.length) {
            if (this.options.transformAttributeName) {
              aName = this.options.transformAttributeName(aName);
            }
            aName = sanitizeName(aName, this.options);
            if (oldVal !== void 0) {
              if (this.options.trimValues) {
                oldVal = oldVal.trim();
              }
              oldVal = this.replaceEntitiesValue(oldVal, tagName, jPath);
              const newVal = this.options.attributeValueProcessor(attrName, oldVal, jPath);
              if (newVal === null || newVal === void 0) {
                attrs[aName] = oldVal;
              } else if (typeof newVal !== typeof oldVal || newVal !== oldVal) {
                attrs[aName] = newVal;
              } else {
                attrs[aName] = parseValue(
                  oldVal,
                  this.options.parseAttributeValue,
                  this.options.numberParseOptions
                );
              }
            } else if (this.options.allowBooleanAttributes) {
              attrs[aName] = true;
            }
          }
        }
        if (!Object.keys(attrs).length) {
          return;
        }
        if (this.options.attributesGroupName) {
          const attrCollection = {};
          attrCollection[this.options.attributesGroupName] = attrs;
          return attrCollection;
        }
        return attrs;
      }
    }
    var parseXml = function(xmlData) {
      xmlData = xmlData.replace(/\r\n?/g, "\n");
      const xmlObj = new xmlNode("!xml");
      let currentNode = xmlObj;
      let textData = "";
      let jPath = "";
      this.entityExpansionCount = 0;
      this.currentExpandedLength = 0;
      const docTypeReader = new DocTypeReader(this.options.processEntities);
      for (let i = 0; i < xmlData.length; i++) {
        const ch = xmlData[i];
        if (ch === "<") {
          if (xmlData[i + 1] === "/") {
            const closeIndex = findClosingIndex(xmlData, ">", i, "Closing Tag is not closed.");
            let tagName = xmlData.substring(i + 2, closeIndex).trim();
            if (this.options.removeNSPrefix) {
              const colonIndex = tagName.indexOf(":");
              if (colonIndex !== -1) {
                tagName = tagName.substr(colonIndex + 1);
              }
            }
            if (this.options.transformTagName) {
              tagName = this.options.transformTagName(tagName);
            }
            if (currentNode) {
              textData = this.saveTextToParentTag(textData, currentNode, jPath);
            }
            const lastTagName = jPath.substring(jPath.lastIndexOf(".") + 1);
            if (tagName && this.options.unpairedTags.indexOf(tagName) !== -1) {
              throw new Error(`Unpaired tag can not be used as closing tag: </${tagName}>`);
            }
            let propIndex = 0;
            if (lastTagName && this.options.unpairedTags.indexOf(lastTagName) !== -1) {
              propIndex = jPath.lastIndexOf(".", jPath.lastIndexOf(".") - 1);
              this.tagsNodeStack.pop();
            } else {
              propIndex = jPath.lastIndexOf(".");
            }
            jPath = jPath.substring(0, propIndex);
            currentNode = this.tagsNodeStack.pop();
            textData = "";
            i = closeIndex;
          } else if (xmlData[i + 1] === "?") {
            let tagData = readTagExp(xmlData, i, false, "?>");
            if (!tagData) throw new Error("Pi Tag is not closed.");
            textData = this.saveTextToParentTag(textData, currentNode, jPath);
            if (this.options.ignoreDeclaration && tagData.tagName === "?xml" || this.options.ignorePiTags) {
            } else {
              const childNode = new xmlNode(tagData.tagName);
              childNode.add(this.options.textNodeName, "");
              if (tagData.tagName !== tagData.tagExp && tagData.attrExpPresent) {
                childNode[":@"] = this.buildAttributesMap(tagData.tagExp, jPath, tagData.tagName);
              }
              this.addChild(currentNode, childNode, jPath, i);
            }
            i = tagData.closeIndex + 1;
          } else if (xmlData.substr(i + 1, 3) === "!--") {
            const endIndex = findClosingIndex(xmlData, "-->", i + 4, "Comment is not closed.");
            if (this.options.commentPropName) {
              const comment = xmlData.substring(i + 4, endIndex - 2);
              textData = this.saveTextToParentTag(textData, currentNode, jPath);
              currentNode.add(this.options.commentPropName, [{ [this.options.textNodeName]: comment }]);
            }
            i = endIndex;
          } else if (xmlData.substr(i + 1, 2) === "!D") {
            const result = docTypeReader.readDocType(xmlData, i);
            this.docTypeEntities = result.entities;
            i = result.i;
          } else if (xmlData.substr(i + 1, 2) === "![") {
            const closeIndex = findClosingIndex(xmlData, "]]>", i, "CDATA is not closed.") - 2;
            const tagExp = xmlData.substring(i + 9, closeIndex);
            textData = this.saveTextToParentTag(textData, currentNode, jPath);
            let val = this.parseTextData(tagExp, currentNode.tagname, jPath, true, false, true, true);
            if (val == void 0) val = "";
            if (this.options.cdataPropName) {
              currentNode.add(this.options.cdataPropName, [{ [this.options.textNodeName]: tagExp }]);
            } else {
              currentNode.add(this.options.textNodeName, val);
            }
            i = closeIndex + 2;
          } else {
            let result = readTagExp(xmlData, i, this.options.removeNSPrefix);
            let tagName = result.tagName;
            const rawTagName = result.rawTagName;
            let tagExp = result.tagExp;
            let attrExpPresent = result.attrExpPresent;
            let closeIndex = result.closeIndex;
            if (this.options.transformTagName) {
              const newTagName = this.options.transformTagName(tagName);
              if (tagExp === tagName) {
                tagExp = newTagName;
              }
              tagName = newTagName;
            }
            if (this.options.strictReservedNames && (tagName === this.options.commentPropName || tagName === this.options.cdataPropName || tagName === this.options.textNodeName || tagName === this.options.attributesGroupName)) {
              throw new Error(`Invalid tag name: ${tagName}`);
            }
            if (currentNode && textData) {
              if (currentNode.tagname !== "!xml") {
                textData = this.saveTextToParentTag(textData, currentNode, jPath, false);
              }
            }
            const lastTag = currentNode;
            if (lastTag && this.options.unpairedTags.indexOf(lastTag.tagname) !== -1) {
              currentNode = this.tagsNodeStack.pop();
              jPath = jPath.substring(0, jPath.lastIndexOf("."));
            }
            if (tagName !== xmlObj.tagname) {
              jPath += jPath ? "." + tagName : tagName;
            }
            const startIndex = i;
            if (this.isItStopNode(this.stopNodesExact, this.stopNodesWildcard, jPath, tagName)) {
              let tagContent = "";
              if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                if (tagName[tagName.length - 1] === "/") {
                  tagName = tagName.substr(0, tagName.length - 1);
                  jPath = jPath.substr(0, jPath.length - 1);
                  tagExp = tagName;
                } else {
                  tagExp = tagExp.substr(0, tagExp.length - 1);
                }
                i = result.closeIndex;
              } else if (this.options.unpairedTags.indexOf(tagName) !== -1) {
                i = result.closeIndex;
              } else {
                const result2 = this.readStopNodeData(xmlData, rawTagName, closeIndex + 1);
                if (!result2) throw new Error(`Unexpected end of ${rawTagName}`);
                i = result2.i;
                tagContent = result2.tagContent;
              }
              const childNode = new xmlNode(tagName);
              if (tagName !== tagExp && attrExpPresent) {
                childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
              }
              if (tagContent) {
                tagContent = this.parseTextData(tagContent, tagName, jPath, true, attrExpPresent, true, true);
              }
              jPath = jPath.substr(0, jPath.lastIndexOf("."));
              childNode.add(this.options.textNodeName, tagContent);
              this.addChild(currentNode, childNode, jPath, startIndex);
            } else {
              if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                if (tagName[tagName.length - 1] === "/") {
                  tagName = tagName.substr(0, tagName.length - 1);
                  jPath = jPath.substr(0, jPath.length - 1);
                  tagExp = tagName;
                } else {
                  tagExp = tagExp.substr(0, tagExp.length - 1);
                }
                if (this.options.transformTagName) {
                  const newTagName = this.options.transformTagName(tagName);
                  if (tagExp === tagName) {
                    tagExp = newTagName;
                  }
                  tagName = newTagName;
                }
                const childNode = new xmlNode(tagName);
                if (tagName !== tagExp && attrExpPresent) {
                  childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                }
                this.addChild(currentNode, childNode, jPath, startIndex);
                jPath = jPath.substr(0, jPath.lastIndexOf("."));
              } else if (this.options.unpairedTags.indexOf(tagName) !== -1) {
                const childNode = new xmlNode(tagName);
                if (tagName !== tagExp && attrExpPresent) {
                  childNode[":@"] = this.buildAttributesMap(tagExp, jPath);
                }
                this.addChild(currentNode, childNode, jPath, startIndex);
                jPath = jPath.substr(0, jPath.lastIndexOf("."));
                i = result.closeIndex;
                continue;
              } else {
                const childNode = new xmlNode(tagName);
                if (this.tagsNodeStack.length > this.options.maxNestedTags) {
                  throw new Error("Maximum nested tags exceeded");
                }
                this.tagsNodeStack.push(currentNode);
                if (tagName !== tagExp && attrExpPresent) {
                  childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                }
                this.addChild(currentNode, childNode, jPath);
                currentNode = childNode;
              }
              textData = "";
              i = closeIndex;
            }
          }
        } else {
          textData += xmlData[i];
        }
      }
      return xmlObj.child;
    };
    function addChild(currentNode, childNode, jPath, startIndex) {
      if (!this.options.captureMetaData) startIndex = void 0;
      const result = this.options.updateTag(childNode.tagname, jPath, childNode[":@"]);
      if (result === false) {
      } else if (typeof result === "string") {
        childNode.tagname = result;
        currentNode.addChild(childNode, startIndex);
      } else {
        currentNode.addChild(childNode, startIndex);
      }
    }
    var replaceEntitiesValue = function(val, tagName, jPath) {
      if (val.indexOf("&") === -1) {
        return val;
      }
      const entityConfig = this.options.processEntities;
      if (!entityConfig.enabled) {
        return val;
      }
      if (entityConfig.allowedTags) {
        if (!entityConfig.allowedTags.includes(tagName)) {
          return val;
        }
      }
      if (entityConfig.tagFilter) {
        if (!entityConfig.tagFilter(tagName, jPath)) {
          return val;
        }
      }
      for (let entityName in this.docTypeEntities) {
        const entity = this.docTypeEntities[entityName];
        const matches = val.match(entity.regx);
        if (matches) {
          this.entityExpansionCount += matches.length;
          if (entityConfig.maxTotalExpansions && this.entityExpansionCount > entityConfig.maxTotalExpansions) {
            throw new Error(
              `Entity expansion limit exceeded: ${this.entityExpansionCount} > ${entityConfig.maxTotalExpansions}`
            );
          }
          const lengthBefore = val.length;
          val = val.replace(entity.regx, entity.val);
          if (entityConfig.maxExpandedLength) {
            this.currentExpandedLength += val.length - lengthBefore;
            if (this.currentExpandedLength > entityConfig.maxExpandedLength) {
              throw new Error(
                `Total expanded content size exceeded: ${this.currentExpandedLength} > ${entityConfig.maxExpandedLength}`
              );
            }
          }
        }
      }
      if (val.indexOf("&") === -1) return val;
      for (const entityName of Object.keys(this.lastEntities)) {
        const entity = this.lastEntities[entityName];
        const matches = val.match(entity.regex);
        if (matches) {
          this.entityExpansionCount += matches.length;
          if (entityConfig.maxTotalExpansions && this.entityExpansionCount > entityConfig.maxTotalExpansions) {
            throw new Error(
              `Entity expansion limit exceeded: ${this.entityExpansionCount} > ${entityConfig.maxTotalExpansions}`
            );
          }
        }
        val = val.replace(entity.regex, entity.val);
      }
      if (val.indexOf("&") === -1) return val;
      if (this.options.htmlEntities) {
        for (const entityName of Object.keys(this.htmlEntities)) {
          const entity = this.htmlEntities[entityName];
          const matches = val.match(entity.regex);
          if (matches) {
            this.entityExpansionCount += matches.length;
            if (entityConfig.maxTotalExpansions && this.entityExpansionCount > entityConfig.maxTotalExpansions) {
              throw new Error(
                `Entity expansion limit exceeded: ${this.entityExpansionCount} > ${entityConfig.maxTotalExpansions}`
              );
            }
          }
          val = val.replace(entity.regex, entity.val);
        }
      }
      val = val.replace(this.ampEntity.regex, this.ampEntity.val);
      return val;
    };
    function saveTextToParentTag(textData, parentNode, jPath, isLeafNode) {
      if (textData) {
        if (isLeafNode === void 0) isLeafNode = parentNode.child.length === 0;
        textData = this.parseTextData(
          textData,
          parentNode.tagname,
          jPath,
          false,
          parentNode[":@"] ? Object.keys(parentNode[":@"]).length !== 0 : false,
          isLeafNode
        );
        if (textData !== void 0 && textData !== "")
          parentNode.add(this.options.textNodeName, textData);
        textData = "";
      }
      return textData;
    }
    function isItStopNode(stopNodesExact, stopNodesWildcard, jPath, currentTagName) {
      if (stopNodesWildcard && stopNodesWildcard.has(currentTagName)) return true;
      if (stopNodesExact && stopNodesExact.has(jPath)) return true;
      return false;
    }
    function tagExpWithClosingIndex(xmlData, i, closingChar = ">") {
      let attrBoundary;
      let tagExp = "";
      for (let index = i; index < xmlData.length; index++) {
        let ch = xmlData[index];
        if (attrBoundary) {
          if (ch === attrBoundary) attrBoundary = "";
        } else if (ch === '"' || ch === "'") {
          attrBoundary = ch;
        } else if (ch === closingChar[0]) {
          if (closingChar[1]) {
            if (xmlData[index + 1] === closingChar[1]) {
              return {
                data: tagExp,
                index
              };
            }
          } else {
            return {
              data: tagExp,
              index
            };
          }
        } else if (ch === "	") {
          ch = " ";
        }
        tagExp += ch;
      }
    }
    function findClosingIndex(xmlData, str, i, errMsg) {
      const closingIndex = xmlData.indexOf(str, i);
      if (closingIndex === -1) {
        throw new Error(errMsg);
      } else {
        return closingIndex + str.length - 1;
      }
    }
    function readTagExp(xmlData, i, removeNSPrefix, closingChar = ">") {
      const result = tagExpWithClosingIndex(xmlData, i + 1, closingChar);
      if (!result) return;
      let tagExp = result.data;
      const closeIndex = result.index;
      const separatorIndex = tagExp.search(/\s/);
      let tagName = tagExp;
      let attrExpPresent = true;
      if (separatorIndex !== -1) {
        tagName = tagExp.substring(0, separatorIndex);
        tagExp = tagExp.substring(separatorIndex + 1).trimStart();
      }
      const rawTagName = tagName;
      if (removeNSPrefix) {
        const colonIndex = tagName.indexOf(":");
        if (colonIndex !== -1) {
          tagName = tagName.substr(colonIndex + 1);
          attrExpPresent = tagName !== result.data.substr(colonIndex + 1);
        }
      }
      return {
        tagName,
        tagExp,
        closeIndex,
        attrExpPresent,
        rawTagName
      };
    }
    function readStopNodeData(xmlData, tagName, i) {
      const startIndex = i;
      let openTagCount = 1;
      for (; i < xmlData.length; i++) {
        if (xmlData[i] === "<") {
          if (xmlData[i + 1] === "/") {
            const closeIndex = findClosingIndex(xmlData, ">", i, `${tagName} is not closed`);
            let closeTagName = xmlData.substring(i + 2, closeIndex).trim();
            if (closeTagName === tagName) {
              openTagCount--;
              if (openTagCount === 0) {
                return {
                  tagContent: xmlData.substring(startIndex, i),
                  i: closeIndex
                };
              }
            }
            i = closeIndex;
          } else if (xmlData[i + 1] === "?") {
            const closeIndex = findClosingIndex(xmlData, "?>", i + 1, "StopNode is not closed.");
            i = closeIndex;
          } else if (xmlData.substr(i + 1, 3) === "!--") {
            const closeIndex = findClosingIndex(xmlData, "-->", i + 3, "StopNode is not closed.");
            i = closeIndex;
          } else if (xmlData.substr(i + 1, 2) === "![") {
            const closeIndex = findClosingIndex(xmlData, "]]>", i, "StopNode is not closed.") - 2;
            i = closeIndex;
          } else {
            const tagData = readTagExp(xmlData, i, ">");
            if (tagData) {
              const openTagName = tagData && tagData.tagName;
              if (openTagName === tagName && tagData.tagExp[tagData.tagExp.length - 1] !== "/") {
                openTagCount++;
              }
              i = tagData.closeIndex;
            }
          }
        }
      }
    }
    function parseValue(val, shouldParse, options) {
      if (shouldParse && typeof val === "string") {
        const newval = val.trim();
        if (newval === "true") return true;
        else if (newval === "false") return false;
        else return toNumber(val, options);
      } else {
        if (util.isExist(val)) {
          return val;
        } else {
          return "";
        }
      }
    }
    function fromCodePoint(str, base, prefix) {
      const codePoint = Number.parseInt(str, base);
      if (codePoint >= 0 && codePoint <= 1114111) {
        return String.fromCodePoint(codePoint);
      } else {
        return prefix + str + ";";
      }
    }
    function sanitizeName(name, options) {
      if (util.criticalProperties.includes(name)) {
        throw new Error(`[SECURITY] Invalid name: "${name}" is a reserved JavaScript keyword that could cause prototype pollution`);
      } else if (util.DANGEROUS_PROPERTY_NAMES.includes(name)) {
        return options.onDangerousProperty(name);
      }
      return name;
    }
    module2.exports = OrderedObjParser;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/node2json.js
var require_node2json = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/node2json.js"(exports2) {
    "use strict";
    function prettify(node, options) {
      return compress(node, options);
    }
    function compress(arr, options, jPath) {
      let text;
      const compressedObj = {};
      for (let i = 0; i < arr.length; i++) {
        const tagObj = arr[i];
        const property = propName(tagObj);
        let newJpath = "";
        if (jPath === void 0) newJpath = property;
        else newJpath = jPath + "." + property;
        if (property === options.textNodeName) {
          if (text === void 0) text = tagObj[property];
          else text += "" + tagObj[property];
        } else if (property === void 0) {
          continue;
        } else if (tagObj[property]) {
          let val = compress(tagObj[property], options, newJpath);
          const isLeaf = isLeafTag(val, options);
          if (tagObj[":@"]) {
            assignAttributes(val, tagObj[":@"], newJpath, options);
          } else if (Object.keys(val).length === 1 && val[options.textNodeName] !== void 0 && !options.alwaysCreateTextNode) {
            val = val[options.textNodeName];
          } else if (Object.keys(val).length === 0) {
            if (options.alwaysCreateTextNode) val[options.textNodeName] = "";
            else val = "";
          }
          if (compressedObj[property] !== void 0 && compressedObj.hasOwnProperty(property)) {
            if (!Array.isArray(compressedObj[property])) {
              compressedObj[property] = [compressedObj[property]];
            }
            compressedObj[property].push(val);
          } else {
            if (options.isArray(property, newJpath, isLeaf)) {
              compressedObj[property] = [val];
            } else {
              compressedObj[property] = val;
            }
          }
        }
      }
      if (typeof text === "string") {
        if (text.length > 0) compressedObj[options.textNodeName] = text;
      } else if (text !== void 0) compressedObj[options.textNodeName] = text;
      return compressedObj;
    }
    function propName(obj) {
      const keys = Object.keys(obj);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (key !== ":@") return key;
      }
    }
    function assignAttributes(obj, attrMap, jpath, options) {
      if (attrMap) {
        const keys = Object.keys(attrMap);
        const len = keys.length;
        for (let i = 0; i < len; i++) {
          const atrrName = keys[i];
          if (options.isArray(atrrName, jpath + "." + atrrName, true, true)) {
            obj[atrrName] = [attrMap[atrrName]];
          } else {
            obj[atrrName] = attrMap[atrrName];
          }
        }
      }
    }
    function isLeafTag(obj, options) {
      const { textNodeName } = options;
      const propCount = Object.keys(obj).length;
      if (propCount === 0) {
        return true;
      }
      if (propCount === 1 && (obj[textNodeName] || typeof obj[textNodeName] === "boolean" || obj[textNodeName] === 0)) {
        return true;
      }
      return false;
    }
    exports2.prettify = prettify;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/XMLParser.js
var require_XMLParser = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/XMLParser.js"(exports2, module2) {
    var { buildOptions } = require_OptionsBuilder();
    var OrderedObjParser = require_OrderedObjParser();
    var { prettify } = require_node2json();
    var validator = require_validator();
    var XMLParser2 = class {
      constructor(options) {
        this.externalEntities = {};
        this.options = buildOptions(options);
      }
      /**
       * Parse XML dats to JS object 
       * @param {string|Buffer} xmlData 
       * @param {boolean|Object} validationOption 
       */
      parse(xmlData, validationOption) {
        if (typeof xmlData === "string") {
        } else if (xmlData.toString) {
          xmlData = xmlData.toString();
        } else {
          throw new Error("XML data is accepted in String or Bytes[] form.");
        }
        if (validationOption) {
          if (validationOption === true) validationOption = {};
          const result = validator.validate(xmlData, validationOption);
          if (result !== true) {
            throw Error(`${result.err.msg}:${result.err.line}:${result.err.col}`);
          }
        }
        const orderedObjParser = new OrderedObjParser(this.options);
        orderedObjParser.addExternalEntities(this.externalEntities);
        const orderedResult = orderedObjParser.parseXml(xmlData);
        if (this.options.preserveOrder || orderedResult === void 0) return orderedResult;
        else return prettify(orderedResult, this.options);
      }
      /**
       * Add Entity which is not by default supported by this library
       * @param {string} key 
       * @param {string} value 
       */
      addEntity(key, value) {
        if (value.indexOf("&") !== -1) {
          throw new Error("Entity value can't have '&'");
        } else if (key.indexOf("&") !== -1 || key.indexOf(";") !== -1) {
          throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
        } else if (value === "&") {
          throw new Error("An entity with value '&' is not permitted");
        } else {
          this.externalEntities[key] = value;
        }
      }
    };
    module2.exports = XMLParser2;
  }
});

// node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js
var require_orderedJs2Xml = __commonJS({
  "node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js"(exports2, module2) {
    var EOL = "\n";
    function toXml(jArray, options) {
      let indentation = "";
      if (options.format && options.indentBy.length > 0) {
        indentation = EOL;
      }
      return arrToStr(jArray, options, "", indentation);
    }
    function arrToStr(arr, options, jPath, indentation) {
      let xmlStr = "";
      let isPreviousElementTag = false;
      if (!Array.isArray(arr)) {
        if (arr !== void 0 && arr !== null) {
          let text = arr.toString();
          text = replaceEntitiesValue(text, options);
          return text;
        }
        return "";
      }
      for (let i = 0; i < arr.length; i++) {
        const tagObj = arr[i];
        const tagName = propName(tagObj);
        if (tagName === void 0) continue;
        let newJPath = "";
        if (jPath.length === 0) newJPath = tagName;
        else newJPath = `${jPath}.${tagName}`;
        if (tagName === options.textNodeName) {
          let tagText = tagObj[tagName];
          if (!isStopNode(newJPath, options)) {
            tagText = options.tagValueProcessor(tagName, tagText);
            tagText = replaceEntitiesValue(tagText, options);
          }
          if (isPreviousElementTag) {
            xmlStr += indentation;
          }
          xmlStr += tagText;
          isPreviousElementTag = false;
          continue;
        } else if (tagName === options.cdataPropName) {
          if (isPreviousElementTag) {
            xmlStr += indentation;
          }
          const cdataVal = String(tagObj[tagName][0][options.textNodeName]).replace(/\]\]>/g, "]]]]><![CDATA[>");
          xmlStr += `<![CDATA[${cdataVal}]]>`;
          isPreviousElementTag = false;
          continue;
        } else if (tagName === options.commentPropName) {
          const commentVal = String(tagObj[tagName][0][options.textNodeName]).replace(/--/g, "- -").replace(/-$/, "- ");
          xmlStr += indentation + `<!--${commentVal}-->`;
          isPreviousElementTag = true;
          continue;
        } else if (tagName[0] === "?") {
          const attStr2 = attr_to_str(tagObj[":@"], options);
          const tempInd = tagName === "?xml" ? "" : indentation;
          let piTextNodeName = tagObj[tagName][0][options.textNodeName];
          piTextNodeName = piTextNodeName.length !== 0 ? " " + piTextNodeName : "";
          xmlStr += tempInd + `<${tagName}${piTextNodeName}${attStr2}?>`;
          isPreviousElementTag = true;
          continue;
        }
        let newIdentation = indentation;
        if (newIdentation !== "") {
          newIdentation += options.indentBy;
        }
        const attStr = attr_to_str(tagObj[":@"], options);
        const tagStart = indentation + `<${tagName}${attStr}`;
        const tagValue = arrToStr(tagObj[tagName], options, newJPath, newIdentation);
        if (options.unpairedTags.indexOf(tagName) !== -1) {
          if (options.suppressUnpairedNode) xmlStr += tagStart + ">";
          else xmlStr += tagStart + "/>";
        } else if ((!tagValue || tagValue.length === 0) && options.suppressEmptyNode) {
          xmlStr += tagStart + "/>";
        } else if (tagValue && tagValue.endsWith(">")) {
          xmlStr += tagStart + `>${tagValue}${indentation}</${tagName}>`;
        } else {
          xmlStr += tagStart + ">";
          if (tagValue && indentation !== "" && (tagValue.includes("/>") || tagValue.includes("</"))) {
            xmlStr += indentation + options.indentBy + tagValue + indentation;
          } else {
            xmlStr += tagValue;
          }
          xmlStr += `</${tagName}>`;
        }
        isPreviousElementTag = true;
      }
      return xmlStr;
    }
    function propName(obj) {
      const keys = Object.keys(obj);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;
        if (key !== ":@") return key;
      }
    }
    function attr_to_str(attrMap, options) {
      let attrStr = "";
      if (attrMap && !options.ignoreAttributes) {
        for (let attr in attrMap) {
          if (!Object.prototype.hasOwnProperty.call(attrMap, attr)) continue;
          let attrVal = options.attributeValueProcessor(attr, attrMap[attr]);
          attrVal = replaceEntitiesValue(attrVal, options);
          if (attrVal === true && options.suppressBooleanAttributes) {
            attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}`;
          } else {
            attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}="${attrVal}"`;
          }
        }
      }
      return attrStr;
    }
    function isStopNode(jPath, options) {
      jPath = jPath.substr(0, jPath.length - options.textNodeName.length - 1);
      let tagName = jPath.substr(jPath.lastIndexOf(".") + 1);
      for (let index in options.stopNodes) {
        if (options.stopNodes[index] === jPath || options.stopNodes[index] === "*." + tagName) return true;
      }
      return false;
    }
    function replaceEntitiesValue(textValue, options) {
      if (textValue && textValue.length > 0 && options.processEntities) {
        for (let i = 0; i < options.entities.length; i++) {
          const entity = options.entities[i];
          textValue = textValue.replace(entity.regex, entity.val);
        }
      }
      return textValue;
    }
    module2.exports = toXml;
  }
});

// node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js
var require_json2xml = __commonJS({
  "node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js"(exports2, module2) {
    "use strict";
    var buildFromOrderedJs = require_orderedJs2Xml();
    var getIgnoreAttributesFn = require_ignoreAttributes();
    var defaultOptions2 = {
      attributeNamePrefix: "@_",
      attributesGroupName: false,
      textNodeName: "#text",
      ignoreAttributes: true,
      cdataPropName: false,
      format: false,
      indentBy: "  ",
      suppressEmptyNode: false,
      suppressUnpairedNode: true,
      suppressBooleanAttributes: true,
      tagValueProcessor: function(key, a) {
        return a;
      },
      attributeValueProcessor: function(attrName, a) {
        return a;
      },
      preserveOrder: false,
      commentPropName: false,
      unpairedTags: [],
      entities: [
        { regex: new RegExp("&", "g"), val: "&amp;" },
        //it must be on top
        { regex: new RegExp(">", "g"), val: "&gt;" },
        { regex: new RegExp("<", "g"), val: "&lt;" },
        { regex: new RegExp("'", "g"), val: "&apos;" },
        { regex: new RegExp('"', "g"), val: "&quot;" }
      ],
      processEntities: true,
      stopNodes: [],
      // transformTagName: false,
      // transformAttributeName: false,
      oneListGroup: false
    };
    function Builder(options) {
      this.options = Object.assign({}, defaultOptions2, options);
      if (this.options.ignoreAttributes === true || this.options.attributesGroupName) {
        this.isAttribute = function() {
          return false;
        };
      } else {
        this.ignoreAttributesFn = getIgnoreAttributesFn(this.options.ignoreAttributes);
        this.attrPrefixLen = this.options.attributeNamePrefix.length;
        this.isAttribute = isAttribute;
      }
      this.processTextOrObjNode = processTextOrObjNode;
      if (this.options.format) {
        this.indentate = indentate;
        this.tagEndChar = ">\n";
        this.newLine = "\n";
      } else {
        this.indentate = function() {
          return "";
        };
        this.tagEndChar = ">";
        this.newLine = "";
      }
    }
    Builder.prototype.build = function(jObj) {
      if (this.options.preserveOrder) {
        return buildFromOrderedJs(jObj, this.options);
      } else {
        if (Array.isArray(jObj) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1) {
          jObj = {
            [this.options.arrayNodeName]: jObj
          };
        }
        return this.j2x(jObj, 0, []).val;
      }
    };
    Builder.prototype.j2x = function(jObj, level, ajPath) {
      let attrStr = "";
      let val = "";
      const jPath = ajPath.join(".");
      for (let key in jObj) {
        if (!Object.prototype.hasOwnProperty.call(jObj, key)) continue;
        if (typeof jObj[key] === "undefined") {
          if (this.isAttribute(key)) {
            val += "";
          }
        } else if (jObj[key] === null) {
          if (this.isAttribute(key)) {
            val += "";
          } else if (key === this.options.cdataPropName) {
            val += "";
          } else if (key[0] === "?") {
            val += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
          } else {
            val += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
          }
        } else if (jObj[key] instanceof Date) {
          val += this.buildTextValNode(jObj[key], key, "", level);
        } else if (typeof jObj[key] !== "object") {
          const attr = this.isAttribute(key);
          if (attr && !this.ignoreAttributesFn(attr, jPath)) {
            attrStr += this.buildAttrPairStr(attr, "" + jObj[key]);
          } else if (!attr) {
            if (key === this.options.textNodeName) {
              let newval = this.options.tagValueProcessor(key, "" + jObj[key]);
              val += this.replaceEntitiesValue(newval);
            } else {
              val += this.buildTextValNode(jObj[key], key, "", level);
            }
          }
        } else if (Array.isArray(jObj[key])) {
          const arrLen = jObj[key].length;
          let listTagVal = "";
          let listTagAttr = "";
          for (let j = 0; j < arrLen; j++) {
            const item = jObj[key][j];
            if (typeof item === "undefined") {
            } else if (item === null) {
              if (key[0] === "?") val += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
              else val += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
            } else if (typeof item === "object") {
              if (this.options.oneListGroup) {
                const result = this.j2x(item, level + 1, ajPath.concat(key));
                listTagVal += result.val;
                if (this.options.attributesGroupName && item.hasOwnProperty(this.options.attributesGroupName)) {
                  listTagAttr += result.attrStr;
                }
              } else {
                listTagVal += this.processTextOrObjNode(item, key, level, ajPath);
              }
            } else {
              if (this.options.oneListGroup) {
                let textValue = this.options.tagValueProcessor(key, item);
                textValue = this.replaceEntitiesValue(textValue);
                listTagVal += textValue;
              } else {
                listTagVal += this.buildTextValNode(item, key, "", level);
              }
            }
          }
          if (this.options.oneListGroup) {
            listTagVal = this.buildObjectNode(listTagVal, key, listTagAttr, level);
          }
          val += listTagVal;
        } else {
          if (this.options.attributesGroupName && key === this.options.attributesGroupName) {
            const Ks = Object.keys(jObj[key]);
            const L = Ks.length;
            for (let j = 0; j < L; j++) {
              attrStr += this.buildAttrPairStr(Ks[j], "" + jObj[key][Ks[j]]);
            }
          } else {
            val += this.processTextOrObjNode(jObj[key], key, level, ajPath);
          }
        }
      }
      return { attrStr, val };
    };
    Builder.prototype.buildAttrPairStr = function(attrName, val) {
      val = this.options.attributeValueProcessor(attrName, "" + val);
      val = this.replaceEntitiesValue(val);
      if (this.options.suppressBooleanAttributes && val === "true") {
        return " " + attrName;
      } else return " " + attrName + '="' + val + '"';
    };
    function processTextOrObjNode(object, key, level, ajPath) {
      const result = this.j2x(object, level + 1, ajPath.concat(key));
      if (object[this.options.textNodeName] !== void 0 && Object.keys(object).length === 1) {
        return this.buildTextValNode(object[this.options.textNodeName], key, result.attrStr, level);
      } else {
        return this.buildObjectNode(result.val, key, result.attrStr, level);
      }
    }
    Builder.prototype.buildObjectNode = function(val, key, attrStr, level) {
      if (val === "") {
        if (key[0] === "?") return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
        else {
          return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
        }
      } else {
        let tagEndExp = "</" + key + this.tagEndChar;
        let piClosingChar = "";
        if (key[0] === "?") {
          piClosingChar = "?";
          tagEndExp = "";
        }
        if ((attrStr || attrStr === "") && val.indexOf("<") === -1) {
          return this.indentate(level) + "<" + key + attrStr + piClosingChar + ">" + val + tagEndExp;
        } else if (this.options.commentPropName !== false && key === this.options.commentPropName && piClosingChar.length === 0) {
          const safeVal = String(val).replace(/--/g, "- -").replace(/-$/, "- ");
          return this.indentate(level) + `<!--${safeVal}-->` + this.newLine;
        } else {
          return this.indentate(level) + "<" + key + attrStr + piClosingChar + this.tagEndChar + val + this.indentate(level) + tagEndExp;
        }
      }
    };
    Builder.prototype.closeTag = function(key) {
      let closeTag = "";
      if (this.options.unpairedTags.indexOf(key) !== -1) {
        if (!this.options.suppressUnpairedNode) closeTag = "/";
      } else if (this.options.suppressEmptyNode) {
        closeTag = "/";
      } else {
        closeTag = `></${key}`;
      }
      return closeTag;
    };
    Builder.prototype.buildTextValNode = function(val, key, attrStr, level) {
      if (this.options.cdataPropName !== false && key === this.options.cdataPropName) {
        const safeVal = String(val).replace(/\]\]>/g, "]]]]><![CDATA[>");
        return this.indentate(level) + `<![CDATA[${safeVal}]]>` + this.newLine;
      } else if (this.options.commentPropName !== false && key === this.options.commentPropName) {
        const safeVal = String(val).replace(/--/g, "- -").replace(/-$/, "- ");
        return this.indentate(level) + `<!--${safeVal}-->` + this.newLine;
      } else if (key[0] === "?") {
        return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
      } else {
        let textValue = this.options.tagValueProcessor(key, val);
        textValue = this.replaceEntitiesValue(textValue);
        if (textValue === "") {
          return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
        } else {
          return this.indentate(level) + "<" + key + attrStr + ">" + textValue + "</" + key + this.tagEndChar;
        }
      }
    };
    Builder.prototype.replaceEntitiesValue = function(textValue) {
      if (textValue && textValue.length > 0 && this.options.processEntities) {
        for (let i = 0; i < this.options.entities.length; i++) {
          const entity = this.options.entities[i];
          textValue = textValue.replace(entity.regex, entity.val);
        }
      }
      return textValue;
    };
    function indentate(level) {
      return this.options.indentBy.repeat(level);
    }
    function isAttribute(name) {
      if (name.startsWith(this.options.attributeNamePrefix) && name !== this.options.textNodeName) {
        return name.substr(this.attrPrefixLen);
      } else {
        return false;
      }
    }
    module2.exports = Builder;
  }
});

// node_modules/fast-xml-parser/src/fxp.js
var require_fxp = __commonJS({
  "node_modules/fast-xml-parser/src/fxp.js"(exports2, module2) {
    "use strict";
    var validator = require_validator();
    var XMLParser2 = require_XMLParser();
    var XMLBuilder = require_json2xml();
    module2.exports = {
      XMLParser: XMLParser2,
      XMLValidator: validator,
      XMLBuilder
    };
  }
});

// node_modules/airdcpp-apisocket/dist-es/ApiConstants.js
var ApiConstants_default = {
  LOGIN_URL: "sessions/authorize",
  CONNECT_URL: "sessions/socket",
  LOGOUT_URL: "sessions/self"
};

// node_modules/airdcpp-apisocket/dist-es/SocketLogger.js
var import_chalk = __toESM(require_source(), 1);

// node_modules/is-in-browser/dist/index.mjs
var isJsDom = typeof navigator === "object" && navigator.userAgent && navigator.userAgent.includes("jsdom");
var isNode = typeof process === "object" && !!process.versions && !!process.versions.node;
var isBrowser = typeof window === "object" && typeof document === "object" && document.nodeType === 9;

// node_modules/airdcpp-apisocket/dist-es/SocketLogger.js
var import_invariant = __toESM(require_invariant(), 1);
var LOG_NONE = "none";
var LOG_ERROR = "error";
var LOG_WARN = "warn";
var LOG_INFO = "info";
var LOG_VERBOSE = "verbose";
var Severities = {
  [LOG_NONE]: -1,
  [LOG_ERROR]: 0,
  [LOG_WARN]: 1,
  [LOG_INFO]: 2,
  [LOG_VERBOSE]: 3
};
var shouldFormatLine = isJsDom || !isBrowser;
var Logger = ({ logLevel: logSetting = LOG_VERBOSE, logOutput = console }) => {
  const logLevel = Severities[logSetting];
  (0, import_invariant.default)(
    // @ts-ignore: This condition will always return true since the function is always defined
    logOutput.log && logOutput.info && logOutput.warn && logOutput.error,
    "Invalid logOutput provided"
  );
  const formatCurrentTime = () => {
    const d = /* @__PURE__ */ new Date();
    return `[${d.toLocaleDateString()} ${d.toLocaleTimeString()}:${d.getMilliseconds()}]`;
  };
  const print = (args, printHandler, argFormat) => {
    let printableArgs = [...Array.prototype.slice.call(args)];
    if (shouldFormatLine && argFormat) {
      printableArgs = [
        import_chalk.default.magenta(formatCurrentTime()),
        ...printableArgs.map((arg) => argFormat(typeof arg === "object" ? JSON.stringify(arg, null, "  ") : arg))
      ];
    }
    printHandler.apply(logOutput, printableArgs);
  };
  const Impl = {
    verbose() {
      if (logLevel < Severities[LOG_VERBOSE]) {
        return;
      }
      print(arguments, logOutput.log, import_chalk.default.gray);
    },
    info() {
      if (logLevel < Severities[LOG_INFO]) {
        return;
      }
      print(arguments, logOutput.info, import_chalk.default.white.bold);
    },
    warn() {
      if (logLevel < Severities[LOG_WARN]) {
        return;
      }
      print(arguments, logOutput.warn, import_chalk.default.yellow.bold);
    },
    error() {
      if (logLevel < Severities[LOG_ERROR]) {
        return;
      }
      print(arguments, logOutput.error, import_chalk.default.red.bold);
    }
  };
  return Impl;
};
var SocketLogger_default = Logger;

// node_modules/airdcpp-apisocket/dist-es/SocketSubscriptionHandler.js
var import_invariant2 = __toESM(require_invariant(), 1);
var import_events = require("events");

// node_modules/airdcpp-apisocket/dist-es/utils.js
var eventIgnored = (path5, ignoredEvents) => {
  if (!ignoredEvents) {
    return false;
  }
  if (Array.isArray(ignoredEvents)) {
    return ignoredEvents.indexOf(path5) !== -1;
  }
  return ignoredEvents.test(path5);
};

// node_modules/airdcpp-apisocket/dist-es/Promise.js
var AppPromise;
if (typeof Promise !== "undefined") {
  AppPromise = Promise;
} else {
  AppPromise = require_promise();
}
function pending() {
  let resolve2, reject;
  let promise = new AppPromise(function() {
    resolve2 = arguments[0];
    reject = arguments[1];
  });
  return {
    resolve: resolve2,
    reject,
    promise
  };
}
var PendingPromise = Object.assign(AppPromise, {
  pending
});
var Promise_default = PendingPromise;

// node_modules/airdcpp-apisocket/dist-es/SocketSubscriptionHandler.js
var SocketSubscriptionHandler = (socket, logger, { ignoredListenerEvents = [] }) => {
  const getEmitId = (event, id) => {
    (0, import_invariant2.default)(id !== 0, 'Entity ID "0" is not allowed');
    return id ? event + id : event;
  };
  const getSubscriptionUrl = (moduleUrl, id, event) => {
    if (id) {
      return `${moduleUrl}/${id}/listeners/${event}`;
    }
    return `${moduleUrl}/listeners/${event}`;
  };
  let subscriptions = {};
  const emitter = new import_events.EventEmitter();
  const pendingSubscriptions = {};
  const removeSocketListener = async (subscriptionUrl, subscriptionId, callback, sendApi) => {
    if (!socket().isConnected()) {
      return;
    }
    subscriptions[subscriptionId]--;
    emitter.removeListener(subscriptionId, callback);
    if (subscriptions[subscriptionId] === 0) {
      if (sendApi && socket().isConnected()) {
        try {
          await socket().delete(subscriptionUrl);
        } catch (error) {
          const e = error;
          logger.error("Failed to remove socket listener", subscriptionUrl, e);
        }
        ;
      }
      delete subscriptions[subscriptionId];
    }
  };
  const removeLocalListener = (subscriptionId, callback) => {
    emitter.removeListener(subscriptionId, callback);
  };
  const handleHookAction = (subscriptionUrl, callback, data, completionId) => {
    callback(data, (completionData) => {
      socket().post(`${subscriptionUrl}/${completionId}/resolve`, completionData).catch((error) => logger.error("Failed to complete hook action", subscriptionUrl, error));
    }, (rejectId, rejectMessage) => {
      socket().post(`${subscriptionUrl}/${completionId}/reject`, {
        reject_id: rejectId,
        message: rejectMessage
      }).catch((error) => logger.error("Failed to complete failed hook action", subscriptionUrl, error));
    });
  };
  const onSubscriptionAddSucceeded = (subscriptionId) => {
    const pending2 = pendingSubscriptions[subscriptionId];
    pending2.forEach((pendingItem) => pendingItem.resolver.resolve(pendingItem.removeHandler));
    subscriptions[subscriptionId] = pending2.length;
    delete pendingSubscriptions[subscriptionId];
  };
  const onSubscriptionAddFailed = (subscriptionId, error) => {
    const pending2 = pendingSubscriptions[subscriptionId];
    pending2.forEach((pendingItem) => pendingItem.resolver.reject(error));
    delete pendingSubscriptions[subscriptionId];
  };
  const addPendingEntry = (subscriptionUrl, subscriptionId, callback, data) => {
    const removeHandler = (sendApi = true) => removeSocketListener(subscriptionUrl, subscriptionId, callback, sendApi);
    if (!subscriptions[subscriptionId]) {
      if (!pendingSubscriptions[subscriptionId]) {
        pendingSubscriptions[subscriptionId] = [];
        socket().post(subscriptionUrl, data).then(onSubscriptionAddSucceeded.bind(SocketSubscriptionHandler, subscriptionId), onSubscriptionAddFailed.bind(SocketSubscriptionHandler, subscriptionId));
      }
      const resolver = Promise_default.pending();
      pendingSubscriptions[subscriptionId].push({
        resolver,
        removeHandler
      });
      return resolver.promise;
    }
    subscriptions[subscriptionId]++;
    return Promise_default.resolve(removeHandler);
  };
  const getTotalEmitterSubscriptionCount = () => {
    return Object.keys(subscriptions).reduce((reduced, name) => emitter.listenerCount(name) + reduced, 0);
  };
  const SocketSubscriptionsPublic = {
    addViewUpdateListener: (viewName, callback, entityId) => {
      const subscriptionId = getEmitId(`${viewName}_updated`, entityId);
      emitter.on(subscriptionId, callback);
      return () => removeLocalListener(subscriptionId, callback);
    },
    // Listen to a specific event and manage the API subscription automatically
    addListener: (apiModule, event, callback, entityId) => {
      if (!socket().isConnected()) {
        throw "Listeners can be added only for a connected socket";
      }
      (0, import_invariant2.default)(apiModule.indexOf("/") === -1, "The first argument should only contain the API section without any path tokens (entity ID should be supplied separately)");
      const subscriptionId = getEmitId(event, entityId);
      const subscriptionUrl = getSubscriptionUrl(apiModule, entityId, event);
      emitter.on(subscriptionId, callback);
      return addPendingEntry(subscriptionUrl, subscriptionId, callback);
    },
    hasListeners: () => {
      return Object.keys(subscriptions).length > 0 || getTotalEmitterSubscriptionCount() > 0;
    },
    addHook: (apiModule, event, callback, subscriberInfo) => {
      if (!socket().isConnected()) {
        throw "Hooks can be added only for a connected socket";
      }
      (0, import_invariant2.default)(apiModule.indexOf("/") === -1, "The first argument should only contain the API section without any path tokens");
      const subscriptionId = event;
      if (subscriptions[subscriptionId] || pendingSubscriptions[subscriptionId]) {
        throw "Hook exists";
      }
      const subscriptionUrl = `${apiModule}/hooks/${event}`;
      callback = handleHookAction.bind(SocketSubscriptionHandler, subscriptionUrl, callback);
      emitter.on(subscriptionId, callback);
      return addPendingEntry(subscriptionUrl, subscriptionId, callback, subscriberInfo);
    },
    getPendingSubscriptionCount: () => {
      return Object.keys(pendingSubscriptions).length;
    }
  };
  const SocketSubscriptionsInternal = {
    onSocketDisconnected() {
      emitter.removeAllListeners();
      subscriptions = {};
    },
    handleMessage(message) {
      const ignored = eventIgnored(message.event, ignoredListenerEvents);
      if (message.completion_id) {
        if (!ignored) {
          logger.verbose(message.event, `(completion id ${message.completion_id})`, message.data);
        }
        emitter.emit(message.event, message.data, message.completion_id);
      } else {
        if (!ignored) {
          logger.verbose(message.event, message.id ? `(entity ${message.id})` : "(no entity)", message.data);
        }
        if (message.id) {
          emitter.emit(getEmitId(message.event, message.id), message.data, message.id);
        }
        emitter.emit(message.event, message.data, message.id);
      }
    }
  };
  return {
    ...SocketSubscriptionsInternal,
    socket: SocketSubscriptionsPublic
  };
};
var SocketSubscriptionHandler_default = SocketSubscriptionHandler;

// node_modules/airdcpp-apisocket/dist-es/SocketRequestHandler.js
var import_chalk2 = __toESM(require_source(), 1);
var import_invariant3 = __toESM(require_invariant(), 1);
var SocketRequestHandler = (socket, logger, { requestTimeout = 30, ignoredRequestPaths }) => {
  let callbacks = {};
  let currentCallbackId = 0;
  let timeoutReportInterval;
  const getCallbackId = () => {
    if (currentCallbackId > 1e5) {
      currentCallbackId = 0;
    }
    currentCallbackId += 1;
    return currentCallbackId;
  };
  const filterPassword = (data) => {
    if (!data || !data.hasOwnProperty("password")) {
      return data;
    }
    return {
      ...data,
      password: "(hidden)"
    };
  };
  const sendRequest = (method, path5, data, authenticating = false) => {
    if (!authenticating && !socket().isConnected()) {
      logger.warn(`Attempting to send request on a non-authenticated socket: ${path5}`);
      return Promise_default.reject(new Error("Not authorized"));
    }
    if (!socket().nativeSocket) {
      logger.warn(`Attempting to send request without a socket: ${path5}`);
      return Promise_default.reject(new Error("No socket"));
    }
    const callbackId = getCallbackId();
    (0, import_invariant3.default)(path5, "Attempting socket request without a path");
    const ignored = eventIgnored(path5, ignoredRequestPaths);
    if (!ignored) {
      logger.verbose(import_chalk2.default.white.bold(callbackId.toString()), method, path5, data ? filterPassword(data) : "(no data)");
    }
    const resolver = Promise_default.pending();
    callbacks[callbackId.toString()] = {
      time: Date.now(),
      resolver,
      ignored
    };
    const request = {
      path: path5,
      method,
      data,
      callback_id: callbackId
    };
    socket().nativeSocket.send(JSON.stringify(request));
    return resolver.promise;
  };
  const reportTimeouts = () => {
    const now = Date.now();
    Object.keys(callbacks).forEach((callbackId) => {
      const request = callbacks[callbackId];
      if (request.time + requestTimeout * 1e3 < now) {
        logger.warn(`Request ${callbackId} timed out`);
      }
    });
  };
  const cancelPendingRequests = (message = "Request cancelled") => {
    Object.keys(callbacks).forEach((id) => {
      logger.verbose(`Canceling a pending request ${id} (${message})`);
      const cb = callbacks[id];
      cb.resolver.reject(message);
    });
    callbacks = {};
  };
  const RequestsPublic = {
    put: (path5, data) => {
      return sendRequest("PUT", path5, data);
    },
    patch: (path5, data) => {
      return sendRequest("PATCH", path5, data);
    },
    post: (path5, data) => {
      return sendRequest("POST", path5, data);
    },
    delete: (path5) => {
      return sendRequest("DELETE", path5);
    },
    get: (path5) => {
      return sendRequest("GET", path5);
    },
    getPendingRequestCount: () => {
      return Object.keys(callbacks).length;
    }
  };
  Object.assign(RequestsPublic, {
    reportRequestTimeouts: reportTimeouts
    // internal method for testing
  });
  const formatFieldError = (error) => {
    return error.field && error.code ? `${error.field} (${error.code})` : "";
  };
  const RequestsInternal = {
    onSocketConnected() {
      timeoutReportInterval = setInterval(reportTimeouts, 3e4);
    },
    onSocketDisconnected() {
      cancelPendingRequests("Socket disconnected");
      clearTimeout(timeoutReportInterval);
    },
    handleMessage(messageObj) {
      const id = messageObj.callback_id;
      if (!callbacks.hasOwnProperty(id)) {
        logger.warn("No pending request for an API response", id, messageObj);
        return;
      }
      if (messageObj.code >= 200 && messageObj.code <= 204) {
        const { data } = messageObj;
        if (!callbacks[id].ignored) {
          logger.verbose(import_chalk2.default.green(id.toString()), "SUCCEEDED", data ?? "(no data)");
        }
        callbacks[id].resolver.resolve(data);
      } else {
        const errorMessageObj = messageObj;
        if (!errorMessageObj.error) {
          logger.warn("Error message missing from the response (this is an API bug that should be reported)", id, messageObj);
        }
        const { code } = errorMessageObj;
        const error = errorMessageObj.error || {
          message: "(no error description)"
        };
        logger.warn(id, code, error.message, formatFieldError(error));
        callbacks[id].resolver.reject({
          message: error.message,
          code,
          json: error
        });
      }
      delete callbacks[id];
    },
    postAuthenticate(path5, data) {
      return sendRequest("POST", path5, data, true);
    }
  };
  return {
    ...RequestsInternal,
    socket: RequestsPublic
  };
};
var SocketRequestHandler_default = SocketRequestHandler;

// node_modules/airdcpp-apisocket/dist-es/SocketBase.js
var import_invariant4 = __toESM(require_invariant(), 1);
var defaultOptions = {
  autoReconnect: true,
  reconnectInterval: 10,
  userSession: false
};
var ApiSocket = (userOptions, WebSocketImpl) => {
  const options = {
    ...defaultOptions,
    ...userOptions
  };
  let ws = null;
  let authToken = null;
  let socket = null;
  let reconnectTimer;
  let forceNoAutoConnect = true;
  let connectCallback = null;
  let connectedCallback = null;
  let sessionResetCallback = null;
  let disconnectCallback = null;
  let disconnectedCallback = null;
  const logger = SocketLogger_default(options);
  const subscriptions = SocketSubscriptionHandler_default(() => socket, logger, options);
  const requests = SocketRequestHandler_default(() => socket, logger, options);
  (0, import_invariant4.default)(userOptions.url, '"url" must be defined in settings object');
  const resetSession = () => {
    if (authToken) {
      if (sessionResetCallback) {
        sessionResetCallback();
      }
      authToken = null;
    }
  };
  const onClosed = (event) => {
    if (event.wasClean) {
      logger.info("Websocket was closed normally");
    } else {
      logger.error(`Websocket failed: ${event.reason} (code: ${event.code})`);
    }
    requests.onSocketDisconnected();
    subscriptions.onSocketDisconnected();
    ws = null;
    if (disconnectedCallback) {
      disconnectedCallback(event.reason, event.code, event.wasClean);
    }
    if (authToken && options.autoReconnect && !forceNoAutoConnect) {
      setTimeout(() => {
        if (forceNoAutoConnect) {
          return;
        }
        socket.reconnect().catch((error) => {
          logger.error("Reconnect failed for a closed socket", error.message);
        });
      });
    }
  };
  const onMessage = (event) => {
    const messageObj = JSON.parse(event.data);
    if (messageObj.callback_id) {
      requests.handleMessage(messageObj);
    } else {
      subscriptions.handleMessage(messageObj);
    }
  };
  const setSocketHandlers = () => {
    ws.onerror = (event) => {
      logger.error(`Websocket failed: ${event.reason}`);
    };
    ws.onclose = onClosed;
    ws.onmessage = onMessage;
  };
  const handlePasswordLogin = (username = options.username, password = options.password) => {
    if (!username) {
      throw new Error('"username" option was not supplied for authentication');
    }
    if (!password) {
      throw new Error('"password" option was not supplied for authentication');
    }
    const data = {
      username,
      password,
      grant_type: "password"
    };
    return requests.postAuthenticate(ApiConstants_default.LOGIN_URL, data);
  };
  const handleRefreshTokenLogin = (refreshToken) => {
    if (!refreshToken) {
      throw new Error('"refreshToken" option was not supplied for authentication');
    }
    const data = {
      refresh_token: refreshToken,
      grant_type: "refresh_token"
    };
    return requests.postAuthenticate(ApiConstants_default.LOGIN_URL, data);
  };
  const handleAuthorizeToken = () => {
    const data = {
      auth_token: authToken
    };
    return requests.postAuthenticate(ApiConstants_default.CONNECT_URL, data);
  };
  const onSocketAuthenticated = (data) => {
    if (!authToken) {
      logger.info("Login succeed");
      authToken = data.auth_token;
    } else {
      logger.info("Socket associated with an existing session");
    }
    if (connectedCallback) {
      try {
        connectedCallback(data);
      } catch (e) {
        console.error("Error in socket connect handler", e.message);
      }
      requests.onSocketConnected();
    }
  };
  const authenticate = (resolve2, reject, authenticationHandler, reconnectHandler) => {
    authenticationHandler().then((data) => {
      onSocketAuthenticated(data);
      resolve2(data);
    }).catch((error) => {
      if (error.code) {
        if (authToken && error.code === 400 && options.autoReconnect) {
          logger.info("Session lost, re-sending credentials");
          resetSession();
          authenticate(resolve2, reject, handlePasswordLogin, reconnectHandler);
          return;
        } else if (error.code === 401) {
          resetSession();
        }
        socket.disconnect(void 0, "Authentication failed");
      } else {
        logger.info("Socket disconnected during authentication, reconnecting");
        reconnectHandler();
        return;
      }
      reject(error);
    });
  };
  const connectInternal = (resolve2, reject, authenticationHandler, reconnectOnFailure = true) => {
    ws = new WebSocketImpl(options.url);
    const scheduleReconnect = () => {
      ws = null;
      if (!reconnectOnFailure) {
        reject("Cannot connect to the server");
        return;
      }
      reconnectTimer = setTimeout(() => {
        logger.info("Socket reconnecting");
        connectInternal(resolve2, reject, authenticationHandler, reconnectOnFailure);
      }, options.reconnectInterval * 1e3);
    };
    ws.onopen = () => {
      logger.info("Socket connected");
      setSocketHandlers();
      authenticate(resolve2, reject, authenticationHandler, scheduleReconnect);
    };
    ws.onerror = (event) => {
      logger.error("Connecting socket failed (network/system error, most likely the server is unreachable)");
      scheduleReconnect();
    };
  };
  const startConnect = (authenticationHandler, reconnectOnFailure) => {
    forceNoAutoConnect = false;
    if (connectCallback) {
      connectCallback();
    }
    return new Promise_default((resolve2, reject) => {
      logger.info(`Starting socket connect to ${userOptions.url}`);
      connectInternal(resolve2, reject, authenticationHandler, reconnectOnFailure);
    });
  };
  const isConnected = () => {
    return !!(ws && ws.readyState === (ws.OPEN || 1) && authToken);
  };
  const isConnecting = () => {
    return !!(ws && !isConnected());
  };
  const isActive = () => {
    return !!ws;
  };
  const disableReconnect = () => {
    clearTimeout(reconnectTimer);
    forceNoAutoConnect = true;
  };
  const waitDisconnected = (timeoutMs = 2e3) => {
    const checkInterval = 50;
    const maxAttempts = timeoutMs > 0 ? timeoutMs / checkInterval : 0;
    return new Promise_default((resolve2, reject) => {
      let attempts = 0;
      const wait = () => {
        if (isActive()) {
          if (attempts >= maxAttempts) {
            logger.error(`Socket disconnect timed out after ${timeoutMs} ms`);
            reject(new Error("Socket disconnect timed out"));
          } else {
            setTimeout(wait, checkInterval);
            attempts++;
          }
        } else {
          resolve2();
        }
      };
      wait();
    });
  };
  const disconnect = (autoConnect = false, reason = "Manually disconnected by the client") => {
    if (!ws) {
      if (!forceNoAutoConnect) {
        if (!autoConnect) {
          logger.verbose("Disconnecting a closed socket with auto reconnect enabled (cancel reconnect)");
          disableReconnect();
        } else {
          logger.verbose("Attempting to disconnect a closed socket with auto reconnect enabled (continue connecting)");
        }
      } else {
        logger.warn("Attempting to disconnect a closed socket (ignore)");
      }
      return;
    }
    if (disconnectCallback) {
      disconnectCallback(reason);
    }
    logger.info("Disconnecting socket");
    if (!autoConnect) {
      disableReconnect();
    }
    ws.close(1e3, reason);
  };
  socket = {
    // Start connect
    // Username and password are not required if those are available in socket options
    connect: (username, password, reconnectOnFailure = true) => {
      if (isActive()) {
        throw new Error("Connect may only be used for a closed socket");
      }
      resetSession();
      return startConnect(() => handlePasswordLogin(username, password), reconnectOnFailure);
    },
    connectRefreshToken: (refreshToken, reconnectOnFailure = true) => {
      if (isActive()) {
        throw new Error("Connect may only be used for a closed socket");
      }
      resetSession();
      return startConnect(() => handleRefreshTokenLogin(refreshToken), reconnectOnFailure);
    },
    // Connect and attempt to associate the socket with an existing session
    reconnect: (token = void 0, reconnectOnFailure = true) => {
      if (isActive()) {
        throw new Error("Reconnect may only be used for a closed socket");
      }
      if (token) {
        authToken = token;
      }
      if (!authToken) {
        throw new Error("No session token available for reconnecting");
      }
      logger.info("Reconnecting socket");
      return startConnect(handleAuthorizeToken, reconnectOnFailure);
    },
    // Remove the associated API session and close the socket
    logout: () => {
      const resolver = Promise_default.pending();
      socket.delete(ApiConstants_default.LOGOUT_URL).then((data) => {
        logger.info("Logout succeed");
        resetSession();
        resolver.resolve(data);
        disconnect(void 0, "Logged out");
      }).catch((error) => {
        logger.error("Logout failed", error);
        resolver.reject(error);
      });
      return resolver.promise;
    },
    disconnect,
    isConnecting,
    isConnected,
    isActive,
    logger,
    waitDisconnected,
    // Function to call each time a connect attempt is initiated
    set onConnect(handler) {
      connectCallback = handler;
    },
    // Function to call each time the socket has been connected (and authorized)
    set onConnected(handler) {
      connectedCallback = handler;
    },
    // Function to call each time the stored session token was reset (manual logout/rejected reconnect)
    set onSessionReset(handler) {
      sessionResetCallback = handler;
    },
    // Function to call each time the socket is being manually disconnected
    set onDisconnect(handler) {
      disconnectCallback = handler;
    },
    // Function to call each time the socket has been disconnected
    set onDisconnected(handler) {
      disconnectedCallback = handler;
    },
    get onConnect() {
      return connectCallback;
    },
    get onConnected() {
      return connectedCallback;
    },
    get onSessionReset() {
      return sessionResetCallback;
    },
    get onDisconnect() {
      return disconnectCallback;
    },
    get onDisconnected() {
      return disconnectedCallback;
    },
    get nativeSocket() {
      return ws;
    },
    get url() {
      return userOptions.url;
    },
    ...subscriptions.socket,
    ...requests.socket
  };
  return socket;
};
var SocketBase_default = ApiSocket;

// node_modules/airdcpp-apisocket/dist-es/PublicHelpers.js
var checkAccess = (menuItem, permissions) => {
  if (!menuItem.access) {
    return true;
  }
  return permissions.indexOf("admin") !== -1 || permissions.indexOf(menuItem.access) !== -1;
};
var URLS_SUPPORT = "urls";
var FORM_SUPPORT = "form";
var hasSupport = (support, supports) => {
  return !!supports && supports.indexOf(support) !== -1;
};
var validateItem = async (menuItem, data) => {
  const { selected_ids, entity_id, permissions, supports } = data;
  if (!!menuItem.urls && !hasSupport(URLS_SUPPORT, supports)) {
    return false;
  }
  if (!!menuItem.filter && !await menuItem.filter({
    selectedIds: selected_ids,
    entityId: entity_id,
    permissions,
    supports
  })) {
    return false;
  }
  return checkAccess(menuItem, data.permissions);
};
var parseCallbackData = async (item, data) => {
  const { selected_ids, entity_id, permissions, supports } = data;
  const callbackProps = {
    selectedIds: selected_ids,
    entityId: entity_id,
    permissions,
    supports
  };
  if (!!item.urls && !!item.urls.length) {
    let urls;
    if (typeof item.urls === "function") {
      urls = await item.urls(callbackProps);
    } else {
      urls = item.urls;
    }
    return {
      urls
    };
  } else if (!!item.formDefinitions && hasSupport(FORM_SUPPORT, supports)) {
    let formDefinitions;
    if (typeof item.formDefinitions === "function") {
      formDefinitions = await item.formDefinitions(callbackProps);
    } else {
      formDefinitions = item.formDefinitions;
    }
    return {
      form_definitions: formDefinitions
    };
  }
  return {};
};
var findMenuItemById = (id, menuItems) => {
  for (const item of menuItems) {
    if (item.id === id) {
      return item;
    }
    if (item.children) {
      const found = findMenuItemById(id, item.children);
      if (found) {
        return found;
      }
    }
  }
  return void 0;
};
var addContextMenuItems = async (socket, menuItems, menuTypeId, menu) => {
  const removeListener = await socket.addListener("menus", `${menuTypeId}_menuitem_selected`, async (data) => {
    if (data.hook_id === menu.id) {
      const menuItem = findMenuItemById(data.menuitem_id, menuItems);
      if (!!menuItem) {
        const isValid = await validateItem(menuItem, data);
        if (isValid && !!menuItem.onClick) {
          const { selected_ids, entity_id, permissions, supports, form_values } = data;
          menuItem.onClick({
            selectedIds: selected_ids,
            entityId: entity_id,
            permissions,
            supports,
            formValues: form_values
          });
        }
      }
    }
  });
  const parseMenuItem = async (item, data) => {
    const isValid = await validateItem(item, data);
    if (isValid) {
      const parsedCallbackData = await parseCallbackData(item, data);
      const { onClick, id, title, icon, children } = item;
      const isValid2 = !!onClick || !!parsedCallbackData.urls && parsedCallbackData.urls.length || !!children;
      if (isValid2) {
        const validChildren = [];
        if (children) {
          for (const child of children) {
            const validChild = await parseMenuItem(child, data);
            if (validChild) {
              validChildren.push(validChild);
            }
          }
        }
        const validItem = {
          id,
          title,
          icon,
          ...parsedCallbackData
        };
        if (validChildren.length > 0) {
          validItem.children = validChildren;
        }
        return validItem;
      } else {
        socket.logger.warn(`Context menu item ${id} does not have a valid action, children or URLs, skipping`, item);
      }
    }
    return null;
  };
  const removeHook = await socket.addHook("menus", `${menuTypeId}_list_menuitems`, async (data, accept, reject) => {
    const validItems = [];
    for (const item of menuItems) {
      const validItem = await parseMenuItem(item, data);
      if (validItem) {
        validItems.push(validItem);
      }
    }
    accept({
      menuitems: validItems,
      icon: menu.icon
    });
  }, menu);
  return async () => {
    await removeHook();
    await removeListener();
  };
};

// node_modules/airdcpp-extension/dist-es/context.js
var import_minimist = __toESM(require_minimist(), 1);

// node_modules/airdcpp-extension/dist-es/api.js
var API = (socket, argv) => {
  const activity = () => {
    return socket.post("sessions/activity");
  };
  const ready = () => {
    return socket.post(`extensions/${argv.name}/ready`);
  };
  const getSettingValues = (keys) => {
    return socket.post("settings/get", {
      keys
    });
  };
  return {
    activity,
    getSettingValues,
    ready
  };
};

// node_modules/airdcpp-extension/dist-es/context.js
var import_websocket = __toESM(require_websocket2(), 1);
var defaultSocketOptions = {
  // API settings
  autoReconnect: false,
  ignoredRequestPaths: [
    "sessions/activity"
  ]
};
var defaultExtensionOptions = {
  minSleepDetectTimeout: 3e4,
  aliveCheckInterval: 5e3
};
var getDefaultContext = (userSocketOptions, userExtensionOptions) => {
  const argv = (0, import_minimist.default)(process.argv.slice(2));
  const connectUrl = `ws://${argv.apiUrl}`;
  const socket = SocketBase_default({
    logLevel: argv.debug ? "verbose" : "info",
    ...defaultSocketOptions,
    ...userSocketOptions,
    url: connectUrl
  }, import_websocket.default.w3cwebsocket);
  const api = API(socket, argv);
  const DefaultContext = {
    argv,
    socket,
    connectUrl,
    api,
    options: {
      ...defaultExtensionOptions,
      ...userExtensionOptions
    }
  };
  return DefaultContext;
};

// node_modules/airdcpp-extension/dist-es/process-state-checker.js
var EXIT_CODE_RESTART = 124;
var EXIT_CODE_PARENT_DEAD = 69;
var isPidAlive = (pid) => {
  try {
    return process.kill(pid, 0);
  } catch (e) {
    return e.code === "EPERM";
  }
};
var ProcessStateChecker = (appPid, { socket, api, options }, onStop) => {
  let lastParentAlive = Date.now();
  let interval;
  let sleepDetectTimeoutMs = options.minSleepDetectTimeout;
  const checkParentAlive = () => {
    if (lastParentAlive + sleepDetectTimeoutMs < Date.now()) {
      socket.logger.error(`Wake up detected (last alive ${Date.now() - lastParentAlive} ms ago), requesting restart...`);
      onStop();
      process.exit(EXIT_CODE_RESTART);
      return;
    }
    if (!isPidAlive(appPid)) {
      socket.logger.error(`Parent dead (PID ${appPid}), exiting...`);
      onStop();
      process.exit(EXIT_CODE_PARENT_DEAD);
    }
    lastParentAlive = Date.now();
  };
  const start = () => {
    api.getSettingValues(["ping_timeout"]).then((v) => {
      const pingTimeoutMs = v.ping_timeout * 1e3;
      if (pingTimeoutMs > sleepDetectTimeoutMs) {
        sleepDetectTimeoutMs = pingTimeoutMs;
        socket.logger.info(`Alive check timeout adjusted to match the API ping timeout (${pingTimeoutMs} ms)`);
      }
      interval = setInterval(checkParentAlive, options.aliveCheckInterval);
    }).catch((e) => {
      socket.logger.error(`Failed to get ping timeout value from the API`, e);
      process.exit(1);
    });
  };
  const stop = () => {
    clearInterval(interval);
  };
  return {
    start,
    stop,
    getStats: () => ({
      sleepDetectTimeoutMs
    })
  };
};
var SocketPingHandler = ({ socket, api }, onStop) => {
  const PING_INTERVAL_MS = 4e3;
  const PING_TIMEOUT_MS = 1e4;
  let lastSocketAlive = Date.now() + 9999;
  let interval;
  const handlePing = () => {
    if (lastSocketAlive + PING_TIMEOUT_MS < Date.now()) {
      socket.logger.error("Socket timed out, requesting restart...");
      onStop();
      process.exit(EXIT_CODE_RESTART);
      return;
    }
    api.activity().then((_) => {
      lastSocketAlive = Date.now();
    }).catch((e) => {
      socket.logger.error(`Ping failed: ${e.message}`);
    });
  };
  const start = () => {
    interval = setInterval(handlePing, PING_INTERVAL_MS);
  };
  const stop = () => {
    clearInterval(interval);
  };
  return {
    start,
    stop,
    getStats: () => ({
      sleepDetectTimeoutMs: PING_TIMEOUT_MS
    })
  };
};
var getProcessStateChecker = (context, onStop) => {
  if (!context.argv.appPid) {
    return SocketPingHandler(context, onStop);
  }
  return ProcessStateChecker(context.argv.appPid, context, onStop);
};

// node_modules/airdcpp-extension/dist-es/utils.js
var import_url = require("url");
var import_os = __toESM(require("os"), 1);
var parseServerInfo = (apiUrl) => {
  const url = new import_url.URL(apiUrl);
  return {
    address: url.host,
    secure: url.protocol === "wss"
  };
};
var getSystemInfo = () => ({
  nodeVersion: process.version,
  arch: import_os.default.arch(),
  osVersion: !!import_os.default.version ? import_os.default.version() : "N/A",
  totalmem: import_os.default.totalmem(),
  cpuCount: import_os.default.cpus().length
});

// node_modules/airdcpp-extension/dist-es/ManagedExtension.js
var ManagedExtension = (ScriptEntry, userSocketOptions = {}, userExtensionOptions = {}, contextGetter = getDefaultContext) => {
  const context = contextGetter(userSocketOptions, userExtensionOptions);
  const { argv, socket, connectUrl, api } = context;
  process.title = argv.name;
  let onStart;
  let onStop;
  socket.logger.verbose("Starting the extension", JSON.stringify(process.argv), JSON.stringify(argv, null, 2), JSON.stringify(getSystemInfo(), null, 2));
  const onStopExtension = () => {
    if (onStop) {
      onStop();
    }
  };
  const processStateChecker = getProcessStateChecker(context, onStopExtension);
  socket.onConnected = (sessionInfo) => {
    setTimeout(() => {
      processStateChecker.start();
      if (onStart) {
        Promise.resolve(onStart(sessionInfo)).then(() => {
          if (argv.signalReady) {
            api.ready().catch((e) => socket.logger.error(`Failed to signal ready state: ${e.message}`));
          }
        });
      }
    }, 10);
  };
  socket.onDisconnected = (reason, _code, wasClean) => {
    onStopExtension();
    if (wasClean) {
      socket.logger.info("Socket disconnected (clean), exiting");
      process.exit(1);
    } else {
      socket.logger.info(`Socket disconnected (unclean, ${reason}), requesting restart`);
      process.exit(EXIT_CODE_RESTART);
    }
  };
  const onSigint = () => {
    socket.logger.info("Exit requested");
    process.exit();
  };
  process.on("exit", onStopExtension);
  process.on("SIGINT", onSigint);
  process.on("SIGTERM", onSigint);
  const EntryFunction = typeof ScriptEntry === "function" ? ScriptEntry : ScriptEntry.default;
  if (!EntryFunction) {
    throw "Extension entry is not a function ";
  }
  EntryFunction(socket, {
    name: argv.name,
    configPath: argv.settingsPath,
    logPath: argv.logPath,
    debugMode: argv.debug,
    server: parseServerInfo(connectUrl),
    set onStart(handler) {
      onStart = handler;
    },
    set onStop(handler) {
      onStop = handler;
    }
  });
  socket.reconnect(argv.authToken, false).catch((error) => {
    socket.logger.error(`Failed to connect to server ${argv.apiUrl}, exiting...`);
    onStopExtension();
    process.exit(1);
  });
  return {
    stop: () => {
      processStateChecker.stop();
    },
    getStats: () => {
      return processStateChecker.getStats();
    }
  };
};

// node_modules/mkdirp/dist/mjs/mkdirp-manual.js
var import_path = require("path");

// node_modules/mkdirp/dist/mjs/opts-arg.js
var import_fs = require("fs");
var optsArg = (opts) => {
  if (!opts) {
    opts = { mode: 511 };
  } else if (typeof opts === "object") {
    opts = { mode: 511, ...opts };
  } else if (typeof opts === "number") {
    opts = { mode: opts };
  } else if (typeof opts === "string") {
    opts = { mode: parseInt(opts, 8) };
  } else {
    throw new TypeError("invalid options argument");
  }
  const resolved = opts;
  const optsFs = opts.fs || {};
  opts.mkdir = opts.mkdir || optsFs.mkdir || import_fs.mkdir;
  opts.mkdirAsync = opts.mkdirAsync ? opts.mkdirAsync : async (path5, options) => {
    return new Promise((res, rej) => resolved.mkdir(path5, options, (er, made) => er ? rej(er) : res(made)));
  };
  opts.stat = opts.stat || optsFs.stat || import_fs.stat;
  opts.statAsync = opts.statAsync ? opts.statAsync : async (path5) => new Promise((res, rej) => resolved.stat(path5, (err, stats) => err ? rej(err) : res(stats)));
  opts.statSync = opts.statSync || optsFs.statSync || import_fs.statSync;
  opts.mkdirSync = opts.mkdirSync || optsFs.mkdirSync || import_fs.mkdirSync;
  return resolved;
};

// node_modules/mkdirp/dist/mjs/mkdirp-manual.js
var mkdirpManualSync = (path5, options, made) => {
  const parent = (0, import_path.dirname)(path5);
  const opts = { ...optsArg(options), recursive: false };
  if (parent === path5) {
    try {
      return opts.mkdirSync(path5, opts);
    } catch (er) {
      const fer = er;
      if (fer && fer.code !== "EISDIR") {
        throw er;
      }
      return;
    }
  }
  try {
    opts.mkdirSync(path5, opts);
    return made || path5;
  } catch (er) {
    const fer = er;
    if (fer && fer.code === "ENOENT") {
      return mkdirpManualSync(path5, opts, mkdirpManualSync(parent, opts, made));
    }
    if (fer && fer.code !== "EEXIST" && fer && fer.code !== "EROFS") {
      throw er;
    }
    try {
      if (!opts.statSync(path5).isDirectory())
        throw er;
    } catch (_) {
      throw er;
    }
  }
};
var mkdirpManual = Object.assign(async (path5, options, made) => {
  const opts = optsArg(options);
  opts.recursive = false;
  const parent = (0, import_path.dirname)(path5);
  if (parent === path5) {
    return opts.mkdirAsync(path5, opts).catch((er) => {
      const fer = er;
      if (fer && fer.code !== "EISDIR") {
        throw er;
      }
    });
  }
  return opts.mkdirAsync(path5, opts).then(() => made || path5, async (er) => {
    const fer = er;
    if (fer && fer.code === "ENOENT") {
      return mkdirpManual(parent, opts).then((made2) => mkdirpManual(path5, opts, made2));
    }
    if (fer && fer.code !== "EEXIST" && fer.code !== "EROFS") {
      throw er;
    }
    return opts.statAsync(path5).then((st) => {
      if (st.isDirectory()) {
        return made;
      } else {
        throw er;
      }
    }, () => {
      throw er;
    });
  });
}, { sync: mkdirpManualSync });

// node_modules/mkdirp/dist/mjs/mkdirp-native.js
var import_path3 = require("path");

// node_modules/mkdirp/dist/mjs/find-made.js
var import_path2 = require("path");
var findMade = async (opts, parent, path5) => {
  if (path5 === parent) {
    return;
  }
  return opts.statAsync(parent).then(
    (st) => st.isDirectory() ? path5 : void 0,
    // will fail later
    // will fail later
    (er) => {
      const fer = er;
      return fer && fer.code === "ENOENT" ? findMade(opts, (0, import_path2.dirname)(parent), parent) : void 0;
    }
  );
};
var findMadeSync = (opts, parent, path5) => {
  if (path5 === parent) {
    return void 0;
  }
  try {
    return opts.statSync(parent).isDirectory() ? path5 : void 0;
  } catch (er) {
    const fer = er;
    return fer && fer.code === "ENOENT" ? findMadeSync(opts, (0, import_path2.dirname)(parent), parent) : void 0;
  }
};

// node_modules/mkdirp/dist/mjs/mkdirp-native.js
var mkdirpNativeSync = (path5, options) => {
  const opts = optsArg(options);
  opts.recursive = true;
  const parent = (0, import_path3.dirname)(path5);
  if (parent === path5) {
    return opts.mkdirSync(path5, opts);
  }
  const made = findMadeSync(opts, path5);
  try {
    opts.mkdirSync(path5, opts);
    return made;
  } catch (er) {
    const fer = er;
    if (fer && fer.code === "ENOENT") {
      return mkdirpManualSync(path5, opts);
    } else {
      throw er;
    }
  }
};
var mkdirpNative = Object.assign(async (path5, options) => {
  const opts = { ...optsArg(options), recursive: true };
  const parent = (0, import_path3.dirname)(path5);
  if (parent === path5) {
    return await opts.mkdirAsync(path5, opts);
  }
  return findMade(opts, path5).then((made) => opts.mkdirAsync(path5, opts).then((m) => made || m).catch((er) => {
    const fer = er;
    if (fer && fer.code === "ENOENT") {
      return mkdirpManual(path5, opts);
    } else {
      throw er;
    }
  }));
}, { sync: mkdirpNativeSync });

// node_modules/mkdirp/dist/mjs/path-arg.js
var import_path4 = require("path");
var platform = process.env.__TESTING_MKDIRP_PLATFORM__ || process.platform;
var pathArg = (path5) => {
  if (/\0/.test(path5)) {
    throw Object.assign(new TypeError("path must be a string without null bytes"), {
      path: path5,
      code: "ERR_INVALID_ARG_VALUE"
    });
  }
  path5 = (0, import_path4.resolve)(path5);
  if (platform === "win32") {
    const badWinChars = /[*|"<>?:]/;
    const { root } = (0, import_path4.parse)(path5);
    if (badWinChars.test(path5.substring(root.length))) {
      throw Object.assign(new Error("Illegal characters in path."), {
        path: path5,
        code: "EINVAL"
      });
    }
  }
  return path5;
};

// node_modules/mkdirp/dist/mjs/use-native.js
var import_fs2 = require("fs");
var version = process.env.__TESTING_MKDIRP_NODE_VERSION__ || process.version;
var versArr = version.replace(/^v/, "").split(".");
var hasNative = +versArr[0] > 10 || +versArr[0] === 10 && +versArr[1] >= 12;
var useNativeSync = !hasNative ? () => false : (opts) => optsArg(opts).mkdirSync === import_fs2.mkdirSync;
var useNative = Object.assign(!hasNative ? () => false : (opts) => optsArg(opts).mkdir === import_fs2.mkdir, {
  sync: useNativeSync
});

// node_modules/mkdirp/dist/mjs/index.js
var mkdirpSync = (path5, opts) => {
  path5 = pathArg(path5);
  const resolved = optsArg(opts);
  return useNativeSync(resolved) ? mkdirpNativeSync(path5, resolved) : mkdirpManualSync(path5, resolved);
};
var mkdirp = Object.assign(async (path5, opts) => {
  path5 = pathArg(path5);
  const resolved = optsArg(opts);
  return useNative(resolved) ? mkdirpNative(path5, resolved) : mkdirpManual(path5, resolved);
}, {
  mkdirpSync,
  mkdirpNative,
  mkdirpNativeSync,
  mkdirpManual,
  mkdirpManualSync,
  sync: mkdirpSync,
  native: mkdirpNative,
  nativeSync: mkdirpNativeSync,
  manual: mkdirpManual,
  manualSync: mkdirpManualSync,
  useNative,
  useNativeSync
});

// node_modules/airdcpp-extension/dist-es/RemoteExtension.js
var import_websocket2 = __toESM(require_websocket2(), 1);

// src/main.js
var import_node_fs5 = __toESM(require("node:fs"), 1);
var import_node_path4 = __toESM(require("node:path"), 1);
var import_airdcpp_extension_settings = __toESM(require_dist(), 1);

// src/adl.js
var import_fast_xml_parser = __toESM(require_fxp(), 1);

// src/regex-convert.js
var SYNTAX_CHARS = "^$\\.*+?()[]{}|/";
var caseVariants = (ch) => {
  const variants = /* @__PURE__ */ new Set([ch]);
  const lower = ch.toLowerCase();
  const upper = ch.toUpperCase();
  if ([...lower].length === 1) {
    variants.add(lower);
  }
  if ([...upper].length === 1) {
    variants.add(upper);
  }
  return [...variants];
};
var escapeForClass = (ch) => {
  return "\\^]-[".includes(ch) ? `\\${ch}` : ch;
};
var HEX2 = /^[0-9a-fA-F]{2}/;
var HEX4 = /^[0-9a-fA-F]{4}/;
var UnsupportedPatternError = class extends Error {
};
var unsupported = (message) => {
  throw new UnsupportedPatternError(message);
};
var convertPattern = (originalPattern) => {
  const pattern = originalPattern.replace(/\(\?-i\)/g, "").replace(/\(\?i\)/g, "");
  const hasSensitiveGroups = pattern.includes("(?-i:");
  const out = [];
  const groupStack = [];
  let sensitive = false;
  let i = 0;
  const expanding = () => hasSensitiveGroups && !sensitive;
  const readEscape = (inClass) => {
    const c = pattern[i + 1];
    if (c === void 0) {
      unsupported("Trailing backslash");
    }
    switch (c) {
      case "d":
        i += 2;
        return { text: "\\p{Nd}" };
      case "D":
        i += 2;
        return { text: "\\P{Nd}" };
      case "w":
        i += 2;
        return { text: inClass ? "\\p{L}\\p{N}_" : "[\\p{L}\\p{N}_]" };
      case "W":
        if (inClass) {
          unsupported("\\W inside a character class");
        }
        i += 2;
        return { text: "[^\\p{L}\\p{N}_]" };
      case "s":
      case "S":
      case "b":
      case "B":
      case "t":
      case "n":
      case "r":
      case "f":
      case "v":
        i += 2;
        return { text: `\\${c}` };
      case "0":
        i += 2;
        return { text: "\\0" };
      case "x": {
        const hex = pattern.slice(i + 2).match(HEX2);
        if (!hex) {
          unsupported("Invalid \\x escape");
        }
        const ch = String.fromCharCode(parseInt(hex[0], 16));
        const text = `\\x${hex[0]}`;
        i += 4;
        return { text, literal: ch };
      }
      case "u": {
        const hex = pattern.slice(i + 2).match(HEX4);
        if (!hex) {
          unsupported("Invalid \\u escape");
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
        unsupported("Back reference inside a character class");
      }
      const digits = pattern.slice(i + 1).match(/^[0-9]+/)[0];
      if (hasSensitiveGroups) {
        unsupported("Back references together with (?-i: groups");
      }
      i += 1 + digits.length;
      return { text: `\\${digits}`, backref: true };
    }
    if (/[A-Za-z]/.test(c)) {
      unsupported(`Unsupported escape \\${c}`);
    }
    i += 2;
    if (SYNTAX_CHARS.includes(c)) {
      return { text: `\\${c}`, literal: c };
    }
    if (c === "-") {
      return { text: inClass ? "\\-" : "-", literal: c };
    }
    return { text: inClass ? escapeForClass(c) : c, literal: c };
  };
  const emitLiteral = (ch) => {
    if (expanding()) {
      const variants = caseVariants(ch);
      if (variants.length > 1) {
        out.push(`[${variants.map(escapeForClass).join("")}]`);
        return;
      }
    }
    out.push(ch);
  };
  const parseClass = () => {
    out.push("[");
    i++;
    if (pattern[i] === "^") {
      out.push("^");
      i++;
    }
    if (pattern[i] === "]") {
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
      const addAsciiRange = (from, to, delta) => {
        const a = Math.max(loCode, from.charCodeAt(0));
        const b = Math.min(hiCode, to.charCodeAt(0));
        if (a <= b) {
          extras.push(`${String.fromCharCode(a + delta)}-${String.fromCharCode(b + delta)}`);
        }
      };
      addAsciiRange("a", "z", -32);
      addAsciiRange("A", "Z", 32);
    };
    const readAtom = () => {
      if (pattern[i] === "\\") {
        const esc = readEscape(true);
        return { text: esc.text, literal: esc.literal };
      }
      const ch = String.fromCodePoint(pattern.codePointAt(i));
      i += ch.length;
      return { text: ch, literal: ch };
    };
    let closed = false;
    while (i < pattern.length) {
      if (pattern[i] === "]") {
        closed = true;
        i++;
        break;
      }
      const atom = readAtom();
      if (pattern[i] === "-" && i + 1 < pattern.length && pattern[i + 1] !== "]" && atom.literal !== void 0) {
        const savedIndex = i;
        i++;
        const end = readAtom();
        if (end.literal === void 0) {
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
      if (atom.literal !== void 0) {
        addExtraForChar(atom.literal);
      }
    }
    if (!closed) {
      unsupported("Unterminated character class");
    }
    out.push(...extras);
    out.push("]");
  };
  const openGroup = (text, newSensitive) => {
    groupStack.push(sensitive);
    sensitive = newSensitive;
    out.push(text);
  };
  while (i < pattern.length) {
    const c = pattern[i];
    switch (c) {
      case "\\": {
        const esc = readEscape(false);
        if (esc.literal !== void 0 && expanding()) {
          const variants = caseVariants(esc.literal);
          if (variants.length > 1) {
            out.push(`[${variants.map(escapeForClass).join("")}]`);
            break;
          }
        }
        out.push(esc.text);
        break;
      }
      case "[":
        parseClass();
        break;
      case "(": {
        if (pattern[i + 1] !== "?") {
          openGroup("(", sensitive);
          i++;
          break;
        }
        const rest = pattern.slice(i + 2);
        let named;
        if (rest.startsWith(":")) {
          openGroup("(?:", sensitive);
          i += 3;
        } else if (rest.startsWith("=") || rest.startsWith("!")) {
          openGroup(`(?${rest[0]}`, sensitive);
          i += 3;
        } else if (rest.startsWith("<=") || rest.startsWith("<!")) {
          openGroup(`(?${rest.slice(0, 2)}`, sensitive);
          i += 4;
        } else if (named = rest.match(/^<([A-Za-z_][A-Za-z0-9_]*)>/)) {
          openGroup(`(?<${named[1]}>`, sensitive);
          i += 2 + named[0].length;
        } else if (rest.startsWith("i:")) {
          openGroup("(?:", false);
          i += 4;
        } else if (rest.startsWith("-i:")) {
          openGroup("(?:", true);
          i += 5;
        } else {
          unsupported(`Unsupported group construct "(?${rest.slice(0, 3)}"`);
        }
        break;
      }
      case ")":
        if (!groupStack.length) {
          unsupported("Unbalanced parentheses");
        }
        sensitive = groupStack.pop();
        out.push(")");
        i++;
        break;
      case "{": {
        const quantifier = pattern.slice(i).match(/^\{\d+(?:,\d*)?\}/);
        if (quantifier) {
          out.push(quantifier[0]);
          i += quantifier[0].length;
        } else {
          out.push("\\{");
          i++;
        }
        break;
      }
      case "}":
        out.push("\\}");
        i++;
        break;
      case "]":
        out.push("\\]");
        i++;
        break;
      case ".":
      case "^":
      case "$":
      case "|":
      case "*":
      case "+":
      case "?":
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
    unsupported("Unbalanced parentheses");
  }
  return {
    source: out.join(""),
    flags: hasSensitiveGroups ? "u" : "iu"
  };
};
var compileAdlRegex = (pattern) => {
  const { source, flags } = convertPattern(pattern);
  return new RegExp(source, flags);
};

// src/adl.js
var SOURCE_FILE = "Filename";
var SOURCE_DIRECTORY = "Directory";
var SOURCE_PATH = "Full Path";
var parser = new import_fast_xml_parser.XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  // Search strings may contain significant whitespace
  trimValues: false,
  parseTagValue: false,
  parseAttributeValue: false,
  isArray: (name) => name === "Search" || name === "SearchGroup"
});
var textOf = (node) => {
  if (node === void 0 || node === null) {
    return void 0;
  }
  if (typeof node === "object") {
    return node["#text"] !== void 0 ? String(node["#text"]) : "";
  }
  return String(node);
};
var toBytes = (sizeText, sizeType) => {
  const value = parseInt(sizeText, 10);
  if (Number.isNaN(value)) {
    throw new Error(`Invalid size "${sizeText}"`);
  }
  if (value < 0) {
    return -1;
  }
  switch ((sizeType || "").toLowerCase()) {
    case "mib":
      return value * 1024 * 1024;
    case "kib":
      return value * 1024;
    case "gib":
      return value * 1024 * 1024 * 1024;
    default:
      return value;
  }
};
var trimLabel = (label) => (label || "").trim();
var parseAdl = (xmlText) => {
  const text = xmlText.charCodeAt(0) === 65279 ? xmlText.slice(1) : xmlText;
  const doc = parser.parse(text);
  if (!doc || !doc.ADLSearch) {
    throw new Error("Not an ADLSearch file (missing the ADLSearch root element)");
  }
  const searches = [];
  for (const group of doc.ADLSearch.SearchGroup || []) {
    if (group && group.Search) {
      searches.push(...group.Search);
    }
  }
  const rules = [];
  const skipped = [];
  const stats = {
    total: searches.length,
    inactive: 0,
    plainText: 0,
    unsupported: 0
  };
  searches.forEach((entry, position) => {
    const searchNode = entry.SearchString;
    const pattern = textOf(searchNode) || "";
    const isRegex = searchNode && typeof searchNode === "object" ? searchNode["@_RegEx"] : void 0;
    const isActive = textOf(entry.IsActive);
    if (isActive !== "1") {
      stats.inactive++;
      return;
    }
    if (isRegex !== "1") {
      stats.plainText++;
      skipped.push({ position, label: trimLabel(textOf(entry.DestDirectory)), pattern, reason: "Active entry is not a regular expression (skipped, same as adlchecker.py)" });
      return;
    }
    try {
      const sizeType = textOf(entry.SizeType);
      const rule = {
        // Position among the used rules (equal to the order in adlchecker.py)
        index: rules.length,
        position,
        label: trimLabel(textOf(entry.DestDirectory)),
        sourceType: textOf(entry.SourceType),
        pattern,
        regex: compileAdlRegex(pattern),
        minSize: toBytes(textOf(entry.MinSize), sizeType),
        maxSize: toBytes(textOf(entry.MaxSize), sizeType)
      };
      rule.hasSizeLimits = rule.minSize !== -1 || rule.maxSize !== -1;
      rules.push(rule);
    } catch (e) {
      stats.unsupported++;
      skipped.push({ position, label: trimLabel(textOf(entry.DestDirectory)), pattern, reason: e.message });
    }
  });
  return { rules, skipped, stats };
};
var sourceMatches = (rule, isDirectory) => {
  switch (rule.sourceType) {
    case SOURCE_FILE:
      return !isDirectory;
    case SOURCE_DIRECTORY:
      return isDirectory;
    case SOURCE_PATH:
      return true;
    default:
      return false;
  }
};
var sizeMatches = (rule, size) => {
  if (size < 0) {
    return false;
  }
  return (rule.minSize === -1 || size >= rule.minSize) && (rule.maxSize === -1 || size <= rule.maxSize);
};
var stripTrailingSeparators = (p) => {
  let end = p.length;
  while (end > 1 && (p[end - 1] === "/" || p[end - 1] === "\\")) {
    end--;
  }
  return p.slice(0, end);
};
var toItem = (rawPath, isDirectory) => {
  const path5 = stripTrailingSeparators(rawPath);
  const lastSeparator = Math.max(path5.lastIndexOf("/"), path5.lastIndexOf("\\"));
  return {
    path: path5,
    name: lastSeparator === -1 ? path5 : path5.slice(lastSeparator + 1),
    isDirectory
  };
};
var matchItem = async (rules, item, getSize) => {
  const matched = [];
  let size;
  for (const rule of rules) {
    if (!sourceMatches(rule, item.isDirectory)) {
      continue;
    }
    const subject = rule.sourceType === SOURCE_PATH ? item.path : item.name;
    if (!rule.regex.test(subject)) {
      continue;
    }
    if (!item.isDirectory && rule.hasSizeLimits) {
      if (size === void 0) {
        size = await getSize(item.path);
      }
      if (!sizeMatches(rule, size)) {
        continue;
      }
    }
    matched.push(rule);
  }
  return matched;
};
var categoriesOf = (matchedRules) => {
  return [...new Set(matchedRules.map((rule) => rule.label))];
};
var parseIgnoreList = (text) => {
  const paths = /* @__PURE__ */ new Set();
  for (const line of text.split(/\r?\n/)) {
    if (line.length) {
      paths.add(stripTrailingSeparators(line));
    }
  }
  return paths;
};

// src/store.js
var import_node_fs = __toESM(require("node:fs"), 1);
var ACTION_WARNED = "warned";
var ACTION_REJECTED = "rejected";
var ACTION_SCAN = "found by scan";
var SAVE_DELAY_MS = 3e3;
var createStore = (filePath, logger) => {
  let matches = /* @__PURE__ */ new Map();
  let unreadable = [];
  let saveTimer;
  let dirty = false;
  const serialize = () => JSON.stringify({ version: 1, matches: [...matches.values()], unreadable });
  const load = () => {
    try {
      const data = JSON.parse(import_node_fs.default.readFileSync(filePath, "utf8"));
      if (data && data.version === 1 && Array.isArray(data.matches)) {
        matches = new Map(data.matches.filter((m) => m && typeof m.path === "string").map((m) => [m.path, m]));
        if (Array.isArray(data.unreadable)) {
          unreadable = data.unreadable.filter((u) => u && typeof u.path === "string");
        }
      }
    } catch (e) {
      if (e.code !== "ENOENT") {
        logger.error(`Failed to load the saved matches from ${filePath}: ${e.message}`);
      }
    }
  };
  const saveNow = async () => {
    clearTimeout(saveTimer);
    saveTimer = void 0;
    if (!dirty) {
      return;
    }
    dirty = false;
    try {
      const tmp = `${filePath}.tmp`;
      await import_node_fs.default.promises.writeFile(tmp, serialize());
      await import_node_fs.default.promises.rename(tmp, filePath);
    } catch (e) {
      dirty = true;
      logger.error(`Failed to save the matches to ${filePath}: ${e.message}`);
    }
  };
  const scheduleSave = () => {
    dirty = true;
    if (!saveTimer) {
      saveTimer = setTimeout(saveNow, SAVE_DELAY_MS);
      if (saveTimer.unref) {
        saveTimer.unref();
      }
    }
  };
  const flushSync = () => {
    clearTimeout(saveTimer);
    saveTimer = void 0;
    if (!dirty) {
      return;
    }
    try {
      import_node_fs.default.writeFileSync(filePath, serialize());
      dirty = false;
    } catch (e) {
      logger.error(`Failed to save the matches to ${filePath}: ${e.message}`);
    }
  };
  load();
  return {
    get: (itemPath) => matches.get(itemPath),
    get size() {
      return matches.size;
    },
    all: () => [...matches.values()],
    getUnreadable: () => unreadable,
    setUnreadable: (list) => {
      unreadable = list;
      scheduleSave();
    },
    // Returns true if the path was not known before
    upsert: (record) => {
      const existing = matches.get(record.path);
      matches.set(record.path, {
        ...record,
        firstSeen: existing ? existing.firstSeen : (/* @__PURE__ */ new Date()).toISOString()
      });
      scheduleSave();
      return !existing;
    },
    remove: (itemPath) => {
      if (matches.delete(itemPath)) {
        scheduleSave();
        return true;
      }
      return false;
    },
    // Replaces everything (result of a complete scan)
    replaceAll: (records) => {
      const previous = matches;
      matches = /* @__PURE__ */ new Map();
      for (const record of records) {
        const existing = previous.get(record.path);
        matches.set(record.path, {
          ...record,
          // Keep what we already know about the item
          action: existing ? existing.action : record.action,
          firstSeen: existing ? existing.firstSeen : (/* @__PURE__ */ new Date()).toISOString()
        });
      }
      scheduleSave();
    },
    saveNow,
    flushSync
  };
};

// src/report.js
var pad = (n) => String(n).padStart(2, "0");
var formatTime = (date) => {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
};
var groupByCategory = (records, categoryOrder) => {
  const groups = new Map(categoryOrder.map((category) => [category, []]));
  for (const record of records) {
    for (const category of record.categories) {
      if (!groups.has(category)) {
        groups.set(category, []);
      }
      groups.get(category).push(record);
    }
  }
  for (const [category, items] of groups) {
    if (!items.length) {
      groups.delete(category);
    } else {
      items.sort((a, b) => a.path.localeCompare(b.path));
    }
  }
  return groups;
};
var countTypes = (records) => {
  const directories = records.filter((r) => r.type === "directory").length;
  return { files: records.length - directories, directories };
};
var formatReport = ({ records, categoryOrder, adlFile, ruleCount, unreadable = [], now = /* @__PURE__ */ new Date() }) => {
  const { files, directories } = countTypes(records);
  const lines = [
    "ADL checker: matched items",
    `Created:     ${formatTime(now)}`,
    `ADL file:    ${adlFile}`,
    `Rules used:  ${ruleCount}`,
    `Matches:     ${records.length} (${files} files, ${directories} directories)`,
    `Unreadable:  ${unreadable.length} (items the last scan could not read)`,
    ""
  ];
  for (const [category, items] of groupByCategory(records, categoryOrder)) {
    lines.push(category);
    for (const record of items) {
      lines.push(record.action === ACTION_REJECTED ? `${record.path}    [not shared]` : record.path);
    }
    lines.push("");
  }
  if (!records.length) {
    lines.push("No matches.");
    lines.push("");
  }
  if (unreadable.length) {
    lines.push("Could not be read during the last scan (these were not checked)");
    for (const item of [...unreadable].sort((a, b) => a.path.localeCompare(b.path))) {
      lines.push(`${item.path}    [${item.reason}]`);
    }
    lines.push("");
  }
  return lines.join("\n");
};
var formatSummary = ({ records, categoryOrder, adlFile, ruleCount, rejectEnabled, unreadable = [] }) => {
  const { files, directories } = countTypes(records);
  const rejected = records.filter((r) => r.action === ACTION_REJECTED).length;
  const lines = [
    "",
    `ADL checker: ${records.length} matched items (${files} files, ${directories} directories), ${rejected} kept out of share`,
    `Rules: ${ruleCount} from ${adlFile}`,
    `Do not share matched items: ${rejectEnabled ? "on" : "off"}`
  ];
  for (const [category, items] of groupByCategory(records, categoryOrder)) {
    lines.push(`  ${category}: ${items.length}`);
  }
  if (unreadable.length) {
    lines.push(`Items the last scan could not read: ${unreadable.length}`);
  }
  if (records.length || unreadable.length) {
    lines.push("Use /adl matches to open the complete list");
  }
  return lines.join("\n");
};

// src/scanner.js
var import_node_fs2 = __toESM(require("node:fs"), 1);
var import_node_path = __toESM(require("node:path"), 1);
var CHUNK_SIZE = 64;
var statSize = async (filePath) => {
  try {
    const stat2 = await import_node_fs2.default.promises.stat(filePath);
    return stat2.isFile() ? stat2.size : -1;
  } catch (e) {
    return -1;
  }
};
var yieldToEventLoop = () => new Promise((resolve2) => setImmediate(resolve2));
var scanPaths = async ({ roots, rules, isIgnored, isExcluded, shouldStop, getSize = statSize, onError }) => {
  const stats = { files: 0, directories: 0, excluded: 0, errors: 0 };
  const results = [];
  const visitedLinks = /* @__PURE__ */ new Set();
  const pending2 = [...roots];
  const processEntry = async (directory, entry) => {
    const fullPath = import_node_path.default.join(directory, entry.name);
    let isDirectory = entry.isDirectory();
    let isFile = entry.isFile();
    if (entry.isSymbolicLink()) {
      try {
        const target = await import_node_fs2.default.promises.stat(fullPath);
        isDirectory = target.isDirectory();
        isFile = target.isFile();
        if (isDirectory) {
          const real = await import_node_fs2.default.promises.realpath(fullPath);
          if (visitedLinks.has(real)) {
            return;
          }
          visitedLinks.add(real);
        }
      } catch (e) {
        stats.errors++;
        if (onError) {
          onError(fullPath, e);
        }
        return;
      }
    }
    if (!isDirectory && !isFile) {
      return;
    }
    if (isExcluded && await isExcluded(fullPath)) {
      stats.excluded++;
      return;
    }
    const item = toItem(fullPath, isDirectory);
    if (isDirectory) {
      stats.directories++;
      pending2.push(fullPath);
    } else {
      stats.files++;
    }
    if (isIgnored && isIgnored(item.path)) {
      return;
    }
    const matched = await matchItem(rules, item, getSize);
    if (matched.length) {
      results.push({ item, rules: matched });
    }
  };
  while (pending2.length) {
    if (shouldStop && shouldStop()) {
      break;
    }
    const directory = pending2.pop();
    let entries;
    try {
      entries = await import_node_fs2.default.promises.readdir(directory, { withFileTypes: true });
    } catch (e) {
      stats.errors++;
      if (onError) {
        onError(directory, e);
      }
      continue;
    }
    for (let start = 0; start < entries.length; start += CHUNK_SIZE) {
      const chunk = entries.slice(start, start + CHUNK_SIZE);
      await Promise.all(chunk.map((entry) => processEntry(directory, entry).catch((e) => {
        stats.errors++;
        if (onError) {
          onError(import_node_path.default.join(directory, entry.name), e);
        }
      })));
      await yieldToEventLoop();
    }
  }
  return { results, stats };
};

// src/sharecache.js
var import_node_fs3 = __toESM(require("node:fs"), 1);
var import_node_path2 = __toESM(require("node:path"), 1);
var SUPPORTED_VERSION = "3";
var ENTITIES = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'" };
var decode = (value) => {
  if (value.indexOf("&") === -1) {
    return value;
  }
  return value.replace(/&(#x[0-9a-fA-F]+|#[0-9]+|[a-zA-Z]+);/g, (match, entity) => {
    if (entity[0] === "#") {
      const code = entity[1] === "x" ? parseInt(entity.slice(2), 16) : parseInt(entity.slice(1), 10);
      try {
        return String.fromCodePoint(code);
      } catch (e) {
        return match;
      }
    }
    return ENTITIES[entity] !== void 0 ? ENTITIES[entity] : match;
  });
};
var ATTRIBUTE = /([A-Za-z_:][\w:.-]*)\s*=\s*(?:"([^"]*)"|'([^']*)')/g;
var parseTag = (tag) => {
  const closing = tag[0] === "/";
  const selfClosing = tag[tag.length - 1] === "/";
  const body = closing ? tag.slice(1) : selfClosing ? tag.slice(0, -1) : tag;
  const nameMatch = /^[^\s/>]+/.exec(body);
  const name = nameMatch ? nameMatch[0] : "";
  const attributes = {};
  if (!closing) {
    ATTRIBUTE.lastIndex = 0;
    let match;
    while ((match = ATTRIBUTE.exec(body)) !== null) {
      attributes[match[1]] = decode(match[2] !== void 0 ? match[2] : match[3]);
    }
  }
  return { name, attributes, closing, selfClosing };
};
var findTagEnd = (buffer, start) => {
  let quote = null;
  for (let i = start + 1; i < buffer.length; i++) {
    const c = buffer[i];
    if (quote) {
      if (c === quote) {
        quote = null;
      }
    } else if (c === '"' || c === "'") {
      quote = c;
    } else if (c === ">") {
      return i;
    }
  }
  return -1;
};
var readHeader = async (file) => {
  const handle = await import_node_fs3.default.promises.open(file, "r");
  try {
    const buffer = Buffer.alloc(4096);
    const { bytesRead } = await handle.read(buffer, 0, buffer.length, 0);
    const text = buffer.toString("utf8", 0, bytesRead);
    const match = /<Share\b([^>]*)>/.exec(text);
    if (!match) {
      return null;
    }
    const { attributes } = parseTag(`Share ${match[1]}`);
    if (!attributes.Path) {
      return null;
    }
    return { path: attributes.Path, version: attributes.Version };
  } finally {
    await handle.close();
  }
};
var normalizeRoot = (rootPath) => {
  const stripped = rootPath.replace(/[\\/]+$/, "");
  return process.platform === "win32" ? stripped.toLowerCase() : stripped;
};
var findCaches = async (directory) => {
  const caches = /* @__PURE__ */ new Map();
  let names;
  try {
    names = await import_node_fs3.default.promises.readdir(directory);
  } catch (e) {
    return caches;
  }
  for (const name of names.filter((n) => n.toLowerCase().endsWith(".xml"))) {
    const file = import_node_path2.default.join(directory, name);
    try {
      const header = await readHeader(file);
      if (header) {
        const stat2 = await import_node_fs3.default.promises.stat(file);
        caches.set(normalizeRoot(header.path), { file, version: header.version, mtimeMs: stat2.mtimeMs, rootPath: header.path });
      }
    } catch (e) {
    }
  }
  return caches;
};
var readItems = async (file, onBatch, { batchSize = 2e3, highWaterMark = 1 << 20 } = {}) => {
  const stream = import_node_fs3.default.createReadStream(file, { encoding: "utf8", highWaterMark });
  let buffer = "";
  let root = null;
  let separator = "/";
  const stack = [];
  let batch = [];
  let stopped = false;
  const flush = async () => {
    if (!batch.length) {
      return;
    }
    const items = batch;
    batch = [];
    if (await onBatch(items) === false) {
      stopped = true;
    }
  };
  const joinPath = (parent, name) => parent + (/[\\/]$/.test(parent) ? "" : separator) + name;
  const handleTag = (tag) => {
    const { name, attributes, closing, selfClosing } = parseTag(tag);
    if (name === "Share" && !closing) {
      root = attributes.Path;
      separator = root.indexOf("\\") !== -1 && root.indexOf("/") === -1 ? "\\" : "/";
      stack.push(root);
      return;
    }
    if (!root) {
      return;
    }
    if (name === "Directory") {
      if (closing) {
        if (stack.length > 1) {
          stack.pop();
        }
        return;
      }
      if (attributes.Name === void 0) {
        return;
      }
      const dirPath = joinPath(stack[stack.length - 1], attributes.Name);
      batch.push({ path: dirPath, isDirectory: true });
      if (!selfClosing) {
        stack.push(dirPath);
      }
    } else if (name === "File" && !closing && attributes.Name !== void 0) {
      batch.push({ path: joinPath(stack[stack.length - 1], attributes.Name), isDirectory: false });
    }
  };
  try {
    for await (const chunk of stream) {
      buffer += chunk;
      let position = 0;
      for (; ; ) {
        const start = buffer.indexOf("<", position);
        if (start === -1) {
          position = buffer.length;
          break;
        }
        if (buffer.startsWith("<!--", start)) {
          const end2 = buffer.indexOf("-->", start + 4);
          if (end2 === -1) {
            position = start;
            break;
          }
          position = end2 + 3;
          continue;
        }
        const end = findTagEnd(buffer, start);
        if (end === -1) {
          position = start;
          break;
        }
        const tag = buffer.slice(start + 1, end);
        position = end + 1;
        if (tag[0] !== "?" && tag[0] !== "!") {
          handleTag(tag);
        }
        if (batch.length >= batchSize) {
          await flush();
          if (stopped) {
            return;
          }
        }
      }
      buffer = buffer.slice(position);
    }
    await flush();
  } finally {
    stream.destroy();
  }
};

// src/util.js
var withDeadline = (promise, ms, fallback) => {
  let timer;
  const deadline = new Promise((resolve2) => {
    timer = setTimeout(() => resolve2(fallback), ms);
  });
  return Promise.race([promise, deadline]).finally(() => clearTimeout(timer));
};
var mapLimit = async (items, limit, fn) => {
  const results = new Array(items.length);
  let next = 0;
  const worker = async () => {
    while (next < items.length) {
      const index = next++;
      results[index] = await fn(items[index], index);
    }
  };
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
};

// src/updater.js
var import_node_crypto = __toESM(require("node:crypto"), 1);
var import_node_fs4 = __toESM(require("node:fs"), 1);
var import_node_path3 = __toESM(require("node:path"), 1);
var MAX_BYTES = 10 * 1024 * 1024;
var TIMEOUT_MS = 2e4;
var sha256 = (buffer) => import_node_crypto.default.createHash("sha256").update(buffer).digest("hex");
var toDownloadUrl = (input) => {
  let url;
  try {
    url = new URL(String(input).trim());
  } catch (e) {
    throw new Error("the address is not a valid URL");
  }
  if (url.protocol !== "https:" && url.protocol !== "http:") {
    throw new Error("the address must start with https:// or http://");
  }
  if (url.hostname === "github.com" || url.hostname === "www.github.com") {
    const parts = url.pathname.split("/").filter(Boolean);
    if (parts.length >= 5 && (parts[2] === "blob" || parts[2] === "raw")) {
      const [owner, repo, , ref, ...rest] = parts;
      return `https://raw.githubusercontent.com/${owner}/${repo}/${ref}/${rest.join("/")}`;
    }
  }
  return url.toString();
};
var download = async (url, { fetchFn = globalThis.fetch, timeoutMs = TIMEOUT_MS, maxBytes = MAX_BYTES } = {}) => {
  if (typeof fetchFn !== "function") {
    throw new Error("this Node.js version has no fetch support");
  }
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetchFn(url, { signal: controller.signal, redirect: "follow" });
    if (!response.ok) {
      throw new Error(`download failed (HTTP ${response.status})`);
    }
    const length = Number(response.headers.get("content-length"));
    if (length > maxBytes) {
      throw new Error(`the file is too big (${length} bytes)`);
    }
    const bytes = Buffer.from(await response.arrayBuffer());
    if (bytes.length > maxBytes) {
      throw new Error(`the file is too big (${bytes.length} bytes)`);
    }
    return bytes;
  } catch (e) {
    if (e.name === "AbortError") {
      throw new Error(`the download did not finish in ${timeoutMs / 1e3} seconds`);
    }
    throw e;
  } finally {
    clearTimeout(timer);
  }
};
var validate = (bytes) => {
  const text = bytes.toString("utf8").replace(/^﻿/, "");
  let parsed;
  try {
    parsed = parseAdl(text);
  } catch (e) {
    throw new Error(`the downloaded file is not a valid ADLSearch.xml (${e.message})`);
  }
  if (!parsed.rules.length) {
    throw new Error("the downloaded file has no usable rules (active regular expression entries)");
  }
  return parsed.rules.length;
};
var readLocal = async (file) => {
  try {
    return await import_node_fs4.default.promises.readFile(file);
  } catch (e) {
    if (e.code === "ENOENT") {
      return null;
    }
    throw e;
  }
};
var check = async (url, localFile, options) => {
  const remote = await download(url, options);
  const ruleCount = validate(remote);
  const local = await readLocal(localFile);
  return {
    upToDate: !!local && sha256(local) === sha256(remote),
    remote,
    ruleCount,
    hadLocalFile: !!local
  };
};
var install = async (remote, localFile) => {
  const local = await readLocal(localFile);
  let backup;
  if (local) {
    backup = `${localFile}.bak`;
    await import_node_fs4.default.promises.writeFile(backup, local);
  }
  const tmp = `${localFile}.tmp`;
  await import_node_fs4.default.promises.writeFile(tmp, remote);
  try {
    await import_node_fs4.default.promises.rename(tmp, localFile);
  } catch (e) {
    await import_node_fs4.default.promises.writeFile(localFile, remote);
    await import_node_fs4.default.promises.rm(tmp, { force: true });
  }
  return { backup: backup ? import_node_path3.default.basename(backup) : void 0 };
};

// src/main.js
var CONFIG_VERSION = 1;
var SCAN_ACCESS = "settings_edit";
var WARNING_FLUSH_DELAY_MS = 1e4;
var HOOK_FILE = "new_share_file_validation_hook";
var HOOK_NEW_DIRECTORY = "new_share_directory_validation_hook";
var hasScanAccess = (permissions) => {
  return permissions.indexOf("admin") !== -1 || permissions.indexOf(SCAN_ACCESS) !== -1;
};
var HOOK_DEADLINE_MS = 3e3;
var SLOW_HOOK_MS = 500;
var STATS_INTERVAL_MS = 1e4;
var UPDATE_CHECK_DELAY_MS = 5e3;
var TIMED_OUT = Symbol("timed out");
var NOT_IN_SHARE = Symbol("not in share");
var SHARE_CHECK_CONCURRENCY = 8;
var SHARE_RECHECK_DELAYS_MS = [3e3, 15e3, 6e4];
var READ_ERRORS = {
  EACCES: "permission denied",
  EPERM: "operation not permitted",
  ENOENT: "does not exist (broken link, or removed during the scan)",
  ELOOP: "too many levels of symbolic links",
  ENOTDIR: "not a directory",
  EIO: "input/output error",
  ENAMETOOLONG: "path too long"
};
var describeReadError = (e) => {
  const meaning = READ_ERRORS[e.code];
  return meaning ? `${e.code}: ${meaning}` : e.code ? `${e.code}: ${e.message}` : e.message;
};
var getSettingDefinitions = () => [
  {
    key: "check_share_changes",
    title: "Check files and directories when they are added to share",
    type: "boolean",
    default_value: true,
    help: "Matches are reported as warnings in the event log: new directories when they are added, and the files of a directory after it has been hashed."
  },
  {
    key: "reject_matched",
    title: "Do not share matched files and directories",
    type: "boolean",
    default_value: false,
    help: "Matched files and new directories are left out from the share. Files and directories that are already in the share are not removed."
  },
  {
    key: "respect_ignorelist",
    title: "Ignore the items listed in ADLSearch.ignorelist",
    type: "boolean",
    default_value: true,
    help: "Ignored items are neither reported nor left out from share. The file is read from the same directory as ADLSearch.xml."
  },
  {
    key: "update_url",
    title: "URL to ADLSearch.xml",
    type: "string",
    default_value: "",
    optional: true,
    help: "Optional link to an ADLSearch.xml. It is checked at startup, install it with /adl update."
  },
  {
    key: "max_warnings",
    title: "Maximum number of individual warnings in a row",
    type: "number",
    default_value: 100,
    help: "The rest is summarized in a single warning to avoid flooding the event log. Use /adl matches to see all matches."
  }
];
function main_default(socket, extension) {
  const logger = socket.logger;
  const cleanups = [];
  let stopped = false;
  extension.onStart = async (sessionInfo) => {
    const settings = (0, import_airdcpp_extension_settings.default)(socket, {
      extensionName: extension.name,
      configFile: extension.configPath + "config.json",
      configVersion: CONFIG_VERSION,
      definitions: getSettingDefinitions()
    });
    await settings.load();
    const postEvent = (text, severity) => {
      return socket.post("events", { text, severity }).catch((e) => {
        logger.error(`Failed to post an event log message: ${e.message}`);
      });
    };
    let warningsInRow = 0;
    let suppressedWarnings = 0;
    let warningTimer;
    const flushWarnings = () => {
      clearTimeout(warningTimer);
      warningTimer = void 0;
      if (suppressedWarnings > 0) {
        postEvent(`ADL checker: ${suppressedWarnings} more matches were not logged individually (use /adl matches to see all of them)`, "warning");
      }
      warningsInRow = 0;
      suppressedWarnings = 0;
    };
    const warn = (text) => {
      const max = Math.max(0, Number(settings.getValue("max_warnings")) || 0);
      if (warningsInRow < max) {
        warningsInRow++;
        postEvent(text, "warning");
      } else {
        suppressedWarnings++;
      }
      clearTimeout(warningTimer);
      warningTimer = setTimeout(flushWarnings, WARNING_FLUSH_DELAY_MS);
    };
    const store = createStore(extension.configPath + "matches.json", logger);
    const adl = {
      file: void 0,
      rules: [],
      categoryOrder: [],
      ignoreList: /* @__PURE__ */ new Set()
    };
    const resolveAdlFile = () => import_node_path4.default.resolve(extension.configPath, "..", "..", "..", "ADLSearch.xml");
    const loadIgnoreList = async (adlFile) => {
      const ignoreFile = import_node_path4.default.join(import_node_path4.default.dirname(adlFile), "ADLSearch.ignorelist");
      try {
        adl.ignoreList = parseIgnoreList(await import_node_fs5.default.promises.readFile(ignoreFile, "utf8"));
      } catch (e) {
        adl.ignoreList = /* @__PURE__ */ new Set();
        if (e.code !== "ENOENT") {
          logger.error(`Failed to read ${ignoreFile}: ${e.message}`);
        }
      }
    };
    const loadAdl = async (announce) => {
      const file = resolveAdlFile();
      try {
        const parsed = parseAdl(await import_node_fs5.default.promises.readFile(file, "utf8"));
        adl.file = file;
        adl.rules = parsed.rules;
        adl.categoryOrder = [...new Set(parsed.rules.map((rule) => rule.label))];
        await loadIgnoreList(file);
        logger.info(`Loaded ${parsed.rules.length} ADL rules from ${file} (${parsed.stats.inactive} inactive entries, ${parsed.skipped.length} skipped, ${adl.ignoreList.size} ignored paths)`);
        if (announce) {
          postEvent(`ADL checker: loaded ${parsed.rules.length} rules from ${file}`, "info");
        }
        for (const skipped of parsed.skipped) {
          const text = `ADL checker: entry "${skipped.label}" was skipped: ${skipped.reason} (${skipped.pattern.slice(0, 80)})`;
          logger.error(text);
          postEvent(text, "warning");
        }
        return true;
      } catch (e) {
        const text = adl.rules.length ? `ADL checker: failed to reload ${file}, the previously loaded ${adl.rules.length} rules are still in use: ${e.message}` : `ADL checker: can't load ${file}: ${e.message}. Place ADLSearch.xml in the application settings directory.`;
        logger.error(text);
        postEvent(text, adl.rules.length ? "warning" : "error");
        return false;
      }
    };
    let updating = false;
    const runUpdate = async (mode, automatic = false) => {
      const configuredUrl = String(settings.getValue("update_url") || "").trim();
      if (!configuredUrl) {
        if (!automatic) {
          postEvent("ADL checker: set the URL to ADLSearch.xml in the extension settings first", "info");
        }
        return;
      }
      if (updating) {
        postEvent("ADL checker: an update check is already running", "info");
        return;
      }
      updating = true;
      try {
        const url = toDownloadUrl(configuredUrl);
        const file = resolveAdlFile();
        const result = await check(url, file);
        if (result.upToDate) {
          if (!automatic) {
            postEvent(`ADL checker: ADLSearch.xml is up to date (${result.ruleCount} rules, ${url})`, "info");
          }
          return;
        }
        if (mode === "check") {
          postEvent(`ADL checker: a different ADLSearch.xml (${result.ruleCount} rules) is available at ${url}. Use /adl update or ADL Update in the extension menu to install it (the current file is kept as ADLSearch.xml.bak).`, "warning");
          return;
        }
        const { backup } = await install(result.remote, file);
        postEvent(`ADL checker: ADLSearch.xml was updated from ${url} (${result.ruleCount} rules)${backup ? `, the previous file was saved as ${backup}` : ""}. Use /adl scan to check the share with the new rules`, "info");
        await loadAdl(true);
      } catch (e) {
        logger.error(`Update failed: ${e.stack || e.message}`);
        postEvent(`ADL checker: ${mode === "check" ? "update check" : "update"} failed: ${e.message}`, automatic ? "warning" : "error");
      } finally {
        updating = false;
      }
    };
    const isIgnored = (itemPath) => {
      return settings.getValue("respect_ignorelist") && adl.ignoreList.has(stripTrailingSeparators(itemPath));
    };
    const describe = (record, rejected) => {
      return `ADL match (${record.type}): ${record.path} [${record.categories.join(" | ")}]${rejected ? " - not shared" : ""}`;
    };
    let loggedPayload = {};
    const canCheckShare = sessionInfo.system_info.api_feature_level >= 6;
    let shareCheckProblemReported = false;
    const isInShare = async (itemPath, isDirectory) => {
      if (!canCheckShare) {
        if (!shareCheckProblemReported) {
          shareCheckProblemReported = true;
          const text = "ADL checker: this version of the application can't tell which files are in the share (API feature level 6 is needed), so files on disk that are not shared can also be reported";
          logger.warn(text);
          postEvent(text, "warning");
        }
        return true;
      }
      try {
        const target = isDirectory && !/[\\/]$/.test(itemPath) ? itemPath + import_node_path4.default.sep : itemPath;
        const response = await socket.post("share/check_path_shared", { path: target });
        return !!response.is_shared;
      } catch (e) {
        if (!shareCheckProblemReported) {
          shareCheckProblemReported = true;
          const text = `ADL checker: failed to check if ${itemPath} is in the share (${e.message}), items not in the share can be reported`;
          logger.error(text);
          postEvent(text, "warning");
        }
        return true;
      }
    };
    const evaluateItem = async (itemPath, isDirectory, getSize, canReject) => {
      const item = toItem(itemPath, isDirectory);
      if (isIgnored(item.path)) {
        store.remove(item.path);
        return null;
      }
      const matched = await matchItem(adl.rules, item, getSize);
      if (!matched.length) {
        store.remove(item.path);
        return null;
      }
      if (!canReject && !await isInShare(item.path, isDirectory)) {
        store.remove(item.path);
        return NOT_IN_SHARE;
      }
      const categories = categoriesOf(matched);
      const reject = canReject && !!settings.getValue("reject_matched");
      const existing = store.get(item.path);
      const record = {
        path: item.path,
        type: isDirectory ? "directory" : "file",
        categories,
        // An item that was left out of the share stays marked as such when it's seen again by a later check
        action: reject || !canReject && existing && existing.action === ACTION_REJECTED ? ACTION_REJECTED : ACTION_WARNED
      };
      const isNew = store.upsert(record);
      if (isNew) {
        warn(describe(record, record.action === ACTION_REJECTED));
      }
      return reject ? `ADL match: ${categories.join(", ")}` : null;
    };
    const checkHookItem = async (hookName, data, isDirectory) => {
      if (!settings.getValue("check_share_changes") || !adl.rules.length) {
        return null;
      }
      const itemPath = data && data.path;
      if (typeof itemPath !== "string" || !itemPath.length) {
        if (!loggedPayload[`${hookName}-invalid`]) {
          loggedPayload[`${hookName}-invalid`] = true;
          logger.error(`Unexpected ${hookName} data without a path (properties: ${Object.keys(data || {}).join(", ")}), the item was accepted`);
        }
        return null;
      }
      if (!loggedPayload[hookName]) {
        loggedPayload[hookName] = true;
        logger.info(`${hookName} data properties: ${Object.keys(data).join(", ")}`);
      }
      const getSize = Number.isFinite(data.size) && data.size >= 0 ? async () => data.size : statSize;
      return evaluateItem(itemPath, isDirectory, getSize, true);
    };
    const hookStats = { received: 0, answered: 0, inFlight: 0, slowest: 0, reported: 0 };
    let lastTick = Date.now();
    const statsTimer = setInterval(() => {
      const now = Date.now();
      const lag = now - lastTick - STATS_INTERVAL_MS;
      lastTick = now;
      if (lag > 2e3) {
        logger.warn(`The extension was blocked for about ${lag} ms`);
      }
      if (hookStats.received !== hookStats.reported || hookStats.inFlight > 0) {
        logger.info(`File checks: ${hookStats.received - hookStats.reported} new, ${hookStats.received} in total, ${hookStats.inFlight} waiting, slowest answer ${hookStats.slowest} ms, pending API requests ${socket.getPendingRequestCount()}`);
        hookStats.reported = hookStats.received;
        hookStats.slowest = 0;
      }
    }, STATS_INTERVAL_MS);
    statsTimer.unref();
    cleanups.push(() => clearInterval(statsTimer));
    const createHookHandler = (hookName, isDirectory) => {
      return async (data, accept, reject) => {
        const started = Date.now();
        hookStats.received++;
        hookStats.inFlight++;
        let rejectMessage = null;
        try {
          const result = await withDeadline(checkHookItem(hookName, data, isDirectory), HOOK_DEADLINE_MS, TIMED_OUT);
          if (result === TIMED_OUT) {
            logger.error(`${hookName} took more than ${HOOK_DEADLINE_MS} ms for ${data && data.path}, the item was accepted`);
          } else {
            rejectMessage = result;
          }
        } catch (e) {
          logger.error(`${hookName} failed for ${JSON.stringify(data)}: ${e.stack || e.message}`);
        }
        const elapsed = Date.now() - started;
        hookStats.inFlight--;
        hookStats.answered++;
        hookStats.slowest = Math.max(hookStats.slowest, elapsed);
        if (elapsed > SLOW_HOOK_MS) {
          logger.warn(`${hookName} was slow (${elapsed} ms): ${data && data.path}`);
        }
        if (rejectMessage) {
          reject("adl_match", rejectMessage);
        } else {
          accept();
        }
      };
    };
    let scanning = false;
    let stopScan = false;
    const runScan = async () => {
      if (scanning) {
        postEvent("ADL checker: a scan is already running", "info");
        return;
      }
      if (!adl.rules.length) {
        postEvent("ADL checker: no ADL rules are loaded, the scan was not started", "error");
        return;
      }
      scanning = true;
      stopScan = false;
      try {
        postEvent("ADL checker: scanning the share...", "info");
        const startTime = Date.now();
        const groupedRoots = await socket.get("share/grouped_root_paths");
        const roots = [...new Set(groupedRoots.reduce((reduced, group) => reduced.concat(group.paths), []))];
        const cacheDirectory = import_node_path4.default.join(import_node_path4.default.resolve(extension.configPath, "..", "..", ".."), "ShareCache");
        const caches = await findCaches(cacheDirectory);
        const stats = { files: 0, directories: 0, errors: 0 };
        const cacheMatches = [];
        const diskRoots = [];
        const cacheTimes = [];
        let cacheRoots = 0;
        let missingCount = 0;
        for (const root of roots) {
          const cache = caches.get(normalizeRoot(root));
          if (!cache) {
            logger.info(`Scan: no share cache found for ${root}, scanning the disk`);
            diskRoots.push(root);
            continue;
          }
          if (cache.version !== SUPPORTED_VERSION) {
            logger.warn(`Scan: the share cache of ${root} has version ${cache.version} (supported: ${SUPPORTED_VERSION}), scanning the disk`);
            diskRoots.push(root);
            continue;
          }
          try {
            const found = [];
            const counts = { files: 0, directories: 0, missing: 0 };
            await readItems(cache.file, async (items) => {
              for (const entry of items) {
                if (entry.isDirectory) {
                  counts.directories++;
                } else {
                  counts.files++;
                }
                const item = toItem(entry.path, entry.isDirectory);
                if (isIgnored(item.path)) {
                  continue;
                }
                const matched = await matchItem(adl.rules, item, statSize);
                if (matched.length) {
                  if (!entry.isDirectory && await statSize(item.path) < 0) {
                    counts.missing++;
                    continue;
                  }
                  found.push({ item, rules: matched });
                }
              }
              await new Promise((resolve2) => setImmediate(resolve2));
              return !stopScan;
            });
            stats.files += counts.files;
            stats.directories += counts.directories;
            missingCount += counts.missing;
            cacheMatches.push(...found);
            cacheTimes.push(cache.mtimeMs);
            cacheRoots++;
          } catch (e) {
            logger.error(`Scan: failed to read the share cache ${cache.file}: ${e.stack || e.message}`);
            diskRoots.push(root);
          }
        }
        if (stopScan) {
          return;
        }
        const unreadable = [];
        let results = [];
        if (diskRoots.length) {
          const disk = await scanPaths({
            roots: diskRoots,
            rules: adl.rules,
            isIgnored,
            shouldStop: () => stopScan,
            onError: (itemPath, e) => {
              logger.verbose(`Scan: failed to read ${itemPath}: ${e.message}`);
              unreadable.push({ path: itemPath, reason: describeReadError(e) });
            }
          });
          results = disk.results;
          stats.files += disk.stats.files;
          stats.directories += disk.stats.directories;
        }
        if (stopScan) {
          return;
        }
        const shared = await mapLimit(results, SHARE_CHECK_CONCURRENCY, ({ item }) => isInShare(item.path, item.isDirectory));
        const diskSharedMatches = results.filter((_, index) => shared[index]);
        const notSharedCount = results.length - diskSharedMatches.length;
        const sharedMatches = cacheMatches.concat(diskSharedMatches);
        const unreadableShared = await mapLimit(unreadable, SHARE_CHECK_CONCURRENCY, async (u) => await isInShare(u.path, true) || await isInShare(u.path, false));
        const unreadableInShare = unreadable.filter((_, index) => unreadableShared[index]);
        unreadable.length = 0;
        unreadable.push(...unreadableInShare);
        stats.errors = unreadable.length;
        const records = sharedMatches.map(({ item, rules }) => ({
          path: item.path,
          type: item.isDirectory ? "directory" : "file",
          categories: categoriesOf(rules),
          action: ACTION_SCAN
        }));
        const newRecords = records.filter((record) => !store.get(record.path));
        store.replaceAll(records);
        store.setUnreadable(unreadable);
        newRecords.forEach((record) => warn(describe(record, false)));
        const seconds = ((Date.now() - startTime) / 1e3).toFixed(1);
        let text = `ADL checker: scan completed in ${seconds} s: ${stats.files} files and ${stats.directories} directories checked, ${records.length} matches in the share (${newRecords.length} new)`;
        if (notSharedCount) {
          text += `, ${notSharedCount} matching items on disk skipped because they are not in the share`;
        }
        if (stats.errors) {
          text += `, ${stats.errors} items could not be read (listed in /adl matches)`;
        }
        if (cacheRoots) {
          const fmt = (ms) => new Date(ms).toISOString().slice(0, 16).replace("T", " ");
          const oldest = Math.min(...cacheTimes);
          const newest = Math.max(...cacheTimes);
          text += `. Read from the share cache of ${cacheRoots} share roots (saved ${oldest === newest ? fmt(oldest) : `${fmt(oldest)} - ${fmt(newest)}`} UTC; recent changes may not be included yet)`;
        }
        if (missingCount) {
          text += `. ${missingCount} matching files in the share cache were skipped because they are not on the disk`;
        }
        if (diskRoots.length) {
          text += `. ${diskRoots.length} share roots had no usable share cache and were read from the disk`;
        }
        flushWarnings();
        await postEvent(text, records.length ? "warning" : "info");
      } catch (e) {
        logger.error(`Scan failed: ${e.stack || e.message}`);
        postEvent(`ADL checker: scan failed: ${e.message}`, "error");
      } finally {
        scanning = false;
      }
    };
    const reportData = () => ({
      records: store.all(),
      categoryOrder: adl.categoryOrder,
      adlFile: adl.file || resolveAdlFile(),
      ruleCount: adl.rules.length,
      unreadable: store.getUnreadable()
    });
    const openInViewer = async (text, name) => {
      if (sessionInfo.system_info.api_feature_level < 6) {
        throw new Error("The application version is too old for opening the list");
      }
      if (typeof globalThis.fetch !== "function") {
        throw new Error("This Node.js version has no fetch support");
      }
      const baseUrl = (extension.server.secure ? "https://" : "http://") + extension.server.address;
      const upload = await globalThis.fetch(`${baseUrl}/temp`, {
        method: "POST",
        headers: {
          "Authorization": `${sessionInfo.token_type} ${sessionInfo.auth_token}`
        },
        body: text
      });
      const tempFileId = upload.headers.get("location");
      if (!upload.ok || !tempFileId) {
        throw new Error(`Upload failed (HTTP ${upload.status})`);
      }
      const tempShare = await socket.post("share/temp_shares", {
        file_id: tempFileId,
        cid: sessionInfo.system_info.cid,
        name
      });
      try {
        await socket.post(`view_files/${tempShare.item.tth}`, { text: true });
      } finally {
        await socket.delete(`share/temp_shares/${tempShare.item.id}`);
      }
    };
    const showMatches = async () => {
      const text = formatReport(reportData());
      const name = `ADL matches ${(/* @__PURE__ */ new Date()).toLocaleString()}`;
      try {
        await openInViewer(text, name);
      } catch (e) {
        const file = import_node_path4.default.join(extension.logPath, "adl-matches.txt");
        try {
          await import_node_fs5.default.promises.writeFile(file, text);
          postEvent(`ADL checker: ${store.size} matches saved to ${file} (could not open the list in the application: ${e.message})`, "info");
        } catch (writeError) {
          postEvent(`ADL checker: failed to show the matches: ${e.message}; failed to save them to ${file}: ${writeError.message}`, "error");
        }
      }
    };
    const subscriberInfo = {
      id: extension.name,
      name: "ADL checker"
    };
    const hookRemovers = {};
    let hookSync = Promise.resolve();
    const syncHooks = () => {
      hookSync = hookSync.then(async () => {
        if (stopped) {
          return;
        }
        const check2 = !!settings.getValue("check_share_changes");
        const wanted = {
          [HOOK_NEW_DIRECTORY]: check2,
          [HOOK_FILE]: check2 && !!settings.getValue("reject_matched")
        };
        for (const hookName of Object.keys(wanted)) {
          if (wanted[hookName] && !hookRemovers[hookName]) {
            try {
              hookRemovers[hookName] = await socket.addHook("share", hookName, createHookHandler(hookName, hookName === HOOK_NEW_DIRECTORY), subscriberInfo);
              logger.info(`Hook ${hookName} added`);
            } catch (e) {
              const text = `ADL checker: failed to add the hook ${hookName}: ${e.message}`;
              logger.error(text);
              postEvent(text, "error");
            }
          } else if (!wanted[hookName] && hookRemovers[hookName]) {
            const remove = hookRemovers[hookName];
            delete hookRemovers[hookName];
            try {
              await remove();
              logger.info(`Hook ${hookName} removed`);
            } catch (e) {
              logger.error(`Failed to remove the hook ${hookName}: ${e.message}`);
            }
          }
        }
      }).catch((e) => logger.error(`Failed to update the hooks: ${e.stack || e.message}`));
      return hookSync;
    };
    await loadAdl(true);
    await syncHooks();
    const startupCheck = setTimeout(() => {
      if (!stopped) {
        runUpdate("check", true);
      }
    }, UPDATE_CHECK_DELAY_MS);
    startupCheck.unref();
    cleanups.push(() => clearTimeout(startupCheck));
    const hashedQueue = /* @__PURE__ */ new Set();
    let hashedRunning = false;
    const recheckTimers = /* @__PURE__ */ new Set();
    cleanups.push(() => recheckTimers.forEach((timer) => clearTimeout(timer)));
    const scheduleRecheck = (items, attempt) => {
      if (!items.length || attempt >= SHARE_RECHECK_DELAYS_MS.length) {
        return;
      }
      const timer = setTimeout(async () => {
        recheckTimers.delete(timer);
        if (stopped || !settings.getValue("check_share_changes")) {
          return;
        }
        const missing = [];
        for (const item of items) {
          try {
            const result = await evaluateItem(item.path, item.isDirectory, statSize, false);
            if (result === NOT_IN_SHARE) {
              missing.push(item);
            }
          } catch (e) {
            logger.verbose(`Recheck failed for ${item.path}: ${e.message}`);
          }
        }
        scheduleRecheck(missing, attempt + 1);
      }, SHARE_RECHECK_DELAYS_MS[attempt]);
      timer.unref();
      recheckTimers.add(timer);
    };
    const checkHashedDirectory = async (directory) => {
      const notShared = [];
      if (await evaluateItem(directory, true, statSize, false) === NOT_IN_SHARE) {
        notShared.push({ path: directory, isDirectory: true });
      }
      let entries;
      try {
        entries = await import_node_fs5.default.promises.readdir(directory, { withFileTypes: true });
      } catch (e) {
        logger.verbose(`Hashed directory check: failed to read ${directory}: ${e.message}`);
        return;
      }
      for (const entry of entries) {
        if (entry.isFile()) {
          const filePath = import_node_path4.default.join(directory, entry.name);
          if (await evaluateItem(filePath, false, statSize, false) === NOT_IN_SHARE) {
            notShared.push({ path: filePath, isDirectory: false });
          }
        }
      }
      scheduleRecheck(notShared, 0);
    };
    const drainHashedQueue = async () => {
      if (hashedRunning) {
        return;
      }
      hashedRunning = true;
      try {
        while (hashedQueue.size && !stopped) {
          const [directory] = hashedQueue;
          hashedQueue.delete(directory);
          try {
            await checkHashedDirectory(directory);
          } catch (e) {
            logger.error(`Hashed directory check failed for ${directory}: ${e.stack || e.message}`);
          }
        }
      } finally {
        hashedRunning = false;
      }
    };
    const onDirectoryHashed = (data) => {
      if (!settings.getValue("check_share_changes") || !adl.rules.length) {
        return;
      }
      const directory = data && data.path;
      if (typeof directory !== "string" || !directory.length) {
        if (!loggedPayload["hashed-invalid"]) {
          loggedPayload["hashed-invalid"] = true;
          logger.error(`Unexpected hasher_directory_finished data without a path (properties: ${Object.keys(data || {}).join(", ")})`);
        }
        return;
      }
      if (!loggedPayload["hashed"]) {
        loggedPayload["hashed"] = true;
        logger.info(`hasher_directory_finished data properties: ${Object.keys(data).join(", ")}`);
      }
      hashedQueue.add(stripTrailingSeparators(directory));
      drainHashedQueue();
    };
    try {
      await socket.addListener("hash", "hasher_directory_finished", onDirectoryHashed);
    } catch (e) {
      const text = `ADL checker: failed to listen to hashed directories: ${e.message}`;
      logger.error(text);
      postEvent(text, "error");
    }
    const checkChatCommand = (data) => {
      const { command, args, permissions } = data;
      if (!hasScanAccess(permissions)) {
        return null;
      }
      if (command === "help") {
        return {
          severity: "info",
          type: "private",
          text: `

  ADL checker commands

  /adl scan - Check the whole share
  /adl matches - Open the list of all matched files and directories
  /adl list - Show the number of matches for each category
  /adl reload - Reload ADLSearch.xml
  /adl check - Check if the ADLSearch.xml at the address differs from the one in use
  /adl update - Download ADLSearch.xml from the address and reload it
`
        };
      }
      if (command !== "adl" || !args.length) {
        return null;
      }
      switch (args[0]) {
        case "scan": {
          runScan();
          return { severity: "info", type: "system", text: "Scan started, see the event log for the results" };
        }
        case "matches": {
          showMatches();
          return { severity: "info", type: "system", text: `Opening the list of ${store.size} matches...` };
        }
        case "list": {
          return {
            severity: "info",
            type: "private",
            text: formatSummary({ ...reportData(), rejectEnabled: !!settings.getValue("reject_matched") })
          };
        }
        case "check": {
          runUpdate("check");
          return { severity: "info", type: "system", text: "Checking for a new ADLSearch.xml, see the event log for the result" };
        }
        case "update": {
          runUpdate("install");
          return { severity: "info", type: "system", text: "Downloading ADLSearch.xml, see the event log for the result" };
        }
        case "reload": {
          loadAdl(true);
          return { severity: "info", type: "system", text: "Reloading ADLSearch.xml, see the event log for the result" };
        }
        default:
          return null;
      }
    };
    const onChatCommand = (type, data, entityId) => {
      const statusMessageData = checkChatCommand(data);
      if (statusMessageData) {
        socket.post(`${type}/${entityId}/status_message`, {
          ...statusMessageData,
          owner: data.owner
        }).catch((e) => logger.error(`Failed to send the command response: ${e.message}`));
      }
    };
    await socket.addListener("hubs", "hub_text_command", onChatCommand.bind(null, "hubs"));
    await socket.addListener("private_chat", "private_chat_text_command", onChatCommand.bind(null, "private_chat"));
    try {
      addContextMenuItems(
        socket,
        [
          {
            id: "adl_scan",
            title: "Check the share against the ADL rules",
            icon: { semantic: "yellow broom" },
            access: SCAN_ACCESS,
            onClick: async () => {
              await runScan();
            },
            filter: ({ selectedIds }) => Array.isArray(selectedIds) && selectedIds.indexOf(extension.name) !== -1
          },
          {
            id: "adl_reload",
            title: "ADL Reload",
            icon: { semantic: "yellow refresh" },
            access: SCAN_ACCESS,
            onClick: async () => {
              await loadAdl(true);
            },
            filter: ({ selectedIds }) => Array.isArray(selectedIds) && selectedIds.indexOf(extension.name) !== -1
          },
          {
            id: "adl_check_update",
            title: "ADL Check for update",
            icon: { semantic: "yellow search" },
            access: SCAN_ACCESS,
            onClick: async () => {
              await runUpdate("check");
            },
            filter: ({ selectedIds }) => Array.isArray(selectedIds) && selectedIds.indexOf(extension.name) !== -1
          },
          {
            id: "adl_update",
            title: "ADL Update",
            icon: { semantic: "yellow download" },
            access: SCAN_ACCESS,
            onClick: async () => {
              await runUpdate("install");
            },
            filter: ({ selectedIds }) => Array.isArray(selectedIds) && selectedIds.indexOf(extension.name) !== -1
          },
          {
            id: "adl_matches",
            title: "Show ADL matches",
            icon: { semantic: "yellow list" },
            access: SCAN_ACCESS,
            onClick: async () => {
              await showMatches();
            },
            filter: ({ selectedIds }) => Array.isArray(selectedIds) && selectedIds.indexOf(extension.name) !== -1
          }
        ],
        "extension",
        subscriberInfo
      );
    } catch (e) {
      logger.error(`Failed to add the menu items: ${e.message}`);
    }
    settings.onValuesUpdated = (updated) => {
      if (Object.prototype.hasOwnProperty.call(updated, "check_share_changes") || Object.prototype.hasOwnProperty.call(updated, "reject_matched")) {
        syncHooks();
      }
    };
    cleanups.push(() => {
      stopScan = true;
      flushWarnings();
      store.flushSync();
    });
  };
  extension.onStop = () => {
    if (stopped) {
      return;
    }
    stopped = true;
    cleanups.forEach((cleanup) => {
      try {
        cleanup();
      } catch (e) {
        logger.error(`Cleanup failed: ${e.message}`);
      }
    });
  };
}

// src/index.js
ManagedExtension(main_default, {
  ignoredListenerEvents: ["new_share_file_validation_hook", "new_share_directory_validation_hook"],
  ignoredRequestPaths: /^(sessions\/activity|share\/hooks\/(new_share_file_validation_hook|new_share_directory_validation_hook)\/\d+\/resolve)$/
});
process.on("unhandledRejection", (reason) => {
  console.error("Unhandled error:", reason && reason.stack ? reason.stack : reason);
});
