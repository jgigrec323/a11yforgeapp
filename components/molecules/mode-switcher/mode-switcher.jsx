"use client";

import { useEffect } from "react";
import { useGlobal } from "@/context/global-context";

const ModeSwitcher = () => {
  const { mode, setMode } = useGlobal();

  // Sync initial theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const isDark = savedTheme === "dark" || (!savedTheme && prefersDark);

    setMode(isDark ? "dark" : "light");

    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [setMode]);

  // Toggle theme
  const toggleDarkMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("theme", newMode);

    if (newMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      title="mode switcher"
      onClick={toggleDarkMode}
      className={`mode-switcher ${mode === "dark" ? "dark" : ""}`}
    >
      <div
        className={`toggle-circle ${mode === "dark" ? "dark active" : ""}`}
      ></div>
    </button>
  );
};

export default ModeSwitcher;
