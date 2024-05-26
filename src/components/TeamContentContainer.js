import Border from "./Border";
import PropTypes from "prop-types";
import "./TeamContentContainer.css";

const TeamContentContainer = ({ className = "" }) => {
  return (
    <div className={`team-content-container ${className}`}>
      <div className="team-heading-container">
        <div className="team-heading-wrapper">
          <h1 className="heading-220">That is what makes us unique</h1>
        </div>
        <div className="team-values-container">
          <div className="team-value-container">
            <div className="paragraphbackgroundborder">
              <h3 className="heading-313">We enjoy what we do</h3>
              <p className="our-passion-for-container">
                <span className="our-passion-for-container1">
                  <span className="our-passion-for">
                    Our passion for providing peace of mind to travelers
                  </span>
                  <span className="around-the-world">
                    around the world drives everything we do. We love our
                  </span>
                  <span className="work-and-we">
                    work and we do it with pride.
                  </span>
                </span>
              </p>
            </div>
          </div>
          <div className="support-values">
            <Border
              support24HoursEsimsvg="/support24hoursesimsvg.svg"
              heading3WeHelpYouWherever="We help you wherever you are"
              weBelieveThatProvidingExc="We believe that providing exceptional customer"
              serviceIsAsImportantAsOff="service is as important as offering quality products."
              ourSupportTeamIsAvailable="Our support team is available 24/7 so you can enjoy"
              yourTripWithoutStress="your trip without stress."
            />
            <Border
              support24HoursEsimsvg="/person-celebratesvg.svg"
              heading3WeHelpYouWherever="We give you peace of mind"
              weBelieveThatProvidingExc="Activation in just a few clicks, the best network in each"
              serviceIsAsImportantAsOff="country, unlimited data, management of your eSIM"
              ourSupportTeamIsAvailable="from the app… We do everything we can to make your"
              yourTripWithoutStress="internet connection easy and without surprises."
              propWidth="274.1px"
            />
          </div>
          <div className="planet-value">
            <div className="backgroundborder9">
              <img
                className="ecosvg-icon"
                loading="lazy"
                alt=""
                src="/ecosvg.svg"
              />
              <h3 className="heading-314">We care about our planet</h3>
              <div className="stain-description">
                <img
                  className="stainsvg-icon"
                  loading="lazy"
                  alt=""
                  src="/stainsvg.svg"
                />
                <p className="we-are-committed-container">
                  <span className="we-are-committed">
                    We are committed to reducing our carbon footprint
                  </span>
                  <span className="and-implementing-sustainable">
                    and implementing sustainable practices in all areas of
                  </span>
                  <span className="our-business-the">
                    our business. The future must be preserved for future
                  </span>
                  <span className="generations">generations.</span>
                </p>
              </div>
              <a className="link-read">Read more</a>
            </div>
          </div>
        </div>
      </div>
      <div className="team-testimonials">
        <div className="testimonials-content">
          <div className="testimonials-heading-container">
            <div className="testimonials-heading-wrapper">
              <div className="testimonials-heading-content">
                <h1 className="heading-221">What our team is saying</h1>
                <p className="we-want-you-container">
                  <span className="we-want-you">
                    We want you to know how we work, what our culture is like
                    and what
                  </span>
                  <span className="it-means-to">
                    it means to be part of Holafly.
                  </span>
                </p>
                <div className="our-team-tells">
                  Our team tells you all about it!
                </div>
                <div className="social-links">
                  <div className="link45">
                    <img
                      className="instagramwebp-icon"
                      loading="lazy"
                      alt=""
                      src="/instagramwebp@2x.png"
                    />
                  </div>
                  <div className="link46">
                    <img
                      className="twitterwebp-icon"
                      loading="lazy"
                      alt=""
                      src="/twitterwebp@2x.png"
                    />
                  </div>
                  <div className="link47">
                    <img
                      className="tiktokwebp-icon"
                      loading="lazy"
                      alt=""
                      src="/tiktokwebp@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-slider">
              <div className="container55">
                <div className="testimonial-card">
                  <img
                    className="link-dayana-modal-videojpg"
                    alt=""
                    src="/link--dayanamodalvideojpg@2x.png"
                  />
                  <img
                    className="button-iconwebp"
                    loading="lazy"
                    alt=""
                    src="/buttoniconwebp@2x.png"
                  />
                </div>
                <div className="testimonial-card1">
                  <img
                    className="link-karen-modal-videojpg"
                    alt=""
                    src="/link--karenmodalvideojpg@2x.png"
                  />
                  <img
                    className="button-iconwebp1"
                    alt=""
                    src="/buttoniconwebp@2x.png"
                  />
                </div>
              </div>
              <div className="slider-navigation">
                <div className="navigation-buttons">
                  <div className="previous2">
                    <h1 className="h1">‹</h1>
                  </div>
                  <div className="next2">
                    <h1 className="h11">›</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section5">
            <div className="join-mission-container">
              <div className="join-mission-content">
                <h1 className="heading-222">Join us in our mission</h1>
                <p className="be-part-of-container">
                  <span className="be-part-of">
                    Be part of something big! Together we can get travelers from
                    all over
                  </span>
                  <span className="the-world-to">
                    the world to enjoy the best connection.
                  </span>
                </p>
                <div className="vacancies">
                  <u className="check-out-our">{`Check out our vacancies `}</u>
                  <div className="right-arrowsvg-wrapper">
                    <img
                      className="right-arrowsvg-icon1"
                      alt=""
                      src="/rightarrowsvg1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <img
              className="join-mission-desktop-finalweb-icon"
              loading="lazy"
              alt=""
              src="/joinmissiondesktopfinalwebp@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="locations">
        <div className="location-container">
          <h1 className="heading-223">Where can you find us</h1>
        </div>
        <div className="location-cards">
          <div className="location-card">
            <img
              className="irelandwebp-icon"
              loading="lazy"
              alt=""
              src="/irelandwebp@2x.png"
            />
            <p className="dublin-2-ireland-container">
              <span className="dublin-2-ireland">
                <b>Dublin 2, Ireland</b>
              </span>
              <span className="th-floor-2-grand-canal-square">
                <span>6th floor, 2 Grand Canal Square</span>
              </span>
              <span className="vat-4195777wh">
                <span>Vat: 4195777WH</span>
              </span>
            </p>
          </div>
          <div className="location-card1">
            <img
              className="medellinwebp-icon"
              loading="lazy"
              alt=""
              src="/medellinwebp@2x.png"
            />
            <p className="medelln-colombia-career-container">
              <span className="medelln-colombia">
                <b>Medellín, Colombia</b>
              </span>
              <span className="career-number-42-5-south-145">
                <span>Career number 42 # 5 South-145</span>
              </span>
              <span className="el-poblado">
                <span>El Poblado</span>
              </span>
            </p>
          </div>
          <div className="location-card2">
            <img
              className="limawebp-icon"
              loading="lazy"
              alt=""
              src="/limawebp@2x.png"
            />
            <div className="lima-per-338-container">
              <p className="lima-per">
                <b>Lima, Perú</b>
              </p>
              <p className="andres-reyes-avenue">338 Andres Reyes Avenue</p>
              <p className="san-isidro">San Isidro</p>
            </div>
          </div>
          <div className="bangkok-card">
            <img
              className="bangkokwebp-icon"
              loading="lazy"
              alt=""
              src="/bangkokwebp@2x.png"
            />
            <p className="bangkok-thailand-no8-container">
              <span className="bangkok-thailand">
                <b>Bangkok, Thailand</b>
              </span>
              <span className="no8-t-one-building-15-floor">
                <span>No.8 , T-One Building 15 floors,</span>
              </span>
              <span className="sukhumvit-40-alley">
                <span>Sukhumvit, 40 Alley</span>
              </span>
              <span className="khet-khlong-toei">
                <span>Khet Khlong Toei</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

TeamContentContainer.propTypes = {
  className: PropTypes.string,
};

export default TeamContentContainer;
