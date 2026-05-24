"use client";

import { motion } from "framer-motion";

export default function BackgroundFX() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-grid" />
      <motion.div
        className="orb"
        style={{ background: "#f6c177", width: 520, height: 520, top: -120, left: -120 }}
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="orb"
        style={{ background: "#ffb86c", width: 480, height: 480, top: "30%", right: -160 }}
        animate={{ x: [0, -40, 0], y: [0, 60, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="orb"
        style={{ background: "#f59e0b", width: 380, height: 380, bottom: -120, left: "30%" }}
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
