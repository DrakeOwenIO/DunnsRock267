import React, { useState } from "react";
import "./Expandable.css";

const ExpandableBox = ({ name, term, bio, imageSrc }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function to handle opening/closing the content
  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="expandable-container">
      {/* Clickable header or button */}
      <button onClick={toggleContent} className="expandable-header">
        {name} ({term})
      </button>

      {/* Content that expands/collapses */}
      <div className={`expandable-content ${isOpen ? "open" : ""}`}>
        {imageSrc && <img src={imageSrc} alt={name} className="expandable-image" />}
        {isOpen && <p>{bio}</p>}
      </div>
    </div>
  );
};

export default ExpandableBox;
