import React from "react";

// import { Card } from "react-bootstrap";
// import Button from "react-bootstrap/Button";

const Goods = ({ title, description }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 my-2">
      <div className="card" style={{ width: "18rem" }}>
        {/* <img className="card-img-top" alt="Card image cap" /> */}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Goods;
