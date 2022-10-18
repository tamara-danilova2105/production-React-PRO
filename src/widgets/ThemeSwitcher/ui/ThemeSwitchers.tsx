import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitchers.module.scss'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'


interface ThemeSwitchersProps {
    className?: string;
}

export const ThemeSwitchers = ({className}: ThemeSwitchersProps) => {

    const { theme, toggleTheme} = useTheme()

    return(
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitchers, {}, [className])} 
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon/>}
        </Button>
    )
}