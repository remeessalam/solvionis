import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteScrollToTop from "./elements/RouteScrollToTop";
import ScrollToTop from "react-scroll-to-top";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import ServiceDetails from "./pages/ServiceDetails";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <RouteScrollToTop />
        <ScrollToTop smooth color="#196164" />
        <Routes>
          <Route exact path="/home-2" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/service-details" element={<ServiceDetails />} />
          <Route exact path="/blog" element={<Blog />} />
          {/* <Route exact path="/blog-details" element={<BlogDetails />} /> */}
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
