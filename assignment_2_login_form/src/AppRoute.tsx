import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';

import './App.scss';
import LoginForm from './containers/LoginForm/LoginForm';
import Profile from './containers/Profile/Profile';
import RegisterForm from './containers/RegisterForm/RegisterForm';


import { DEFAULT_PATH, LOGIN_PATH, REGISTER_PATH } from './constants/index';
import { loadProfileFromLocalStorage } from './features/profile/async-actions';
import { RootState } from './store';
import isEmpty from 'lodash/isEmpty';

const AppRoute = () => {
    const userProfile = useSelector(
        (state: RootState) => state.profile.updateProfileResponse.response.data
    );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadProfileFromLocalStorage());
    }, [dispatch]);

    const isLoggedIn = !isEmpty(userProfile);
    return (
        <Router>
            <div className='App'>
                <Switch>
                    <Route exact path={LOGIN_PATH}>
                        {isLoggedIn ? <Redirect to={DEFAULT_PATH} /> : <LoginForm />}
                    </Route>
                    <Route exact path={REGISTER_PATH}>
                        {isLoggedIn ? <Redirect to={DEFAULT_PATH} /> : <RegisterForm />}
                    </Route>
                    <Route exact path={DEFAULT_PATH}>
                        {isLoggedIn ? <Profile /> : <Redirect to={LOGIN_PATH} />}
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default AppRoute;
