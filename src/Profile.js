// Profile.js
import React, { useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';


const Profile = () => {
  // Example state for the profile data
  // In a real application, this data would likely be fetched from an API
  const [profileData, setProfileData] = useState({
    fullName: 'Sain Bux',
    email: 'sainbuxdev@gmail.com',
    role: 'Workspace Admin',
    cctvCameras: [
      { id: 1, ip: '192.168.1.5:8080' },
      { id: 2, ip: '192.168.1.6:8080' },
      // Add more cameras as needed
    ],
  });
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate('/dashboard'); // Replace with your actual dashboard route
  };

  const handleCameraIPChange = (cameraId, newIP) => {
    setProfileData((prevProfileData) => ({
      ...prevProfileData,
      cctvCameras: prevProfileData.cctvCameras.map((camera) =>
        camera.id === cameraId ? { ...camera, ip: newIP } : camera
      ),
    }));
  };

  const handleSaveChanges = () => {
    // Implement your save logic here
    console.log('Save profile changes');

    navigate('/dashboard'); // Replace with your actual dashboard route
  };
  return (
<div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Profile</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and connected CCTV cameras.</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{profileData.fullName}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{profileData.email}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Role</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{profileData.role}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Connected CCTV Cameras</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                {profileData.cctvCameras.map((camera) => (
                  <li key={camera.id} className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                    <input
              id={`camera-ip-${camera.id}`}
              type="text"
              value={camera.ip}
              onChange={(e) => handleCameraIPChange(camera.id, e.target.value)}
              className="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
                    </div>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <button onClick={handleCancel} className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Cancel
        </button>
        <button onClick={handleSaveChanges} className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Save changes
        </button>
      </div>
    </div>
  );
};

export default Profile;
