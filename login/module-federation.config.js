const baseConfig = require('../module-federation.config');

module.exports = {
  ...baseConfig,
  name: 'login',
  exposes: {
    './component': 'login/src/app/remote-entry/entry.component.ts',
  },
};
