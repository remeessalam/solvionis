import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import LandingHero from "../components/LandingHero";
import LandingHeader from "../components/LandingHeader";
import LandingAbout from "../components/LandingAbout";
import LandingServices from "../components/LandingServices";
import OurProcess from "../components/OurProcess";
import TestimonialTwo from "../components/TestimonialTwo";
import AppointmentOne from "../components/AppointmentOne";
import LandingFooter from "../components/LandingFooter";
import OurStory from "../components/OurStory";

const Landingpage = ({ page }) => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 500);
  }, []);
  const isWeb = page === "web";
  return (
    <>
      {active === true && <Preloader />}
      <HelmetReact title={isWeb ? "Web-Development" : "App-development"} />
      <LandingHeader />
      <LandingHero isWeb={isWeb} />
      <div id="about">
        <LandingAbout isWeb={isWeb} />
      </div>
      <div id="service">
        <LandingServices isWeb={isWeb} />
      </div>
      <div className="space-bottom space-top">
        <OurProcess />
      </div>
      <div className="space-bottom ">
        <OurStory />
      </div>
      <TestimonialTwo />
      <AppointmentOne />
      <div id="contact">
        <LandingFooter />
      </div>
    </>
  );
};

export default Landingpage;
