// Minimal fake of the AirDC++ web API websocket, enough to run the bundled extension against it.
// Protocol (taken from the airdcpp-apisocket sources): requests {path, method, data, callback_id},
// responses {callback_id, code, data|error}, events {event, data, id?, completion_id?}.

import http from 'node:http';
import websocket from 'websocket';

export const startFakeServer = async ({ platform = 'linux', apiFeatureLevel = 4, permissions = ['admin'] } = {}) => {
  const uploads = [];
  const httpServer = http.createServer((req, res) => {
    // The temp file upload that the extension uses for showing the match list
    if (req.method === 'POST' && req.url === '/temp') {
      const chunks = [];
      req.on('data', c => chunks.push(c));
      req.on('end', () => {
        uploads.push({ auth: req.headers.authorization, body: Buffer.concat(chunks).toString('utf8') });
        res.writeHead(201, { Location: 'temp-file-1' });
        res.end();
      });
      return;
    }

    res.writeHead(404);
    res.end();
  });
  await new Promise(resolve => httpServer.listen(0, '127.0.0.1', resolve));
  const port = httpServer.address().port;

  const wsServer = new websocket.server({ httpServer, autoAcceptConnections: true });
  let connection;
  let nextCompletion = 1;

  const state = {
    events: [],           // {text, severity}
    hooks: {},            // name -> subscriber info
    listeners: [],        // urls
    definitions: null,
    settings: {},         // current values
    ready: false,
    completions: {},      // completion id -> {action, reject_id?, message?}
    statusMessages: [],   // {path, data}
    requests: [],         // all requests (path+method)
    authToken: null,
    shareRoots: [],
    excluded: new Set(),
    tempShares: [],
    waiters: [],
    uploads,
    viewed: [],
  };

  const notify = () => {
    state.waiters = state.waiters.filter(w => !w());
  };

  const waitFor = (predicate, timeoutMs = 8000, what = 'condition') => new Promise((resolve, reject) => {
    const check = () => {
      if (predicate()) {
        clearTimeout(timer);
        resolve();
        return true;
      }
      return false;
    };

    const timer = setTimeout(() => {
      state.waiters = state.waiters.filter(w => w !== check);
      reject(new Error(`Timed out waiting for ${what}`));
    }, timeoutMs);

    if (!check()) {
      state.waiters.push(check);
    }
  });

  const send = (obj) => connection.sendUTF(JSON.stringify(obj));

  const defaultsOf = () => Object.fromEntries((state.definitions || []).map(d => [d.key, d.default_value]));

  const handle = (req) => {
    const { path, method, data, callback_id } = req;
    state.requests.push({ path, method });
    const ok = (body, code = 200) => send({ callback_id, code, data: body });
    const fail = (message, code = 400) => send({ callback_id, code, error: { message } });

    let m;
    if (method === 'POST' && path === 'sessions/socket') {
      state.authToken = data.auth_token;
      return ok({
        session_id: 1, auth_token: data.auth_token, token_type: 'Bearer',
        user: { permissions, username: 'test', active_sessions: 1, last_login: 0 },
        system_info: {
          api_version: 1, api_feature_level: apiFeatureLevel, cid: 'AHLUODI2YZ2U7FDWMHFNJU65ERGKUN4MH7GW5LY',
          hostname: 'test', network_type: 'private', path_separator: '/', platform, language: 'en',
          client_started: 0, client_version: 'fake',
        },
        wizard_pending: false,
      });
    }

    if (method === 'POST' && path === 'settings/get') {
      return ok({ ping_timeout: 30 });
    }

    if ((m = path.match(/^extensions\/([^/]+)\/settings(\/definitions)?$/))) {
      if (m[2]) {
        state.definitions = data;
        return ok({});
      }

      if (method === 'GET') {
        return ok({ ...defaultsOf(), ...state.settings });
      }

      if (method === 'PATCH') {
        Object.assign(state.settings, data);
        ok({});
        send({ event: 'extension_settings_updated', id: m[1], data });
        return;
      }
    }

    if (method === 'POST' && (m = path.match(/^extensions\/([^/]+)\/ready$/))) {
      state.ready = true;
      ok({});
      return notify();
    }

    if (method === 'POST' && (m = path.match(/^[a-z_]+\/hooks\/([a-z_]+)$/))) {
      state.hooks[m[1]] = data;
      ok({});
      return notify();
    }

    if (method === 'POST' && (m = path.match(/^[a-z_]+\/hooks\/([a-z_]+)\/(\d+)\/(resolve|reject)$/))) {
      state.completions[m[2]] = { action: m[3], data, ...(m[3] === 'reject' ? { reject_id: data.reject_id, message: data.message } : {}) };
      ok({});
      return notify();
    }

    if (method === 'POST' && /\/listeners\//.test(path)) {
      state.listeners.push(path);
      ok({});
      return notify();
    }

    if (method === 'POST' && path === 'events') {
      state.events.push(data);
      ok({});
      return notify();
    }

    if (method === 'GET' && path === 'share/grouped_root_paths') {
      return ok([{ id: 'g', name: 'Test', paths: state.shareRoots }]);
    }

    if (method === 'POST' && path === 'share/validate_path') {
      if (state.excluded.has(data.path)) {
        return fail('excluded', 400);
      }
      return ok({});
    }

    if (method === 'POST' && (m = path.match(/^(hubs|private_chat)\/([^/]+)\/status_message$/))) {
      state.statusMessages.push({ path, data });
      ok({});
      return notify();
    }

    if (method === 'POST' && path === 'share/temp_shares') {
      state.tempShares.push(data);
      return ok({ item: { id: 1, tth: 'TTH' } });
    }

    if (method === 'POST' && (m = path.match(/^view_files\/([^/]+)$/))) {
      state.viewed.push({ tth: m[1], data });
      ok({});
      return notify();
    }

    return ok({});
  };

  wsServer.on('connect', (conn) => {
    connection = conn;
    conn.on('message', (message) => {
      if (message.type === 'utf8') {
        handle(JSON.parse(message.utf8Data));
      }
    });
  });

  return {
    port,
    state,
    waitFor,
    // Fire a hook and wait for the extension's answer
    fireHook: async (hookName, data) => {
      const id = nextCompletion++;
      send({ event: hookName, data, completion_id: id });
      await waitFor(() => state.completions[id], 8000, `hook completion ${hookName}`);
      return state.completions[id];
    },
    // Fire a hook without waiting for the answer; returns the completion id
    sendHook: (hookName, data) => {
      const id = nextCompletion++;
      send({ event: hookName, data, completion_id: id });
      return id;
    },
    sendEvent: (event, data, id) => send({ event, data, id }),
    setSettings: (values) => {
      Object.assign(state.settings, values);
      send({ event: 'extension_settings_updated', id: 'airdcpp-adl-checker', data: values });
    },
    close: async () => {
      try { connection && connection.close(); } catch (e) { /* ignore */ }
      wsServer.shutDown();
      await new Promise(resolve => httpServer.close(resolve));
    },
  };
};
