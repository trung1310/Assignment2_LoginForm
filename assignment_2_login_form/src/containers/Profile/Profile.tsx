import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import Avatar from "../../assets/images/avatar.png";
import EditPhoto from "../../assets/images/edit_photo.svg";
import Icon3 from "../../assets/images/Suche03.svg";

import { CLEAR_STORE, RootState } from "../../store";

import {
  updateProfileAsync,
  updatePasswordAsync
} from "../../features/profile/async-actions";
import Loading from "../../components/Loading/Loading";
import { APP_PROGRESS_STATUS } from "../../constants";
import { toast } from "react-toastify";

// CSS imports
import "./_profile.scss";

type FieldStates = {
  name: string;
  phone: string;
  email: string;
  currentPassword?: string;
  newPassword?: string;
  confirmNewPassword?: string;
  avatar: string;
  displayName: string;
};

export default function Profile() {
  const { register, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();
  const userProfile = useSelector(
    (state: RootState) => state.profile.updateProfileResponse.response.data
  );
  const updateProfileStatus = useSelector(
    (state: RootState) => state.profile.updateProfileResponse.status
  );

  const [file, setFile] = useState<File | undefined>();

  const [fields, setFields] = useState<FieldStates>({
    name: userProfile.name,
    phone: userProfile.phone,
    email: userProfile.email,
    avatar: userProfile.avatar ? userProfile.avatar : Avatar,
    displayName: userProfile.displayName,
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  useEffect(() => {
    setFields({
      name: userProfile.name,
      phone: userProfile.phone,
      email: userProfile.email,
      avatar: userProfile.avatar ? userProfile.avatar : Avatar,
      displayName: userProfile.displayName,
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    });
  }, [userProfile]);

  useEffect(() => {
    if (updateProfileStatus === APP_PROGRESS_STATUS.SUCCESS) {
      toast.success("Update profile success !");
    }
  }, [updateProfileStatus]);

  const onSubmit = (values: FieldStates) => {
    const {
      name,
      phone,
      email,
      currentPassword,
      newPassword,
      confirmNewPassword,
    } = values;
    dispatch(
      updateProfileAsync(
        {
          name,
          displayName: name,
          avatar: userProfile.avatar ? userProfile.avatar : "",
          email,
          phone,
          id: userProfile.id,
        },
        file ? file : undefined
      )
    );
    if (newPassword && currentPassword && confirmNewPassword) {
      if (newPassword === confirmNewPassword) {
        console.log('RUN UPDATE PASSS')
        dispatch(updatePasswordAsync(newPassword, currentPassword));
      }
    }
    setFile(undefined);
  };

  const handleLogOutBtnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch({ type: CLEAR_STORE });
  };

  const handleSelectImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.files && e.target.files[0]) {
      const imageURL = URL.createObjectURL(e.target.files[0]);
      setFile(e.target.files[0]);
      setFields((prevState) => ({ ...prevState, avatar: imageURL }));
    }
  };

  return (
    <div className="container">
      <Loading
        isLoading={updateProfileStatus === APP_PROGRESS_STATUS.STARTING}
      />
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
                  disabled={
                    updateProfileStatus === APP_PROGRESS_STATUS.STARTING
                  }
                  onChange={handleSelectImage}
                />
                <label htmlFor="file-5">
                  <figure>
                    <img alt="#img" className="icon" src={EditPhoto} />
                  </figure>
                </label>
              </div>
            </div>
          </a>
          <h3 className="name">{fields.displayName}</h3>
        </div>
        <form
          className="form-group col-xs-12"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="row mb-2">
            <div className="form-group col-md-6">
              <label className="labelName text-center" htmlFor="fullName">
                Full Name
              </label>
              <input
                name="name"
                ref={register({ required: true })}
                className="form-control"
                type="text"
                id="fullName"
                defaultValue={fields.name}
                placeholder={fields.name}
              />
              {errors.name && (
                <span className="error-msg">This field is required</span>
              )}
            </div>
          </div>

          <div className="row mb-2">
            <div className="form-group col-md-6">
              <label className="labelEmail" htmlFor="email">
                Email
              </label>
              <input
                name="email"
                className="form-control"
                ref={register({
                  required: "This field is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                })}
                type="email"
                id="emailInput"
                placeholder={fields.email}
                defaultValue={fields.email}
              />
              {errors.email && <span>{errors.email.message}</span>}
            </div>

            <div className="form-group col-md-6">
              <label className="labelPhone" htmlFor="phone">
                Phone
              </label>
              <input
                name="phone"
                className="form-control"
                ref={register({ required: true })}
                type="text"
                id="phoneInput"
                placeholder="111-222-333"
                defaultValue={fields.phone}
              />
              {errors.phone && <span>This field is required</span>}
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
                  ref={register}
                  name="currentPassword"
                  autoComplete="new-password"
                  className="form-control inputPass"
                  type="password"
                  id="currentPasswordInput"
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
                  ref={register}
                  name="newPassword"
                  autoComplete="new-password"
                  className="form-control inputPass"
                  type="password"
                  id="newPasswordInput"
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
                  ref={register}
                  name="confirmNewPassword"
                  className="form-control inputPass"
                  type="password"
                  id="confirmPasswordInput"
                />
                <img alt="#img" className="icon3" src={Icon3} />
              </div>
            </div>
          </div>

          <button
            className="btn btnSave"
            type="submit"
            id="saveButton"
            disabled={updateProfileStatus === APP_PROGRESS_STATUS.STARTING}
          >
            Save
          </button>
          <button
            className="btn btnLogout"
            type="button"
            id="logoutButton"
            disabled={updateProfileStatus === APP_PROGRESS_STATUS.STARTING}
            onClick={handleLogOutBtnClick}
          >
            Logout
          </button>
        </form>
      </section>
    </div>
  );
}
