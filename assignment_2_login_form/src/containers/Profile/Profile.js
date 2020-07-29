import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import "./_profile.scss";
import Avatar from "../../assets/images/avatar.png";
import EditPhoto from "../../assets/images/edit_photo.svg";
import Icon3 from "../../assets/images/Suche03.svg";

import REDUCER_NAMES from "../../features/reducerNames";
import { toast } from "react-toastify";
import axios from "axios";
import { UPDATE_API } from "../../api";
import { LOGIN_PATH } from "../../constants";
import {
  APP_PROGRESS_STATUS,
  LOCAL_STORAGE_ACCESS_TOKEN_KEY,
} from "../../constants/index";

import { clearLoginState } from "../../features/login/LoginSlice";

export default function Profile() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { registerResponse } = useSelector(
    (state) => state[REDUCER_NAMES.REGISTER]
  );

  const { loginResponse } = useSelector((state) => state[REDUCER_NAMES.LOGIN]);

  const [fields, setFields] = useState({
    name: registerResponse.response.data.name,
    phone: registerResponse.response.data.phone,
    email: registerResponse.response.data.email,
    currentPassword: undefined,
    newPassword: undefined,
    confirmNewPassword: undefined,
    avatar: Avatar,
  });

  useEffect(() => {
    if (loginResponse.status === APP_PROGRESS_STATUS.FAILED) {
      if (loginResponse.loginState) {
        toast.success("Logout success !");
        history.push(LOGIN_PATH);
      }
    }
  }, [loginResponse, history]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const {
      name,
      phone,
      email,
      currentPassword,
      newPassword,
      confirmNewPassword,
    } = fields;

    try {
      await axios.patch(
        UPDATE_API,
        {
          name,
          phone,
          email,
          currentPassword,
          newPassword,
          confirmNewPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              LOCAL_STORAGE_ACCESS_TOKEN_KEY
            )}`,
          },
        }
      );
      toast.success("Update profile success !");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    localStorage.clear();
    dispatch(clearLoginState());
  };

  return (
    <div className="container">
      <header>
        <h1 className="title">My Profile</h1>
        <h6 className="subtitle">
          Manage your profile and contact information
        </h6>
      </header>
      <section className="profile_section col-md-12 col-lg-12 ">
        <div className="profile">
          <a className="avatar" href="#openAvatar">
            <img alt="#img" className="image" src={fields.avatar} />
            <div className="row btnAva">
              <div className="form-group col-md-6">
                <input
                  type="file"
                  accept="image/*"
                  id="file-5"
                  className="inputAva"
                  onChange={(e) => {
                    const objURL = URL.createObjectURL(e.target.files[0]);
                    setFields((prevState) => ({
                      ...prevState,
                      avatar: objURL,
                    }));
                  }}
                />
                <label for="file-5">
                  <figure>
                    <img alt="#img" className="icon" src={EditPhoto} />
                  </figure>
                </label>
              </div>
            </div>
          </a>
          <h3 className="name">{registerResponse.response.data.name}</h3>
        </div>
        <form className="form-group col-xs-12" onSubmit={handleFormSubmit}>
          <div className="row mb-2">
            <div className="form-group col-md-6">
              <label className="labelName text-center" htmlFor="fullName">
                Full Name
              </label>
              <input
                className="form-control"
                type="text"
                id="fullName"
                value={fields.name}
                placeholder={fields.name}
                onChange={(e) => {
                  const fullname = e.target.value;
                  setFields((prevState) => ({ ...prevState, fullname }));
                }}
              />
            </div>
          </div>

          <div className="row mb-2">
            <div className="form-group col-md-6">
              <label className="labelEmail" htmlFor="email">
                Email
              </label>
              <input
                className="form-control"
                type="email"
                id="emailInput"
                placeholder={registerResponse.response.data.email}
                value={fields.email}
                onChange={(e) => {
                  const email = e.currentTarget.value;
                  setFields((prevState) => ({ ...prevState, email }));
                }}
              />
            </div>

            <div className="form-group col-md-6">
              <label className="labelPhone" htmlFor="phone">
                Phone
              </label>
              <input
                className="form-control"
                type="text"
                id="phoneInput"
                placeholder="111-222-333"
                value={fields.phone}
                onChange={(e) => {
                  const phone = e.currentTarget.value;
                  setFields((prevState) => ({ ...prevState, phone }));
                }}
              />
            </div>
          </div>

          <div className="line"></div>
          <p className="changePass">Change Password</p>

          <div className="row mb-2">
            <div className="form-group col-md-6">
              <label className="labelCurrentPassword" htmlFor="currentPassword">
                Current Password
              </label>
              <div className="input_password">
                <input
                  autoComplete="new-password"
                  className="form-control inputPass"
                  type="password"
                  id="currentPasswordInput"
                  onChange={(e) => {
                    const currentPassword = e.currentTarget.value;
                    setFields((prevState) => ({
                      ...prevState,
                      currentPassword,
                    }));
                  }}
                />
                <img alt="#img" className="icon3" src={Icon3} />
              </div>
            </div>
          </div>

          <div className="row mb-2">
            <div className="form-group col-md-6">
              <label className="labelNewPassword" htmlFor="newPassword">
                New Password
              </label>
              <div className="input_password">
                <input
                  autoComplete="new-password"
                  className="form-control inputPass"
                  type="password"
                  id="newPasswordInput"
                  value={fields.newPassword}
                  onChange={(e) => {
                    const newPassword = e.currentTarget.value;
                    setFields((prevState) => ({ ...prevState, newPassword }));
                  }}
                />
                <img alt="#img" className="icon3" src={Icon3} />
              </div>
            </div>

            <div className="form-group col-md-6">
              <label className="labelConfirmPassword" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <div className="input_password">
                <input
                  className="form-control inputPass"
                  type="password"
                  id="confirmPasswordInput"
                  value={fields.confirmNewPassword}
                  onChange={(e) => {
                    const confirmNewPassword = e.currentTarget.value;
                    setFields((prevState) => ({
                      ...prevState,
                      confirmNewPassword,
                    }));
                  }}
                />
                <img alt="#img" className="icon3" src={Icon3} />
              </div>
            </div>
          </div>

          <button className="btn btnSave" type="submit" id="saveButton">
            Save
          </button>
          <button
            className="btn btnLogout"
            type="button"
            id="logoutButton"
            onClick={handleClick}
          >
            Logout
          </button>
        </form>
      </section>
    </div>
  );
}
