
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';

const WhoIsItFor = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection="about" />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-[#222222] mb-6">
              Who Is CUBA NOW For?
            </h1>
            <p className="text-xl text-[#717171] max-w-3xl mx-auto">
              Discover if you're ready for the ultimate transformative experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-[#404040]" style={{ borderRadius: '12px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3), 0 12px 24px rgba(0, 0, 0, 0.15)' }}>
              <h3 className="text-2xl font-bold text-white mb-6">Ideal Candidates</h3>
              <ul className="space-y-4 text-white">
                <li className="flex items-start">
                  <span className="text-[#28A030] mr-2">✓</span>
                  High school students (ages 15-18) with exceptional academic records
                </li>
                <li className="flex items-start">
                  <span className="text-[#28A030] mr-2">✓</span>
                  Future leaders seeking Ivy-League preparation
                </li>
                <li className="flex items-start">
                  <span className="text-[#28A030] mr-2">✓</span>
                  Students passionate about cultural immersion and resilience training
                </li>
                <li className="flex items-start">
                  <span className="text-[#28A030] mr-2">✓</span>
                  Individuals ready for intensive academic and physical challenges
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-[#404040]" style={{ borderRadius: '12px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3), 0 12px 24px rgba(0, 0, 0, 0.15)' }}>
              <h3 className="text-2xl font-bold text-white mb-6">Prerequisites</h3>
              <ul className="space-y-4 text-white">
                <li className="flex items-start">
                  <span className="text-[#28A030] mr-2">•</span>
                  Minimum 3.7 GPA or equivalent academic standing
                </li>
                <li className="flex items-start">
                  <span className="text-[#28A030] mr-2">•</span>
                  Basic Spanish proficiency (conversational level preferred)
                </li>
                <li className="flex items-start">
                  <span className="text-[#28A030] mr-2">•</span>
                  Physical fitness for outdoor activities and sports
                </li>
                <li className="flex items-start">
                  <span className="text-[#28A030] mr-2">•</span>
                  Commitment to full program participation
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default WhoIsItFor;
