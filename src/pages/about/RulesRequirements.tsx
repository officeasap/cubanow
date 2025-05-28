
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';

const RulesRequirements = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection="about" />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-[#222222] mb-6">
              Rules & Requirements
            </h1>
            <p className="text-xl text-[#717171] max-w-3xl mx-auto">
              Excellence demands discipline. Here are our non-negotiable standards.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-[#404040]" style={{ borderRadius: '12px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3), 0 12px 24px rgba(0, 0, 0, 0.15)' }}>
              <h3 className="text-xl font-bold text-white mb-4">Academic Standards</h3>
              <ul className="space-y-3 text-white text-sm">
                <li>• Maintain 100% attendance</li>
                <li>• Complete all assignments</li>
                <li>• Active participation required</li>
                <li>• Respect for faculty and peers</li>
              </ul>
            </Card>

            <Card className="p-8 hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-[#404040]" style={{ borderRadius: '12px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3), 0 12px 24px rgba(0, 0, 0, 0.15)' }}>
              <h3 className="text-xl font-bold text-white mb-4">Behavioral Code</h3>
              <ul className="space-y-3 text-white text-sm">
                <li>• Zero tolerance for disrespect</li>
                <li>• Cultural sensitivity required</li>
                <li>• Team collaboration essential</li>
                <li>• Personal responsibility</li>
              </ul>
            </Card>

            <Card className="p-8 hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-[#404040]" style={{ borderRadius: '12px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3), 0 12px 24px rgba(0, 0, 0, 0.15)' }}>
              <h3 className="text-xl font-bold text-white mb-4">Health & Safety</h3>
              <ul className="space-y-3 text-white text-sm">
                <li>• Current medical clearance</li>
                <li>• No substance use policy</li>
                <li>• Emergency contact required</li>
                <li>• Travel insurance mandatory</li>
              </ul>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RulesRequirements;
