const baseConfig = require('../module-federation.config');

module.exports = {
  ...baseConfig,
  name: 'dashboard',
  remotes: ['login'],
};
