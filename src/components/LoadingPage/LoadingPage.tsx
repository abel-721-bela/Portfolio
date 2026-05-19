'use client';

import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, PerspectiveCamera } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import Cube from './Cube';
import './LoadingPage.css';

const LoadingPage = ({ onComplete }: { onComplete: () => void }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMorphing, setIsMorphing] = useState(false);
  const [isThemeDark, setIsThemeDark] = useState(false);

  useEffect(() => {
    // Check initial theme
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsThemeDark(isDark);

    // Listen for theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => setIsThemeDark(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const handleSequenceComplete = () => {
    setIsMorphing(true);
    // Allow time for the morph animation before switching components
    setTimeout(() => {
      setIsLoading(false);
      onComplete();
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className={`loading-container ${isThemeDark ? 'dark' : 'light'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div 
            className="canvas-wrapper"
            animate={isMorphing ? {
              x: window.innerWidth > 1024 ? '-20%' : '0%',
              y: window.innerWidth > 1024 ? '0%' : '-15%',
              scale: 0.8,
              opacity: 0
            } : { x: 0, y: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Canvas shadows dpr={[1, 2]}>
              <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={35} />
              <ambientLight intensity={isThemeDark ? 0.2 : 0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} castShadow />
              <spotLight
                position={[-10, 10, 10]}
                angle={0.15}
                penumbra={1}
                intensity={1}
                castShadow
              />
              
              <Cube onSequenceComplete={handleSequenceComplete} isThemeDark={isThemeDark} />
              
              <Environment preset="city" />
            </Canvas>
          </motion.div>
          

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingPage;
