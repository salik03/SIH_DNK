import React, { useState } from 'react';

const ArticleUpload = () => {
  const [formData, setFormData] = useState([]);
  const [csvHeaders, setCSVHeaders] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(''); // New state for selected country

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const csvData = event.target.result;
      const [header, ...rows] = csvData.split('\n');
      const headers = header.split(',');

      const data = rows.map((row) => {
        const values = row.split(',');
        return headers.reduce((acc, header, index) => {
          acc[header] = values[index];
          return acc;
        }, {});
      });

      setFormData(data);
      setCSVHeaders(headers);
    };

    reader.readAsText(file);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedFormData = [...formData];
    updatedFormData[index][name] = value;
    setFormData(updatedFormData);
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleSearch = () => {
    // Add your search logic based on the selected country
    console.log('Searching for country:', selectedCountry);
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      <div>
        <label htmlFor="countryDropdown">Search Country:</label>
        <select id="countryDropdown" onChange={handleCountryChange} value={selectedCountry}>
          <option value="">Select a country</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          {/* Add more country options as needed */}
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>
      <form onSubmit>
        {formData.map((data, index) => (
          <div key={index}>
            {csvHeaders.map((header) => (
              <React.Fragment key={header}>
                <input
                  type="text"
                  name={header}
                  placeholder={header}
                  value={data[header] || ''}
                  onChange={(e) => handleChange(e, index)}
                />
                <span>{header === 'response' ? data[header] : ''}</span>
              </React.Fragment>
            ))}
            <br />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ArticleUpload;
