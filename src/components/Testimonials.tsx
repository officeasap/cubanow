
import React from 'react';
import { Card } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Victor Zhang",
      age: "13 years old",
      location: "Shenzhen, China",
      quote: "I'm less anxious and calmer now. I've accepted that I will face challenges—both in boxing and in life—but I'm now prepared to fight back.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Muxi Yao",
      age: "13 years old", 
      location: "Shenzhen, China",
      quote: "I learned that the Santería faith is passed down orally, and the ceremonies and rites are incredibly significant... they felt so mysterious.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Emma Rodriguez",
      school: "Princeton University '25",
      quote: "The small group size meant I got personal attention from world-class mentors. The program prepared me for success both academically and personally.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "David Thompson",
      school: "Stanford University '24",
      quote: "Living with Cuban families and learning their culture taught me empathy and global awareness that I use every day. An unforgettable experience.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Isabella Martinez",
      school: "Columbia University '23",
      quote: "The leadership training and resilience bootcamp gave me skills that go far beyond college preparation. I'm more confident than ever.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "James Wilson",
      school: "MIT '25",
      quote: "The academic rigor combined with real-world application made learning incredibly engaging. The Spanish fluency I gained has been invaluable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-[#717171] max-w-3xl mx-auto">
            Hear from our alumni who are now thriving at the world's top universities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white curved-shadow"
              style={{ borderRadius: '14px', boxShadow: '0 8px 16px rgba(39, 39, 39, 0.4), 0 12px 24px rgba(39, 39, 39, 0.2)' }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#28A030] text-xl">★</span>
                  ))}
                </div>
              </div>
              
              <p className="text-[#717171] mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="border-t pt-4">
                <h4 className="font-bold text-[#222222]">{testimonial.name}</h4>
                {testimonial.age && testimonial.location && (
                  <p className="text-[#717171] text-sm">{testimonial.age} ~ {testimonial.location}</p>
                )}
                {testimonial.school && (
                  <p className="text-[#717171] text-sm">{testimonial.school}</p>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="inline-block p-8 hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white curved-shadow" style={{ borderRadius: '14px', boxShadow: '0 8px 16px rgba(39, 39, 39, 0.4), 0 12px 24px rgba(39, 39, 39, 0.2)' }}>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-[#28A030] mb-2">95%</div>
                <p className="text-[#717171]">Ivy-League Acceptance Rate</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#28A030] mb-2">100%</div>
                <p className="text-[#717171]">Would Recommend</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#28A030] mb-2">4.9</div>
                <p className="text-[#717171]">Average Rating</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
