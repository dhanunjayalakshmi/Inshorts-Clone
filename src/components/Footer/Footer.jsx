import "./Footer.css";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
        <a
          href="https://www.linkedin.com/in/dhanunjaya-lakshmi-46a32876/"
          target="_blank"
        >
          Dhanunjaya Lakshmi
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="#">
          <i class="fa-brands fa-square-instagram fa-2x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/dhanunjaya-lakshmi-46a32876/"
          target="_blank"
        >
          <i class="fa-brands fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/dhanunjayalakshmi" target="_blank">
          <i class="fa-brands fa-square-github fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
