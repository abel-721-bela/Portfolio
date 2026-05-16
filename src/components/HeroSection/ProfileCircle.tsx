'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const profileImages = [
  { src: '/assets/1.jpg', color: 'rgba(107, 114, 128, 0.5)' }, // Gray-ish
  { src: '/assets/2.webp', color: 'rgba(234, 179, 8, 0.5)' }, // Warm/Yellow
  { src: '/assets/3.png', color: 'rgba(16, 185, 129, 0.5)' }, // Green-ish
  { src: '/assets/4.webp', color: 'rgba(249, 115, 22, 0.5)' }, // Orange-ish
];

const ProfileCircle = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % profileImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = profileImages[index];

  return (
    <div className="profile-circle-wrapper">
      {/* Cinematic Depth Layers */}
      <div className="depth-layers">
        <motion.div
          className="ambient-halo"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ backgroundColor: current.color }}
        />
        <div className="light-texture" />
        <div className="particles-overlay">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              animate={{
                y: [-20, -100],
                x: Math.random() * 40 - 20,
                opacity: [0, 0.3, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        className="profile-motion-container"
        animate={{
          y: [0, -10, 0],
          rotateX: [0, 2, 0],
          rotateY: [0, 2, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <motion.div
          className="glow-border"
          animate={{
            boxShadow: `0 0 60px 5px ${current.color}`,
            borderColor: current.color
          }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />

        <div className="circle-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.src}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
              className="image-wrapper"
            >
              <Image
                src={current.src}
                alt="Abel Biju George"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </motion.div>
          </AnimatePresence>
          <div className="glass-overlay" />
        </div>
      </motion.div>

      {/* Ambient Rotating Gradient */}
      <motion.div
        className="ambient-gradient"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default ProfileCircle;
