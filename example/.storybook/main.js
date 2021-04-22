module.exports = {
  logLevel: 'debug',
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/stories.@(js|jsx|ts|tsx|vue)',
    '../src/**/*.storybook.@(js|jsx|ts|tsx|vue)',
    '../src/**/storybook.@(js|jsx|ts|tsx|vue)',
    '../src/**/*.stories.@(js|jsx|ts|tsx|vue)',
  ],
  addons: [
    {
      name: '@storybook/preset-scss',
      options: {
        sassLoaderOptions: {
          additionalData: '',
        },
      },
    },
    '@storybook/addon-events',
    '@storybook/addon-actions',
    '@storybook/addon-storysource',
    '@storybook/addon-docs',
    '@storybook/preset-typescript',
    '@storybook/addon-links',
    '@storybook/addon-controls',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    '@storybook/addon-backgrounds',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-essentials',
      options: {
        docs: false,
      },
    },
  ],
};
