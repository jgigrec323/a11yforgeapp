"use client";
import { useEffect, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import Confetti from "react-confetti";

const GlobalConfetti = () => {
  const { width, height } = useWindowSize();
  const [pieces, setPieces] = useState(300); // Start with a high number

  useEffect(() => {
    const interval = setInterval(() => {
      setPieces((prev) => (prev > 0 ? prev - 20 : 0)); // Reduce confetti gradually
    }, 500); // Reduce every 500ms

    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 10000); // Stop completely after 10s

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return pieces > 0 ? (
    <Confetti width={width} height={height} numberOfPieces={pieces} />
  ) : null;
};

export default GlobalConfetti;
