import { createSlice } from "@reduxjs/toolkit";
import { APP_PROGRESS_STATUS } from '../../constants/index';
import REDUCER_NAMES from "../reducerNames";
import { RegisterResponseType } from "../../api/types";


export const registerSlice = createSlice({
  name: REDUCER_NAMES.REGISTER,
  initialState: {
    registerResponse: {
      status: APP_PROGRESS_STATUS.IDLE,
      response: {} as RegisterResponseType,
    },
  },
  reducers: {
    registerAttempt: (state) => {
      state.registerResponse.status = APP_PROGRESS_STATUS.STARTING;
    },
    registerSuccess: (
      state,
      { payload }: { payload: RegisterResponseType }
    ) => {
      state.registerResponse = {
        status: APP_PROGRESS_STATUS.SUCCESS,
        response: payload,
      };
    },
    registerFail: (state, { payload }) => {
      state.registerResponse = {
        status: APP_PROGRESS_STATUS.FAILED,
        response: payload,
      }
    },
  },
});

const { actions, reducer } = registerSlice;
export const { registerAttempt, registerSuccess, registerFail } = actions;
export default reducer;
