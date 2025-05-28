
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';

const ProjectDetailsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection="project-details" />
      
      <main className="pt-16">
        <div className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mb-6">
                Project Details
              </h2>
              <p className="text-xl text-[#717171] max-w-3xl mx-auto">
                Comprehensive UI/UX specifications and design guidelines for CUBA NOW Summer Camp 2025 website.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {/* Color Palette */}
              <Card 
                className="p-8 hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white"
                style={{ 
                  borderRadius: '16px', 
                  boxShadow: '0 12px 20px rgba(39, 39, 39, 0.4), 0 16px 32px rgba(39, 39, 39, 0.2)' 
                }}
              >
                <h3 className="text-2xl font-bold text-[#28A030] mb-6">Color Palette</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#28A030]"></div>
                    <span className="text-[#717171]">#28A030 - Primary Green</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#1e8026]"></div>
                    <span className="text-[#717171]">#1e8026 - Hover Green</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#222222]"></div>
                    <span className="text-[#717171]">#222222 - Primary Text</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#717171]"></div>
                    <span className="text-[#717171]">#717171 - Secondary Text</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#272727]"></div>
                    <span className="text-[#717171]">#272727 - Shadow Color</span>
                  </div>
                </div>
              </Card>

              {/* Typography */}
              <Card 
                className="p-8 hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white"
                style={{ 
                  borderRadius: '16px', 
                  boxShadow: '0 12px 20px rgba(39, 39, 39, 0.4), 0 16px 32px rgba(39, 39, 39, 0.2)' 
                }}
              >
                <h3 className="text-2xl font-bold text-[#28A030] mb-6">Typography</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#222222] mb-2">Font Family</h4>
                    <p className="text-[#717171]">Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#222222] mb-2">Headings</h4>
                    <p className="text-[#717171]">Bold weight, #222222 color</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#222222] mb-2">Body Text</h4>
                    <p className="text-[#717171]">Regular weight, #717171 color</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#222222] mb-2">Accents</h4>
                    <p className="text-[#717171]">#28A030 for highlights and CTAs</p>
                  </div>
                </div>
              </Card>

              {/* Layout & Spacing */}
              <Card 
                className="p-8 hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white"
                style={{ 
                  borderRadius: '16px', 
                  boxShadow: '0 12px 20px rgba(39, 39, 39, 0.4), 0 16px 32px rgba (39, 39, 39, 0.2)' 
                }}
              >
                <h3 className="text-2xl font-bold text-[#28A030] mb-6">Layout & Spacing</h3>
                <div className="space-y-4 text-[#717171]">
                  <p><strong>Max Width:</strong> 7xl (1280px) for main containers</p>
                  <p><strong>Padding:</strong> 4-8 spacing units (16-32px)</p>
                  <p><strong>Section Spacing:</strong> py-20 (80px vertical)</p>
                  <p><strong>Grid Gaps:</strong> 8 spacing units (32px)</p>
                  <p><strong>Card Padding:</strong> 6-8 spacing units (24-32px)</p>
                </div>
              </Card>

              {/* Border Radius & Shadows */}
              <Card 
                className="p-8 hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white"
                style={{ 
                  borderRadius: '16px', 
                  boxShadow: '0 12px 20px rgba(39, 39, 39, 0.4), 0 16px 32px rgba(39, 39, 39, 0.2)' 
                }}
              >
                <h3 className="text-2xl font-bold text-[#28A030] mb-6">Border Radius & Shadows</h3>
                <div className="space-y-4 text-[#717171]">
                  <p><strong>Buttons:</strong> 12px-19px border-radius</p>
                  <p><strong>Cards:</strong> 14px-16px border-radius</p>
                  <p><strong>Images:</strong> 12px-16px border-radius</p>
                  <p><strong>Shadow Color:</strong> rgba(39, 39, 39, 0.4)</p>
                  <p><strong>Secondary Shadow:</strong> rgba(39, 39, 39, 0.2)</p>
                </div>
              </Card>

              {/* Hover Effects */}
              <Card 
                className="p-8 hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white"
                style={{ 
                  borderRadius: '16px', 
                  boxShadow: '0 12px 20px rgba(39, 39, 39, 0.4), 0 16px 32px rgba(39, 39, 39, 0.2)' 
                }}
              >
                <h3 className="text-2xl font-bold text-[#28A030] mb-6">Hover Effects</h3>
                <div className="space-y-4 text-[#717171]">
                  <p><strong>Scale:</strong> 1.05 transform on hover</p>
                  <p><strong>Duration:</strong> 300ms transition</p>
                  <p><strong>Easing:</strong> ease-out timing function</p>
                  <p><strong>Bounce Animation:</strong> Subtle bounce effect</p>
                  <p><strong>Color Transitions:</strong> 200ms duration</p>
                </div>
              </Card>

              {/* Brand Guidelines */}
              <Card 
                className="p-8 hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white"
                style={{ 
                  borderRadius: '16px', 
                  boxShadow: '0 12px 20px rgba(39, 39, 39, 0.4), 0 16px 32px rgba(39, 39, 39, 0.2)' 
                }}
              >
                <h3 className="text-2xl font-bold text-[#28A030] mb-6">Brand Guidelines</h3>
                <div className="space-y-4 text-[#717171]">
                  <p><strong>Logo:</strong> CUBA NOW with C, N, W in #28A030</p>
                  <p><strong>Tone:</strong> Professional, authoritative, inspiring</p>
                  <p><strong>Visual Style:</strong> Clean, modern, premium</p>
                  <p><strong>Photography:</strong> High-quality, cultural immersion</p>
                  <p><strong>Icons:</strong> Lucide React icons, consistent sizing</p>
                </div>
              </Card>
            </div>

            {/* Technical Specifications */}
            <Card 
              className="p-8 hover:scale-105 transition-transform duration-300 animate-bounce-subtle bg-white"
              style={{ 
                borderRadius: '16px', 
                boxShadow: '0 12px 20px rgba(39, 39, 39, 0.4), 0 16px 32px rgba(39, 39, 39, 0.2)' 
              }}
            >
              <h3 className="text-2xl font-bold text-[#28A030] mb-6">Technical Specifications</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-[#222222] mb-4">Framework & Tools</h4>
                  <ul className="space-y-2 text-[#717171]">
                    <li>• React with TypeScript</li>
                    <li>• Tailwind CSS for styling</li>
                    <li>• Shadcn/ui components</li>
                    <li>• React Router for navigation</li>
                    <li>• Lucide React for icons</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#222222] mb-4">Performance & SEO</h4>
                  <ul className="space-y-2 text-[#717171]">
                    <li>• Responsive design (mobile-first)</li>
                    <li>• Optimized images and assets</li>
                    <li>• Smooth scrolling behavior</li>
                    <li>• Accessibility compliance</li>
                    <li>• Fast loading animations</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetailsPage;
