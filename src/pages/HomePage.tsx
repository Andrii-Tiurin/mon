import React from 'react';
import Hero from '../components/Hero';
import HotTours from '../components/HotTours';
import FeaturedDestinations from '../components/FeaturedDestinations';

const HomePage = () => {
  return (
    <>
      <Hero />
      <HotTours />
      <FeaturedDestinations />
    </>
  );
};

export default HomePage;