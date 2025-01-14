import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title }) => {
  return (
    <div
      className="breadcumb-wrapper "
      style={{
        backgroundImage: "url(/assets/img/normal/breadcrumb-thumb.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* bg animated image/ */}
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="breadcumb-content">
              <h1 className="breadcumb-title text-white">{title}</h1>
              <ul className="breadcumb-menu">
                <li>
                  <Link to="/" className="text-white">
                    Home
                  </Link>
                </li>
                <li className="active text-white">{title}</li>
              </ul>
            </div>
          </div>
          {/* <div className="col-lg-6 d-lg-block d-none">
            <div className="breadcumb-thumb">
              <img src="assets/img/normal/breadcrumb-thumb.jpg" alt="img" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
