"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChoosingGuide from "./choosing-guide";
import FirstStep from "./first-step";
import SecondStep from "./second-step";
import ThirdStep from "./third-step";
import FourthStep from "./fourth-step";
import FifthStep from "./fifth-step";
import SixthStep from "./sixth-step";
import FinalStep from "./final-step";
import NavBtn from "../../atoms/buttons/nav-btn/nav-btn";
import ProgressDots from "../../atoms/progress-dots/progress-dots";
import SignUpBtns from "../../atoms/buttons/sign-up-btns/sign-up-btns";
import StepGuideTitle from "../../atoms/step-guide-title/step-guide-title";

const steps = [
  ChoosingGuide,
  FirstStep,
  SecondStep,
  ThirdStep,
  FourthStep,
  FifthStep,
  SixthStep,
]; // FinalStep is NOT included here

const OnBoarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isFinalStep, setIsFinalStep] = useState(false);
  const [selectedGuide, setSelectedGuide] = useState(null);
  const totalSteps = steps.length;

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsFinalStep(true); // Switch to final step
    }
  };

  const prevStep = () => {
    if (isFinalStep) {
      setIsFinalStep(false); // Go back to last step before final
    } else if (currentStep > 0) {
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
      {!isFinalStep && <StepGuideTitle />}

      <AnimatePresence mode="wait">
        {isFinalStep ? (
          <motion.div
            key="finalStep"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FinalStep selectedGuide={selectedGuide} />
          </motion.div>
        ) : (
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
        )}
      </AnimatePresence>

      {/* Hide navigation & bottom elements in final step */}
      {!isFinalStep && (
        <>
          <NavBtn
            direction="left"
            onClick={prevStep}
            disabled={currentStep === 0}
          />
          <NavBtn
            direction="right"
            onClick={nextStep}
            disabled={currentStep == totalSteps - 1}
          />

          <motion.div
            className="bottom"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <ProgressDots totalSteps={totalSteps} currentStep={currentStep} />
            {currentStep === steps.length - 1 ? (
              <SignUpBtns
                onClick={() => setIsFinalStep(true)}
                title={"Finish onboarding"}
                type="primary"
              />
            ) : (
              <SignUpBtns
                title={"Skip onboarding"}
                onClick={() => setIsFinalStep(true)}
                type="secondary"
              />
            )}
          </motion.div>
        </>
      )}
    </div>
  );
};

export default OnBoarding;
