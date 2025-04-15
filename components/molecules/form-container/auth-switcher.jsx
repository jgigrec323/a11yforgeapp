"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useGlobal } from "@/context/global-context";

const AuthSwitcher = () => {
  const pathname = usePathname();
  const isSignIn = pathname === "/sign-in";
  const isSignUp = pathname === "/register";
  const { mode } = useGlobal();

  return (
    <div className="auth-header">
      <div className="logo">
        <Image
          src={
            mode === "light" ? "/assets/Logo.png" : "/assets/Logo-dark-mode.png"
          }
          alt="A11y FORGE Logo"
          width={120}
          height={50}
          className="logo"
        />
      </div>
      <div className="tab">
        <Link className={isSignIn ? "active" : undefined} href={"/sign-in"}>
          Sign in
        </Link>
        <Link className={isSignUp ? "active" : undefined} href={"/register"}>
          Register
        </Link>
      </div>
    </div>
  );
};

export default AuthSwitcher;
