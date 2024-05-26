import Header from "./Header";
import PropTypes from "prop-types";
import "./FrameComponent7.css";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <section className={`header-wrapper ${className}`}>
      <Header
        frameDivAlignSelf="unset"
        frameDivFlex="1"
        eNEURTextDecoration="unset"
      />
    </section>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;