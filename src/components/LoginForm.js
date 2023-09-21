// src/components/LoginPage.js
import React from 'react';
import CommonTemplate from './CommonTemplate';

const LoginPage = () => {
  return (
    <CommonTemplate>
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
    </CommonTemplate>
  );
};

export default LoginPage;
