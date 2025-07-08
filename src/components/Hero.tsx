import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Hero = () => {
  const scrollToPlans = () => {
    const element = document.getElementById('plans');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-[#222222] mb-6">
              <span style={{ color: '#28A030' }}>C</span>UBA 
              <span style={{ color: '#28A030' }}> N</span>O
              <span style={{ color: '#28A030' }}>W</span>
              <span className="block" style={{ color: '#28A030' }}>Summer Camp 2025</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#717171] mb-8 max-w-4xl mx-auto">
              The Ultimate Ivy-League Summer Camp & Resilience Training Hub - 
              Where Education Meets Adventure in the Heart of Cuba
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={scrollToPlans}
                className="bg-[#28A030] hover:bg-[#1e8026] text-white px-8 py-4 text-lg font-medium transition-all duration-200 hover:shadow-lg"
                style={{ borderRadius: '16px' }}
              >
                Early Bird Pricing - Limited Spots
              </Button>
              <Link to="/book-consultation">
                <Button
                  variant="outline"
                  className="border-[#222222] text-[#222222] hover:bg-[#222222] hover:text-white px-8 py-4 text-lg font-medium transition-all duration-200"
                  style={{ borderRadius: '16px' }}
                >
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>

          {/* Three Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Ivy League Card */}
            <Card className="p-8 text-center hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white"
              style={{ borderRadius: '16px', boxShadow: '0 12px 20px rgba(39,39,39,0.4), 0 16px 32px rgba(39,39,39,0.2)' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-[#28A030] to-[#1e8026] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">🎓</span>
              </div>
              <h3 className="text-2xl font-bold text-[#222222] mb-4">Ivy-League Education</h3>
              <p className="text-[#717171] leading-relaxed">
                World-class curriculum designed by Harvard, Yale, and Princeton alumni.
              </p>
            </Card>

            {/* Resilience Card */}
            <Card className="p-8 text-center hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white"
              style={{ borderRadius: '16px', boxShadow: '0 12px 20px rgba(39,39,39,0.4), 0 16px 32px rgba(39,39,39,0.2)' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-[#28A030] to-[#1e8026] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">💪</span>
              </div>
              <h3 className="text-2xl font-bold text-[#222222] mb-4">Resilience Training</h3>
              <p className="text-[#717171] leading-relaxed">
                Build crisis-ready resilience with critical thinking, boxing, and peer survival skills.
              </p>
            </Card>

            {/* Cultural Card */}
            <Card className="p-8 text-center hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white"
              style={{ borderRadius: '16px', boxShadow: '0 12px 20px rgba(39,39,39,0.4), 0 16px 32px rgba(39,39,39,0.2)' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-[#28A030] to-[#1e8026] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">🌎</span>
              </div>
              <h3 className="text-2xl font-bold text-[#222222] mb-4">Cultural Immersion</h3>
              <p className="text-[#717171] leading-relaxed">
                Experience Cuban culture: Spanish, salsa, and local community bonding.
              </p>
            </Card>
          </div>

          {/* CTA Frame */}
          <div className="mb-16">
            <Card className="p-6 text-center hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white"
              style={{ borderRadius: '16px', boxShadow: '0 12px 20px rgba(39,39,39,0.4), 0 16px 32px rgba(39,39,39,0.2)' }}>
              <h3 className="text-xl font-bold text-[#222222] mb-6">
                The world won't wait. Will you? Apply now and save 20%!
              </h3>
              <Link to="/book-consultation">
                <Button
                  className="bg-[#28A030] hover:bg-[#1e8026] text-white px-8 py-4 text-lg font-medium transition-all duration-200"
                  style={{ borderRadius: '16px' }}
                >
                  Apply Now!
                </Button>
              </Link>
            </Card>
          </div>

          {/* Program Cards - 4 in total, 2 rows */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* 1 */}
            <Card className="overflow-hidden hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white"
              style={{ borderRadius: '16px', boxShadow: '0 12px 20px rgba(39,39,39,0.4), 0 16px 32px rgba(39,39,39,0.2)' }}>
              <img src="/images/Middle-highschoolpro.png" alt="High School Students" className="w-full h-79 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#222222] mb-4">Middle / High School Pro</h3>
                <p className="text-[#717171] mb-2">Mon, Jun 16</p>
                <p className="text-[#717171] mb-4">Santa Clara</p>
                <p className="text-[#717171] mb-6">More info</p>
                <Link to="/book-consultation">
                  <Button className="bg-[#28A030] hover:bg-[#1e8026] text-white px-6 py-3" style={{ borderRadius: '16px' }}>
                    Register
                  </Button>
                </Link>
              </div>
            </Card>

            {/* 2 */}
            <Card className="overflow-hidden hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white"
              style={{ borderRadius: '16px', boxShadow: '0 12px 20px rgba(39,39,39,0.4), 0 16px 32px rgba(39,39,39,0.2)' }}>
              <img src="/images/Middleschoolrookie.png" alt="Middle School Students" className="w-full h-79 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#222222] mb-4">Middle School Rookie</h3>
                <p className="text-[#717171] mb-2">Mon, Jun 16</p>
                <p className="text-[#717171] mb-4">Santa Clara</p>
                <p className="text-[#717171] mb-6">More info</p>
                <Link to="/book-consultation">
                  <Button className="bg-[#28A030] hover:bg-[#1e8026] text-white px-6 py-3" style={{ borderRadius: '16px' }}>
                    Register
                  </Button>
                </Link>
              </div>
            </Card>

            {/* 3 */}
            <Card className="overflow-hidden hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white"
              style={{ borderRadius: '16px', boxShadow: '0 12px 20px rgba(39,39,39,0.4), 0 16px 32px rgba(39,39,39,0.2)' }}>
              <img src="/images/LeadershipElite.png" alt="Leadership Camp" className="w-full h-79 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#222222] mb-4">Leadership Elite</h3>
                <p className="text-[#717171] mb-2">Mon, Jul 1</p>
                <p className="text-[#717171] mb-4">Havana</p>
                <p className="text-[#717171] mb-6">More info</p>
                <Link to="/book-consultation">
                  <Button className="bg-[#28A030] hover:bg-[#1e8026] text-white px-6 py-3" style={{ borderRadius: '16px' }}>
                    Register
                  </Button>
                </Link>
              </div>
            </Card>

            {/* 4 */}
            <Card className="overflow-hidden hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white"
              style={{ borderRadius: '16px', boxShadow: '0 12px 20px rgba(39,39,39,0.4), 0 16px 32px rgba(39,39,39,0.2)' }}>
              <img src="/images/CampDiscovery.png" alt="Camp Discovery" className="w-full h-79 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#222222] mb-4">Camp Discovery</h3>
                <p className="text-[#717171] mb-2">Mon, Jul 15</p>
                <p className="text-[#717171] mb-4">Trinidad</p>
                <p className="text-[#717171] mb-6">More info</p>
                <Link to="/book-consultation">
                  <Button className="bg-[#28A030] hover:bg-[#1e8026] text-white px-6 py-3" style={{ borderRadius: '16px' }}>
                    Register
                  </Button>
                </Link>
              </div>
            </Card>
          </div>

          {/* Continue with video, image and bio sections... */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
