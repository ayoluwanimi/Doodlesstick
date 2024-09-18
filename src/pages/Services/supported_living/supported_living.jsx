import React from "react";
import { Footer } from "../../../components/Footer";
import { Navbar } from "../../../components/Navbar";
import SupportImg from "../../../images/supported_living.webp";
import "./supported_living.css";

const Supported_Living = () => {
  return (
    <>
      <Navbar />
      <div className="supported-living">
        <div className="supported-living-container">
          <div className="supported-living-image">
            <img src={SupportImg} alt="Support Living Image" />
            <div className="supported-living-card">
              <h2>Supported Living</h2>
              <ul>
                <li>
                  At Doodles Stick Limited, we provide supported living services
                  that give people choice, respect, independence, and quality of
                  life. We believe people have the right to live the life they
                  choose for themselves in their own homes, with their own
                  tenancies.
                </li>
                <li>
                  We ensure that people feel safe in their environment, people
                  get the right support that will enable them to fulfil life
                  aspirations and successfully live within the community.
                </li>
                <li>
                  Our management and staff are experts in supporting people with
                  learning disabilities, Autism, and mental health needs. We
                  have adequate experience in managing behaviors that challenge
                  and meeting complex needs.
                </li>
                <li>
                  We use positive behavior, person centered active support and
                  Intensive interaction approaches in behavior management and
                  development of independent and life skills.
                </li>
                <li>
                  The Support we provide is person-centered and tailored to meet
                  individual’s unique needs, preferences, and aspirations.
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

export default Supported_Living;
