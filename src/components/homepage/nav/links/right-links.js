import "./right-links.css";

const RightLinks = () => {
  return (
    <div className="right-parent">
      <div className="link-top-right">
        <a href="/pastmasters" className="link link-bottom-left">
          Past Masters
        </a>
      </div>
      <div className="link-bottom-right">
        <a href="/photogallery" className="link link-bottom-right">
          Photo Gallery
        </a>
      </div>
    </div>
  );
};

export default RightLinks;
