"use client";
import { motion } from "framer-motion";
import SpeechBubble from "../../atoms/speech-bubble/speech-bubble";
import Image from "next/image";
import SignUpBtns from "../../atoms/buttons/sign-up-btns/sign-up-btns";

const FinalStep = ({ selectedGuide }) => {
  return (
    <motion.div
      className=" step-final"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Speech Bubble 1 - Guide */}
      <div className="speech-bubble-container guide-bubble">
        <SpeechBubble message="Now that you know the basics, let’s create some magic!" />
      </div>

      {/* Speech Bubble 2 - Dog Ally */}
      <div className="speech-bubble-container ally-bubble">
        <SpeechBubble message="Click the button below to set up your health profile. 🦮✨" />
      </div>

      {/* Main Content */}
      <div className="final-content">
        {/* Selected Guide (Character) */}
        <motion.div
          className="guide-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Image
            src={`/assets/images/guides/${selectedGuide}.png`}
            alt={selectedGuide}
            width={300}
            height={400}
          />
        </motion.div>

        {/* Dog Ally */}
        <motion.div
          className="ally"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Image
            src={"/assets/images/guides/ally.png"}
            alt="AI Ally"
            width={180}
            height={200}
          />
        </motion.div>
      </div>

      {/* CTA Button */}
      <SignUpBtns title={"Set Up Your Health Profile"} />
    </motion.div>
  );
};

export default FinalStep;
