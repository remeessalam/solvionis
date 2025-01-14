import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import ServiceInnerDetails from "../components/ServiceInnerDetails";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { ourServices } from "../constant";

const ServiceDetails = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 500);
  }, []);
  const { id } = useParams();
  const service = ourServices[id - 1];
  console.log(service, "asdfkasjdf");
  return (
    <>
      {/* Preloader */}
      {active === true && <Preloader />}

      {/* Helmet */}
      <HelmetReact title={"Service Details"} />

      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <Breadcrumb title="Service Details" />

      {/* ServiceDetails */}
      <ServiceInnerDetails service={service} />

      {/* Newsletter */}
      {/* <Newsletter /> */}

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default ServiceDetails;
