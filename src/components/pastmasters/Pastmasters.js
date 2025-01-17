import React, { useState, useEffect } from "react";
import ExpandableBox from "../helper/ExpandableBox";
import TopBar from "../homepage/header/TopBar";
import SortButton from "../helper/SortButton";
import "./Pastmasters.css";
import axios from "axios";

const Pastmasters = () => {
  const [pastMasters, setPastMasters] = useState([]);
  const [isAscending, setIsAscending] = useState(true); // State for sorting order

  // Fetch data from the server
  useEffect(() => {
    axios
      .get("http://localhost:5001/api/pastmasters")
      .then((response) => {
        setPastMasters(response.data);
      })
      .catch((error) => console.error("Error fetching past masters:", error));
  }, []);

  // Toggle the sort order state and sort the data
  const toggleSortOrder = () => {
    setIsAscending((prev) => !prev);
  };

  // Sort the array based on the state (ascending or descending)
  const sortedPastMasters = [...pastMasters].sort((a, b) =>
    isAscending ? a.StartYear - b.StartYear : b.StartYear - a.StartYear
  );

  return (
    <div className="PMContainer">
      <TopBar />
      <SortButton toggleSortOrder={toggleSortOrder} isAscending={isAscending} />
      <div className="PMListContainer">
        <ol className="PMList">
          <div className="PMBoxes">
            {sortedPastMasters.map((master) => (
              <li key={master.ID} className="custom-list-item">
                <span className="custom-number">
                  {master.MasterNumber}. {/* Display custom number */}
                </span>
                {master.StartYear > 1931 ? (
                  <ExpandableBox
                    name={master.Name}
                    term={`${master.StartYear}`}
                    bio={master.Bio}
                    imageSrc={master.ImageSrc}
                  />
                ) : (
                  <ExpandableBox
                    name={master.Name}
                    term={`${master.StartYear} - ${master.EndYear}`}
                    bio={master.Bio}
                    imageSrc={master.ImageSrc}
                  />
                )}
              </li>
            ))}
          </div>
        </ol>
      </div>
    </div>
  );
};

export default Pastmasters;
