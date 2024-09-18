import React from "react";
import { Footer } from "../../../components/Footer";
import { Navbar } from "../../../components/Navbar";
import Business_ConsultationImg from "../../../images/healthcare_recruitment.webp";
import "./healthcare_business_consultation.css";

const Healthcare_Business_Consultation = () => {
  return (
    <>
      <Navbar />
      <div className="care">
        <div className="care-container">
          <div className="care-image">
            <img
              src={Business_ConsultationImg}
              className="object-cover object-top"
              alt="Healthcare Business Consultancy Image"
            />
            <div className="care-card">
              <h2>Healthcare Business Consultancy</h2>
              <ul>
                <li>
                  We are subject matter experts in the industry and as a result
                  we are happy to support others in their healthcare business
                  projects.
                  <br />
                  <br />
                  - Registration with CQC
                  <br />
                  - Policies and procedures for both CQC and general operations
                  <br />
                  - Operating formats and templates
                  <br />
                  - Business plans
                  <br />
                  - Mock Inspections and compliance Audits
                  <br />
                  - CQC interview preparations
                  <br />
                  - CQC KLOE Statement
                  <br />
                  - CQC Financial Viability
                  <br />
                  - Contract information and tailored business opportunities,
                  tendering, PSL and third party contracting.
                  <br />- Relevant bespoke support as required by your
                  organization.
                </li>
              </ul>
              <div className="button-container">
                <a href="/bookings" className="care-booking">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Healthcare_Business_Consultation;
