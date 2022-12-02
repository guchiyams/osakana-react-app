import React from 'react'
import { Link } from 'react-router-dom'

// css imports
import './Register.css'

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, registerWithEmailAndPassword } from '../../config/firebase-config'

// bootstrap imports
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

const Register = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      <div className="form-wrapper" style={{height:"100vh"}}>
        <div className="form-card">
          <div className="osakana-welcome-title mb-3 text-center">
            <h1>Register</h1>
          </div>
          <div className="register-form">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formUserName">
                <Form.Label>Name</Form.Label>
                <div className="d-flex flex-row justify-content-between">
                <Form.Control className="m-auto" type="text" placeholder="Enter first name" />
                <Form.Control className="m-auto" type="text" placeholder="Enter last name" />
                </div>
                
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPasswordConfirmation">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>
              {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group> */}
              <Link className="btn btn-outline-light bg-primary w-100 mt-3" role="button" to="/dashboard"> 
                Register
              </Link>
              <div className="d-flex justify-content-center mt-2">
                <Form.Text className="text-muted m-auto">
                    <Link className="" to="/login" >Already have an account? Log in </Link>
                </Form.Text>
              </div>
              
            </Form>
          </div>
        </div>


      </div>

    </>

  )
}

export default Register