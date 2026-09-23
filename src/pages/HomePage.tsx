import React, { useState } from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { ECellConnectionSection } from '../components/sections/ECellConnectionSection';
import { BigStatementSection } from '../components/sections/BigStatementSection';
import { WhyIlluminateSection } from '../components/sections/WhyIlluminateSection';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { GoodiesSection } from '../components/sections/GoodiesSection';
import { BenefitsSection } from '../components/sections/BenefitsSection';
import { EventsSection } from '../components/sections/EventsSection';
import { EntrepreneurJourneySection } from '../components/sections/EntrepreneurJourneySection';
import { CommunitySection } from '../components/sections/CommunitySection';
import { JoinECellSection } from '../components/sections/JoinECellSection';
import { CampusAmbassadorSection } from '../components/sections/CampusAmbassadorSection';
import { TeamSection } from '../components/sections/TeamSection';
import { UITPhilosophySection } from '../components/sections/UITPhilosophySection';
import { GallerySection } from '../components/sections/GallerySection';
import { ImpactMetricsSection } from '../components/sections/ImpactMetricsSection';
import { PartnersSection } from '../components/sections/PartnersSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { ContactSection } from '../components/sections/ContactSection';
import { FinalCTASection } from '../components/sections/FinalCTASection';
import { LoadingScreen } from '../components/loading/LoadingScreen';
import { RegisterModal } from '../components/modals/RegisterModal';
import { PassModal } from '../components/modals/PassModal';
import { RegistrationSubmission } from '../types';

interface HomePageProps {
  onOpenRegisterModal?: () => void;
}

export const HomePage: React.FC<HomePageProps> = () => {
  const [showLoading, setShowLoading] = useState<boolean>(() => {
    return !sessionStorage.getItem('illuminate_intro_seen');
  });

  // Modal State for instant streamlined single-page registration flow
  const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false);
  const [isPassOpen, setIsPassOpen] = useState<boolean>(false);
  const [registeredUser, setRegisteredUser] = useState<RegistrationSubmission | null>(null);

  const handleLoadingComplete = () => {
    sessionStorage.setItem('illuminate_intro_seen', 'true');
    setShowLoading(false);
  };

  const handleOpenRegister = () => {
    window.location.href = "https://reg.icampuserp.in/Form1019.aspx";
  };

  const handleRegisterSuccess = (submission: RegistrationSubmission) => {
    setIsRegisterOpen(false);
    setRegisteredUser(submission);
    setIsPassOpen(true);
  };

  return (
    <div className="relative min-h-screen">
      {showLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      {/* Primary Narrative Flow (Optimized & Minimal) */}
      <HeroSection onOpenRegister={handleOpenRegister} />
      <AboutSection />
      <ECellConnectionSection />
      <BigStatementSection />
      <WhyIlluminateSection />
      <ExperienceSection />
      <GoodiesSection />
      <BenefitsSection />
      <EventsSection />
      <EntrepreneurJourneySection />
      <CommunitySection />
      <JoinECellSection />
      <CampusAmbassadorSection />
      <TeamSection />
      <UITPhilosophySection />
      <GallerySection />
      <ImpactMetricsSection />
      <PartnersSection />
      <TestimonialsSection />
      <ContactSection />
      <FinalCTASection onOpenRegister={handleOpenRegister} />

      {/* Instant Interactive Modals */}
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onSuccess={handleRegisterSuccess}
      />

      <PassModal
        isOpen={isPassOpen}
        onClose={() => setIsPassOpen(false)}
        registration={registeredUser}
      />
    </div>
  );
};
