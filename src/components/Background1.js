import "./Background1.css";

const Background1 = ({ className = "" }) => {
  return (
    <div className={`background43 ${className}`}>
      <div className="canada">4.6</div>
      <div className="star-trust-pilot">
        <div className="div13">/5</div>
      </div>
      <div className="star-trustpilotsvg-wrapper">
        <img
          className="star-trustpilotsvg-icon"
          alt=""
          src="/startrustpilotsvg.svg"
        />
      </div>
      <div className="trust-pilot-wrapper">
        <div className="trust-pilot">
          <div className="based-on-37000-container">
            <p className="based-on-37000">Based on 37000+  </p>
            <p className="customer-reviews-on">customer reviews on</p>
          </div>
          <u className="trustpilot">Trustpilot</u>
        </div>
      </div>
    </div>
  );
};

Background1.propTypes = {
  className: PropTypes.string,
};

export default Background1;
