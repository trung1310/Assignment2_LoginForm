import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/login/LoginSlice";


const store = configureStore({
    reducer: {
        login: loginReducer
    },
});

export default store;
