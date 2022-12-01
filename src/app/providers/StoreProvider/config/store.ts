import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducers } from 'entities/Counter';
import { userReducer } from 'entities/User/modal/slice/userSlice';
import { loginReducer } from 'features/AuthByUsername';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducers,
        user: userReducer,
        loginForm: loginReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
