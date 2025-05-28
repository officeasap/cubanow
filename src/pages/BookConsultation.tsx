
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BookConsultation from '@/components/BookConsultation';

const BookConsultationPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection="book-consultation" />
      
      <main className="pt-16">
        <BookConsultation />
      </main>
      
      <Footer />
    </div>
  );
};

export default BookConsultationPage;
