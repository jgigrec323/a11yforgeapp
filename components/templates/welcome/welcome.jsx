"use client";
import Image from "next/image";
import SignUpDivider from "../../atoms/dividers/sign-up-divider/sign-up-divider";
import SignUpBtns from "../../atoms/buttons/sign-up-btns/sign-up-btns";
import { useRouter } from "next/navigation";

const Welcome = () => {
  const router = useRouter();
  const icons = {
    google: "/assets/logos/icon.png",
    apple: "/assets/logos/apple.png",
    microsoft: "/assets/logos/Microsoft.png",
    facebook: "/assets/logos/Facebook.png",
  };
  return (
    <div className="welcome">
      <h4 className="welcome-small-title">Welcome to</h4>
      <div className="img-container">
        <Image src="/assets/Logo.png" width={250} height={150} alt="Logo" />
      </div>
      <h4 className="welcome-small-title">Your all-in-one</h4>
      <h2 className="welcome-title">Web accessibility companion</h2>

      <div className="btns-container">
        <div className="btns-group">
          <SignUpBtns
            onClick={() => {
              router.push("/register");
            }}
            title={"Sign Up"}
            type="primary"
          ></SignUpBtns>
          <SignUpBtns
            title={"Sign In"}
            onClick={() => {
              router.push("/sign-in");
            }}
            type="secondary"
          ></SignUpBtns>
        </div>

        <SignUpDivider text="Sign Up/Sign In with" />

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

export default Welcome;
