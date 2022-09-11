import React from "react";
import Advertisement from "../components/home/Advertisement";
import CategoryShower from "../components/home/CategoryShower";
import Goods from "../components/home/Goods";

const Home = () => {
  return (
    <div className="container">
      <Advertisement />
      <CategoryShower />
    </div>
  );
};

export default Home;
