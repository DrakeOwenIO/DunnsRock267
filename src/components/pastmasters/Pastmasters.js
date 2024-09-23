import ExpandableBox from "../helper/ExpandableBox";
import TopBar from "../homepage/header/TopBar";

const Pastmasters = () => {
    const svPickens = "/MarkdownData/PMData/SVPickens.md";

    return(
        <div className="PMContainer">
            <TopBar />
            <ExpandableBox markdownFile={svPickens} fileName={"S.V Pickens 8/5/1967 - 1868"}/>
        </div>
        
    );
};

export default Pastmasters;