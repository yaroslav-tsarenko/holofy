import { Button } from "@mui/material";
import "./FooterContent.css";

const FooterContent = ({ className = "" }) => {
  return (
    <div className={`footer-content ${className}`}>
      <div className="responsible-travel">
        <div className="travel-description">
          <div className="background-parent1">
            <div className="background52">
              <h3 className="travel-the-world-container">
                <span className="travel-the-world-container1">
                  <p className="travel-the-world">
                    Travel the world responsibly with Holafly, and
                  </p>
                  <p className="lets-say-goodbye">
                    let’s say goodbye to plastic!
                  </p>
                </span>
              </h3>
              <div className="environmental-impact">
                <p className="by-using-esims-container">
                  <span className="by-using-esims-we-can-elimina">
                    <span>
                      By using eSIMs, we can eliminate the environmental impact
                    </span>
                  </span>
                  <span className="associated-with-physical-sim-c">
                    <span>
                      associated with physical SIM cards production, packaging,
                      and
                    </span>
                  </span>
                  <span className="distribution-learn-more">
                    <span>{`distribution. `}</span>
                    <span className="learn-more1">Learn more.</span>
                  </span>
                </p>
              </div>
              <div className="benefits1">
                <div className="benefit-items">
                  <button className="backgroundborder3">
                    <img className="image-icon11" alt="" src="/image-9.svg" />
                    <div className="benefit-descriptions">
                      <div className="heading-36">Zero plastic</div>
                    </div>
                  </button>
                  <button className="backgroundborder4">
                    <img className="image-icon12" alt="" src="/image-10.svg" />
                    <div className="heading-3-zero-hassle-wrapper">
                      <div className="heading-37">Zero hassle</div>
                    </div>
                  </button>
                  <button className="backgroundborder5">
                    <img className="image-icon13" alt="" src="/image-11.svg" />
                    <div className="heading-3-zero-transport-wrapper">
                      <div className="heading-38">Zero transport</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="buy-esim-button-container">
              <Button
                className="link43"
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#292b2e",
                  fontSize: "16",
                  background: "#48ec86",
                  borderRadius: "12px",
                  "&:hover": { background: "#48ec86" },
                  width: 392,
                  height: 40,
                }}
              >
                Buy your eSIM
              </Button>
            </div>
          </div>
        </div>
        <div className="f-a-q">
          <div className="f-a-q-content-wrapper">
            <div className="f-a-q-content">
              <h1 className="heading-218">Frequently Asked Questions (FAQs)</h1>
              <div className="f-a-q-description">
                <p className="find-helpful-information">
                  Find helpful information to answer your questions
                </p>
              </div>
            </div>
          </div>
          <div className="f-a-q-items-container">
            <div className="border11">
              <div className="can-i-top">Can I top up my eSIM?</div>
              <div className="f-a-q-icons">
                <img
                  className="vectorupsvg-icon"
                  alt=""
                  src="/vectorupsvg.svg"
                />
              </div>
            </div>
            <div className="border12">
              <div className="how-can-i1">How can I get a refund?</div>
              <div className="vectorupsvg-wrapper">
                <img
                  className="vectorupsvg-icon1"
                  alt=""
                  src="/vectorupsvg.svg"
                />
              </div>
            </div>
          </div>
          <div className="more-f-a-q-items-container">
            <div className="more-f-a-q-items">
              <div className="border13">
                <p className="what-do-i">
                  What do I do if I delete or lose my eSIM’s QR code?
                </p>
                <div className="more-f-a-q-icons">
                  <img
                    className="vectorupsvg-icon2"
                    alt=""
                    src="/vectorupsvg.svg"
                  />
                </div>
              </div>
              <div className="border14">
                <div className="can-i-use">
                  Can I use my SIM card and Holafly eSIM at the same time?
                </div>
                <div className="even-more-f-a-q-icons">
                  <img
                    className="vectorupsvg-icon3"
                    alt=""
                    src="/vectorupsvg.svg"
                  />
                </div>
              </div>
            </div>
            <div className="more-f-a-q-items1">
              <div className="border15">
                <div className="do-i-have">
                  Do I have to activate data roaming on my device?
                </div>
                <div className="vectorupsvg-container">
                  <img
                    className="vectorupsvg-icon4"
                    alt=""
                    src="/vectorupsvg.svg"
                  />
                </div>
              </div>
              <div className="border16">
                <div className="how-can-i2">
                  How can I delete the Holafly eSIM once I’ve used my data?
                </div>
                <div className="vectorupsvg-frame">
                  <img
                    className="vectorupsvg-icon5"
                    alt=""
                    src="/vectorupsvg.svg"
                  />
                </div>
              </div>
            </div>
            <div className="more-f-a-q-items2">
              <div className="border17">
                <p className="what-is-the">
                  What is the speed that I will have with the Holafly eSIM?
                </p>
                <div className="vectorupsvg-wrapper1">
                  <img
                    className="vectorupsvg-icon6"
                    alt=""
                    src="/vectorupsvg.svg"
                  />
                </div>
              </div>
              <div className="border18">
                <div className="how-many-times">
                  How many times can I use my eSIM card?
                </div>
                <div className="vectorupsvg-wrapper2">
                  <img
                    className="vectorupsvg-icon7"
                    alt=""
                    src="/vectorupsvg.svg"
                  />
                </div>
              </div>
            </div>
            <div className="more-f-a-q-items3">
              <div className="border19">
                <div className="can-i-keep">Can I keep my WhatsApp number?</div>
                <div className="vectorupsvg-wrapper3">
                  <img
                    className="vectorupsvg-icon8"
                    alt=""
                    src="/vectorupsvg.svg"
                  />
                </div>
              </div>
              <div className="border20">
                <div className="how-can-i3">
                  How can I check how much data I have left?
                </div>
                <div className="vectorupsvg-wrapper4">
                  <img
                    className="vectorupsvg-icon9"
                    alt=""
                    src="/vectorupsvg.svg"
                  />
                </div>
              </div>
            </div>
            <div className="more-f-a-q-items4">
              <div className="border21">
                <div className="when-will-i">When will I receive my eSIM?</div>
                <div className="vectorupsvg-wrapper5">
                  <img
                    className="vectorupsvg-icon10"
                    alt=""
                    src="/vectorupsvg.svg"
                  />
                </div>
              </div>
              <div className="border22">
                <div className="when-should-i1">
                  When should I set up my eSIM?
                </div>
                <div className="vectorupsvg-wrapper6">
                  <img
                    className="vectorupsvg-icon11"
                    alt=""
                    src="/vectorupsvg.svg"
                  />
                </div>
              </div>
            </div>
            <div className="more-f-a-q-items5">
              <div className="border23">
                <div className="what-smartphones-have">
                  What smartphones have eSIM support?
                </div>
                <div className="vectorupsvg-wrapper7">
                  <img
                    className="vectorupsvg-icon12"
                    alt=""
                    src="/vectorupsvg.svg"
                  />
                </div>
              </div>
              <div className="border24">
                <div className="how-do-i">
                  How do I set up the eSIM on my device?
                </div>
                <div className="vectorupsvg-wrapper8">
                  <img
                    className="vectorupsvg-icon13"
                    alt=""
                    src="/vectorupsvg.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="last-f-a-q-items-container">
            <div className="last-f-a-q-items">
              <div className="border25">
                <div className="is-the-samsung2">
                  Is the Samsung Galaxy S21 eSIM compatible?
                </div>
                <div className="last-f-a-q-icons">
                  <img
                    className="vectorupsvg-icon14"
                    alt=""
                    src="/vectorupsvg.svg"
                  />
                </div>
              </div>
              <div className="border26">
                <div className="can-i-share">
                  Can I share data with other devices?
                </div>
                <div className="last-f-a-q-icons-continued">
                  <img
                    className="vectorupsvg-icon15"
                    alt=""
                    src="/vectorupsvg.svg"
                  />
                </div>
              </div>
            </div>
            <div className="last-f-a-q-items1">
              <div className="border27">
                <p className="when-do-the">
                  When do the days of my data plan start counting?
                </p>
                <div className="vectorupsvg-wrapper9">
                  <img
                    className="vectorupsvg-icon16"
                    alt=""
                    src="/vectorupsvg.svg"
                  />
                </div>
              </div>
              <div className="border28">
                <div className="how-much-data">
                  How much data does my eSIM include?
                </div>
                <div className="vectorupsvg-wrapper10">
                  <img
                    className="vectorupsvg-icon17"
                    alt=""
                    src="/vectorupsvg.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FooterContent.propTypes = {
  className: PropTypes.string,
};

export default FooterContent;
