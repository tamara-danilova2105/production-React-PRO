import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleImageBlockComponent.module.scss';

interface ThemeSwitchersProps {
    className?: string;
}

export const ThemeSwitchers = (props: ThemeSwitchersProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ThemeSwitchers, {}, [className])}>

        </div>
    );
};