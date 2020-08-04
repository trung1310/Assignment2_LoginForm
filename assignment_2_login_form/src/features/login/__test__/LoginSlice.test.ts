import { LoginResponseType } from "../../../api/types";
import reducer, { loginSuccess, loginFail } from "../LoginSlice";

describe("login slice", () => {
    it("should properly set the state when log in is made", () => {
        const expectedAction: LoginResponseType = {
            status: 1,
            msg: "login success",
            token: "@token_string",
        };
        const result = reducer(undefined, loginSuccess(expectedAction));
        expect(result.loginResponse.response).toBe(expectedAction);
        expect(result.loginResponse.isLoginSuccess).toBeTruthy();
    });

    it("should properly set the state when log in failed", () => {
        const expectedAction: LoginResponseType = {
            status: 0,
            msg: "login failed",
            token: "@token_string",
        };
        const result = reducer(undefined, loginFail(expectedAction));
        expect(result.loginResponse.response).toBe(expectedAction);
        expect(result.loginResponse.isLoginSuccess).toBeFalsy();
    });
});
