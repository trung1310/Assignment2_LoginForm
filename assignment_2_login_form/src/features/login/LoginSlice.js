import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { LOGIN_API } from "../../api";
import { LOCAL_STORAGE_LOGIN_STATUS_KEY } from "../../constants/index";

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        loginStatus: {
            status: Boolean(localStorage.getItem(LOCAL_STORAGE_LOGIN_STATUS_KEY)),
        },
        loginResponse: undefined,
    },
    reducers: {
        loginSuccess: (state, { payload }) => {
            state.loginStatus = {
                status: true,
            };
            state.loginResponse = {
                response: payload,
            };
        },
        loginFail: (state, { payload }) => {
            state.loginStatus = {
                status: false,
            };
            state.loginResponse = {
                response: payload,
            };
        },
    },
});

const { actions, reducer } = loginSlice;

export const { loginSuccess, loginFail } = actions;
export default reducer;

export const login = (email, password) => async (dispatch) => {
    try {
        const res = await axios.post(LOGIN_API, {
            email,
            password,
        });
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFail(error?.response?.data));
    }
};

// first commit
