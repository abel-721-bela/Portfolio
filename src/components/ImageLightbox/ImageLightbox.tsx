'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import './ImageLightbox.css';

interface ImageLightboxProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

const AUTO_ADVANCE_MS = 6000;

const ImageLightbox: React.FC<ImageLightboxProps> = ({ images, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [mounted, setMounted] = useState(false);
  const [direction, setDirection] = useState(0); // -1 = left, 1 = right
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const totalImages = images.length;
  const hasMultiple = totalImages > 1;

  // Reset auto-advance timer
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    // Reset progress bar animation
    if (progressRef.current) {
      progressRef.current.style.transition = 'none';
      progressRef.current.style.width = '0%';
      // Force reflow
      void progressRef.current.offsetHeight;
      progressRef.current.style.transition = `width ${AUTO_ADVANCE_MS}ms linear`;
      progressRef.current.style.width = '100%';
    }
    if (hasMultiple) {
      timerRef.current = setTimeout(() => {
        setDirection(1);
        setCurrentIndex(prev => (prev + 1) % totalImages);
      }, AUTO_ADVANCE_MS);
    }
  }, [hasMultiple, totalImages]);

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex(prev => (prev + 1) % totalImages);
    resetTimer();
  }, [totalImages, resetTimer]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex(prev => (prev - 1 + totalImages) % totalImages);
    resetTimer();
  }, [totalImages, resetTimer]);

  // Keyboard controls
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && hasMultiple) goNext();
      if (e.key === 'ArrowLeft' && hasMultiple) goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, hasMultiple, goNext, goPrev]);

  // Mount + body scroll lock + start auto-advance
  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = 'hidden';
    resetTimer();

    return () => {
      document.body.style.overflow = '';
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [resetTimer]);

  // Reset timer when currentIndex changes (from auto-advance)
  useEffect(() => {
    resetTimer();
  }, [currentIndex, resetTimer]);

  if (!mounted) return null;

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return createPortal(
    <>
      {/* Backdrop */}
      <motion.div
        className="lightbox-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
      />

      {/* Close */}
      <motion.button
        className="lightbox-close"
        onClick={onClose}
        aria-label="Close lightbox"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ delay: 0.1 }}
      >
        <X size={18} />
      </motion.button>

      {/* Image Container */}
      <div className="lightbox-container">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            className="lightbox-image-wrapper"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.35,
              ease: [0.23, 1, 0.32, 1],
            }}
            style={{ 
              position: 'relative', 
              width: '90vw', 
              height: '80vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Image
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1} of ${totalImages}`}
              fill
              sizes="100vw"
              quality={90}
              priority={currentIndex === initialIndex}
              className="lightbox-image"
              style={{ objectFit: 'contain' }}
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      {hasMultiple && (
        <>
          <motion.button
            className="lightbox-arrow left"
            onClick={goPrev}
            aria-label="Previous image"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ delay: 0.15 }}
          >
            <ChevronLeft size={22} />
          </motion.button>
          <motion.button
            className="lightbox-arrow right"
            onClick={goNext}
            aria-label="Next image"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ delay: 0.15 }}
          >
            <ChevronRight size={22} />
          </motion.button>
        </>
      )}

      {/* Counter */}
      {hasMultiple && (
        <motion.div
          className="lightbox-counter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.2 }}
        >
          <span className="lightbox-counter-text">
            {currentIndex + 1} / {totalImages}
          </span>
        </motion.div>
      )}

      {/* Auto-advance progress bar */}
      {hasMultiple && (
        <div
          ref={progressRef}
          className="lightbox-progress"
        />
      )}
    </>,
    document.body
  );
};

export default ImageLightbox;
