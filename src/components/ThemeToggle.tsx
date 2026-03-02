"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { ToggleButton, useTheme } from "@once-ui-system/core";

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<string>("dark");

  useEffect(() => {
    setMounted(true);

    // Initial theme check
    const themeAttr = document.documentElement.getAttribute("data-theme") || "dark";
    setCurrentTheme(themeAttr);

    // Sync with attribute changes (e.g. from system or other components)
    const observer = new MutationObserver(() => {
      const themeAttr = document.documentElement.getAttribute("data-theme") || "dark";
      setCurrentTheme(themeAttr);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const handleToggle = () => {
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("data-theme", nextTheme);
    setCurrentTheme(nextTheme);
  };

  if (!mounted) {
    return <ToggleButton prefixIcon="themeMoon" aria-label="Toggle theme" />;
  }

  return (
    <ToggleButton
      prefixIcon={currentTheme === "dark" ? "themeSun" : "themeMoon"}
      onClick={handleToggle}
      aria-label={`Switch to ${currentTheme === "light" ? "dark" : "light"} mode`}
    />
  );
};
