"use client";

import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";
import * as React from "react";
import { useEffect, useState } from "react";

export default function BackgroundGradient() {
  const [theme, setTheme] = useState("dark"); // Default to dark

  useEffect(() => {
    // Function to check theme
    const checkTheme = () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      if (currentTheme) {
        setTheme(currentTheme);
      }
    };

    // Check initially
    checkTheme();

    // Watch for changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  // Configuration for Dark Mode (Deep, subtle space-like)
  const darkConfig = {
    color1: "#050505",
    color2: "#0a0a0a",
    color3: "#141414",
    bgColor1: "#000000",
    bgColor2: "#000000",
    brightness: 0.7,
  };

  // Configuration for Light Mode (Clean, subtle paper-like)
  const lightConfig = {
    color1: "#ffffff",
    color2: "#f4f4f5", // zinc-100
    color3: "#e4e4e7", // zinc-200
    bgColor1: "#ffffff",
    bgColor2: "#ffffff",
    brightness: 1.2,
  };

  const currentConfig = theme === "dark" ? darkConfig : lightConfig;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
        opacity: theme === "dark" ? 0.4 : 0.2, // Very subtle in light mode
        transition: "opacity 1s ease",
      }}
    >
      <ShaderGradientCanvas pixelDensity={1} fov={45}>
        <ShaderGradient
          control="query"
          urlString={`https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=${encodeURIComponent(
            currentConfig.bgColor1
          )}&bgColor2=${encodeURIComponent(
            currentConfig.bgColor2
          )}&brightness=${
            currentConfig.brightness
          }&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=${encodeURIComponent(
            currentConfig.color1
          )}&color2=${encodeURIComponent(currentConfig.color2)}&color3=${encodeURIComponent(
            currentConfig.color3
          )}&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=-1.4&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.1&uFrequency=5.5&uSpeed=0.05&uStrength=2.4&uTime=0&wireframe=false`}
        />
      </ShaderGradientCanvas>
    </div>
  );
}
