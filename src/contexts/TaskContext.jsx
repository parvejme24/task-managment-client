// TaskContext.jsx

import React, { createContext, useReducer, useContext } from 'react';

// Initial state for tasks
const initialState = {
  tasks: [],
};

// Action types
const ADD_TASK = 'ADD_TASK';
const UPDATE_TASK = 'UPDATE_TASK';
const DELETE_TASK = 'DELETE_TASK';

// Reducer function to handle state changes
const taskReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case UPDATE_TASK:
      const updatedTasks = state.tasks.map((task) =>
        task._id === action.payload._id ? action.payload : task
      );
      return {
        ...state,
        tasks: updatedTasks,
      };
    case DELETE_TASK:
      const filteredTasks = state.tasks.filter(
        (task) => task._id !== action.payload
      );
      return {
        ...state,
        tasks: filteredTasks,
      };
    default:
      return state;
  }
};

// Create the TaskContext
const TaskContext = createContext();

// Create a TaskProvider component to wrap your application
export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  // Action creators
  const addTask = (task) => {
    dispatch({ type: ADD_TASK, payload: task });
  };

  const updateTask = (task) => {
    dispatch({ type: UPDATE_TASK, payload: task });
  };

  const deleteTask = (taskId) => {
    dispatch({ type: DELETE_TASK, payload: taskId });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        addTask,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

// Create a custom hook to use the TaskContext
export const useTaskContext = () => {
  return useContext(TaskContext);
};
