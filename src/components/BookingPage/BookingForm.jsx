import React, { useState } from 'react';
import images from '../assets/images';

const BookingForm = ({ selectedSeats, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6" id="BookingForm_1">
      <h2 className="text-2xl font-semibold mb-6" id="BookingForm_2">Booking Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div id="BookingForm_3">
          <label className="block text-sm font-medium mb-1">Selected Seats</label>
          <div className="bg-gray-100 p-2 rounded">{selectedSeats.join(', ')}</div>
        </div>
        <div id="BookingForm_4">
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-2 border rounded"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div id="BookingForm_5">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-2 border rounded"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div id="BookingForm_6">
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full p-2 border rounded"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          id="BookingForm_7"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;