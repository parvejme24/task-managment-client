import React, { useContext, useEffect, useState } from "react";
import UserProfile from "../../components/UserProfile/UserProfile";
import TaskList from "../../components/TaskList/TaskList";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { deleteTask, fetchTasks, updateTask } from "../../Services/api";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch(`https://taskup-server.vercel.app/api/tasks?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);



  return (
    <div className="container mx-auto py-12">
      <UserProfile user={user} />
      <TaskList
        tasks={tasks}
      />
    </div>
  );
};

export default Dashboard;
