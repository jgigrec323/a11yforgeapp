import axios from "axios";
import Cookies from "js-cookie";

const API = axios.create({
  baseURL: "https://usermanagementapi-ldtq4.kinsta.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Signup
export const signup = async (userData) => {
  try {
    const response = await API.post("/signup", userData);
    return response;
  } catch (error) {
    console.error("Signup error:", error.response?.data || error.message);
    throw (
      error.response?.data || { message: "An error occurred during signup" }
    );
  }
};

// Signin
export const signin = async (userData) => {
  try {
    const response = await API.post("/signin", userData);

    return response;
  } catch (error) {
    console.error("Signin error:", error.response?.data || error.message);
    throw (
      error.response?.data || { message: "An error occurred during signin" }
    );
  }
};

// Fetch User (Verifies token)
export const fetchUser = async () => {
  let token = Cookies.get("allyforge-token");

  // If token is missing in cookies, try getting it from localStorage
  if (!token) {
    token = localStorage.getItem("allyforge-token");
  }

  if (!token) return null;

  try {
    const res = await API.get("/user", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    console.error("Fetch user error:", error.response?.data || error.message);
    return null;
  }
};

export const logout = () => {
  Cookies.remove("allyforge-token");
  localStorage.removeItem("allyforge-token");
};
