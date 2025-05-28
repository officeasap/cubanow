
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';

const Videos = () => {
  const videoSections = [
    {
      title: "Academic Excellence in Action",
      videos: [
           "/videos/vid1.mp4",
          "/videos/vid2.mp4"
     ]
    },
    {
      title: "Cultural Immersion Journey",
      videos: [
       "/videos/vid1.mp4",
          "/videos/vid2.mp4"
     ]
    },
    {
      title: "Resilience & Boxing Training",
      videos: [
       "/videos/vid1.mp4",
          "/videos/vid2.mp4"
     ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection="gallery" />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-[#222222] mb-6">
              Video Gallery
            </h1>
            <p className="text-xl text-[#717171] max-w-3xl mx-auto">
              Experience the transformative moments of CUBA NOW through our immersive video content.
            </p>
          </div>

          {videoSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-16">
              <h2 className="text-3xl font-bold text-[#222222] mb-8 text-center">{section.title}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {section.videos.map((video, videoIndex) => (
                  <Card 
                    key={videoIndex}
                    className="overflow-hidden hover:scale-105 transition-transform duration-300 group cursor-pointer animate-bounce-subtle bg-white curved-shadow"
                    style={{ borderRadius: '14px', boxShadow: '0 8px 16px rgba(64, 64, 64, 0.3), 0 12px 24px rgba(64, 64, 64, 0.15)' }}
                  >
                  <div className="relative">
  <video
    src={video}
    controls
    className="w-full h-96 object-cover rounded-lg"
  >
    Your browser does not support the video tag.
  </video>
  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
    <div className="bg-[#28A030] text-white p-4 rounded-full">
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
      </svg>
    </div>
  </div>
  <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
    Video Preview
  </div>
</div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Videos;
