import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleViewSelectors } from './ArticleViewSelectors';

export default {
    title: 'entities/Article/ArticleViewSelector',
    component: ArticleViewSelectors,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleViewSelectors>;

const Template: ComponentStory<typeof ArticleViewSelectors> = (args) => <ArticleViewSelectors {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
