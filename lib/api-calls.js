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

    // Store token in cookies
    if (response.data?.token) {
      Cookies.set("token", response.data.token, { expires: 7 }); // Expires in 7 days
    }

    return response.json();
  } catch (error) {
    console.error("Signin error:", error.response?.data || error.message);
    throw (
      error.response?.data || { message: "An error occurred during signin" }
    );
  }
};

// Fetch User (Verifies token)
export const fetchUser = async () => {
  const token = Cookies.get("token");
  if (!token) return null;

  try {
    const res = await API.get("/auth/protected", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data.user;
  } catch (error) {
    console.error("Fetch user error:", error.response?.data || error.message);
    return null;
  }
};

// Logout (Clears token)
export const logout = () => {
  Cookies.remove("token");
};
