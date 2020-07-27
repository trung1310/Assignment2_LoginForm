import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {useHistory } from "react-router-dom";

import Image from "../../assets/images/solution-experts.png";
import Brand_logo from "../../assets/images/brand-logo.svg";
import Icon1 from "../../assets/images/Suche.svg";
import Icon2 from "../../assets/images/Suche02.svg";
import Icon3 from "../../assets/images/Suche03.svg";
import "./_login.scss";

import { login } from "../../features/login/LoginSlice";

export default function LoginForm() {
  const dispatch = useDispatch();

  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");

  const handleFormSubmit = () => {
    if (!emailInputValue.trim() || !passwordInputValue.trim()) {
      alert("Please input email and password");
      return;
    }
    dispatch(login(emailInputValue.trim(), passwordInputValue.trim()));
  };

  let history = useHistory();

  const handleClick = () => {
    history.push("/register");
  }

  return (
    <div className="container-fluid login">
      <div className="row">
        <div className="login_section col-md-5">
          <img alt="#img" className="logo_brand col-sm-6" src={Brand_logo} />
          <p className="subtitle col-sm-12">
            Start your personal photo experience
          </p>
          <h1 className="title_login col-sm-12">Login your account</h1>

          <div className='input-field col-md-10'>
          <form className="form-group">
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
                  onChange={(event) => {
                    const email = event.target.value;
                    setEmailInputValue(email);
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
                  onChange={(event) => {
                    const password = event.target.value;
                    setPasswordInputValue(password);
                  }}
                />
                <img alt="#img" className="icon2" src={Icon2} />
                <img alt="#img" className="icon3" src={Icon3} />
              </div>
            </div>

            <div className="button_group">
              <button className="btn btnRegister" type="button" onClick={handleClick}>
                  Register
              </button>
              <button
                className="btn btnLogin"
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
