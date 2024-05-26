import { useMemo } from "react";
import "./LinkEurope.css";

const LinkEurope = ({
  className = "",
  europepng,
  europe,
  from600,
  propMinWidth,
  propMargin,
  propDisplay,
  propMinWidth1,
  propDebugCommit,
  propDebugCommit1,
}) => {
  const europeStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
      margin: propMargin,
      display: propDisplay,
    };
  }, [propMinWidth, propMargin, propDisplay]);

  const from6001Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
      debugCommit: propDebugCommit,
    };
  }, [propMinWidth1, propDebugCommit]);

  const eUR1Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  return (
    <div className={`link-europe ${className}`}>
      <div className="wrapper-europepng-wrapper">
        <div className="wrapper-europepng">
          <img className="europepng-icon" alt="" src={europepng} />
        </div>
      </div>
      <div className="esim-parent">
        <div className="esim3">eSIM</div>
        <div className="europe" style={europeStyle}>
          {europe}
        </div>
        <div className="destination-pricing">
          <div className="from-600-parent">
            <div className="from-6001" style={from6001Style}>
              {from600}
            </div>
            <div className="destination-currency">
              <b className="eur1" style={eUR1Style}>
                {" "}
                EUR
              </b>
            </div>
          </div>
          <div className="destination-flags">
            <img className="image-icon8" alt="" src="/image.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

LinkEurope.propTypes = {
  className: PropTypes.string,
  europepng: PropTypes.string,
  europe: PropTypes.string,
  from600: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propMargin: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propDebugCommit: PropTypes.any,
  propDebugCommit1: PropTypes.any,
};

export default LinkEurope;
