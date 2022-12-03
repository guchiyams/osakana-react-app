// css imports
import './Login.css'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { auth, logInWithEmailAndPassword, logout } from '../../config/firebase-config';

const Login = () => {
  const [loginEmail, setLoginEmail] = useState('');  
  const [loginFirstName, setLoginFirstName] = useState('');
  const [loginLastName, setLoginLastName] = useState('');

  const handleLogin = () => {
    console.log('login')
  }

  return (
    <>
      <div className="register-container">
        <div className="register">
          <div className="register-card">
            <Link to="/"><img src={require('../../assets/fish_icon.png')} alt='logo' className='register-fish'/></Link>
            <div className="register__title-container">
              <h1 className="register__title">ログイン</h1>
            </div>
            <div className="register-form">
              <div className="register-form__email-container">
                <input className='register-form__textBox-full' type="email" name="email" required onChange={(e) => { setLoginEmail(e.target.value); }} placeholder="Email"></input>
              </div>
              <div className="register-form__password-container">
                <input className='register-form__textBox-full' type="password" required onChange={(e) => { setLoginFirstName(e.target.value); }} placeholder="Password"></input>              </div>
              <div className="register-form__btn-container">
                <button className="register-form__btn" onClick={handleLogin}>Login</button>
                <Link to="/register" >Don't have an account? Sign up.</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login