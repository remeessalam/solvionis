import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import Breadcrumb from "../components/Breadcrumb";
import ContactInner from "../components/ContactInner";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
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
      <HelmetReact title={"Contact"} />

      {/* HeaderFive */}
      <Header />

      {/* Breadcrumb */}
      <Breadcrumb title="Contact" />

      {/* ContactInner */}
      <ContactInner />

      {/* FooterOne */}
      <Footer />
    </>
  );
};

export default Contact;
