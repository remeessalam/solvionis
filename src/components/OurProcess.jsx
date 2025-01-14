import React from "react";

const OurProcess = () => {
  return (
    <div className="wcu-area-2 ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="title-area text-center me-xl-4 ms-xl-4">
              <span className="sub-title">
                <img src="assets/img/icon/title_left.svg" alt="shape" />
                Our Process
              </span>
              <h2 className="sec-title style2">
                Our Approach: Strategic, Collaborative, and Client-Focused
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6">
            <div className="wcu-thumb">
              <div className="wcu-thumb-1">
                <img src="assets/img/normal/wcu-thumb-1-1.jpg" alt="img" />
              </div>
              <div className="wcu-shape jump">
                <img src="assets/img/normal/1.png" alt="img" />
              </div>
              <div className="wcu-shape2 movingX">
                <img src="assets/img/normal/2.png" alt="img" />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="wcu-card-wrap">
              <div className="wcu-card">
                {/* <div className="icon">
                  <img src="assets/img/icon/wcu-icon_2-1.svg" alt="img" />
                </div> */}
                <div className="wcu-card-details">
                  <h4 className="wcu-card-title">Our Process</h4>
                  <p className="wcu-card-text">
                    We take a strategic, client-focused approach to every
                    project we take on. Our goal is to fully understand your
                    business, its challenges, and your goals, so that we can
                    develop solutions that address your specific needs. From the
                    moment we begin working together, we prioritize clear
                    communication, transparency, and collaboration. We work with
                    you through every stage of the project—from initial planning
                    and design to development, deployment, and ongoing support.
                    By staying closely aligned with your business objectives, we
                    ensure that our solutions not only meet your immediate needs
                    but also help you achieve long-term success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
