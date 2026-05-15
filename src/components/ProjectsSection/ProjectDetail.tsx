'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from './projectsData';
import ImageLightbox from '../ImageLightbox/ImageLightbox';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`/api/projects/${project.id}`);
        const data = await response.json();
        if (data.images) {
          setGalleryImages(data.images);
        }
      } catch (error) {
        console.error('Failed to fetch project gallery:', error);
      }
    };

    fetchImages();
  }, [project.id]);

  return (
    <motion.div 
      className="detailOverlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onClick={onClose}
    >
      <motion.div 
        className="detailWindow"
        initial={{ y: 100, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 100, opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="closeDetailBtn" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="detailScrollContainer">
          <div className="detailHero">
            <img 
              src={`/assets/projects/${project.assetFolder}/title.jpg`} 
              alt={project.title} 
              className="detailHeroImage"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop';
              }}
            />
            <div className="detailHeroOverlay">
              <span className="detailCategory">{project.category}</span>
              <h2 className="detailTitle">{project.title}</h2>
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="githubBtn"
                  style={{ width: 'auto', padding: '0 1.5rem', borderRadius: '100px', display: 'inline-flex', gap: '0.75rem' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span>View Repository</span>
                </a>
              )}
            </div>
          </div>

          <div className="detailGrid">
            <div className="storySection">
              <h3>The Story</h3>
              <p className="storyText">{project.description}</p>

              {galleryImages.length > 0 && (
                <>
                  <h3>Gallery</h3>
                  <div className="projectGalleryGrid">
                    {galleryImages.map((img, idx) => (
                      <motion.div 
                        key={idx} 
                        className="galleryItem"
                        whileHover={{ scale: 1.05 }}
                        onClick={() => openLightbox(idx)}
                        style={{ cursor: 'pointer' }}
                      >
                        <img src={img} alt={`${project.title} gallery ${idx}`} />
                      </motion.div>
                    ))}
                  </div>
                </>
              )}

              <h3>Major Features</h3>
              <div className="featureList">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="featureItem">
                    <h5>{feature}</h5>
                  </div>
                ))}
              </div>
            </div>

            <div className="infoSection">
              <div className="infoGroup">
                <h4>Role</h4>
                <p>{project.role}</p>
              </div>

              <div className="infoGroup">
                <h4>Technology Stack</h4>
                <ul>
                  {project.techStack.map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))}
                </ul>
              </div>

              <div className="infoGroup">
                <h4>Key Lessons</h4>
                <ul>
                  {project.lessons.map((lesson, idx) => (
                    <li key={idx}>{lesson}</li>
                  ))}
                </ul>
              </div>

              <div className="infoGroup">
                <h4>Mood & Aesthetic</h4>
                <p>{project.mood.join(', ')}</p>
              </div>
            </div>
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
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetail;
