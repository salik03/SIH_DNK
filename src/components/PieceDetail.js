import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import './productDetail.css'

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
    <div className='main'>
    <div className="centered-container">
      <h1 className="heading-title">Piece Details</h1>
    </div>
      <div className='line1'>
        
        <div className='box1'>
          <div className='topT'>Product Details</div>
          <div>
            <input
            placeholder='Quantity'
              type="text"
              value={formData.productDetails.quantity}
              onChange={(e) => handleInputChange('productDetails', 'quantity', e.target.value)}
            />
          </div>
          <div>
            <select
              value={formData.productDetails.unit}
              onChange={(e) => handleInputChange('productDetails', 'unit', e.target.value)}
            >
              <option value="" selected disabled>Select Unit</option>
              <option value="Grams">Grams</option>
              <option value="KG">KG</option>
              <option value="Litre">Litre</option>
              <option value="Metre">Metre</option>
              <option value="Pieces">Pieces</option>
              <option value="Carat">Carat</option>
            </select>
          </div>
          <div>
            <input
            placeholder='HSCODE'
              type="text"
              value={formData.productDetails.hscode}
              onChange={(e) => handleInputChange('productDetails', 'hscode', e.target.value)}
            />
          </div>
          <div>
            <input
            placeholder='Product Description'
              type="text"
              value={formData.productDetails.productDescription}
              onChange={(e) => handleInputChange('productDetails', 'productDescription', e.target.value)}
            />
          </div>
        </div>

        <div className='box2'>
          <div className='topT'>Details of Parcels</div>
          <div>
            <input
            placeholder='Invoice Number'
              type="text"
              value={formData.parcels.invoiceNumber}
              onChange={(e) => handleInputChange('parcels', 'invoiceNumber', e.target.value)}
            />
          </div>
          <div>
            <DatePicker
            placeholderText='InvoiceDate'
              selected={formData.parcels.invoiceDate}
              onChange={(date) => handleDateChange('parcels', 'invoiceDate', date)}
            />
          </div>
          <div>
            <input
            placeholder='Gross Weight (Gms)'
              type="text"
              value={formData.parcels.grossWeight}
              onChange={(e) => handleInputChange('parcels', 'grossWeight', e.target.value)}
            />
          </div>
          <div>
            <input
            placeholder='Net Weight (Gms)'
              type="text"
              value={formData.parcels.netWeight}
              onChange={(e) => handleInputChange('parcels', 'netWeight', e.target.value)}
            />
          </div>
        </div>

        <div className='box3'>
          <div className='topT'>Value under Section 14 Customs Act</div>
          <div>
            <input
            placeholder='FOB'
              type="text"
              value={formData.customs.fob}
              onChange={(e) => handleInputChange('customs', 'fob', e.target.value)}
            />
          </div>
          <div>
            <select
              value={formData.customs.currency}
              onChange={(e) => handleInputChange('customs', 'currency', e.target.value)}
            >
              <option value="" selected disabled>Select Currency</option>
              <option value="INR">INR</option>
              <option value="USD">USD</option>
              <option value="YEN">YEN</option>
            </select>
          </div>
          <div>
            <input
            placeholder='Value in Currency'
              type="text"
              value={formData.customs.valueInCurrency}
              onChange={(e) => handleInputChange('customs', 'valueInCurrency', e.target.value)}
            />
          </div>
          <div>
            <input
            placeholder='Exchange Rate'
              type="text"
              value={formData.customs.exchangeRate}
              onChange={(e) => handleInputChange('customs', 'exchangeRate', e.target.value)}
            />
          </div>
        </div>

        <div className='box4'>
          <div className='topT'>Customs Duties</div>
          <div>
            <input
            placeholder='Export Duty Rate'
              type="text"
              value={formData.duties.exportDutyRate}
              onChange={(e) => handleInputChange('duties', 'exportDutyRate', e.target.value)}
            />
          </div>
          <div>
            <input
            placeholder='Export Duty Amount'
              type="text"
              value={formData.duties.exportDutyAmount}
              onChange={(e) => handleInputChange('duties', 'exportDutyAmount', e.target.value)}
            />
          </div>
          <div>
            <input
            placeholder='Cess Rate'
              type="text"
              value={formData.duties.cessRate}
              onChange={(e) => handleInputChange('duties', 'cessRate', e.target.value)}
            />
          </div>
          <div>
            <input
            placeholder='Cess Amount'
              type="text"
              value={formData.duties.cessAmount}
              onChange={(e) => handleInputChange('duties', 'cessAmount', e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className='line2'>
        <div className='box5'>
          <div className='topT'>Tax/Commercial Invoice</div>
          <div>
            <input
            placeholder='CTH'
              type="text"
              value={formData.taxInvoice.cth}
              onChange={(e) => handleInputChange('taxInvoice', 'cth', e.target.value)}
            />
          </div>
          <div>
            <input
            placeholder='Invoice No'
              type="text"
              value={formData.taxInvoice.invoiceNo}
              onChange={(e) => handleInputChange('taxInvoice', 'invoiceNo', e.target.value)}
            />
          </div>
          <div>
            <DatePicker
            placeholderText='Invoice Date'
              selected={formData.taxInvoice.invoiceDate}
              onChange={(date) => handleDateChange('taxInvoice', 'invoiceDate', date)}
            />
          </div>
          <div>
            <input
            placeholder='SI No of item invoice'
              type="text"
              value={formData.taxInvoice.siNo}
              onChange={(e) => handleInputChange('taxInvoice', 'siNo', e.target.value)}
            />
          </div>
          <div>
            <input
            placeholder='Value'
              type="text"
              value={formData.taxInvoice.value}
              onChange={(e) => handleInputChange('taxInvoice', 'value', e.target.value)}
            />
          </div>
        </div>

        <div className='box6'>
          <div className='topT'>GST Details</div>
          
          <div>
            <select
              value={formData.gstDetails.lutBondDetails}
              onChange={(e) => handleInputChange('gstDetails', 'lutBondDetails', e.target.value)}
            >
              <option value="" selected disabled>LUT/Bond Details</option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
            </select>
          </div>
          <div>
            <input
            placeholder='IGST Rate'
              type="text"
              value={formData.gstDetails.igstRate}
              onChange={(e) => handleInputChange('gstDetails', 'igstRate', e.target.value)}
            />
          </div>
          <div>
            <input
            placeholder='IGST Amount'
              type="text"
              value={formData.gstDetails.igstAmount}
              onChange={(e) => handleInputChange('gstDetails', 'igstAmount', e.target.value)}
            />
          </div>
          <div>
            <input
            placeholder='Compensation Rate'
              type="text"
              value={formData.gstDetails.compensationRate}
              onChange={(e) => handleInputChange('gstDetails', 'compensationRate', e.target.value)}
            />
          </div>
          <div>
            <input
            placeholder='Compensation Amount'
              type="text"
              value={formData.gstDetails.compensationAmount}
              onChange={(e) => handleInputChange('gstDetails', 'compensationAmount', e.target.value)}
            />
          </div>
        </div>

        <div className='box7'>
        <div className='topT'>Ecommerce Particulars</div>
        <div>
          <input
          placeholder='Ecommerce'
            type="text"
            value={formData.ecommerceParticulars.ecommerce}
            onChange={(e) => handleInputChange('ecommerceParticulars', 'ecommerce', e.target.value)}
          />
        </div>
        <div>
          <input
          placeholder='URL'
            type="text"
            value={formData.ecommerceParticulars.url}
            onChange={(e) => handleInputChange('ecommerceParticulars', 'url', e.target.value)}
          />
        </div>
        <div>
          <input
          placeholder='Payment txn ID'
            type="text"
            value={formData.ecommerceParticulars.paymentTxnId}
            onChange={(e) => handleInputChange('ecommerceParticulars', 'paymentTxnId', e.target.value)}
          />
        </div>
        <div>
          <input
          placeholder='SKU No'
            type="text"
            value={formData.ecommerceParticulars.skuNo}
            onChange={(e) => handleInputChange('ecommerceParticulars', 'skuNo', e.target.value)}
          />
        </div>
        </div>
      </div>

      <button className='btn' onClick={handleAddPiece}>ADD PIECE</button>

      <div style={{margin:'1vw'}}>Added Pieces</div>
      {pieces.map((piece, index) => (
        <div key={index}>
          <pre>{JSON.stringify(piece, null, 2)}</pre>
        </div>
      ))}
      <div >
        <Link to="/declaration">
          <button className='btn' style={{margin:'1vw'}}>Next</button>
        </Link>
      </div>
    </div>
    
  );
};

export default PieceDetail;
