'use client';

import React, { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, LayoutGroup } from 'framer-motion';
import {
  professionalMilestones,
  allMilestonesSorted,
  getYearGroups,
  Milestone,
  MilestoneType,
} from './journeyData';
import JourneyAtmosphere from './JourneyAtmosphere';
import { ChevronRight, ChevronDown, ArrowRight, Layers, Briefcase } from 'lucide-react';
import './JourneySection.css';

export type JourneyMode = 'professional' | 'full';

interface JourneySectionProps {
  onExpandMilestone: (milestone: Milestone) => void;
}

const JourneySection: React.FC<JourneySectionProps> = ({ onExpandMilestone }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [journeyMode, setJourneyMode] = useState<JourneyMode>('professional');
  const [activeMilestone, setActiveMilestone] = useState<Milestone | null>(null);

  const visibleMilestones = useMemo(() => {
    return journeyMode === 'professional'
      ? professionalMilestones
      : allMilestonesSorted;
  }, [journeyMode]);

  const yearGroups = useMemo(() => getYearGroups(visibleMilestones), [visibleMilestones]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Track active milestone based on scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const flatMilestones = yearGroups.flatMap(g => g.milestones);
      const index = Math.min(
        Math.floor(v * flatMilestones.length),
        flatMilestones.length - 1
      );
      setActiveMilestone(flatMilestones[index] ?? null);
    });
    return () => unsubscribe();
  }, [scrollYProgress, yearGroups]);

  const handleToggleMode = useCallback(() => {
    setJourneyMode(prev => prev === 'professional' ? 'full' : 'professional');
  }, []);

  const totalCards = yearGroups.reduce((sum, g) => sum + g.milestones.length, 0);

  return (
    <section
      id="journey"
      ref={containerRef}
      className={`journey-section mode-${journeyMode}`}
      style={{ minHeight: `${Math.max(400, totalCards * 38)}vh` }}
    >
      <JourneyAtmosphere activeMilestone={activeMilestone} journeyMode={journeyMode} />

      <div className="journey-content-wrapper">
        <header className="journey-intro">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="section-subtitle"
          >
            Leadership, learning, and evolution.
          </motion.p>
        </header>

        {/* ─── Cinematic Toggle ─── */}
        <div className="journey-toggle-area">
          <motion.button
            className="journey-toggle"
            onClick={handleToggleMode}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            layout
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={journeyMode}
                className="toggle-content"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
              >
                {journeyMode === 'professional' ? (
                  <>
                    <Layers size={15} />
                    View Complete Journey
                  </>
                ) : (
                  <>
                    <Briefcase size={15} />
                    View Professional Journey Only
                  </>
                )}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>

        {/* ─── Timeline ─── */}
        <LayoutGroup>
          <motion.div className="timeline-container" layout>
            <div className="timeline-line">
              <motion.div
                className="timeline-progress"
                style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
              />
            </div>

            {yearGroups.map((group) => (
              <motion.div
                key={group.year}
                className="year-group"
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Year Divider */}
                <motion.div
                  className="year-divider"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <span className="year-divider-line" />
                  <span className="year-divider-label">{group.year}</span>
                  <span className="year-divider-line" />
                </motion.div>

                {group.milestones.map((milestone, index) => (
                  <MilestoneCard
                    key={milestone.id}
                    milestone={milestone}
                    index={index}
                    isActive={activeMilestone?.id === milestone.id}
                    onExpand={() => onExpandMilestone(milestone)}
                    journeyMode={journeyMode}
                  />
                ))}
              </motion.div>
            ))}
          </motion.div>
        </LayoutGroup>

        <footer className="journey-footer">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="transition-cta"
          >
            <span className="cta-label">The journey is still unfolding.</span>
            <h3 className="cta-title">Where Innovation Meets Leadership</h3>
            <button
              className="cta-button"
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Projects <ArrowRight size={20} />
            </button>
          </motion.div>
        </footer>
      </div>
    </section>
  );
};

// ═══════════════════════════════════════════════════
//  MILESTONE CARD
// ═══════════════════════════════════════════════════

