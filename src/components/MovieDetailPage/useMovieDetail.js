import { useState, useEffect } from 'react';

const useMovieDetail = () => {
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        // Mock API call - replace with actual API endpoint
        const response = await fetch('/api/properties/1');
        const data = await response.json();
        
        if (response.ok) {
          setMovieData(data);
        } else {
          throw new Error(data.error || 'Failed to fetch movie details');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, []);

  const handleBooking = () => {
    // Handle booking navigation or modal
    console.log('Booking initiated');
  };

  return {
    movieData,
    loading,
    error,
    handleBooking
  };
};

export default useMovieDetail;