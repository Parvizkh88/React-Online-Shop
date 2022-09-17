import React, { useEffect, useState } from "react";
import MainContext from "./MainContext";
// import Camera3 from "../asset/image/Camera3.jpg";

const Provider = ({ children }) => {
  const [goods, setGoods] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    setGoods([
      {
        theImage:
          "https://images.unsplash.com/photo-1581993192008-63e896f4f744?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2Ftc3VuZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        id: 1,
        categoryId: 1,
        title: "Samsung Z Fold",
        price: "1250",
        description:
          "Lor simply dummy text of the printing and typesetting industry",
      },
      {
        id: 2,
        theImage:
          "https://images.unsplash.com/photo-1653921167679-7676ed531a58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwMTR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        categoryId: 1,
        title: "Iphone 14 pro",
        price: "1000",
        description:
          " when an unknown printer took a galley of type and scrambled",
      },
      {
        theImage:
          "https://images.unsplash.com/photo-1568171284620-57dc85d9f210?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHhpYW9taXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        id: 3,
        categoryId: 1,
        title: "Xiaomi note 12",
        price: "450",
        description:
          "also the leap into electronic typesetting, remaining essentially ",
      },
      {
        theImage:
          "https://images.unsplash.com/photo-1587840181242-bf05eb933bbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z29vZ2xlJTIwcGl4ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        id: 4,
        categoryId: 1,
        title: "Google pixel 6",
        price: "520",
        description:
          "It is a long established fact that a reader will be distracted by ",
      },
      {
        theImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwNGY-S97wJK_15D7-rG5yA9evVFflo2DNfQ&usqp=CAU",
        id: 4,
        categoryId: 1,
        title: "Sony Xperia pro",
        price: "1100",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu ",
      },
      {
        theImage:
          "https://images.unsplash.com/photo-1607592053713-0a2ca09a3e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5va2lhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        id: 4,
        categoryId: 1,
        title: "Nokia X100 5G",
        price: "400",
        description:
          "consectetur adipiscing elit. In eu Lorem ipsum dolor sit amet ",
      },
      {
        theImage:
          "https://images.unsplash.com/photo-1519907328249-da60056c1ef5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmlrb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        id: 5,
        categoryId: 2,
        title: "Nikon p12",
        price: "780",
        description:
          "Internet tend to repeat consectetur adipiscing elit. In eu ",
      },
      {
        theImage:
          "https://images.unsplash.com/photo-1505739998589-00fc191ce01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fHNvbnklMjBjYW1lcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        id: 6,
        categoryId: 2,
        price: "1020",
        title: "Sony Compact FA",
        description: " In eu consectetur Internet tend to repeat consectetur",
      },
      {
        theImage:
          "https://images.pexels.com/photos/956872/pexels-photo-956872.jpeg?auto=compress&cs=tinysrgb&w=600",
        id: 6,
        categoryId: 2,
        price: "800",
        title: "Fujifilm 11M",
        description:
          "predefined chunks as necessary, making this the first true",
      },
      {
        theImage:
          "https://images.pexels.com/photos/1903308/pexels-photo-1903308.jpeg?auto=compress&cs=tinysrgb&w=600",
        id: 6,
        categoryId: 2,
        price: "550",
        title: "Canon R440",
        description:
          "making this the first true generator Internet tend to repeat  ",
      },
      {
        theImage:
          "https://cdn.pixabay.com/photo/2020/03/28/17/26/camera-4977962__340.jpg",
        id: 6,
        categoryId: 2,
        price: "490",
        title: "Panasonic Lumix",
        description: "during the Renaissance. The first line of Lorem Ipsum",
      },
      {
        theImage:
          "https://images.pexels.com/photos/1787236/pexels-photo-1787236.jpeg?auto=compress&cs=tinysrgb&w=600",
        id: 6,
        categoryId: 2,
        price: "820",
        title: "Canon pro-G4",
        description:
          "typesetting, remaining essentially unchanged. It was popularised in",
      },
      {
        theImage:
          "https://images.unsplash.com/photo-1630794180018-433d915c34ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFzdXMlMjBsYXB0b3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        id: 6,
        categoryId: 3,
        price: "1500",
        title: "Asus ZenBook Duo ",
        description:
          "predefined chunks as necessary, making this the first true",
      },
      {
        theImage:
          "https://images.unsplash.com/photo-1592434134753-a70baf7979d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhwJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        id: 6,
        categoryId: 3,
        price: "720",
        title: "Huawei pro 13",
        description:
          "Ipsum passages, and more recently with desktop publishing",
      },
      {
        theImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRDkqXBHVo8vcHcTRKjj_gIKEyTBPLj422GA&usqp=CAU",
        id: 6,
        categoryId: 3,
        price: "650",
        title: "HP Pavilion 14",
        description:
          "software like Aldus PageMaker including versions of Lorem.",
      },
      {
        theImage:
          "https://images.unsplash.com/photo-1633114073758-c4be9aeb15ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fG1pY3Jvc29mdCUyMHN1cmZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        id: 6,
        categoryId: 3,
        price: "750",
        title: "Microsoft Surface Go ",
        description:
          "Contrary to popular belief, Lorem Ipsum is not simply random text",
      },
      {
        theImage:
          "https://images.unsplash.com/photo-1625766763788-95dcce9bf5ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFjYm9vayUyMGFpcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        id: 6,
        categoryId: 3,
        price: "900",
        title: "Macbook Air M1",
        description:
          "predefined chunks as necessary, making this the first true",
      },
      {
        theImage:
          "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVsbCUyMHhwcyUyMDEzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        id: 6,
        categoryId: 3,
        price: "1450",
        title: "Dell XPS 13 ",
        description:
          "survived not only five centuries, but also the leap into electronic",
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
