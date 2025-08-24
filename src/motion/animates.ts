import { Variants } from "motion/react";

export const animates: Record<string, Variants> = {
  // Fade + slide up
  fadeUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  },

  // Fade + slide down
  fadeDown: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
  },

  // Fade + from left
  fadeLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
  },

  // Fade + from right
  fadeRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
  },

  // Simple fade
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },

  // Scale in (pop effect)
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  },

  // Rotate in (subtle spin)
  rotateIn: {
    initial: { opacity: 0, rotate: -10 },
    animate: { opacity: 1, rotate: 0 },
  },

  blurDown: {
    initial: { opacity: 0, y: 20, filter: 'blur(12px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  },
};
