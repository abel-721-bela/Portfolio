'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';
import ThemeToggle from '../UI/ThemeToggle';
import ResumeViewer from '../ResumeViewer/ResumeViewer';
import './Navbar.css';

const navItems = [
  { label: 'Home', sectionId: 'hero' },
  { label: 'Journey', sectionId: 'journey' },
  { label: 'Projects', sectionId: 'projects' },
  { label: 'How I Work', sectionId: 'how-i-work' },
  { label: 'Contact', sectionId: 'closing' },
];

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isHidden, setIsHidden] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // ─── Scroll direction detection (auto-hide/show) ───
  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const delta = currentY - lastScrollY.current;

        // Only hide after scrolling past the hero
        if (currentY > 200) {
          if (delta > 8) {
            setIsHidden(true);
            setMobileMenuOpen(false);
          } else if (delta < -5) {
            setIsHidden(false);
          }
        } else {
          setIsHidden(false);
        }

        lastScrollY.current = currentY;
        ticking.current = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ─── Active section detection via IntersectionObserver ───
  useEffect(() => {
    const sectionIds = navItems.map(item => item.sectionId);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  // ─── Smooth scroll to section ───
  const scrollToSection = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  }, []);

  return (
    <>
      <div className="navbar-wrapper">
        <nav className={`navbar ${isHidden ? 'hidden' : ''}`}>
          {/* Left: Name */}
          <span
            className="navbar-name"
            onClick={() => scrollToSection('hero')}
          >
            Abel Biju George
          </span>

          {/* Center: Nav Links (desktop) */}
          <ul className="navbar-links">
            {navItems.map(item => (
              <li key={item.sectionId}>
                <button
                  className={`navbar-link ${activeSection === item.sectionId ? 'active' : ''}`}
                  onClick={() => scrollToSection(item.sectionId)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right: Actions */}
          <div className="navbar-actions">
            <button
              className="navbar-resume-btn"
              onClick={() => setShowResume(true)}
            >
              <FileText size={14} />
              <span>Resume</span>
            </button>
            <div className="navbar-theme-toggle">
              <ThemeToggle />
            </div>
            <button
              className="navbar-hamburger"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="navbar-mobile-menu"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            >
              {navItems.map(item => (
                <button
                  key={item.sectionId}
                  className={`navbar-mobile-link ${activeSection === item.sectionId ? 'active' : ''}`}
                  onClick={() => scrollToSection(item.sectionId)}
                >
                  {item.label}
                </button>
              ))}

            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Resume Viewer Modal */}
      <AnimatePresence>
        {showResume && (
          <ResumeViewer onClose={() => setShowResume(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
