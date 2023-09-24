import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './cons.css'

const ConsignmentForm = () => {
  const [productType, setProductType] = useState('');
  const [itemCategory, setItemCategory] = useState('');
  const [instructions, setInstructions] = useState('');
  const [numTypesOfItems, setNumTypesOfItems] = useState('');
  const [grossWeight, setGrossWeight] = useState('');
  const [totalValue, setTotalValue] = useState('');
  const [sdrValue, setSdrValue] = useState('');
  const [numLicensesInvoices, setNumLicensesInvoices] = useState('');
  const [selectedPBE, setSelectedPBE] = useState('');
  const [selfFilling, setSelfFilling] = useState('');

  const handleProductTypeChange = (event) => {
    setProductType(event.target.value);
  };

  const handleItemCategoryChange = (event) => {
    setItemCategory(event.target.value);
  };

  const handleInstructionsChange = (event) => {
    setInstructions(event.target.value);
  };

  const handleNumTypesOfItemsChange = (event) => {
    setNumTypesOfItems(event.target.value);
  };

  const handleGrossWeightChange = (event) => {
    setGrossWeight(event.target.value);
  };

  const handleTotalValueChange = (event) => {
    setTotalValue(event.target.value);
  };

  const handleSdrValueChange = (event) => {
    setSdrValue(event.target.value);
  };

  const handleNumLicensesInvoicesChange = (event) => {
    setNumLicensesInvoices(event.target.value);
  };

  const handlePBEChange = (event) => {
    setSelectedPBE(event.target.value);
  };

  const handleSelfFillingChange = (event) => {
    setSelfFilling(event.target.value);
  };

  return (
    <div className="part">
      <div className='heading'>Consignment Details</div>
      <div>
      <div className='Line1'>
          <select className="dDown" value={productType} onChange={handleProductTypeChange}>
            <option value="" disabled hidden>Select Product Type</option>
            <option value="International EMS Merchandise">International EMS Merchandise</option>
            <option value="International EMS Document">International EMS Document</option>
            <option value="International Regd. Small Packet">International Regd. Small Packet</option>
            <option value="International Air Parcel">International Air Parcel</option>
            <option value="International RegdL. Letter">International RegdL. Letter</option>
            <option value="International Tracked Packet Service">International Tracked Packet Service</option>
          </select>

          <select className="dDown" value={itemCategory} onChange={handleItemCategoryChange}>
            <option value="" disabled hidden>Select Item Category</option>
            <option value="Commercial Sample">Commercial Sample</option>
            <option value="Returned Goods">Returned Goods</option>
            <option value="Sale of Goods">Sale of Goods</option>
            <option value="Others">Others</option>
          </select>
      </div>
      <div className='Line2'>
          <input className="dDown" type="number" placeholder="No of items in consignment" value={numTypesOfItems} onChange={handleNumTypesOfItemsChange} />

          <input className="dDown" placeholder='Gross Weight' type="number" value={grossWeight} onChange={handleGrossWeightChange} />

          <input className="dDown" placeholder='Total Value (INR)' type="number" value={totalValue} onChange={handleTotalValueChange} />

          <input className="dDown" placeholder='SDR Value (INR)' type="number" value={sdrValue} onChange={handleSdrValueChange} />
      </div>

      <div className='Line3'>
          <select className="dDown" value={instructions} onChange={handleInstructionsChange}>
            <option value="">Non-Delivery case Instructions </option>
            <option value="Abandoned">Abandoned</option>
            <option value="RTS - Priority">RTS - Priority</option>
            <option value="RTS - Non Priority">RTS - Non Priority</option>
          </select>

          <input className="dDown" placeholder='No. of Licenses/Invoices/Certificates' type="text" value={numLicensesInvoices} onChange={handleNumLicensesInvoicesChange} />

          <select className="dDown" value={selectedPBE} onChange={handlePBEChange}>
            <option value="" disabled hidden>Select PBE</option>
            <option value="PBE III(E-COMMERCE ITEMS)">PBE III(E-COMMERCE ITEMS)</option>
            <option value="PBE IV(NON E-COMMERCE ITEMS)">PBE IV(NON E-COMMERCE ITEMS)</option>
          </select>


    </div>
          <select className="dDown" value={selfFilling} onChange={handleSelfFillingChange}>
            <option value="" disabled hidden>Select Self Filling</option>
            <option value="YES">YES</option>
            <option value="NO">NO</option>
          </select>
     </div>
      <div >
        <Link to="/sendrecieve">
          <button className='btn'>Next</button>
        </Link>
      </div>
     </div>
  );
};

export default ConsignmentForm;
