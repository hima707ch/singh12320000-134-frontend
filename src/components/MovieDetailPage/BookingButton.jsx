import React from 'react';
import images from '../assets/images';

const BookingButton = ({ onBooking }) => {
  return (
    <div id="BookingButton_1" className="mt-8">
      <button
        id="BookingButton_2"
        onClick={onBooking}
        className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center justify-center space-x-2"
      >
        <span id="BookingButton_3" className="text-lg font-semibold">Book Tickets</span>
        <svg
          id="BookingButton_4"
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>
      <p id="BookingButton_5" className="text-sm text-gray-500 text-center mt-2">
        Secure your seats now for the best movie experience
      </p>
    </div>
  );
};

export default BookingButton;