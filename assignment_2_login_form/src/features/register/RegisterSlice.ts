import { createSlice, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { REGISTER_API } from "../../api";
import { 
    APP_PROGRESS_STATUS,
    LOCAL_STORAGE_REGISTER_PROFILE_INFO,
} from '../../constants/index';
import REDUCER_NAMES from "../reducerNames";

export interface IRegisterData {
    email: string;
    name: string;
    phone: string;
    id: string;
  }
  
  export interface IRegisterResponse {
    status: number;
    msg: string;
    data?: IRegisterData;
  }
  
  export const registerSlice = createSlice({
    name: REDUCER_NAMES.REGISTER,
    initialState: {
    registerResponse: {
      status: APP_PROGRESS_STATUS.IDLE,
      response: {
        status: 0,
        msg: "",
        data: JSON.parse(
          localStorage.getItem(LOCAL_STORAGE_REGISTER_PROFILE_INFO) || "{}"),
            },
        },
    },
    reducers: {
        registerAttempt: (state) => {
            state.registerResponse.status = APP_PROGRESS_STATUS.STARTING;
        },
        registerSuccess: (state, { payload }) => {
        state.registerResponse = {
            status: APP_PROGRESS_STATUS.SUCCESS,
            response: payload,
        };
        },
        registerFail: (state, { payload }) => {
        state.registerResponse = {
            status: APP_PROGRESS_STATUS.FAILED,
            response: payload,
        };
        },
    },
});

const { actions, reducer } = registerSlice;

export const { registerAttempt, registerSuccess, registerFail } = actions;
export default reducer;

export const register = (
  email: string,
  password: string,
  name: string,
  phone: string
) => async (dispatch: Dispatch) => {
  dispatch(registerAttempt());
  try {
    const res = await axios.post<IRegisterResponse>(REGISTER_API, {
      email,
      password,
      name,
      phone,
    });
    if (res.data.status === 0) {
      dispatch(registerFail(res.data));
    } else if (res.data.status === 1) {
      localStorage.setItem(
        LOCAL_STORAGE_REGISTER_PROFILE_INFO,
        JSON.stringify(res.data.data)
      );
      dispatch(registerSuccess(res.data));
    }
  } catch (error) {
    if (error.response && error.response.data) {
      dispatch(registerFail(error.response.data));
    } else {
      dispatch(registerFail(error.message));
    }
  }
};

