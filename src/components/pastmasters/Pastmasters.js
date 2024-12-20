import React, { useState } from "react";
import ExpandableBox from "../helper/ExpandableBox";
import TopBar from "../homepage/header/TopBar";
import "./Pastmasters.css";
import SortButton from "../helper/SortButton";

const Pastmasters = () => {


    const svPickens = "/MarkdownData/PMData/Bios/SVPickens.md";
    const tlGash = "/MarkdownData/PMData/Bios/TLGash.md";
    const bcLankford = "/MarkdownData/PMData/Bios/BCLankford.md";
    const svKing = "/MarkdownData/PMData/Bios/svking.md";
    const waGnash = "/MarkdownData/PMData/Bios/WAGash.md";
    const tsWood = "/MarkdownData/PMData/Bios/TSWood.md";
    const emAllison = "/MarkdownData/PMData/Bios/EmAllison.md";
    const jhLanning = "/MarkdownData/PMData/Bios/JHLanning.md";
    const thGalloway = "/MarkdownData/PMData/Bios/THGalloway.md";
  
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
        fileName: "T. L. Gash 1875-1876",
        imageSrc: "/MarkdownData/PMData/PMImgs/tlgash.jpg",
        customNumber: 2,
      },
      {
        markdownFile: svKing,
        fileName: "S. V. King 1876-1877",
        imageSrc: "/MarkdownData/PMData/PMImgs/tlgash.jpg",
        customNumber: 4,
      },
      {
        markdownFile: waGnash,
        fileName: "W. A. Gash 1877 - 1879",
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
        fileName: "W. A. Gash 1880 - 1881",
        imageSrc: "/MarkdownData/PMData/PMImgs/WAGash.jpg",
        customNumber: 5,
      },
      {
        markdownFile: tsWood,
        fileName: "T. S. Wood 1881 - 1886",
        imageSrc: "/MarkdownData/PMData/PMImgs/tswood.jpg",
        customNumber: 6,
      },
      {
        markdownFile: emAllison,
        fileName: "E. M. Allison 1886 - 1887",
        imageSrc: "/MarkdownData/PMData/PMImgs/emallison.jpg",
        customNumber: 7,
      },
      {
        markdownFile: tsWood,
        fileName: "T. S. Wood 1887 - 1889",
        imageSrc: "/MarkdownData/PMData/PMImgs/tswood.jpg",
        customNumber: 6,
      },
      {
        markdownFile: jhLanning,
        fileName: "J. H. Lanning 1889 - 1890",
        customNumber: 8,
      },
      {
        markdownFile: tsWood,
        fileName: "T. S. Wood 1890 - 1895",
        imageSrc: "/MarkdownData/PMData/PMImgs/tswood.jpg",
        customNumber: 6,
      },
      {
        markdownFile: thGalloway,
        fileName: "T.H Galloway 1895 - 1896",
        imageSrc: "/MarkdownData/PMData/PMImgs/thgalloway.jpg",
        customNumber: 9,
      }
    ];

    const [isReversed, setIsReversed] = useState(false);

    // Toggle the sort order state
    const toggleSortOrder = () => {
      setIsReversed((prev) => !prev);
    };
  
    // Sort the array based on the state
    const displayOrder = isReversed
      ? [...pastMastersArray].reverse() // Reverse the array
      : pastMastersArray; // Original order

  return (
    <div className="PMContainer">
      <TopBar />
      <SortButton
        toggleSortOrder={toggleSortOrder}
        isReversed={isReversed}
      />
      <div className="PMListContainer">
        <ol className="PMList">
          <div className="PMBoxes">
          {displayOrder.map((master, index) => (
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

}

  

export default Pastmasters;
