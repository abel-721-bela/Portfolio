'use client';

import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { X, Download, ExternalLink } from 'lucide-react';
import './ResumeViewer.css';

const RESUME_PATH = '/assets/Abel_Biju_George_Resume.pdf';

interface ResumeViewerProps {
  onClose: () => void;
}

const ResumeViewer: React.FC<ResumeViewerProps> = ({ onClose }) => {
  // Keyboard: Esc to close
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [handleKey]);

  return createPortal(
    <>
      {/* Backdrop */}
      <motion.div
        className="resume-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
      />

      {/* Container */}
      <div className="resume-container">
        <motion.div
          className="resume-window"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{
            type: 'spring',
            damping: 28,
            stiffness: 260,
            mass: 0.6,
          }}
        >
          {/* Header */}
          <div className="resume-header">
            <span className="resume-header-title">Resume</span>
            <button
              className="resume-close"
              onClick={onClose}
              aria-label="Close resume viewer"
            >
              <X size={14} />
            </button>
          </div>

          {/* PDF Viewer */}
          <div className="resume-pdf-area">
            <iframe
              src={`${RESUME_PATH}#toolbar=0&navpanes=0`}
              title="Resume — Abel Biju George"
            />
          </div>

          {/* Footer Actions */}
          <div className="resume-footer">
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-action-btn"
            >
              <ExternalLink size={13} />
              Open in New Tab
            </a>
            <a
              href={RESUME_PATH}
              download="Abel_Biju_George_Resume.pdf"
              className="resume-action-btn primary"
            >
              <Download size={13} />
              Download
            </a>
          </div>
        </motion.div>
      </div>
    </>,
    document.body
  );
};

export default ResumeViewer;
