import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReportTemplate from './ReportTemplate';
import React from 'react';

function Receipt() {
  const reportTemplateRef = useRef(null);

  const handlePrint = () => {
    // Hide both buttons when printing
    const printButton = document.querySelector('.button');
    const backButton = document.querySelector('.back-button');

    if (printButton) printButton.style.display = 'none';
    if (backButton) backButton.style.display = 'none';

    window.print();
  };

  useEffect(() => {
    window.onbeforeprint = () => {
      // Hide both buttons before printing
      const printButton = document.querySelector('.button');
      const backButton = document.querySelector('.back-button');

      if (printButton) printButton.style.display = 'none';
      if (backButton) backButton.style.display = 'none';
    };

    window.onafterprint = () => {
      // Show both buttons after printing
      const printButton = document.querySelector('.button');
      const backButton = document.querySelector('.back-button');

      if (printButton) printButton.style.display = 'block';
      if (backButton) backButton.style.display = 'block';
    };
  }, []);

  return (
    <div>
      <button className="button" onClick={handlePrint}>
        Print
      </button>
      <Link to="/dashboard" className='dropdown-item'>
        <button className="back-button">
          Done
        </button>
      </Link>
      <div ref={reportTemplateRef}>
        <ReportTemplate />
      </div>
    </div>
  );
}

export default Receipt;
