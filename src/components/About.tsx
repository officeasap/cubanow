
import React from 'react';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mb-6">
            About CUBA NOW
          </h2>
          <p className="text-xl text-[#717171] max-w-3xl mx-auto">
            A revolutionary educational platform that transforms ambitious students into 
            Ivy-League ready leaders through immersive Cuban cultural experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-[#222222] mb-6">Our Mission</h3>
            <div className="space-y-6 text-lg text-[#717171] leading-relaxed">
              <p>
                CUBA NOW was founded on the belief that true education extends far beyond 
                textbooks and standardized tests. In today's rapidly changing world, students need 
                more than academic knowledge—they need resilience, cultural intelligence, and the 
                confidence to tackle any challenge.
              </p>
              <p>
                Our immersive program combines the rigor of Ivy-League preparation with the 
                transformative power of cultural immersion and resilience training. Students don't 
                just learn about the world—they experience it firsthand.
              </p>
              <p>
                With only 15 spots available per session, we maintain an intimate, personalized 
                environment where every student receives individual attention and mentorship from 
                our world-class faculty.
              </p>
            </div>
          </div>
          
          <Card className="overflow-hidden hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-[#404040] curved-shadow" style={{ borderRadius: '12px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3), 0 12px 24px rgba(0, 0, 0, 0.15)' }}>
            <img 
              src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Cuban landscape" 
              className="w-full h-96 object-cover"
            />
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-[#404040] curved-shadow" style={{ borderRadius: '12px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3), 0 12px 24px rgba(0, 0, 0, 0.15)' }}>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#28A030] mb-4">15</div>
              <h4 className="text-xl font-bold text-white mb-2">Exclusive Spots</h4>
              <p className="text-gray-300">Limited enrollment ensures personalized attention</p>
            </div>
          </Card>

          <Card className="p-8 hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-[#404040] curved-shadow" style={{ borderRadius: '12px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3), 0 12px 24px rgba(0, 0, 0, 0.15)' }}>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#28A030] mb-4">95%</div>
              <h4 className="text-xl font-bold text-white mb-2">Success Rate</h4>
              <p className="text-gray-300">Alumni acceptance to top-tier universities</p>
            </div>
          </Card>

          <Card className="p-8 hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-[#404040] curved-shadow" style={{ borderRadius: '12px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3), 0 12px 24px rgba(0, 0, 0, 0.15)' }}>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#28A030] mb-4">24/7</div>
              <h4 className="text-xl font-bold text-white mb-2">Immersive Learning</h4>
              <p className="text-gray-300">Round-the-clock educational experiences</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
