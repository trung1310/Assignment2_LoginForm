import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/login/LoginSlice";
import registerReducer from "./features/register/RegisterSlice";

const store = configureStore({
    reducer: {
        login: loginReducer,
        register: registerReducer
    },
});

export default store;
