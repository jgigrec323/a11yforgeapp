import React from "react";

interface AkarLocationIconProps {
  className?: string;
  mode: "light" | "dark";
}

const AkarLocationIcon: React.FC<AkarLocationIconProps> = ({
  className,
  mode,
}) => {
  const strokeColor = mode === "light" ? "#000000" : "#FFFFFF";

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <circle cx="12" cy="10" r="3" />
        <path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8" />
      </g>
    </svg>
  );
};

export default AkarLocationIcon;
