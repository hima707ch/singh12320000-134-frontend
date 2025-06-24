import React from 'react';
import UserInfo from './UserInfo';
import BookingHistory from './BookingHistory';
import images from '../assets/images';
import { useUserProfile } from './useUserProfile';

const Body = () => {
  const { userInfo, bookings, handleUpdateProfile, handleViewBookingDetails } = useUserProfile();

  return (
    <div id="Body_1" className="container mx-auto px-4 py-8">
      <div id="Body_2" className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div id="Body_3" className="md:col-span-4">
          <UserInfo userInfo={userInfo} onUpdateProfile={handleUpdateProfile} />
        </div>
        <div id="Body_4" className="md:col-span-8">
          <BookingHistory bookings={bookings} onViewDetails={handleViewBookingDetails} />
        </div>
      </div>
    </div>
  );
};

export default Body;