
import React from 'react';
import { Card } from '@/components/ui/card';

const Gallery = () => {
  const galleryImages = [
    {
      src: "public/images/GrammyAwardProducer.png",
  alt: "Grammy Award Producer",
  title: "Grammy Award Producer"
   },
    {
       src: "public/images/Learningguitarlicksfromthepros.png",
  alt: "Learning Guitar Licks from the Pros",
  title: "Learning Guitar Licks from the Pros"
  },
    {
     src: "public/images/Invasivespeciesremoval.png",
  alt: "Invasive Species Removal",
  title: "Breathtaking Landscapes"
   },
    {
      src: "public/images/Blacksmithsworkshop.png",
  alt: "Blacksmith's Workshop",
  title: "Blacksmith's Workshop"
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mb-6">
            Experience Gallery
          </h2>
          <p className="text-xl text-[#717171] max-w-3xl mx-auto">
            See the incredible environments where learning comes alive through immersive experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:scale-105 transition-transform duration-300 group cursor-pointer animate-bounce-subtle bg-[#404040] curved-shadow"
              style={{ borderRadius: '12px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3), 0 12px 24px rgba(0, 0, 0, 0.15)' }}
            >
              <div className="relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white text-lg font-bold text-center px-4">{image.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 text-center hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-[#404040] curved-shadow" style={{ borderRadius: '12px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3), 0 12px 24px rgba(0, 0, 0, 0.15)' }}>
            <div className="text-[#28A030] text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-white mb-4">Interactive Learning</h3>
            <p className="text-gray-300">
              Classroom sessions take place in historic locations, museums, and cultural centers throughout Cuba.
            </p>
          </Card>

          <Card className="p-8 text-center hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-[#404040] curved-shadow" style={{ borderRadius: '12px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3), 0 12px 24px rgba(0, 0, 0, 0.15)' }}>
            <div className="text-[#28A030] text-4xl mb-4">🎭</div>
            <h3 className="text-xl font-bold text-white mb-4">Cultural Activities</h3>
            <p className="text-gray-300">
              Participate in traditional music, dance, art workshops led by local Cuban artists and masters.
            </p>
          </Card>

          <Card className="p-8 text-center hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-[#404040] curved-shadow" style={{ borderRadius: '12px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3), 0 12px 24px rgba(0, 0, 0, 0.15)' }}>
            <div className="text-[#28A030] text-4xl mb-4">🌊</div>
            <h3 className="text-xl font-bold text-white mb-4">Adventure Excursions</h3>
            <p className="text-gray-300">
              Explore Cuba's natural wonders from pristine beaches to lush mountains and historic cities.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
