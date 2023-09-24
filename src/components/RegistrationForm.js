import React, { useState } from 'react';
import axios from 'axios';
import indiaPost from '../assets/IndiaPost.png';
import styled from 'styled-components';
import './register.css'
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const containerStyle = {
    fontFamily: 'League Spartan',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '90vh',
  };
  const IndiaPost = styled.img`
    width: 55%;
    display: inline-block;
    margin-top: .2rem;
    margin-bottom: 1.2rem;
    padding: 0;
  `;

  const mainRectangleStyle = {
    width: '100vw',
    backgroundColor: '#1962B9',
    display: 'flex',
    padding: '3vh',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const innerRectangleStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '35vw',
    height: '70vh',
    borderRadius: '1.25rem',
    backgroundColor: '#E9F3FF',
    margin: '0 12px',
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
          <form style={{ padding: '2rem',display:'flex',flexDirection:'column',position:'relative' }}>
            <div className = 'leftTop'>
              <IndiaPost src={indiaPost} alt="India Post" />
              <div>1/2</div>
            </div>
            <div style={{marginBottom: '1vw',fontSize: '2.3vw', color: '#1962B9', fontWeight: 'Regular'}}>Register</div>
            <div style={{display: 'flex', flexDirection:'column',justifyContent: 'center',alignItems: 'center'}}>
              <input
                type="tel"
                placeholder="email"
                className='loginInput'
                style={{color:'white'}}
                required
                />
              <input
                type="tel"
                style={{backgroundColor: '#BDCDE1'}}
                className='loginInput'
                placeholder="mobile number"
                required
              />
            </div>
              <label style={{marginBottom: '1vw',fontSize: '1.6vw', color: '#1962B9', fontWeight: 'Regular', alignSelf: 'center'}}>Enter OTP:</label>
            <div className='otpContainer'>
              {[...Array(6)].map((_, index) => (
                <input
                  className='otp'
                  key={index}
                  type="text"
                  maxLength="1"
                  />
              ))}
            </div>
            <p style={{ color: '#1962B9', fontSize: '1.2vw', alignSelf: 'center', marginTop: '15%' }}>
              Already have an account? <Link to="/login">Login</Link> 
              </p>
          </form>
        </div>
        <div style={innerRectangleStyle}>
          <div style={{height:'100%',width:'100%',display:'flex',flexDirection:'column'}}>
          <form style={{ padding: '2rem',display:'flex',flexDirection:'column',position:'relative' }}>
              {/* <label style={{ fontSize: '1.6rem' }}>Username:</label> */}
              <div style={{marginLeft: 'auto', fontSize: '1.5vw', fontWeight: 'bold', color: '#1962B9', marginTop: '1vw', marginRight: '1vw'}}>
                <div>2/2</div>
              </div>
              <div style={{marginTop:'32%',display: 'flex', flexDirection:'column',alignItems:'center'}}>
                
                <input
                  type="username"
                  placeholder="username"
                  className='loginInput2'
                  style={{color:'white'}}
                  required
                  />
                {/* <label style={{ fontSize: '1.6rem' }}>Enter Password:</label> */}
                <input
                  type="tel"
                  placeholder="password"
                  style={{backgroundColor: '#BDCDE1'}}
                  className='loginInput2'
                  required
                  />
                {/* <label style={{ fontSize: '1.6rem' }}>Re-enter Password:</label> */}
                <input
                  type="tel"
                  placeholder="re-enterpassword"
                  style={{backgroundColor: '#BDCDE1'}}
                  className='loginInput2'
                  required
                  />
                <button type="button" style={{maxWidth:'50%',border:0,padding:'4%',color:'white',fontFamily:'League Spartan',backgroundColor: '#1962B9', fontSize: '1.2vw', marginTop: '4%' }} onClick={handleRegister}>
                  REGISTER
                </button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
