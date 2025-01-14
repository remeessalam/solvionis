import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import Breadcrumb from "../components/Breadcrumb";
import Newsletter from "../components/Newsletter";
import BlogAreaAll from "../components/BlogAreaAll";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Blog = () => {
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
      <HelmetReact title={"Blog"} />

      {/* Header
       */}
      <Header />

      {/* Breadcrumb */}
      <Breadcrumb title="Blog" />

      {/* BlogAreaAll */}
      <BlogAreaAll />

      {/* Newsletter */}
      <Newsletter />

      {/* FooterOne */}
      <Footer />
    </>
  );
};

export default Blog;
