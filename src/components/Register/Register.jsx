import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'


// css imports
import './Register.css'

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, registerWithEmailAndPassword } from '../../config/firebase-config'
import { Placeholder } from 'react-bootstrap';

import { message, notification } from "antd";

const Register = () => {
  const [user, loading, error] = useAuthState(auth);
  const [pwdIncorrect, setPwdIncorrect] = useState();
  const [emailExists, setEmailExists] = useState();
  const [registerEmail, setRegisterEmail] = useState();
  const [registerFirstName, setRegisterFirstName] = useState();
  const [registerLastName, setRegisterLastName] = useState();
  const [registerPwd, setRegisterPwd] = useState();
  const [registerPwdConfirm, setRegisterPwdConfirm] = useState();
  const navigate = useNavigate();

  const errorMessage = (text) => {
    message.error(text)
  }

  const formValidation = () => {
    if (!registerFirstName || registerFirstName === '') {
      errorMessage('please enter your first name');
      return false;
    }
    else if (!registerLastName || registerLastName === '') {
      errorMessage('please enter your last name');
      return false;
    }
    else if (!registerEmail || registerEmail === '') { 
      errorMessage('please enter your email');
      return false;
    }
    else if (!registerPwd || registerPwd === '') {
      errorMessage('please enter password')
      return false;
    }
    else if (!registerPwdConfirm || registerPwdConfirm === '') {
      errorMessage('please confirm password')
      return false;
    }

    return true;
  }

  const handleRegister = async () => {
    if (!formValidation()) {
      return;
    }
    if (!(registerPwd === registerPwdConfirm)) {
      setPwdIncorrect(true);
      return;
    } else {
      setPwdIncorrect(false);
    }

    let email_exists = await registerWithEmailAndPassword(registerFirstName, registerLastName, registerEmail, registerPwd);
    if (email_exists) {
      setEmailExists(true);
    } else {
      setEmailExists(false);
    }
  }

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard")
    if (error) navigate("/");
  }, [user, loading, error, pwdIncorrect, emailExists, navigate])

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
                <input className="register-form__textBox-half" type="text" placeholder='first name' onChange={(e) => { setRegisterFirstName(e.target.value); }} />
                <input className='register-form__textBox-half' type="text" placeholder='last name' onChange={(e) => { setRegisterLastName(e.target.value); }} />
              </div>
              <div className="register-form__email-container">
                <input className='register-form__textBox-full' type="email" name="email" required={true} onChange={(e) => { setRegisterEmail(e.target.value); }} placeholder="Email"></input>
              </div>
              <div className="register-form__password-container">
                <input className='register-form__textBox-full' type="password" required={true} placeholder="Password" onChange={(e) => { setRegisterPwd(e.target.value); }}></input>
                <input className='register-form__textBox-full' type="password" required={true} placeholder="Confirm password" onChange={(e) => { setRegisterPwdConfirm(e.target.value); }}></input>
              </div>
              <div className="register-error-msg-container">
                {pwdIncorrect ? <small className='register-form__error-msg'>*password do not match</small> : ''}
                {emailExists ? <small className='register-form__error-msg'>*email exists</small> : ''}

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