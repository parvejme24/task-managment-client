import React from "react";
import { Link } from "react-router-dom";

const UserProfile = ({ user }) => {
  const { displayName, email, photoURL } = user;

  return (
    <div className="bg-blue-100 p-4 rounded-md shadow-md mb-8 flex items-center justify-between">
      <div className="flex items-center mb-4">
        <img
          src={photoURL}
          alt="Profile"
          className="w-12 h-12 border rounded-full mr-4"
        />
        <div>
          <h3 className="text-xl font-semibold uppercase text-blue-600">{displayName}</h3>
          <p className="text-gray-600">{email}</p>
        </div>
      </div>
      
      <Link to="/addNewTask" className="">
        <button className="bg-blue-500 px-4 py-2 text-lg text-white rounded-lg">Add New Task</button>
      </Link>
    </div>
  );
};

export default UserProfile;
