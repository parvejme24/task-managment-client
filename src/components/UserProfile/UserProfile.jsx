// UserProfile.jsx

import React from "react";

const UserProfile = ({ user }) => {
  const { username, email, profilePicture } = user;

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <div className="flex items-center mb-4">
        <img
          src={profilePicture} // Assuming profilePicture is a URL
          alt="Profile"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="text-xl font-semibold">{username}</h3>
          <p className="text-gray-600">{email}</p>
        </div>
      </div>
      {/* Additional user information or features can be added here */}
    </div>
  );
};

export default UserProfile;
