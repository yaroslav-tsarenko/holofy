import Header from "../components/Header";
import Background1 from "../components/Background1";
import FrameComponent5 from "../components/FrameComponent5";
import BgInstructionsPagesvgFill from "../components/BgInstructionsPagesvgFill";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import Section from "../components/Section";
import FooterContent from "../components/FooterContent";
import FrameComponent from "../components/FrameComponent";
import Background from "../components/Background";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <main className="background">
        <section className="section">
          <Header />
          <Background1 />
          <FrameComponent5 />
        </section>
        <BgInstructionsPagesvgFill />
        <FrameComponent4 />
        <FrameComponent3 />
        <FrameComponent2 />
        <FrameComponent1 />
        <section className="payment-methods">
          <Section />
          <FooterContent />
        </section>
      </main>
      <FrameComponent />
      <Background
        wavepng="/wavepng@2x.png"
        a28413d6761d624ff11223c3c="/6a28413d6761d624ff11223c3c1cfd0dpng@2x.png"
      />
      <img className="image-icon" alt="" src="/image-13@2x.png" />
    </div>
  );
};

export default HomePage;
