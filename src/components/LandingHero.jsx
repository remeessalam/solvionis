import { Link } from "react-router-dom";
import { companyDetails } from "../constant";
import { Link as ScrollLink } from "react-scroll";

const LandingHero = ({ isWeb }) => {
  return (
    <>
      <div
        className="hero-wrapper hero-2"
        id="hero"
        style={{ backgroundImage: "url(assets/img/hero/hero_bg_2_1.jpg)" }}
      >
        <div className="container">
          <div className="hero-style2">
            <h1 className="hero-title text-white">
              Welcome to{" "}
              <span className="hero-title2">{companyDetails.name}</span>
            </h1>
            <p className="hero-text text-white">
              {isWeb
                ? `At ${companyDetails.name}, we specialize in creating cutting-edge websites that combine stunning designs with seamless functionality. Whether you need an e-commerce platform, a corporate website, or a custom solution, our expert team ensures your digital presence drives engagement and growth.`
                : `At ${companyDetails.name}, we build high-performance mobile applications tailored to your business needs. From iOS to Android, our apps deliver intuitive user experiences and robust functionality, empowering your business to connect with customers anytime, anywhere.`}
            </p>
            <div className="btn-group">
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                offset={-70}
                className="global-btn"
              >
                Explore More
                <img src="assets/img/icon/right-icon.svg" alt="SOLVIONIS" />
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingHero;
