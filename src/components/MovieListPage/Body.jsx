import React from 'react';
import MovieGrid from './MovieGrid';
import Filters from './Filters';
import Pagination from './Pagination';
import useMovies from './useMovies';
import images from '../assets/images';

const Body = () => {
  const {
    movies,
    currentPage,
    totalPages,
    filters,
    handlePageChange,
    handleFilterChange,
    loading,
  } = useMovies();

  return (
    <div id="Body_1" className="container mx-auto px-4 py-8">
      <h1 id="Body_2" className="text-3xl font-bold text-gray-800 mb-8">Available Movies</h1>
      <Filters filters={filters} onFilterChange={handleFilterChange} />
      {loading ? (
        <div id="Body_3" className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <>
          <MovieGrid movies={movies} />
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default Body;