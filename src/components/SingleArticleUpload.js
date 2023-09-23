import React, { useState } from 'react';

const SingleUpload = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [availabilityResult, setAvailabilityResult] = useState('');
  const [productType, setProductType] = useState('');
  const [grossWeight, setGrossWeight] = useState('');
  const [insured, setInsured] = useState(false);

  const getRandomAvailability = () => {
    const availabilities = ['Available', 'Unavailable'];
    const randomIndex = Math.floor(Math.random() * availabilities.length);
    return availabilities[randomIndex];
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleSearch = () => {
    console.log('Searching for country:', selectedCountry);
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
    console.log('Calculating...');
  };

  return (
    <div>
      <div>
        <label htmlFor="countryDropdown">Search Country:</label>
        <select id="countryDropdown" onChange={handleCountryChange} value={selectedCountry}>
          <option value="">Select a country</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
        </select>
        <button onClick={handleCheckAvailability}>Check</button>
      </div>

      <div>
        <label htmlFor="productTypeDropdown">Product Type:</label>
        <select id="productTypeDropdown" onChange={handleProductTypeChange} value={productType}>
          <option value="">Select a product type</option>
          <option value="International EMS Merchandise">International EMS Merchandise</option>
          <option value="International EMS Document">International EMS Document</option>
        </select>
      </div>

      <div>
        <label htmlFor="grossWeightInput">Gross Weight:</label>
        <input
          type="text"
          id="grossWeightInput"
          placeholder="Enter gross weight"
          value={grossWeight}
          onChange={handleGrossWeightChange}
        />
      </div>

      <div>
        <label>
          <input type="checkbox" checked={insured} onChange={handleInsuredChange} />
          Insured
        </label>
      </div>

      <button onClick={handleCalculate}>Calculate</button>

      {availabilityResult && (
        <div>
          <p>{availabilityResult}</p>
        </div>
      )}

      <form onSubmit={(e) => e.preventDefault()}>
      </form>
    </div>
  );
};

export default SingleUpload;
