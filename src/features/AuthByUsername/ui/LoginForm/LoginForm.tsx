import { loginActions, loginReducer } from 'features/AuthByUsername/modal/slice/loginSlice';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import i18n from 'shared/config/i18n/i18n';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModeleLoader/DynamicModuleLoader';
import cls from './LoginForm.module.scss';
import { loginByUserName } from '../../modal/services/loginByUserName/loginByUserName';
import { getLoginUsername } from '../../modal/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../modal/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../modal/selectors/getLoginLoading/getLoginLoading';
import { getLoginError } from '../../modal/selectors/getLoginError/getLoginError';

export interface LoginFormProps {
    className?: string;
}

const initialReducer: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUserName = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUserName({ username, password }));
    }, [dispatch, username, password]);

    return (
        <DynamicModuleLoader
            removeAfterUnmount
            reducers={initialReducer}
        >
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Форма авторизации')} />
                {error && <Text text={i18n.t('неверный логин и пароль')} theme={TextTheme.ERROR} />}
                <Input
                    autoFocus
                    type="text"
                    className={cls.input}
                    placeholder={t('пользователь')}
                    onChange={onChangeUserName}
                    value={username}
                />
                <Input
                    type="text"
                    className={cls.input}
                    placeholder={t('пароль')}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    theme={ThemeButton.OUTLINE}
                    className={cls.loginBtn}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>

    );
});

export default LoginForm;
