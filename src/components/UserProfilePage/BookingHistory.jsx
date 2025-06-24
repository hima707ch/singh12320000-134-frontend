import React from 'react';
import images from '../assets/images';

const BookingHistory = ({ bookings, onViewDetails }) => {
  return (
    <div id="BookingHistory_1" className="bg-white rounded-lg shadow-md p-6">
      <h2 id="BookingHistory_2" className="text-2xl font-semibold mb-6">Booking History</h2>
      <div id="BookingHistory_3" className="space-y-4">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            id={`BookingHistory_4_${booking.id}`}
            className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <div id="BookingHistory_5" className="flex items-center justify-between">
              <div id="BookingHistory_6" className="flex items-center space-x-4">
                <img
                  src={images[1] || 'https://via.placeholder.com/100'}
                  alt={booking.propertyName}
                  className="w-16 h-16 rounded-md object-cover"
                />
                <div id="BookingHistory_7">
                  <h3 className="font-semibold">{booking.propertyName}</h3>
                  <p className="text-sm text-gray-500">{booking.dates}</p>
                </div>
              </div>
              <button
                onClick={() => onViewDetails(booking.id)}
                className="px-4 py-2 text-blue-600 hover:text-blue-800"
              >
                View Details
              </button>
            </div>
            <div id="BookingHistory_8" className="mt-2">
              <span className={`px-2 py-1 rounded-full text-xs ${booking.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                {booking.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingHistory;