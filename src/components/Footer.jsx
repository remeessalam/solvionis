import React from "react";
import { Link } from "react-router-dom";
import { companyDetails } from "../constant";

const Footer = () => {
  return (
    <footer
      className="footer-wrapper footer-layout1"
      style={{ backgroundImage: "url(assets/img/bg/footer-bg1-1.png)" }}
    >
      <div className="container">
        <div className="widget-area">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-5">
              <div className="widget footer-widget widget-about">
                <div className="about-logo">
                  <Link to="/">
                    <img
                      src="/assets/img/logo.png"
                      alt="solvionis"
                      style={{ height: "6rem", paddingTop: "1rem" }}
                    />
                  </Link>
                </div>
                <p className="footer-text mb-30">
                  Thank you for considering {companyDetails.name} as your
                  partner. We’re excited to help your business grow, and we look
                  forward to hearing from you soon.
                </p>
                <div className="social-btn style3">
                  <Link to="#" tabIndex={-1}>
                    <i className="fab fa-instagram" />
                  </Link>
                  <Link to="#" tabIndex={-1}>
                    <i className="fab fa-linkedin-in" />
                  </Link>
                  <Link to="#" tabIndex={-1}>
                    <i className="fab fa-twitter" />
                  </Link>
                  <Link to="#" tabIndex={-1}>
                    <i className="fab fa-facebook-f" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Useful Links</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/service">Service</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget me-xl-3">
                <h3 className="widget_title">Contact</h3>
                <div className="widget-contact2">
                  <div className="widget-contact-grid">
                    <i className="fas fa-phone-alt" />
                    <div className="contact-grid-details">
                      <h6>
                        <Link to="#">{companyDetails.phone}</Link>
                      </h6>
                    </div>
                  </div>
                  <div className="widget-contact-grid">
                    <i className="fas fa-envelope" />
                    <div className="contact-grid-details">
                      <h6>
                        <Link to="#">{companyDetails.email}</Link>
                        <p />
                      </h6>
                    </div>
                  </div>
                  <div className="widget-contact-grid">
                    <i className="fas fa-map-marker-alt" />
                    <div className="contact-grid-details">
                      <h6>
                        {companyDetails.address}
                        <p />
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <div className="copyright-wrap">
          <div className="row gy-3 justify-content-lg-between justify-content-center">
            <div className="col-auto align-self-center">
              <p className="copyright-text text-center">
                © <Link to="#">2q </Link> 2024 | All Rights Reserved
              </p>
            </div>
            <div className="col-auto">
              <div className="footer-links">
                <Link to="/contact">Privacy</Link>
                <Link to="/contact">Terms</Link>
                <Link to="/contact">Sitemap</Link>
                <Link to="/contact">Help</Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
