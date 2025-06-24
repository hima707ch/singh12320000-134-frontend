import { useState } from 'react';

const useBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleSeatSelect = (seatId) => {
    setSelectedSeats(prev => {
      if (prev.includes(seatId)) {
        return prev.filter(seat => seat !== seatId);
      } else {
        return [...prev, seatId];
      }
    });
  };

  const handleBookingSubmit = async (formData) => {
    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Successful booking
      setBookingSuccess(true);
    } catch (error) {
      console.error('Booking failed:', error);
      alert('Booking failed. Please try again.');
    }
  };

  return {
    selectedSeats,
    bookingSuccess,
    handleSeatSelect,
    handleBookingSubmit
  };
};

export default useBooking;