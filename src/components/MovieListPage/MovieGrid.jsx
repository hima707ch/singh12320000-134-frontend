import React from 'react';
import images from '../assets/images';

const MovieGrid = ({ movies }) => {
  return (
    <div id="MovieGrid_1" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map((movie, index) => (
        <div 
          key={movie.id} 
          id={`MovieGrid_${index + 2}`}
          className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
        >
          <img 
            src={images[index % images.length] || 'https://via.placeholder.com/300x450'} 
            alt={movie.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{movie.title}</h3>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{movie.genre}</span>
              <span className="text-sm font-bold text-blue-600">{movie.rating}/10</span>
            </div>
            <button 
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
              onClick={() => console.log('Book ticket for:', movie.title)}
            >
              Book Ticket
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;