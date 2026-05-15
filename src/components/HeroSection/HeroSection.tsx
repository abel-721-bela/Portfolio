'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ProfileCircle from './ProfileCircle';
import SocialIcons from './SocialIcons';
import ParallaxLayer from '../UI/ParallaxLayer';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        {/* Left Side: Profile */}
        <div className="hero-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <ProfileCircle />
          </motion.div>
          <SocialIcons />
        </div>

        {/* Right Side: About Content */}
        <div className="hero-right">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="about-content"
          >
            <motion.span 
              className="label"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.8 }}
            >
              PRODUCT-MINDED ENGINEER
            </motion.span>
            
            <h1 className="name-heading">
              {"Abel Biju George".split(" ").map((word, wordIndex) => (
                <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                  {word.split("").map((char, charIndex) => {
                    const globalIndex = "Abel Biju George".split(" ")
                      .slice(0, wordIndex)
                      .reduce((acc, w) => acc + w.length + 1, 0) + charIndex;
                    return (
                      <motion.span
                        key={charIndex}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          delay: 1 + globalIndex * 0.03, 
                          duration: 0.6, 
                          ease: [0.22, 1, 0.36, 1] 
                        }}
                        style={{ display: 'inline-block' }}
                      >
                        {char}
                      </motion.span>
                    );
                  })}
                  {wordIndex < 2 && <span>&nbsp;</span>}
                </span>
              ))}
            </h1>

            <motion.p 
              className="tagline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              Building meaningful digital experiences through technology, leadership, and storytelling.
            </motion.p>

            <motion.div 
              className="description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 1.4, duration: 1 }}
            >
              <p className="signature-line">
                Engineering at the intersection of storytelling and technical excellence.
              </p>
              <p>
                As a final-year engineer and AI & product enthusiast, I thrive at the intersection of design, technology, and communication.
              </p>
            </motion.div>

            <motion.div 
              className="currently-status"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.8 }}
            >
              <span className="status-dot" />
              <span className="status-text">
                Currently: Building <span className="highlight">SolveStack</span> • Marketing Lead @ <span className="highlight">TEDxAJCE 2026</span>
              </span>
            </motion.div>

            <motion.div 
              className="cta-scroll"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 2.2, duration: 1 }}
            >
              <div className="scroll-indicator" />
              <span>SCROLL TO EXPLORE</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Atmosphere with Parallax */}
      <div className="hero-atmosphere">
        <ParallaxLayer speed={0.05} direction="up" className="parallax-light-wrapper">
          <div className="ambient-light light-1" />
        </ParallaxLayer>
        <ParallaxLayer speed={0.03} direction="up" className="parallax-light-wrapper">
          <div className="ambient-light light-2" />
        </ParallaxLayer>
      </div>
    </section>
  );
};

export default HeroSection;
