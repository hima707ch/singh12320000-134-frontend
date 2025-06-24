import React from 'react';
import images from '../assets/images';

const ConfirmationMessage = ({ selectedSeats }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 text-center" id="ConfirmationMessage_1">
      <div className="text-green-500 mb-4" id="ConfirmationMessage_2">
        <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold mb-4" id="ConfirmationMessage_3">Booking Confirmed!</h2>
      <p className="text-gray-600 mb-4" id="ConfirmationMessage_4">
        Your seats ({selectedSeats.join(', ')}) have been successfully booked.
      </p>
      <p className="text-gray-600 mb-6" id="ConfirmationMessage_5">
        A confirmation email has been sent with your booking details.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        id="ConfirmationMessage_6"
      >
        Book More Tickets
      </button>
    </div>
  );
};

export default ConfirmationMessage;