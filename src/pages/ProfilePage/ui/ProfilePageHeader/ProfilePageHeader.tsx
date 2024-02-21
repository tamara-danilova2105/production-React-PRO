import {
    getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from 'entities/Profile';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack/HStack/HStack';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack max justify={'between'} className={classNames('', {}, [className])}>
            <Text title={t('профиль')} />
            {canEdit && (
                <div>
                    {
                        readonly
                            ? (
                                <Button
                                    theme={ThemeButton.OUTLINE}
                                    onClick={onEdit}
                                >
                                    {t('редактировать')}
                                </Button>
                            )
                            : (
                                <HStack gap={'8'}>
                                    <Button
                                        theme={ThemeButton.OUTLINE_RED}
                                        onClick={onCancelEdit}
                                    >
                                        {t('отменить')}
                                    </Button>
                                    <Button
                                        theme={ThemeButton.OUTLINE}
                                        onClick={onSave}
                                    >
                                        {t('сохранить')}
                                    </Button>
                                </HStack>
                            )
                    }
                </div>
            )}
        </HStack>
    );
};
