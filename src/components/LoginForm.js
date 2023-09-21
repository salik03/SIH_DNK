import React from 'react';
import styled from 'styled-components';
import leftImage from  '../assets/left.png';


const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 612px;
  height: 753px;
  flex-shrink: 0;
  border-radius: 0rem 1.25rem 1.25rem 0rem;
  background-color: #CFDFF3;
`;

const LeftImage = styled.img`
  width: 100px;  /* Adjust the width to your preference */
  height: auto;  /* Maintain aspect ratio */
  margin-right: 20px;  /* Adjust the margin to your preference */
`;

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <div>
        <h2>Login</h2>
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" /><br />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" /><br />
          <button type="submit">Login</button>
        </form>
      </div>
    </LoginPageContainer>
  );
};

export default LoginPage;