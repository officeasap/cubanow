
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection="contact" />
      
      <main className="pt-16">
        <div className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mb-6">
                Contact Us
              </h2>
              <p className="text-xl text-[#717171] max-w-3xl mx-auto">
                Ready to transform your future? Get in touch with our admissions team.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Contact Information */}
              <Card 
                className="p-8 hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white"
                style={{ 
                  borderRadius: '16px', 
                  boxShadow: '0 12px 20px rgba(39, 39, 39, 0.4), 0 16px 32px rgba(39, 39, 39, 0.2)' 
                }}
              >
                <h3 className="text-2xl font-bold text-[#28A030] mb-6">Get In Touch</h3>
                <div className="space-y-4 text-[#717171]">
                  <div>
                    <h4 className="font-semibold text-[#222222] mb-2">Admissions Office</h4>
                    <p>📧 admissions@cubanowexperience.com</p>
                    <p>📧 adersh@cubanowexperience.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#222222] mb-2">Phone</h4>
                    <p>📞 +861 73280 89948</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#222222] mb-2">Address</h4>
                    <p>🏢 123 Education Plaza<br />Miami, FL 33101</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#222222] mb-2">Office Hours</h4>
                    <p>🕒 Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>
              </Card>

              {/* Contact Form */}
              <Card 
                className="p-8 hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white"
                style={{ 
                  borderRadius: '16px', 
                  boxShadow: '0 12px 20px rgba(39, 39, 39, 0.4), 0 16px 32px rgba(39, 39, 39, 0.2)' 
                }}
              >
                <h3 className="text-2xl font-bold text-[#28A030] mb-6">Send Us a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#222222] mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#28A030] focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#222222] mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#28A030] focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#222222] mb-2">Subject</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#28A030] focus:border-transparent"
                      placeholder="What can we help you with?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#222222] mb-2">Message</label>
                    <textarea 
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#28A030] focus:border-transparent"
                      placeholder="Tell us about your interest in CUBA NOW..."
                    ></textarea>
                  </div>
                  <Button
                    className="w-full bg-[#28A030] hover:bg-[#1e8026] text-white py-3 font-medium transition-all duration-200"
                    style={{ borderRadius: '12px' }}
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Emergency Contact */}
            <div className="text-center">
              <Card 
                className="inline-block p-8 hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white"
                style={{ 
                  borderRadius: '16px', 
                  boxShadow: '0 12px 20px rgba(39, 39, 39, 0.4), 0 16px 32px rgba(39, 39, 39, 0.2)' 
                }}
              >
                <h3 className="text-2xl font-bold text-[#222222] mb-4">Need Immediate Assistance?</h3>
                <p className="text-[#717171] mb-6">
                  For urgent inquiries or immediate support, schedule a consultation with our team.
                </p>
                <Button
                  className="bg-[#28A030] hover:bg-[#1e8026] text-white px-8 py-3 text-lg font-medium transition-all duration-200"
                  style={{ borderRadius: '16px' }}
                >
                  Schedule Consultation
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
