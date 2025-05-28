
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';

const Photos = () => {
  const photoSections = [
   {
  title: "Academic Excellence",
  images: [
    "/images/Middleschoolrookie.png", // Replace with your actual file names
    "/images/academicexcellence.png"
  ]
},
    {
      title: "Cultural Immersion",
      images: [
         "/images/Learningguitarlicksfromthepros.png", // Replace with your actual file names
    "/images/GrammyAwardProducer.png"
  ]
    },
    {
      title: "Physical Training",
      images: [
         "/images/physicaltraining.png", // Replace with your actual file names
    "/images/photo1.png"
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
              Photo Gallery
            </h1>
            <p className="text-xl text-[#717171] max-w-3xl mx-auto">
              Witness the transformative moments that define the CUBA NOW experience.
            </p>
          </div>

          {photoSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-16">
              <h2 className="text-3xl font-bold text-[#222222] mb-8 text-center">{section.title}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {section.images.map((image, imageIndex) => (
                  <Card 
                    key={imageIndex}
                    className="overflow-hidden hover:scale-105 transition-transform duration-300 group cursor-pointer animate-bounce-subtle bg-white curved-shadow"
                    style={{ borderRadius: '14px', boxShadow: '0 12px 20px rgba(64, 64, 64, 0.4), 0 16px 32px rgba(64, 64, 64, 0.2)' }}
                  >
                    <div className="relative">
                      <img
                        src={image}
                        alt={`${section.title} ${imageIndex + 1}`}
                        className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <h3 className="text-white text-xl font-bold text-center px-4">{section.title}</h3>
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

export default Photos;
