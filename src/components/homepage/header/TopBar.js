import React from "react";
import "./TopBar.css";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="line"></div>
      <Link className="content" to="/">
        Dunns Rock #267 A.F. & A.M.
      </Link>
      <div className="line"></div>
    </div>
  );
};

export default TopBar;
