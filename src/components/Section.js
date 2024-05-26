import "./Section.css";

const Section = ({ className = "" }) => {
  return (
    <div className={`section2 ${className}`}>
      <div className="gradient-container">
        <img
          className="mask-group-icon"
          loading="lazy"
          alt=""
          src="/mask-group.svg"
        />
        <div className="payment-gradient-wrapper">
          <img
            className="payment-gradient-icon"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </div>
      </div>
      <img
        className="visa-iconsvg"
        loading="lazy"
        alt=""
        src="/visa-iconsvg@2x.png"
      />
      <img
        className="mastercard-iconsvg"
        loading="lazy"
        alt=""
        src="/mastercardiconsvg.svg"
      />
      <img
        className="googlepaysvg-icon"
        loading="lazy"
        alt=""
        src="/googlepaysvg.svg"
      />
      <img
        className="paypal-iconsvg"
        loading="lazy"
        alt=""
        src="/paypaliconsvg@2x.png"
      />
      <img
        className="apple-pay-iconsvg"
        loading="lazy"
        alt=""
        src="/applepayiconsvg.svg"
      />
    </div>
  );
};

Section.propTypes = {
  className: PropTypes.string,
};

export default Section;
