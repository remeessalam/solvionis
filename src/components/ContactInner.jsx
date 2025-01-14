import React from "react";
import { Link } from "react-router-dom";
import { companyDetails } from "../constant";
import { useForm } from "react-hook-form";

const ContactInner = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Form Submitted!");
  };
  return (
    <>
      <div className="map-sec">
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d89.2286059153658!3d24.00527418490799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b97badc6151%3A0x30b048c9fb2129bc!2s!5e0!3m2!1sen!2sbd!4v1651028958211!5m2!1sen!2sbd"
          allowFullScreen=""
          loading="lazy"
          title="SOLVIONIS"
        /> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62181.953728718516!2d77.5774195947362!3d13.075587422104103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae231a5795fef3%3A0xf0862301a31ae894!2sSite%20no%2026!5e0!3m2!1sen!2sin!4v1736855232866!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          title="SOLVIONIS"
        ></iframe>
      </div>
      <div className="contact-area space">
        <div className="container">
          <div className="contact-page-wrap bg-theme">
            <div className="row gy-40 align-items-center">
              <div className="col-lg-4 col-md-6">
                <div className="contact-info">
                  <div className="contact-info_icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <div className="contact-info_details">
                    <h6 className="contact-info_title">Phone</h6>
                    <p className="contact-info_text">
                      <span>{companyDetails.phone}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="contact-info">
                  <div className="contact-info_icon">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <div className="contact-info_details">
                    <h6 className="contact-info_title">Location</h6>
                    <p className="contact-info_text">
                      {companyDetails.address}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="contact-info">
                  <div className="contact-info_icon">
                    <i className="fas fa-envelope" />
                  </div>
                  <div className="contact-info_details">
                    <h6 className="contact-info_title">Email</h6>
                    <p className="contact-info_text">
                      <span>{companyDetails.email}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-bottom">
        <div className="container">
          <div className="row gy-40 justify-content-between">
            <div className="col-lg-4">
              <div className="title-area mb-0">
                <span className="sub-title">
                  <img src="assets/img/icon/title_left.svg" alt="shape" />
                  Contact Us
                </span>
                <h2 className="sec-title style2">Get In Touch</h2>
                <p className="mb-40">
                  Design is this a broad category encompasses various
                  technological solutions{" "}
                </p>
                <div className="social-btn style4">
                  <Link to="#" tabIndex={-1}>
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link to="#" tabIndex={-1}>
                    <i className="fab fa-linkedin-in" />
                  </Link>
                  <Link to="#" tabIndex={-1}>
                    <i className="fab fa-twitter" />
                  </Link>
                  <Link to="#" tabIndex={-1}>
                    <i className="fab fa-instagram" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8">
              <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="form-control style-border"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <p className="error-text">{errors.name.message}</p>
                    )}
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      placeholder="Your Email"
                      className="form-control style-border"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                          message: "Invalid email format",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="error-text">{errors.email.message}</p>
                    )}
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="form-control style-border"
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]{10,15}$/,
                          message: "Invalid phone number format",
                        },
                      })}
                    />
                    {errors.phone && (
                      <p className="error-text">{errors.phone.message}</p>
                    )}
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      placeholder="Subject"
                      className="form-control style-border"
                      {...register("subject", {
                        required: "Subject is required",
                      })}
                    />
                    {errors.subject && (
                      <p className="error-text">{errors.subject.message}</p>
                    )}
                  </div>
                  <div className="col-12 form-group">
                    <textarea
                      placeholder="Message here.."
                      className="form-control style-border"
                      {...register("message", {
                        required: "Message is required",
                      })}
                    />
                    {errors.message && (
                      <p className="error-text">{errors.message.message}</p>
                    )}
                  </div>
                  <div className="col-12 form-group mb-0">
                    <button className="global-btn w-100" type="submit">
                      Send Now
                      <img
                        src="assets/img/icon/right-icon.svg"
                        alt="SOLVIONIS"
                      />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInner;
