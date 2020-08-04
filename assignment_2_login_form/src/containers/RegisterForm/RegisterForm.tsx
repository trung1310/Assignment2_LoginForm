import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';

import Image from '../../assets/images/solution-experts.png';
import Brand_logo from '../../assets/images/brand-logo.svg';
import Icon1 from '../../assets/images/Suche.svg';
import Icon2 from '../../assets/images/Suche02.svg';
import Icon3 from '../../assets/images/Suche03.svg';

import REDUCER_NAMES from '../../features/reducerNames';
import { handleValidationForm } from '../../utils/validation';
import { toast } from 'react-toastify';
import { APP_PROGRESS_STATUS } from '../../constants/index';
import Loading from '../../components/Loading/Loading';
import { LOGIN_PATH } from '../../constants/index';
import { registerAccountAsync } from '../../features/register/async-actions';

type FieldStates = {
  email: string,
  password: string,
  newPassword: string,
  name: string,
  phone: string,
};


export default function RegisterForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { registerResponse } = useSelector(
    (state: any) => state[REDUCER_NAMES.REGISTER]
  );

  const [fields, setFields] = useState<FieldStates>({
    email: '',
    password: '',
    newPassword: '',
    name: '',
    phone: '',
  });

  const [passwordShow, setPasswordShow] = useState(false);
  const [passwordShow_1, setPasswordShow_1] = useState(false);

  const togglePassword = () => {
    setPasswordShow(passwordShow ? false : true);
  }

  const togglePassword_1 = () => {
    setPasswordShow_1(passwordShow_1 ? false : true);
  }


  const handleFormRegisterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password, newPassword, name, phone } = fields;
    if (password !== newPassword) {
      toast.warn('Password and new password must be the same');
      return;
    };

    const error = handleValidationForm(fields);
    if (!isEmpty(error)) {
      toast.warn('Please input enough information to register account !');
      return;
    };

    const successCallback = () => {
      toast.success('Register new account success !');
      history.push(LOGIN_PATH);
    };

    const failureCallback = (msg: string) => {
      toast.error(msg ? msg : 'Register failed !');
    };

    dispatch(
      registerAccountAsync(
        email.trim(),
        password.trim(),
        name.trim(),
        phone.trim(),
        successCallback,
        failureCallback
      )
    );
  };

  const handleClick = () => {
    history.push(LOGIN_PATH);
  };

  return (
    <div className='container-fluid login_form'>
      <Loading
        isLoading={registerResponse.status === APP_PROGRESS_STATUS.STARTING}
      />
      <div className='row'>
        <div className='login_section col-md-5'>
          <img alt='#img' className='logo_brand' src={Brand_logo} />
          <p className='subtitle col-sm-12'>
            Start your personal photo experience
          </p>
          <h1 className='title_login col-sm-12'>Login your account</h1>

          <div className='input-field col-md-10'>
            <form
              className='form-group'
              autoComplete='on'
              onSubmit={handleFormRegisterSubmit}
            >
              <div className='form-group'>
                <label className='labelEmail' htmlFor='email'>
                  Email
                </label>
                <div className='input_email'>
                  <input
                    type='email'
                    className='form-control input_form'
                    id='emailRegister'
                    placeholder='Enter your email'
                    value={fields.email}
                    onChange={(e) => {
                      const email = e.currentTarget.value;
                      setFields((prevState) => ({ ...prevState, email }));
                    }}
                  />
                  <img alt='#img' className='icon1' src={Icon1} />
                </div>
              </div>

              <div className='form-group'>
                <label className='labelPassword' htmlFor='password'>
                  Password
                </label>
                <div className='input_password'>
                  <input
                    type={passwordShow ? 'text' : 'password'}
                    className='form-control input_form'
                    id='passwordRegister'
                    placeholder='Enter your password'
                    value={fields.password}
                    onChange={(e) => {
                      const password = e.currentTarget.value;
                      setFields((prevState) => ({ ...prevState, password }));
                    }}
                  />
                  <img alt='#img' className='icon2' src={Icon2} />
                  <img alt='#img' className='icon3' src={Icon3} onClick={togglePassword} />
                </div>
              </div>
              <div className='form-group'>
                <label className='labelConfirmPassword' htmlFor='password'>
                  Confirm Password
                </label>
                <div className='input_confirmPassword'>
                  <input
                    type={passwordShow_1 ? 'text' : 'password'}
                    className='form-control input_form'
                    id='confirmPassRegister'
                    placeholder='Enter your password'
                    value={fields.newPassword}
                    onChange={(e) => {
                      const newPassword = e.currentTarget.value;
                      setFields((prevState) => ({ ...prevState, newPassword }));
                    }}
                  />
                  <img alt='#img' className='icon2' src={Icon2} />
                  <img alt='#img' className='icon3' src={Icon3} onClick={togglePassword_1} />
                </div>
              </div>
              <div className='form-group'>
                <label className='labelFullName' htmlFor='fullname'>
                  Full Name
                </label>
                <div className='input_fullName'>
                  <input
                    type='text'
                    className='form-control input_form'
                    id='fullNameRegister'
                    placeholder='Enter your name'
                    value={fields.name}
                    onChange={(e) => {
                      const name = e.currentTarget.value;
                      setFields((prevState) => ({ ...prevState, name }));
                    }}
                  />
                  <img alt='#img' className='icon1' src={Icon1} />
                </div>
              </div>
              <div className='form-group'>
                <label className='labelPhone' htmlFor='phone'>
                  Phone Number
                </label>
                <div className='input_phone'>
                  <input
                    type='text'
                    className='form-control input_form'
                    id='phoneRegister'
                    placeholder='Enter your phone number'
                    onChange={(e) => {
                      const phone = e.currentTarget.value;
                      setFields((prevState) => ({ ...prevState, phone }));
                    }}
                  />
                  <img alt='#img' className='icon1' src={Icon1} />
                </div>
              </div>

              <div className='button_group'>
                <button
                  className='btn btnRegister'
                  type='button'
                  onClick={handleClick}
                >
                  Back
                </button>
                <button className='btn btnLogin' type='submit'>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className='col-md-1'></div>
        <img alt='#img' className='image_section col-md-6' src={Image} />
      </div>
    </div>
  );
}
