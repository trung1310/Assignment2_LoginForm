import { Profile } from './../features/profile/types';
import axios from 'axios';
import { retrieveToken } from '../utils/LocalStorage/LocalStorage';

import {
    LoginResponseType,
    RegisterResponseType,
    UpdatedProfileResponseType,
    UPDATE_PROFILE_API,
    LOGIN_API,
    REGISTER_API,
    UPDATE_AVATAR_API,
    UPDATE_PASSWORD_API
} from './types';

export async function loginSystem(email: string, password: string) {
    return await axios.post<LoginResponseType>(LOGIN_API, {
        email,
        password,
    });
}

export async function registerAccount(
    email: string,
    password: string,
    name: string,
    phone: string
) {
    return await axios.post<RegisterResponseType>(REGISTER_API, {
        email,
        password,
        name,
        phone,
    });
}

export async function updateProfile(updateData: Profile) {
    return await axios.patch<UpdatedProfileResponseType>(
        UPDATE_PROFILE_API,
        { ...updateData },
        {
            headers: {
                Authorization: `Bearer ${retrieveToken()}`,
            },
        }
    );
}

export async function uploadAvatar(file: File) {
    const fileBlob = new Blob([file], { type: 'image/png' });
    const formData = new FormData();
    formData.append('Avatar', fileBlob, file.name);
    return axios.post(UPDATE_AVATAR_API, formData, {
        headers: {
            Authorization: `Bearer ${retrieveToken()}`,
        },
    });
}

export async function updatePassword(
    newPassword: string,
    currentPassword: string
) {
    return axios.post(
        UPDATE_PASSWORD_API,
        { password: newPassword, currentPassword },
        {
            headers: {
                Authorization: `Bearer ${retrieveToken()}`,
            },
        }
    );
}


