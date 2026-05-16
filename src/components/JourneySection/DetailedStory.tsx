'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Quote, MapPin } from 'lucide-react';
import Image from 'next/image';
import { Milestone } from './journeyData';
import LocationPreview from './LocationPreview';
import ImageLightbox from '../ImageLightbox/ImageLightbox';
import './DetailedStory.css';

interface DetailedStoryProps {
  milestone: Milestone;
  onClose: () => void;
}

const DetailedStory: React.FC<DetailedStoryProps> = ({ milestone, onClose }) => {
  const [mounted, setMounted] = useState(false);
  const [hoveredSchool, setHoveredSchool] = useState<string | null>(null);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const handleEsc = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEsc);

    // Fetch dynamic gallery images
    const fetchImages = async () => {
      try {
        const response = await fetch(`/api/journey/${milestone.assetFolder}`);
        const data = await response.json();
        if (data.images && data.images.length > 0) {
          setGalleryImages(data.images);
        }
      } catch (error) {
        console.error('Failed to fetch journey gallery:', error);
      }
    };

    fetchImages();

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [handleEsc, milestone.assetFolder]);

  if (!mounted) return null;

  const backdropStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(0, 0, 0, 0.55)',
    backdropFilter: 'blur(28px) saturate(180%)',
    WebkitBackdropFilter: 'blur(28px) saturate(180%)',
    zIndex: 999999,
    cursor: 'pointer',
  };

  const windowWrapperStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000000,
    pointerEvents: 'none',
  };

  return createPortal(
    <>
      {/* Full-screen fluid backdrop */}
      <motion.div
        style={backdropStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
      />

      {/* Centering wrapper */}
      <div style={windowWrapperStyle}>
        <motion.div
          className="ds-window"
          style={{ pointerEvents: 'auto' }}
          initial={{ opacity: 0, scale: 0.88, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.88, y: 24 }}
          transition={{
            type: 'spring',
            damping: 30,
            stiffness: 280,
            mass: 0.6,
          }}
        >
          <button className="ds-close" onClick={onClose} aria-label="Close">
            <X size={16} />
          </button>

          <div className="ds-layout">
            {/* Left — Text content */}
            <div className="ds-text">
              <header className="ds-header">
                <div className="ds-badges">
                  <span className="ds-year">{milestone.year}</span>
                  {milestone.month && (
                    <span className="ds-month">{milestone.month}</span>
                  )}
                  <span className="ds-location">
                    <MapPin size={11} /> {milestone.location}
                  </span>
                </div>
                {milestone.roleTag && (
                  <span className={`ds-role-tag ds-role-tag--${milestone.roleTag.toLowerCase().replace(/\s+/g, '-')}`}>
                    {milestone.roleTag}
                  </span>
                )}
                <h2 className="ds-title">{milestone.title}</h2>
                {milestone.organization && (
                  <span className="ds-org">{milestone.organization}</span>
                )}
                {milestone.timeline && (
                  <span className="ds-timeline-range">{milestone.timeline}</span>
                )}
              </header>

              <div className="ds-scroll">
                {milestone.fullStory.map((p, i) => (
                  <p key={i} className="ds-para">{p}</p>
                ))}

                {milestone.contributions && milestone.contributions.length > 0 && (
                  <>
                    <h4 className="ds-label">Key Contributions</h4>
                    <ul className="ds-contribution-list">
                      {milestone.contributions.map((c, idx) => (
                        <li key={idx} className="ds-contribution-item">
                          <ArrowRight size={12} className="ds-contrib-icon" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {milestone.reflection && (
                  <>
                    <h4 className="ds-label">Reflection</h4>
                    <blockquote className="ds-reflection">{milestone.reflection}</blockquote>
                  </>
                )}

                {milestone.schools && (
                  <>
                    <h4 className="ds-label">Academic Foundations</h4>
                    <div className="ds-chips">
                      {milestone.schools.map((school, idx) => (
                        <div
                          key={idx}
                          className="ds-chip"
                          onMouseEnter={() => setHoveredSchool(school.name)}
                          onMouseLeave={() => setHoveredSchool(null)}
                        >
                          {school.name}
                          <LocationPreview
                            name={school.name}
                            mapUrl={school.mapUrl}
                            isVisible={hoveredSchool === school.name}
                          />
                        </div>
                      ))}
                    </div>
                  </>
                )}

                <h4 className="ds-label">Key Reflections</h4>
                <div className="ds-lessons">
                  {milestone.lessons.map((lesson, idx) => (
                    <div key={idx} className="ds-lesson">
                      <ArrowRight size={13} className="ds-lesson-icon" />
                      <span>{lesson}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Dynamic Bento gallery */}
            <div className="ds-gallery">
              <div className="ds-bento">
                {galleryImages.length > 0 ? (
                  <>
                    <div className="ds-cell hero" onClick={() => openLightbox(0)} style={{ cursor: 'pointer', position: 'relative' }}>
                      <Image 
                        src={galleryImages[0]} 
                        alt="" 
                        fill
                        sizes="(max-width: 768px) 100vw, 800px"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    {galleryImages[1] && (
                      <div className="ds-cell" onClick={() => openLightbox(1)} style={{ cursor: 'pointer', position: 'relative' }}>
                        <Image 
                          src={galleryImages[1]} 
                          alt="" 
                          fill
                          sizes="(max-width: 768px) 50vw, 400px"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    )}
                    {galleryImages.length === 1 && (
                      <div className="ds-cell quote-cell">
                        <div>
                          <Quote size={18} className="ds-quote-icon" />
                          <p className="ds-quote-text">Growth is the art of becoming.</p>
                        </div>
                      </div>
                    )}
                    {galleryImages.length > 2 && (
                       <div className="ds-cell small-grid">
                          {galleryImages.slice(2, 6).map((img, idx) => (
                        <div key={idx} className="mini-img-wrapper" style={{ position: 'relative', height: '100px' }}>
                          <Image 
                            src={img} 
                            alt="" 
                            fill
                            sizes="150px"
                            className="mini-img" 
                            onClick={() => openLightbox(idx + 2)} 
                            style={{ cursor: 'pointer', objectFit: 'cover' }} 
                          />
                        </div>
                          ))}
                       </div>
                    )}
                  </>
                ) : (
                  <>
                    <div className="ds-cell hero">
                      <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000" alt="Placeholder" />
                    </div>
                    <div className="ds-cell quote-cell">
                      <div>
                        <Quote size={18} className="ds-quote-icon" />
                        <p className="ds-quote-text">Growth is the art of becoming.</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Image Lightbox */}
            <AnimatePresence>
              {lightboxOpen && galleryImages.length > 0 && (
                <ImageLightbox
                  images={galleryImages}
                  initialIndex={lightboxIndex}
                  onClose={() => setLightboxOpen(false)}
                />
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </>,
    document.body
  );
};

export default DetailedStory;
