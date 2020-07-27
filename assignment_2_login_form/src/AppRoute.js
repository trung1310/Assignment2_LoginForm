import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import { toast } from "react-toastify";
import "./App.scss";
import { LOCAL_STORAGE_LOGIN_STATUS_KEY } from "./constants/index";
import LoginForm from "./containers/LoginForm/LoginForm";
import Profile from "./containers/Profile/Profile";
import RegisterForm from "./containers/RegisterForm/RegisterForm";

import { DEFAULT_PATH, LOGIN_PATH, REGISTER_PATH } from './constants/index';

const AppRoute = () => {
    const { loginStatus, loginResponse } = useSelector((state) => state.login);

    useEffect(() => {
        if (loginStatus.status) {
            localStorage.setItem(LOCAL_STORAGE_LOGIN_STATUS_KEY, true);
        } else {
            if (loginResponse) {
                toast.error("Email or password is incorrect !");
            }
        }
    }, [loginStatus, loginResponse]);

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path={LOGIN_PATH}>
                        {loginStatus.status ? (
                            <Redirect to={DEFAULT_PATH} />
                        ) : (
                                <LoginForm />
                            )}
                    </Route>
                    <Route exact path={REGISTER_PATH}>
                        {loginStatus.status ? (
                            <Redirect to={DEFAULT_PATH} />
                        ) : (
                                <RegisterForm />
                            )}
                    </Route>
                    <Route exact path={DEFAULT_PATH}>
                        {loginStatus.status ? <Profile /> : <Redirect to={LOGIN_PATH} />}
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default AppRoute;
