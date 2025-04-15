import React from "react";

interface AssistiveListeningIconProps {
  className?: string;
  mode: "light" | "dark";
}

const AssistiveListeningIcon: React.FC<AssistiveListeningIconProps> = ({
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
      <path
        fill="none"
        stroke={strokeColor}
        strokeWidth="1"
        d="M2 22L.5 23.5M5 19l-1.5 1.5m4.5-2L5.5 16m4.5-2l-1.5 1.5M13 11l-1.5 1.5M19 .5A4.5 4.5 0 0 1 23.5 5M19 3.5A1.5 1.5 0 0 1 20.5 5m-15 4a6.5 6.5 0 0 1 13 0c0 .662-.111 1.32-.328 1.944l-2.85 8.195A3.52 3.52 0 0 1 12 21.5c-.98 0-1.865-.352-2.5-1m6-11.5a3.5 3.5 0 1 0-7 0"
      />
    </svg>
  );
};

export default AssistiveListeningIcon;
