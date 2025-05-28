
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const BookConsultation = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    email: '',
    phone: '',
    studentAge: '',
    program: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you within 24 hours to schedule your consultation.');
    setFormData({
      parentName: '',
      studentName: '',
      email: '',
      phone: '',
      studentAge: '',
      program: '',
      message: ''
    });
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mb-6">
            Book Your Free Consultation
          </h2>
          <p className="text-xl text-[#717171] max-w-3xl mx-auto">
            Speak with our admissions team to learn how CUBA NOW can transform your child's future.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <Card className="p-8 curved-shadow" style={{ borderRadius: '14px', boxShadow: '0 8px 16px rgba(39, 39, 39, 0.4), 0 12px 24px rgba(39, 39, 39, 0.2)' }}>
            <h3 className="text-2xl font-bold text-[#222222] mb-6">Schedule Your Call</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="parentName" className="block text-sm font-medium text-[#222222] mb-2">
                    Parent/Guardian Name *
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    required
                    value={formData.parentName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#28A030] focus:border-transparent"
                    style={{ borderRadius: '10px' }}
                  />
                </div>
                
                <div>
                  <label htmlFor="studentName" className="block text-sm font-medium text-[#222222] mb-2">
                    Student Name *
                  </label>
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    required
                    value={formData.studentName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#28A030] focus:border-transparent"
                    style={{ borderRadius: '10px' }}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#222222] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#28A030] focus:border-transparent"
                    style={{ borderRadius: '10px' }}
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#222222] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#28A030] focus:border-transparent"
                    style={{ borderRadius: '10px' }}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="studentAge" className="block text-sm font-medium text-[#222222] mb-2">
                    Student Age
                  </label>
                  <select
                    id="studentAge"
                    name="studentAge"
                    value={formData.studentAge}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#28A030] focus:border-transparent"
                    style={{ borderRadius: '10px' }}
                  >
                    <option value="">Select Age</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="program" className="block text-sm font-medium text-[#222222] mb-2">
                    Program Interest
                  </label>
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#28A030] focus:border-transparent"
                    style={{ borderRadius: '10px' }}
                  >
                    <option value="">Select Program</option>
                    <option value="4-week">4-Week Intensive</option>
                    <option value="6-week">6-Week Elite</option>
                    <option value="8-week">8-Week Mastery</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#222222] mb-2">
                  Questions or Special Requests
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#28A030] focus:border-transparent resize-none"
                  style={{ borderRadius: '10px' }}
                  placeholder="Tell us about your child's goals, interests, or any questions you have..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#28A030] hover:bg-[#1e8026] text-white py-4 text-lg font-medium transition-colors duration-200"
                style={{ borderRadius: '10px' }}
              >
                Schedule Free Consultation
              </Button>
            </form>
          </Card>

          {/* Info Panel */}
          <div className="space-y-8">
            <Card className="p-8 hover:scale-105 transition-transform duration-300 animate-bounce-subtle curved-shadow" style={{ borderRadius: '14px', boxShadow: '0 8px 16px rgba(39, 39, 39, 0.4), 0 12px 24px rgba(39, 39, 39, 0.2)' }}>
              <h3 className="text-2xl font-bold text-[#222222] mb-4">What to Expect</h3>
              <ul className="space-y-4 text-[#717171]">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#28A030] rounded-full flex-shrink-0 flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>30-minute one-on-one consultation with our admissions director</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#28A030] rounded-full flex-shrink-0 flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Personalized program recommendations based on your child's goals</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#28A030] rounded-full flex-shrink-0 flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Detailed information about curriculum, safety, and logistics</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#28A030] rounded-full flex-shrink-0 flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Scholarship and financial aid information</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:scale-105 transition-transform duration-300 animate-bounce-subtle curved-shadow" style={{ borderRadius: '14px', boxShadow: '0 8px 16px rgba(39, 39, 39, 0.4), 0 12px 24px rgba(39, 39, 39, 0.2)' }}>
              <h3 className="text-2xl font-bold text-[#222222] mb-4">Contact Information</h3>
              <div className="space-y-3 text-[#717171]">
                <p><strong className="text-[#222222]">Phone:</strong> +861 73280 89948</p>
                <p><strong className="text-[#222222]">Email:</strong> admissions@cubanowexperience.com</p>
                <p><strong className="text-[#222222]">Email:</strong> adersh@cubanowexperience.com</p>
                <p><strong className="text-[#222222]">Hours:</strong> Mon-Fri 9AM-6PM EST</p>
                <p><strong className="text-[#222222]">Emergency:</strong> 24/7 Support Available</p>
              </div>
            </Card>

            <Card className="p-8 bg-[#28A030] text-white hover:scale-105 transition-transform duration-300 animate-bounce-subtle curved-shadow" style={{ borderRadius: '14px', boxShadow: '0 8px 16px rgba(39, 39, 39, 0.4), 0 12px 24px rgba(39, 39, 39, 0.2)' }}>
              <h3 className="text-2xl font-bold mb-4">Limited Time Offer</h3>
              <p className="mb-4">Early Bird pricing ends soon! Secure your spot with a $500 deposit.</p>
              <p className="text-sm opacity-90">Only 15 spots available per session. Don't miss this life-changing opportunity.</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookConsultation;
