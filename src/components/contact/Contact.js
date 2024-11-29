import TopBar from "../homepage/header/TopBar";
import "./Contact.css"

const Contact = () => {
    return (
        <div className="ContactContainer">
            <TopBar />
            <div className="ContactTitle">
                <h1>Contact or Locate Us!</h1>
            </div>

            <div className="ContactBody">
                <h2>Email: Secretary@DunnsRockMasonicLodge.Org</h2>
                <p>174 E Main St, Brevard, NC 28712</p>
                <iframe title="Lodge Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.7814264386616!2d-82.73414732378389!3d35.23215875451148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8859bb3385daf96f%3A0x19073831ad2fcec2!2sMasonic%20Lodge!5e1!3m2!1sen!2sus!4v1727064443333!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>

    );
};

export default Contact;