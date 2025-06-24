import React from 'react';
import RegistrationForm from './RegistrationForm';
import TermsAndConditions from './TermsAndConditions';
import images from '../assets/images';
import { useRegister } from './useRegister';

const Body = () => {
  const { handleSubmit, error, success, isLoading } = useRegister();

  return (
    <div id="Body_1" className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div id="Body_2" className="sm:mx-auto sm:w-full sm:max-w-md">
        <img id="Body_3" className="mx-auto h-12 w-auto" src={images[0]} alt="Logo" />
        <h2 id="Body_4" className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
      </div>
      <div id="Body_5" className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div id="Body_6" className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {error && <div id="Body_7" className="mb-4 text-red-600">{error}</div>}
          {success && <div id="Body_8" className="mb-4 text-green-600">{success}</div>}
          <RegistrationForm onSubmit={handleSubmit} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default Body;