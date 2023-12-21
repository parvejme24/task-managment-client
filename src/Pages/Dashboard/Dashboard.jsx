// import React from 'react';

// const Dashboard = () => {
//     return (
//         <div className='container mx-auto py-12'>
//             <h2>This is dashboard</h2>
//         </div>
//     );
// };

// export default Dashboard;

// // Dashboard.jsx

import React, { useContext } from "react";
import UserProfile from "../../components/UserProfile/UserProfile";
import TaskList from "../../components/TaskList/TaskList";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="container mx-auto mt-8">
      <UserProfile user={user} />
      <TaskList />
    </div>
  );
};

export default Dashboard;
