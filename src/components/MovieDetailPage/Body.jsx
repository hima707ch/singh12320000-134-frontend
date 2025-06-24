import React from 'react';
import MovieInfo from './MovieInfo';
import BookingButton from './BookingButton';
import useMovieDetail from './useMovieDetail';
import images from '../assets/images';

const Body = () => {
  const { movieData, loading, error, handleBooking } = useMovieDetail();

  if (loading) return <div id="Body_1" className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div id="Body_2" className="text-red-500 text-center p-4">{error}</div>;

  return (
    <div id="Body_3" className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div id="Body_4" className="max-w-7xl mx-auto">
        <div id="Body_5" className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div id="Body_6" className="grid md:grid-cols-2 gap-8 p-6">
            <div id="Body_7" className="w-full h-[400px] relative">
              <img 
                src={images[0]} 
                alt={movieData?.title} 
                className="w-full h-full object-cover rounded-lg"
                id="Body_8"
              />
            </div>
            <div id="Body_9" className="space-y-6">
              <MovieInfo movieData={movieData} />
              <BookingButton onBooking={handleBooking} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;