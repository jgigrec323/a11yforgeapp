"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

import SignUpDivider from "../../atoms/dividers/sign-up-divider/sign-up-divider";
import SignUpBtns from "../../atoms/buttons/sign-up-btns/sign-up-btns";
import { signin } from "../../../lib/api-calls";
import { useGlobal } from "../../../context/global-context";

const SignIn = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { updateUser } = useGlobal();

  const icons = {
    google: "/assets/logos/icon.png",
    apple: "/assets/logos/apple.png",
    microsoft: "/assets/logos/Microsoft.png",
    facebook: "/assets/logos/Facebook.png",
  };

  const togglePassword = () => setShowPassword(!showPassword);

  const handleSignIn = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!email.trim() || !password.trim()) {
      toast.error("Email and password are required");
      setLoading(false);
      return;
    }

    try {
      const response = await signin({
        email,
        password,
      });
      if (response?.data?.token) {
        updateUser({}, response.data.token);

        toast.success("Sign-in successful!");
        router.push("/onboarding");
      } else {
        toast.error("Sign-in failed. Please try again.");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Sign-in failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sign-in">
      <form className="auth-form" onSubmit={handleSignIn}>
        <div className="input-group">
          <label>
            <Image
              alt="Email icon"
              width={16}
              height={16}
              src={"/assets/icons/mdi--email-outline.png"}
            />
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>
            <Image
              alt="Password icon"
              width={16}
              height={16}
              src={"/assets/icons/arcticons--lock.png"}
            />
            Password
          </label>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="eye-icon" onClick={togglePassword}>
              👁
            </span>
          </div>
        </div>

        <SignUpBtns
          title={loading ? "Signing In..." : "Sign In"}
          type="primary"
          disabled={loading}
        />

        <p className="forgot-password">
          Forgot Password? <Link href="/reset">Reset Here</Link>
        </p>
      </form>

      {/* <SignUpDivider text="or Sign In with" />

      <div className="btns-container">
        <div className="btns-group">
          <SignUpBtns
            icon={icons.google}
            title={"Google"}
            type="social-google"
          />
          <SignUpBtns icon={icons.apple} title={"Apple"} type="social-apple" />
          <SignUpBtns
            icon={icons.microsoft}
            title={"Microsoft"}
            type="social-microsoft"
          />
          <SignUpBtns
            icon={icons.facebook}
            title={"Facebook"}
            type="social-facebook"
          />
        </div>
      </div> */}
    </div>
  );
};

export default SignIn;