interface MilestoneCardProps {
  milestone: Milestone;
  index: number;
  isActive: boolean;
  onExpand: () => void;
  journeyMode: JourneyMode;
}

const roleTagClass = (tag?: string) =>
  tag ? `role-tag role-tag--${tag.toLowerCase().replace(/\s+/g, '-')}` : '';

const MilestoneCard: React.FC<MilestoneCardProps> = ({
  milestone,
  index,
  isActive,
  onExpand,
  journeyMode,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isPersonal = milestone.type === 'personal';

  const handleCardClick = () => {
    if (milestone.expandedDetails || milestone.contributions) {
      setIsExpanded(prev => !prev);
    } else {
      onExpand();
    }
  };

  return (
    <motion.div
      className={`milestone-card-wrapper ${isActive ? 'active' : ''} ${isPersonal ? 'personal' : 'professional'}`}
      layout
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: index % 2 === 0 ? -20 : 20, scale: 0.95 }}
      transition={{
        duration: 0.7,
        delay: isPersonal ? 0.15 + index * 0.05 : 0.1,
        ease: [0.23, 1, 0.32, 1]
      }}
      viewport={{ margin: "-80px" }}
    >
      <motion.div className="milestone-card" layout onClick={handleCardClick}>
        {/* Card Header */}
        <div className="card-header">
          <div className="card-header-left">
            {milestone.month && (
              <span className="card-month">{milestone.month.toUpperCase()}</span>
            )}
            <span className="card-year">{milestone.year}</span>
          </div>
          {milestone.roleTag && (
            <span className={roleTagClass(milestone.roleTag)}>
              {milestone.roleTag}
            </span>
          )}
        </div>

        {/* Title + Org */}
        <h3 className="card-title">{milestone.title}</h3>
        {milestone.organization && (
          <div className="card-org-wrapper">
            <img 
              src={`/assets/journey/${milestone.assetFolder}/logo.png`} 
              alt={milestone.organization} 
              className="card-org-logo" 
              onError={(e) => {
                const img = e.currentTarget;
                const src = img.src;
                if (src.endsWith('.png')) {
                  img.src = src.replace('.png', '.jpg');
                } else if (src.endsWith('.jpg')) {
                  img.src = src.replace('.jpg', '.svg');
                } else if (src.endsWith('.svg')) {
                  img.src = src.replace('.svg', '.jpeg');
                } else {
                  img.style.display = 'none';
                }
              }} 
            />
            <span className="card-organization">{milestone.organization}</span>
          </div>
        )}

        {/* Short Description */}
        <p className="card-description">{milestone.shortDescription}</p>

        {/* Timeline Range */}
        {milestone.timeline && (
          <span className="card-timeline">{milestone.timeline}</span>
        )}

        {/* Expandable Inline Details */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="card-expanded-content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            >
              {milestone.expandedDetails && (
                <p className="card-expanded-text">{milestone.expandedDetails}</p>
              )}

              {milestone.contributions && milestone.contributions.length > 0 && (
                <div className="card-contributions">
                  <span className="card-contributions-label">Key Contributions</span>
                  <ul>
                    {milestone.contributions.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              )}

              {milestone.reflection && (
                <blockquote className="card-reflection">
                  {milestone.reflection}
                </blockquote>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Row */}
        <div className="card-actions">
          {(milestone.expandedDetails || milestone.contributions) && (
            <button
              className={`expand-toggle ${isExpanded ? 'expanded' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(prev => !prev);
              }}
            >
              {isExpanded ? 'Less' : 'Details'}
              <ChevronDown size={14} className="expand-icon" />
            </button>
          )}
          <button
            className="read-more"
            onClick={(e) => {
              e.stopPropagation();
              onExpand();
            }}
          >
            Read Full Chapter <ChevronRight size={14} />
          </button>
        </div>

        {/* Glow */}
        <div className="card-glow" />
      </motion.div>

      <div className="timeline-dot-wrapper">
        <div className={`timeline-dot ${isActive ? 'active' : ''} ${isPersonal ? 'personal' : ''}`} />
      </div>
    </motion.div>
  );
};

export default JourneySection;
