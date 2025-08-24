// motion/transitions.ts
import { Transition } from 'framer-motion';

export const transitions: Record<string, Transition> = {
  // smooth spring motion
  springSmooth: {
    type: 'spring',
    stiffness: 120,
    damping: 20,
  },

  // snappy spring, good for cards / buttons
  springSnappy: {
    type: 'spring',
    stiffness: 300,
    damping: 25,
  },

  // default tween fade/slide
  fade: {
    type: 'tween',
    duration: 0.5,
    ease: 'easeOut',
  },

  // slower, dramatic
  fadeSlow: {
    type: "tween",
    duration: 0.7,
    ease: "easeInOut",
  },
};
