import React from "react";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";

const NavBtn = ({ direction, onClick, disabled }) => {
  return (
    <button
      title={`${direction} button`}
      className={`nav-btn ${direction} ${disabled ? "hidden" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {direction === "left" ? <PiCaretLeftLight /> : <PiCaretRightLight />}
    </button>
  );
};

export default NavBtn;
