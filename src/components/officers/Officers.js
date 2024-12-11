import React, { useState } from "react";
import TopBar from "../homepage/header/TopBar";
import OfficerBlock from "./OfficerBlock";
import SortButton from "../helper/SortButton";

const Officers = () => {
  const [isReversed, setIsReversed] = useState(false);

  // Data for officers
  const officerData = [
    {
      year: "2025",
      officers: [
        "Master: Jerry Mann", 
        "Senior Warden: Drake Owen", 
        "Junior Warden: Caleb Abernethy",
        "Secretary: Chris Hewes",
        "Treasurer: Ben Lamm",
        ""
    ],
    },
    {
      year: "2024",
      officers: [
        "Master: Christopher Allen Hewes",
        "Senior Warden: Jerry Mann",
        "Junior Warden: Drake Owen",
        "Treasurer: Ben Lamm",
        "Secretary: Dana Hawkins",
        "Chaplain: Wayne Alley",
        "Senior Deacon: Caleb Abernethy",
        "Junior Deacon: Anthony Vied",
        "Senior Steward: Richard DeKeyser",
        "Tyler: Timothy Waldrop",
        "Assistant Secretary: Jerry Mann",
      ],
    },
  ];

  // Toggle sort order for the years
  const toggleSortOrder = () => {
    setIsReversed((prev) => !prev);
  };

  // Determine the sorted data
  const sortedOfficerData = isReversed ? [...officerData].reverse() : officerData;

  return (
    <div>
      <TopBar />
      <SortButton toggleSortOrder={toggleSortOrder} isReversed={isReversed} />
      {sortedOfficerData.map(({ year, officers }) => (
        <OfficerBlock key={year} year={year} officers={officers} />
      ))}
    </div>
  );
};

export default Officers;
