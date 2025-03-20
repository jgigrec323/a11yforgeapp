"use client";
import Image from "next/image";

const Congratulations = () => {
  return (
    <div className="congrats">
      {/* Logo */}
      <div className="logo">
        <Image
          src="/assets/Logo.png"
          alt="A11y FORGE Logo"
          width={100}
          height={40}
        />
      </div>

      {/* Success Icon */}
      <div className="success-icon">
        <Image
          src="/assets/images/success.png"
          alt="Success Checkmark"
          width={200}
          height={200}
        />
      </div>

      {/* Text Section */}
      <div className="text">
        <h2>Welcome Aboard!</h2>
        <p>Check your inbox — We've sent you an activation link.</p>
        <p>Click it to verify your profile and start exploring.</p>
      </div>
    </div>
  );
};

export default Congratulations;
