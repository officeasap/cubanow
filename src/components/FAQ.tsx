
import React from 'react';
import { Card } from '@/components/ui/card';

const FAQ = () => {
  const faqs = [
    {
      question: "What makes CUBA NOW different from other summer programs?",
      answer: "CUBA NOW combines Ivy-League academic preparation with resilience training and authentic Cuban cultural immersion. Our unique approach, led by graduates from Harvard, Yale, and Princeton, focuses on character development alongside academic excellence."
    },
    {
      question: "Is it safe for students to travel to Cuba?",
      answer: "Absolutely. We maintain the highest safety standards with 24/7 supervision, medical support, and established relationships with local authorities. Our program has operated safely for years with zero incidents."
    },
    {
      question: "What is the student-to-staff ratio?",
      answer: "We maintain an exceptional 1:3 staff-to-student ratio, ensuring personalized attention and safety. Each session is limited to just 15 students."
    },
    {
      question: "Do students need to speak Spanish?",
      answer: "No prior Spanish knowledge is required. Our program includes intensive Spanish instruction, and students typically achieve conversational fluency by program completion."
    },
    {
      question: "What academic credentials do your instructors have?",
      answer: "All our lead instructors are graduates of Ivy-League institutions including Harvard, Yale, Princeton, and Stanford. Many have advanced degrees and extensive experience in their fields."
    },
    {
      question: "How does the boxing training enhance academic performance?",
      answer: "Boxing develops mental toughness, discipline, and resilience - qualities that directly translate to academic success. Students learn to face challenges head-on and maintain composure under pressure."
    },
    {
      question: "What is included in the program fee?",
      answer: "The fee includes accommodation, all meals, instruction, materials, excursions, medical support, and round-trip transportation from Miami. The only additional costs are personal items and souvenirs."
    },
    {
      question: "How do you select students for the program?",
      answer: "We look for academically strong students (minimum 3.7 GPA) who are ready for challenge and growth. We conduct interviews to assess motivation, maturity, and cultural sensitivity."
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[#717171] max-w-3xl mx-auto">
            Get answers to the most common questions about CUBA NOW Experience.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card 
              key={index}
              className="p-6 hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white curved-shadow"
              style={{ 
                borderRadius: '14px', 
                boxShadow: '0 8px 16px rgba(39, 39, 39, 0.4), 0 12px 24px rgba(39, 39, 39, 0.2)' 
              }}
            >
              <h3 className="text-xl font-bold text-[#28A030] mb-4">{faq.question}</h3>
              <p className="text-[#717171] leading-relaxed">{faq.answer}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Card className="inline-block p-8 hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white curved-shadow" style={{ borderRadius: '14px', boxShadow: '0 8px 16px rgba(39, 39, 39, 0.4), 0 12px 24px rgba(39, 39, 39, 0.2)' }}>
            <h3 className="text-2xl font-bold text-[#222222] mb-4">Still have questions?</h3>
            <p className="text-[#717171] mb-6">
              Our admissions team is here to help. Schedule a free consultation to learn more.
            </p>
            <button className="bg-[#28A030] hover:bg-[#1e8026] text-white px-8 py-3 text-lg font-medium transition-all duration-200" style={{ borderRadius: '12px' }}>
              Schedule Consultation
            </button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
