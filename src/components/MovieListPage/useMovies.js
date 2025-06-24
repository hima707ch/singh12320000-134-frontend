import { useState, useEffect } from 'react';

const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(5);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    genre: 'All',
    rating: 'All',
    releaseDate: ''
  });

  // Simulated movie data since no actual API endpoint was provided
  const generateMovies = () => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      title: `Movie ${i + 1}`,
      genre: ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi'][Math.floor(Math.random() * 5)],
      rating: (Math.random() * 2 + 8).toFixed(1),
      releaseDate: new Date(Date.now() - Math.random() * 10000000000).toISOString().split('T')[0]
    }));
  };

  useEffect(() => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setMovies(generateMovies());
      setLoading(false);
    }, 1000);
  }, [currentPage, filters]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
    setCurrentPage(1);
  };

  return {
    movies,
    currentPage,
    totalPages,
    filters,
    handlePageChange,
    handleFilterChange,
    loading
  };
};

export default useMovies;