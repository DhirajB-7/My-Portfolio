"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    const preferredTheme =
      savedTheme ||
      (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");

    document.documentElement.setAttribute("data-theme", preferredTheme);
    setTheme(preferredTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem(STORAGE_KEY, nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Toggle color theme"
      title="Toggle theme"
    >
      <span>{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}
