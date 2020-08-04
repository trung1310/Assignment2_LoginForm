import { configureStore, combineReducers } from '@reduxjs/toolkit';
import loginReducer from './features/login/LoginSlice';
import registerReducer from './features/register/RegisterSlice';
import profileReducer from './features/profile/ProfileSlice';

const CLEAR_STORE = 'CLEAR_STORE';

const appReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    profile: profileReducer,
});

const rootReducer = (state: any, action: any) => {
    if (action.type === CLEAR_STORE) {
        localStorage.clear();
        state = undefined;
    }
    return appReducer(state, action);
};

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export { CLEAR_STORE };
export default store;
