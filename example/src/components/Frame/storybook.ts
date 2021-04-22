import { Args, ArgsStoryFn, StoryContext } from '@storybook/addons';

import { Meta } from '../../../../src';

import { Frame } from './';

export default {
	argTypes: { default: { control: 'text' } },
	component: Frame,
	title: Meta.componentPath(Frame),
};

const Template: ArgsStoryFn = (args: Args, { argTypes }: StoryContext) => ({
	components: { Frame },
	props: Object.keys(argTypes),
	template: `
    <Frame v-bind="$props"><div style="color: #142533;">{{$props.default}}</div></Frame>
    `,
});

export const Default: ArgsStoryFn = Object.assign(Template.bind({}), { args: { default: 'Frame' } });
