import React, { useContext } from "react";
import { useParams } from "react-router";
import MainContext from "../context/MainContext";

const Detail = () => {
  const { goodsId } = useParams();
  const { goods, setBasket, basket } = useContext(MainContext);

  let dataToShow = goods.find((item) => item.id == goodsId);

  const handleAddToCart = () => {
    let copy = [...basket];
    copy.push(dataToShow);
    setBasket(copy);
  };

  return (
    <div className="container">
      <div className="shadow-x1 rounded border-1 mx-auto mt-4">
        <h3 className="fw-bolder">{dataToShow?.title}</h3>
        <div className="d-flex">
          <p className="mr-3">Price: </p>
          <h5>{dataToShow?.price}</h5>
        </div>
        <h6>{dataToShow?.description}</h6>
        <div className="btn btn-success mt-3" onClick={handleAddToCart}>
          Add To Cart
        </div>
      </div>
    </div>
  );
};

export default Detail;
