import React, { useState } from 'react';
import { Link, Router } from 'react-router-dom';

const SingleUpload = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [availabilityResult, setAvailabilityResult] = useState('');
  const [productType, setProductType] = useState('');
  const [grossWeight, setGrossWeight] = useState('');
  const [insured, setInsured] = useState(false);

  const [calculateResult, setCalculateResult] = useState('');  

  const getRandomAvailability = () => {
    const availabilities = ['Available', 'Unavailable'];
    const randomIndex = Math.floor(Math.random() * availabilities.length);
    return availabilities[randomIndex];
  };
  
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleCheckAvailability = () => {
    if (selectedCountry) {
      const availability = getRandomAvailability();
      setAvailabilityResult(`Availability: ${availability}`);
    } else {
      setAvailabilityResult('');
    }
  };

  const handleProductTypeChange = (e) => {
    setProductType(e.target.value);
  };

  const handleGrossWeightChange = (e) => {
    setGrossWeight(e.target.value);
  };

  const handleInsuredChange = () => {
    setInsured(!insured);
  };

  const handleCalculate = () => {
    const randomAmount = Math.floor(Math.random() * 1000); // Adjust this range as needed
    setCalculateResult(randomAmount);
  };

  return (
    <div className="container">
      {/* First Rectangle */}
      <div className="rectangle">
        <h2>Check Availability</h2>
        <label htmlFor="countryDropdown">Select Country:</label>
        <select id="countryDropdown" onChange={handleCountryChange} value={selectedCountry}>
          <option value="">Select a country</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
        </select>
        <button onClick={handleCheckAvailability}>Check</button>
        {availabilityResult && (
          <div>
            <p>{availabilityResult}</p>
          </div>
        )}
      </div>
      

      {/* Second Rectangle */}
      <div className="rectangle">
        <h2>Tariff Calculator</h2>
        <label htmlFor="productTypeDropdown">Select Product:</label>
        <select id="productTypeDropdown" onChange={handleProductTypeChange} value={productType}>
          <option value="">Select a product type</option>
          <option value="International EMS Merchandise">International EMS Merchandise</option>
          <option value="International EMS Document">International EMS Document</option>
        </select>
        <label htmlFor="grossWeightInput">Gross Weight:</label>
        <input
          type="text"
          id="grossWeightInput"
          placeholder="Enter gross weight"
          value={grossWeight}
          onChange={handleGrossWeightChange}
        />
        <label>
          <input type="checkbox" checked={insured} onChange={handleInsuredChange} />
          Insured
        </label>
        <button onClick={handleCalculate}>Calculate</button>
        {calculateResult && (
          <div>
            <p>Total Amount: {calculateResult} ₹</p>
          </div>
        )}
      </div>
      <div >
        <Link to="/consignment">
          <button>Next</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleUpload;