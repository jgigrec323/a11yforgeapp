import Image from "next/image";
import React from "react";

const SignUpBtns = ({ title, type = "primary", icon, onClick }) => {
  return (
    <button title={title} className={`btn ${type}`} onClick={onClick}>
      {icon && (
        <Image height={20} width={20} src={icon} alt={title} className="icon" />
      )}
      {title}
    </button>
  );
};

export default SignUpBtns;
