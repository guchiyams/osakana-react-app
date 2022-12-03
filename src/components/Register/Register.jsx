import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'


// css imports
import './Register.css'

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, registerWithEmailAndPassword } from '../../config/firebase-config'
import { Placeholder } from 'react-bootstrap';

const Register = () => {
  const [user, loading, error] = useAuthState(auth);
  const [registerEmail, setRegisterEmail] = useState();
  const [registerLastName, setRegisterLastName] = useState('');
  const [registerFirstName, setRegisterFirstName] = useState('');

  const handleRegister = () => {
    console.log("register");
  }

  return (
    <>
      <div className="register-container">
        <div className="register">
          <div className="register-card">
            <Link to="/"><img src={require('../../assets/fish_icon.png')} alt='logo' className='register-fish'/></Link>
            <div className="register__title-container">
              <h1 className="register__title">レジスト</h1>
            </div>
            <div className="register-form">
              <div className="register-form__name-container">
                <input className="register-form__textBox-half" type="text" placeholder='first name' />
                <input className='register-form__textBox-half' type="text" placeholder='last name' />
              </div>
              <div className="register-form__email-container">
                <input className='register-form__textBox-full' type="email" name="email" required onChange={(e) => { setRegisterEmail(e.target.value); }} placeholder="Email"></input>
              </div>
              <div className="register-form__password-container">
                <input className='register-form__textBox-full' type="password" required onChange={(e) => { setRegisterFirstName(e.target.value); }} placeholder="Password"></input>
                <input className='register-form__textBox-full' type="password" required onChange={(e) => { setRegisterLastName(e.target.value); }} placeholder="Confirm password"></input>
              </div>
              <div className="register-form__btn-container">
                <button className="register-form__btn" onClick={handleRegister}>Register</button>
                <Link to="/login" >Already have an account? Log in.</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register