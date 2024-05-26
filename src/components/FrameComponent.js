import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`section-wrapper ${className}`}>
      <div className="section3">
        <img
          className="banner-appsvg-fill-icon"
          alt=""
          src="/bannerappsvg-fill.svg"
        />
        <h1 className="download-the-app-container">
          <span className="download-the-app-container1">
            <p className="download-the-app">Download the App and</p>
            <p className="manage-your-esims">manage your eSIMs</p>
            <p className="easily">easily</p>
          </span>
        </h1>
        <div className="app-store-buttons">
          <img className="link-icon" loading="lazy" alt="" src="/link.svg" />
          <img className="link-icon1" alt="" src="/link-1.svg" />
        </div>
        <img className="image-icon14" alt="" src="/image-12@2x.png" />
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
