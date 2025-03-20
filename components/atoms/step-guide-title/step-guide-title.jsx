import React from "react";
import Image from "next/image";

const StepGuideTitle = () => {
  return (
    <div className="step-guide-title">
      <h3 className="step-text">A step-by-step guide to</h3>
      <div className="step-logo">
        <Image
          src="/assets/Logo.png"
          alt="allyFORGE Logo"
          width={180} // Adjust width as needed
          height={50} // Adjust height as needed
          priority
        />
      </div>
    </div>
  );
};

export default StepGuideTitle;
