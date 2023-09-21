import React from 'react';
import styled from 'styled-components';
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
max-width :40%;
`;
const IndiaPost = styled.img`
  width: 40%;
  display: block; /* Make the image a block-level element */
  margin-top: 1.2rem; /* Reset margin to remove any default spacing */
  padding: 0; /* Reset padding to remove any default spacing */
`;
  
  
const FormContainer = styled.div`
  max-width:40%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center vertically */
`;

const LogIn = styled.div`
margin-top:2rem ;
font-size: 2rem;
margin-bottom: 4rem;
`;

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <ContentWrapper>
        <LeftImage src={leftImage} alt="Left Image" />
          <FormContainer>
            <IndiaPost src={indiaPost} alt='India Post'/>
              <LogIn>
              Login
              </LogIn>
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
