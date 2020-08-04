const BASE_API = "http://api.terralogic.ngrok.io";
const LOGIN_API = "http://api.terralogic.ngrok.io/api/login";
const REGISTER_API = "http://api.terralogic.ngrok.io/api/register";
const UPDATE_PROFILE_API = "http://api.terralogic.ngrok.io/api/update";
const UPDATE_AVATAR_API = "http://api.terralogic.ngrok.io/api/upload";
const UPDATE_PASSWORD_API = "http://api.terralogic.ngrok.io/api/changePassword";

type CommonResponseType = {
    status: number;
    msg: string;
}

type LoginResponseType = CommonResponseType & {
    token: string;
}

type RegisterResponseType = CommonResponseType & {
    data: {
        email: string;
        name: string;
        phone: string;
        id: string;
    };
};

type UpdatedProfileResponseType = CommonResponseType & {
    data: {
        email: string;
        name: string;
        phone: string;
        id: string;
        displayName: string;
        avatar: string;
    };
};

export type {
    LoginResponseType,
    RegisterResponseType,
    UpdatedProfileResponseType
};

export { LOGIN_API, REGISTER_API, UPDATE_AVATAR_API, UPDATE_PROFILE_API, UPDATE_PASSWORD_API, BASE_API };