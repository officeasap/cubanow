
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';

const MusicPreservation = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection="about" />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-[#222222] mb-6">
              Music Preservation & Cultural Heritage
            </h1>
            <p className="text-xl text-[#717171] max-w-3xl mx-auto">
              Immerse yourself in the rich musical traditions that define Cuban culture and identity.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Card className="overflow-hidden hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white curved-shadow" style={{ borderRadius: '12px', boxShadow: '0 8px 16px rgba(64, 64, 64, 0.3), 0 12px 24px rgba(64, 64, 64, 0.15)' }}>
              <img 
                 src="/images/cubanmusicinstruments.png" // Use your local image here
                alt="Cuban music instruments" 
                className="w-full h-74 object-cover"
              />
            </Card>
            
            <div className="space-y-6">
              <Card className="p-6 hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white curved-shadow" style={{ borderRadius: '12px', boxShadow: '0 8px 16px rgba(64, 64, 64, 0.3), 0 12px 24px rgba(64, 64, 64, 0.15)' }}>
                <h3 className="text-xl font-bold text-[#222222] mb-4">Traditional Instruments</h3>
                <p className="text-[#717171]">
                  Master the conga, bongos, claves, and other iconic Cuban instruments under the guidance of local maestros.
                </p>
              </Card>
              
              <Card className="p-6 hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white curved-shadow" style={{ borderRadius: '12px', boxShadow: '0 8px 16px rgba(64, 64, 64, 0.3), 0 12px 24px rgba(64, 64, 64, 0.15)' }}>
                <h3 className="text-xl font-bold text-[#222222] mb-4">Salsa & Rumba</h3>
                <p className="text-[#717171]">
                  Learn authentic dance styles that embody the passion and rhythm of Cuban culture.
                </p>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white curved-shadow" style={{ borderRadius: '12px', boxShadow: '0 8px 16px rgba(64, 64, 64, 0.3), 0 12px 24px rgba(64, 64, 64, 0.15)' }}>
              <div className="text-[#28A030] text-4xl mb-4">🎵</div>
              <h3 className="text-xl font-bold text-[#222222] mb-4">Musical Heritage</h3>
              <p className="text-[#717171]">
                Study the evolution of Cuban music from its African roots to modern interpretations.
              </p>
            </Card>

            <Card className="p-8 text-center hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white curved-shadow" style={{ borderRadius: '12px', boxShadow: '0 8px 16px rgba(64, 64, 64, 0.3), 0 12px 24px rgba(64, 64, 64, 0.15)' }}>
              <div className="text-[#28A030] text-4xl mb-4">🎭</div>
              <h3 className="text-xl font-bold text-[#222222] mb-4">Performance Arts</h3>
              <p className="text-[#717171]">
                Participate in live performances and showcase your newfound musical talents.
              </p>
            </Card>

            <Card className="p-8 text-center hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white curved-shadow" style={{ borderRadius: '12px', boxShadow: '0 8px 16px rgba(64, 64, 64, 0.3), 0 12px 24px rgba(64, 64, 64, 0.15)' }}>
              <div className="text-[#28A030] text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-[#222222] mb-4">Cultural Documentation</h3>
              <p className="text-[#717171]">
                Help preserve musical traditions through recording and documentation projects.
              </p>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MusicPreservation;
