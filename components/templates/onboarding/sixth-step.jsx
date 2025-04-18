"use client";
import { motion } from "framer-motion";
import SpeechBubble from "../../atoms/speech-bubble/speech-bubble";
import Image from "next/image";

const SixthStep = ({ nextStep, selectedGuide }) => {
  return (
    <motion.div
      className="step step1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Speech Bubble */}
      <SpeechBubble message="<strong>Select your profile </strong>(Vision, Mobility, Cognitive, etc.) to see relevant options and customize your experience." />

      {/* Main Content */}
      <div className="step1-content">
        {/* Selected Guide (Character) */}
        <motion.div
          className="guide-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Image
            src={`/assets/images/guides/${selectedGuide}.png`}
            alt={selectedGuide}
            width={220}
            height={350}
          />
        </motion.div>

        {/* GIF / UI Demo */}
        <motion.div
          className="demo-gif"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Image
            unoptimized={true}
            src={"/assets/gifs/sixth-gif.gif"}
            alt="First step UI demo"
            width={300}
            height={500}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SixthStep;
