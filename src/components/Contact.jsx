import React from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
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
    <div className="contact-wraper">
      <div className="contact-main">
        <h1 className="contact-title">Contact</h1>
        <div className="contact-info">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 offset-lg-3 d-flex justify-content-between">
                <div className="contact_info_item d-flex justify-content-start align-items-center">
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

                <div className="contact_info_item d-flex justify-content-start align-items-center">
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

                <div className="contact_info_item d-flex justify-content-start align-items-center">
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
                <div className="contact_form_conatiner mt-5 ">
                  <div className="contact_form_title">Get in Touch</div>
                  <form id="contact_form" onSubmit={sendEmail}>
                    <div className="contact_form_name d-flex justify-content-between align-items-between">
                      <input
                        type="text"
                        id="contact_form_name"
                        className="contact_form_name input_field"
                        placeholder="Your Name"
                        required="true"
                        name="name"
                      />

                      <input
                        type="email"
                        id="contact_form_email"
                        className="contact_form_email input_field"
                        placeholder="Your Email"
                        required="true"
                        name="email"
                      />

                      <input
                        type="text"
                        id="contact_form_phone"
                        className="contact_form_phone input_field"
                        placeholder="Your Phone Number"
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

                    <div className="contact_form_text mt-3">
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
                        className="button contact_submit_button btn btn-primary"
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
