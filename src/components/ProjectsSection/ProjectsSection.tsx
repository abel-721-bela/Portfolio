'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, Project } from './projectsData';
import ProjectCard from './ProjectCard';
import ProjectDetail from './ProjectDetail';
import './ProjectsSection.css';

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);

  // Sort projects by category
  const sortedProjects = [...projects].sort((a, b) => {
    const order = { featured: 0, secondary: 1, technical: 2 };
    return order[a.category] - order[b.category];
  });

  // Duplicate projects for seamless infinite scroll
  const displayProjects = [...sortedProjects, ...sortedProjects];

  useEffect(() => {
    const animate = () => {
      if (scrollRef.current && !isPaused) {
        const container = scrollRef.current;
        const scrollWidth = container.scrollWidth;
        const halfWidth = scrollWidth / 2;

        // Increment scroll position
        container.scrollLeft += 1.2; // Slightly faster for visibility

        // If we've scrolled past half (one full set), reset to start
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft = 0;
        }
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isPaused]); // Restart when pause state changes

  return (
    <section 
      className="projectsContainer" 
      id="projects"
    >
      {/* Cinematic Intro */}
      <div className="sectionIntro">
        <motion.h2 
          className="editorialHeading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Projects
        </motion.h2>
      </div>

      {/* Horizontal Scroll Showcase */}
      <div 
        className="horizontalScrollWrapper"
        ref={scrollRef}
        style={{ scrollBehavior: 'auto' }} // Ensure smooth scroll is disabled for the JS loop
      >
        <div className="horizontalScrollContent">
          {displayProjects.map((project, index) => (
            <div 
              key={`${project.id}-${index}`}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <ProjectCard 
                project={project} 
                onViewDetails={setSelectedProject}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Floating Detail Window */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
