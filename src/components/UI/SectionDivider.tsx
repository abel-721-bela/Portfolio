'use client';

import React from 'react';
import './SectionDivider.css';

interface SectionDividerProps {
  variant?: 'default' | 'glow';
}

const SectionDivider: React.FC<SectionDividerProps> = ({ variant = 'default' }) => {
  return (
    <div className={`section-divider ${variant}`} aria-hidden="true">
      <div className="divider-line" />
    </div>
  );
};

export default SectionDivider;
