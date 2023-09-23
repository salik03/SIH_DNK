import React, { useState } from 'react';

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
    <div className="consignment-form">
      <div>
        <label>Product Type:</label>
        <select value={productType} onChange={handleProductTypeChange}>
          <option value="">Select Product Type</option>
          <option value="International EMS Merchandise">International EMS Merchandise</option>
          <option value="International EMS Document">International EMS Document</option>
          <option value="International Regd. Small Packet">International Regd. Small Packet</option>
          <option value="International Air Parcel">International Air Parcel</option>
          <option value="International RegdL. Letter">International RegdL. Letter</option>
          <option value="International Tracked Packet Service">International Tracked Packet Service</option>
        </select>
      </div>

      <div>
        <label>Select Category of Item:</label>
        <select value={itemCategory} onChange={handleItemCategoryChange}>
          <option value="">Select Item Category</option>
          <option value="Commercial Sample">Commercial Sample</option>
          <option value="Returned Goods">Returned Goods</option>
          <option value="Sale of Goods">Sale of Goods</option>
          <option value="Others">Others</option>
        </select>
      </div>

      <div>
        <label>Instructions in case of Non-Delivery:</label>
        <select value={instructions} onChange={handleInstructionsChange}>
          <option value="">Select Instructions</option>
          <option value="Abandoned">Abandoned</option>
          <option value="RTS - Priority">RTS - Priority</option>
          <option value="RTS - Non Priority">RTS - Non Priority</option>
        </select>
      </div>

      <div>
        <label>No. of Types of items in Consignment:</label>
        <input type="number" value={numTypesOfItems} onChange={handleNumTypesOfItemsChange} />
      </div>

      <div>
        <label>Gross Weight:</label>
        <input type="number" value={grossWeight} onChange={handleGrossWeightChange} />
      </div>

      <div>
        <label>Total Value (INR):</label>
        <input type="number" value={totalValue} onChange={handleTotalValueChange} />
      </div>

      <div>
        <label>SDR Value (INR):</label>
        <input type="number" value={sdrValue} onChange={handleSdrValueChange} />
      </div>

      <div>
        <label>No. of Licenses/Invoices/Certificates:</label>
        <input type="text" value={numLicensesInvoices} onChange={handleNumLicensesInvoicesChange} />
      </div>

      <div>
        <label>Select PBE:</label>
        <select value={selectedPBE} onChange={handlePBEChange}>
          <option value="">Select PBE</option>
          <option value="PBE III(E-COMMERCE ITEMS)">PBE III(E-COMMERCE ITEMS)</option>
          <option value="PBE IV(NON E-COMMERCE ITEMS)">PBE IV(NON E-COMMERCE ITEMS)</option>
        </select>
      </div>

      <div>
        <label>Self Filling:</label>
        <select value={selfFilling} onChange={handleSelfFillingChange}>
          <option value="">Select Self Filling</option>
          <option value="YES">YES</option>
          <option value="NO">NO</option>
        </select>
      </div>

    </div>
  );
};

export default ConsignmentForm;
