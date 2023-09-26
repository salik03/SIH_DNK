import React, { useState, useEffect  } from 'react';
import { Link, Router } from 'react-router-dom';
import './SingleUpload.css'

const SingleUpload = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [availabilityResult, setAvailabilityResult] = useState('');
  const [productType, setProductType] = useState('');
  const [grossWeight, setGrossWeight] = useState('');
  const [insured, setInsured] = useState(false);
  const [nextButtonEnabled, setNextButtonEnabled] = useState(false);

  const [calculateResult, setCalculateResult] = useState(null);  
  useEffect(() => {
    setNextButtonEnabled(availabilityResult === 'Availability: Available');
  }, [availabilityResult]);

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
    if (availabilityResult === 'Availability: Available') {
      const randomAmount = Math.floor(Math.random() * 1000); 
      setCalculateResult(randomAmount);
    }
  };

  return (
    <div className="container">
      <div className="rectangle">
        <h2>Check Availability</h2>
        <label htmlFor="countryDropdown">Select Country:</label>
        <select id="countryDropdown" onChange={handleCountryChange} value={selectedCountry}>
          <option value="">Select a country</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Australia">Australia</option>
          <option value="Germany">Germany</option>
          <option value="France">France</option>
          <option value="Japan">Japan</option>
          <option value="Italy">Italy</option>
          <option value="Spain">Spain</option>
          <option value="Brazil">Brazil</option>
          <option value="Mexico">Mexico</option>
          <option value="South Korea">South Korea</option>
          <option value="Russia">Russia</option>
          <option value="China">China</option>
          <option value="South Africa">South Africa</option>
          <option value="Argentina">Argentina</option>
          <option value="Nigeria">Nigeria</option>
          <option value="Egypt">Egypt</option>
          <option value="Greece">Greece</option>
          <option value="Thailand">Thailand</option>
          <option value="Sweden">Sweden</option>
        </select>
        <button onClick={handleCheckAvailability}>Check</button>
        {availabilityResult && (
          <div>
            <p>{availabilityResult}</p>
          </div>
        )}
      </div>
      

      <div className="rectangle">
        <h2>Tariff Calculator</h2>
        <label htmlFor="productTypeDropdown">Select Product:</label>
        <select id="productTypeDropdown" onChange={handleProductTypeChange} value={productType}>
          <option value="">Select a product type</option>
          <option value="International EMS Merchandise">International EMS Merchandise</option>
          <option value="International EMS Document">International EMS Document</option>
          <option value="International Regd. Small Packet">International Regd. Small Packet</option>
          <option value="International Air Parcel">International Air Parcel</option>
          <option value="International RegdL. Letter">International RegdL. Letter</option>
          <option value="International Tracked Packet Service">International Tracked Packet Service</option>
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
        <Link to="/consignment" className=''>
          <button disabled={!nextButtonEnabled}>Next</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleUpload;