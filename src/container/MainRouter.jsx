import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Detail from "../pages/Detail";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/goods/:goodsId" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
