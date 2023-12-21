import React from "react";
import { NavbarComponent } from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <NavbarComponent />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
