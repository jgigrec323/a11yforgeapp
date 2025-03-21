"use client";
import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [selectedGuide, setSelectedGuide] = useState("lena"); // Default guide

  useEffect(() => {
    const savedToken = Cookies.get("allyforge-token");
    if (localStorage.getItem("allyforge-token"))
      if (savedToken) {
        setToken(savedToken);
      }
  }, []);

  const updateUser = (userData, authToken) => {
    setUser(userData);
    setToken(authToken);
    Cookies.set("allyforge-token", authToken, {
      expires: 7,
      secure: true,
      sameSite: "Lax",
      path: "/",
    });
    localStorage.setItem("allyforge-token", token);
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
