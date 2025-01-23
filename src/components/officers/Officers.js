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
        "Treasurer: WB. Ben Lamm",
        "Secretary: WB. Chris Hewes",
        "Senior Deacon: Anthony Vied",
        "Junior Deacon: Rick Dekeyser",
        "Senior Steward: Joseph Girmann",
        "Chaplin: WB. Wayne Alley",
        "Tyler: WB. Tim Waldrop"
    ],
    },
    {
      year: "2024",
      officers: [
        "Master: Christopher Hewes",
        "Senior Warden: Jerry Mann",
        "Junior Warden: Drake Owen",
        "Treasurer: WB. Ben Lamm",
        "Secretary: WB. Dana Hawkins",
        "Chaplain: WB. Wayne Alley",
        "Senior Deacon: Caleb Abernethy",
        "Junior Deacon: Anthony Vied",
        "Senior Steward: WB. Rick DeKeyser",
        "Tyler: WB. Tim Waldrop",
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
