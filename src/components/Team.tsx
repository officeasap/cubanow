
import React from 'react';
import { Card } from '@/components/ui/card';

const Team = () => {
  const teamMembers = [
    {
      name: "Ariel Ernesto Perez Garabito",
      title: "Music producer / Music Teacher",
      //education: "Harvard Ph.D. in Education"
      image: "/images/arielernestoperezgarabito.png", // Use your local image here "
      bio: "With two decades of experience in music production and teaching (piano, guitar, flute, and choir), Ariel brings a wealth of knowledge to the camp. He has performed with Latin bands, jazz fusion groups, decade bands, as well as rock and blues bands. Ariel has been playing piano and singing in church since childhood, further solidifying his deep-rooted connection to music."
    },
    {
      name: "Rodney Jiminez Acosta",
      title: "Assistant Camp Director",
      //education: "Yale B.A., Cuban Studies"
      image: "/images/rodneyjiminezacosta.png", // Use your local image here "
      bio: "As the Assistant Camp Director, Rodney is an integral part of the camp’s success. Known for his friendliness and willingness to help, he brings both his musical expertise and warm, approachable nature to the experience. His deep understanding of Cuban culture makes him a valuable resource for students throughout the camp."
    },
    {
      name: "Samantha Mei",
      title: "China Liason",
     // education: "Princeton Ph.D. Psychology"
      image: "/images/samanthamei.png", // Use your local image here "
      bio: "Samantha has been a crucial pillar of support for the founder and a key figure in the success of this camp. With a strong background in education, entrepreneurship, and international trade, she brings a wealth of experience and insight to the program. Her entrepreneurial spirit and global perspective have been invaluable in shaping the camp's vision, fostering its growth, and ensuring its continued success."
    },
    {
      name: "Natalija Stanivuk",
      title: "Marketing Director / Wellness coach",
     // education: "Stanford M.Ed."
     image: "/images/natalijastanivuk.png", // Use your local image here "
      bio: "As the Art & Creative Director, Nat guides the creative direction of the camp, while also teaching visual art and art history. With years of experience in talent development, training, and intercultural engagement, Nat plays a key role in nurturing the students' personal and creative growth. Additionally, as a certified RYT 200h yoga instructor, Nat integrates mindfulness practices into the camp experience, promoting mental clarity and well-being."
    }
   
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mb-6">
            Our World-Class Team
          </h2>
          <p className="text-xl text-[#717171] max-w-3xl mx-auto">
            Meet the Ivy-League educated professionals who will guide your transformative journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:scale-105 transition-transform duration-300"
              style={{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(39, 39, 39, 0.4), 0 8px 20px rgba(39, 39, 39, 0.2)' }}
            >
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                  style={{ boxShadow: '0 4px 12px rgba(39, 39, 39, 0.15)' }}
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#28A030] text-white px-3 py-1 rounded-full text-xs font-medium">
                    Expert
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-[#222222] mb-2">{member.name}</h3>
              <p className="text-[#28A030] font-medium mb-2">{member.title}</p>
            
              <p className="text-[#717171] text-sm leading-relaxed">{member.bio}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Card className="inline-block p-8 hover:scale-105 transition-transform duration-300" style={{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(39, 39, 39, 0.4), 0 8px 20px rgba(39, 39, 39, 0.2)' }}>
            <h3 className="text-2xl font-bold text-[#222222] mb-4">Why Our Team Matters</h3>
            <p className="text-[#717171] max-w-2xl">
              Every team member is hand-selected for their expertise, passion, and commitment to student success. 
              With a 1:3 staff-to-student ratio, your child receives personalized attention from industry leaders.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Team;
