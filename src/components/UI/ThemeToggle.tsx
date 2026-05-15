'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Snowflake, Flame } from 'lucide-react';

const ThemeToggle = () => {
  const [isWarm, setIsWarm] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const existing = root.getAttribute('data-theme');
    if (existing === 'warm') {
      setIsWarm(true);
    }
    // Default: no data-theme attribute = cool (root defaults)
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isWarm) {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', 'warm');
    }
    setIsWarm(!isWarm);
  };

  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isWarm ? 'Switch to cool mode' : 'Switch to warm mode'}
    >
      <div className={`toggle-track ${isWarm ? 'warm' : 'cool'}`}>
        <motion.div 
          className="toggle-thumb"
          animate={{ x: isWarm ? 24 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          {isWarm ? <Flame size={12} fill="currentColor" /> : <Snowflake size={12} />}
        </motion.div>
      </div>
    </motion.button>
  );
};

export default ThemeToggle;
