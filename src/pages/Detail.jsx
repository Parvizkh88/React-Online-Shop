import React, { useContext } from "react";
import { useParams } from "react-router";
import MainContext from "../context/MainContext";

const Detail = () => {
  const { goodsId } = useParams();
  const { goods } = useContext(MainContext);

  let dataToShow = goods.find((item) => item.id == goodsId);
  console.log(dataToShow);
  return (
    <div className="container">
      <div className="shadow-x1 rounded border-1 mx-auto mt-4">
        <h3 className="fw-bolder">{dataToShow?.title}</h3>
        <div className="d-flex">
          <p className="mr-3">Price: </p>
          <h5>{dataToShow?.price}</h5>
        </div>
        <h6>{dataToShow?.description}</h6>
      </div>
    </div>
  );
};

export default Detail;
