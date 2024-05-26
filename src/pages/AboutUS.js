import FrameComponent7 from "../components/FrameComponent7";
import Background3 from "../components/Background3";
import FrameComponent6 from "../components/FrameComponent6";
import TeamContentContainer from "../components/TeamContentContainer";
import Background2 from "../components/Background2";
import "./AboutUS.css";

const AboutUS = () => {
  return (
    <div className="aboutus">
      <main className="background1">
        <FrameComponent7 />
        <Background3 />
        <FrameComponent6 />
        <section className="team-content-container-wrapper">
          <TeamContentContainer />
        </section>
        <Background2
          wavepng="/wavepng1@2x.png"
          sVG="/svg-11.svg"
          sVG1="/svg-21.svg"
          sVG2="/svg-31.svg"
          sVG3="/svg-4.svg"
          linkFacebooksvg="/link--facebooksvg1.svg"
          linkInstagramsvg="/link--instagramsvg1.svg"
          linkYoutubesvg="/link--youtubesvg1.svg"
          linkLinkedinsvg="/link--linkedinsvg1.svg"
          linkTwittersvg="/link--twittersvg1.svg"
          a28413d6761d624ff11223c3c="/6a28413d6761d624ff11223c3c1cfd0dpng1@2x.png"
        />
      </main>
      <img className="image-icon1" alt="" src="/image-13@2x.png" />
    </div>
  );
};

export default AboutUS;
