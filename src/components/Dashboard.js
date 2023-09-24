import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './booking.css';

const DashboardPage = () => {
  const [showBookArticleForm, setShowBookArticleForm] = useState(false);
  const [showMonthDropdown, setShowMonthDropdown] = useState(false);

  const handleBookArticleButtonClick = () => {
    setShowBookArticleForm(!showBookArticleForm);
  };

  const handleSelectMonthButtonClick = () => {
    setShowMonthDropdown(!showMonthDropdown);
  };

  return (
  <div>
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '2vw' }}>
      <button className='BookArt' onClick={handleBookArticleButtonClick}>
        + Book Article
      </button>
      <button className='selectMonth' onClick={handleSelectMonthButtonClick}>
        <div style={{ marginLeft: '1.1vw' }}>Select Month </div>
        <svg xmlns="src\assets\Dropdown.svg" width="3vw" height="3.5vw" viewBox="0 0 5vw 5vw" fill="none">
          {/* SVG path code */}
        </svg>
      </button>
    </div>
      {showBookArticleForm && (
        <div className='dropdown'>
          <Link to="/singleUpload" className='dropdown-item'>
            Single Upload
          </Link>
          <Link to="/bulkUpload" className='dropdown-item'>
            Bulk Upload
          </Link>
        </div>
        )}
    </div>
  );
};

export default DashboardPage;
