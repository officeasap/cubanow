
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection="home" />
      
      <main>
        <Hero />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
