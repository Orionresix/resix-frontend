import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [forgotPassword, setForgotPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleForgotPasswordClick = () => {
    setForgotPassword(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div>
      <h1 className='Welcome'>Log in to your account</h1>
      <h2 className='Welcome'>Welcome back! Please enter your details</h2>
      <form className='loginform'
        onSubmit={handleSubmit}>
        <div className='form_group'>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className='form_group'>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
            required
          />
        <div>

          <div className="flex-row">
            <div className="flex">
              <input type="checkbox" />
            </div>
            <div className="flex">
              <NavLink className="no-style">Forgot Password</NavLink>
            </div>
          </div>
        </div>
          <button className='Loginbutton' type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
