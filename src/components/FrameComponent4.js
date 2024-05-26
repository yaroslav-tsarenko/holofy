import { useCallback } from "react";
import { Button } from "@mui/material";
import LinkUSA from "./LinkUSA";
import LinkEurope from "./LinkEurope";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  const onLinkUSAClick = useCallback(() => {
    // Please sync "EsimUSA" to the project
  }, []);

  return (
    <section className={`destinations-content-wrapper ${className}`}>
      <div className="destinations-content">
        <div className="destinations-heading">
          <div className="destination-title">
            <div className="destinations-question">
              <div className="travel-prompt-parent">
                <div className="travel-prompt">
                  <h1 className="heading-216">Where are you traveling next?</h1>
                </div>
                <div className="choose-your-destination">
                  Choose your destination first, then a data plan according to
                  your needs.
                </div>
              </div>
            </div>
            <div className="destination-cards">
              <LinkUSA
                unitedStatespng="/unitedstatespng@2x.png"
                uSA="USA"
                from600="From €6,00"
                onLinkUSAClick={onLinkUSAClick}
              />
              <LinkEurope
                europepng="/europepng@2x.png"
                europe="Europe"
                from600="From €6,00"
              />
              <LinkUSA
                unitedStatespng="/mexicopng@2x.png"
                uSA="Mexico"
                from600="From €19,00"
                propMinWidth="72.9px"
                propMargin="0"
                propMinWidth1="113px"
                propDebugCommit="unset"
                propDebugCommit1="unset"
              />
              <div className="link-japan">
                <img className="image-icon9" alt="" src="/image.svg" />
                <div className="esim4">eSIM</div>
                <div className="wrapper-japanpng-parent">
                  <div className="wrapper-japanpng">
                    <img
                      className="japanpng-icon"
                      alt=""
                      src="/japanpng@2x.png"
                    />
                  </div>
                  <div className="frame-wrapper1">
                    <div className="japan-parent">
                      <div className="japan">Japan</div>
                      <div className="from-600-group">
                        <div className="from-6002">From €6,00</div>
                        <div className="eur-wrapper">
                          <b className="eur2"> EUR</b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <LinkUSA
                unitedStatespng="/turkeypng@2x.png"
                uSA="Turkey"
                from600="From €6,00"
                propMinWidth="67.3px"
                propMargin="0"
                propMinWidth1="105.8px"
                propDebugCommit="unset"
                propDebugCommit1="unset"
              />
              <LinkEurope
                europepng="/egyptpng@2x.png"
                europe="Egypt"
                from600="From €27,00"
                propMinWidth="59.1px"
                propMargin="0"
                propDisplay="inline-block"
                propMinWidth1="113.4px"
                propDebugCommit="unset"
                propDebugCommit1="unset"
              />
              <div className="link-thailand">
                <div className="wrapper-thailandpng-wrapper">
                  <div className="wrapper-thailandpng">
                    <img
                      className="thailandpng-icon"
                      alt=""
                      src="/thailandpng@2x.png"
                    />
                  </div>
                </div>
                <div className="esim-group">
                  <div className="esim5">eSIM</div>
                  <div className="thailand">Thailand</div>
                  <div className="frame-parent1">
                    <div className="from-600-container">
                      <div className="from-6003">From €6,00</div>
                      <div className="eur-container">
                        <b className="eur3"> EUR</b>
                      </div>
                    </div>
                    <div className="image-frame">
                      <img className="image-icon10" alt="" src="/image.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <LinkEurope
                europepng="/unitedkingdompng@2x.png"
                europe="United Kingdom"
                from600="From €6,00"
                propMinWidth="unset"
                propMargin="0"
                propDisplay="unset"
                propMinWidth1="105.8px"
                propDebugCommit="unset"
                propDebugCommit1="unset"
              />
              <LinkEurope
                europepng="/switzerlandpng@2x.png"
                europe="Switzerland"
                from600="From €6,00"
                propMinWidth="116.3px"
                propMargin="0"
                propDisplay="inline-block"
                propMinWidth1="105.8px"
                propDebugCommit="unset"
                propDebugCommit1="unset"
              />
            </div>
            <div className="destination-links">
              <Button
                className="link38"
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#292b2e",
                  fontSize: "16",
                  background: "#48ec86",
                  borderRadius: "12px",
                  "&:hover": { background: "#48ec86" },
                  width: 368.6,
                  height: 40,
                }}
              >
                View all destinations
              </Button>
            </div>
          </div>
        </div>
        <div className="section-figure">
          <img
            className="refund-banner-money-backwebp-icon"
            alt=""
            src="/refundbannermoneybackwebp@2x.png"
          />
          <div className="refund-content">
            <h3 className="heading-4">Change of plans? No problem at all!</h3>
            <p className="purchase-your-holafly-container">
              <span className="purchase-your-holafly">
                Purchase your Holafly eSIM with added peace of mind. You have up
                to 6
              </span>
              <span className="months-to-request">
                months to request a refund.
              </span>
            </p>
          </div>
          <div className="link-wrapper">
            <Button
              className="link39"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#292b2e",
                borderRadius: "12px",
                "&:hover": { background: "#292b2e" },
                height: 42.4,
              }}
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="how-to-content-wrapper">
          <div className="how-to-content">
            <div className="instructions">
              <div className="instructions-steps">
                <div className="step-one">
                  <h1 className="heading-217">How does Holafly’s eSIM work?</h1>
                </div>
                <div className="instructions-illustration">
                  <img
                    className="phone-and-cart-desktopsvg-icon"
                    loading="lazy"
                    alt=""
                    src="/phoneandcartdesktopsvg.svg"
                  />
                  <div className="instructions-illustration-inner">
                    <div className="frame-parent2">
                      <div className="check-that-your-device-is-esim-parent">
                        <p className="check-that-your-container">
                          <span className="check-that-your">
                            Check that your device is eSIM-compatible and
                          </span>
                          <span className="buy-your-data">
                            buy your data plan.
                          </span>
                        </p>
                        <p className="your-phone-must-container">
                          <span className="your-phone-must-container1">
                            <span className="your-phone-must">
                              Your phone must be compatible with eSIM. After
                              verifying, look for your
                            </span>
                            <span className="destination-and-buy">
                              destination and buy a data plan.
                            </span>
                          </span>
                        </p>
                      </div>
                      <div className="check-compatibility-link">
                        <div className="check-compatibility">
                          <div className="link40">
                            <u className="check-compatibility1">
                              Check compatibility
                            </u>
                          </div>
                        </div>
                        <img
                          className="right-arrowsvg-icon"
                          loading="lazy"
                          alt=""
                          src="/rightarrowsvg.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="container52">
                    <div className="vertical-divider2" />
                    <div className="vertical-divider3" />
                    <div className="background44">
                      <div className="background45" />
                    </div>
                    <div className="steps-background">
                      <div className="background46">
                        <div className="background47" />
                        <div className="background48" />
                      </div>
                      <div className="background49">
                        <div className="background50" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="instructions-traveler">
              <div className="traveler-content-wrapper">
                <div className="traveler-content">
                  <h3 className="heading-33">
                    Follow the installation instructions
                  </h3>
                  <p className="please-check-the-container">
                    <span className="please-check-the">
                      Please check the instructions email we sent you
                    </span>
                    <span className="upon-purchasing-your">
                      upon purchasing your eSIM to complete the
                    </span>
                    <span className="installation-and-activation">
                      installation and activation process.
                    </span>
                  </p>
                </div>
              </div>
              <img
                className="traveler-desktopsvg-icon"
                loading="lazy"
                alt=""
                src="/phoneandcartdesktopsvg.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
