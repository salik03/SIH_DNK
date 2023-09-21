import React from 'react';

const RegistrationPage = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '85vh', 
  };

  const mainRectangleStyle = {
    width: '160rem',
    height: '47.0625rem',
    flexShrink: 0,
    backgroundColor: '#1962B9',
    display: 'flex',
    padding: '2rem',
    boxSizing: 'border-box',
  };

  const innerRectangleStyle = {
    width: '37.6875rem',
    height: '42.75rem',
    flexShrink: 0,
    borderRadius: '1.25rem',
    backgroundColor: '#E9F3FF',
    margin: "0 12px"
  };

  return (
    <div style={containerStyle}>
      <div style={mainRectangleStyle}>
        <div style={innerRectangleStyle}>
        </div>
        <div style={innerRectangleStyle}>
        </div>
        <div style={innerRectangleStyle}>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
