import React from 'react';
import styled from 'styled-components';
import iconImage from './assets/globe.svg'; 
import AazadiImg from './assets/aazadi.png'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginForm';
import RegistrationPage from './components/RegistrationForm';
import BookingPage from './components/Dashboard';
import ConsignmentForm from './components/ConsignmentDetails';
import ContactForm from './components/SenderReciever';
import BulkUpload from './components/BulkUpload';
import SingleUpload from './components/SingleArticleUpload';
import PieceDetail from './components/PieceDetail';
import DeclarationForm from './components/Declaration';
import DashboardPage from './components/Dashboard';
import Reciept from './components/Reciept';
import SenderReciever from './components/SenderReciever';


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
    <Router>
      <Container>
        <Header>
          <Icon src={iconImage} alt="Icon" />
          <TextContainer>
            <TextBod>DakGhar Niryat Kendra - Customer Portal</TextBod>
            <TextBody>डाकघर निर्यात केंद्र - ग्राहक पोर्टल</TextBody>
          </TextContainer>
          <Aazadi src={AazadiImg} alt="Aazadi" />
        </Header>
        <Main>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/consignment" element={<ConsignmentForm />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/bulkUpload" element={<BulkUpload />} />
            <Route path="/singleUpload" element={<SingleUpload />} />
            <Route path="/reciept" element={<Reciept />} />
            <Route path="/sendrecieve" element={<SenderReciever />} />
            <Route path="/pieceDetail" element={<PieceDetail />} />
            <Route path="/declaration" element={<DeclarationForm />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </Main>
      </Container>
    </Router>
  );
}
export default App;
