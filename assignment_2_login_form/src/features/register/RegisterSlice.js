import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { REGISTER_API } from "../../api";
import { LOCAL_STORAGE_LOGIN_STATUS_KEY } from '../../constants/index'

export const registerSlice = createSlice({
    name: "register",
    initialState: {
        registerStatus: {
            status: false,
        },
        registerResponse: undefined
    },
    reducers: {
        registerSuccess: (state, {payload}) => {
            state.registerStatus = {
                status: true,
            };
            state.registerResponse = {
                response: payload,
            }
        },
        registerFail: (state, {payload}) => {
            state.registerStatus = {
                status: false,
            };
            state.registerResponse = {
                response: payload,
            };
        },
    },
});

const { actions, reducer } = registerSlice;

export const { registerSuccess, registerFail } = actions;
export default reducer;

export const register = (email, password, name, phone) => async (dispatch) => {
    try{
        const res = await axios.post(REGISTER_API, {
            email,
            password,
            name,
            phone
        });
        dispatch(registerSuccess(res.data));
    }catch (error){
        dispatch(registerFail(error?.response?.data));
    }
};

