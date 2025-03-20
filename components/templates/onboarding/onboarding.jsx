"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChoosingGuide from "./choosing-guide";
import FirstStep from "./first-step";
import NavBtn from "../../atoms/buttons/nav-btn/nav-btn";
import ProgressDots from "../../atoms/progress-dots/progress-dots";
import SignUpBtns from "../../atoms/buttons/sign-up-btns/sign-up-btns";
import SecondStep from "./second-step";
import ThirdStep from "./third-step";
import FourthStep from "./fourth-step";
import FifthStep from "./fifth-step";
import SixthStep from "./sixth-step";

const steps = [
  ChoosingGuide,
  FirstStep,
  SecondStep,
  ThirdStep,
  FourthStep,
  FifthStep,
  SixthStep,
]; // Add more steps here later

const OnBoarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = steps.length;

  const [selectedGuide, setSelectedGuide] = useState(null);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSkip = () => {
    console.log("Onboarding skipped!");
    // Redirect user to the main dashboard
  };

  const StepComponent = steps[currentStep];

  return (
    <div className="onboarding">
      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <StepComponent
            nextStep={nextStep}
            prevStep={prevStep}
            selectedGuide={selectedGuide}
            setSelectedGuide={setSelectedGuide}
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <NavBtn
        direction="left"
        onClick={prevStep}
        disabled={currentStep === 0}
      />
      <NavBtn
        direction="right"
        onClick={nextStep}
        disabled={currentStep === steps.length - 1}
      />

      <motion.div
        className="bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <ProgressDots totalSteps={totalSteps} currentStep={currentStep} />

        <SignUpBtns title={"Skip onboarding"} type="secondary" />
      </motion.div>
    </div>
  );
};

export default OnBoarding;
