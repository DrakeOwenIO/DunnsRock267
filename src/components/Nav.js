import React from "react";
import "./Nav.css";
import SquareAndCompass from "../imgs/NavImage2.svg";

const Nav = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img
          src={SquareAndCompass}
          alt="Masonic Square and Compass"
          className="masonic-image"
        />
        <div className="links">
          <a href="/newsletters" className="link link-top-left">
            Newsletters
          </a>
          <a href="/officers" className="link link-top-right">
            Officers
          </a>
          <a href="/pastmasters" className="link link-bottom-left">
            Past Masters
          </a>
          <a href="/photogallery" className="link link-bottom-right">
            Photo Gallery
          </a>
          <a href="/photogallery" className="link link-bottom-middle">
            Additional Readings
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
