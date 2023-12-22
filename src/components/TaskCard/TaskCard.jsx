// TaskCard.jsx

import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const TaskCard = ({ task }) => {
  const { _id, title, description, deadline, priority } = task;

  const handleUpdate = () => {};

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3030/api/tasks/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your Task has been deleted.",
                "success"
              );
            }
          });
      }
    });
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
        <Link to={`/api/updateTask/${_id}`}>
          <button
            onClick={() => handleUpdate(task)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
          >
            Update
          </button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
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
