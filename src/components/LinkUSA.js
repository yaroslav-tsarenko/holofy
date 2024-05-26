import { useMemo } from "react";
import "./LinkUSA.css";

const LinkUSA = ({
  className = "",
  unitedStatespng,
  uSA,
  from600,
  propMinWidth,
  propMargin,
  propMinWidth1,
  propDebugCommit,
  propDebugCommit1,
  onLinkUSAClick,
}) => {
  const uSAStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
      margin: propMargin,
    };
  }, [propMinWidth, propMargin]);

  const from600Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
      debugCommit: propDebugCommit,
    };
  }, [propMinWidth1, propDebugCommit]);

  const eURStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  return (
    <div className={`link-usa ${className}`} onClick={onLinkUSAClick}>
      <img className="image-icon7" alt="" src="/image.svg" />
      <div className="esim2">eSIM</div>
      <div className="flags-row">
        <div className="wrapper-united-statespng">
          <img className="united-statespng-icon" alt="" src={unitedStatespng} />
        </div>
        <div className="destination-names">
          <div className="destination-name-labels">
            <div className="usa1" style={uSAStyle}>
              {uSA}
            </div>
            <div className="price-rows">
              <div className="from-600" style={from600Style}>
                {from600}
              </div>
              <div className="u-s-a-currency">
                <b className="eur" style={eURStyle}>
                  {" "}
                  EUR
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LinkUSA.propTypes = {
  className: PropTypes.string,
  unitedStatespng: PropTypes.string,
  uSA: PropTypes.string,
  from600: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propMargin: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propDebugCommit: PropTypes.any,
  propDebugCommit1: PropTypes.any,

  /** Action props */
  onLinkUSAClick: PropTypes.func,
};

export default LinkUSA;
