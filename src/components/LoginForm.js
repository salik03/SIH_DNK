import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import leftImage from '../assets/left.png';
import indiaPost from '../assets/IndiaPost.png';

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
`;

const LogIn = styled.div`
  margin-top: 2rem;
  font-size: 2rem;
  margin-bottom: 4rem;
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
      if (error.response && error.response.status === 401) {
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
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <br />
            <button type="submit">Login</button>
          </form>
        </FormContainer>
      </ContentWrapper>
    </LoginPageContainer>
  );
};

export default LoginPage;
