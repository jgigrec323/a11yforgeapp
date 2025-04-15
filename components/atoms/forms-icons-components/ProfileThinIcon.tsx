import React from "react";

interface ProfileThinIconProps {
  className?: string;
  mode: "light" | "dark";
}

const ProfileThinIcon: React.FC<ProfileThinIconProps> = ({
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
      <g fill="none" stroke={strokeColor} strokeWidth="1">
        <path
          strokeLinejoin="round"
          d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"
        />
        <circle cx="12" cy="7" r="3" />
      </g>
    </svg>
  );
};

export default ProfileThinIcon;
