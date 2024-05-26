import "./FrameComponent5.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <div className={`e-sim-content-wrapper ${className}`}>
      <div className="e-sim-content">
        <div className="e-sim-title-wrapper">
          <div className="e-sim-title">
            <div className="international-e-sim">
              <div className="e-sim-heading">
                <div className="heading-11">International eSIM</div>
              </div>
              <h1 className="stay-connected-wherever-container">
                <p className="stay-connected">Stay connected</p>
                <p className="wherever-you-go">
                  <span>wherever</span>
                  <span className="you-go"> you go</span>
                </p>
              </h1>
            </div>
            <p className="with-holaflys-esim-container">
              <span className="with-holaflys-esim">
                With Holafly’s eSIM, enjoy internet connection on every
                adventure
              </span>
              <span className="and-forget-about">
                and forget about expensive roaming bills upon your return.
              </span>
            </p>
            <div className="form">
              <div className="location-input">
                <div className="location-field">
                  <div className="locationsvg-parent">
                    <img
                      className="locationsvg-icon"
                      alt=""
                      src="/locationsvg.svg"
                    />
                    <div className="vertical-divider1" />
                  </div>
                  <input
                    className="location-placeholder"
                    placeholder="Where do you need internet?"
                    type="text"
                  />
                </div>
              </div>
              <div className="button-search">
                <img
                  className="searchpng-icon"
                  alt=""
                  src="/searchpng@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className="banner-compositionwebp-icon"
          loading="lazy"
          alt=""
          src="/bannercompositionwebp@2x.png"
        />
      </div>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
