import React from "react";

interface ArticonsLockIconProps {
  className?: string;
  mode: "light" | "dark";
}

const ArticonsLockIcon: React.FC<ArticonsLockIconProps> = ({
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
      viewBox="0 0 48 48"
    >
      <path
        fill="none"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        d="M10.17 19.26h27.66a1.9 1.9 0 0 1 1.898 1.9V41.6a1.9 1.9 0 0 1-1.899 1.9H10.171a1.9 1.9 0 0 1-1.9-1.9V21.16a1.9 1.9 0 0 1 1.9-1.9m3.419 0V14.9a10.401 10.401 0 0 1 20.803 0v4.36"
      />
      <circle
        cx="23.991"
        cy="31.38"
        r="4.034"
        fill="none"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
      />
    </svg>
  );
};

export default ArticonsLockIcon;
