import React from "react";
import { Link } from "react-router-dom";
import { ourServices } from "../constant";

const ServiceInnerDetails = ({ service }) => {
  return (
    <section className="space">
      <div className="container">
        <div className="row gx-30">
          <div className="col-xxl-8 col-lg-7">
            <div className="page-thumb">
              <img src={`/${service.img}`} alt="img" />
            </div>
            <h3 className="page-title mt-40 mb-20">{service.title}</h3>
            <h3 className="page-title mt-40 mb-20">{service.description}</h3>
            <p>{service.details}</p>
            <div className="checklist style6 mt-40 mb-60">
              <ul>
                {service.services.map((obj, i) => (
                  <li key={i}>
                    <i className="fas fa-check-circle" />
                    {obj}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-5">
            <aside className="sidebar-area">
              <div className="widget widget_categories widget_service-categories">
                <ul>
                  {ourServices.map((obj) => (
                    <li key={obj.id}>
                      <Link to={`/service/${obj.id}`}>{obj.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceInnerDetails;
