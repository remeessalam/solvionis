import React from "react";
import { companyDetails, whyChooseUs } from "../constant";

const EventOne = () => {
  return (
    <div className="event-area-1 bg-smoke">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="event-wrapp">
              <div className="title-area">
                <span className="sub-title">
                  <img src="assets/img/icon/title_left.svg" alt="shape" />
                  Why Choose Us
                </span>
                <h2 className="sec-title style2">
                  Our Core Values and Approach
                </h2>
                <p>
                  At {companyDetails.name}, we focus on delivering exceptional,
                  tailored solutions that help your business succeed. Our team
                  of experts is dedicated to providing high-quality services
                  that are both innovative and practical. We work closely with
                  you to understand your unique needs and deliver solutions that
                  align with your business goals. Whether you need a new
                  website, a mobile app, or cloud migration services, we are
                  here to support you at every stage of your digital journey.
                </p>
              </div>
              {whyChooseUs.map((obj) => (
                <div className="event-card">
                  <div
                    className="icon"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      background: "white",
                      borderRadius: "100%",
                      height: "4rem",
                    }}
                  >
                    {obj.icon}
                    {/* <img src="assets/img/icon/event-icon_1-1.svg" alt="img" /> */}
                  </div>
                  <div className="event-card-details">
                    <h4 className="event-card-title">{obj.title}</h4>
                    <p className="event-card-text">{obj.description}</p>
                  </div>
                </div>
              ))}
              {/* <div className="event-card">
                <div className="icon">
                  <img src="assets/img/icon/event-icon_1-2.svg" alt="img" />
                </div>
                <div className="event-card-details">
                  <h4 className="event-card-title">Design make for you</h4>
                  <p className="event-card-text">
                    Sreader will be distrol acted bioiiy desig the.ished fa that
                    a reader will be distrol acted bioiiy desig the.ished
                  </p>
                </div>
              </div>
              <div className="event-card">
                <div className="icon">
                  <img src="assets/img/icon/event-icon_1-3.svg" alt="img" />
                </div>
                <div className="event-card-details">
                  <h4 className="event-card-title">Finished the process</h4>
                  <p className="event-card-text">
                    Distrol acted bioiiy desig the.ished fact that a reader will
                    distrol acted bioiiy desig the.ished fact that a reader.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="event-image">
              <div className="event-thumb-1">
                <img src="assets/img/normal/event-thumb-1-1.jpg" alt="img" />
              </div>
              {/* <div className="event-shape">
                <img src="assets/img/normal/event-shape.png" alt="Bizmaster" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventOne;
