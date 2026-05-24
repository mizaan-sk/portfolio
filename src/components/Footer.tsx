"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { personal } from "@/data/portfolio";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative py-10 px-4 sm:px-6 border-t border-border/60 mt-10"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-muted">
        <p>
          &copy; {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>
      
      </div>
    </motion.footer>
  );
}
