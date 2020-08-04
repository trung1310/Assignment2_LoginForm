import { Profile } from './../../features/profile/types';

// localStorage key constants
export const LOCAL_STORAGE_LOGIN_STATUS_KEY = '@login_status';
export const LOCAL_STORAGE_ACCESS_TOKEN_KEY = '@access_token';
export const LOCAL_STORAGE_REGISTER_PROFILE_INFO = '@register_profile_info';
export const LOCAL_STORAGE_PROFILE = '@profile';

// User
const storeUserDataWithDecodedJWT = (token: string, decodedUser: Profile) => {
    localStorage.setItem(LOCAL_STORAGE_LOGIN_STATUS_KEY, 'true');
    localStorage.setItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY, token);
    localStorage.setItem(LOCAL_STORAGE_PROFILE, JSON.stringify(decodedUser));
};

const storeUpdatedUserData = (updatedUserData: Profile) => {
    localStorage.setItem(LOCAL_STORAGE_PROFILE, JSON.stringify(updatedUserData));
};

const retrieveUserProfile = () => {
    const userProfile = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_PROFILE) || '{}'
    ) as Profile;
    return userProfile;
};

// Token

const retrieveToken = (): string => {
    const token = localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY);
    if (!token) {
        throw Error('Invalid Token');
    }
    return token;
};

export {
    storeUserDataWithDecodedJWT,
    storeUpdatedUserData,
    retrieveToken,
    retrieveUserProfile,
};