import { useMemo } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import "./MoreQuestionItems.css";

const MoreQuestionItems = ({
  className = "",
  howToInstallAndActivateAn,
  vectorsvg,
  sectionLinkHeaPlaceholder,
  propMargin,
}) => {
  const howToInstallStyle = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  return (
    <div className={`more-question-items8 ${className}`}>
      <div className="section-link-heading-318">
        <p className="how-to-install2" style={howToInstallStyle}>
          {howToInstallAndActivateAn}
        </p>
        <div className="vectorsvg-wrapper7">
          <img className="vectorsvg-icon14" alt="" src={vectorsvg} />
        </div>
      </div>
      <TextField
        className="section-link-heading-319"
        placeholder={sectionLinkHeaPlaceholder}
        variant="outlined"
        InputProps={{
          endAdornment: (
            <img width="6.3px" height="10px" src="/vectorsvg-7.png" />
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
  );
};

MoreQuestionItems.propTypes = {
  className: PropTypes.string,
  howToInstallAndActivateAn: PropTypes.string,
  vectorsvg: PropTypes.string,
  sectionLinkHeaPlaceholder: PropTypes.string,

  /** Style props */
  propMargin: PropTypes.any,
};

export default MoreQuestionItems;
