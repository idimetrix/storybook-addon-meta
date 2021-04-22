const path = require('path');

module.exports = async ({ config }) => {
  config.resolve.alias['~storybook'] = path.resolve(__dirname);
  config.resolve.alias['@'] = path.resolve(__dirname, '../src');

  config.module.rules.push({
    resourceQuery: /blockType=story/,
    loader: 'vue-storybook',
  });

  return config;
};
