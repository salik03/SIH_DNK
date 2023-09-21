// src/components/CommonTemplate.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  background: rgba(25, 98, 185, 1);
  height: 97px;
`;

const Main = styled.main`
  background: rgba(165, 198, 237, 1);
  flex-grow: 1;
`;

const CommonTemplate = ({ children }) => {
  return (
    <Container>
      <Header>
        {/* Your header content goes here */}
      </Header>
      <Main>
        {children}
      </Main>
    </Container>
  );
};

export default CommonTemplate;
