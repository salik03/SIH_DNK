import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';

const PieceDetail = () => {
  const [pieces, setPieces] = useState([]);
  const [formData, setFormData] = useState({
    productDetails: {
      quantity: '',
      unit: '',
      hscode: '',
      productDescription: ''
    },
    parcels: {
      invoiceNumber: '',
      invoiceDate: null,
      grossWeight: '',
      netWeight: ''
    },
    customs: {
      fob: '',
      currency: '',
      valueInCurrency: '',
      exchangeRate: ''
    },
    duties: {
      exportDutyRate: '',
      exportDutyAmount: '',
      cessRate: '',
      cessAmount: ''
    },
    taxInvoice: {
      cth: '',
      invoiceNo: '',
      invoiceDate: null,
      siNo: '',
      value: ''
    },
    gstDetails: {
      lutBondDetails: '',
      igstRate: '',
      igstAmount: '',
      compensationRate: '',
      compensationAmount: ''
    },
    ecommerceParticulars: {
      ecommerce: '',
      url: '',
      paymentTxnId: '',
      skuNo: ''
    }
  });

  const handleDateChange = (section, field, date) => {
    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        [field]: date
      }
    });
  };

  const handleInputChange = (section, field, value) => {
    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        [field]: value
      }
    });
  };

  const handleAddPiece = () => {
    const pieceData = { ...formData };
    setPieces([...pieces, pieceData]);
  };

  return (
    <div>
      <div>
        <h2>Piece Details Form</h2>
        <div>
          <label>Quantity:</label>
          <input
            type="text"
            value={formData.productDetails.quantity}
            onChange={(e) => handleInputChange('productDetails', 'quantity', e.target.value)}
          />
        </div>
        <div>
          <label>Unit:</label>
          <select
            value={formData.productDetails.unit}
            onChange={(e) => handleInputChange('productDetails', 'unit', e.target.value)}
          >
            <option value="">Select Unit</option>
            <option value="Grams">Grams</option>
            <option value="KG">KG</option>
            <option value="Litre">Litre</option>
            <option value="Metre">Metre</option>
            <option value="Pieces">Pieces</option>
            <option value="Carat">Carat</option>
          </select>
        </div>
        <div>
          <label>HSCODE</label>
          <input
            type="text"
            value={formData.productDetails.hscode}
            onChange={(e) => handleInputChange('productDetails', 'hscode', e.target.value)}
          />
        </div>
        <div>
          <label>Product Description</label>
          <input
            type="text"
            value={formData.productDetails.productDescription}
            onChange={(e) => handleInputChange('productDetails', 'productDescription', e.target.value)}
          />
        </div>
      </div>

      <div>
        <h2>Details of Parcels</h2>
        <div>
          <label>Invoice Number</label>
          <input
            type="text"
            value={formData.parcels.invoiceNumber}
            onChange={(e) => handleInputChange('parcels', 'invoiceNumber', e.target.value)}
          />
        </div>
        <div>
          <label>Invoice Date</label>
          <DatePicker
            selected={formData.parcels.invoiceDate}
            onChange={(date) => handleDateChange('parcels', 'invoiceDate', date)}
          />
        </div>
        <div>
          <label>Gross Weight (Gms)</label>
          <input
            type="text"
            value={formData.parcels.grossWeight}
            onChange={(e) => handleInputChange('parcels', 'grossWeight', e.target.value)}
          />
        </div>
        <div>
          <label>Net Weight (Gms)</label>
          <input
            type="text"
            value={formData.parcels.netWeight}
            onChange={(e) => handleInputChange('parcels', 'netWeight', e.target.value)}
          />
        </div>
      </div>

      <div>
        <h2>Value under Section 14 Customs Act</h2>
        <div>
          <label>FOB</label>
          <input
            type="text"
            value={formData.customs.fob}
            onChange={(e) => handleInputChange('customs', 'fob', e.target.value)}
          />
        </div>
        <div>
          <label>Currency:</label>
          <select
            value={formData.customs.currency}
            onChange={(e) => handleInputChange('customs', 'currency', e.target.value)}
          >
            <option value="">Select Currency</option>
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="YEN">YEN</option>
          </select>
        </div>
        <div>
          <label>Value in Currency</label>
          <input
            type="text"
            value={formData.customs.valueInCurrency}
            onChange={(e) => handleInputChange('customs', 'valueInCurrency', e.target.value)}
          />
        </div>
        <div>
          <label>Exchange Rate</label>
          <input
            type="text"
            value={formData.customs.exchangeRate}
            onChange={(e) => handleInputChange('customs', 'exchangeRate', e.target.value)}
          />
        </div>
      </div>

      <div>
        <h2>Customs Duties</h2>
        <div>
          <label>Export Duty Rate</label>
          <input
            type="text"
            value={formData.duties.exportDutyRate}
            onChange={(e) => handleInputChange('duties', 'exportDutyRate', e.target.value)}
          />
        </div>
        <div>
          <label>Export Duty Amount</label>
          <input
            type="text"
            value={formData.duties.exportDutyAmount}
            onChange={(e) => handleInputChange('duties', 'exportDutyAmount', e.target.value)}
          />
        </div>
        <div>
          <label>Cess Rate</label>
          <input
            type="text"
            value={formData.duties.cessRate}
            onChange={(e) => handleInputChange('duties', 'cessRate', e.target.value)}
          />
        </div>
        <div>
          <label>Cess Amount</label>
          <input
            type="text"
            value={formData.duties.cessAmount}
            onChange={(e) => handleInputChange('duties', 'cessAmount', e.target.value)}
          />
        </div>
      </div>

      <div>
        <h2>Tax/Commercial Invoice</h2>
        <div>
          <label>CTH</label>
          <input
            type="text"
            value={formData.taxInvoice.cth}
            onChange={(e) => handleInputChange('taxInvoice', 'cth', e.target.value)}
          />
        </div>
        <div>
          <label>Invoice No</label>
          <input
            type="text"
            value={formData.taxInvoice.invoiceNo}
            onChange={(e) => handleInputChange('taxInvoice', 'invoiceNo', e.target.value)}
          />
        </div>
        <div>
          <label>Invoice Date</label>
          <DatePicker
            selected={formData.taxInvoice.invoiceDate}
            onChange={(date) => handleDateChange('taxInvoice', 'invoiceDate', date)}
          />
        </div>
        <div>
          <label>SI No of item invoice</label>
          <input
            type="text"
            value={formData.taxInvoice.siNo}
            onChange={(e) => handleInputChange('taxInvoice', 'siNo', e.target.value)}
          />
        </div>
        <div>
          <label>Value</label>
          <input
            type="text"
            value={formData.taxInvoice.value}
            onChange={(e) => handleInputChange('taxInvoice', 'value', e.target.value)}
          />
        </div>
      </div>

      <div>
        <h2>GST Details</h2>
        
        <div>
          <label>LUT/Bond Details:</label>
          <select
            value={formData.gstDetails.lutBondDetails}
            onChange={(e) => handleInputChange('gstDetails', 'lutBondDetails', e.target.value)}
          >
            <option value="">Select</option>
            <option value="YES">YES</option>
            <option value="NO">NO</option>
          </select>
        </div>
        <div>
          <label>IGST Rate</label>
          <input
            type="text"
            value={formData.gstDetails.igstRate}
            onChange={(e) => handleInputChange('gstDetails', 'igstRate', e.target.value)}
          />
        </div>
        <div>
          <label>IGST Amount</label>
          <input
            type="text"
            value={formData.gstDetails.igstAmount}
            onChange={(e) => handleInputChange('gstDetails', 'igstAmount', e.target.value)}
          />
        </div>
        <div>
          <label>Compensation Rate</label>
          <input
            type="text"
            value={formData.gstDetails.compensationRate}
            onChange={(e) => handleInputChange('gstDetails', 'compensationRate', e.target.value)}
          />
        </div>
        <div>
          <label>Compensation Amount</label>
          <input
            type="text"
            value={formData.gstDetails.compensationAmount}
            onChange={(e) => handleInputChange('gstDetails', 'compensationAmount', e.target.value)}
          />
        </div>
      </div>

      <div>
        <h2>Ecommerce Particulars</h2>
        <div>
          <label>Ecommerce</label>
          <input
            type="text"
            value={formData.ecommerceParticulars.ecommerce}
            onChange={(e) => handleInputChange('ecommerceParticulars', 'ecommerce', e.target.value)}
          />
        </div>
        <div>
          <label>URL</label>
          <input
            type="text"
            value={formData.ecommerceParticulars.url}
            onChange={(e) => handleInputChange('ecommerceParticulars', 'url', e.target.value)}
          />
        </div>
        <div>
          <label>Payment txn ID</label>
          <input
            type="text"
            value={formData.ecommerceParticulars.paymentTxnId}
            onChange={(e) => handleInputChange('ecommerceParticulars', 'paymentTxnId', e.target.value)}
          />
        </div>
        <div>
          <label>SKU No</label>
          <input
            type="text"
            value={formData.ecommerceParticulars.skuNo}
            onChange={(e) => handleInputChange('ecommerceParticulars', 'skuNo', e.target.value)}
          />
        </div>
      </div>

      <button onClick={handleAddPiece}>ADD PIECE</button>

      <h2>Added Pieces</h2>
      {pieces.map((piece, index) => (
        <div key={index}>
          <pre>{JSON.stringify(piece, null, 2)}</pre>
        </div>
      ))}
      <div >
        <Link to="/declaration">
          <button>Next</button>
        </Link>
      </div>
    </div>
    
  );
};

export default PieceDetail;
