import React, {useState} from 'react';
import './_profile.scss'
import Avatar from '../../assets/images/avatar.png'
import EditPhoto from '../../assets/images/edit_photo.svg'

// import { Link } from "react-router-dom";

export default function Profile() {

  const [fullName, setFullName] = useState('');
  const [emailProfileValue, setEmailProfileValue] = useState('');
  const [phoneProfileValue, setPhoneProfileValue] = useState('');

  const [currentPass, setCurrentPass] = useState(''); 
  const [newPass, setNewPass] = useState(''); 
  const [confirmPass, setConfirmPass] = useState(''); 

  const handleLogOut = () => {

  }

  return (
    <div className='container'>
      <header>
        <h1 className='title'>My Profile</h1>
        <h6 className='subtitle'>
          Manage your profile and contact information
        </h6>
      </header>
      <section className='profile_section col-md-12 col-lg-12 '>
        <div className='profile'>
          <a className='avatar' href='#openAvatar'>
            <img alt='#img' className='image' src={Avatar} />
            <a className='edit' href='#editAvatar'><img alt='#img' className='icon' src={EditPhoto} /></a>
          </a>
          <h3 className='name'>Nguyễn Chí Trung</h3>
        </div>
        <form className='form-group col-xs-12'>
          <div className='row mb-2'>
            <div className='form-group col-md-6'>
              <label className='labelName text-center' htmlFor='fullName'>Full Name</label>
              <input 
              className='form-control' 
              type='text' id='fullName' 
              placeholder='Nguyễn Chí Trung' 
              onChange={(event) => {
                const fullname = event.target.value;
                setFullName(fullname);
              }}
              />
            </div>
          </div>

          <div className='row mb-2'>
            <div className='form-group col-md-6'>
              <label className='labelEmail' htmlFor='email'>Email</label>
              <input 
              className='form-control' 
              type='email' 
              id='emailInput' 
              placeholder='trung.nguyen@terralogic.com' 
              onChange={(event) => {
                const email = event.target.value;
                setEmailProfileValue(email);
              }}
              />
            </div>

            <div className='form-group col-md-6'>
              <label className='labelPhone' htmlFor='phone'>Phone</label>
              <input 
              className='form-control' 
              type='text' id='phoneInput' 
              placeholder='111-222-333' 
              onChange={(event) => {
                const phone = event.target.value;
                setPhoneProfileValue(phone);
              }}
              />
            </div>
          </div>

          <div className='line'></div>
          <p className='changePass'>Change Password</p>

          <div className='row mb-2'>
            <div className='form-group col-md-6'>
              <label className='labelCurrentPassword' htmlFor='currentPassword'>Current Password</label>
              <input 
              className='form-control' 
              type='password' 
              id='currentPasswordInput' 
              onChange={(event) => {
                const currPass = event.target.value;
                setCurrentPass(currPass);
              }}
              />
            </div>
          </div>

          <div className='row mb-2'>
            <div className='form-group col-md-6'>
              <label className='labelNewPassword' htmlFor='newPassword'>New Password</label>
              <input 
              className='form-control' 
              type='password' 
              id='newPasswordInput' 
              onChange={(event) => {
                const newPass = event.target.value;
                setNewPass(newPass);
              }}
              />
            </div>

            <div className='form-group col-md-6'>
              <label className='labelConfirmPassword' htmlFor='confirmPassword'>Confirm Password</label>
              <input 
              className='form-control' 
              type='password' 
              id='confirmPasswordInput' 
              onChange={(event) => {
                const confirmPass = event.target.value;
                setConfirmPass(confirmPass);
              }}
              />
            </div>
          </div>

          <button className='btn btnSave' type='button' id='saveButton'>Save</button>
          <button className='btn btnLogout' type='button' id='logoutButton' onClick={handleLogOut}>Logout</button>
        </form>
      </section>
    </div>
  );
}
