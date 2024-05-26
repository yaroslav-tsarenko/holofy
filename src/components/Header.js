import { useMemo } from "react";
import { Button } from "@mui/material";
import "./Header.css";

const Header = ({
  className = "",
  frameDivAlignSelf,
  frameDivFlex,
  eNEURTextDecoration,
}) => {
  const headerStyle = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
      flex: frameDivFlex,
    };
  }, [frameDivAlignSelf, frameDivFlex]);

  const eNEURStyle = useMemo(() => {
    return {
      textDecoration: eNEURTextDecoration,
    };
  }, [eNEURTextDecoration]);

  return (
    <header className={`header ${className}`} style={headerStyle}>
      <div className="background41">
        <img
          className="whatsapp-headersvg-icon"
          alt=""
          src="/whatsapp-headersvg.svg"
        />
        <div className="whatsapp-247-1-661-384-84-wrapper">
          <div className="whatsapp-247-1-container">
            <span>{`WhatsApp 24/7: `}</span>
            <span className="span6">+1 (661) 384-8482</span>
          </div>
        </div>
      </div>
      <div className="navigation">
        <div className="menu">
          <div className="menu-items">
            <img
              className="link-holafly-logosvg"
              alt=""
              src="/link--holaflylogosvg.svg"
            />
            <nav className="primary-menu">
              <nav className="main-links">
                <a className="item-link7">Destinations</a>
                <a className="item-link8">About us</a>
                <a className="item-link9">FAQs</a>
                <a className="item-link10">Reviews</a>
                <a className="item-link11">Contact us</a>
              </nav>
            </nav>
          </div>
          <div className="user-actions">
            <div className="auth-buttons">
              <Button
                className="link37"
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#292b2e",
                  fontSize: "14",
                  background: "#fff",
                  border: "#e4e6ea solid 1px",
                  borderRadius: "12px",
                  "&:hover": { background: "#fff" },
                  width: 77,
                  height: 40,
                }}
              >
                Login
              </Button>
              <div className="button">
                <img
                  className="languagesvg-icon"
                  alt=""
                  src="/languagesvg.svg"
                />
                <div className="en-eur" style={eNEURStyle}>
                    EN - EUR (€)
                </div>
              </div>
              <div className="vertical-divider-parent">
                <div className="vertical-divider" />
                <img className="button-icon" alt="" src="/button.svg" />
              </div>
              <div className="button1">
                <div className="carritooksvg-parent">
                  <img
                    className="carritooksvg-icon"
                    alt=""
                    src="/carritooksvg.svg"
                  />
                  <div className="background42">
                    <a className="cart-item-count">0</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,

  /** Style props */
  frameDivAlignSelf: PropTypes.any,
  frameDivFlex: PropTypes.any,
  eNEURTextDecoration: PropTypes.any,
};

export default Header;
