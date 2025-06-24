import React from 'react';
import SeatSelection from './SeatSelection';
import BookingForm from './BookingForm';
import ConfirmationMessage from './ConfirmationMessage';
import useBooking from './useBooking';
import images from '../assets/images';

const Body = () => {
  const { selectedSeats, bookingSuccess, handleSeatSelect, handleBookingSubmit } = useBooking();

  return (
    <div className="container mx-auto px-4 py-8" id="Body_1">
      <h1 className="text-3xl font-bold text-center mb-8" id="Body_2">Movie Ticket Booking</h1>
      {!bookingSuccess ? (
        <div className="space-y-8" id="Body_3">
          <SeatSelection 
            selectedSeats={selectedSeats}
            onSeatSelect={handleSeatSelect}
          />
          {selectedSeats.length > 0 && (
            <BookingForm 
              selectedSeats={selectedSeats}
              onSubmit={handleBookingSubmit}
            />
          )}
        </div>
      ) : (
        <ConfirmationMessage selectedSeats={selectedSeats} />
      )}
    </div>
  );
};

export default Body;