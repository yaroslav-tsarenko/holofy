import { Button } from "@mui/material";
import "./FrameComponent8.css";

const FrameComponent8 = ({ className = "", emptyExpiry, link }) => {
  return (
    <div className={`tweet-container-container ${className}`}>
      <div className="tweet-container3">
        <div className="horizontalborder6">
          <div className="tweet-icons">
            <img className="svg-icon20" loading="lazy" alt="" src="/svg1.svg" />
            <div className="icon-labels">
              <div className="container56">
                <b className="empty-expiry">{emptyExpiry}</b>
              </div>
            </div>
          </div>
          <div className="tweet-icons1">
            <img className="svg-icon21" alt="" src="/svg-12.svg" />
            <div className="container-wrapper4">
              <div className="container57">
                <a className="reply5">Reply</a>
              </div>
            </div>
          </div>
          <div className="tweet-icons2">
            <img className="svg-icon22" alt="" src="/svg-22.svg" />
            <div className="container-wrapper5">
              <div className="container58">
                <b className="copy-link4">Copy link</b>
              </div>
            </div>
          </div>
        </div>
        <Button
          className="link49"
          disableElevation={true}
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#006fd6",
            fontSize: "14",
            borderColor: "#cfd9de",
            borderRadius: "9999px",
            "&:hover": { borderColor: "#cfd9de" },
            height: 32,
          }}
        >
          {link}
        </Button>
      </div>
    </div>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
  emptyExpiry: PropTypes.string,
  link: PropTypes.string,
};

export default FrameComponent8;
