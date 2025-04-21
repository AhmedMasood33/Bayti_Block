import React from 'react';
import Hero from '../components/Hero';
import SearchSection from '../components/SearchSection';
import FeatureSection from '../components/FeatureSection';
import FeaturedProperties from '../components/FeaturedProperties';
import CallToAction from '../components/CallToAction';
import Testimonials from '../components/Testimonials';
import TrustBadges from '../components/TrustBadges';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <SearchSection />
      <FeatureSection />
      <FeaturedProperties />
      <TrustBadges />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default HomePage;