import React, { useState, useEffect } from "react";
import ExpandableBox from "../helper/ExpandableBox";
import TopBar from "../homepage/header/TopBar";
import SortButton from "../helper/SortButton";
import "./Pastmasters.css";
import axios from "axios";

const Pastmasters = () => {
  const [pastMasters, setPastMasters] = useState([]);
  const [isReversed, setIsReversed] = useState(false);

  // Fetch data from the server
  useEffect(() => {
    axios
      .get("http://localhost:5001/api/pastmasters")
      .then((response) => {
        setPastMasters(response.data);
      })
      .catch((error) => console.error("Error fetching past masters:", error));
  }, []);

  // Toggle the sort order state
  const toggleSortOrder = () => {
    setIsReversed((prev) => !prev);
  };

  // Sort the array based on the state
  const displayOrder = isReversed ? [...pastMasters].reverse() : pastMasters;

  return (
    <div className="PMContainer">
      <TopBar />
      <SortButton toggleSortOrder={toggleSortOrder} isReversed={isReversed} />
      <div className="PMListContainer">
        <ol className="PMList">
          <div className="PMBoxes">
            {displayOrder.map((master) => (
              <li key={master.MasterNumber} className="custom-list-item">
                <ExpandableBox
                  name={master.Name}
                  term={`${master.StartYear} - ${master.EndYear}`}
                  bio={master.Bio} 
                  imageSrc={master.ImageSrc}
                />
              </li>
            ))}
          </div>
        </ol>
      </div>
    </div>
  );
};

export default Pastmasters;
