'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Project } from './projectsData';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  return (
    <motion.div 
      className={`projectCard ${project.category}`}
      whileHover={{ 
        y: -15,
        scale: 1.02,
        boxShadow: '0 30px 60px rgba(0,0,0,0.4)'
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="cardImageWrapper">
        <img 
          src={`/assets/projects/${project.assetFolder}/title.jpg`} 
          alt={project.title}
          className="cardImage"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop';
          }}
        />
        <div className="cardOverlay" />
      </div>

      <div className="cardContent">
        <h3 className="projectTitle">{project.title}</h3>
        <p className="projectShortDesc">{project.shortDescription}</p>
        
        <div className="cardActions">
          <button 
            className="viewDetailsBtn"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(project);
            }}
          >
            View Details
          </button>
          
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="githubBtn"
              aria-label="GitHub Repository"
              onClick={(e) => e.stopPropagation()}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
