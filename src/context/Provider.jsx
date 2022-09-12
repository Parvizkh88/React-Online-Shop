import React, { useEffect, useState } from "react";
import MainContext from "./MainContext";

const Provider = ({ children }) => {
  const [goods, setGoods] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    setGoods([
      {
        id: 1,
        categoryId: 1,
        title: "Samsung A51",
        price: "250",
        description:
          "Lor simply dummy text of the printing and typesetting industry. em10",
      },
      {
        id: 2,
        categoryId: 1,
        title: "Iphone 14 pro",
        price: "1100",
        description:
          " when an unknown printer took a galley of type and scrambled",
      },
      {
        id: 3,
        categoryId: 1,
        title: "Xiaomi note 12",
        price: "450",
        description:
          "also the leap into electronic typesetting, remaining essentially ",
      },
      {
        id: 4,
        categoryId: 1,
        title: "Google pixel 6",
        price: "520",
        description:
          "It is a long established fact that a reader will be distracted by ",
      },
      {
        id: 5,
        categoryId: 2,
        title: "Sony pro",
        price: "780",
        description:
          "All the Lorem Ipsum generators on the Internet tend to repeat ",
      },
      {
        id: 6,
        categoryId: 2,
        price: "820",
        title: "Canon SLRz",
        description:
          "predefined chunks as necessary, making this the first true generator",
      },
    ]);
  }, []);

  return (
    <MainContext.Provider value={{ goods, basket, setBasket }}>
      {children}
    </MainContext.Provider>
  );
};

export default Provider;
