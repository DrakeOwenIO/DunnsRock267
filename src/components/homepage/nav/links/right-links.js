import "./right-links.css";

const RightLinks = () => {
  return (
    <div className="container">
      <div className="links-container">
        <a href="/pastmasters" className="link link-bottom-left">
          Past Masters
        </a>
        <a href="/photogallery" className="link link-bottom-right">
          Photo Gallery
        </a>
      </div>
    </div>
  );
};

export default RightLinks;
