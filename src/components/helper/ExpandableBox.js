import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "./Expandable.css"; 

const ExpandableBox = ({ markdownFile, fileName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [markdownContent, setMarkdownContent] = useState("");

  //Fetch markdown data
  useEffect(() => {
    fetch(markdownFile)
      .then((res) => res.text())
      .then((text) => setMarkdownContent(text))
      .catch((err)=> console.error("Error loading content: ", err));
  }, [markdownFile]);

  // Toggle function to handle opening/closing the content
  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="expandable-container">

      {/* Clickable header or button */}
      <button onClick={toggleContent} className="expandable-header">
        {isOpen ? `${fileName}` : `${fileName}`}
      </button>

      {/* Content that expands/collapses */}
      <div className={`expandable-content ${isOpen ? "open" : ""}`}>
        {isOpen && <ReactMarkdown>{markdownContent}</ReactMarkdown>}
      </div>
    </div>
  );
};

export default ExpandableBox;
