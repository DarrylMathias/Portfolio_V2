// components/ui/AnimatedInView.jsx
"use client";
import { motion } from "framer-motion";

export default function OptimizedMotion({ children, ...rest }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.5 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
