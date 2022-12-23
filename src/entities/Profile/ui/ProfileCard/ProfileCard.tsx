import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileLoading } from 'entities/Profile/model/selectors/getProfileLoading/getProfileLoading';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({className}: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('профиль')} />
                <Button 
                    className={cls.editBtn}
                    theme={ThemeButton.OUTLINE}
                >
                    {t('редактировать')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input 
                    value={data?.first}
                    placeholder={t('ваше имя')}
                    className={cls.input}
                />
                <Input 
                    value={data?.lastname}
                    placeholder={t('ваша фамилия')}
                    className={cls.input}
                />
            </div>
        </div>
    );
};
