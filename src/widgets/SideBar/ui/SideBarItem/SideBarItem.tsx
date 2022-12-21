import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './SideBarItem.module.scss';
import { useTranslation } from 'react-i18next';
import { SideBarItemType } from '../../module/item';

interface SideBarItemProps {
    item?: SideBarItemType;
    collapsed: boolean;
}

export const SideBarItem = ({ item, collapsed }: SideBarItemProps) => {

    const { t } = useTranslation();

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={cls.item}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
};