
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Team from '@/components/Team';

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection="team" />
      
      <main className="pt-16">
        <Team />
      </main>
      
      <Footer />
    </div>
  );
};

export default TeamPage;
