import React from 'react';
import images from '../assets/images';

const Filters = ({ filters, onFilterChange }) => {
  const genres = ['All', 'Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi'];
  const ratings = ['All', '7+', '8+', '9+'];

  return (
    <div id="Filters_1" className="mb-8 bg-gray-50 p-4 rounded-lg">
      <div className="flex flex-wrap gap-4">
        <div id="Filters_2" className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Genre</label>
          <select
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filters.genre}
            onChange={(e) => onFilterChange('genre', e.target.value)}
          >
            {genres.map((genre, index) => (
              <option key={index} value={genre}>{genre}</option>
            ))}
          </select>
        </div>

        <div id="Filters_3" className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Rating</label>
          <select
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filters.rating}
            onChange={(e) => onFilterChange('rating', e.target.value)}
          >
            {ratings.map((rating, index) => (
              <option key={index} value={rating}>{rating}</option>
            ))}
          </select>
        </div>

        <div id="Filters_4" className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Release Date</label>
          <input
            type="date"
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filters.releaseDate}
            onChange={(e) => onFilterChange('releaseDate', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;