// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { LOGIN_API } from "../../api";
// import { 
//     LOCAL_STORAGE_LOGIN_STATUS_KEY,
//     LOCAL_STORAGE_ACCESS_TOKEN_KEY,
//     APP_PROGRESS_STATUS,
// } from "../../constants/index";
// import REDUCER_NAMES from "../reducerNames";

// export const profileSlice = createSlice({
//     name: REDUCER_NAMES.PROFILE,
//     initialState: {
//         loginResponse: {
//             status: APP_PROGRESS_STATUS.IDLE,
//             isLoginSuccess: Boolean(
//               localStorage.getItem(LOCAL_STORAGE_LOGIN_STATUS_KEY)
//             ),
//             response: undefined,
//     },
//     reducers: {
//         loginFail: (state, { payload }) => {
//             state.loginResponse = {
//             status: APP_PROGRESS_STATUS.FAILED,
//             isLoginSuccess: false,
//             response: payload,
//             };
//         },
//     }
// }
// });