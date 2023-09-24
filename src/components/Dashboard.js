import React, { useState } from 'react';
import './booking.css'


const DashboardPage = () => {
  const [showBookArticleForm, setShowBookArticleForm] = useState(false);
  const [showMonthDropdown, setShowMonthDropdown] = useState(false);

  const handleBookArticleButtonClick = () => {
  };

  const handleSelectMonthButtonClick = () => {
  };

  return (
    <div style={{display:'flex',justifyContent:'space-between', padding:'2vw'}}>
      <button className='BookArt'>
        + Book Article 
      </button>
      <button className='selectMonth' >
        <div style={{marginLeft:'1.1vw'}}>Select Month </div>
        <svg xmlns="src\assets\Dropdown.svg" width="3vw" height="3.5vw" viewBox="0 0 5vw 5vw" fill="none">
          <path d="M25.245 42.1542C34.1439 42.1542 41.489 34.6622 41.489 25.6013C41.489 16.5404 34.1282 9.04834 25.2293 9.04834C16.3461 9.04834 9.0166 16.5404 9.0166 25.6013C9.0166 34.6622 16.3617 42.1542 25.245 42.1542ZM25.245 38.8564C18.0411 38.8564 12.2811 32.9493 12.2811 25.6013C12.2811 18.2533 18.0411 12.3621 25.2293 12.3621C32.4332 12.3621 38.2245 18.2533 38.2402 25.6013C38.2559 32.9493 32.4489 38.8564 25.245 38.8564ZM30.6911 20.8627H19.7989C19.0299 20.8627 18.7003 21.7752 19.1083 22.4796L24.3975 31.6365C24.7741 32.2929 25.7158 32.3249 26.1082 31.6365L31.3659 22.4796C31.8054 21.7272 31.4444 20.8627 30.6911 20.8627Z" fill='#1962B9'/>

        </svg>
      </button>
    </div>
  );
};

export default DashboardPage;
