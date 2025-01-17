import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { whatWeDo } from "../constant";
const ServiceThree = () => {
  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="service-area-2 space-bottom">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-5">
            <div className="title-area">
              <span className="sub-title">
                <img src="assets/img/icon/title_left.svg" alt="shape" />
                Our Services
              </span>
              <h2 className="sec-title style2">Navigate the Path to Success</h2>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="service-title-area">
              <p className="">
                Use receiving aco growin number of currencies and get Use
                receiving aco growin number of currencies and get paid like
                designpaid
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row gx-30 global-carousel service-slider2">
          <Slider {...settings}>
            {whatWeDo.map((obj) => (
              <div className="p-3" key={obj.title} style={{ height: "100%" }}>
                <div className="service-box">
                  <div className="service-box_content">
                    <div className="service-box_icon">
                      {obj.icon}
                      {/* <img
                        src="assets/img/icon/service-icon_1-1.svg"
                        alt="img"
                      /> */}
                    </div>
                    <h4 className="service-box_title h5">
                      <Link to={`/service/${obj.id}`}>{obj.title}</Link>
                    </h4>
                    <p className="service-box_text">{obj.description}</p>
                    <Link
                      to={`/service/${obj.id}`}
                      className="global-btn style-border"
                    >
                      Read More{" "}
                      <img
                        src="assets/img/icon/right-icon2.svg"
                        alt="SOLVIONIS"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ServiceThree;
