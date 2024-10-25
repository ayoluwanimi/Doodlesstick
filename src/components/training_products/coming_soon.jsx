import React from "react";
import { useNavigate } from "react-router-dom";
import comingSoonImage from "../../images/maintenance.png";
import "./coming_soon.css";

const ComingSoon = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="coming-soon-container">
      <button onClick={handleBackClick} className="back-button">
        <i className="fas fa-arrow-left"></i>
      </button>
      <img
        src={comingSoonImage}
        alt="Coming Soon"
        className="coming-soon-image"
      />
      <h2>Coming Soon</h2>
    </div>
  );
};

export default ComingSoon;
