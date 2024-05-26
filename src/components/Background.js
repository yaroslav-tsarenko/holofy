import { useMemo } from "react";
import "./Background.css";

const Background = ({
  className = "",
  wavepng,
  a28413d6761d624ff11223c3c,
  itemLinkTextDecoration,
  itemLinkTextDecoration1,
}) => {
  const itemLinkStyle = useMemo(() => {
    return {
      textDecoration: itemLinkTextDecoration,
    };
  }, [itemLinkTextDecoration]);

  const itemLink1Style = useMemo(() => {
    return {
      textDecoration: itemLinkTextDecoration1,
    };
  }, [itemLinkTextDecoration1]);

  return (
    <footer className={`background53 ${className}`}>
      <div className="footer-content-container">
        <div className="footer-columns">
          <div className="holafly-logo-and-links">
            <div className="link44">
              <img
                className="holafly-logosvg-icon"
                loading="lazy"
                alt=""
                src="/holaflylogosvg.svg"
              />
              <img
                className="wavepng-icon"
                loading="lazy"
                alt=""
                src={wavepng}
              />
            </div>
            <div className="social-icons-container">
              <div className="social-icons">
                <div className="border-parent">
                  <div className="border29" />
                  <img className="svg-icon11" alt="" src="/svg.svg" />
                  <img className="svg-icon12" alt="" src="/svg-1.svg" />
                </div>
                <div className="border-group">
                  <div className="border30" />
                  <img className="svg-icon13" alt="" src="/svg-2.svg" />
                  <div className="svg-wrapper">
                    <img className="svg-icon14" alt="" src="/svg-3.svg" />
                  </div>
                </div>
              </div>
              <div className="social-icons-bottom">
                <div className="social-icons-bottom-parent">
                  <div className="social-icons-bottom1">
                    <img
                      className="link-facebooksvg"
                      alt=""
                      src="/link--facebooksvg.svg"
                    />
                  </div>
                  <img
                    className="link-instagramsvg"
                    loading="lazy"
                    alt=""
                    src="/link--instagramsvg.svg"
                  />
                  <div className="social-icon-bottom-container">
                    <img
                      className="link-youtubesvg"
                      alt=""
                      src="/link--youtubesvg.svg"
                    />
                  </div>
                  <div className="social-icons-bottom2">
                    <img
                      className="link-linkedinsvg"
                      alt=""
                      src="/link--linkedinsvg.svg"
                    />
                  </div>
                  <div className="social-icon-bottom-container1">
                    <img
                      className="link-twittersvg"
                      alt=""
                      src="/link--twittersvg.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-links">
            <div className="top-destinations">
              <div className="top-destinations1">Top destinations</div>
              <div className="top-destinations-links">
                <div className="item-link12">Europe</div>
                <div className="item-link13">USA</div>
                <div className="item-link14">Japan</div>
                <div className="item-link15">Turkey</div>
                <div className="item-link16">Spain</div>
                <div className="item-link17">France</div>
              </div>
            </div>
            <div className="footer-links-column">
              <div className="legal">Legal</div>
              <div className="footer-links1">
                <a className="item-link18" style={itemLinkStyle}>
                  Terms and Conditions
                </a>
                <a className="item-link19" style={itemLink1Style}>
                  Privacy Policy
                </a>
                <div className="item-link20">Cookies Policy</div>
                <div className="item-link21">Refund Policy</div>
                <div className="item-link22">Website Terms of Use</div>
              </div>
            </div>
            <div className="footer-links-column1">
              <div className="interest">Interest</div>
              <div className="item-link-what-is-an-esim-parent">
                <div className="item-link23">What is an eSIM</div>
                <div className="item-link24">eSIM compatible devices</div>
                <div className="item-link25">
                  How to install and activate your eSIM
                </div>
                <div className="item-link26">FAQs</div>
                <div className="item-link27">Blog</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="horizontalborder4">
        <div className="made-with-wrapper">
          <div className="made-with">{`Made with `}</div>
        </div>
        <img className="lovesvg-icon" alt="" src="/lovesvg.svg" />
        <div className="by-people-who-love-to-travel-wrapper">
          <div className="by-people-who"> by people who love to travel.</div>
        </div>
        <div className="holafly-2024">Holafly 2024 ®</div>
      </div>
      <div className="button-open-intercom-messeng">
        <img
          className="a28413d6761d624ff11223c3c1cfd0-icon"
          loading="lazy"
          alt=""
          src={a28413d6761d624ff11223c3c}
        />
      </div>
    </footer>
  );
};

Background.propTypes = {
  className: PropTypes.string,
  wavepng: PropTypes.string,
  a28413d6761d624ff11223c3c: PropTypes.string,

  /** Style props */
  itemLinkTextDecoration: PropTypes.any,
  itemLinkTextDecoration1: PropTypes.any,
};

export default Background;
