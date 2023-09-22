// src/components/CommonTemplate.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;



const Main = styled.main`
  background: rgba(165, 198, 237, 1);
  flex-grow: 1;
`;

const CommonTemplate = () => {
  return (
    <Container>
      <Main>
        <input
        type='text'
        placeholder='hello'
        />
      </Main>
    </Container>
  );
};

export default CommonTemplate;
