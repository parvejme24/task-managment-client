// TaskCard.jsx

import React from "react";

const TaskCard = ({ task, onTaskUpdate, onTaskDelete }) => {
  const { _id, title, description, deadline, priority } = task;

  const handleUpdate = () => {
    // Implement the logic for updating a task
    onTaskUpdate(_id);
  };

  const handleDelete = () => {
    // Implement the logic for deleting a task
    onTaskDelete(_id);
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-sm text-gray-500 mb-2">
        Deadline: {new Date(deadline).toLocaleDateString()}
      </p>
      <p className={`text-sm ${getPriorityColor(priority)} mb-4`}>
        Priority: {priority}
      </p>
      <div className="flex justify-between">
        <button
          onClick={handleUpdate}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
        >
          Update
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const getPriorityColor = (priority) => {
  switch (priority) {
    case "low":
      return "text-green-500";
    case "moderate":
      return "text-yellow-500";
    case "high":
      return "text-red-500";
    default:
      return "";
  }
};

export default TaskCard;
