import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { ThemeSwitchers } from 'widgets/ThemeSwitcher';
import { Button } from 'shared/ui/Button/Button';
import cls from './SideBar.module.scss';

interface SideBarProps {
    className?: string;
}

export const SideBar = ({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => (
        setCollapsed((prev) => !prev)
    );

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}
        >
            {/* <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
            >
                toggle
            </Button> */}
            <div className={cls.swithers}>
                <ThemeSwitchers />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
