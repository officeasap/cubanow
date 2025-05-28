
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';

const DailySchedule = () => {
  const scheduleData = [
    {
      time: "6:00 AM",
      activity: "Morning Mindfulness & Physical Training",
      description: "Start the day with meditation and military-style fitness training"
    },
    {
      time: "7:30 AM",
      activity: "Breakfast & Cultural Immersion",
      description: "Traditional Cuban breakfast with local families"
    },
    {
      time: "9:00 AM",
      activity: "Academic Excellence Workshop",
      description: "Ivy-League preparation sessions with Harvard & Yale alumni"
    },
    {
      time: "11:30 AM",
      activity: "Critical Thinking Masterclass",
      description: "Advanced problem-solving and analytical reasoning"
    },
    {
      time: "1:00 PM",
      activity: "Lunch & Rest Period",
      description: "Authentic Cuban cuisine and siesta time"
    },
    {
      time: "3:00 PM",
      activity: "Boxing & Resilience Training",
      description: "Professional boxing instruction for mental toughness"
    },
    {
      time: "5:00 PM",
      activity: "Music Preservation Workshop",
      description: "Traditional Cuban music and dance with local artists"
    },
    {
      time: "7:00 PM",
      activity: "Dinner & Cultural Exchange",
      description: "Evening meal with Cuban families and storytelling"
    },
    {
      time: "8:30 PM",
      activity: "Afro-Cuban Religion Studies",
      description: "Understanding spiritual traditions and cultural heritage"
    },
    {
      time: "10:00 PM",
      activity: "Reflection & Rest",
      description: "Journal writing and preparation for tomorrow"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection="about" />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-[#222222] mb-6">
              Daily Schedule
            </h1>
            <p className="text-xl text-[#717171] max-w-3xl mx-auto">
              Experience the structured excellence that transforms ordinary students into extraordinary leaders.
            </p>
          </div>

          <div className="space-y-6">
            {scheduleData.map((item, index) => (
              <Card 
                key={index}
                className="p-6 hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white curved-shadow"
                style={{ 
                  borderRadius: '12px', 
                  boxShadow: '0 8px 16px rgba(64, 64, 64, 0.3), 0 12px 24px rgba(64, 64, 64, 0.15)' 
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#28A030] text-white px-4 py-2 rounded-lg font-bold text-lg">
                      {item.time}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#222222]">{item.activity}</h3>
                      <p className="text-[#717171] mt-1">{item.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DailySchedule;
