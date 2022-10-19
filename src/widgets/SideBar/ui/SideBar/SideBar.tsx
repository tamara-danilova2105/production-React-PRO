import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitchers } from 'widgets/ThemeSwitcher';
import cls from './SideBar.module.scss'


interface SideBarProps {
    className?: string;
}

export const SideBar = ({className}: SideBarProps) => {

    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return(
        <div 
            className={classNames(cls.SideBar, {[cls.collapsed]: collapsed}, [className])}
        >
            <button onClick={onToggle}>toggle</button>
            <div className={cls.swithers}>
                <ThemeSwitchers/>
                {/* LangSwitcher */}
            </div>
        </div>

    )
}