import React, { useState } from "react";
import "./Expandable.css"; // Importing optional styles

const ExpandableBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function to handle opening/closing the content
  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="expandable-container">
      {/* Clickable header or button */}
      <button onClick={toggleContent} className="expandable-header">
        {isOpen ? "Hide Content" : "Show Content"}
      </button>

      {/* Content that expands/collapses */}
      <div className={`expandable-content ${isOpen ? "open" : ""}`}>
        {isOpen && (
          <p>
            This is the content that will be shown when the component is
            expanded. You can put any content here, including text, images, or
            other components.
          </p>
        )}
      </div>
    </div>
  );
};

export default ExpandableBox;
