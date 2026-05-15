'use client';

import React from 'react';
import LoadingPage from '@/components/LoadingPage/LoadingPage';
import HeroSection from '@/components/HeroSection/HeroSection';
import JourneySection from '@/components/JourneySection/JourneySection';
import DetailedStory from '@/components/JourneySection/DetailedStory';
import ProjectsSection from '@/components/ProjectsSection/ProjectsSection';
import HowIWorkSection from '@/components/HowIWorkSection/HowIWorkSection';
import ClosingSection from '@/components/ClosingSection/ClosingSection';
import ScrollNavigator from '@/components/ScrollNavigator/ScrollNavigator';
import Navbar from '@/components/Navbar/Navbar';
import AmbientBackground from '@/components/AmbientBackground/AmbientBackground';
import SectionDivider from '@/components/UI/SectionDivider';
import { Milestone } from '@/components/JourneySection/journeyData';
import { AnimatePresence } from 'framer-motion';

export default function Home() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [expandedMilestone, setExpandedMilestone] = React.useState<Milestone | null>(null);

  return (
    <main>
      <AnimatePresence>
        {isLoading ? (
          <LoadingPage key="loading" onComplete={() => setIsLoading(false)} />
        ) : (
          <div key="content">
            <AmbientBackground />
            <Navbar />
            <HeroSection />
            <SectionDivider variant="glow" />
            <JourneySection onExpandMilestone={setExpandedMilestone} />
            <SectionDivider />
            <ProjectsSection />
            <SectionDivider variant="glow" />
            <HowIWorkSection />
            <SectionDivider />
            <ClosingSection />
            <ScrollNavigator />
            
            <AnimatePresence>
              {expandedMilestone && (
                <DetailedStory 
                  milestone={expandedMilestone} 
                  onClose={() => setExpandedMilestone(null)} 
                />
              )}
            </AnimatePresence>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
