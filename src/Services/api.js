// api.js

const BASE_URL = "http://localhost:3001/api"; // Update with your actual API base URL

const headers = {
  "Content-Type": "application/json",
  // Add any other headers you may need, such as authentication headers
};

// Function to handle API requests for tasks
export const fetchTasks = async () => {
  try {
    const response = await fetch(`${BASE_URL}/tasks`, { headers });

    if (!response.ok) {
      throw new Error("Failed to fetch tasks");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

export const createTask = async (taskData) => {
  try {
    const response = await fetch(`${BASE_URL}/tasks`, {
      method: "POST",
      headers,
      body: JSON.stringify(taskData),
    });

    if (!response.ok) {
      throw new Error("Failed to create task");
    }

    return response.json();
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
};

export const updateTask = async (taskId, taskData) => {
  try {
    const response = await fetch(`${BASE_URL}/tasks/${taskId}`, {
      method: "PUT",
      headers,
      body: JSON.stringify(taskData),
    });

    if (!response.ok) {
      throw new Error("Failed to update task");
    }

    return response.json();
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};

export const deleteTask = async (taskId) => {
  try {
    const response = await fetch(`${BASE_URL}/tasks/${taskId}`, {
      method: "DELETE",
      headers,
    });

    if (!response.ok) {
      throw new Error("Failed to delete task");
    }

    return response.json();
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};
