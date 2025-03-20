import React from "react";

const ProgressDots = ({ totalSteps, currentStep }) => {
  return (
    <div className="progress-dots">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <span
          key={index}
          className={`dot ${index === currentStep ? "active" : ""}`}
        ></span>
      ))}
    </div>
  );
};

export default ProgressDots;
