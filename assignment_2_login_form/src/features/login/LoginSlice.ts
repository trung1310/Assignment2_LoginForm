import { createSlice } from '@reduxjs/toolkit';
import { APP_PROGRESS_STATUS } from '../../constants/index';
import REDUCER_NAMES from '../reducerNames';
import { LoginResponseType } from '../../api/types'

const loginSlice = createSlice({
    name: REDUCER_NAMES.LOGIN,
    initialState: {
        loginResponse: {
            status: APP_PROGRESS_STATUS.IDLE,
            isLoginSuccess: false,
            response: {} as LoginResponseType,
        },
    },
    reducers: {
        loginAttempt: (state) => {
            state.loginResponse = {
                status: APP_PROGRESS_STATUS.STARTING,
                isLoginSuccess: false,
                response: {} as LoginResponseType,
            };
        },
        loginSuccess: (state, { payload }: { payload: LoginResponseType }) => {
            state.loginResponse = {
                status: APP_PROGRESS_STATUS.SUCCESS,
                isLoginSuccess: true,
                response: payload,
            };
        },
        loginFail: (state, { payload }: { payload: LoginResponseType }) => {
            state.loginResponse = {
                status: APP_PROGRESS_STATUS.FAILED,
                isLoginSuccess: false,
                response: payload,
            };
        }
    },
});

const { actions, reducer } = loginSlice;
export default reducer;
export const { loginSuccess, loginFail, loginAttempt } = actions;

