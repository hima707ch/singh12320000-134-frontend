import { useState, useEffect } from 'react';

export const useUserProfile = () => {
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john@example.com',
  });

  const [bookings, setBookings] = useState([
    {
      id: 1,
      propertyName: 'Luxury Villa',
      dates: 'Aug 15 - Aug 20, 2023',
      status: 'Completed',
    },
    {
      id: 2,
      propertyName: 'Beach House',
      dates: 'Sep 1 - Sep 5, 2023',
      status: 'Upcoming',
    },
  ]);

  const handleUpdateProfile = async (updatedInfo) => {
    try {
      // API call would go here
      setUserInfo(updatedInfo);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleViewBookingDetails = (bookingId) => {
    // Handle viewing booking details
    console.log('Viewing booking:', bookingId);
  };

  useEffect(() => {
    // Fetch user info and bookings from API
  }, []);

  return {
    userInfo,
    bookings,
    handleUpdateProfile,
    handleViewBookingDetails,
  };
};
