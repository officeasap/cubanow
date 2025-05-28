
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
            <Card className="p-8 text-center hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white" style={{ borderRadius: '16px', boxShadow: '0 12px 20px rgba(39, 39, 39, 0.4), 0 16px 32px rgba(39, 39, 39, 0.2)' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-[#28A030] to-[#1e8026] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">🎓</span>
              </div>
              <h3 className="text-2xl font-bold text-[#222222] mb-4">Ivy-League Education</h3>
              <p className="text-[#717171] leading-relaxed">
                World-class curriculum designed by Harvard, Yale, and Princeton alumni. 
                Prepare for the most competitive universities while exploring Cuban culture.
              </p>
            </Card>

            <Card className="p-8 text-center hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white" style={{ borderRadius: '16px', boxShadow: '0 12px 20px rgba(39, 39, 39, 0.4), 0 16px 32px rgba(39, 39, 39, 0.2)' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-[#28A030] to-[#1e8026] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">💪</span>
              </div>
              <h3 className="text-2xl font-bold text-[#222222] mb-4">Resilience Training</h3>
              <p className="text-[#717171] leading-relaxed">
                Build crisis-ready resilience—critical thinking, boxing, peer survival skills, and real-world adaptability training.
              </p>
            </Card>

            <Card className="p-8 text-center hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white" style={{ borderRadius: '16px', boxShadow: '0 12px 20px rgba(39, 39, 39, 0.4), 0 16px 32px rgba(39, 39, 39, 0.2)' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-[#28A030] to-[#1e8026] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">🌎</span>
              </div>
              <h3 className="text-2xl font-bold text-[#222222] mb-4">Cultural Immersion</h3>
              <p className="text-[#717171] leading-relaxed">
                Experience authentic Cuban culture, history, and values. Learn Spanish, 
                salsa dancing, and connect with local families and communities.
              </p>
            </Card>
          </div>

          {/* CTA Frame with reduced font size */}
          <div className="mb-16">
            <Card className="p-6 text-center hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white" style={{ borderRadius: '16px', boxShadow: '0 12px 20px rgba(39, 39, 39, 0.4), 0 16px 32px rgba(39, 39, 39, 0.2)' }}>
              <h3 className="text-xl font-bold text-[#222222] mb-6">
                The world won't wait. Will you? Early bird discount available for 4-week and 6-week camps. Only 15 applicants accepted. Apply now and save 20%!!!
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

          {/* Program Cards with Blog-style frames and images */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="overflow-hidden hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white" style={{ borderRadius: '16px', boxShadow: '0 12px 20px rgba(39, 39, 39, 0.4), 0 16px 32px rgba(39, 39, 39, 0.2)' }}>
              <img 
                src="/images/Middle-highschoolpro.png" 
                alt="High School Students" 
                className="w-full h-79 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#222222] mb-4">Middle / High School Pro</h3>
                <p className="text-[#717171] mb-2">Mon, Jun 16</p>
                <p className="text-[#717171] mb-4">Santa Clara</p>
                <p className="text-[#717171] mb-6">More info</p>
                <Link to="/book-consultation">
                  <Button
                    className="bg-[#28A030] hover:bg-[#1e8026] text-white px-6 py-3 font-medium transition-all duration-200"
                    style={{ borderRadius: '16px' }}
                  >
                    Register
                  </Button>
                </Link>
              </div>
            </Card>

            <Card className="overflow-hidden hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white" style={{ borderRadius: '16px', boxShadow: '0 12px 20px rgba(39, 39, 39, 0.4), 0 16px 32px rgba(39, 39, 39, 0.2)' }}>
              <img 
                 src="/images/Middleschoolrookie.png" 
                 alt="Middle School Students" 
                 className="w-full h-79 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#222222] mb-4">Middle School Rookie</h3>
                <p className="text-[#717171] mb-2">Mon, Jun 16</p>
                <p className="text-[#717171] mb-4">Santa Clara</p>
                <p className="text-[#717171] mb-6">More info</p>
                <Link to="/book-consultation">
                  <Button
                    className="bg-[#28A030] hover:bg-[#1e8026] text-white px-6 py-3 font-medium transition-all duration-200"
                    style={{ borderRadius: '16px' }}
                  >
                    Register
                  </Button>
                </Link>
              </div>
            </Card>
          </div>

          {/* Video & Image Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="overflow-hidden hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white" style={{ borderRadius: '16px', boxShadow: '0 12px 20px rgba(39, 39, 39, 0.4), 0 16px 32px rgba(39, 39, 39, 0.2)' }}>
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#28A030] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">▶</span>
                  </div>
                  <p className="text-[#717171] font-medium">Watch Our Experience Video</p>
                </div>
              </div>
            </Card>
            
            <Card className="overflow-hidden hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white" style={{ borderRadius: '16px', boxShadow: '0 12px 20px rgba(39, 39, 39, 0.4), 0 16px 32px rgba(39, 39, 39, 0.2)' }}>
              <img 
                src="/images/Dr,RobertClyne.png" 
                alt="Cuba landscape" 
                className="w-full h-full object-cover"
              />
            </Card>
          </div>

          {/* Dr. Robert Clyne Bio - Enhanced Content */}
          <div className="mb-16">
            <Card className="p-8 hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white" style={{ borderRadius: '16px', boxShadow: '0 12px 20px rgba(39, 39, 39, 0.4), 0 16px 32px rgba(39, 39, 39, 0.2)' }}>
              <h3 className="text-3xl font-bold text-[#222222] mb-6">Dr. Robert Clyne</h3>
              <h4 className="text-xl font-semibold text-[#28A030] mb-6">Founder & Camp Leader, CUBA NOW</h4>
              <div className="text-[#717171] leading-relaxed space-y-4">
                <div
  style={{
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.45rem',
    color: '#2d2d2d',
    lineHeight: 1.8,
    letterSpacing: '0.01em',
    fontWeight: 500,
    background: 'linear-gradient(90deg, #f8fafc 0%, #f1f5f9 100%)',
    borderRadius: '1rem',
    padding: '2rem',
    boxShadow: '0 8px 32px rgba(40, 160, 48, 0.08)'
  }}
  className="space-y-6"
>
  <p>
    I graduated from Phillips Exeter Academy, Stanford University, and earned my Ph.D. from Yale.
  </p>
  <p>
    I spent 10 years in Africa, including two years in Nigeria during the Biafran War, and another 
    ten years in Latin America, four of which were spent during the Nicaraguan Civil War.
  </p>
  <p>
    Both conflicts taught me how quickly societies can unravel. The next global collapse might not 
    be far off. An MIT study predicted that global economic growth will halt by 2030, and a rapid 
    decline will begin around 2040, a finding confirmed by a KPMG study.
  </p>
  <p>
    At Exeter, I was trained to think critically and create. I didn't waste time on empty 
    standardized tests. Exeter believed in great teachers, not mediocre curriculums. In my time 
    there, the school flunked or expelled 30-40% of its four-year students. It wasn't a daycare; 
    it prepared us intellectually and emotionally far better for a failing world than anything 
    available today.
  </p>
  <p>
    Exeter taught me to give my best in everything—intellectually, socially, physically, and even 
    spiritually. It taught me to fail, get up, and try again. Africa reinforced these lessons. 
    Both experiences ignited in me a hunger for big ideas and the courage to believe in them.
  </p>
</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;