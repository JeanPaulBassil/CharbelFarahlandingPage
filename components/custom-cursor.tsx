"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  // Track mouse position
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    // Track hover events on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    
    const mouseEnter = () => setCursorVariant("hover");
    const mouseLeave = () => setCursorVariant("default");

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", mouseEnter);
      el.addEventListener("mouseleave", mouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", mouseEnter);
        el.removeEventListener("mouseleave", mouseLeave);
      });
    };
  }, []);

  // Cursor variants for different states
  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      height: 16,
      width: 16,
      backgroundColor: "rgba(220, 38, 38, 0.5)",
      mixBlendMode: "exclusion" as "exclusion",
    },
    hover: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(220, 38, 38, 0.8)",
      mixBlendMode: "exclusion" as "exclusion",
    },
  };

  // Only show custom cursor on non-touch devices
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  
  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
  }, []);
  
  if (isTouchDevice) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    />
  );
}; 