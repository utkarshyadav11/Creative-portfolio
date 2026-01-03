"use client";

import { Avatar } from "@once-ui-system/core";
import { motion } from "framer-motion";

interface AvatarGlowProps {
  src: string;
  size?: "xs" | "s" | "m" | "l" | "xl";
}

export default function AvatarGlow({ src, size = "xl" }: AvatarGlowProps) {
  return (
    <motion.div
      style={{
        borderRadius: "50%",
        boxShadow: "0 0 40px rgba(var(--brand-strong), 0.3)",
        border: "2px solid rgba(var(--brand-strong), 0.5)",
        padding: "4px",
        display: "inline-block", // Ensure it wraps correctly
      }}
    >
      <Avatar src={src} size={size} />
    </motion.div>
  );
}
