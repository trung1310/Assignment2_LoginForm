import { Dispatch } from '@reduxjs/toolkit';
import { registerAccount } from '../../api';
import {
    registerAttempt,
    registerSuccess,
    registerFail,
} from "./RegisterSlice";

const registerAccountAsync = (
    email: string,
    password: string,
    name: string,
    phone: string
) => async (dispatch: Dispatch) => {
    dispatch(registerAttempt());
    try {
        const res = await registerAccount(email, password, name, phone);
        if (res.data.status === 1) {
            dispatch(registerSuccess(res.data));
        } else {
            dispatch(registerFail(res.data));
        }
    } catch (error) {
        if (error.response && error.response.data) {
            dispatch(registerFail(error.response.data));
        } else {
            dispatch(registerFail(error.message));
        }
    }
};

export { registerAccountAsync };
