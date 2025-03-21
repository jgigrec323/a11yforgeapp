"use client";
import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [selectedGuide, setSelectedGuide] = useState("lena");

  useEffect(() => {
    let savedToken =
      Cookies.get("allyforge-token") || localStorage.getItem("allyforge-token");

    if (savedToken) {
      setToken(savedToken);
      console.log("Token loaded from storage:", savedToken);
    }
  }, []);

  const updateUser = (userData, authToken = token) => {
    setUser(userData);

    // Only update the token if it's provided and not undefined/null
    if (authToken) {
      setToken(authToken);
      Cookies.set("allyforge-token", authToken, {
        expires: 7,
        secure: true,
        sameSite: "Strict",
        path: "/",
      });
      localStorage.setItem("allyforge-token", authToken);
    }
  };

  const updateSelectedGuide = (guideId) => {
    setSelectedGuide(guideId);
  };

  return (
    <GlobalContext.Provider
      value={{ user, token, selectedGuide, updateUser, updateSelectedGuide }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);
