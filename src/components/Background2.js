import { useMemo } from "react";
import "./Background2.css";

const Background2 = ({
  className = "",
  wavepng,
  sVG,
  sVG1,
  sVG2,
  sVG3,
  linkFacebooksvg,
  linkInstagramsvg,
  linkYoutubesvg,
  linkLinkedinsvg,
  linkTwittersvg,
  a28413d6761d624ff11223c3c,
  propDebugCommit,
  propDebugCommit1,
  propDebugCommit2,
  propDebugCommit3,
}) => {
  const topDestinationsStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const destinationLinksStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  const interestStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit2,
    };
  }, [propDebugCommit2]);

  const frameDivStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit3,
    };
  }, [propDebugCommit3]);

  return (
    <footer className={`background61 ${className}`}>
      <div className="footer-content1">
        <div className="footer-top">
          <div className="footer-links2">
            <div className="link48">
              <img
                className="holafly-logosvg-icon1"
                loading="lazy"
                alt=""
                src="/holaflylogosvg.svg"
              />
              <img
                className="wavepng-icon1"
                loading="lazy"
                alt=""
                src={wavepng}
              />
            </div>
            <div className="footer-menus">
              <div className="menu-container">
                <div className="menu-column">
                  <div className="border35" />
                  <img className="svg-icon16" alt="" src={sVG} />
                  <img className="svg-icon17" alt="" src={sVG1} />
                </div>
                <div className="menu-column1">
                  <div className="border36" />
                  <img className="svg-icon18" alt="" src={sVG2} />
                  <div className="svg-container">
                    <img className="svg-icon19" alt="" src={sVG3} />
                  </div>
                </div>
              </div>
              <div className="social-links-container">
                <div className="social-link-column">
                  <div className="social-link-item">
                    <img
                      className="link-facebooksvg1"
                      alt=""
                      src={linkFacebooksvg}
                    />
                  </div>
                  <img
                    className="link-instagramsvg1"
                    alt=""
                    src={linkInstagramsvg}
                  />
                  <div className="youtube-container">
                    <img
                      className="link-youtubesvg1"
                      alt=""
                      src={linkYoutubesvg}
                    />
                  </div>
                  <div className="social-link-item1">
                    <img
                      className="link-linkedinsvg1"
                      alt=""
                      src={linkLinkedinsvg}
                    />
                  </div>
                  <div className="twitter-container">
                    <img
                      className="link-twittersvg1"
                      alt=""
                      src={linkTwittersvg}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="top-destinations-parent">
              <div className="top-destinations2" style={topDestinationsStyle}>
                Top destinations
              </div>
              <div className="destination-links1" style={destinationLinksStyle}>
                <div className="item-link28">Europe</div>
                <div className="item-link29">USA</div>
                <div className="item-link30">Japan</div>
                <div className="item-link31">Turkey</div>
                <div className="item-link32">Spain</div>
                <div className="item-link33">France</div>
              </div>
            </div>
            <div className="legal-parent">
              <div className="legal1">Legal</div>
              <div className="legal-links">
                <a className="item-link34">Terms and Conditions</a>
                <a className="item-link35">Privacy Policy</a>
                <div className="item-link36">Cookies Policy</div>
                <div className="item-link37">Refund Policy</div>
                <div className="item-link38">Website Terms of Use</div>
              </div>
            </div>
            <div className="interest-parent">
              <div className="interest1" style={interestStyle}>
                Interest
              </div>
              <div
                className="item-link-what-is-an-esim-group"
                style={frameDivStyle}
              >
                <div className="item-link39">What is an eSIM</div>
                <div className="item-link40">eSIM compatible devices</div>
                <div className="item-link41">
                  How to install and activate your eSIM
                </div>
                <div className="item-link42">FAQs</div>
                <div className="item-link43">Blog</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="horizontalborder5">
        <div className="made-with1">{`Made with `}</div>
        <div className="footer-icon">
          <img className="lovesvg-icon1" alt="" src="/lovesvg.svg" />
        </div>
        <div className="footer-slogan">
          <div className="by-people-who1"> by people who love to travel.</div>
        </div>
        <div className="holafly-20241">Holafly 2024 ®</div>
      </div>
      <div className="button-open-intercom-messeng1">
        <img
          className="a28413d6761d624ff11223c3c1cfd0-icon1"
          loading="lazy"
          alt=""
          src={a28413d6761d624ff11223c3c}
        />
      </div>
    </footer>
  );
};

Background2.propTypes = {
  className: PropTypes.string,
  wavepng: PropTypes.string,
  sVG: PropTypes.string,
  sVG1: PropTypes.string,
  sVG2: PropTypes.string,
  sVG3: PropTypes.string,
  linkFacebooksvg: PropTypes.string,
  linkInstagramsvg: PropTypes.string,
  linkYoutubesvg: PropTypes.string,
  linkLinkedinsvg: PropTypes.string,
  linkTwittersvg: PropTypes.string,
  a28413d6761d624ff11223c3c: PropTypes.string,

  /** Style props */
  propDebugCommit: PropTypes.any,
  propDebugCommit1: PropTypes.any,
  propDebugCommit2: PropTypes.any,
  propDebugCommit3: PropTypes.any,
};

export default Background2;
