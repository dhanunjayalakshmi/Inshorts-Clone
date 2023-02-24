import React from "react";
import Menubar from "./Menubar";
import "./NavInshorts.css";

const NavInshorts = ({ setCategory }) => {
  return (
    <div className="nav">
      <div className="icon">
        <Menubar setCategory={setCategory} />
      </div>
      <img
        style={{ cursor: "pointer" }}
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        alt="Inshorts Logo"
        height="80%"
      />
    </div>
  );
};

export default NavInshorts;
