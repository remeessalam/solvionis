import React from "react";
import { companyDetails } from "../constant";
import { Link } from "react-router-dom";

const LandingAbout = ({ isWeb }) => {
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
                {isWeb
                  ? "Driving Digital Success with Exceptional Web Development"
                  : "Innovative Mobile App Solutions for Modern Businesses"}
              </h2>
              <p className="sec-text">
                {isWeb ? (
                  <>
                    Welcome to {companyDetails.name}, where we craft
                    cutting-edge websites designed to captivate audiences and
                    drive growth. From stunning visuals to seamless
                    functionality, our web solutions are tailored to enhance
                    your digital presence.
                    <br />
                    <br />
                    Over the years, we’ve helped businesses across industries
                    achieve success with expertly designed websites, e-commerce
                    platforms, and custom web applications. Innovation, quality,
                    and collaboration are at the heart of everything we do.
                  </>
                ) : (
                  <>
                    At {companyDetails.name}, we specialize in building
                    high-performance mobile applications that empower businesses
                    to connect with customers anywhere, anytime. Our team
                    creates intuitive, feature-rich apps tailored to your unique
                    needs.
                    <br />
                    <br />
                    With expertise in both iOS and Android development, we’ve
                    established ourselves as leaders in mobile technology,
                    delivering apps that enhance user experiences and drive
                    business growth.
                  </>
                )}
              </p>
            </div>

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingAbout;
