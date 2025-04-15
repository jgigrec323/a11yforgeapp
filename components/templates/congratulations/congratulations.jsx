"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useGlobal } from "@/context/global-context";

const Congratulations = () => {
  const router = useRouter();
  const { mode } = useGlobal();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/onboarding");
    }, 4000);

    return () => clearTimeout(timer); // Cleanup function to prevent memory leaks
  }, [router]);

  return (
    <div className="congrats">
      {/* Logo */}
      <div className="logo">
        <Image
          src={
            mode === "light" ? "/assets/Logo.png" : "/assets/Logo-dark-mode.png"
          }
          width={100}
          height={40}
          alt="Logo"
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
