"use client";
import { motion } from "framer-motion";
import SpeechBubble from "../../atoms/speech-bubble/speech-bubble";
import Image from "next/image";

const FifthStep = ({ nextStep, selectedGuide }) => {
  return (
    <motion.div
      className="step step5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Speech Bubbles with Absolute Positioning */}
      <div className="speech-bubble-container">
        <SpeechBubble message="Ally is your <strong>friendly, empathetic</strong> and <strong>intuitive guide</strong>, here to make digital accessibility easy and effortless." />
      </div>

      <div className="second-speech-bubble">
        <SpeechBubble message="Whether by text or voice, I’m here to <strong>provide clear, helpful support</strong> for an inclusive experience! ✨" />
      </div>
      <div className="white-space-step-5"></div>
      {/* Main Content */}
      <div className="step5-content">
        {/* AI Ally & Lena Holding Hands */}
        <motion.div
          className="guide-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Image
            src={`/assets/images/guides/lena3.png`}
            alt="Lena and Ally"
            width={380}
            height={380}
          />
        </motion.div>

        {/* Chat UI / GIF */}
        <motion.div
          className="chat-ui"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Image
            src={"/assets/gifs/fifth-gif.gif"}
            alt="Chat UI Demo"
            width={280}
            height={500}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FifthStep;
