import React, { useState } from "react";
// import TrackVisibility from "react-on-screen";
// import CountUp from "react-countup";
// import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import { companyDetails } from "../constant";
const Hero = () => {
  // const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div
        className="hero-wrapper hero-2"
        id="hero"
        style={{ backgroundImage: "url(assets/img/hero/hero_bg_2_1.jpg)" }}
      >
        {/* <div
          className="hero-overlay"
          style={{ backgroundImage: "url(assets/img/hero/hero_overlay_1.png)" }}
        ></div> */}

        <div className="container">
          <div className="hero-style2">
            <h1 className="hero-title text-white">
              Welcome to{" "}
              <span className="hero-title2">{companyDetails.name}</span>
            </h1>
            <p className="hero-text text-white">
              At {companyDetails.name}, we deliver cutting-edge digital
              solutions, including web and mobile development, AI, and
              cybersecurity, to drive business growth. Our expert team combines
              creativity and technical expertise to empower your business in the
              digital landscape.
            </p>
            <div className="btn-group">
              <Link to="/about" className="global-btn">
                Explore More
                <img src="assets/img/icon/right-icon.svg" alt="Bizmaster" />
              </Link>
              {/* <div className="media-wrap">
                <div className="icon">
                  <span className="play-btn popup-video">
                    <i
                      className="fas fa-solid fa-play"
                      onClick={() => setOpen(true)}
                    />
                  </span>
                </div>
                <div className="media-body">
                  <h6 className="title text-white">See How It Works</h6>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="8dTfgnkmJGs"
        onClose={() => setOpen(false)}
      /> */}
    </>
  );
};

export default Hero;
