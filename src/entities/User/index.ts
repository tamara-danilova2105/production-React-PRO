export {
    getUserAuthData,
} from './modal/selectors/getUserAuthData/getUserAuthData';

export {
    getUserInited,
} from './modal/selectors/getUserInited/getUserInited';

export { isUserAdmin, isUserManager, getUserRoles } from './modal/selectors/roleSelectors';

export {
    userActions,
    userReducer,
} from './modal/slice/userSlice';

export { UserRole } from './modal/consts/consts';

export type {
    UserSchema,
    User,
} from './modal/types/user';
