import React, { useState } from 'react';

const BulkUpload = () => {
  const [jsonContent, setJsonContent] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const content = e.target.result;
      const jsonData = csvToJson(content);
      setJsonContent(jsonData);
    };

    reader.readAsText(file);
  };

  const csvToJson = (csv) => {
    const lines = csv.split('\n');
    const result = [];

    const headers = lines[0].split(',');

    for (let i = 1; i < lines.length; i++) {
      const data = lines[i].split(',');
      const obj = {};

      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = data[j];
      }

      result.push(obj);
    }

    return JSON.stringify(result, null, 2);
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      <div>
        <pre>{jsonContent}</pre>
      </div>
    </div>
  );
};

export default BulkUpload;
