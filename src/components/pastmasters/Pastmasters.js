import React, { useState } from "react";
import ExpandableBox from "../helper/ExpandableBox";
import TopBar from "../homepage/header/TopBar";
import "./Pastmasters.css";
import AcsSortImg from "../../imgs/acs_sort_icon.png";
import DesSortImg from "../../imgs/des_sort_icon.png";



const Pastmasters = () => {
  const svPickens = "/MarkdownData/PMData/Bios/SVPickens.md";
  const tlGash = "/MarkdownData/PMData/Bios/TLGash.md";
  const bcLankford = "/MarkdownData/PMData/Bios/BCLankford.md";
  const svKing = "/MarkdownData/PMData/Bios/svking.md";
  const waGnash = "/MarkdownData/PMData/Bios/WAGash.md";

  const [sortDescending, setSortDescending] = useState(false);

  const pastMastersArray = [
    {
      markdownFile: svPickens,
      fileName: "S.V Pickens 8/5/1867 - 1868",
      imageSrc: "/MarkdownData/PMData/PMImgs/svpickens.jpg",
      customNumber: 1,
    },
    {
      markdownFile: tlGash,
      fileName: "T.L Gash 1869 - June 1873",
      imageSrc: "/MarkdownData/PMData/PMImgs/tlgash.jpg",
      customNumber: 2,
    },
    {
      markdownFile: bcLankford,
      fileName: "B. C. Lankford 1873 - June 1875",
      imageSrc: "/MarkdownData/PMData/PMImgs/bclankford.jpg",
      customNumber: 3,
    },
    {
      markdownFile: tlGash,
      fileName: "T.L Gash 1875-1876",
      imageSrc: "/MarkdownData/PMData/PMImgs/tlgash.jpg",
      customNumber: 2,
    },
    {
      markdownFile: svKing,
      fileName: "S.V King 1876-1877",
      imageSrc: "/MarkdownData/PMData/PMImgs/tlgash.jpg",
      customNumber: 4,
    },
    {
      markdownFile: waGnash,
      fileName: "W.A Gash 1877 - 1879",
      imageSrc: "/MarkdownData/PMData/PMImgs/WAGash.jpg",
      customNumber: 5,
    },
    {
      markdownFile: bcLankford,
      fileName: "B. C. Lankford 1979 - 1880",
      imageSrc: "/MarkdownData/PMData/PMImgs/bclankford.jpg",
      customNumber: 3,
    },
    {
      markdownFile: waGnash,
      fileName: "W.A Gash 1880 - 1881",
      imageSrc: "/MarkdownData/PMData/PMImgs/WAGash.jpg",
      customNumber: 5,
    },
  ];

  const sortedMasters = [...pastMastersArray].sort((a, b) => {
    if (sortDescending) {
      return b.customNumber - a.customNumber; // Descending order
    }
    return a.customNumber - b.customNumber; // Ascending order
  });

  const toggleSortOrder = () => {
    setSortDescending((prev) => !prev);
  };

  return (
    <div className="PMContainer">
      <TopBar />
      <div className="sort-button-container" onClick={toggleSortOrder}>
        <img
          src={
            sortDescending
              ? AcsSortImg 
              : DesSortImg
          }
          alt={
            sortDescending
              ? "Sort Oldest to Most Current"
              : "Sort Most Current to Oldest"
          }
          className="sort-button-image"
        />
        <div className="sort-text">Sort</div>
      </div>
      <div className="PMListContainer">
        <ol className="PMList">
          <div className="PMBoxes">
          {sortedMasters.map((master, index) => (
              <li key={index} className="custom-list-item">
                <span className="custom-number">
                  {master.customNumber}. {/* Display custom number */}
                </span>
                <ExpandableBox
                  markdownFile={master.markdownFile}
                  fileName={master.fileName}
                  imageSrc={master.imageSrc}
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
