import "./left-links.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const LeftLinks = () => {
  return (
    <div className="left-parent">
      <div className="link-top-left">
        <Link className="link link-top-left" to="/newsletters">
          Newsletters
        </Link>
      </div>
      <div className="link-bottom-left">
        <Link className="link link-bottom-left" to="/officers">
          Officers
        </Link>
      </div>
    </div>
  );
};

export default LeftLinks;
