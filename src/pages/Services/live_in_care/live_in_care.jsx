import React from "react";
import { Footer } from "../../../components/Footer";
import { Navbar } from "../../../components/Navbar";
import live_in_careImg from "../../../images/live_in_care.webp";
import "./live_in_care.css";

const Live_In_Care = () => {
  return (
    <>
      <Navbar />
      <div className="care">
        <div className="care-container">
          <div className="care-image">
            <img src={live_in_careImg} className="object-cover object-top" alt="Live In Care Image" />
            <div className="care-card">
              <h2>Live In Care/24hrs</h2>
              <ul>
                <li>
                  We provide bespoke and carefully structured care that ensures
                  that service users’ needs are met in their own home. It is a
                  popular alternative to residential care.
                </li>
                <li>
                  The services included in live-in care is not limited to a set
                  of duties, task, and responsibilities, but tailored to meet
                  everyone's needs.
                </li>
                <li>
                  We will support with:
                  <br />
                  <br />
                  - Bathing, toileting, grooming and dressing.
                  <br />
                  - Helping to prepare healthy meals.
                  <br />
                  - Household chores including laundry and general cleaning.
                  <br />
                  - Shopping trips
                  <br />
                  - Social activities and engagements
                  <br />
                  - Daily companionship
                  <br />
                  - Overnight care and support
                  <br />- Specialist care including Stoma care, catheter care,
                  PEG and more.
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

export default Live_In_Care;
