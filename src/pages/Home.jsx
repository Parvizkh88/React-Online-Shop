import React, { useContext, useEffect, useState } from "react";
import Advertisement from "../components/home/Advertisement";
import CategoryShower from "../components/home/CategoryShower";
import Goods from "../components/home/Goods";
import MainContext from "../context/MainContext";

const Home = () => {
  const [category, setCategory] = useState([]);

  const { goods } = useContext(MainContext);

  useEffect(() => {
    setCategory([
      { id: 1, name: "Mobile" },
      { id: 2, name: "Camera" },
    ]);
  }, []);

  return (
    <div className="container">
      <Advertisement />
      {category.map((item) => (
        <CategoryShower
          goods={goods.filter((good) => good.categoryId == item.id)}
          category={item}
        />
      ))}
    </div>
  );
};

export default Home;
