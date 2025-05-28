
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';

const AfroCubanReligion = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection="about" />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-[#222222] mb-6">
              Afro-Cuban Religious Studies
            </h1>
            <p className="text-xl text-[#717171] max-w-3xl mx-auto">
              Explore the profound spiritual traditions that have shaped Cuban culture for centuries.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Card className="overflow-hidden hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white curved-shadow" style={{ borderRadius: '12px', boxShadow: '0 8px 16px rgba(64, 64, 64, 0.3), 0 12px 24px rgba(64, 64, 64, 0.15)' }}>
              <img 
                   src="/images/culturalceremony.png" // Use your local image here
                alt="Cultural ceremony" 
                className="w-full h-74 object-cover"
              />
            </Card>
            
            <div className="space-y-6">
              <Card className="p-6 hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white curved-shadow" style={{ borderRadius: '12px', boxShadow: '0 8px 16px rgba(64, 64, 64, 0.3), 0 12px 24px rgba(64, 64, 64, 0.15)' }}>
                <h3 className="text-xl font-bold text-[#222222] mb-4">Santería & Lucumí</h3>
                <p className="text-[#717171]">
                  Study the syncretic religious traditions that blend Yoruba spirituality with Catholic influences.
                </p>
              </Card>
              
              <Card className="p-6 hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white curved-shadow" style={{ borderRadius: '12px', boxShadow: '0 8px 16px rgba(64, 64, 64, 0.3), 0 12px 24px rgba(64, 64, 64, 0.15)' }}>
                <h3 className="text-xl font-bold text-[#222222] mb-4">Cultural Anthropology</h3>
                <p className="text-[#717171]">
                  Understand how spiritual practices preserve cultural identity and community bonds.
                </p>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white curved-shadow" style={{ borderRadius: '12px', boxShadow: '0 8px 16px rgba(64, 64, 64, 0.3), 0 12px 24px rgba(64, 64, 64, 0.15)' }}>
              <div className="text-[#28A030] text-4xl mb-4">🕯️</div>
              <h3 className="text-xl font-bold text-[#222222] mb-4">Spiritual Practices</h3>
              <p className="text-[#717171]">
                Learn about ceremonies, rituals, and the philosophical foundations of Afro-Cuban spirituality.
              </p>
            </Card>

            <Card className="p-8 text-center hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white curved-shadow" style={{ borderRadius: '12px', boxShadow: '0 8px 16px rgba(64, 64, 64, 0.3), 0 12px 24px rgba(64, 64, 64, 0.15)' }}>
              <div className="text-[#28A030] text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-[#222222] mb-4">Historical Context</h3>
              <p className="text-[#717171]">
                Understand the historical journey from Africa to Cuba and its cultural implications.
              </p>
            </Card>

            <Card className="p-8 text-center hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white curved-shadow" style={{ borderRadius: '12px', boxShadow: '0 8px 16px rgba(64, 64, 64, 0.3), 0 12px 24px rgba(64, 64, 64, 0.15)' }}>
              <div className="text-[#28A030] text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-[#222222] mb-4">Community Engagement</h3>
              <p className="text-[#717171]">
                Respectfully participate in community gatherings and cultural celebrations.
              </p>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AfroCubanReligion;
