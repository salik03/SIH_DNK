import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';

import leftImage from '../assets/left.png';
import indiaPost from '../assets/IndiaPost.png';
import RegistrationPage from './RegistrationForm';

const LoginPageContainer = styled.div`
  background-color: #A5C6ED;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const LeftImage = styled.img`
  max-width: 40%;
`;

const IndiaPost = styled.img`
  width: 40%;
  display: block;
  margin-top: 1.2rem;
  padding: 0;
`;

const FormContainer = styled.div`
  max-width: 40%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0 .89vw .89vw 0
`;

const LogIn = styled.div`
color: #1962b9;
margin-top:2rem ;
font-size: 3vw;
margin-bottom: 4rem;
`;

const CreateAccount = styled(NavLink)`
  margin-top: 1rem;
  font-size: 1.25rem;
  color: #1962b9;
  font-family: 'League Spartan';
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-decoration: none;
`;



const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:5000/login', {
        username,
        password,
      });

      if (response.status === 200) {
        alert('Successful login!');
      } else {
        alert('Login failed. Please check your username and password.');
      }
    } catch (error) {
      if (error.response.status === 401) {
        alert('Check your username and password.');
      } else {
        alert('An error occurred. Please try again.');
      }
    }
  };

  return (
      <LoginPageContainer>
        <ContentWrapper>
          <LeftImage src={leftImage} alt="Left Image" />
          <FormContainer>
            <IndiaPost src={indiaPost} alt="India Post" />
            <LogIn>Login</LogIn>
            <form style={{display:'flex',flexDirection:'column',alignItems:'center'}}onSubmit={handleSubmit}>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={handleUsernameChange}
                placeholder='username'
                style={{marginBottom:'1vh'}}
              />
              <input
                placeholder='password'
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
              />
              <NavLink to='/dashboard'>
              <button style = {{fontSize:'1vw', padding:'1vw',backgroundColor:'#1962b9',color:'#ffffff',border:'0',width:'100%',marginTop:'1.3vh'}} >Login</button>
              </NavLink>
            </form>
            <NavLink to='/registration'>
              <button style = {{fontSize:'.8vw',padding:'.8vw',backgroundColor:'#1962b9',color:'#ffffff',border:'0', marginTop:'3vh'}}>Create Account</button>
            </NavLink>
          </FormContainer>
        </ContentWrapper>
      </LoginPageContainer>
  );
};

export default LoginPage;
