import { createSlice } from '@reduxjs/toolkit';
import { APP_PROGRESS_STATUS } from '../../constants';
import { UpdatedProfileResponseType } from '../../api/types';
import REDUCER_NAMES from '../reducerNames';
import { Profile } from './types';

const profileSlice = createSlice({
    name: REDUCER_NAMES.PROFILE,
    initialState: {
        updateProfileResponse: {
            status: APP_PROGRESS_STATUS.IDLE,
            response: {} as { msg: string; status: number; data: Profile },
        },
        updatePasswordResponse: {
            status: APP_PROGRESS_STATUS.IDLE,
            response: {},
        },
    },
    reducers: {
        updateProfileAttempt: (state, { payload }: { payload: string }) => {
            state.updateProfileResponse.status = payload;
        },
        updateProfile: (
            state,
            { payload }: { payload: UpdatedProfileResponseType }
        ) => {
            state.updateProfileResponse.response = payload;
        },
        updateProfileFail: (
            state,
            { payload }: { payload: UpdatedProfileResponseType }
        ) => {
            state.updateProfileResponse.response.msg = payload.msg;
            state.updateProfileResponse.response.status = payload.status;
        },
        updatePasswordAttempt: (state, action) => {
            state.updatePasswordResponse.status = action.payload;
        },
        updatePasswordSuccess: (state, action) => {
            state.updatePasswordResponse.status = action.payload;
        },
        updatePasswordFail: (state, action) => {
            state.updatePasswordResponse.status = action.payload;
        }
    }
});

const { actions, reducer } = profileSlice;

export const {
    updateProfile,
    updateProfileFail,
    updateProfileAttempt,
    updatePasswordAttempt,
    updatePasswordSuccess,
    updatePasswordFail
} = actions;
export default reducer;