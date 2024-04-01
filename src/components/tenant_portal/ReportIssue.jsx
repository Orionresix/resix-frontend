import React, { useState } from 'react';

const ReportIssue = () => {
  const [formData, setFormData] = useState({
    apartmentName: '',
    unitNumber: '',
    tenantName: '',
    contactNumber: '',
    description: '',
    maintenanceType: '',
    image: null
  });

  const handleApartmentNameChange = (e) => {
    setFormData({ ...formData, apartmentName: e.target.value });
  };

  const handleUnitNumberChange = (e) => {
    setFormData({ ...formData, unitNumber: e.target.value });
  };

  const handleTenantNameChange = (e) => {
    setFormData({ ...formData, tenantName: e.target.value });
  };

  const handleContactNumberChange = (e) => {
    setFormData({ ...formData, contactNumber: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setFormData({ ...formData, description: e.target.value });
  };

  const handleMaintenanceTypeChange = (e) => {
    setFormData({ ...formData, maintenanceType: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Request has been successfully submitted!');
        setFormData({
          apartmentName: '',
          unitNumber: '',
          tenantName: '',
          contactNumber: '',
          description: '',
          maintenanceType: '',
          image: null
        });
      } else {
        throw new Error('Failed to submit request');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit request');
    }
  };

  return (
    <div className='Welcome'>
      <h1>Report Your Issue</h1>
      <p>Describe below the issue you are facing</p>
      <form className='reportissueform' onSubmit={handleSubmit}>
        <div className='formgroup'>
          <label>Apartment Name:</label>
          <input
            type="text"
            value={formData.apartmentName}
            onChange={handleApartmentNameChange}
            placeholder="Enter Apartment Name"
            required
          />
        </div>
        <div className='formgroup'>
          <label>Unit Number:</label>
          <input
            type="text"
            value={formData.unitNumber}
            onChange={handleUnitNumberChange}
            placeholder="Enter Unit Number"
            required
          />
        </div>
        <div className='formgroup'>
          <label>Tenant Name:</label>
          <input
            type="text"
            value={formData.tenantName}
            onChange={handleTenantNameChange}
            placeholder="Enter Tenant Name"
            required
          />
        </div>
        <div className='formgroup'>
          <label>Contact Number:</label>
          <input
            type="tel"
            value={formData.contactNumber}
            onChange={handleContactNumberChange}
            placeholder="Enter Contact Number"
            required
          />
        </div>
        <div className='formgroup'>
          <label>Description:</label>
          <textarea
            value={formData.description}
            onChange={handleDescriptionChange}
            placeholder="Enter Issue Description"
            required
          />
        </div>
        <div className='formgroup'>
          <label>Maintenance Type:</label>
          <select
            value={formData.maintenanceType}
            onChange={handleMaintenanceTypeChange}
            required
          >
            <option value="">Select Maintenance Type</option>
            <option value="Electrical">Electrical</option>
            <option value="Plumbing">Plumbing</option>
            <option value="HVAC">HVAC</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className='formgroup'>
          <label>Upload Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <div>
          {formData.image && (
            <img src={URL.createObjectURL(formData.image)} alt="Uploaded" style={{ width: '100px', height: '100px' }} />
          )}
        </div>
        <div className='formgroup'>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ReportIssue;
