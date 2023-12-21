import React from "react";
import TaskCard from "../../components/TaskCard/TaskCard";

const TaskList = ({ tasks, onTaskUpdate, onTaskDelete }) => {
  return (
    <div className="flex flex-col gap-4">
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          onTaskUpdate={onTaskUpdate}
          onTaskDelete={onTaskDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
