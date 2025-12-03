(function () {
  // This file can be replaced at deploy time to inject real values.
  // Defaults are safe and empty.
  window.__env = Object.assign({}, window.__env || {}, {
    NG_APP_API_BASE: '',
    NG_APP_BACKEND_URL: '',
    NG_APP_FRONTEND_URL: '',
    NG_APP_WS_URL: '',
    NG_APP_NODE_ENV: 'development',
    NG_APP_NEXT_TELEMETRY_DISABLED: 'true',
    NG_APP_ENABLE_SOURCE_MAPS: 'false',
    NG_APP_PORT: '',
    NG_APP_TRUST_PROXY: '',
    NG_APP_LOG_LEVEL: 'info',
    NG_APP_HEALTHCHECK_PATH: '/healthz',
    NG_APP_FEATURE_FLAGS: '',
    NG_APP_EXPERIMENTS_ENABLED: 'false'
  });
})();
