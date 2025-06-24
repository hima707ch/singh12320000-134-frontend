import React from 'react';
import images from '../assets/images';

const RegistrationForm = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form id="RegistrationForm_1" onSubmit={handleSubmit} className="space-y-6">
      <div id="RegistrationForm_2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          id="RegistrationForm_3"
          type="text"
          name="name"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div id="RegistrationForm_4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          id="RegistrationForm_5"
          type="email"
          name="email"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div id="RegistrationForm_6">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <input
          id="RegistrationForm_7"
          type="password"
          name="password"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <TermsAndConditions />
      <button
        id="RegistrationForm_8"
        type="submit"
        disabled={isLoading}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
      >
        {isLoading ? 'Registering...' : 'Register'}
      </button>
    </form>
  );
};

export default RegistrationForm;