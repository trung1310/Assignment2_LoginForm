import React, {useState} from "react";
import { useDispatch } from "react-redux";
import {useHistory} from 'react-router-dom';

import Image from "../../assets/images/solution-experts.png";
import Brand_logo from "../../assets/images/brand-logo.svg";
import Icon1 from "../../assets/images/Suche.svg";
import Icon2 from "../../assets/images/Suche02.svg";
import Icon3 from "../../assets/images/Suche03.svg";

import { register } from "../../features/register/RegisterSlice";


export default function RegisterForm() {
  const dispatch = useDispatch();


  const [emailRegisterValue, setEmailRegisterValue] = useState("");
  const [nameRegisterValue, setNameRegisterValue] = useState("");
  const [phoneRegisterValue, setPhoneRegisterValue] = useState("");

  const [passwordRegisterValue, setPasswordRegisterValue] = useState("");
  const [passwordRegisterValue_1, setPasswordRegisterValue_1] = useState("");

  const handleFormSubmit = () => {
    if (
      !emailRegisterValue.trim() || 
      !passwordRegisterValue.trim() || 
      !nameRegisterValue.trim() ||
      ! phoneRegisterValue.trim() ||
      ! passwordRegisterValue_1.trim()
    ) {
      alert("Please input all fields");
      return;
    } else{
      if(passwordRegisterValue !== passwordRegisterValue_1)
      {
      alert("Please input email and password");
        return;
      }
      alert("Register Success!");
    }
    dispatch(register(emailRegisterValue.trim(), passwordRegisterValue.trim(), nameRegisterValue.trim(), phoneRegisterValue.trim()));
   
  }

  let history = useHistory();

  const handleClick = () => {
    history.push("/login");
  }
  
  return (
    <div className="container-fluid login_form">
      <div className="row">
      <div className="login_section col-md-5">
        <img alt='#img' className="logo_brand" src={Brand_logo} />
        <p className="subtitle col-sm-12">Start your personal photo experience</p>
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
                id="emailRegister"
                placeholder="Enter your email"
                onChange={(event) => {
                  const email = event.target.value;
                  setEmailRegisterValue(email);
                }}
              />
              <img alt='#img' className="icon1" src={Icon1} />
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
                id="passwordRegister"
                placeholder="Enter your password"
                onChange={(event) => {
                  const password = event.target.value;
                  setPasswordRegisterValue(password);
                }}
              />
              <img alt='#img' className="icon2" src={Icon2} />
              <img alt='#img' className="icon3" src={Icon3} />
            </div>
          </div>
          <div className="form-group">
            <label className="labelConfirmPassword" htmlFor="password">
              Confirm Password
            </label>
            <div className="input_confirmPassword">
              <input
                type="password"
                className="form-control input_form"
                id="confirmPassRegister"
                placeholder="Enter your password"
                onChange={(event) => {
                  const password1 = event.target.value;
                  setPasswordRegisterValue_1(password1);
                }}
              />
              <img alt='#img' className="icon2" src={Icon2} />
              <img alt='#img' className="icon3" src={Icon3} />
            </div>
          </div>
          <div className="form-group">
            <label className="labelFullName" htmlFor="fullname">
              Full Name
            </label>
            <div className="input_fullName">
              <input
                type="text"
                className="form-control input_form"
                id="fullNameRegister"
                placeholder="Enter your name"
                onChange={(event) => {
                  const fullName = event.target.value;
                  setNameRegisterValue(fullName);
                }}
              />
              <img alt='#img' className="icon1" src={Icon1} />
            </div>
          </div>
          <div className="form-group">
            <label className="labelPhone" htmlFor="phone">
              Phone Number
            </label>
            <div className="input_phone">
              <input
                type="text"
                className="form-control input_form"
                id="phoneRegister"
                placeholder="Enter your phone number"
                onChange={(event) => {
                  const phone = event.target.value;
                  setPhoneRegisterValue(phone);
                }}
              />
              <img alt='#img' className="icon1" src={Icon1} />
            </div>
          </div>

          <div className="button_group">
              <button className="btn btnRegister" type="button" onClick={handleClick}>
                Back
              </button>
            <button className="btn btnLogin" type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </div>
        </form>
        </div>
      </div>

      <div className='col-md-1'></div>
      <img alt='#img' className="image_section col-md-6" src={Image} />
      </div>
    </div>
  );
}
