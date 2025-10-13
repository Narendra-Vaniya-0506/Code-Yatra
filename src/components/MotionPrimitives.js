import React from "react";
import { motion } from "framer-motion";

export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

// Subtle parallax-on-hover utility for images/cards
export const parallaxHover = {
  rest: { scale: 1, rotateX: 0, rotateY: 0 },
  hover: { scale: 1.02 },
};

export const floatTransition = {
  y: { duration: 5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
  x: { duration: 7, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
};

export function MotionSection({ children, className, style }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
      className={className}
      style={style}
    >
      {children}
    </motion.section>
  );
}

export function MotionText({ as: Tag = "div", children, variants = fadeInUp, style }) {
  return (
    <motion.div variants={variants} style={style}>
      <Tag>{children}</Tag>
    </motion.div>
  );
}

export function FloatingBlob({ color = "#ff7e5f", size = 260, style, opacity = 0.25, x = 0, y = 0, duration = 12 }) {
  return (
    <motion.div
      aria-hidden
      style={{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "50%",
        filter: "blur(40px)",
        background: color,
        opacity,
        ...style,
      }}
      animate={{ x: [x, -x, x], y: [y, -y, y] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export function ScaleCard({ children, style }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={scaleIn}
      whileHover={{ y: -10, scale: 1.03, boxShadow: "0 12px 30px rgba(0,0,0,0.25)" }}
      transition={{ duration: 0.25 }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export function UnderlineLink({ to, children, style, onClick, className }) {
  return (
    <motion.span
      className={className}
      style={{ position: "relative", display: "inline-block", ...style }}
      whileHover={{ color: "#FFD700" }}
    >
      {children}
      <motion.span
        style={{
          position: "absolute",
          left: 0,
          bottom: -2,
          height: 2,
          width: "100%",
          background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
          transformOrigin: "left",
        }}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.span>
  );
}

export const easeOutExpo = [0.16, 1, 0.3, 1];


