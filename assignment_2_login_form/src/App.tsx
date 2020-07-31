import React from 'react';
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.scss';

import AppRoute from "./AppRoute";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <AppRoute />
      <ToastContainer />
    </Provider>
  );
}

export default App;
