'use client';
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, duration);
    return () => clearInterval(timer);
  }, [words, duration]);

  const currentWord = words[index];

  return (
    <div 
      className="perspective-1000" 
      style={{ 
        position: 'relative',
        display: 'inline-flex',
        height: '1.2em', 
        width: '280px', // Extra wide to ensure no clipping or overlap
        verticalAlign: 'middle',
        marginLeft: '0.4rem',
      }}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={currentWord}
          initial={{ rotateX: 90, opacity: 0, y: 20 }}
          animate={{ rotateX: 0, opacity: 1, y: 0 }}
          exit={{ rotateX: -90, opacity: 0, y: -20 }}
          transition={{
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1],
          }}
          className={`origin-center ${className}`}
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            transformStyle: 'preserve-3d', 
            backfaceVisibility: 'hidden',
            whiteSpace: 'nowrap',
          }}
        >
          {currentWord}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
