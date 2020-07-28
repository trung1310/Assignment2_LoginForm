import React from "react";
import { useSelector } from "react-redux";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import { toast } from "react-toastify";
import "./App.scss";
import LoginForm from "./containers/LoginForm/LoginForm";
import Profile from "./containers/Profile/Profile";
import RegisterForm from "./containers/RegisterForm/RegisterForm";
import REDUCER_NAMES from "./features/reducerNames";

import { DEFAULT_PATH, LOGIN_PATH, REGISTER_PATH } from './constants/index';

const AppRoute = () => {
    const { loginResponse } = useSelector((state) => state[REDUCER_NAMES.LOGIN]);

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path={LOGIN_PATH}>
                        {loginResponse.isLoginSuccess ? (
                            <Redirect to={DEFAULT_PATH} />
                        ) : (
                                <LoginForm />
                            )}
                    </Route>
                    <Route exact path={REGISTER_PATH}>
                        {loginResponse.isLoginSuccess ? (
                            <Redirect to={DEFAULT_PATH} />
                        ) : (
                                <RegisterForm />
                            )}
                    </Route>
                    <Route exact path={DEFAULT_PATH}>
                        {loginResponse.isLoginSuccess ? <Profile /> : <Redirect to={LOGIN_PATH} />}
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default AppRoute;
