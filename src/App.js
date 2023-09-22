import React from 'react';
import styled from 'styled-components';
import iconImage from './assets/globe.svg'; 
import AazadiImg from './assets/aazadi.png'
import LoginPage from './components/LoginForm';
import { Routes, Route } from 'react-router-dom';
import RegistrationPage from './components/RegistrationForm';
import BookingPage from './components/BookingForm';
import ArticleUpload from './components/ArticleListing';
import CommonTemplate from './components/CommonTemplate';


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
`;

const Icon = styled.img`
  width: 4vw; 
  padding-left: 1vw;
`;

const Aazadi = styled.img`
  margin-left: auto;
  width: 8vw; 
`;

const TextContainer = styled.div`
  display:flex;
  flex-direction:column;
`;

const TextBody = styled.div`
font-family: 'Kruti Dev 010', sans-serif;
font-size: 1.3rem; 
margin-left: 20px;
color: rgba(255, 255, 255, 1);
`;
const TextBod = styled.div`
margin-bottom:.9vh;
  font-family: 'League Spartan', Times;
  font-size: 1.3rem; 
  margin-left: 20px;
  color: rgba(255, 255, 255, 1);
`;

function App() {
  return (
    <Container>
      <Header>
        <Icon src={iconImage} alt="Icon" />
        <TextContainer>
          <TextBod >DakGhar Niryat Kendra - Customer Portal</TextBod>
          <TextBody >डाकघर निर्यात केंद्र - ग्राहक पोर्टल</TextBody> 
        </TextContainer>
            <Aazadi src={AazadiImg} alt="Aazadi"/>
      </Header>
      <Main>
        <RegistrationPage />

      </Main>
    </Container>
  );
}

export default App;
