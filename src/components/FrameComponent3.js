import { Button } from "@mui/material";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={`background-container ${className}`}>
      <div className="background51">
        <div className="container53">
          <img
            className="dotlottie-player-img-lotti"
            loading="lazy"
            alt=""
            src="/dotlottieplayer--img--lottie-animation--svg@2x.png"
          />
          <div className="landing-description-wrapper">
            <div className="landing-description">
              <div className="get-online-right-after-landing-parent">
                <h3 className="get-online-right-container">
                  <p className="get-online-right">
                    Get online right after landing. Start using your data
                  </p>
                  <p className="plan-as-soon">
                    plan as soon as you arrive at your destination
                  </p>
                </h3>
                <p className="your-phone-will-container">
                  <span className="your-phone-will-container1">
                    <span className="your-phone-will">
                      Your phone will automatically connect to the internet
                      network upon
                    </span>
                    <span className="arrival">arrival.</span>
                  </span>
                </p>
              </div>
              <Button
                className="link41"
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#292b2e",
                  fontSize: "16",
                  background: "#48ec86",
                  borderRadius: "12px",
                  "&:hover": { background: "#48ec86" },
                  width: 240,
                  height: 46,
                }}
              >
                View all destinations
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
