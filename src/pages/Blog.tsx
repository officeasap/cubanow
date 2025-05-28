
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Blog from '@/components/Blog';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection="blog" />
      
      <main className="pt-16">
        <Blog />
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
