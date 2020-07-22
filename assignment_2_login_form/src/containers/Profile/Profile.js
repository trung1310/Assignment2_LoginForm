import React from 'react';
import './_profile.scss'
import Avatar from '../../assets/images/avatar.png'

export default function Profile() {
  return (
    <div className='container'>
      <header>
        <h1 className='title'>My Profile</h1>
        <h6 className='subtitle'>
          Manage your profile and contact information
        </h6>
      </header>
      <section>
          <div className='profile'>
              <img className='image' src={Avatar}/>
              <h3 className='name'>Nguyễn Chí Trung</h3>
          </div>
        <form className='form-group col-md-12'>
          <div className='row mb-2'>
            <div className='form-group col-md-6'>
              <label className='labelName' className="text-center" for='fullName'>Full Name</label>
              <input className='form-control' type='text' id='fullName' placeholder='Nguyễn Chí Trung'/>
            </div>
          </div>

          <div className='row mb-2'>
            <div className='form-group col-md-6'>
              <label className='labelEmail' for='email'>Email</label>
              <input className='form-control' type='email' id='emailInput' placeholder='trung.nguyen@terralogic.com'/>
            </div>

            <div className='form-group col-md-6'>
              <label className='labelPhone' for='phone'>Phone</label>
              <input className='form-control' type='text' id='phoneInput' placeholder='111-222-333'/>
            </div>
          </div>

          <div className='line'></div>
          <p className='changePass'>Change Password</p>

          <div className='row mb-2'>
            <div className='form-group col-md-6'>
              <label className='labelCurrentPassword' for='currentPassword'>Current Password</label>
              <input className='form-control' type='password' id='currentPasswordInput'/>
            </div>
          </div>

          <div className='row mb-2'>
            <div className='form-group col-md-6'>
              <label className='labelNewPassword' for='newPassword'>New Password</label>
              <input className='form-control' type='password' id='newPasswordInput'/>
            </div>

            <div className='form-group col-md-6'>
              <label className='labelConfirmPassword' for='confirmPassword'>Confirm Password</label>
              <input className='form-control' type='password' id='confirmPasswordInput'/>
            </div>
          </div>

            <button className='btn btn-primary btnSave' type='button' id='saveButton'>Save</button>
            <button className='btn btn-primary btnLogout' type='button' id='logoutButton'>Logout</button>
          
        </form>
      </section>
    </div>
  );
}
