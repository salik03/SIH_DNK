import React from 'react';
import styled from 'styled-components';
import iconImage from './globe.svg'; 
import AazadiImg from './aazadi.png'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  background: rgba(165, 198, 237, 1);
  flex-grow: 1;
`;

const Header = styled.header`
  background: rgba(25, 98, 185, 1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  height: 97px;
`;

const Icon = styled.img`
  width: 81px; 
`;

const Aazadi = styled.img`
  width: 150px; 
`;

const TextContainer = styled.div`
  flex-grow: 1;
`;

const TextBody = styled.p`
  font-family: 'Kruti Dev 010', sans-serif;
  font-weight: 400;
  font-size: 1rem; 
  line-height: 16.72px;
  margin-left: 120px;
  color: rgba(255, 255, 255, 1);
`;

function App() {
  return (
    <Container>
      <Header>
        <Icon src={iconImage} alt="Icon" />
        <TextContainer>
          <TextBody>DakGhar Niryat Kendra - Customer Portal</TextBody>
          <TextBody>डाकघर निर्यात केंद्र - ग्राहक पोर्टल</TextBody>
        </TextContainer>
        <Aazadi src={AazadiImg} alt="Aazadi"/>
      </Header>
      <Main>
      </Main>
    </Container>
  );
}

export default App;
