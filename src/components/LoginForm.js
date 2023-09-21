import React from 'react';
import styled from 'styled-components';
import leftImage from '../assets/left.png';

const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  height: 753px;
  border-radius: 0rem 1.25rem 1.25rem 0rem;
  background-color: #CFDFF3;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const LeftImage = styled.img`
  width: 50%; 
  height: auto;
  max-height: 753px;
  margin-right: 20px; 
`;

const FormContainer = styled.div`
  width: 50%; 
  padding: 20px;
`;

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <ContentWrapper>
        <LeftImage src={leftImage} alt="Left Image" />
        <FormContainer>
          <h2>Login</h2>
          <form>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" /><br />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" /><br />
            <button type="submit">Login</button>
          </form>
        </FormContainer>
      </ContentWrapper>
    </LoginPageContainer>
  );
};

export default LoginPage;
