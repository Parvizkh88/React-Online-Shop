import React, { useState } from "react";

import Goods from "./Goods";

const CategoryShower = () => {
  const [goods, setGoods] = useState([
    {
      id: 1,
      title: "Samsung A51",
      description:
        "Lor simply dummy text of the printing and typesetting industry. em10",
    },
    {
      id: 2,
      title: "Iphone 14 pro",
      description:
        " when an unknown printer took a galley of type and scrambled",
    },
    {
      id: 3,
      title: "Xiaomi note 12",
      description:
        "also the leap into electronic typesetting, remaining essentially ",
    },
    {
      id: 4,
      title: "Google pixel 6",
      description:
        "It is a long established fact that a reader will be distracted by ",
    },
  ]);
  return (
    <div className="row my-3">
      {goods.map((item) => (
        <Goods title={item.title} description={item.description} />
      ))}
    </div>
  );
};

export default CategoryShower;
