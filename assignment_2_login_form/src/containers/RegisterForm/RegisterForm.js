import React from "react";
import Image from "../../assets/images/solution-experts.png";
import Brand_logo from "../../assets/images/brand-logo.svg";
import Icon1 from "../../assets/images/Suche.svg";
import Icon2 from "../../assets/images/Suche02.svg";
import Icon3 from "../../assets/images/Suche03.svg";

export default function RegisterForm() {
  return (
    <div className="container-fluid login_form">
      <div className="login_section">
        <img className="logo_brand" src={Brand_logo} />
        <p className="subtitle">Start your personal photo experience</p>
        <h1 className="title_login">Login your account</h1>

        <form className="form-group col-md-12 col-sm-12">
          <div className="form-group">
            <label className="labelEmail" for="email">
              Email
            </label>
            <div className="input_email">
              <input
                type="email"
                className="form-control input_form"
                id="emailRegister"
                placeholder="Enter your email"
              />
              <img className="icon1" src={Icon1} />
            </div>
          </div>

          <div className="form-group">
            <label className="labelPassword" for="password">
              Password
            </label>
            <div className="input_password">
              <input
                type="password"
                className="form-control input_form"
                id="passwordRegister"
                placeholder="Enter your password"
              />
              <img className="icon2" src={Icon2} />
              <img className="icon3" src={Icon3} />
            </div>
          </div>
          <div className="form-group">
            <label className="labelConfirmPassword" for="password">
              Confirm Password
            </label>
            <div className="input_confirmPassword">
              <input
                type="password"
                className="form-control input_form"
                id="confirmPassRegister"
                placeholder="Enter your password"
              />
              <img className="icon2" src={Icon2} />
              <img className="icon3" src={Icon3} />
            </div>
          </div>
          <div className="form-group">
            <label className="labelFullName" for="fullname">
              Full Name
            </label>
            <div className="input_fullName">
              <input
                type="text"
                className="form-control input_form"
                id="fullNameRegister"
                placeholder="Enter your name"
              />
              <img className="icon1" src={Icon1} />
            </div>
          </div>
          <div className="form-group">
            <label className="labelPhone" for="phone">
              Phone Number
            </label>
            <div className="input_phone">
              <input
                type="text"
                className="form-control input_form"
                id="phoneRegister"
                placeholder="Enter your phone number"
              />
              <img className="icon1" src={Icon1} />
            </div>
          </div>

          <div className="button_group">
            <button className="btn btnRegister" type="button">
              Back
            </button>
            <button className="btn btnLogin" type="button">
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="overlay">
        <img className="image_section" src={Image} />
      </div>
    </div>
  );
}
