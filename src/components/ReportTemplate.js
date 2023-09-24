import React from 'react';
import './Receipt.css'; 

const ReportTemplate = () => {
  return (
    <div className="receipt-container">
      <div className="receipt">
        <h2 className="receipt-title">ARTICLE BOOKED</h2>
        <div className="receipt-logo">
          <img src="https://logosdownload.com/logo/india-post-logo-big.png" alt="India Post Logo" />
        </div>
        <div className="receipt-barcode">
          <img src="https://pngimg.com/uploads/barcode/barcode_PNG62.png" alt="Barcode" />
        </div>
        <div className="receipt-details">
          <div className="section">
            <strong>SENDER'S DETAILS</strong>
            <table>
              <tbody>
                <tr>
                  <td>NAME</td>
                  <td>PHONE NUMBER</td>
                  <td>COUNTRY</td>
                  <td>ADDRESS</td>
                </tr>
                <tr>
                  <td>John Doe</td>
                  <td>1234567890</td>
                  <td>USA</td>
                  <td>123 Street, City, State</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="section">
            <strong>RECEIVER'S DETAILS</strong>
            <table>
              <tbody>
                <tr>
                  <td>NAME</td>
                  <td>PHONE NUMBER</td>
                  <td>COUNTRY</td>
                  <td>ADDRESS</td>
                </tr>
                <tr>
                  <td>Recipient Name</td>
                  <td>9876543210</td>
                  <td>Canada</td>
                  <td>456 Street, City, Province</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="section">
            <strong>ARTICLE DETAILS</strong>
            <table>
              <tbody>
                <tr>
                  <td>ARTICLE ID</td>
                  <td>PRODUCT TYPE</td>
                  <td>ARTICLE NAME</td>
                  <td>INSURED</td>
                  <td>VALUE(INR)</td>
                  <td>GROSS WT</td>
                  <td>QUANTITY</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Product Type</td>
                  <td>Product Name</td>
                  <td>Product Instructions</td>
                  <td>100</td>
                  <td>10 kg</td>
                  <td>2</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="section">
            <strong>PAYMENT DETAILS</strong>
            <table>
              <tbody>
                <tr>
                  <td>PAYMENT SESSION</td>
                  <td>PAYMENT GATEWAY</td>
                  <td>PAYMENT AMOUNT</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>PAYPAL</td>
                  <td>3000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportTemplate;
