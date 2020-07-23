import React from 'react';
import './App.scss';
import Profile from './containers/Profile/Profile';
import LoginForm from './containers/LoginForm/LoginForm';
import RegisterForm from './containers/RegisterForm/RegisterForm';

function App() {
  return (
    <div className='App'>
        {/* <LoginForm /> */}
        {/* <Profile /> */}
        <RegisterForm />
    </div>
  );
}

export default App;
