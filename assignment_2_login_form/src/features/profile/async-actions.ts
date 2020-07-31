import { Dispatch } from "redux";

import { Profile } from "./types";
import { updateProfile as updateProfileAPI } from "../../api";
import { APP_PROGRESS_STATUS } from "../../constants";
import {
    retrieveUserProfile,
    storeUpdatedUserData,
} from "../../utils/LocalStorage/LocalStorage";
import { uploadAvatar } from "../../api/common";
import { BASE_API } from "../../api/types";
import {
    updateProfileAttempt,
    updateProfile,
    updateProfileFail,
} from "./ProfileSlice";

const updateProfileAsync = (updatedProfile: Profile, file?: File) => async (
    dispatch: Dispatch
) => {
    dispatch(updateProfileAttempt(APP_PROGRESS_STATUS.STARTING));
    try {
        const resUploadAvatar = file ? await uploadAvatar(file) : null;
        const updatedProfileParams = resUploadAvatar
            ? {
                ...updatedProfile,
                avatar: `${BASE_API}/${resUploadAvatar.data.data}`,
            }
            : updatedProfile;
        const res = await updateProfileAPI(updatedProfileParams);
        storeUpdatedUserData(res.data.data);
        dispatch(updateProfile(res.data));
        dispatch(updateProfileAttempt(APP_PROGRESS_STATUS.SUCCESS));
    } catch (error) {
        dispatch(updateProfileFail(error?.response?.data));
        dispatch(updateProfileAttempt(APP_PROGRESS_STATUS.FAILED));
    }
}

const loadProfileFromLocalStorage = () => async (dispatch: Dispatch) => {
    const loadFromLocalStorage = () =>
        new Promise<Profile>((resolve) => {
            const retrievedData = retrieveUserProfile();
            resolve(retrievedData);
        });
    const userProfile = await loadFromLocalStorage();
    dispatch(
        updateProfile({
            data: userProfile,
            msg: "Load profile from local storage success.",
            status: 1,
        })
    );
};

export { updateProfileAsync, loadProfileFromLocalStorage };