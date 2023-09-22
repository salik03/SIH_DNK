import React, { useState } from 'react';
import axios from 'axios';

const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  };

  const mainRectangleStyle = {
    width: '60rem',
    height: '40rem',
    flexShrink: 0,
    backgroundColor: '#1962B9',
    display: 'flex',
    padding: '2rem',
    boxSizing: 'border-box',
  };

  const innerRectangleStyle = {
    width: '30rem',
    height: '40rem',
    flexShrink: 0,
    borderRadius: '1.25rem',
    backgroundColor: '#E9F3FF',
    margin: '0 12px',
  };

  const otpBoxStyle = {
    width: '2rem',
    height: '3rem',
    borderRadius: '0.5rem',
    border: '1px solid #ccc',
    margin: '0 0.3rem',
    textAlign: 'center',
    fontSize: '1.8rem',
  };

  const handleRegister = () => {
    const userData = {
      username: email,
      mobile_number: mobileNumber,
      password: 'password123',
      email,
    };

    axios
      .post('http://127.0.0.1:5000/registration', userData)
      .then(response => {
        alert('Registration successful:', response.data.message);
      })
      .catch(error => {
        alert('Registration failed:', error.response.data.message);
      });
  };

  return (
    <div style={containerStyle}>
      <div style={mainRectangleStyle}>
        <div style={innerRectangleStyle}>
          <form style={{ padding: '2rem' }}>
            <h2>Register</h2>
            <label style={{ fontSize: '1.6rem' }}>Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              style={{ fontSize: '1.6rem', width: '100%' }}
              required
            />
            <br />
            <label style={{ fontSize: '1.6rem' }}>Mobile No:</label>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              style={{ fontSize: '1.6rem', width: '100%' }}
              required
            />
            <div style={{ marginTop: '1rem' }}>
              <label style={{ fontSize: '1.6rem' }}>Enter OTP:</label>
              {[...Array(6)].map((_, index) => (
                <input
                  key={index}
                  style={otpBoxStyle}
                  type="text"
                  maxLength="1"
                />
              ))}
            </div>
          </form>
          <p style={{ fontSize: '1.4rem', marginTop: '1rem', marginLeft: '4rem' }}>
            Already have an account? Login
          </p>
        </div>
        <div style={innerRectangleStyle}>
          <form style={{ padding: '2rem' }}>
            <label style={{ fontSize: '1.6rem' }}>Username:</label>
            <input
              type="email"
              placeholder="Enter your email"
              style={{ fontSize: '1.6rem', width: '100%' }}
              required
            />
            <br />
            <label style={{ fontSize: '1.6rem' }}>Enter Password:</label>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              style={{ fontSize: '1.6rem', width: '100%' }}
              required
            />
            <label style={{ fontSize: '1.6rem' }}>Re-enter Password:</label>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              style={{ fontSize: '1.6rem', width: '100%' }}
              required
            />
            <button type="button" style={{ fontSize: '1.6rem', marginTop: '1rem' }} onClick={handleRegister}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
