import React from "react";
import { useNavigate } from "react-router";
import image from "../../asset/image/Camera3.jpg";
// import Camera3 from "../../context/Provider";

// import { Card } from "react-bootstrap";
// import Button from "react-bootstrap/Button";

const Goods = ({ title, description, goodsId, image }) => {
  let navigate = useNavigate();
  // console.log(image);
  const handleGoToDetail = () => {
    navigate(`/goods/${goodsId}`);
  };

  return (
    <div className="col-12 col-md-6 col-lg-4 my-2">
      <div className="card" style={{ width: "18rem" }}>
        {/* <img className="card-img-top" alt="Card image cap" /> */}
        <img
          src={image}
          className="card-img-top"
          style={{ maxWidth: "285px", maxHeight: "160px" }}
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <button
            href="#"
            className="btn btn-primary"
            onClick={handleGoToDetail}
          >
            Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Goods;
