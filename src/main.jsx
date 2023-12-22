import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main.jsx";
import Home from "./Pages/Home/Home.jsx";
import Login from "./Pages/Login/Login.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import { HelmetProvider } from "react-helmet-async";
import Register from "./Pages/Register/Register.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import PrivetRout from "./Routes/PrivetRoute";
import { TaskProvider } from "./contexts/TaskContext.jsx";
import FAQ from "./Pages/FAQ/FAQ.jsx";
import AddNewTask from "./components/AddNewTask/AddNewTask.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "dashboard",
        element: (
          <PrivetRout>
            <Dashboard />
          </PrivetRout>
        ),
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "addNewTask",
        element: <AddNewTask />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskProvider>
      <HelmetProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </HelmetProvider>
    </TaskProvider>
  </React.StrictMode>
);
