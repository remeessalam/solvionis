import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import Breadcrumb from "../components/Breadcrumb";
import ServiceView from "../components/ServiceView";
import AppointmentTwo from "../components/AppointmentTwo";
import Header from "../components/Header";
import AppointmentOne from "../components/AppointmentOne";
import Footer from "../components/Footer";

const Service = () => {
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
      <HelmetReact title={"Service"} />

      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <Breadcrumb title="Service" />

      {/* ServiceOne */}
      <ServiceView />

      {/* AppointmentOne */}
      <AppointmentOne />

      {/* Newsletter */}
      {/* <Newsletter /> */}

      {/* FooterOne */}
      <Footer />
    </>
  );
};

export default Service;
