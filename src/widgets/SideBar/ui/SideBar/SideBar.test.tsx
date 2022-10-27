import { fireEvent, screen } from '@testing-library/react';
import { SideBar } from './SideBar';
import { componentRender } from 'shared/lib/tests/ComponentRender/ComponentRender';

describe('Sidebar', () => {
    test('with only first param', () => {
        componentRender(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        componentRender(<SideBar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
