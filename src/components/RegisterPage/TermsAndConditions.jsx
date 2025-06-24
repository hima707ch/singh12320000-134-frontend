import React from 'react';
import images from '../assets/images';

const TermsAndConditions = () => {
  return (
    <div id="TermsAndConditions_1" className="flex items-center">
      <input
        id="TermsAndConditions_2"
        type="checkbox"
        required
        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
      />
      <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
        I agree to the
        <a href="/terms" className="text-indigo-600 hover:text-indigo-500"> Terms </a>
        and
        <a href="/privacy" className="text-indigo-600 hover:text-indigo-500"> Privacy Policy</a>
      </label>
    </div>
  );
};

export default TermsAndConditions;