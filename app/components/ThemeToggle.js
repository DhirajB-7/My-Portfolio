"use client";

import { useEffect } from "react";

const STORAGE_KEY = "portfolio-theme";

export default function ThemeToggle() {
  useEffect(() => {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    const preferredTheme =
      savedTheme ||
      (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");

    document.documentElement.setAttribute("data-theme", preferredTheme);
  }, []);

  const toggleTheme = () => {
    const currentTheme =
      document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";

    const nextTheme = currentTheme === "dark" ? "light" : "dark";
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
      <span>Theme</span>
    </button>
  );
}
