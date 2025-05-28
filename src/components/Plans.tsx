
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Plans = () => {
  const plans = [
    {
      name: "4-Week Intensive",
      price: "$12,500",
      originalPrice: "$15,625",
      duration: "4 weeks",
      highlights: [
        "Academic Excellence Foundation",
        "Basic Resilience Training",
        "Cultural Immersion",
        "Spanish Language Basics",
        "Boxing Introduction",
        "Music & Dance Workshops"
      ]
    },
    {
      name: "6-Week Elite",
      price: "$18,750",
      originalPrice: "$23,440",
      duration: "6 weeks",
      highlights: [
        "Advanced Academic Preparation",
        "Comprehensive Resilience Training",
        "Deep Cultural Integration",
        "Spanish Fluency Development",
        "Advanced Boxing Techniques",
        "Music Production & Performance",
        "Leadership Development"
      ],
      featured: true
    },
    {
      name: "8-Week Mastery",
      price: "$25,000",
      originalPrice: "$31,250",
      duration: "8 weeks",
      highlights: [
        "Ivy-League Entrance Preparation",
        "Master-Level Resilience Training",
        "Complete Cultural Mastery",
        "Spanish Fluency Certification",
        "Boxing Competition Training",
        "Music Recording Project",
        "Mentorship Program",
        "Personal Development Portfolio"
      ]
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mb-6">
            Plans & Pricing
          </h2>
          <p className="text-xl text-[#717171] max-w-3xl mx-auto">
            Choose the perfect program to transform your child's future. Early bird discount available - save 20%!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`p-8 hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white curved-shadow relative ${
                plan.featured ? 'ring-2 ring-[#28A030]' : ''
              }`}
              style={{ 
                borderRadius: '14px', 
                boxShadow: '0 8px 16px rgba(39, 39, 39, 0.4), 0 12px 24px rgba(39, 39, 39, 0.2)' 
              }}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#28A030] text-white px-4 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#222222] mb-4">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-[#28A030]">{plan.price}</span>
                  <span className="text-lg text-gray-500 line-through ml-2">{plan.originalPrice}</span>
                </div>
                <p className="text-[#717171]">{plan.duration}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.highlights.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="text-[#28A030] mr-2">✓</span>
                    <span className="text-[#717171]">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/payment">
                <Button
                  className={`w-full py-4 text-lg font-medium transition-all duration-200 ${
                    plan.featured 
                      ? 'bg-[#28A030] hover:bg-[#1e8026] text-white' 
                      : 'bg-white border-2 border-[#28A030] text-[#28A030] hover:bg-[#28A030] hover:text-white'
                  }`}
                  style={{ borderRadius: '12px' }}
                >
                  Choose Plan
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="inline-block p-8 hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white curved-shadow" style={{ borderRadius: '14px', boxShadow: '0 8px 16px rgba(39, 39, 39, 0.4), 0 12px 24px rgba(39, 39, 39, 0.2)' }}>
            <h3 className="text-2xl font-bold text-[#222222] mb-4">Why Choose CUBA NOW?</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-[#28A030] mb-2">15</div>
                <p className="text-[#717171]">Students Per Session</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#28A030] mb-2">1:3</div>
                <p className="text-[#717171]">Staff to Student Ratio</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#28A030] mb-2">20%</div>
                <p className="text-[#717171]">Early Bird Savings</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Plans;
