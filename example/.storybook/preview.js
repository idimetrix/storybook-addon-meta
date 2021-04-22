import { addDecorator } from '@storybook/vue';
import StoryRouter from 'storybook-vue-router';

import '../src/setup';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

addDecorator(StoryRouter());
