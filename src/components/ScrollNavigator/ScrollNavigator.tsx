'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ScrollNavigator.css';

const ScrollNavigator: React.FC = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button only after scrolling down a bit
      setIsVisible(window.scrollY > 200);

      // Check if at bottom
      const totalHeight = document.documentElement.scrollHeight;
      const currentPos = window.scrollY + window.innerHeight;
      setIsAtBottom(currentPos >= totalHeight - 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAction = () => {
    if (isAtBottom) {
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Scroll to next section
      const sections = ['hero', 'journey', 'projects', 'how-i-work', 'closing'];
      const currentScroll = window.scrollY + 100; // Add offset to avoid finding current section

      for (const id of sections) {
        const element = document.getElementById(id);
        if (element && element.offsetTop > currentScroll) {
          element.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      
      // If no next section found (maybe already at projects), scroll to bottom
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="scrollNavigator"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleAction}
          aria-label={isAtBottom ? "Scroll to Top" : "Scroll to Next Section"}
        >
          <motion.div
            animate={{ rotate: isAtBottom ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="arrowIcon"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 13l5 5 5-5M12 18V6" />
            </svg>
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollNavigator;
