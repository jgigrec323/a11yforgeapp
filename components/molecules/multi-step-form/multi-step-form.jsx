import React, { useEffect, useState } from "react";
import Link from "next/link";
import countriesData from "../../../lib/countries.json";
import Image from "next/image";
import SignUpBtns from "../../atoms/buttons/sign-up-btns/sign-up-btns";
import { useRouter } from "next/navigation";

const MultiStepForm = () => {
  const router = useRouter();

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [accessibilityProfile, setAccessibilityProfile] = useState("");
  const [assistiveDeviceCategory, setAssistiveDeviceCategory] =
    useState("Screen Reader");
  const [assistiveDevice, setAssistiveDevice] = useState("JAWS");
  const [socialMediaPlatform, setSocialMediaPlatform] = useState("LinkedIn");
  const [socialMediaLink, setSocialMediaLink] = useState("");

  useEffect(() => {
    const countryList = Object.entries(countriesData).map(
      ([code, country]) => ({
        name: country.name,
        code: country.iso["alpha-2"],
        code3: country.iso["alpha-3"],
        dialCode: country.phone[0],
        flag: `https://flagcdn.com/w80/${country.iso[
          "alpha-2"
        ].toLowerCase()}.png`,
      })
    );

    setCountries(countryList);
    const defaultCountry =
      countryList.find((c) => c.code === "US") || countryList[0];
    setSelectedCountry(defaultCountry);
  }, []);

  useEffect(() => {
    if (assistiveDeviceCategory === "Screen Reader") {
      setAssistiveDevice("JAWS");
    } else if (assistiveDeviceCategory === "Speech Recognition") {
      setAssistiveDevice("Dragon");
    }
  }, [assistiveDeviceCategory]);

  const handleChange = (event) => {
    const selectedCode = event.target.value;
    const country = countries.find((c) => c.code === selectedCode);
    setSelectedCountry(country);
  };

  const handleNextStep = (event) => {
    event.preventDefault(); // ✅ Prevent default form submission
    setStep(2);
  };

  const handlePrevStep = (event) => {
    event.preventDefault(); // ✅ Prevent default form submission
    setStep(1);
  };

  const handleRegister = (event) => {
    event.preventDefault(); // ✅ Prevent default form submission
    router.push("/congratulations");
  };
  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  return (
    <div className="multi-step-form">
      {/* Step Navigation */}
      <div className="steps">
        <span onClick={handlePrevStep} className={step === 1 ? "active" : ""}>
          Step 1
        </span>
        <span onClick={handleNextStep} className={step === 2 ? "active" : ""}>
          Step 2
        </span>
      </div>

      {/* Form Step 1 */}
      {step === 1 && (
        <form className="form" onSubmit={handleNextStep}>
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
                src={"/assets/icons/mdi--email-outline.png"}
              ></Image>
              Email
            </label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="input-group">
            <label>
              <Image
                alt="Phone"
                width={16}
                height={16}
                src={"/assets/icons/mdi-light--phone.png"}
              ></Image>
              Phone Number
            </label>
            <div className="phone-input">
              <div className="select-wrapper">
                {selectedCountry && (
                  <Image
                    src={selectedCountry.flag}
                    alt={selectedCountry.name}
                    className="flag"
                    width={50}
                    height={12}
                  />
                )}
                <select
                  onChange={handleChange}
                  value={selectedCountry?.code || ""}
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.code3} ({country.dialCode})
                    </option>
                  ))}
                </select>
              </div>
              <input type="tel" placeholder="Phone Number" required />
            </div>
          </div>

          <div className="input-group">
            <label>
              {" "}
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

          <div className="input-group">
            <label>
              {" "}
              <Image
                alt="Password"
                width={16}
                height={16}
                src={"/assets/icons/arcticons--lock.png"}
              ></Image>
              Confirm Password
            </label>
            <div className="password-input">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                required
              />
              <span className="eye-icon" onClick={toggleConfirmPassword}>
                👁
              </span>
            </div>
          </div>

          <SignUpBtns type="primary" title={"Next →"} />
        </form>
      )}

      {/* Form Step 2 */}
      {step === 2 && (
        <form className="form" onSubmit={handleRegister}>
          <div className="input-group">
            <label>
              {" "}
              <Image
                alt="Password"
                width={16}
                height={16}
                src={"/assets/icons/akar-icons--location.png"}
              ></Image>
              Location
            </label>
            <input type="text" placeholder="Enter your location" required />
          </div>

          <div className="input-group">
            <label>
              <Image
                alt="Accessibility profile"
                width={16}
                height={16}
                src={"/assets/icons/famicons--accessibility-outline.png"}
              ></Image>
              Accessibility Profile
            </label>
            <select
              value={accessibilityProfile}
              onChange={(e) => setAccessibilityProfile(e.target.value)}
              required
            >
              <option value="" disabled>
                Select an accessibility profile
              </option>
              <option value="blind">Blind / Low Vision</option>
              <option value="deaf">Deaf / Hard of Hearing</option>
              <option value="motor">Motor Impairment</option>
              <option value="cognitive">Cognitive Disability</option>
            </select>
          </div>

          <div className="input-group">
            <label>
              {" "}
              <Image
                alt="Assistive device"
                width={16}
                height={16}
                src={"/assets/icons/guidance--assistive-listening-device.png"}
              ></Image>
              Assistive Device
            </label>
            <div className="device-selection">
              <select
                value={assistiveDeviceCategory}
                onChange={(e) => setAssistiveDeviceCategory(e.target.value)}
                required
              >
                <option value="Screen Reader">Screen Reader</option>
                <option value="Speech Recognition">Speech Recognition</option>
              </select>

              <select
                value={assistiveDevice}
                onChange={(e) => setAssistiveDevice(e.target.value)}
                required
              >
                {assistiveDeviceCategory === "Screen Reader" && (
                  <>
                    <option value="JAWS">JAWS</option>
                    <option value="NVDA">NVDA</option>
                  </>
                )}
                {assistiveDeviceCategory === "Speech Recognition" && (
                  <>
                    <option value="Dragon">Dragon NaturallySpeaking</option>
                  </>
                )}
              </select>
            </div>
          </div>

          <div className="input-group">
            <label>
              <Image
                alt="Social media"
                width={16}
                height={16}
                src={"/assets/icons/famicons--people-outline.png"}
              ></Image>
              Social Media
            </label>
            <div className="social-media">
              <select
                value={socialMediaPlatform}
                onChange={(e) => setSocialMediaPlatform(e.target.value)}
                required
              >
                <option value="LinkedIn">LinkedIn</option>
                <option value="Twitter">Twitter</option>
              </select>
              <input
                type="url"
                placeholder="Add Link..."
                value={socialMediaLink}
                onChange={(e) => setSocialMediaLink(e.target.value)}
                required
              />
            </div>
          </div>

          <SignUpBtns type="primary" title={"Submit"} />
        </form>
      )}
    </div>
  );
};

export default MultiStepForm;
