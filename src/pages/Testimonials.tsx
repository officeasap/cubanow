
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection="testimonials" />
      
      <main className="pt-16">
        <Testimonials />
      </main>
      
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
