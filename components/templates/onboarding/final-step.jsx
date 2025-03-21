"use client";
import { motion } from "framer-motion";
import SpeechBubble from "../../atoms/speech-bubble/speech-bubble";
import Image from "next/image";
import SignUpBtns from "../../atoms/buttons/sign-up-btns/sign-up-btns";
import { useGlobal } from "../../../context/global-context";

const EXTENSION_ID = "elfkkabjekhojhjjnllblmdnbfaocpml";

const FinalStep = () => {
  const { user, token, selectedGuide } = useGlobal();

  const handleSetHealthProfile = () => {
    if (!user || !token) {
      console.error("User data or token is missing!");
      return;
    }

    const userData = {
      ...user, // Spread all user info
      character: selectedGuide, // Assign selected guide as character
      token, // Include authentication token
    };

    window.postMessage(
      {
        source: "A11yForge-WebApp",
        action: "openSidebar",
        extensionId: EXTENSION_ID,
        userData,
      },
      "*"
    );
  };

  return (
    <motion.div
      className="step-final"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="speech-bubble-container guide-bubble">
        <SpeechBubble message="Now that you know the basics, let’s create some magic!" />
      </div>

      <div className="speech-bubble-container ally-bubble">
        <SpeechBubble message="Click the button below to set up your health profile. 🦮✨" />
      </div>

      <div className="final-content">
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

      <SignUpBtns
        title={"Set Up Your Health Profile"}
        onClick={handleSetHealthProfile}
      />
    </motion.div>
  );
};

export default FinalStep;
