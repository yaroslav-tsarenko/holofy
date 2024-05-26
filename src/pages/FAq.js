import { useCallback } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import Header from "../components/Header";
import BackgroundBorder from "../components/BackgroundBorder";
import MoreQuestionItems from "../components/MoreQuestionItems";
import Background2 from "../components/Background2";
import "./FAq.css";

const FAq = () => {
  const onSectionLinkHeading3Click = useCallback(() => {
    // Please sync "https://esim.holafly.com/faq/setting-up-your-esim/when-should-i-set-up-my-esim/ - 13/05/2024, 16:49:22 EEST" to the project
  }, []);

  return (
    <div className="faq">
      <main className="background2">
        <Header
          frameDivAlignSelf="stretch"
          frameDivFlex="unset"
          eNEURTextDecoration="unset"
        />
        <section className="page-content">
          <div className="faqs-hero-parent">
            <div className="faqs-hero">
              <div className="section1">
                <img
                  className="faqs-searchingwebp-icon"
                  loading="lazy"
                  alt=""
                  src="/faqssearchingwebp@2x.png"
                />
                <div className="section-inner">
                  <div className="hero-title-parent">
                    <div className="hero-title">
                      <h1 className="esim-frequently-asked-container">
                        <p className="esim-frequently-asked">
                          eSIM Frequently Asked
                        </p>
                        <p className="questions">Questions</p>
                      </h1>
                    </div>
                    <p className="feel-free-to-container">
                      <span className="feel-free-to">
                        Feel free to ask! We might have the answer you are
                      </span>
                      <span className="looking-for">looking for</span>
                    </p>
                  </div>
                </div>
                <div className="search">
                  <div className="search-input">
                    <div className="type-your-question">
                      Type your question here
                    </div>
                  </div>
                  <img
                    className="label-button"
                    loading="lazy"
                    alt=""
                    src="/label--button.svg"
                  />
                </div>
              </div>
            </div>
            <div className="featured-questions">
              <div className="backgroundborder">
                <div className="question-card-items">
                  <img
                    className="visibility-onsvg-icon"
                    loading="lazy"
                    alt=""
                    src="/visibility-onsvg@2x.png"
                  />
                </div>
                <h3 className="heading-3">When should I set up my eSIM?</h3>
              </div>
              <BackgroundBorder
                visibilityOnsvg="/visibility-onsvg-1@2x.png"
                whatHappensIfIUseUpMyData="What happens if I use up my data or"
                exhaustTheDaysOfValidity="exhaust the days of validity?"
              />
              <BackgroundBorder
                visibilityOnsvg="/visibility-onsvg-2@2x.png"
                whatHappensIfIUseUpMyData="Can I use my SIM card and Holafly eSIM"
                exhaustTheDaysOfValidity="at the same time?"
                propBackgroundImage="url('/backgroundborder2@3x.png')"
                propPadding="unset"
                propDisplay="inline-block"
                propAlignSelf="unset"
              />
              <BackgroundBorder
                visibilityOnsvg="/visibility-onsvg@2x.png"
                whatHappensIfIUseUpMyData="Is my phone “unlocked” and able to use"
                exhaustTheDaysOfValidity="eSIMs?"
                propBackgroundImage="url('/backgroundborder@3x.png')"
                propPadding="unset"
                propDisplay="inline-block"
                propAlignSelf="unset"
              />
              <div className="backgroundborder1">
                <div className="visibility-onsvg-wrapper">
                  <img
                    className="visibility-onsvg-icon1"
                    alt=""
                    src="/visibility-onsvg-1@2x.png"
                  />
                </div>
                <h3 className="what-should-i-container">
                  <span className="what-should-i-container1">
                    <p className="what-should-i">
                      What should I do if I’ve deleted or lost
                    </p>
                    <p className="the-qr-code">the QR code for my eSIM?</p>
                  </span>
                </h3>
              </div>
              <BackgroundBorder
                visibilityOnsvg="/visibility-onsvg-2@2x.png"
                whatHappensIfIUseUpMyData="My QR code isn’t working. What should I"
                exhaustTheDaysOfValidity="do?"
                propBackgroundImage="url('/backgroundborder2@3x.png')"
                propPadding="unset"
                propDisplay="unset"
                propAlignSelf="stretch"
              />
            </div>
            <form className="other-questions">
              <div className="other-questions-heading">
                <h3 className="heading-2">Other questions</h3>
              </div>
              <div className="other-questions-list">
                <div className="question-categories">
                  <Button
                    className="item-link"
                    startIcon={
                      <img
                        width="12px"
                        height="12px"
                        src="/faqcheckiconsvg.svg"
                      />
                    }
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "17.4",
                      background: "#000",
                      border: "#e4e6ea solid 1px",
                      borderRadius: "20px",
                      "&:hover": { background: "#000" },
                      width: 73.3,
                      height: 38.7,
                    }}
                  >
                    All
                  </Button>
                  <div className="item-link1">
                    <div className="choosing-and-buying">
                      Choosing and buying an eSIM
                    </div>
                  </div>
                  <div className="item-link2">
                    <div className="setting-up-your">Setting up your eSIM</div>
                  </div>
                  <div className="item-link3">
                    <div className="compatibility">Compatibility</div>
                  </div>
                  <div className="item-link4">
                    <div className="glossary">Glossary</div>
                  </div>
                  <div className="item-link5">
                    <div className="using-an-esim">Using an eSIM</div>
                  </div>
                  <div className="item-link6">
                    <div className="troubleshooting">Troubleshooting</div>
                  </div>
                </div>
              </div>
              <div className="related-questions">
                <div className="section-link-heading-3">
                  <div className="is-there-a">
                    Is there a physical store for Holafly?
                  </div>
                  <div className="related-question-icons">
                    <img
                      className="vectorsvg-icon"
                      alt=""
                      src="/vectorsvg1@2x.png"
                    />
                  </div>
                </div>
                <div className="section-link-heading-31">
                  <div className="is-the-samsung">
                    Is the Samsung Galaxy S21 eSIM compatible?
                  </div>
                  <div className="vectorsvg-wrapper">
                    <img
                      className="vectorsvg-icon1"
                      alt=""
                      src="/vectorsvg1@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="more-questions">
                <div className="more-question-items">
                  <div className="section-link-heading-32">
                    <div className="how-to-install">
                      How to install and activate an eSIM on an iPhone?
                    </div>
                    <div className="first-more-question-icons">
                      <img
                        className="vectorsvg-icon2"
                        alt=""
                        src="/vectorsvg-2@2x.png"
                      />
                    </div>
                  </div>
                  <div className="section-link-heading-33">
                    <div className="why-am-i">
                      Why am I receiving text messages on my eSIM?
                    </div>
                    <div className="third-more-question-icons">
                      <img
                        className="vectorsvg-icon3"
                        alt=""
                        src="/vectorsvg-2@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="more-question-items1">
                  <div className="section-link-heading-34">
                    <div className="is-the-motorola">
                      Is the Motorola Edge eSIM compatible?
                    </div>
                    <div className="vectorsvg-container">
                      <img
                        className="vectorsvg-icon4"
                        alt=""
                        src="/vectorsvg-4@2x.png"
                      />
                    </div>
                  </div>
                  <div className="section-link-heading-35">
                    <div className="is-the-samsung1">
                      Is the Samsung Galaxy S10 eSIM compatible?
                    </div>
                    <div className="vectorsvg-frame">
                      <img
                        className="vectorsvg-icon5"
                        alt=""
                        src="/vectorsvg-4@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <MoreQuestionItems
                  howToInstallAndActivateAn="How to install and activate an eSIM on the Huawei?"
                  vectorsvg="/vectorsvg-6@2x.png"
                  sectionLinkHeaPlaceholder="Is the Huawei P30 eSIM compatible?"
                />
                <div className="more-question-items2">
                  <div className="section-link-heading-36">
                    <p className="how-to-install1">
                      How to install and activate an eSIM on the Google Pixel?
                    </p>
                    <div className="frame-div">
                      <img
                        className="vectorsvg-icon6"
                        alt=""
                        src="/vectorsvg-8@2x.png"
                      />
                    </div>
                  </div>
                  <div className="section-link-heading-37">
                    <div className="is-the-huawei">
                      Is the Huawei P20 eSIM compatible?
                    </div>
                    <div className="vectorsvg-wrapper1">
                      <img
                        className="vectorsvg-icon7"
                        alt=""
                        src="/vectorsvg-8@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <MoreQuestionItems
                  howToInstallAndActivateAn="How do you delete an eSIM from an iPhone?"
                  vectorsvg="/vectorsvg-10@2x.png"
                  sectionLinkHeaPlaceholder="What is an international data plan?"
                  propMargin="unset"
                />
                <MoreQuestionItems
                  howToInstallAndActivateAn="What is iSIM and how does it work?"
                  vectorsvg="/vectorsvg-12@2x.png"
                  sectionLinkHeaPlaceholder="Is the Google Pixel 3 eSIM compatible?"
                  propMargin="unset"
                />
                <div className="more-question-items3">
                  <div className="section-link-heading-38">
                    <div className="what-is-euicc">
                      What is eUICC and how does it work?
                    </div>
                    <div className="vectorsvg-wrapper2">
                      <img
                        className="vectorsvg-icon8"
                        alt=""
                        src="/vectorsvg-14@2x.png"
                      />
                    </div>
                  </div>
                  <div className="section-link-heading-39">
                    <div className="is-the-motorola1">
                      Is the Motorola One Vision eSIM compatible?
                    </div>
                    <div className="vectorsvg-wrapper3">
                      <img
                        className="vectorsvg-icon9"
                        alt=""
                        src="/vectorsvg-14@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="more-question-items4">
                  <TextField
                    className="section-link-heading-310"
                    placeholder="Is the Samsung Galaxy S20 FE eSIM compatible?"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <img
                          width="6.3px"
                          height="10px"
                          src="/vectorsvg-16.png"
                        />
                      ),
                    }}
                    sx={{
                      "& fieldset": { borderColor: "#e4e6ea" },
                      "& .MuiInputBase-root": {
                        height: "70.7px",
                        paddingRight: "38.89999999999963px",
                        borderRadius: "16px",
                      },
                      "& .MuiInputBase-input": { color: "#292b2e" },
                    }}
                  />
                  <TextField
                    className="section-link-heading-311"
                    placeholder="Is the iPhone 8 eSIM compatible?"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <img
                          width="6.3px"
                          height="10px"
                          src="/vectorsvg-17.png"
                        />
                      ),
                    }}
                    sx={{
                      "& fieldset": { borderColor: "#e4e6ea" },
                      "& .MuiInputBase-root": {
                        height: "70.7px",
                        paddingRight: "38.89999999999963px",
                        borderRadius: "16px",
                      },
                      "& .MuiInputBase-input": { color: "#292b2e" },
                    }}
                  />
                </div>
                <div className="more-question-items5">
                  <TextField
                    className="section-link-heading-312"
                    placeholder="Is the Google Pixel 5 eSIM compatible?"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <img
                          width="6.3px"
                          height="10px"
                          src="/vectorsvg-18.png"
                        />
                      ),
                    }}
                    sx={{
                      "& fieldset": { borderColor: "#e4e6ea" },
                      "& .MuiInputBase-root": {
                        height: "70.7px",
                        paddingRight: "38.89999999999963px",
                        borderRadius: "16px",
                      },
                      "& .MuiInputBase-input": { color: "#292b2e" },
                    }}
                  />
                  <TextField
                    className="section-link-heading-313"
                    placeholder="Is the iPhone 7 eSIM compatible?"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <img
                          width="6.3px"
                          height="10px"
                          src="/vectorsvg-19.png"
                        />
                      ),
                    }}
                    sx={{
                      "& fieldset": { borderColor: "#e4e6ea" },
                      "& .MuiInputBase-root": {
                        height: "70.7px",
                        paddingRight: "38.89999999999963px",
                        borderRadius: "16px",
                      },
                      "& .MuiInputBase-input": { color: "#292b2e" },
                    }}
                  />
                </div>
                <div className="more-question-items6">
                  <TextField
                    className="section-link-heading-314"
                    placeholder="Is the iPhone X eSIM compatible?"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <img
                          width="6.3px"
                          height="10px"
                          src="/vectorsvg-20.png"
                        />
                      ),
                    }}
                    sx={{
                      "& fieldset": { borderColor: "#e4e6ea" },
                      "& .MuiInputBase-root": {
                        height: "70.7px",
                        paddingRight: "38.89999999999963px",
                        borderRadius: "16px",
                      },
                      "& .MuiInputBase-input": { color: "#292b2e" },
                    }}
                  />
                  <div className="section-link-heading-315">
                    <div className="how-does-dual">How does dual SIM work?</div>
                    <div className="vectorsvg-wrapper4">
                      <img
                        className="vectorsvg-icon10"
                        alt=""
                        src="/vectorsvg-21@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="more-question-items7">
                  <div
                    className="section-link-heading-316"
                    onClick={onSectionLinkHeading3Click}
                  >
                    <div className="when-should-i">
                      When should I set up my eSIM?
                    </div>
                    <div className="vectorsvg-wrapper5">
                      <img
                        className="vectorsvg-icon11"
                        alt=""
                        src="/vectorsvg-22@2x.png"
                      />
                    </div>
                  </div>
                  <div className="section-link-heading-317">
                    <div className="how-can-i">
                      How can I check how much data I’ve used?
                    </div>
                    <div className="vectorsvg-wrapper6">
                      <img
                        className="vectorsvg-icon12"
                        alt=""
                        src="/vectorsvg-22@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="cta-content-parent">
              <div className="cta-content">
                <div className="pagination">
                  <div className="page-number">
                    <div className="current-page">
                      <div className="page">Page</div>
                    </div>
                    <div className="backgroundborder2">
                      <div className="current-page-value">1</div>
                    </div>
                  </div>
                  <div className="link">
                    <div className="page-numbers">2</div>
                  </div>
                  <div className="link1">
                    <div className="div">3</div>
                  </div>
                </div>
              </div>
              <div className="device-compatibility">
                <div className="background3">
                  <div className="banner-content">
                    <h2 className="check-the-compatibility-container">
                      <p className="check-the-compatibility">
                        Check the compatibility of your
                      </p>
                      <p className="device">device</p>
                    </h2>
                    <Button
                      className="link2"
                      disableElevation={true}
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#292b2e",
                        fontSize: "16",
                        background: "#fff",
                        border: "#e4e6ea solid 1px",
                        borderRadius: "12px",
                        "&:hover": { background: "#fff" },
                        width: 122.6,
                        height: 44.4,
                      }}
                    >
                      Verify here
                    </Button>
                  </div>
                  <div className="banner-images">
                    <img
                      className="image-icon2"
                      loading="lazy"
                      alt=""
                      src="/image@2x.png"
                    />
                  </div>
                </div>
                <div className="background4">
                  <div className="learn-how-to-install-and-activ-parent">
                    <h2 className="learn-how-to-container">
                      <p className="learn-how-to">
                        Learn how to install and activate your
                      </p>
                      <p className="esim">eSIM</p>
                    </h2>
                    <Button
                      className="link3"
                      disableElevation={true}
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#000",
                        fontSize: "16",
                        background: "#fff",
                        border: "#e4e6ea solid 1px",
                        borderRadius: "12px",
                        "&:hover": { background: "#fff" },
                        width: 165.9,
                        height: 44.4,
                      }}
                    >
                      View instructions
                    </Button>
                  </div>
                  <div className="image-wrapper">
                    <img className="image-icon3" alt="" src="/image-1@2x.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="background5">
              <h1 className="ready-to-take-container">
                <span className="ready-to-take-container1">
                  <p className="ready-to-take">
                    Ready to take off? Don't hesitate any
                  </p>
                  <p className="longer-purchase-your">
                    longer, purchase your eSIM
                  </p>
                </span>
              </h1>
              <Button
                className="link4"
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#292b2e",
                  fontSize: "16",
                  background: "#48ec86",
                  border: "#48ec86 solid 1px",
                  borderRadius: "12px",
                  "&:hover": { background: "#48ec86" },
                  width: 110.9,
                  height: 42,
                }}
              >
                Buy eSIM
              </Button>
              <img
                className="travel-guysvg-icon"
                alt=""
                src="/travelguysvg@2x.png"
              />
            </div>
          </div>
        </section>
        <Background2
          wavepng="/wavepng@2x.png"
          sVG="/svg-11.svg"
          sVG1="/svg-21.svg"
          sVG2="/svg-31.svg"
          sVG3="/svg-4.svg"
          linkFacebooksvg="/link--facebooksvg1.svg"
          linkInstagramsvg="/link--instagramsvg1.svg"
          linkYoutubesvg="/link--youtubesvg1.svg"
          linkLinkedinsvg="/link--linkedinsvg1.svg"
          linkTwittersvg="/link--twittersvg1.svg"
          a28413d6761d624ff11223c3c="/6a28413d6761d624ff11223c3c1cfd0dpng2@2x.png"
          propDebugCommit="unset"
          propDebugCommit1="unset"
          propDebugCommit2="unset"
          propDebugCommit3="unset"
        />
      </main>
      <img className="image-icon4" alt="" src="/image-13@2x.png" />
    </div>
  );
};

export default FAq;
