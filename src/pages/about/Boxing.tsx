
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';

const Boxing = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection="about" />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-[#222222] mb-6">
              Boxing & Combat Training
            </h1>
            <p className="text-xl text-[#717171] max-w-3xl mx-auto">
              Build unbreakable mental toughness through the sweet science of boxing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Card className="overflow-hidden hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white curved-shadow" style={{ borderRadius: '12px', boxShadow: '0 8px 16px rgba(64, 64, 64, 0.3), 0 12px 24px rgba(64, 64, 64, 0.15)' }}>
              <img 
                src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Boxing training" 
                className="w-full h-64 object-cover"
              />
            </Card>
            
            <div className="space-y-6">
              <Card className="p-6 hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white curved-shadow" style={{ borderRadius: '12px', boxShadow: '0 8px 16px rgba(64, 64, 64, 0.3), 0 12px 24px rgba(64, 64, 64, 0.15)' }}>
                <h3 className="text-xl font-bold text-[#222222] mb-4">Mental Fortitude</h3>
                <p className="text-[#717171]">
                  Boxing teaches you to face fear head-on, make split-second decisions under pressure, and maintain composure when everything is on the line.
                </p>
              </Card>
              
              <Card className="p-6 hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white curved-shadow" style={{ borderRadius: '12px', boxShadow: '0 8px 16px rgba(64, 64, 64, 0.3), 0 12px 24px rgba(64, 64, 64, 0.15)' }}>
                <h3 className="text-xl font-bold text-[#222222] mb-4">Discipline & Focus</h3>
                <p className="text-[#717171]">
                  The rigorous training regimen develops the kind of self-discipline that Ivy-League institutions recognize and value.
                </p>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white curved-shadow" style={{ borderRadius: '12px', boxShadow: '0 8px 16px rgba(64, 64, 64, 0.3), 0 12px 24px rgba(64, 64, 64, 0.15)' }}>
              <div className="text-[#28A030] text-4xl mb-4">🥊</div>
              <h3 className="text-xl font-bold text-[#222222] mb-4">Technical Training</h3>
              <p className="text-[#717171]">
                Learn proper technique, footwork, and strategy from professional Cuban boxing coaches.
              </p>
            </Card>

            <Card className="p-8 text-center hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white curved-shadow" style={{ borderRadius: '12px', boxShadow: '0 8px 16px rgba(64, 64, 64, 0.3), 0 12px 24px rgba(64, 64, 64, 0.15)' }}>
              <div className="text-[#28A030] text-4xl mb-4">💪</div>
              <h3 className="text-xl font-bold text-[#222222] mb-4">Physical Conditioning</h3>
              <p className="text-[#717171]">
                Build elite-level fitness and stamina that supports both academic and personal excellence.
              </p>
            </Card>

            <Card className="p-8 text-center hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white curved-shadow" style={{ borderRadius: '12px', boxShadow: '0 8px 16px rgba(64, 64, 64, 0.3), 0 12px 24px rgba(64, 64, 64, 0.15)' }}>
              <div className="text-[#28A030] text-4xl mb-4">🧘</div>
              <h3 className="text-xl font-bold text-[#222222] mb-4">Mental Training</h3>
              <p className="text-[#717171]">
                Develop the psychological resilience that distinguishes champions from participants.
              </p>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Boxing;
