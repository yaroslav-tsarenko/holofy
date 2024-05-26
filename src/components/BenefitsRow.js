import { useMemo } from "react";
import "./BenefitsRow.css";

const BenefitsRow = ({
  className = "",
  unlimitedSmallsvg,
  heading3UnlimitedData,
  getUnlimitedDataPlansAtMu,
  destinations,
  propWidth,
  propPadding,
  propAlignSelf,
  propMargin,
  propFlex,
}) => {
  const benefitsRowStyle = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  const benefitTitlesStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const heading3Style = useMemo(() => {
    return {
      margin: propMargin,
      flex: propFlex,
    };
  }, [propMargin, propFlex]);

  return (
    <div className={`benefits-row ${className}`} style={benefitsRowStyle}>
      <div className="benefit-icons">
        <img
          className="unlimited-smallsvg-icon"
          alt=""
          src={unlimitedSmallsvg}
        />
      </div>
      <div className="benefit-headings">
        <div className="benefit-titles" style={benefitTitlesStyle}>
          <b className="heading-31" style={heading3Style}>
            {heading3UnlimitedData}
          </b>
        </div>
        <div className="get-unlimited-data-container">
          <p className="get-unlimited-data">{getUnlimitedDataPlansAtMu}</p>
          <p className="destinations">{destinations}</p>
        </div>
      </div>
    </div>
  );
};

BenefitsRow.propTypes = {
  className: PropTypes.string,
  unlimitedSmallsvg: PropTypes.string,
  heading3UnlimitedData: PropTypes.string,
  getUnlimitedDataPlansAtMu: PropTypes.string,
  destinations: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propPadding: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propMargin: PropTypes.any,
  propFlex: PropTypes.any,
};

export default BenefitsRow;
