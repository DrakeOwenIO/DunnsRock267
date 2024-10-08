import "./mid-link.css";

const MidLink = () => {
  return (
    <div className="bottom-container">
      <div className="link-container">
        <a href="/Readings" className="link">
          Additional Readings
        </a>
        <a href="/events" className="link">
          Upcoming Events
        </a>
        <a href="/contact" className="link">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default MidLink;
