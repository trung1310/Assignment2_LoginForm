import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { LOGIN_API } from "../../api";
import { 
    LOCAL_STORAGE_LOGIN_STATUS_KEY,
    LOCAL_STORAGE_ACCESS_TOKEN_KEY,
    APP_PROGRESS_STATUS,
} from "../../constants/index";
import REDUCER_NAMES from "../reducerNames";

export const loginSlice = createSlice({
    name: REDUCER_NAMES.LOGIN,
    initialState: {
    loginResponse: {
      status: APP_PROGRESS_STATUS.IDLE,
      isLoginSuccess: Boolean(
        localStorage.getItem(LOCAL_STORAGE_LOGIN_STATUS_KEY)
      ),
      response: undefined,
    },
    },
    reducers: {
        loginAttempt: (state) => {
            state.loginResponse.status = APP_PROGRESS_STATUS.STARTING;
        },
        loginSuccess: (state, { payload }) => {
            state.loginResponse = {
            status: APP_PROGRESS_STATUS.SUCCESS,
            isLoginSuccess: true,
            response: payload,
            };
        },
        loginFail: (state, { payload }) => {
            state.loginResponse = {
            status: APP_PROGRESS_STATUS.FAILED,
            isLoginSuccess: false,
            response: payload,
            };
        },
        clearLoginState: (state, { payload }) => {
            state.loginResponse = {
                status: APP_PROGRESS_STATUS.IDLE,
                isLoginSuccess: false,
                response: undefined,
            };
        }
    },
});

const { actions, reducer } = loginSlice;

export const { loginSuccess, loginFail, loginAttempt, clearLoginState } = actions;
export default reducer;

export const login = (email, password) => async (dispatch) => {
    dispatch(loginAttempt());
    try {
        const res = await axios.post(LOGIN_API, {
            email,
            password,
        });
        localStorage.setItem(LOCAL_STORAGE_LOGIN_STATUS_KEY, true);
        localStorage.setItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY, res.data.token);
        dispatch(loginSuccess(res.data));
    } catch (error) {
        // dispatch(loginFail(error?.response?.data));
        if (error.response && error.response.data) {
            dispatch(loginFail(error.response.data));
          } else {
            dispatch(loginFail(error.message));
          }
    }
};

