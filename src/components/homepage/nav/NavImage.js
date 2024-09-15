import React from "react";
import "./NavImage.css";
import SquareAndCompass from "../../../imgs/NavImage2.svg";

const NavImage = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img
          src={SquareAndCompass}
          alt="Masonic Square and Compass"
          className="masonic-image"
        />
      </div>
    </div>
  );
};

export default NavImage;
