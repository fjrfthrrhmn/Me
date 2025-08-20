'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

export const DotGrid = () => {
  const { theme } = useTheme();
  const [activeTheme, setActiveTheme] = useState(theme);

  useEffect(() => {
    // delay update to allow fade-out of old theme
    const timeout = setTimeout(() => setActiveTheme(theme), 100);
    return () => clearTimeout(timeout);
  }, [theme]);

  const isDark = activeTheme === 'dark';

  const lightGrid =
    'linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)';
  const darkGrid =
    'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)';

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTheme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute inset-0 -z-10"
          style={{
            backgroundSize: '25px 25px',
            backgroundImage: isDark ? darkGrid : lightGrid,
          }}
        />
      </AnimatePresence>

      {/* Vignette Mask */}
      <div
        className="pointer-events-none absolute inset-0 bg-background z-[-1]"
        style={{
          maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.2) 5%, black 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.2) 5%, black 100%)',
        }}
      />
    </>
  );
};
