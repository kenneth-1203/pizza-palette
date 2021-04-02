import React from "react";

import Logo from "../../../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="d-flex justify-content-between m-0">
          <div>
            <img src={Logo} style={{ height: "calc(3em + 1vw)" }} alt="" />
            <p className="my-2">Sdn. Bhd.</p>
          </div>
          <div style={{ width: "200px" }}>
            <p className="m-0">Powered by</p>
            <div className="d-flex justify-content-evenly">
              <i className="fab fa-stripe fa-4x"></i>
              <i className="fab fa-bootstrap fa-2x my-auto"></i>
              <i className="fab fa-font-awesome fa-2x my-auto"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
