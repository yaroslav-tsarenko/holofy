import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`testimonial-wrapper ${className}`}>
      <div className="testimonial">
        <div className="testimonial-content">
          <h1 className="holafly-is-the-container">
            <p className="holafly-is-the">Holafly is the most recommended</p>
            <p className="international-esim-check">
              International eSIM: check yourself.
            </p>
          </h1>
        </div>
        <div className="testimonial-details">
          <div className="quote-details1">
            <div className="quote">
              <img
                className="quote-symbolsvg-icon"
                alt=""
                src="/quotesymbolsvg.svg"
              />
              <div className="quote-content">
                <p className="dont-stress-about-container1">
                  <span className="dont-stress-about1">
                    DON’T stress about your phone service when you travel
                    abroad! I used
                  </span>
                  <span className="holafly-to-travel">
                    Holafly to travel home to California this year. The
                    instructions were super
                  </span>
                  <span className="easy-to-follow">
                    easy to follow and I had no problems with the service for
                    the whole 20 days
                  </span>
                  <span className="that-i-used">
                    that I used it. It was nice not to worry about how much my
                    phone company
                  </span>
                  <span className="was-going-to">
                    was going to charge me for service abroad.
                  </span>
                </p>
                <div className="customer-name">
                  <div className="name1">
                    <div className="karen-christensen">Karen Christensen</div>
                    <div className="verification">
                      <img
                        className="verifiedsvg-icon"
                        alt=""
                        src="/verifiedsvg.svg"
                      />
                      <div className="verified-buyer">Verified buyer</div>
                    </div>
                  </div>
                  <div className="testimonial-navigation">
                    <div className="navigation1">
                      <div className="previous">
                        <h2 className="h2">‹</h2>
                      </div>
                      <div className="next">
                        <h2 className="h21">›</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rating">
              <div className="rating-content">
                <div className="stars-and-review">
                  <div className="review-source">
                    <div className="review-count">4.6</div>
                    <div className="on-wrapper">
                      <div className="on">/5</div>
                    </div>
                    <div className="trustpilot-icon-container">
                      <img
                        className="star-trustpilotsvg-icon1"
                        alt=""
                        src="/startrustpilotsvg.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="trustpilot-source">
                  <p className="based-on-37000-container1">
                    <span className="based-on-370001">Based on 37000+  </span>
                    <span className="customer-reviews-on1">{`customer reviews on `}</span>
                  </p>
                  <div className="trustpilot1">
                    <u className="trustpilot2">Trustpilot</u>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="traveler-image">
            <div className="traveler-image-container">
              <img
                className="peoplewebp-icon"
                loading="lazy"
                alt=""
                src="/peoplewebp@2x.png"
              />
            </div>
            <div className="traveler-count">
              <div className="m">+1M</div>
              <div className="traveler-description">
                <div className="travelers-who-trust-container">
                  <p className="travelers-who">Travelers who</p>
                  <p className="trust-us-worldwide">trust us worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
