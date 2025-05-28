
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Plans from '@/components/Plans';

const PlansPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection="plans" />
      
      <main className="pt-16">
        <Plans />
      </main>
      
      <Footer />
    </div>
  );
};

export default PlansPage;
