import { useMemo } from "react";
import "./BenefitsFirstIcon.css";

const BenefitsFirstIcon = ({
  className = "",
  edgesensorHighsvg,
  heading3KeepUsingYourFavo,
  getThatSafeRideHomeFindTh,
  restaurantAndPinTheLocalA,
  stayingConnectedWithYourL,
  propGap,
  propWidth,
  propAlignSelf,
  propWidth1,
  propHeight,
  propWidth2,
}) => {
  const benefitsFirstIconStyle = useMemo(() => {
    return {
      gap: propGap,
      width: propWidth,
    };
  }, [propGap, propWidth]);

  const firstRowImagesStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth1,
    };
  }, [propAlignSelf, propWidth1]);

  const edgesensorHighsvgIconStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth2,
    };
  }, [propHeight, propWidth2]);

  return (
    <div
      className={`benefits-first-icon ${className}`}
      style={benefitsFirstIconStyle}
    >
      <div className="first-row-images" style={firstRowImagesStyle}>
        <img
          className="edgesensor-highsvg-icon"
          loading="lazy"
          alt=""
          src={edgesensorHighsvg}
          style={edgesensorHighsvgIconStyle}
        />
      </div>
      <div className="first-row-titles-parent">
        <div className="first-row-titles">
          <h3 className="heading-34">{heading3KeepUsingYourFavo}</h3>
        </div>
        <p className="get-that-safe-container">
          <span className="get-that-safe">{getThatSafeRideHomeFindTh}</span>
          <span className="restaurant-and-pin">
            {restaurantAndPinTheLocalA}
          </span>
          <span className="staying-connected-with">
            {stayingConnectedWithYourL}
          </span>
        </p>
      </div>
    </div>
  );
};

BenefitsFirstIcon.propTypes = {
  className: PropTypes.string,
  edgesensorHighsvg: PropTypes.string,
  heading3KeepUsingYourFavo: PropTypes.string,
  getThatSafeRideHomeFindTh: PropTypes.string,
  restaurantAndPinTheLocalA: PropTypes.string,
  stayingConnectedWithYourL: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propWidth1: PropTypes.any,
  propHeight: PropTypes.any,
  propWidth2: PropTypes.any,
};

export default BenefitsFirstIcon;
