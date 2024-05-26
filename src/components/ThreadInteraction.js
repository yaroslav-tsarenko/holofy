import { Button } from "@mui/material";
import "./ThreadInteraction.css";

const ThreadInteraction = ({ className = "", link }) => {
  return (
    <div className={`thread-interaction ${className}`}>
      <div className="horizontalborder-parent">
        <div className="horizontalborder7">
          <div className="thread-icons">
            <img
              className="svg-icon23"
              alt=""
              src="/link--like-this-post--svg.svg"
            />
            <div className="action-set">
              <div className="container59">
                <b className="thread-options">2</b>
              </div>
            </div>
          </div>
          <div className="thread-icons1">
            <img className="svg-icon24" alt="" src="/svg-6.svg" />
            <div className="container-wrapper6">
              <div className="container60">
                <b className="reply6">Reply</b>
              </div>
            </div>
          </div>
          <div className="thread-icons2">
            <img className="svg-icon25" alt="" src="/svg-7.svg" />
            <div className="container-wrapper7">
              <div className="container61">
                <b className="copy-link5">Copy link</b>
              </div>
            </div>
          </div>
        </div>
        <Button
          className="link50"
          disableElevation={true}
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#006fd6",
            fontSize: "13",
            borderColor: "#cfd9de",
            borderRadius: "9999px",
            "&:hover": { borderColor: "#cfd9de" },
            height: 30,
          }}
        >
          {link}
        </Button>
      </div>
    </div>
  );
};

ThreadInteraction.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
};

export default ThreadInteraction;
