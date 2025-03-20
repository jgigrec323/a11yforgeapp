import FormContainer from "../../molecules/form-container/form-container";
import Image from "next/image";

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-layout">
      {/* Right Side Image */}
      <Image
        src="/assets/images/main-r.png" // Use public folder directly
        alt="Main Right"
        width={400}
        height={500}
        className="auth-image right"
      />

      {/* Form Container */}
      <FormContainer>{children}</FormContainer>

      {/* Left Side Image */}
      <Image
        src="/assets/images/main-l.png"
        alt="Main Left"
        width={400}
        height={500}
        className="auth-image left"
      />
    </div>
  );
};

export default AuthLayout;
