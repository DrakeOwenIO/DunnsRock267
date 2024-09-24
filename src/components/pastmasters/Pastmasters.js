import ExpandableBox from "../helper/ExpandableBox";
import TopBar from "../homepage/header/TopBar";
import "./Pastmasters.css";

const Pastmasters = () => {
  const svPickens = "/MarkdownData/PMData/SVPickens.md";
  const tlGash = "/MarkdownData/PMData/TLGash.md";

  return (
    <div className="PMContainer">
      <TopBar />
      <div className="PMListContainer">
        <ol className="PMList">
          <div className="PMBoxes">
            <li>
              <ExpandableBox
                markdownFile={svPickens}
                fileName={"S.V Pickens 8/5/1867 - 1868"}
              />
            </li>
            <li>
              <ExpandableBox
                markdownFile={tlGash}
                fileName={"T.L Gash 1869 - June 1878"}
              />
            </li>
            <li>
              <ExpandableBox
                markdownFile={tlGash}
                fileName={"T.L Gash 1869 - June 1878"}
              />
            </li>
          </div>
        </ol>
      </div>
    </div>
  );
};

export default Pastmasters;
