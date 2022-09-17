// import React from "react";

// const Footer = () => {
//   return (
//     <div className="myFooter">
//       <h1 style={{ color: "red" }}>Footer</h1>
//     </div>
//   );
// };

// export default Footer;
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="page-footer font-small blue pt-4 myFooter">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">Footer Content</h5>
          <p>
            Here you can use rows and columns to organize your footer content.
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Links</h5>
          <ul className="list-unstyled myFooterLinks">
            <li>
              <Link to="#!">Profile</Link>
            </li>
            <li>
              <Link to="#!">Basket</Link>
            </li>
            <li>
              <Link to="#!">Services</Link>
            </li>
            <li>
              <Link to="#!">About Us</Link>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Links</h5>
          <ul className="list-unstyled myFooterLinks">
            <li>
              <Link to="#!">Support</Link>
            </li>
            <li>
              <Link to="#!">Contact</Link>
            </li>
            <li>
              <Link to="#!">Blog</Link>
            </li>
            <li>
              <Link to="#!">FAQ</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      © 2022 Copyright:
      <a to="https://github.com/Parvizkh88?tab=repositories"> Digimarkt.com</a>
    </div>
  </footer>
);

export default Footer;
