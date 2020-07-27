import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { LOGIN_API } from "../../api";
import { LOCAL_STORAGE_LOGIN_STATUS_KEY } from "../../constants/index";

export const profileSlice = createSlice({
    name: "profile",
    initialState: {
        profileStatus: {
            status: false,
        },
        profileResponse: undefined,
    },
    reducers: {
        
    }
});