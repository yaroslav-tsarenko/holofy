import { useMemo } from "react";
import "./BackgroundBorder.css";

const BackgroundBorder = ({
  className = "",
  visibilityOnsvg,
  whatHappensIfIUseUpMyData,
  exhaustTheDaysOfValidity,
  propBackgroundImage,
  propPadding,
  propDisplay,
  propAlignSelf,
}) => {
  const backgroundBorderStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const whatHappensIfContainerStyle = useMemo(() => {
    return {
      display: propDisplay,
      alignSelf: propAlignSelf,
    };
  }, [propDisplay, propAlignSelf]);

  return (
    <div
      className={`backgroundborder10 ${className}`}
      style={backgroundBorderStyle}
    >
      <div className="visibility-onsvg-container" style={frameDiv1Style}>
        <img className="visibility-onsvg-icon2" alt="" src={visibilityOnsvg} />
      </div>
      <h3
        className="what-happens-if-container"
        style={whatHappensIfContainerStyle}
      >
        <p className="what-happens-if">{whatHappensIfIUseUpMyData}</p>
        <p className="exhaust-the-days">{exhaustTheDaysOfValidity}</p>
      </h3>
    </div>
  );
};

BackgroundBorder.propTypes = {
  className: PropTypes.string,
  visibilityOnsvg: PropTypes.string,
  whatHappensIfIUseUpMyData: PropTypes.string,
  exhaustTheDaysOfValidity: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,
  propPadding: PropTypes.any,
  propDisplay: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default BackgroundBorder;
