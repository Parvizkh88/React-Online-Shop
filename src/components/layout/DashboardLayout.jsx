import React from "react";
import { Outlet } from "react-router";
// import Profile from "../../pages/Profile";

const DashboardLayout = () => {
  return (
    <div>
      <nav>DASHBOARD</nav>
      <Outlet />
      <footer>FOOTER</footer>
    </div>
  );
};

export default DashboardLayout;
