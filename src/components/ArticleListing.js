import React, { useState } from 'react';

const ArticleUpload = () => {
  const [formData, setFormData] = useState([]);
  const [csvHeaders, setCSVHeaders] = useState([]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedFormData = formData.map(async (data) => {
        const response = await fetch('http://127.0.0.1:5000/upload', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();
        return { ...data, response: result.message };
      });

      const updatedDataWithResponse = await Promise.all(updatedFormData);
      setFormData(updatedDataWithResponse);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      <form onSubmit={handleSubmit}>
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
