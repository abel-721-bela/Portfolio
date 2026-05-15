'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  capabilities,
  techEcosystem,
  languages,
  highlights,
} from './howIWorkData';
import { Globe, Quote, ChevronDown } from 'lucide-react';
import './HowIWorkSection.css';

// ─── Animation Variants ───

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.23, 1, 0.32, 1] as const },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const staggerChild = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] as const },
  },
};

// ═══════════════════════════════════════════════════
//  MAIN COMPONENT
// ═══════════════════════════════════════════════════

const HowIWorkSection: React.FC = () => {
  const [showAllCapabilities, setShowAllCapabilities] = useState(false);

  const visibleCapabilities = showAllCapabilities ? capabilities : capabilities.slice(0, 3);

  return (
    <section id="how-i-work" className="hiw-section">
      {/* Atmospheric Background */}
      <div className="hiw-atmosphere">
        <div className="hiw-grain" />
        <div className="hiw-gradient-top" />
        <div className="hiw-gradient-bottom" />
      </div>

      <div className="hiw-content">
        {/* ─── Section Header ─── */}
        <header className="hiw-header">
          <motion.h2
            className="hiw-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
            variants={fadeUp}
          >
            How I Work
          </motion.h2>
          <motion.p
            className="hiw-subtitle"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            variants={fadeUp}
          >
            Product thinking, systems, and execution.
          </motion.p>
        </header>

        {/* ─── Primary Identity Card ─── */}
        <motion.div
          className="hiw-identity-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          custom={0.15}
          variants={fadeUp}
        >
          <div className="identity-card-bg" />
          <div className="identity-card-content">
            <span className="identity-name">Abel Biju George</span>
            <h3 className="identity-role">
              Product-Minded Engineer <span className="identity-separator">•</span> Builder <span className="identity-separator">•</span> Creative Technologist
            </h3>
            <p className="identity-statement">
              Building systems that blend innovation, human-centered thinking, and immersive digital experiences.
            </p>
            <p className="identity-sub-statement">
              Focused on transforming real-world observations into meaningful products and experiences.
            </p>
          </div>
        </motion.div>

        {/* ─── Capabilities Grid ─── */}
        <motion.div
          className="hiw-capabilities"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          <AnimatePresence mode="popLayout">
            {visibleCapabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.id}
                  className="capability-card"
                  variants={staggerChild}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.3 } }}
                >
                  <div className="capability-icon-wrapper">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <h4 className="capability-title">{cap.title}</h4>
                  <p className="capability-desc">{cap.description}</p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* ─── Expand / Collapse Button ─── */}
        {capabilities.length > 3 && (
          <motion.div
            className="capabilities-expand-area"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.25}
            variants={fadeUp}
          >
            <motion.button
              className={`capabilities-expand-btn ${showAllCapabilities ? 'expanded' : ''}`}
              onClick={() => setShowAllCapabilities(prev => !prev)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>{showAllCapabilities ? 'Show Less' : `& ${capabilities.length - 3} More`}</span>
              <ChevronDown size={16} className="expand-chevron" />
            </motion.button>
          </motion.div>
        )}

        {/* ─── Bottom Editorial Grid ─── */}
        <div className="hiw-editorial-grid">

          {/* Tech Ecosystem */}
          <motion.div
            className="hiw-tech-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            custom={0.1}
            variants={fadeUp}
          >
            <h3 className="block-heading">Tools & Ecosystems</h3>
            <div className="tech-groups">
              {techEcosystem.map((group) => (
                <div key={group.id} className="tech-group">
                  <span className="tech-group-label">{group.label}</span>
                  <motion.div
                    className="tech-chips"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                  >
                    {group.items.map((item) => (
                      <motion.span
                        key={item}
                        className="tech-chip"
                        variants={staggerChild}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Highlights + Languages */}
          <div className="hiw-right-col">

            {/* Professional Highlights */}
            <motion.div
              className="hiw-highlights-block"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={0.15}
              variants={fadeUp}
            >
              <h3 className="block-heading">Highlights</h3>
              <motion.div
                className="highlights-grid"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {highlights.map((h) => (
                  <motion.div
                    key={h.label}
                    className="highlight-item"
                    variants={staggerChild}
                  >
                    <span className="highlight-detail">{h.detail}</span>
                    <span className="highlight-label">{h.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Languages */}
            <motion.div
              className="hiw-languages-block"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={0.2}
              variants={fadeUp}
            >
              <div className="languages-header">
                <Globe size={16} strokeWidth={1.5} />
                <h3 className="block-heading">Languages</h3>
              </div>
              <div className="languages-list">
                {languages.map((lang) => (
                  <div key={lang.name} className="language-item">
                    <span className="language-name">{lang.name}</span>
                    <span className="language-level">{lang.level}</span>
                  </div>
                ))}
              </div>
              <p className="languages-note">
                Growing up across multiple Indian states shaped strong adaptability and multilingual communication.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ─── Philosophy Block ─── */}
        <motion.div
          className="hiw-philosophy"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          custom={0.1}
          variants={fadeUp}
        >
          <Quote size={28} strokeWidth={1} className="philosophy-quote-icon" />
          <h3 className="philosophy-heading">My Philosophy</h3>
          <p className="philosophy-text">
            I believe meaningful systems begin with meaningful observations.
          </p>
          <p className="philosophy-sub">
            Technology becomes impactful when it genuinely improves human experiences.
            Innovation feels most meaningful when built around real people and real problems.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowIWorkSection;
