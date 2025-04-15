"use client";
import { motion } from "framer-motion";
import SpeechBubble from "../../atoms/speech-bubble/speech-bubble";
import Image from "next/image";

const FourthStep = ({ nextStep, selectedGuide }) => {
  return (
    <motion.div
      className="step step4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Speech Bubble */}
      <SpeechBubble message='Your selected features can be viewed and easily edited in the <strong>"My Health Profile"</strong> section of your dashboard.' />

      {/* Main Content */}
      <div className="step4-content">
        {/* Selected Guide */}
        <motion.div
          className="guide-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Image
            src={`/assets/images/guides/${selectedGuide}2.png`}
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
            src={"/assets/gifs/fourth-gif.gif"}
            alt="Fourth step UI demo"
            width={300}
            height={500}
          />
        </motion.div>

        {/* AI Ally Character */}
        <motion.div
          className="ally"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Image
            src={"/assets/images/guides/ally.png"}
            alt="AI Ally"
            width={220}
            height={200}
          />
        </motion.div>

        {/* Speech Bubble for AI Ally */}
        <div className="ally-speech-bubble">
          <SpeechBubble message="Hi, friend! So nice to meet you! How can I help you today? 🦮✨" />
        </div>
      </div>
    </motion.div>
  );
};

export default FourthStep;
