import React, { useContext, useEffect, useState } from "react";
import Advertisement from "../components/home/Advertisement";
import CategoryShower from "../components/home/CategoryShower";
// import Goods from "../components/home/Goods";
// import Main from "../components/Main";
import MainContext from "../context/MainContext";
import videoBg from "../asset/video/videoBg.mp4";
import Footer from "../components/common/Footer";

const Home = () => {
  const [category, setCategory] = useState([]);

  const { goods } = useContext(MainContext);

  useEffect(() => {
    setCategory([
      { id: 1, name: "Mobile" },
      { id: 2, name: "Camera" },
      { id: 3, name: "Laptop" },
    ]);
  }, []);

  return (
    <div className="main">
      <video src={videoBg} autoPlay loop muted />
      <div className="container mt-3 content">
        <Advertisement />
        {category.map((item) => (
          <CategoryShower
            key={item.id}
            goods={goods.filter((good) => good.categoryId == item.id)}
            category={item}
          />
        ))}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
