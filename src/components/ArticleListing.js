// ArticleUpload.js
import React, { useState } from 'react';

const ArticleUpload = () => {
  const [formData, setFormData] = useState({
    AID: '',
    Article: '',
    UID: '',
    Stage: '',
    Ins: '',
    Ser: '',
    GrossWT: '',
    Country: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
        alert('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form inputs for AID, Article, UID, Stage, Ins, Ser, GrossWT, Country */}
      <input
        type="text"
        name="AID"
        placeholder="AID"
        value={formData.AID}
        onChange={handleChange}
      />
      <input
        type="text"
        name="Article"
        placeholder="Article"
        value={formData.Article}
        onChange={handleChange}
      />
      <input
        type="text"
        name="UID"
        placeholder="UID"
        value={formData.UID}
        onChange={handleChange}
      />
      <input
        type="text"
        name="Stage"
        placeholder="Stage"
        value={formData.Stage}
        onChange={handleChange}
      />
      <input
        type="text"
        name="Ins"
        placeholder="Ins"
        value={formData.Ins}
        onChange={handleChange}
      />
      <input
        type="text"
        name="Ser"
        placeholder="Ser"
        value={formData.Ser}
        onChange={handleChange}
      />
      <input
        type="text"
        name="GrossWT"
        placeholder="GrossWT"
        value={formData.GrossWT}
        onChange={handleChange}
      />
      <input
        type="text"
        name="Country"
        placeholder="Country"
        value={formData.Country}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ArticleUpload;
