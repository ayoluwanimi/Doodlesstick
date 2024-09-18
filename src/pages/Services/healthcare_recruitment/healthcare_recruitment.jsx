import React from "react";
import { Footer } from "../../../components/Footer";
import { Navbar } from "../../../components/Navbar";
import RecruitmentImg from "../../../images/healthcare_recruitment.webp";
import "./healthcare_recruitment.css";

const Healthcare_Recruitment = () => {
  return (
    <>
      <Navbar />
      <div className="care">
        <div className="care-container">
          <div className="care-image">
            <img src={RecruitmentImg} className="object-top object-cover" alt="Healthcare Recruiment Image" />
            <div className="care-card">
              <h2>Healthcare Recruitment</h2>
              <ul>
                <li>
                  We recruit a wide range of healthcare professionals who are
                  then placed with other care facilities to work as permanent,
                  contract or temporary agency staffing basis.
                </li>
                <li>
                  We recruit:
                  <br />
                  <br />
                  - Healthcare Assistants
                  <br />
                  - Support workers
                  <br />
                  - Nurses
                  <br />
                  - Doctors
                  <br />
                  - Behavior therapist
                  <br />
                  - Occupational Therapist
                  <br />
                  - Speech and language therapist
                  <br />- All other allied health professionals
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Healthcare_Recruitment;
