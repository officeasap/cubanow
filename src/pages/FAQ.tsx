
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection="faq" />
      
      <main className="pt-16">
        <FAQ />
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQPage;
