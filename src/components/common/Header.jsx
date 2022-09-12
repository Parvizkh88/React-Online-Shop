import React, { useContext } from "react";
import MainContext from "../../context/MainContext";

const Header = () => {
  let { basket } = useContext(MainContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container d-flex justify-content-between">
        {/* <div className="container-fluid"> */}
        <div className="d-flex ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <button className="btn btn-success">Basket</button>
          <p className="mx-3 my-0 py-0">{basket.length}</p>
        </div>
        {/* </div> */}
      </div>
    </nav>
  );
};

export default Header;
