import React, { useState } from 'react';
import { Link as RouterLink} from "react-router-dom";

import axios from 'axios';


export default function Registration() {
   
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [agree, setAgree] = useState(false);
    const [formErrors, setFormErrors] = useState({
      email: '',
      password: '',
      passwordConfirm: '',
      agree: ''
    });
    
    function handleNameChange(event) {
      setName(event.target.value);
    }
  
    function handleSurnameChange(event) {
      setSurname(event.target.value);
    }
  
    function handleUsernameChange(event) {
      setUsername(event.target.value);
    }
  
    function handleEmailChange(event) {
      const value = event.target.value;
      setEmail(value);
      validateEmail(value);
    }
  
    function handlePasswordChange(event) {
      setPassword(event.target.value);
      validatePasswordConfirm(passwordConfirm, event.target.value);
    }
  
    function handlePasswordConfirmChange(event) {
      setPasswordConfirm(event.target.value);
      validatePasswordConfirm(event.target.value, password);
    }
  
    function handleAgreeChange(event) {
      const value = event.target.checked;
      setAgree(value);
      validateAgree(value);
    }
  
    function validateEmail(value) {
      if (value.trim() === '') {
        setFormErrors({ ...formErrors, email: 'Email address is required.' });
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        setFormErrors({ ...formErrors, email: 'Please provide a valid email address.' });
      } else if (value.trim().endsWith('.co')) {
        setFormErrors({ ...formErrors, email: 'Please provide an email address not ending with ".co".' });
      } else {
        setFormErrors({ ...formErrors, email: '' });
      }
    }
  
    function validatePasswordConfirm(value1, value2) {
      if (value1 !== value2) {
        setFormErrors({ ...formErrors, passwordConfirm: 'Passwords do not match.' });
      } else {
        setFormErrors({ ...formErrors, passwordConfirm: '' });
      }
    }
  
    function validateAgree(value) {
      if (!value) {
        setFormErrors({ ...formErrors, agree: 'Please agree to the terms and conditions.' });
      } else {
        setFormErrors({ ...formErrors, agree: '' });
      }
    }
  
    function handleSubmit(event) 
    {
      event.preventDefault();
      // Handle form submission
    }
    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8085/api/v1/user/save", {
            
            name: name,
            surname : surname,
            username: username,
            email: email,
            password: password,
            
          });
          alert("Registration Success");
          
          setName("");
          setSurname("");
          setEmail("");
          setUsername("");
          setPassword("");
        } catch (err) {
          alert("User registration failed");
        }
      }
      
      return (
        <div className="body_login">
          <div className="form-wrapper sign-in">
            <form onSubmit={handleSubmit}>
              <h2>Registration</h2>
              <div className="input-group_login">
                <input type="text" id="name" name="name" value={name} 
                onChange={(event)=>
                  
                {
                 
                setName(event.target.value);
                }
                } required />
                <label htmlFor="name">Name</label>
              </div>
      
              <div className="input-group_login">
                    <input type="text" id="surname" name="surname" value={surname} onChange={(event)=>
                {
                setSurname(event.target.value);
                
                }
                
                } required />
                <label htmlFor="surname">Surname</label>
              </div>
              <div className="input-group_login">
                    <input type="text" id="username" name="username" value={username} onChange={(event)=>
                {
                setUsername(event.target.value);
                }
                } required />
                <label htmlFor="username">Username</label>
              </div>
      
              <div className="input-group_login">
                    <input type="email" id="email" name="email" value={email}onChange={handleEmailChange}
                 required />
                <label htmlFor="email">Email</label>
              </div>
              <div className="error-message_login">{formErrors.email}</div>
      
              <div className="input-group_login">
                    <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} required />
                <label htmlFor="password">Password</label>
              </div>
      
              <div className="input-group_login">
                    <input type="password" id="password-confirm" name="password-confirm" onChange={handlePasswordConfirmChange} required />
                <label htmlFor="password-confirm">Repeat Password</label>
              </div>
      
              <div className="check_login">
                <label>
                  <input type="checkbox" onChange={handleAgreeChange} checked={agree} required />
                 
              I agree to the <a href="#">terms and conditions</a>.
                </label>
              </div>
              <div className="error-message_login">{formErrors.agree}</div>
      
              <button className="button_login" type="submit" name="submit-button" id="submit-button" onClick={save} disabled={!email || !password || !passwordConfirm || !agree || formErrors.email || formErrors.agree}>Register</button>
      
              <div className="SignUp-link">
                <p className='SignUp-link'>Already have an account? <RouterLink to="/login" className="login-link">Log In</RouterLink></p>
              </div>
            </form>
          </div>
        </div>
      );
}

