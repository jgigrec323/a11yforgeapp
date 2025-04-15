import React from "react";
import Image from "next/image";
import { useGlobal } from "@/context/global-context";

const StepGuideTitle = () => {
  const { mode } = useGlobal();

  return (
    <div className="step-guide-title">
      <h3 className="step-text">A step-by-step guide to</h3>
      <div className="step-logo">
        <Image
          src={
            mode === "light"
              ? "/assets/Logo.png"
              : "/assets/Logo-dark-onboarding.png"
          }
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
