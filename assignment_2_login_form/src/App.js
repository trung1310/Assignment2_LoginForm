import React from 'react';
import './App.scss';
import Profile from './containers/Profile/Profile';
import LoginForm from './containers/LoginForm/LoginForm';

function App() {
  return (
    <div className='App'>
        <LoginForm />
        {/* <Profile /> */}
    </div>
  );
}

export default App;
