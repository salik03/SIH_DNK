import React, { useState } from 'react';
import './sendRecieve.css'
import { Link } from 'react-router-dom';

const SenderReciever = () => {
  const addressBookData = [
    {
      name: 'Salik Uddin',
      companyName: 'ABC Inc.',
      address1: '123 Main St',
      address2: 'Apt 101',
      city: 'Lucknow',
      zipCode: '226016',
      country: 'Ind',
      contactNumber: '123-456-7890',
      email: 'email@example.com'
    }
  ];

  const [sendFormData, setSendFormData] = useState({
    type: '',
    name: '',
    companyName: '',
    address1: '',
    address2: '',
    city: '',
    zipCode: '',
    country: '',
    contactNumber: '',
    email: ''
  });

  const [receiveFormData, setReceiveFormData] = useState({
    type: '',
    name: '',
    companyName: '',
    address1: '',
    address2: '',
    city: '',
    zipCode: '',
    country: '',
    contactNumber: '',
    email: ''
  });

  const handleSendFormChange = (e) => {
    const { name, value } = e.target;
    setSendFormData({ ...sendFormData, [name]: value });
  };

  const handleReceiveFormChange = (e) => {
    const { name, value } = e.target;
    setReceiveFormData({ ...receiveFormData, [name]: value });
  };

  const handleAddressBookSelect = (selectedData, formType) => {
    if (formType === 'send') {
      setSendFormData({
        ...sendFormData,
        ...selectedData
      });
    } else if (formType === 'receive') {
      setReceiveFormData({
        ...receiveFormData,
        ...selectedData
      });
    }
  };

  return (
<div className='mPart'>
  <div className= "send">
    <form>
      <div className='tOP' >Send</div>
        <div>
          <input className="inpF" placeholder="Type" type="text" name="type" value={sendFormData.type} onChange={handleSendFormChange} />
        </div>
        <div>
          <input className="inpF" placeholder="Name" type="text" name="name" value={sendFormData.name} onChange={handleSendFormChange} />
        </div>
        <div>
          <input className="inpF" placeholder="Company/House Name" type="text" name="companyName" value={sendFormData.companyName} onChange={handleSendFormChange} />
        </div>
        <div>
          <input className="inpF" placeholder="Address 1" type="text" name="address1" value={sendFormData.address1} onChange={handleSendFormChange} />
        </div>
        <div>
          <input className="inpF" placeholder="Address 2" type="text" name="address2" value={sendFormData.address2} onChange={handleSendFormChange} />
        </div>
        <div>
          <input className="inpF" placeholder="Select City" type="text" name="city" value={sendFormData.city} onChange={handleSendFormChange} />
        </div>
        <div>
          <input className="inpF" placeholder="Zip Code" type="text" name="zipCode" value={sendFormData.zipCode} onChange={handleSendFormChange} />
        </div>
        <div>
          <input className="inpF" placeholder="Country" type="text" name="country" value={sendFormData.country} onChange={handleSendFormChange} />
        </div>
        <div>
          <input className="inpF" placeholder="Contact No" type="text" name="contactNumber" value={sendFormData.contactNumber} onChange={handleSendFormChange} />
        </div>
        <div>
          <input className="inpF" placeholder="Email" type="email" name="email" value={sendFormData.email} onChange={handleSendFormChange} />
        </div>
        <div>
          <select className="sel" onChange={() => handleAddressBookSelect(addressBookData[0], 'send')}>
            <option value="" disabled selected>Select From Book</option>
            <option value="Salik">Salik</option>
          </select>
        </div>
      <button className="btn" type="submit">Submit</button>
    </form>
  </div>

  <div className='reci'>
  <form>
  <div className='tOP' >Receive</div>
  <div>
  <input placeholder="Type" type="text" name="type" value={receiveFormData.type} onChange={handleReceiveFormChange} />
  </div>
  <div>
  <input placeholder="Name" type="text" name="name" value={receiveFormData.name} onChange={handleReceiveFormChange} />
  </div>
  <div>
  <input placeholder="Company/House Name" type="text" name="companyName" value={receiveFormData.companyName} onChange={handleReceiveFormChange} />
  </div>
  <div>
  <input placeholder="Address 1" type="text" name="address1" value={receiveFormData.address1} onChange={handleReceiveFormChange} />
  </div>
  <div>
  <input placeholder="Address 2" type="text" name="address2" value={receiveFormData.address2} onChange={handleReceiveFormChange} />
  </div>
  <div>
  <input placeholder="Select City" type="text" name="city" value={receiveFormData.city} onChange={handleReceiveFormChange} />
  </div>
  <div>
  <input placeholder="Zip Code" type="text" name="zipCode" value={receiveFormData.zipCode} onChange={handleReceiveFormChange} />
  </div>
  <div>
  <input placeholder="Country" type="text" name="country" value={receiveFormData.country} onChange={handleReceiveFormChange} />
  </div>
  <div>
  <input placeholder="Contact No" type="text" name="contactNumber" value={receiveFormData.contactNumber} onChange={handleReceiveFormChange} />
  </div>
  <div>
  <input placeholder="Email" type="email" name="email" value={receiveFormData.email} onChange={handleReceiveFormChange} />
  </div>
  <div>
  <select className="sel" onChange={() => handleAddressBookSelect(addressBookData[0], 'receive')}>
  <option value="" disabled selected>Select from Book</option>
  <option value="Salik">Salik</option>
  </select>
  </div>
  <button className="btn" type="submit">Submit</button>
  </form>
  </div>
  <div >
        <Link to="/pieceDetail">
          <button className='btn'>Next</button>
        </Link>
      </div>
</div>
  );
};

export default SenderReciever;
