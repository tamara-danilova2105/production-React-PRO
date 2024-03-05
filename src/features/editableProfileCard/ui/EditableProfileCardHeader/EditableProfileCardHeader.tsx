import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { HStack } from 'shared/ui/Stack/HStack/HStack';
import { Text } from 'shared/ui/Text/Text';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getProfileReadonly } from 'features/editableProfileCard/model/selectors/getProfileReadonly/getProfileReadonly';
import { getUserAuthData } from 'entities/User';
import { getProfileData } from 'features/editableProfileCard/model/selectors/getProfileData/getProfileData';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { profileActions } from 'features/editableProfileCard/model/slice/profileSlice';
import { updateProfileData } from 'features/editableProfileCard/model/services/updateProfileData/updateProfileData';

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = memo((props: EditableProfileCardHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();

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
});