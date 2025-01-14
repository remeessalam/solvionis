import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { companyDetails } from "../constant";
const AboutTwo = () => {
  return (
    <div className="space">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6">
            <div className="title-area mb-30">
              <span className="sub-title">
                <img src="assets/img/icon/title_left.svg" alt="shape" />
                About Us
              </span>
              <h2 className="sec-title style2">
                Empowering Business Growth with Innovative Technology Solutions
              </h2>
              <p className="sec-text">
                Welcome to {companyDetails.name}, where we’re dedicated to
                helping businesses thrive in the digital age. We offer a wide
                range of technology solutions designed to foster growth,
                streamline operations, and improve customer interactions. Our
                team is committed to delivering top-quality results, ensuring
                that each project we undertake is tailored to meet your unique
                needs and objectives.
                <br />
                <br />
                Since our inception, we’ve focused on one thing: innovation.
                Over the years, we’ve established ourselves as a trusted partner
                for businesses across industries, delivering expertise in web
                development, mobile app development, cloud computing,
                cybersecurity, artificial intelligence, game development, and
                cloud migration services. We believe in building lasting
                relationships with our clients, grounded in trust,
                collaboration, and a shared commitment to success.
              </p>
            </div>
            {/* <div className="checklist">
              <ul>
                <li>
                  <i className="fas fa-check-circle" />
                  Mistakes To Avoid to the dummy printing.
                </li>
                <li>
                  <i className="fas fa-check-circle" />
                  Your Startup industry standard loream saum.
                </li>
                <li>
                  <i className="fas fa-check-circle" />
                  Knew About Fonts text the printing.{" "}
                </li>
              </ul>
            </div>
            <p className="about-desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p> */}
            <div className="btn-group">
              <Link to="/about" className="global-btn style2">
                Explore More{" "}
                <img src="assets/img/icon/right-icon.svg" alt="Bizmaster" />
              </Link>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="about-thumb2">
              <div className="about-img-1">
                <img src="assets/img/normal/about_2-1.jpg" alt="img" />
              </div>
              <div className="about-img-2">
                <img src="assets/img/normal/about_2-2.jpg" alt="img" />
              </div>
              {/* <div className="about-counter-wrap">
                <div className="about-icon">
                  <img src="assets/img/icon/about_icon2-1.svg" alt="img" />
                  <div>
                    <h3 className="about-counter">
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <span className="counter-number">
                              <CountUp delay={0} start={0} end={6} />
                              k+
                            </span>
                          )
                        }
                      </TrackVisibility>
                    </h3>
                    <h4 className="about-counter-text">Clients</h4>
                  </div>
                </div>
                <p className="sec-desc">
                  Lorem Ipsum is simply dummy text of the
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
