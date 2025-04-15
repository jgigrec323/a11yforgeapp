import React from "react";

interface EmailIconProps {
  className?: string;
  mode: "light" | "dark";
}

const EmailIcon: React.FC<EmailIconProps> = ({ className, mode }) => {
  const fillColor = mode === "light" ? "#000000" : "#FFFFFF";

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
    >
      <path
        fill={fillColor}
        d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"
      />
    </svg>
  );
};

export default EmailIcon;
