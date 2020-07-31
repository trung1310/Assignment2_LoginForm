import jwt from "jwt-decode";

import { loginSystem } from '../../api/common';
import { storeUserDataWithDecodedJWT } from "../../utils/LocalStorage/LocalStorage";
import { loginAttempt, loginSuccess, loginFail } from './LoginSlice';
import { updateProfile } from '../profile/ProfileSlice';
import { Profile } from './../profile/types';

const loginAsync = (email: string, password: string) => async (
    dispatch: (arg0: { payload: any; type: string }) => void
) => {
    dispatch(loginAttempt());
    try {
        const res = await loginSystem(email, password);
        if (res.data) {
            const { token } = res.data;
            const decodedProfile: Profile = jwt(token);
            storeUserDataWithDecodedJWT(res.data.token, decodedProfile);
            dispatch(
                updateProfile({
                    data: decodedProfile,
                    msg: "Decode profile success.",
                    status: 1,
                })
            );
            dispatch(loginSuccess(res.data));
        }
    } catch (error) {
        if (error.response && error.response.data) {
            dispatch(loginFail(error.response.data));
        }
    }
};

export { loginAsync };

