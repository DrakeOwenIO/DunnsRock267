import "./Homepage.css";
import TopBar from "./header/TopBar";
import NavImage from "./nav/NavImage";

function Homepage() {
  return (
    <div className="container">
      <div className="header">
        <TopBar />
      </div>
      <div className="Masonic-Image">
        <NavImage />
      </div>
    </div>
  );
}

export default Homepage;
