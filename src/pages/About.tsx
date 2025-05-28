
import React from 'react';
import Navigation from '@/components/Navigation';
import About from '@/components/About';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection="about" />
      
      <main className="pt-16">
        <About />
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
