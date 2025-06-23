"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("");
  const [mounted, setMounted] = useState(false);

  // Only run on client side
  useEffect(() => {
    setMounted(true);
    // On mount, check localStorage or system preference
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else if (stored === "light") {
      setTheme("light");
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      setTheme("light");
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);

    // Update document class
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(next);
  };

  // Don't render the toggle until after hydration to avoid SSR mismatch
  if (!mounted) return null;

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={toggleTheme}
      className="relative flex items-center w-20 h-9 rounded-full px-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-500 dark:focus:ring-accent-400 overflow-hidden bg-gradient-to-r from-blue-100 to-sky-200 dark:from-blue-900 dark:to-indigo-800 border border-transparent dark:border-gray-600 shadow-md hover:shadow-lg"
    >
      <div className="absolute inset-0 w-full h-full">
        {theme === "dark" ? (
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-800 to-blue-900 opacity-100 transition-opacity duration-300"></div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-r from-sky-200 to-blue-100 opacity-100 transition-opacity duration-300"></div>
        )}
      </div>
      <span
        className={`absolute top-1 left-1 w-7 h-7 rounded-full shadow-lg transition-transform duration-300 z-20 flex items-center justify-center ${
          theme === "dark"
            ? "translate-x-10 bg-indigo-700 border border-indigo-400"
            : "translate-x-0 bg-white border border-yellow-200"
        }`}
      >
        {theme === "dark" ? (
          <MoonIcon className="w-4 h-4 text-yellow-300" />
        ) : (
          <SunIcon className="w-4 h-4 text-yellow-500" />
        )}
      </span>
      <SunIcon className="w-5 h-5 text-yellow-500 z-10 absolute left-2 opacity-50" />
      <MoonIcon className="w-5 h-5 text-indigo-200 z-10 absolute right-2 opacity-50" />
    </button>
  );
}
