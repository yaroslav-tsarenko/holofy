import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import Header from "../components/Header";
import FrameComponent9 from "../components/FrameComponent9";
import Background2 from "../components/Background2";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contactus">
      <main className="background38">
        <Header
          frameDivAlignSelf="stretch"
          frameDivFlex="unset"
          eNEURTextDecoration="unset"
        />
        <FrameComponent9 />
        <section className="affiliate-container-wrapper">
          <div className="affiliate-container">
            <div className="affiliate-content">
              <div className="affiliate-divider">
                <div className="divider-container">
                  <div className="horizontal-divider" />
                </div>
                <div className="affiliate-heading-container">
                  <h1 className="heading-215">
                    Want to get in touch with Holafly?
                  </h1>
                </div>
                <form className="affiliate-email">
                  <div className="affiliate-email-container">
                    <p className="if-youre-an-container">
                      <span className="if-youre-an-container1">
                        <span className="if-youre-an">{`If you’re an affiliate, email us at `}</span>
                        <b className="creatorsholaflycom">
                          creators@holafly.com
                        </b>
                      </span>
                    </p>
                  </div>
                  <div className="corporate-email">
                    <div className="corporate-email-container">
                      <p className="for-corporate-matters-container">
                        <span className="for-corporate-matters">{`For corporate matters (B2B), email us at `}</span>
                        <b className="businessholaflycom">
                          business@holafly.com
                        </b>
                      </p>
                      <div className="form-heading">
                        <div className="or-fill-out">
                          Or fill out the following form
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="contact-form">
                    <TextField
                      className="input"
                      placeholder="Full name"
                      variant="outlined"
                      sx={{
                        "& fieldset": { borderColor: "#e4e6ea" },
                        "& .MuiInputBase-root": {
                          height: "50px",
                          backgroundColor: "#fff",
                          borderRadius: "12px",
                          fontSize: "15.6px",
                        },
                        "& .MuiInputBase-input": { color: "#757575" },
                      }}
                    />
                    <div className="email-input">
                      <div className="email-input-components">
                        <img
                          className="imagebackgroundshadow-icon"
                          loading="lazy"
                          alt=""
                          src="/imagebackgroundshadow@2x.png"
                        />
                        <div className="border10" />
                        <div className="input1">
                          <div className="div12">+1</div>
                        </div>
                      </div>
                      <TextField
                        className="input2"
                        placeholder="Email address"
                        variant="outlined"
                        sx={{
                          "& fieldset": { borderColor: "#e4e6ea" },
                          "& .MuiInputBase-root": {
                            height: "50px",
                            backgroundColor: "#fff",
                            borderRadius: "12px",
                            fontSize: "15.8px",
                          },
                          "& .MuiInputBase-input": { color: "#757575" },
                        }}
                      />
                    </div>
                    <img
                      className="label-icon"
                      loading="lazy"
                      alt=""
                      src="/label@2x.png"
                    />
                    <div className="textarea" />
                    <div className="terms-checkbox">
                      <div className="terms-container">
                        <input
                          className="terms-checkbox-container"
                          type="checkbox"
                        />
                        <div className="i-accept-the-container">
                          <span className="i-accept-the">{`I accept the `}</span>
                          <b className="terms-and-conditions">
                            terms and conditions
                          </b>
                          <span className="and-the">{` and the `}</span>
                          <b className="treatment-of-data">
                            treatment of data use
                          </b>
                          <span className="span5">{`. `}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="input3"
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#56575a",
                      fontSize: "16",
                      background: "#e4e6ea",
                      border: "#e4e6ea solid 2px",
                      borderRadius: "12px",
                      "&:hover": { background: "#e4e6ea" },
                      height: 50,
                    }}
                  >
                    Send
                  </Button>
                </form>
              </div>
            </div>
            <div className="background-group">
              <div className="background39">
                <h1 className="do-you-have-container">
                  <p className="do-you-have">Do you have more</p>
                  <p className="questions1">questions?</p>
                </h1>
                <p className="write-to-our-container">
                  <span className="write-to-our-email-and-you-wil">
                    <span>Write to our email and you will</span>
                  </span>
                  <span className="receive-a-response-as-soon-as">
                    <span>receive a response as soon as</span>
                  </span>
                  <span className="possible-helpholaflycom">
                    <span>{`possible. `}</span>
                    <span className="helpholaflycom">help@holafly.com</span>
                  </span>
                </p>
                <img
                  className="online-interviewwebp-icon"
                  loading="lazy"
                  alt=""
                  src="/onlineinterviewwebp@2x.png"
                />
              </div>
              <div className="background40">
                <h1 className="check-out-the-container">
                  <span className="check-out-the-container1">
                    <p className="check-out-the">
                      Check out the frequently asked questions
                    </p>
                    <p className="about-our-services">about our services.</p>
                  </span>
                </h1>
                <Button
                  className="link36"
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
                    width: 120.5,
                    height: 44.4,
                  }}
                >
                  View FAQs
                </Button>
              </div>
            </div>
          </div>
        </section>
        <Background2
          wavepng="/wavepng3@2x.png"
          sVG="/svg.svg"
          sVG1="/svg-1.svg"
          sVG2="/svg-2.svg"
          sVG3="/svg-3.svg"
          linkFacebooksvg="/link--facebooksvg.svg"
          linkInstagramsvg="/link--instagramsvg.svg"
          linkYoutubesvg="/link--youtubesvg.svg"
          linkLinkedinsvg="/link--linkedinsvg.svg"
          linkTwittersvg="/link--twittersvg.svg"
          a28413d6761d624ff11223c3c="/6a28413d6761d624ff11223c3c1cfd0dpng3@2x.png"
          propDebugCommit="unset"
          propDebugCommit1="unset"
          propDebugCommit2="unset"
          propDebugCommit3="unset"
        />
      </main>
      <img className="image-icon6" alt="" src="/image-13@2x.png" />
    </div>
  );
};

export default ContactUs;
