import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const RuoterDecorator = (story: () => Story) => (
    <BrowserRouter>
        {story()}
    </BrowserRouter>
);
