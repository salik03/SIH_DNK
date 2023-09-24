import React, { useState, useEffect } from 'react';
import './DeclarationForm.css'; 
import { Link } from 'react-router-dom';

const DeclarationForm = () => {
  const [checkboxes, setCheckboxes] = useState({
    isExpertPromotionChecked: false,
    isZeroRateExportsChecked: false,
    isGoodsExemptChecked: false,
    isContentTrueChecked: false
  });

  const handleCheckboxChange = (checkbox) => {
    setCheckboxes({
      ...checkboxes,
      [checkbox]: !checkboxes[checkbox]
    });
  };

  useEffect(() => {
    // Enable or disable the submit button based on checkbox states
    const submitButton = document.getElementById('submitBtn');
    const areAllChecked = Object.values(checkboxes).every((isChecked) => isChecked);
    submitButton.disabled = !areAllChecked;
  }, [checkboxes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted!');
  };

  return (
    <div className="declaration-container">
      <div className="declaration-heading">Declaration</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              type="checkbox"
              checked={checkboxes.isExpertPromotionChecked}
              onChange={() => handleCheckboxChange('isExpertPromotionChecked')}
            />
            We declare that we intend to claim rewards under expert promotion Scheme
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={checkboxes.isZeroRateExportsChecked}
              onChange={() => handleCheckboxChange('isZeroRateExportsChecked')}
            />
            We declare that we intend to zero rate our exports under Section 16 of IGST Act
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={checkboxes.isGoodsExemptChecked}
              onChange={() => handleCheckboxChange('isGoodsExemptChecked')}
            />
            We declare that the goods are exempted under CGST/SGST/UTGST/IGST Acts
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={checkboxes.isContentTrueChecked}
              onChange={() => handleCheckboxChange('isContentTrueChecked')}
            />
            We hereby declare that the contents of this postal bill of export are true and correct in every respect
          </label>
        </div>
        <button  id="submitBtn" type="submit" disabled> <Link to="/reciept">
          Submit
          </Link>
        </button>
      </form>
    </div>
  );
};

export default DeclarationForm;
