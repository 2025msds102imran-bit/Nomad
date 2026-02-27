import React from 'react';
import {
  HeroSection,
  AboutSection,
  ProblemSection,
  HowItWorks,
  KeyValues,
  PaymentsTrust,
  ForCompanies,
  ForRecruiters,
  WhyDifferent,
  TrustQuality,
  FinalCTA,
} from '../../components/landing';

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProblemSection />
      <HowItWorks />
      <KeyValues />
      <PaymentsTrust />
      <ForCompanies />
      <ForRecruiters />
      <WhyDifferent />
      <TrustQuality />
      <FinalCTA />
    </>
  );
};

export default LandingPage;
