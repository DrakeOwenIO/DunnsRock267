import ExpandableBox from "../helper/ExpandableBox";
import TopBar from "../homepage/header/TopBar";
import "./Pastmasters.css";

const Pastmasters = () => {
  const svPickens = "/MarkdownData/PMData/SVPickens.md";
  const tlGash = "/MarkdownData/PMData/TLGash.md";
  const bcLankford = "/MarkdownData/PMData/BCLankford.md";

  const pastMastersArray = [
    {
      markdownFile: svPickens,
      fileName: "S.V Pickens 8/5/1867 - 1868",
      customNumber: 1,
    },
    {
      markdownFile: tlGash,
      fileName: "T.L Gash 1869 - June 1873",
      customNumber: 2,
    },
    {
      markdownFile: bcLankford,
      fileName: "B. C. Lankford 1873 - June 1875",
      customNumber: 3,
    },
  ];

  return (
    <div className="PMContainer">
      <TopBar />
      <div className="PMListContainer">
        <ol className="PMList">
          <div className="PMBoxes">
            {pastMastersArray.map((master, index) => (
              <li key={index} className="custom-list-item">
                <span className="custom-number">
                  {master.customNumber}. {/* Display custom number */}
                </span>
                <ExpandableBox
                  markdownFile={master.markdownFile}
                  fileName={master.fileName}
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
