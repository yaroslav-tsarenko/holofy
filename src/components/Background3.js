import "./Background3.css";

const Background3 = ({ className = "" }) => {
  return (
    <section className={`background54 ${className}`}>
      <div className="intro-content">
        <div className="intro-image-container-parent">
          <div className="intro-image-container">
            <img className="svg-icon15" loading="lazy" alt="" src="/svg.svg" />
          </div>
          <div className="intro-title-container">
            <a className="hi-we-are">Hi! We are Holafly</a>
          </div>
          <h1 className="we-give-travellers-container">
            <span>
              <p className="we-give-travellers-peace-of-mi">
                <span>{`We give travellers `}</span>
                <span className="peace-of-mind">{`peace of mind `}</span>
                <span className="wherever-they">wherever they</span>
              </p>
              <p className="are">are</p>
            </span>
          </h1>
        </div>
      </div>
      <img className="image-icon15" alt="" src="/image1@2x.png" />
      <img className="image-icon16" alt="" src="/image2@2x.png" />
      <div className="saffron-container-parent">
        <div className="saffron-container">
          <div className="paragraphbackgroundshadow">
            <b className="saffron">Saffron</b>
            <div className="traditional-chinese-content">
              Traditional Chinese Content Writer
            </div>
          </div>
        </div>
        <div className="team-members-rows">
          <div className="paragraphbackgroundshadow1">
            <b className="daniela">Daniela</b>
            <div className="product-operation-specialist">
              Product Operation Specialist
            </div>
          </div>
          <div className="paragraphbackgroundshadow2">
            <b className="daniela1">Daniela</b>
            <div className="esim-marketing-manager">eSIM Marketing Manager</div>
          </div>
        </div>
        <div className="paragraphbackgroundshadow3">
          <b className="daniela2">Daniela</b>
          <div className="digital-account-executive">
            Digital Account Executive
          </div>
        </div>
        <div className="team-members-rows1">
          <div className="paragraphbackgroundshadow4">
            <b className="cristian">Cristian</b>
            <div className="ui-designer">UI Designer</div>
          </div>
          <div className="paragraphbackgroundshadow5">
            <b className="chutima">Chutima</b>
            <div className="carrier-business-developer">
              Carrier Business Developer
            </div>
          </div>
        </div>
        <div className="brenda-container">
          <div className="brenda-info">
            <div className="paragraphbackgroundshadow6">
              <b className="brenda">Brenda</b>
              <div className="content-manager">Content Manager</div>
            </div>
            <div className="see-more-button-container">
              <div className="see-more-buttons">
                <div className="wrapper-button">
                  <img className="button-icon1" alt="" src="/button-1.svg" />
                </div>
                <div className="wrapper-button1">
                  <img className="button-icon2" alt="" src="/button-2.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Background3.propTypes = {
  className: PropTypes.string,
};

export default Background3;
