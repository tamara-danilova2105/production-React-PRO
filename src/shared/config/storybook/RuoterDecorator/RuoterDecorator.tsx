import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const RuoterDecorator = (StoryComponents: Story) => (
    <BrowserRouter>
        <StoryComponents />
    </BrowserRouter>
);
