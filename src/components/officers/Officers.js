import TopBar from "../homepage/header/TopBar"
import OfficerBlock from "./OfficerBlock";

const officers2025 = ['Master: Jerry Mann', 'Senior Warden: Drake Owen', 'Junior Warden: Caleb Abernethy'];

const Officers = () => {
    return(
        <div>
            <TopBar />
            <OfficerBlock year="2025" officers={officers2025} />
        </div>
        
        
    );
};

export default Officers;