import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import Breadcrumb from "../components/Breadcrumb";
import Newsletter from "../components/Newsletter";
import BlogDetailsInner from "../components/BlogDetailsInner";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BlogDetails = () => {
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
      <HelmetReact title={"Blog Details"} />

      {/* HeaderFive */}
      <Header />

      {/* Breadcrumb */}
      <Breadcrumb title="Blog Details" />

      {/* BlogDetailsInner */}
      <BlogDetailsInner />

      {/* Newsletter */}
      <Newsletter />

      {/* FooterOne */}
      <Footer />
    </>
  );
};

export default BlogDetails;
