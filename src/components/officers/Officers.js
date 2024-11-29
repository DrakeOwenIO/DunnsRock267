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
      officers: ["Master: Jerry Mann", "Senior Warden: Drake Owen", "Junior Warden: Caleb Abernethy"],
    },
    {
      year: "2024",
      officers: [
        "Master: Christopher Allen Hewes",
        "Senior Warden: Jerry Dean Mann",
        "Junior Warden: Drake Kyndall Owen",
        "Treasurer: Benajah Scott Lamm",
        "Secretary: William Dana Hawkins",
        "Chaplain: Wayne Arthur Alley",
        "Senior Deacon: Caleb Andrew Abernethy",
        "Junior Deacon: Anthony Wayne Vied",
        "Senior Steward: Richard Thomas DeKeyser",
        "Tyler: Timothy Carl Waldrop",
        "Assistant Secretary: Jerry Dean Mann",
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
