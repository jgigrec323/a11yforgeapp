"use client";
import { motion } from "framer-motion";
import SpeechBubble from "../../atoms/speech-bubble/speech-bubble";
import Image from "next/image";

const guides = [
  { id: "lena", name: "Lena", image: "/assets/images/guides/lena.png" },
  { id: "max", name: "Max", image: "/assets/images/guides/max.png" },
  { id: "jd", name: "JD", image: "/assets/images/guides/jd.png" },
];

const ChoosingGuide = ({ nextStep, setSelectedGuide, selectedGuide }) => {
  return (
    <div className="step step0">
      <SpeechBubble message="<strong>Hi Amelia, nice to meet you! 😊</strong><br>We are the a11yFORGE guides, here to assist you with your onboarding. Choose one of us to continue." />

      <div className="guides-container">
        {guides.map((guide) => (
          <motion.div
            key={guide.id}
            className={`guide-card ${
              selectedGuide === guide.id ? "selected" : ""
            }`}
            onClick={() => setSelectedGuide(guide.id)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="guide-name">{guide.name}</div>
            <div className="guide-image">
              <Image
                src={guide.image}
                alt={guide.name}
                width={200}
                height={350}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ChoosingGuide;
