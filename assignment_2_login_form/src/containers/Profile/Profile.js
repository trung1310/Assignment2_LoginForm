import React from 'react';
import classes from './profile.module.scss';
import Avatar from '../../assets/images/avatar.png'
import Button from '../../components/Button/Button'

export default function Profile() {
  return (
    <div className='container'>
      <header>
        <h1 className={classes.title}>My Profile</h1>
        <h6 className={classes.subtitle}>
          Manage your profile and contact information
        </h6>
      </header>
      <section>
          <div className={classes.profile}>
              <img className={classes.image} src={Avatar}/>
              <h3 className={classes.name}>Nguyễn Chí Trung</h3>
          </div>
        <form className='form-group col-md-12'>
          <div className='row mb-2'>
            <div className='form-group col-md-6'>
              <label className={classes.labelName} className="text-center" for='fullName'>Full Name</label>
              <input className='form-control' type='text' id='fullName' value='Nguyễn Chí Trung'/>
            </div>
          </div>

          <div className='row mb-2'>
            <div className='form-group col-md-6'>
              <label className={classes.labelEmail} for='email'>Email</label>
              <input className='form-control' type='email' id='emailInput' value='trung.nguyen@terralogic.com'/>
            </div>

            <div className='form-group col-md-6'>
              <label className={classes.labelPhone} for='phone'>Phone</label>
              <input className='form-control' type='text' id='phoneInput' value='111-222-333'/>
            </div>
          </div>

          <div className={classes.line}></div>
          <p className={classes.changePass}>Change Password</p>

          <div className='row mb-2'>
            <div className='form-group col-md-6'>
              <label className={classes.labelCurrentPassword} for='currentPassword'>Current Password</label>
              <input className='form-control' type='password' id='currentPasswordInput'/>
            </div>
          </div>

          <div className='row mb-2'>
            <div className='form-group col-md-6'>
              <label className={classes.labelNewPassword} for='newPassword'>New Password</label>
              <input className='form-control' type='password' id='newPasswordInput'/>
            </div>

            <div className='form-group col-md-6'>
              <label className={classes.labelConfirmPassword} for='confirmPassword'>Confirm Password</label>
              <input className='form-control' type='password' id='confirmPasswordInput'/>
            </div>
          </div>

          <Button className={classes.btnSave} id='btnSave' name='Save'/>
          <Button className={classes.btnLogout} id='btnLogout' name='Log out'/>
        </form>
      </section>
    </div>
  );
}
