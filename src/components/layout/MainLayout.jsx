import React from "react";
import { Outlet } from "react-router";
import Header from "../common/Header";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
