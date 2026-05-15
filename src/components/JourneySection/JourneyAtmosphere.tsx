'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Milestone } from './journeyData';
import type { JourneyMode } from './JourneySection';

interface JourneyAtmosphereProps {
  activeMilestone: Milestone | null;
  journeyMode: JourneyMode;
}

const JourneyAtmosphere: React.FC<JourneyAtmosphereProps> = ({ activeMilestone, journeyMode }) => {
  const isFull = journeyMode === 'full';

  return (
    <div className="journey-atmosphere">
      {/* Cinematic Grain Overlay */}
      <div
        className="cinematic-grain"
        style={{ opacity: isFull ? 0.07 : 0.04 }}
      />

      {/* Atmospheric Gradients */}
      <div className="atmosphere-gradient top" />
      <div className="atmosphere-gradient bottom" />

      {/* Warm overlay for full journey mode */}
      <div
        className="atmosphere-warm-overlay"
        style={{ opacity: isFull ? 1 : 0 }}
      />

      {/* Interactive India Map Visualization — only in full mode */}
      <div
        className="map-container"
        style={{ opacity: isFull ? 0.5 : 0 }}
      >
        <svg
          viewBox="0 0 100 100"
          className="india-map-svg"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Abstract stylized India shape */}
          <motion.path
            d="M30 20 L45 10 L60 15 L75 10 L85 25 L80 40 L70 55 L60 75 L50 90 L40 75 L30 60 L20 45 L15 30 Z"
            stroke={isFull ? "rgba(255, 220, 180, 0.1)" : "rgba(255, 255, 255, 0.1)"}
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Current Path Connection */}
          <AnimatePresence>
            {activeMilestone && (
              <motion.circle
                key={activeMilestone.id}
                cx={activeMilestone.coordinates.x}
                cy={activeMilestone.coordinates.y}
                r="1.5"
                fill={
                  activeMilestone.type === 'personal'
                    ? 'rgba(255, 200, 140, 0.9)'
                    : 'var(--accent-color, #fff)'
                }
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: [0.3, 0.8, 0.3] }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{
                  scale: { duration: 0.5 },
                  opacity: { duration: 2, repeat: Infinity }
                }}
              />
            )}
          </AnimatePresence>

          {/* Ambient Glow for Active City */}
          <AnimatePresence>
            {activeMilestone && (
              <motion.circle
                key={`${activeMilestone.id}-glow`}
                cx={activeMilestone.coordinates.x}
                cy={activeMilestone.coordinates.y}
                r="8"
                fill="radial-gradient(circle, var(--accent-color, rgba(255,255,255,0.2)) 0%, transparent 70%)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.4 }}
                exit={{ scale: 0, opacity: 0 }}
                className="map-glow"
              />
            )}
          </AnimatePresence>
        </svg>
      </div>

      <style jsx>{`
        .journey-atmosphere {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          z-index: -1;
          background: var(--surface-primary);
          overflow: hidden;
          transition: background 0.6s ease;
        }

        .cinematic-grain {
          position: absolute;
          inset: 0;
          background-image: url('https://grainy-gradients.vercel.app/noise.svg');
          pointer-events: none;
          transition: opacity 1.5s ease;
        }

        .atmosphere-gradient {
          position: absolute;
          width: 100%;
          height: 50vh;
          pointer-events: none;
        }

        .top {
          top: 0;
          background: linear-gradient(to bottom, var(--surface-primary), transparent);
        }

        .bottom {
          bottom: 0;
          background: linear-gradient(to top, var(--surface-primary), transparent);
        }

        .atmosphere-warm-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse at 50% 40%,
            rgba(255, 180, 100, 0.03) 0%,
            rgba(255, 140, 60, 0.015) 40%,
            transparent 80%
          );
          pointer-events: none;
          transition: opacity 1.5s ease;
        }

        .map-container {
          position: absolute;
          top: 50%;
          right: 10%;
          transform: translateY(-50%);
          width: 40vw;
          height: 40vw;
          transition: opacity 1.5s ease;
        }

        .india-map-svg {
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 0 20px var(--glow-subtle));
        }

        .map-glow {
          filter: blur(10px);
        }
      `}</style>
    </div>
  );
};

export default JourneyAtmosphere;
