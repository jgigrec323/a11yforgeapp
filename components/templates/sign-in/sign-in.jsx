"use client";
import Image from "next/image";
import SignUpDivider from "../../atoms/dividers/sign-up-divider/sign-up-divider";
import SignUpBtns from "../../atoms/buttons/sign-up-btns/sign-up-btns";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const SignIn = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const icons = {
    google: "/assets/logos/icon.png",
    apple: "/assets/logos/apple.png",
    microsoft: "/assets/logos/Microsoft.png",
    facebook: "/assets/logos/Facebook.png",
  };
  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="sign-in">
      <form className="auth-form">
        <div className="input-group">
          <label>
            <Image
              alt="Profile icon"
              width={16}
              height={16}
              src={"/assets/icons/iconamoon--profile-thin.png"}
            ></Image>
            Full Name
          </label>
          <input type="text" placeholder="Enter your full name" required />
        </div>
        <div className="input-group">
          <label>
            <Image
              alt="Password"
              width={16}
              height={16}
              src={"/assets/icons/arcticons--lock.png"}
            ></Image>
            Password
          </label>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              required
            />
            <span className="eye-icon" onClick={togglePassword}>
              👁
            </span>
          </div>
        </div>

        <SignUpBtns title={"Sign In"} type="primary"></SignUpBtns>
        <p className="forgot-password">
          Forgot Password? <Link href="/reset">Reset Here</Link>
        </p>
      </form>
      <SignUpDivider text="or Sign In with" />
      <div className="btns-container">
        <div className="btns-group">
          <SignUpBtns
            icon={icons.google}
            title={"Google"}
            type="social-google"
          ></SignUpBtns>
          <SignUpBtns
            icon={icons.apple}
            title={"Apple"}
            type="social-apple"
          ></SignUpBtns>
          <SignUpBtns
            icon={icons.microsoft}
            title={"Microsoft"}
            type="social-microsoft"
          ></SignUpBtns>
          <SignUpBtns
            icon={icons.facebook}
            title={"Facebook"}
            type="social-facebook"
          ></SignUpBtns>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
