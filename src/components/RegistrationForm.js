import React, { useState } from 'react';

const RegistrationPage = () => {
  const [otpEntered, setOtpEntered] = useState(false);

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

  const handleOtpChange = (event) => {
    setOtpEntered(event.target.value.length === 6);
  };

  return (
    <div style={containerStyle}>
      <div style={mainRectangleStyle}>
        <div style={innerRectangleStyle}>
          <form style={{ padding: '2rem' }}>
            <h2>Register</h2>
            <label style={{ fontSize: '1.6rem' }}>Email:</label>
            <input type="email" placeholder="Enter your email" style={{ fontSize: '1.6rem', width: '100%' }} required />
            <br />
            <label style={{ fontSize: '1.6rem' }}>Mobile No:</label>
            <input type="tel" placeholder="Enter your mobile number" style={{ fontSize: '1.6rem', width: '100%' }} required />
            <div style={{ marginTop: '1rem' }}>
              <label style={{ fontSize: '1.6rem' }}>Enter OTP:</label>
              {[...Array(6)].map((_, index) => (
                <input
                  key={index}
                  style={otpBoxStyle}
                  type="text"
                  maxLength="1"
                  onChange={handleOtpChange}
                />
              ))}
            </div>
            <button type="button" disabled={!otpEntered} style={{ fontSize: '1.6rem', marginTop: '1rem' }}>
              Next
            </button>
          </form>
          <p style={{ fontSize: '1.4rem', marginTop: '1rem' }}>Already have an account? Login</p>
        </div>
        <div style={innerRectangleStyle}></div>
        <div style={innerRectangleStyle}></div>
      </div>
    </div>
  );
};

export default RegistrationPage;
