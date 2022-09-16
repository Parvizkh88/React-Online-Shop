import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import MainContext from "../../context/MainContext";
import useLogin from "../../hooks/useLogin";

const Header = () => {
  let { basket } = useContext(MainContext);
  let navigate = useNavigate();
  let token = useLogin();

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
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/profile">
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {token ? (
          <div className="d-flex justify-content-between align-items-center">
            <button
              className="btn btn-success"
              onClick={() => navigate("/basket")}
            >
              Basket
            </button>
            <p className="mx-3 my-0 py-0">{basket.length}</p>
          </div>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Header;
