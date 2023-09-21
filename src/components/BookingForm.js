import React, { useState } from 'react';

const CalendarDropdown = () => {
  return (
    <div>
      <p>Calendar UI Placeholder</p>
    </div>
  );
};

const BookArticleForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" />
      {/* Add more form fields as needed */}
      <button type="submit">Submit</button>
    </form>
  );
};

const BookingPage = () => {
  const [showBookArticleForm, setShowBookArticleForm] = useState(false);
  const [showMonthDropdown, setShowMonthDropdown] = useState(false);

  const bookArticleButtonStyle = {
    width: '15.8125rem',
    height: '5rem',
    flexShrink: 0,
    borderRadius: '2.5rem',
    background: 'rgba(255, 255, 255, 1)',
  };

  const selectMonthDropdownStyle = {
    width: '26.875rem',
    height: '5rem',
    flexShrink: 0,
    borderRadius: '2.5rem',
    background: 'rgba(255, 255, 255, 1)',
  };

  const handleBookArticleButtonClick = () => {
    setShowBookArticleForm(!showBookArticleForm);
    setShowMonthDropdown(false);
  };

  const handleSelectMonthButtonClick = () => {
    setShowMonthDropdown(!showMonthDropdown);
    setShowBookArticleForm(false);
  };

  return (
    <div>
      <button style={bookArticleButtonStyle} onClick={handleBookArticleButtonClick}>
        + Book Article Button
      </button>
      {showBookArticleForm && <BookArticleForm />}
      <button style={selectMonthDropdownStyle} onClick={handleSelectMonthButtonClick}>
        Select Month
      </button>
      {showMonthDropdown && <CalendarDropdown />}
    </div>
  );
};

export default BookingPage;
