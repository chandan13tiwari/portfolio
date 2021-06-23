import React, { useEffect } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_nv1wxlt",
        e.target,
        "user_27n6YUb2ellXdZT7DK4tl"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success(
            "Thanks for your message! I'll connect with you soon!!",
            {
              position: "top-center",
            }
          );
        },
        (error) => {
          console.log(error.text);
          toast.error("Oops!! Some issue occured. Please try Later!", {
            position: "top-center",
          });
        }
      );

    e.target.reset();
  }

  return (
    <div className="contact-wraper" id="contact">
      <div className="contact-main">
        <h1
          className="contact-title"
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Contact
        </h1>
        <div className="contact-info">
          <div className="container-fluid">
            <div className="row">
              <div className="contact-header col-lg-6 offset-lg-3 justify-content-between">
                <div
                  className="contact_info_item justify-content-start align-items-center"
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  <img
                    src="https://img.icons8.com/office/24/000000/phone.png"
                    alt="phone"
                  />
                  <div className="contact_info_content">
                    <div className="contact_info_title">Phone</div>
                    <div className="contact_info_text">+91 9761760261</div>
                    <div className="contact_info_text">+91 6395973814</div>
                  </div>
                </div>

                <div
                  className="contact_info_item d-flex justify-content-start align-items-center"
                  data-aos="fade-down"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  <img
                    src="https://img.icons8.com/office/24/000000/email.png"
                    alt="phone"
                  />
                  <div className="contact_info_content">
                    <div className="contact_info_title">Email</div>
                    <div className="contact_info_text">
                      chandan13tiwaris@gmail.com
                    </div>
                  </div>
                </div>

                <div
                  className="contact_info_item d-flex justify-content-start align-items-center"
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  <img
                    src="https://img.icons8.com/office/24/000000/address.png"
                    alt="phone"
                  />
                  <div className="contact_info_content">
                    <div className="contact_info_title">Address</div>
                    <div className="contact_info_text">Haldwani, India</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact_form">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div
                  className="contact_form_conatiner mt-5 "
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  <div className="contact_form_title">Get in Touch</div>
                  <form id="contact_form" onSubmit={sendEmail}>
                    <div className="contact_form_name justify-content-between align-items-between">
                      <input
                        type="text"
                        id="contact_form_name"
                        className="contact_form_name input_field"
                        placeholder="Name"
                        required="true"
                        name="name"
                      />

                      <input
                        type="email"
                        id="contact_form_email"
                        className="contact_form_email input_field"
                        placeholder="Email"
                        required="true"
                        name="email"
                      />

                      <input
                        type="text"
                        id="contact_form_phone"
                        className="contact_form_phone input_field"
                        placeholder="Phone Number"
                        required="true"
                        name="phone"
                      />
                    </div>
                    <div className="contact-email-subject">
                      <input
                        type="text"
                        id="contact_form_subject"
                        className="contact_form_subject input_field"
                        placeholder="Subject"
                        required="true"
                        name="subject"
                      />
                    </div>

                    <div className="contact_form_text mt-4">
                      <textarea
                        className="text_field contact_form_message"
                        placeholder="Message"
                        cols="87"
                        rows="4"
                        name="message"
                      />
                    </div>
                    <div className="contact_form_button">
                      <button
                        type="submit"
                        className="button contact_submit_button"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
