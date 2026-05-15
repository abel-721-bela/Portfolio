'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, MapPin } from 'lucide-react';

interface LocationPreviewProps {
  name: string;
  mapUrl: string;
  isVisible: boolean;
}

const LocationPreview: React.FC<LocationPreviewProps> = ({ name, mapUrl, isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          className="location-preview-card"
        >
          <div className="preview-content">
            <div className="preview-header">
              <MapPin size={14} className="pin-icon" />
              <span className="location-name">{name}</span>
            </div>
            <div className="preview-body">
              <div className="map-placeholder">
                {/* Abstract map representation or static image if available */}
                <div className="map-dots" />
              </div>
            </div>
            <a 
              href={mapUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="view-on-maps"
            >
              View on Google Maps <ExternalLink size={12} />
            </a>
          </div>

          <style jsx>{`
            .location-preview-card {
              position: absolute;
              bottom: 120%;
              left: 50%;
              transform: translateX(-50%);
              width: 240px;
              background: rgba(20, 20, 20, 0.8);
              backdrop-filter: blur(20px);
              border: 1px solid rgba(255, 255, 255, 0.1);
              border-radius: 12px;
              padding: 12px;
              z-index: 100;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
            }

            .preview-content {
              display: flex;
              flex-direction: column;
              gap: 8px;
            }

            .preview-header {
              display: flex;
              align-items: center;
              gap: 6px;
              color: rgba(255, 255, 255, 0.9);
              font-size: 0.85rem;
              font-weight: 500;
            }

            .pin-icon {
              color: var(--accent-color, #fff);
            }

            .location-name {
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }

            .preview-body {
              height: 100px;
              background: rgba(255, 255, 255, 0.05);
              border-radius: 6px;
              overflow: hidden;
              position: relative;
            }

            .map-placeholder {
              width: 100%;
              height: 100%;
              background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 70%);
            }

            .map-dots {
              position: absolute;
              inset: 0;
              background-image: radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px);
              background-size: 10px 10px;
            }

            .view-on-maps {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 6px;
              font-size: 0.75rem;
              color: rgba(255, 255, 255, 0.5);
              text-decoration: none;
              padding: 6px;
              border-radius: 4px;
              transition: all 0.2s ease;
            }

            .view-on-maps:hover {
              color: #fff;
              background: rgba(255, 255, 255, 0.1);
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LocationPreview;
