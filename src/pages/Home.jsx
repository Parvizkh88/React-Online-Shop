import React, { useEffect, useState } from "react";
import Advertisement from "../components/home/Advertisement";
import CategoryShower from "../components/home/CategoryShower";
import Goods from "../components/home/Goods";

const Home = () => {
  const [goods, setGoods] = useState([]);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    setGoods([
      {
        id: 1,
        categoryId: 1,
        title: "Samsung A51",
        description:
          "Lor simply dummy text of the printing and typesetting industry. em10",
      },
      {
        id: 2,
        categoryId: 1,
        title: "Iphone 14 pro",
        description:
          " when an unknown printer took a galley of type and scrambled",
      },
      {
        id: 3,
        categoryId: 1,
        title: "Xiaomi note 12",
        description:
          "also the leap into electronic typesetting, remaining essentially ",
      },
      {
        id: 4,
        categoryId: 1,
        title: "Google pixel 6",
        description:
          "It is a long established fact that a reader will be distracted by ",
      },
      {
        id: 5,
        categoryId: 2,
        title: "Sony pro",
        description:
          "All the Lorem Ipsum generators on the Internet tend to repeat ",
      },
      {
        id: 6,
        categoryId: 2,
        title: "Canon SLRz",
        description:
          "predefined chunks as necessary, making this the first true generator",
      },
    ]);
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
