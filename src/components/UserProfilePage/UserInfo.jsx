import React, { useState } from 'react';
import images from '../assets/images';

const UserInfo = ({ userInfo, onUpdateProfile }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(userInfo);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProfile(formData);
    setIsEditing(false);
  };

  return (
    <div id="UserInfo_1" className="bg-white rounded-lg shadow-md p-6">
      <div id="UserInfo_2" className="flex items-center mb-6">
        <img
          id="UserInfo_3"
          src={images[0] || 'https://via.placeholder.com/150'}
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover"
        />
        <h2 id="UserInfo_4" className="text-2xl font-semibold ml-4">
          {userInfo.name}
        </h2>
      </div>

      {isEditing ? (
        <form id="UserInfo_5" onSubmit={handleSubmit} className="space-y-4">
          <div id="UserInfo_6">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div id="UserInfo_7">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div id="UserInfo_8" className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      ) : (
        <div id="UserInfo_9" className="space-y-4">
          <div id="UserInfo_10">
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-md">{userInfo.email}</p>
          </div>
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
          >
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default UserInfo;