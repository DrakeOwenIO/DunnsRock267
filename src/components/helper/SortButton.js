import React from "react";
import AcsSortImg from "../../imgs/acs_sort_icon.png";
import DesSortImg from "../../imgs/des_sort_icon.png";

const SortButton = ({ toggleSortOrder, isReversed }) => {
  return (
    <div className="sort-button-container" onClick={toggleSortOrder}>
      <img
        src={isReversed ? AcsSortImg : DesSortImg}
        alt={
          isReversed
            ? "Sort Oldest to Most Current"
            : "Sort Most Current to Oldest"
        }
        className="sort-button-image"
      />
      <div className="sort-text">Sort</div>
    </div>
  );
};

export default SortButton;