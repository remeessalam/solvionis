import React from "react";
import { useForm } from "react-hook-form";

const AppointmentOne = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="appointment-area-2 space-bottom space-top overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div
              className="appointment-thumb-2"
              style={{ height: "100%", maxHeight: "70vh" }}
            >
              <img
                src="assets/img/normal/appointment-thumb-2-1.jpg"
                alt="img"
                style={{
                  objectFit: "cover",
                  borderRadius: "10px",
                  height: "100%",
                }}
              />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="appointment-form-wrap">
              <div className="title-area mb-30">
                <span className="sub-title mt-5 mt-xl-0">
                  <img src="assets/img/icon/title_left.svg" alt="shape" />
                  Talk to Us
                </span>
                <h2 className="sec-title style2">Strategic Solutions</h2>
              </div>
              <form
                className="appointment-form ajax-contact"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control style-border"
                        name="name"
                        id="name"
                        placeholder="Full name"
                        {...register("name", { required: "Name is required" })}
                      />
                      <i className="fas fa-user" />
                      {errors.name && <span>{errors.name.message}</span>}
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control style-border"
                        name="email"
                        id="email"
                        placeholder="Your mail"
                        {...register("email", {
                          required: "Email is required",
                          pattern:
                            /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/i,
                        })}
                      />
                      <i className="fas fa-envelope" />
                      {errors.email && <span>{errors.email.message}</span>}
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        className="form-control style-border"
                        placeholder="Subject"
                        {...register("subject", {
                          required: "Subject is required",
                        })}
                      />
                      {/* <i className="fas fa-angle-down" /> */}
                      {errors.subject && <span>{errors.subject.message}</span>}
                    </div>
                  </div>
                </div>
                <div className="form-group col-12">
                  <textarea
                    placeholder="Write your message"
                    id="contactForm"
                    className="form-control style-border"
                    {...register("message", {
                      required: "Message is required",
                    })}
                  />
                  {errors.message && <span>{errors.message.message}</span>}
                </div>
                <div className="form-btn col-12">
                  <button type="submit" className="global-btn style-border">
                    Send Now
                    <i className="fas fa-arrow-right ms-2" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOne;
