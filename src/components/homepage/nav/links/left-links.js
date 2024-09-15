import "./left-links.css";

const LeftLinks = () => {
  return (
    <div className="left-parent">
      <div className="link-top-left">
        <a href="/newsletters" className="link link-top-left">
          Newsletters
        </a>
      </div>
      <div className="link-bottom-left">
        <a href="/officers" className="link link-top-right">
          Officers
        </a>
      </div>
    </div>
  );
};

export default LeftLinks;
