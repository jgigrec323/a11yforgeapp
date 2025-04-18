import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

import countriesData from "../../../lib/countries.json";
import Image from "next/image";
import SignUpBtns from "../../atoms/buttons/sign-up-btns/sign-up-btns";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { signup } from "../../../lib/api-calls";
import { useGlobal } from "@/context/global-context";

// Import the options from userProfileSelectOptions.js
import {
  accessibilityOptions,
  assistiveDeviceCategoryOptions,
  assistiveDeviceOptions,
  genderOptions,
  socialMediaOptions,
} from "../../../lib/userProfileSelectOptions";
import ProfileThinIcon from "../../atoms/forms-icons-components/ProfileThinIcon";
import EmailIcon from "../../atoms/forms-icons-components/EmailIcon";
import LightPhoneIcon from "../../atoms/forms-icons-components/LightPhoneIcon";
import AkarLocationIcon from "../../atoms/forms-icons-components/AkarLocation";
import AccessibilityOutlineIcon from "../../atoms/forms-icons-components/AccessibilityOutlineIcon";
import ArticonsLockIcon from "@/components/atoms/forms-icons-components/ArticonsLockIcon";
import AssistiveListeningIcon from "@/components/atoms/forms-icons-components/AssistiveListeningIcon";
import PeopleOutlineIcon from "@/components/atoms/forms-icons-components/PeopleOutlineIcon";
import GenderIcon from "@/components/atoms/forms-icons-components/GenderIcon";

const MultiStepForm = () => {
  const router = useRouter();

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [location, setLocation] = useState("");
  const [accessibilityProfile, setAccessibilityProfile] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [assistiveDeviceCategory, setAssistiveDeviceCategory] =
    useState("Screen Reader");
  const [assistiveDevice, setAssistiveDevice] = useState("JAWS");
  const [socialMedia, setSocialMedia] = useState("LinkedIn");
  const [socialMediaLink, setSocialMediaLink] = useState("");

  const { updateUser, mode } = useGlobal();

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
    event.preventDefault();
    setStep(2);
  };

  const handlePrevStep = (event) => {
    event.preventDefault();
    setStep(1);
  };

  const validateForm = () => {
    let errors = {};

    // Check required fields
    if (!firstName.trim()) errors.firstName = "First name is required";
    if (!lastName.trim()) errors.lastName = "Last name is required";
    if (!email.trim()) errors.email = "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errors.email = "Invalid email format";
    if (!phoneNumber.trim()) errors.phoneNumber = "Phone number is required";
    if (!password.trim()) errors.password = "Password is required";
    if (password.length < 8)
      errors.password = "Password must be at least 4 characters";
    if (password !== confirmPassword)
      errors.confirmPassword = "Passwords do not match";
    if (!location.trim()) errors.location = "Location is required";
    if (!accessibilityProfile)
      errors.accessibilityProfile = "Please select an accessibility profile";

    // Social media link validation
    if (socialMediaLink.trim() && !/^https?:\/\/.+$/.test(socialMediaLink)) {
      errors.socialMediaLink = "Invalid URL format";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; // Returns true if no errors
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors before proceeding.");
      return;
    }
    const userData = {
      firstName,
      lastName,
      username: `${firstName.toLowerCase()}.${lastName.toLowerCase()}`, // Auto-generate username
      email,
      phoneNumber: `${selectedCountry.dialCode}${phoneNumber}`,
      password,
      location,
      accessibilityProfile,
      assistiveDeviceCategory,
      assistiveDevice,
      socialMedia,
      socialMediaLink,
    };

    try {
      const response = await signup(userData);

      if (response?.data?.token) {
        updateUser(userData, response.data.token);

        toast.success("Signup successful!");

        router.push("/congratulations");
      } else {
        console.error("Signup successful but no token received.");
        toast.error("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Signup failed:", error);
      alert(
        error?.response?.data?.message || "Signup failed. Please try again."
      );
    }
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
              <ProfileThinIcon mode={mode} />
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>
              <ProfileThinIcon mode={mode} />
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>
              <EmailIcon mode={mode} />
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>
              <LightPhoneIcon mode={mode} />
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
              <input
                type="tel"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label>
              <ArticonsLockIcon mode={mode} />
              Password
            </label>
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="eye-icon" onClick={togglePassword}>
                👁
              </span>
            </div>
          </div>

          <div className="input-group">
            <label>
              <ArticonsLockIcon mode={mode} />
              Confirm Password
            </label>
            <div className="password-input">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
              <AkarLocationIcon mode={mode} />
              Location
            </label>
            <input
              type="text"
              placeholder="Enter your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>
              <AccessibilityOutlineIcon mode={mode} />
              Accessibility Profile
            </label>
            <select
              value={accessibilityProfile}
              onChange={(e) => setAccessibilityProfile(e.target.value)}
            >
              <option value="" disabled>
                Select an accessibility profile
              </option>
              {accessibilityOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="input-group">
            <label>
              <AssistiveListeningIcon mode={mode} />
              Assistive Device
            </label>
            <div className="device-selection">
              <select
                value={assistiveDeviceCategory}
                onChange={(e) => setAssistiveDeviceCategory(e.target.value)}
              >
                {assistiveDeviceCategoryOptions.map((option) => (
                  <option key={option.key} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              <select
                value={assistiveDevice}
                onChange={(e) => setAssistiveDevice(e.target.value)}
              >
                {assistiveDeviceCategory &&
                  assistiveDeviceOptions[
                    assistiveDeviceCategoryOptions.find(
                      (option) => option.value === assistiveDeviceCategory
                    )?.key || "none"
                  ].map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div className="input-group">
            <label>
              <PeopleOutlineIcon mode={mode} />
              Social Media
            </label>
            <div className="social-media">
              <select
                value={socialMedia}
                onChange={(e) => setSocialMedia(e.target.value)}
                required
              >
                {socialMediaOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
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
          <div className="input-group">
            <label>
              <GenderIcon mode={mode} />
              Pronouns
            </label>
            <select
              value={pronouns}
              onChange={(e) => setPronouns(e.target.value)}
            >
              <option value="" disabled>
                Choose your pronouns
              </option>
              {genderOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <SignUpBtns type="primary" title={"Submit"} />
        </form>
      )}
    </div>
  );
};

export default MultiStepForm;
