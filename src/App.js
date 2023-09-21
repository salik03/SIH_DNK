import React from 'react';
import styled from 'styled-components';
import iconImage from './globe.svg'; 
import AazadiImg from './75 years 2.png'

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
  height: 97px;
`;

const Icon = styled.img`
  width: 81px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Aazadi = styled.img`
  width: 149.56px;
  height: 84.13px;
  position: absolute;
  top: 6px;
  left: 1724px;
`;

const TextBody = styled.p`
  font-family: 'Kruti Dev 010', sans-serif;
  font-weight: 400;
  font-size: 35px;
  line-height: 36.72px;
  color: rgba(255, 255, 255, 1);
`;

function App() {
  return (
    <Container>
      <Header>
      <Icon src={iconImage} alt="Icon" />
      <Icon src={Aazadi} alt="Aazadi"/>
      <TextBody>Your Text Here</TextBody>
      </Header>
      <Main>
      </Main>
    </Container>
  );
}




export default App;
