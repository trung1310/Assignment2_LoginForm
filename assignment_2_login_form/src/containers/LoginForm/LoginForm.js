import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import isEmpty from "lodash/isEmpty";

import Image from "../../assets/images/solution-experts.png";
import Brand_logo from "../../assets/images/brand-logo.svg";
import Icon1 from "../../assets/images/Suche.svg";
import Icon2 from "../../assets/images/Suche02.svg";
import Icon3 from "../../assets/images/Suche03.svg";
import "./_login.scss";

import { login } from "../../features/login/LoginSlice";

import { handleValidationForm } from "../../utils/validation";
import REDUCER_NAMES from "../../features/reducerNames";
import { APP_PROGRESS_STATUS } from "../../constants/index";
import { REGISTER_PATH } from "../../constants/index";
import Loading from "../../components/Loading/Loading";

export default function LoginForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const {loginResponse} = useSelector((state) => state[REDUCER_NAMES.LOGIN]);

  const [fields, setFields] = useState({
    email: "",
    password: "",
  });
  
  useEffect(() => {
    if(loginResponse.status === APP_PROGRESS_STATUS.SUCCESS){
      toast.success("Login Success");
    }
    if(loginResponse.status === APP_PROGRESS_STATUS.FAILED){
      if(loginResponse.response){
        toast.error("Email or password is incorrect !");
      }
    }
  }, [loginResponse]);
 
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const { email, password } = fields;
    const error = handleValidationForm(fields);

    if (!isEmpty(error)) {
      toast.warn("Please input valid email and password");
      return;
    }
    dispatch(login(email.trim(), password.trim()));
  };


  const handleClick = () => {
    history.push(REGISTER_PATH);
  }

  return (
    <div className="container-fluid login">
      <Loading 
        isLoading={loginResponse.status === APP_PROGRESS_STATUS.STARTING}
      />
      <div className="row">
        <div className="login_section col-md-5">
          <img alt="#img" className="logo_brand col-sm-6" src={Brand_logo} />
          <p className="subtitle col-sm-12">
            Start your personal photo experience
          </p>
          <h1 className="title_login col-sm-12">Login your account</h1>

          <div className='input-field col-md-10'>
          <form 
            className="form-group"
            autoComplete="on"
            onSubmit={handleFormSubmit}
          >
            <div className="form-group">
              <label className="labelEmail" htmlFor="email">
                Email
              </label>
              <div className="input_email">
                <input
                  type="email"
                  className="form-control input_form"
                  id="emailLogin"
                  placeholder="Enter your email"
                  onChange={(e) => {
                    const email = e.target.value;
                    setFields((prevState) => ({ ...prevState, email }));
                  }}
                />
                <img alt="#img" className="icon1" src={Icon1} />
              </div>
            </div>

            <div className="form-group">
              <label className="labelPassword" htmlFor="password">
                Password
              </label>
              <div className="input_password">
                <input
                  type="password"
                  className="form-control input_form"
                  id="passwordLogin"
                  placeholder="Enter your password"
                  onChange={(e) => {
                    const password = e.target.value;
                    setFields((prevState) => ({ ...prevState, password }));
                  }}
                />
                <img alt="#img" className="icon2" src={Icon2} />
                <img alt="#img" className="icon3" src={Icon3} />
              </div>
            </div>

            <div className="button_group">
              <button 
                className="btn btnRegister"
                disabled={loginResponse.status === APP_PROGRESS_STATUS.STARTING} 
                type="button" 
                onClick={handleClick}
                >
                  Register
              </button>
              <button
                className="btn btnLogin"
                disabled={loginResponse.status === APP_PROGRESS_STATUS.STARTING}
                type="button"
                onClick={handleFormSubmit}
              >
                Login
              </button>
            </div>

            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input input_checkBoxPassword"
                id="checkboxPassword"
              />
              <label className="form-check-label" htmlFor="checkboxPassword">
                Remember password
              </label>
            </div>
          </form>
          </div>
        </div>
        <div className='col-md-1'></div>
        <img alt="#img" className="image_section col-md-6" src={Image} />
      </div>
    </div>
  );
}
