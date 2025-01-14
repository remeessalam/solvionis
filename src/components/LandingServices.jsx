import React from "react";
import { Link } from "react-router-dom";
import { appDevelopment, webservices } from "../constant";

const LandingServices = ({ isWeb }) => {
  // If no number is provided, default to showing all services

  const servicesToShow = isWeb ? webservices : appDevelopment;
  return (
    <section className="bg-white">
      <div className="service-area-4 space-top position-relative">
        {/* <div className="shadow-shape-right" /> */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="title-area text-center">
                <span className="sub-title ">
                  <img src="assets/img/icon/title_left.svg" alt="shape" />
                  Our Services
                </span>
                <h2 className="sec-title style2 ">
                  {isWeb
                    ? "Revolutionizing Your Business with Web Development Services"
                    : "Transforming Your Business with App Development Services"}
                  Your Business Goals with Confidence
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row gx-30 gy-30 justify-content-center">
            {servicesToShow.map((service) => (
              <div key={service.id} className="col-xl-6 col-md-6">
                <div className="service-card-4">
                  <div className="service-card-thumb">
                    <img
                      src={service.img}
                      alt="img"
                      style={{ aspectRatio: "16/9", objectFit: "cover" }}
                    />
                  </div>
                  <div className="service-card_content">
                    <h4 className="service-card_title text-black">
                      <Link to="#" style={{ color: "black" }}>
                        {service.title}
                      </Link>
                    </h4>
                    <p
                      className="service-card_text text-black"
                      style={{ color: "black" }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingServices;
