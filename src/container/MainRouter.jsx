import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Header from "../components/common/Header";
import Basket from "../pages/Basket";
import Login from "../pages/Login";
import useLogin from "../hooks/useLogin";
import NotFound from "../pages/NotFound";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/goods/:goodsId" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
