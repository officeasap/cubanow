
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const blogPosts = [
    {
      title: "5 Ways Cuban Culture Enhances Academic Performance",
      excerpt: "Discover how immersive cultural experiences boost cognitive development and academic achievement in ways traditional education cannot.",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "The Science Behind Resilience Training",
      excerpt: "Learn how our boxing and mental toughness programs literally rewire the brain for better stress management and decision-making.",
      date: "March 10, 2024", 
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Why Ivy League Schools Value Cultural Intelligence",
      excerpt: "Admissions officers reveal what they really look for in applicants and how global experiences set students apart.",
      date: "March 5, 2024",
      readTime: "6 min read", 
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Student Spotlight: From Cuba to Harvard",
      excerpt: "Follow Maria's journey from shy teenager to confident Harvard freshman and how CUBA NOW transformed her life.",
      date: "February 28, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "The Hidden Benefits of Learning Spanish",
      excerpt: "Research shows bilingual students have significant advantages in college admissions and career prospects.",
      date: "February 20, 2024",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Boxing Your Way to Better Grades",
      excerpt: "How physical training and mental discipline from boxing translate directly to academic performance improvements.",
      date: "February 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mb-6">
            CUBA NOW Blog
          </h2>
          <p className="text-xl text-[#717171] max-w-3xl mx-auto">
            Insights, stories, and expert advice on education, resilience, and cultural immersion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white curved-shadow"
              style={{ borderRadius: '14px', boxShadow: '0 8px 16px rgba(39, 39, 39, 0.4), 0 12px 24px rgba(39, 39, 39, 0.2)' }}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-[#717171] mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-[#28A030] mb-3">{post.title}</h3>
                <p className="text-[#717171] mb-4 leading-relaxed">{post.excerpt}</p>
                <Button
                  className="bg-[#28A030] hover:bg-[#1e8026] text-white px-6 py-2 text-sm font-medium transition-all duration-200"
                  style={{ borderRadius: '10px' }}
                >
                  Read More
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="inline-block p-8 hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white curved-shadow" style={{ borderRadius: '14px', boxShadow: '0 8px 16px rgba(39, 39, 39, 0.4), 0 12px 24px rgba(39, 39, 39, 0.2)' }}>
            <h3 className="text-2xl font-bold text-[#222222] mb-4">Stay Updated</h3>
            <p className="text-[#717171] mb-6">Subscribe to our newsletter for the latest insights and program updates.</p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#28A030] focus:border-transparent"
                style={{ borderRadius: '10px' }}
              />
              <Button
                className="bg-[#28A030] hover:bg-[#1e8026] text-white px-6 py-3 font-medium transition-all duration-200"
                style={{ borderRadius: '10px' }}
              >
                Subscribe
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;
