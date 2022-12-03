// css imports
import './Login.css'

import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, logInWithEmailAndPassword, logout } from '../../config/firebase-config';

import { message, notification } from "antd";

const Login = () => {
  const [user, loading, error] = useAuthState(auth);
  const [loginEmail, setLoginEmail] = useState();
  const [loginPwd, setLoginPwd] = useState();
  const [incorrect, setIncorrect] = useState();
  const navigate = useNavigate();

  const errorMessage = (text) => {
    message.error(text)
  }

  const formValidation = () => {
    if (!loginEmail || loginEmail === '') {
      errorMessage('please enter your email');
      return false;
    }
    else if (!loginPwd || loginPwd === '') {
      errorMessage('please enter your password');
      return false;
    }

    return true;
  }

  const handleLogin = async () => {
    if (!formValidation()) {
      return;
    } else {
      try {
        await logInWithEmailAndPassword(loginEmail, loginPwd, setIncorrect);
      } catch {
        setIncorrect(true);
      }
    }
  }

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) {
      navigate("/dashboard");
    }
  }, [user, loading, error, incorrect])

  return (
    <>
      <div className="login-container">
        <div className="login">
          <div className="login-card">
            <Link to="/"><img src={require('../../assets/fish_icon.png')} alt='logo' className='login-fish'/></Link>
            <div className="login__title-container">
              <h1 className="login__title">ログイン</h1>
            </div>
            <div className="login-form">
              <div className="login-form__email-container">
                <input className='login-form__textBox-full' type="email" name="email" required={true} onChange={(e) => { setLoginEmail(e.target.value); }} placeholder="Email"></input>
              </div>
              <div className="login-form__password-container">
                <input className='login-form__textBox-full' type="password" required onChange={(e) => { setLoginPwd(e.target.value); }} placeholder="Password"></input>
              </div>
              <div className="login-error-msg-container">
                {incorrect ? <small className='login-form__error-msg'>*invalid credentials</small> : ''}
              </div>
              <div className="login-form__btn-container">
                <button className="login-form__btn" onClick={handleLogin}>Login</button>
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