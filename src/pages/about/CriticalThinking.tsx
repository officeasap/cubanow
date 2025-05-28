
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';

const CriticalThinking = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection="about" />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-[#222222] mb-6">
              Critical Thinking Mastery
            </h1>
            <p className="text-xl text-[#717171] max-w-3xl mx-auto">
              Develop razor-sharp analytical skills that Ivy-League admissions officers demand.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white curved-shadow" style={{ borderRadius: '12px', boxShadow: '0 8px 16px rgba(64, 64, 64, 0.3), 0 12px 24px rgba(64, 64, 64, 0.15)' }}>
              <h3 className="text-2xl font-bold text-[#222222] mb-6">Socratic Method Training</h3>
              <ul className="space-y-4 text-[#717171]">
                <li className="flex items-start">
                  <span className="text-[#28A030] mr-2">•</span>
                  Question everything with strategic precision
                </li>
                <li className="flex items-start">
                  <span className="text-[#28A030] mr-2">•</span>
                  Challenge assumptions through systematic inquiry
                </li>
                <li className="flex items-start">
                  <span className="text-[#28A030] mr-2">•</span>
                  Develop intellectual curiosity and depth
                </li>
                <li className="flex items-start">
                  <span className="text-[#28A030] mr-2">•</span>
                  Master the art of philosophical dialogue
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white curved-shadow" style={{ borderRadius: '12px', boxShadow: '0 8px 16px rgba(64, 64, 64, 0.3), 0 12px 24px rgba(64, 64, 64, 0.15)' }}>
              <h3 className="text-2xl font-bold text-[#222222] mb-6">Logical Reasoning</h3>
              <ul className="space-y-4 text-[#717171]">
                <li className="flex items-start">
                  <span className="text-[#28A030] mr-2">•</span>
                  Identify logical fallacies in real-time
                </li>
                <li className="flex items-start">
                  <span className="text-[#28A030] mr-2">•</span>
                  Construct bulletproof arguments
                </li>
                <li className="flex items-start">
                  <span className="text-[#28A030] mr-2">•</span>
                  Analyze complex problems systematically
                </li>
                <li className="flex items-start">
                  <span className="text-[#28A030] mr-2">•</span>
                  Think like a Supreme Court justice
                </li>
              </ul>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white curved-shadow" style={{ borderRadius: '12px', boxShadow: '0 8px 16px rgba(64, 64, 64, 0.3), 0 12px 24px rgba(64, 64, 64, 0.15)' }}>
              <div className="text-[#28A030] text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-[#222222] mb-4">Problem Solving</h3>
              <p className="text-[#717171]">
                Master complex problem-solving techniques used by top-tier universities and Fortune 500 companies.
              </p>
            </Card>

            <Card className="p-8 text-center hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white curved-shadow" style={{ borderRadius: '12px', boxShadow: '0 8px 16px rgba(64, 64, 64, 0.3), 0 12px 24px rgba(64, 64, 64, 0.15)' }}>
              <div className="text-[#28A030] text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold text-[#222222] mb-4">Ethical Reasoning</h3>
              <p className="text-[#717171]">
                Navigate complex moral dilemmas with sophistication and philosophical depth.
              </p>
            </Card>

            <Card className="p-8 text-center hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white curved-shadow" style={{ borderRadius: '12px', boxShadow: '0 8px 16px rgba(64, 64, 64, 0.3), 0 12px 24px rgba(64, 64, 64, 0.15)' }}>
              <div className="text-[#28A030] text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-[#222222] mb-4">Strategic Analysis</h3>
              <p className="text-[#717171]">
                Develop the analytical prowess that separates leaders from followers in elite institutions.
              </p>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CriticalThinking;
