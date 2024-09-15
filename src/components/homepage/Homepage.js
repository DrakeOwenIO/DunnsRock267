import "./Homepage.css";
import TopBar from "./header/TopBar";
import LeftLinks from "./nav/links/left-links";
import RightLinks from "./nav/links/right-links";
import NavImage from "./nav/NavImage";
import Meetings from "./misc-text/Meetings";

function Homepage() {
  return (
    <div className="home-container">
      <div className="header">
        <TopBar />
      </div>
      <span className="inline-nav">
        <div className="left-links">
          <LeftLinks />
        </div>
        <div className="Masonic-Image">
          <NavImage />
        </div>
        <div className="right-links">
          <RightLinks />
        </div>
      </span>
      <div className="meetings-container">
        <Meetings />
      </div>
    </div>
  );
}

export default Homepage;
