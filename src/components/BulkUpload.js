import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const BulkUpload = () => {
  const [csvContent, setCsvContent] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const content = e.target.result;
      setCsvContent(content);
    };

    reader.readAsText(file);
  };

  const getRandomColor = () => {
    const colors = ['red', 'lightgreen'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const renderCsvAsTable = () => {
    if (!csvContent) return null;

    const lines = csvContent.split('\n');

    return (
      <table>
        <tbody>
          {lines.map((line, index) => {
            const data = line.split(',');
            const rowColor = getRandomColor();
            return (
              <tr key={index} style={{ backgroundColor: rowColor }}>
                {data.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      <div>{renderCsvAsTable()}</div>
      <NavLink to='/declaration'>
              <button style = {{fontSize:'.8vw',padding:'.8vw',backgroundColor:'Green',color:'#ffffff',border:'0', marginTop:'3vh'}}>Save</button>
          </NavLink>
          <a 
        href="https://docs.google.com/spreadsheets/d/1J4bGxcogRDO49TfGW7bAR8bn6M70tW78/edit?usp=sharing&ouid=100733601089450328957&rtpof=true&sd=true"
        target="_blank"
        rel="noopener noreferrer"
        className="download-button"
      >
        Download Excel Template
      </a>
    </div>

  );
};

export default BulkUpload;
