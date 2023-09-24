import React, { useState } from 'react';

const Reciept = () => {
  const [pdfContent, setPdfContent] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');

  const handleGeneratePdf = async () => {
    const data = {
      'INPUT_NAME': 'Salik',
        'INPUT_PHONENUMBER': '123456',
        'INPUT_COUNTRY': 'India',
        'INPUT_ADDRESS': '123 MAin St',
        'INPUT_RNAME': 'Avdhan',
        'INPUT_RPHONENUMBER': '76542676',
        'INPUT_RCOUNTRY': 'Rajasthan',
        'INPUT_RADDRESS': '4332 Main St',
        'INP_PT': 'Internation PArcel',
        'INP_AN': 'efwfaew',
        'INP_INS': '234234',
        'INP_VALUE': '2342342',
        'INP_WT': '23Kg',
        'INP_QUANTITY': '50000'
    };

    try {
      const response = await fetch('http://127.0.0.1:5000/generate_pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        setPdfContent(responseData.output_text);

        const blob = new Blob([pdfContent], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        setDownloadUrl(url);
      } else {
        console.error('Error generating PDF:', response.status);
      }
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div>
      <button onClick={handleGeneratePdf}>Generate PDF</button>
      {downloadUrl && (
        <div>
          <iframe title="Generated PDF" src={downloadUrl} width="100%" height="500px" />
          <a href={downloadUrl} download="generated.pdf">Download PDF</a>
        </div>
      )}
    </div>
  );
};

export default Reciept;
