"use client";
import React from "react";
import { usePathname } from "next/navigation"; //
import AuthSwitcher from "./auth-switcher";

const FormContainer = ({ children }) => {
  const pathname = usePathname();
  const showAuthSwitcher = ["/sign-in", "/register"].includes(pathname);

  return (
    <div className="form-container">
      {showAuthSwitcher && <AuthSwitcher />}
      {children}
    </div>
  );
};

export default FormContainer;
