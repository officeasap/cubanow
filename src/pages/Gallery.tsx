
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection="gallery" />
      
      <main className="pt-16">
        <Gallery />
      </main>
      
      <Footer />
    </div>
  );
};

export default GalleryPage;
