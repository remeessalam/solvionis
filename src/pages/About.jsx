import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import Breadcrumb from "../components/Breadcrumb";
import GoalArea from "../components/GoalArea";
import AboutOne from "../components/AboutOne";
import ProcessThree from "../components/ProcessThree";
import TestimonialOne from "../components/TestimonialOne";
import CounterOne from "../components/CounterOne";
import Newsletter from "../components/Newsletter";
import Header from "../components/Header";
import OurProcess from "../components/OurProcess";
import AboutTwo from "../components/AboutTwo";
import TestimonialTwo from "../components/TestimonialTwo";
import EventOne from "../components/EventOne";
import OurStory from "../components/OurStory";
import WhatDrivesUs from "../components/WhatDrivesUs";
import Footer from "../components/Footer";

const About = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 500);
  }, []);
  return (
    <>
      {/* Preloader */}
      {active === true && <Preloader />}

      {/* Helmet */}
      <HelmetReact title={"About"} />

      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <Breadcrumb title="About Us" />

      {/* GoalArea */}
      {/* <GoalArea /> */}

      {/* AboutTwo */}
      <AboutTwo />
      <OurStory />
      {/* ProcessThree */}
      {/* <ProcessThree /> */}

      {/* TestimonialTwo */}

      {/* CounterOne */}
      {/* <CounterOne /> */}
      <WhatDrivesUs />
      {/* WhyChoose */}
      <div className="space">
        <OurProcess />
      </div>
      <EventOne />
      <div className="space">
        <TestimonialTwo />
      </div>
      {/* FooterOne */}
      <Footer />
    </>
  );
};

export default About;
