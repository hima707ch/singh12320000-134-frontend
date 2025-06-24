import React from 'react';
import images from '../assets/images';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div id="Pagination_1" className="flex justify-center items-center mt-8 gap-2">
      <button
        id="Pagination_2"
        className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          id={`Pagination_${index + 3}`}
          className={`w-10 h-10 rounded-md ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <button
        id="Pagination_13"
        className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;