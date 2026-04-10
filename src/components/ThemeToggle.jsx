import { useEffect } from "react";

export const ThemeToggle = () => {
  useEffect(() => {
    // Force dark mode on page load
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
  }, []);

  return null; // No button needed, always dark
};
