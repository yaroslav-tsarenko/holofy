import Background from "./Background";
import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "" }) => {
  return (
    <footer className={`footer1 ${className}`}>
      <Background
        wavepng="/wavepng2@2x.png"
        a28413d6761d624ff11223c3c="/6a28413d6761d624ff11223c3c1cfd0dpng@2x.png"
        itemLinkTextDecoration="unset"
        itemLinkTextDecoration1="unset"
      />
      <img className="image-icon17" alt="" src="/image-13@2x.png" />
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
