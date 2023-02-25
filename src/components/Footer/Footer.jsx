import "./Footer.css";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
        <a href="https://www.linkedin.com/in/dhanunjaya-lakshmi-46a32876/">
          Dhanunjaya Lakshmi
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.linkedin.com/in/dhanunjaya-lakshmi-46a32876/">
          <i class="fa-brands fa-square-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/dhanunjaya-lakshmi-46a32876/">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/dhanunjayalakshmi">
          <i class="fa-brands fa-square-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
