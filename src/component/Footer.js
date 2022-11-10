import React from "react";
import logo from "../images/logo (1).svg";

const Footer = () => {
  return (
    <>
      <div className="card text-center">
        <div className="footer">
          <div className="logo mb-3">
            <img src={logo} alt={Footer.png} />
          </div>
          ​Copyright © 2022, #IyaInTech. All Rights Reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
