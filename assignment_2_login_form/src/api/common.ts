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


