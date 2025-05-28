
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PaymentPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('6-week-elite');

  const plans = [
    {
      id: '4-week-intensive',
      name: '4-Week Intensive',
      price: '$12,500',
      originalPrice: '$15,625',
      duration: '4 weeks'
    },
    {
      id: '6-week-elite',
      name: '6-Week Elite',
      price: '$18,750',
      originalPrice: '$23,440',
      duration: '6 weeks',
      featured: true
    },
    {
      id: '8-week-mastery',
      name: '8-Week Mastery',
      price: '$25,000',
      originalPrice: '$31,250',
      duration: '8 weeks'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection="payment" />
      
      <main className="pt-16">
        <div className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mb-6">
                Secure Payment
              </h2>
              <p className="text-xl text-[#717171] max-w-3xl mx-auto">
                Complete your enrollment for the ultimate Ivy-League summer camp experience in Cuba.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Plan Selection */}
              <Card 
                className="p-8 hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white"
                style={{ 
                  borderRadius: '16px', 
                  boxShadow: '0 12px 20px rgba(39, 39, 39, 0.4), 0 16px 32px rgba(39, 39, 39, 0.2)' 
                }}
              >
                <h3 className="text-2xl font-bold text-[#28A030] mb-6">Select Your Plan</h3>
                <div className="space-y-4">
                  {plans.map((plan) => (
                    <div 
                      key={plan.id}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-colors duration-200 ${
                        selectedPlan === plan.id 
                          ? 'border-[#28A030] bg-green-50' 
                          : 'border-gray-300 hover:border-[#28A030]'
                      }`}
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-bold text-[#222222]">{plan.name}</h4>
                          <p className="text-[#717171] text-sm">{plan.duration}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-[#28A030]">{plan.price}</span>
                          <span className="text-sm text-gray-500 line-through ml-2">{plan.originalPrice}</span>
                        </div>
                      </div>
                      {plan.featured && (
                        <div className="mt-2">
                          <span className="bg-[#28A030] text-white px-2 py-1 rounded text-xs font-bold">
                            Most Popular
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Card>

              {/* Payment Form */}
              <Card 
                className="p-8 hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white"
                style={{ 
                  borderRadius: '16px', 
                  boxShadow: '0 12px 20px rgba(39, 39, 39, 0.4), 0 16px 32px rgba(39, 39, 39, 0.2)' 
                }}
              >
                <h3 className="text-2xl font-bold text-[#28A030] mb-6">Payment Information</h3>
                <form className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h4 className="font-semibold text-[#222222] mb-4">Personal Information</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#222222] mb-2">First Name</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#28A030] focus:border-transparent"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#222222] mb-2">Last Name</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#28A030] focus:border-transparent"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-[#222222] mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#28A030] focus:border-transparent"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-[#222222] mb-2">Phone</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#28A030] focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div>
                    <h4 className="font-semibold text-[#222222] mb-4">Payment Method</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-[#222222] mb-2">Card Number</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#28A030] focus:border-transparent"
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-[#222222] mb-2">Expiry Date</label>
                          <input 
                            type="text" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#28A030] focus:border-transparent"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#222222] mb-2">CVV</label>
                          <input 
                            type="text" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#28A030] focus:border-transparent"
                            placeholder="123"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Billing Address */}
                  <div>
                    <h4 className="font-semibold text-[#222222] mb-4">Billing Address</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-[#222222] mb-2">Address</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#28A030] focus:border-transparent"
                          placeholder="123 Main Street"
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-[#222222] mb-2">City</label>
                          <input 
                            type="text" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#28A030] focus:border-transparent"
                            placeholder="New York"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#222222] mb-2">ZIP Code</label>
                          <input 
                            type="text" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#28A030] focus:border-transparent"
                            placeholder="10001"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-[#28A030] hover:bg-[#1e8026] text-white py-4 text-lg font-medium transition-all duration-200"
                    style={{ borderRadius: '16px' }}
                  >
                    Complete Payment
                  </Button>
                </form>
              </Card>
            </div>

            {/* Security Notice */}
            <div className="mt-12 text-center">
              <Card 
                className="inline-block p-6 hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white"
                style={{ 
                  borderRadius: '16px', 
                  boxShadow: '0 12px 20px rgba(39, 39, 39, 0.4), 0 16px 32px rgba(39, 39, 39, 0.2)' 
                }}
              >
                <div className="flex items-center justify-center gap-4 text-[#717171]">
                  <span className="text-2xl">🔒</span>
                  <p>Your payment information is secure and encrypted</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PaymentPage;
