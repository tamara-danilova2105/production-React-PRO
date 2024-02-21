import { memo, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { ThemeSwitchers } from 'widgets/ThemeSwitcher';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import cls from './SideBar.module.scss';
import { SidebarItem } from '../SideBarItem/SideBarItem';
import { getSidebarItems } from '../../module/selectors/getSidebarItems';
import { VStack } from 'shared/ui/Stack/VStack/VStack';

interface SideBarProps {
    className?: string;
}

export const SideBar = memo(({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sideBarItemsList = useSelector(getSidebarItems);

    const onToggle = () => (
        setCollapsed((prev) => !prev)
    );

    const itemsList = useMemo(() => sideBarItemsList.map((item) => (
        <SidebarItem
            item={item}
            collapsed={collapsed}
            key={item.path}
        />
    )), [collapsed, sideBarItemsList]);

    return (
        <menu
            data-testid="sidebar"
            className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapsedBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>

            <VStack gap={'8'} className={cls.items}>
                {itemsList}
            </VStack>

            <div className={cls.swithers}>
                <ThemeSwitchers />
                <LangSwitcher
                    short={collapsed}
                    className={cls.lang}
                />
            </div>
        </menu>
    );
});
