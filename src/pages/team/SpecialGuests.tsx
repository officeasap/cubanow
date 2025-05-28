
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';

const SpecialGuests = () => {
  const specialGuests = [
    {
      name: "Jose Luis Marrero Pereira",
      title: "Master Guitarist / Leader of Los Brillantes",
     // education: "Havana Conservatory"  
       image: "/images/joseluismarreropereira.png", // Use your local image here "
      bio: "José is a highly respected Cuban guitarist whose lifetime of musical mastery and cultural preservation work makes him an invaluable mentor for students seeking to understand the depth of Cuban artistic tradition.",
     //  contact: "pereira@cubanowexperience.com"
     // socials: ["Facebook", "Twitter", "LinkedIn"]
    },
    {
      name: "Lliny Alfonso Collado",
      title: "Music Teacher / Established Singer / Head Teacher of the Camp",
      //education: "Cuban National Arts Institute" 
     image: "/images/llinyalfonsocollado.png", // Use your local image here "
      bio: "Lliny is an accomplished music teacher and singer, whose expertise in traditional Cuban music and pedagogical excellence ensures students receive world-class instruction in cultural arts.",
    //  contact: "lliny@cubanowexperience.com"
     // socials: ["Facebook", "Twitter", "LinkedIn"]
    },
    {
      name: "Rubén López Arista",
      title: "Grammy Award-Winning Music Producer",
     // education: "International Music Production Certified"
     image: "/images/rubenlopezarista.png", // Use your local image here "
      bio: "Rubén is a highly accomplished music producer, known for his Grammy Award-winning work and deep understanding of both traditional and contemporary Cuban music production techniques.",
     // contact: "arista@cubanowexperience.com"
    // socials: ["Facebook", "Twitter", "LinkedIn"]
    },
    {
      name: "Adersh Abbas",
      title: "Tech Lead ICT & Programming specialist | Ivy League alumni (UPenn)",
     // education: "University of Pennsylvania"
     image: "/images/adershabbas.png", // Use your local image here "
      bio: "Adersh brings a unique blend of technical expertise and educational experience, helping students understand how technology and innovation can enhance cultural preservation and academic excellence.",
    //  contact: "adersh@cubanowexperience.com"
    //  socials: ["Facebook", "Twitter", "LinkedIn"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection="team" />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-[#222222] mb-6">
              Special Guests & Cultural Masters
            </h1>
            <p className="text-xl text-[#717171] max-w-3xl mx-auto">
              Meet the extraordinary individuals who will share their wisdom and expertise throughout your journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {specialGuests.map((guest, index) => (
              <Card 
                key={index}
                className="p-8 hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white curved-shadow"
                style={{ borderRadius: '14px', boxShadow: '0 8px 16px rgba(39, 39, 39, 0.4), 0 12px 24px rgba(39, 39, 39, 0.2)' }}
              >
                <div className="flex items-start gap-6">
                  <div className="relative flex-shrink-0">
                    <img
                      src={guest.image}
                      alt={guest.name}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="bg-[#28A030] text-white px-3 py-1 rounded-full text-xs font-medium">
                        Special Guest
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#222222] mb-2">{guest.name}</h3>
                    <p className="text-[#28A030] font-medium mb-2">{guest.title}</p>
                 
                    <p className="text-[#717171] text-sm leading-relaxed mb-4">{guest.bio}</p>
                    
                    <div className="space-y-2">
                      <p className="text-sm">
                        <strong className="text-[#222222]"> </strong> 
                    
                      </p>
                    <div className="flex items-center gap-2">
                      <strong className="text-[#222222] text-sm"> </strong>
                      {/* Social links can be added here in the future */}
                    </div>
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

export default SpecialGuests;
