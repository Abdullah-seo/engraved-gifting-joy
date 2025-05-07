
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import BestSellers from '../components/BestSellers';
import Collections from '../components/Collections';
import StorySection from '../components/StorySection';
import FathersDay from '../components/FathersDay';
import Testimonials from '../components/Testimonials';
import HowItWorks from '../components/HowItWorks';
import InstagramGallery from '../components/InstagramGallery';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Index = () => {
  // Add meta description and SEO
  React.useEffect(() => {
    document.title = "Engraved Gifting Joy | Personalised Gifts Made with Love";
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <BestSellers />
      <Collections />
      <StorySection />
      <FathersDay />
      <HowItWorks />
      <Testimonials />
      <InstagramGallery />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Index;
