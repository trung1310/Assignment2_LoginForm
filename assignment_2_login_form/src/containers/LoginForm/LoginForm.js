import React from 'react';
import Image from '../../assets/images/solution-experts.png';
import Brand_logo from '../../assets/images/brand-logo.svg';
import Icon1 from '../../assets/images/Suche.svg';
import Icon2 from '../../assets/images/Suche02.svg';
import Icon3 from '../../assets/images/Suche03.svg';
import './_login.scss';

export default function LoginForm() {
  return (
    <div className='login_form'>
      <div className='login_section'>
        <img className='logo_brand' src={Brand_logo} />
        <p className='subtitle'>Start your personal photo experience</p>
        <h1 className='title_login'>Login your account</h1>

        <form className='form-group col-md-12'>
          <div className='form-group'>
          <label className='labelEmail' for='email'>Email</label>
            <div className='input_email'>
                <input
                type='email'
                className='form-control input_form'
                id='emailLogin'
                placeholder='Enter your email'
                />
                <img className='icon1' src={Icon1} />
            </div>    
          </div>

          <div className='form-group'>
            <label className='labelPassword' for='password'>Password</label>
            <div className='input_password'>
                <input
                type='password'
                className='form-control input_form'
                id='passwordLogin'
                placeholder='Enter your password'
                />
                <img className='icon2' src={Icon2} />
                <img className='icon3' src={Icon3} />
            </div>
          </div>

            <div className='button_group'>
                <button className='btn btn-primary' type='button'>
                    Register
                </button>
                <button className='btn btn-primary' type='button'>
                    Login
                </button>
            </div>
          

          <div className='form-group form-check'>
            <input
              type='checkbox'
              className='form-check-input input_checkBoxPassword'
              id='checkboxPassword'
            />
            <label className='form-check-label' for='checkboxPassword'>
              Remember password
            </label>
          </div>
        </form>
      </div>
      <div className='bgImage'></div>
      <img className='image_section' src={Image} />
    </div>
  );
}
