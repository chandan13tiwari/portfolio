import React, { useEffect } from "react";
import hsbc from "../asset/hsbc.jpeg";
import capg from "../asset/capg2.jpg";
import gehu from "../asset/gehu2.jpg";
import aexp from "../asset/amex.jpg";
import personal from "../asset/secure.png";
import project4 from "../asset/work4.jpg";
import project5 from "../asset/work5.jpg";
import project6 from "../asset/work6.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {props.project === "Machine Learning Intermediate Module with KANA." && <>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter" class="proj-title">
          Machine Learning Intermediate Module with KANA.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body class="proj-description">
          <h4>Client: HSBC UK</h4>
          <p>
            This project is a collaboration of Customer Relationship Managment (CRM) software with Machine Learning Module. 
            <br />
            We have automated the process of replying customer's queries by the Bank Agents by implmenting a Machine Learning module with KANA Response, which is a CRM software. The accuracy of our Machine Learning module is about 80% and by the time it will increase its efficiency to achieve more than 90% of accuracy. Our Machine Learning module uses existing customer queries to train and improve its accuracy.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} class="proj-btn">Close</Button>
        </Modal.Footer>
      </>
      }

      {props.project === "Digital KYC & CRS" && <>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter" class="proj-title">
          Digital KYC & CRS
          </Modal.Title>
        </Modal.Header>
        <Modal.Body class="proj-description">
          <h4>Client: HSBC France</h4>
          <p>
            In this project we need to reconciliate Bank customer's identity and address to complete users KYC digitally and generates a report and send it to Bank's partner.
            <br />
            We have taken care of both individual accounts and joint accounts.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} class="proj-btn">Close</Button>
        </Modal.Footer>
      </>
      }

      {props.project === "Secure File Upload." && <>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter" class="proj-title">
          Secure File Upload.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body class="proj-description">
          <h4>Self</h4>
          <p>
          This application is used to upload any file of any format to AWS S3 bucket with <em>dual layer of security</em> and download it from S3 as well. 
          <br />
          We are uploading an encrypted file that means before uploading file to S3, we are encrypting the file using AES key and further secure that AES key with an RSA encryption algorithm and done same for downloading. We are downloaded the encrypted file and then decrypted it using that encrypted key.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} class="proj-btn">Close</Button>
        </Modal.Footer>
      </>
      }

      {props.project === "GEHU Online" && <>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter" class="proj-title">
          GEHU Online
          </Modal.Title>
        </Modal.Header>
        <Modal.Body class="proj-description">
          <h4>Client: Graphic Era Hill University</h4>
          <p>
            This is an Android application which can provides several features out of the box to the University students.
            <br />
            This application can provide below features:
            <ul>
              <li><em>Fees Payment</em> - Students can now pay their fees online using Paytm. We have implemented Paytm Payment Gateway to secure Payments.</li>
              <li><em>Video Lectures</em> - Free Video lectures which is provided by University professors can be accessible by students to clear their concepts.</li>
              <li><em>Notes & Study materials</em> - Students can now prepare better for their exams by reading high quality notes and exam materials provided by university professors.</li>
            </ul>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} class="proj-btn">Close</Button>
        </Modal.Footer>
      </>
      }

      {props.project === "Config Data Management & Digital Asset Management" && <>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter" class="proj-title">
          Config Data Management & Digital Asset Management
          </Modal.Title>
        </Modal.Header>
        <Modal.Body class="proj-description">
          <h4>Client: American Express</h4>
          <p>
            This project is basically a part of Network Modulation (NeMo). 
            <br />
            When partner onboards to AMEX, we are capturing users onboarding data and store it to AWS and sends that data to other downstream systems for further processing.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} class="proj-btn">Close</Button>
        </Modal.Footer>
      </>
      }
    </Modal>
  );
}

function Projects() {

  const [modalShow, setModalShow] = React.useState(false);
  const [text, setText] = React.useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="project-wraper" id="project">
      <div className="project-main container">
        <h2
          className="project-title"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          My Work
        </h2>

        <div className="project-container">
          <div className="project-row row">
            <div
              className="project-img col-3"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <img src={hsbc} alt="" className="proj-img"/>

              <div className="project-link">
                <a onClick={(event) => {setModalShow(true); setText(event.target.innerText)}} className="project-link-name" >
                  Machine Learning Intermediate Module with KANA.
                </a>
              </div>
            </div>
            <div
              className="project-img col-3"
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <img src={hsbc} alt="" className="proj-img"/>

              <div className="project-link">
                <a onClick={(event) => {setModalShow(true); setText(event.target.innerText)}} className="project-link-name">
                  Digital KYC & CRS
                </a>
              </div>
            </div>
            <div
              className="project-img col-3"
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <img src={personal} alt="" className="proj-img"/>

              <div className="project-link">
                <a onClick={(event) => {setModalShow(true); setText(event.target.innerText)}} className="project-link-name">
                  Secure File Upload.
                </a>
              </div>
            </div>
          </div>
          <div className="project-row row">
            <div
              className="project-img col-3"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <img src={gehu} alt="" className="proj-img"/>

              <div className="project-link">
                <a onClick={(event) => {setModalShow(true); setText(event.target.innerText)}} className="project-link-name">
                  GEHU Online
                </a>
              </div>
            </div>
            <div
              className="project-img col-3"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <img src={aexp} alt="" className="proj-img"/>

              <div className="project-link">
                <a onClick={(event) => {setModalShow(true); setText(event.target.innerText)}} className="project-link-name">
                  Config Data Management & Digital Asset Management
                </a>
              </div>
            </div>
          </div>
          <div className="project-row row">
            {/* <div
              className="project-img col-3"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <img src={aexp} alt="" className="proj-img"/>

              <div className="project-link">
                <a onClick={(event) => {setModalShow(true); setText(event.target.innerText)}} className="project-link-name">
                  Config Data Management
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        project={text}
      />
    </div>   
  );
}

export default Projects;