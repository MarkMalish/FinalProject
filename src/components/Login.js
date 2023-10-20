import React, { useState } from 'react';
import { Link as RouterLink} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: ''
  });
   async function login(event) {
    event.preventDefault();
    try {
       await axios.post("http://localhost:8085/api/v1/user/login", {
        email: email,
        password: password,
        }).then((res) =>
        {
         console.log(res.data);
        
         if (res.data.message == "Email not exits")
         {
           alert("Email not exits");
         }
         else if(res.data.message == "Login Success")
         {
            
            navigate('/home');
         }
          else
         {
            alert("Incorrect Email and Password not match");
         }
      }, fail => {
       console.error(fail); // Error!
});
    }

     catch (err) {
      alert(err);
     }
    }
  function handleEmailChange(event) {
    setEmail(event.target.value);
    validateEmail(event.target.value);
  }

  function handleAgreeChange(event) {
    setAgree(event.target.checked);
    validateAgree(event.target.checked);
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
  function togglePasswordVisibility() {
    setPasswordVisible(!passwordVisible);
  }
  function validateAgree(value) {
    if (!value) {
      setFormErrors({ ...formErrors, agree: 'Please agree to the terms and conditions.' });
    } else {
      setFormErrors({ ...formErrors, agree: '' });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Handle form submission
  }

  return (
    <div className="body_login">
      <div className="form-wrapper sign-in">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="input-group_login">
            <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required />
            <label htmlFor="email">Email</label>
          </div>
          <div className="error-message_login">{formErrors.email}</div>
          <div className="input-group_login">
          <input
        type={passwordVisible ? "text" : "password"}
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />
      <button className='button-85'onClick={togglePasswordVisibility}>
        {passwordVisible ? "Hide Password" : "Show Password"}
      </button>
            <label htmlFor="password">Password</label>
           
          </div>
          <div className="check_login">
            <label>
              <input type="checkbox" onChange={handleAgreeChange} checked={agree} required />
              I agree to the <a href="#">terms and conditions</a>.
            </label>
          </div>
          <div className="error-message_login">{formErrors.agree}</div>
          <button className="button_login" type="submit" name="submit-button" id="submit-button"onClick={login} disabled={!email || !password }>Sign In</button>
          <div className="SignUp-link">
            <p>Don't have an account? <RouterLink to="/registration" className="SignUpButton-link">Create an account</RouterLink></p>
          </div>
        </form>
      </div>
    </div>
  );
}