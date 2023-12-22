import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "./../../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const UpdateTask = () => {
  const task = useLoaderData();
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("moderate");

  const handleUpdateTask = (event) => {
    event.preventDefault();

    const updateTask = {
      title: task.title,
      userEmail: user.email,
      description: task.description,
      deadline: new Date(deadline),
      priority: task.priority,
    };

    fetch(`https://taskup-server.vercel.app/api/tasks/api/tasks/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateTask),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Update Task Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="container mx-auto py-24">
      <div className=" mx-auto max-w-md p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
          Update A Task
        </h2>
        <form onSubmit={handleUpdateTask} className="space-y-4">
          <label className="block">
            <span className="text-gray-700">Title:</span>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Description:</span>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Deadline:</span>
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Priority:</span>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            >
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Update Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;
