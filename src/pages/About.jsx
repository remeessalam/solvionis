import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import Breadcrumb from "../components/Breadcrumb";
import GoalArea from "../components/GoalArea";
import AboutOne from "../components/AboutOne";
import ProcessThree from "../components/ProcessThree";
import TestimonialOne from "../components/TestimonialOne";
import CounterOne from "../components/CounterOne";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import Header from "../components/Header";
import OurProcess from "../components/OurProcess";

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
      <GoalArea />

      {/* AboutOne */}
      <AboutOne />

      {/* ProcessThree */}
      <ProcessThree />

      {/* TestimonialOne */}
      <div className="space">
        <TestimonialOne />
      </div>

      {/* CounterOne */}
      <CounterOne />

      {/* WhyChoose */}
      <div className="space">
        <OurProcess />
      </div>

      {/* Newsletter */}
      <Newsletter />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default About;
