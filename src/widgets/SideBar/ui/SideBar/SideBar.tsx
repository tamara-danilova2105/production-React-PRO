import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { ThemeSwitchers } from 'widgets/ThemeSwitcher';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import cls from './SideBar.module.scss';
import { SideBarItemsList } from '../../module/item';
import { SideBarItem } from '../SideBarItem/SideBarItem';

interface SideBarProps {
    className?: string;
}

export const SideBar = ({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const { t } = useTranslation();

    const onToggle = () => (
        setCollapsed((prev) => !prev)
    );

    return (
        <div
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
                {collapsed ? '>' : '<' }
            </Button>

            <div>
                <div className={cls.items}>
                    {SideBarItemsList.map((item) => (
                        <SideBarItem 
                            key={item.path}
                            item={item}
                            collapsed={collapsed}
                        />
                    ))}
                </div>
            </div>

            <div className={cls.swithers}>
                <ThemeSwitchers />
                <LangSwitcher
                    short={collapsed}
                    className={cls.lang}
                />
            </div>
        </div>
    );
};
