import { Dispatch } from '@reduxjs/toolkit';
import { registerAccount } from '../../api';
import {
    registerAttempt,
    registerSuccess,
    registerFail,
} from './RegisterSlice';

const registerAccountAsync = (
    email: string,
    password: string,
    name: string,
    phone: string,
    successCallback = () => { },
    failureCallback = (msg: string) => { }
) => async (dispatch: Dispatch) => {
    dispatch(registerAttempt());
    try {
        const res = await registerAccount(email, password, name, phone);
        if (res.data.status === 1) {
            dispatch(registerSuccess(res.data));
            successCallback();
        } else {
            dispatch(registerFail(res.data));
            failureCallback(res.data.msg);
        }
    } catch (error) {
        let msg = '';
        if (error.response && error.response.data) {
            msg = error.response.data.msg;
            dispatch(registerFail(error.response.data));
        } else {
            msg = error.message;
            dispatch(registerFail(error.message));
        }
        failureCallback(msg);
    }
};

export { registerAccountAsync };
