import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "./../../AuthProvider/AuthProvider";

const AddNewTask = () => {
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("moderate");

  const handleAddTask = (e) => {
    e.preventDefault();

    // Create a new task object
    const newTask = {
      title,
      userEmail: user.email,
      description,
      deadline: new Date(deadline),
      priority,
    };

    // For demonstration purposes, log the new task to the console
    console.log("New Task:", newTask);

    // Optionally, send the new task to the server
    fetch(`http://localhost:3030/api/addTask`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "New Task Added Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
        form.reset();
      });

    // Redirect to the task management dashboard after adding the task
    // history.push("/dashboard");
  };

  return (
    <div className="container mx-auto py-24">
      <div className=" mx-auto max-w-md p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
          Add New Task
        </h2>
        <form onSubmit={handleAddTask} className="space-y-4">
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
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewTask;
