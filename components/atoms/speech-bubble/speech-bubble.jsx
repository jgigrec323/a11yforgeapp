"use client";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const SpeechBubble = ({ message }) => {
  return (
    <motion.div
      className="speech-bubble"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <p dangerouslySetInnerHTML={{ __html: message }} />
    </motion.div>
  );
};

SpeechBubble.propTypes = {
  message: PropTypes.string.isRequired,
};

export default SpeechBubble;
