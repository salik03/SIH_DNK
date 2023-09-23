import React, { useState } from 'react';

const ContactForm = () => {
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
    email: '',
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
    email: '',
  });

  const handleSendFormChange = (e) => {
    const { name, value } = e.target;
    setSendFormData({ ...sendFormData, [name]: value });
  };

  const handleReceiveFormChange = (e) => {
    const { name, value } = e.target;
    setReceiveFormData({ ...receiveFormData, [name]: value });
  };

  return (
    <div style={{ display: 'flex' }}>
      <form>
        <h2>Send</h2>
        <div>
          <label>Type:</label>
          <input type="text" name="type" value={sendFormData.type} onChange={handleSendFormChange} />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={sendFormData.name} onChange={handleSendFormChange} />
        </div>
        <div>
          <label>Company/House Name:</label>
          <input type="text" name="companyName" value={sendFormData.companyName} onChange={handleSendFormChange} />
        </div>
        <div>
          <label>Address 1:</label>
          <input type="text" name="address1" value={sendFormData.address1} onChange={handleSendFormChange} />
        </div>
        <div>
          <label>Address 2:</label>
          <input type="text" name="address2" value={sendFormData.address2} onChange={handleSendFormChange} />
        </div>
        <div>
          <label>Select City:</label>
          <input type="text" name="city" value={sendFormData.city} onChange={handleSendFormChange} />
        </div>
        <div>
          <label>Zip Code:</label>
          <input type="text" name="zipCode" value={sendFormData.zipCode} onChange={handleSendFormChange} />
        </div>
        <div>
          <label>Country:</label>
          <input type="text" name="country" value={sendFormData.country} onChange={handleSendFormChange} />
        </div>
        <div>
          <label>Contact No:</label>
          <input type="text" name="contactNumber" value={sendFormData.contactNumber} onChange={handleSendFormChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={sendFormData.email} onChange={handleSendFormChange} />
        </div>
        
        <button type="submit">Submit</button>
      </form>

      <form>
        <h2>Receive</h2>
        <div>
          <label>Type:</label>
          <input type="text" name="type" value={receiveFormData.type} onChange={handleReceiveFormChange} />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={receiveFormData.name} onChange={handleReceiveFormChange} />
        </div>
        <div>
          <label>Company/House Name:</label>
          <input type="text" name="companyName" value={receiveFormData.companyName} onChange={handleReceiveFormChange} />
        </div>
        <div>
          <label>Address 1:</label>
          <input type="text" name="address1" value={receiveFormData.address1} onChange={handleReceiveFormChange} />
        </div>
        <div>
          <label>Address 2:</label>
          <input type="text" name="address2" value={receiveFormData.address2} onChange={handleReceiveFormChange} />
        </div>
        <div>
          <label>Select City:</label>
          <input type="text" name="city" value={receiveFormData.city} onChange={handleReceiveFormChange} />
        </div>
        <div>
          <label>Zip Code:</label>
          <input type="text" name="zipCode" value={receiveFormData.zipCode} onChange={handleReceiveFormChange} />
        </div>
        <div>
          <label>Country:</label>
          <input type="text" name="country" value={receiveFormData.country} onChange={handleReceiveFormChange} />
        </div>
        <div>
          <label>Contact No:</label>
          <input type="text" name="contactNumber" value={receiveFormData.contactNumber} onChange={handleReceiveFormChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={receiveFormData.email} onChange={handleReceiveFormChange} />
        </div>
        

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
