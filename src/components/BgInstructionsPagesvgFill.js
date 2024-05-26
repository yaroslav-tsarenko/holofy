import BenefitsRow from "./BenefitsRow";
import PropTypes from "prop-types";
import "./BgInstructionsPagesvgFill.css";

const BgInstructionsPagesvgFill = ({ className = "" }) => {
  return (
    <section className={`bg-instructions-pagesvg-fill ${className}`}>
      <div className="bg-instructions-pagesvg">
        <div className="group">
          <img className="group-icon" alt="" src="/group.svg" />
          <img className="group-icon1" alt="" src="/group-1.svg" />
          <img className="group-icon2" alt="" src="/group-2.svg" />
          <img className="group-icon3" alt="" src="/group-3.svg" />
          <img className="group-icon4" alt="" src="/group-4.svg" />
          <img className="group-icon5" alt="" src="/group-5.svg" />
          <img className="group-icon6" alt="" src="/group-6.svg" />
          <img className="group-icon7" alt="" src="/group-7.svg" />
          <img className="group-icon8" alt="" src="/group-8.svg" />
          <img className="group-icon9" alt="" src="/group-9.svg" />
          <img className="group-icon10" alt="" src="/group-10.svg" />
          <img className="group-icon11" alt="" src="/group-11.svg" />
          <img className="group-icon12" alt="" src="/group-12.svg" />
          <img className="group-icon13" alt="" src="/group-13.svg" />
          <img className="group-icon14" alt="" src="/group-14.svg" />
          <img className="group-icon15" alt="" src="/group-15.svg" />
          <img className="group-icon16" alt="" src="/group-16.svg" />
          <img className="group-icon17" alt="" src="/group-17.svg" />
          <img className="group-icon18" alt="" src="/group-18.svg" />
          <img className="group-icon19" alt="" src="/group-19.svg" />
          <img className="group-icon20" alt="" src="/group-20.svg" />
          <img className="group-icon21" alt="" src="/group-21.svg" />
          <img className="group-icon22" alt="" src="/group-22.svg" />
          <img className="group-icon23" alt="" src="/group-23.svg" />
          <img className="group-icon24" alt="" src="/group-24.svg" />
          <img className="group-icon25" alt="" src="/group-25.svg" />
          <img className="group-icon26" alt="" src="/group-26.svg" />
          <img className="group-icon27" alt="" src="/group-27.svg" />
          <img className="group-icon28" alt="" src="/group-28.svg" />
          <img className="group-icon29" alt="" src="/group-29.svg" />
          <img className="group-icon30" alt="" src="/group-30.svg" />
          <img className="group-icon31" alt="" src="/group-31.svg" />
          <img className="group-icon32" alt="" src="/group-32.svg" />
          <img className="group-icon33" alt="" src="/group-33.svg" />
          <img className="group-icon34" alt="" src="/group-34.svg" />
          <img className="group-icon35" alt="" src="/group-35.svg" />
          <img className="group-icon36" alt="" src="/group-36.svg" />
          <img className="group-icon37" alt="" src="/group-37.svg" />
        </div>
        <BenefitsRow
          unlimitedSmallsvg="/unlimitedsmallsvg.svg"
          heading3UnlimitedData="Unlimited data"
          getUnlimitedDataPlansAtMu="Get unlimited data plans at multiple"
          destinations="destinations."
        />
        <div className="benefits-row1">
          <div className="no-additional-chargessvg-wrapper">
            <img
              className="no-additional-chargessvg-icon"
              alt=""
              src="/noadditionalchargessvg.svg"
            />
          </div>
          <div className="frame-container">
            <div className="heading-3-no-roaming-charges-wrapper">
              <h3 className="heading-32">No roaming charges</h3>
            </div>
            <p className="travel-and-stay-container">
              <span className="travel-and-stay">
                Travel and stay connected without
              </span>
              <span className="roaming-or-surprise">
                roaming or surprise bills.
              </span>
            </p>
          </div>
        </div>
        <BenefitsRow
          unlimitedSmallsvg="/digitalsimsvg.svg"
          heading3UnlimitedData="Keep your physical SIM"
          getUnlimitedDataPlansAtMu="Keep your local SIM card to receive"
          destinations="calls."
          propWidth="230.2px"
          propPadding="0px 4px 0px 0px"
          propAlignSelf="stretch"
          propMargin="0"
          propFlex="1"
        />
        <BenefitsRow
          unlimitedSmallsvg="/rocketbeneficiossvg.svg"
          heading3UnlimitedData="Easy installation"
          getUnlimitedDataPlansAtMu="Purchase and setup your eSIM in"
          destinations="minutes."
          propWidth="208.1px"
          propPadding="unset"
          propAlignSelf="unset"
          propMargin="unset"
          propFlex="unset"
        />
      </div>
    </section>
  );
};

BgInstructionsPagesvgFill.propTypes = {
  className: PropTypes.string,
};

export default BgInstructionsPagesvgFill;
