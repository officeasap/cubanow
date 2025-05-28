
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavigationProps {
  activeSection: string;
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    { id: 'home', label: 'Home', path: '/' },
    { 
      id: 'about', 
      label: 'About',
      path: '/about',
      submenu: [
        { id: 'who-is-it-for', label: 'Who is it for?', path: '/about/who-is-it-for' },
        { id: 'rules-requirements', label: 'Rules & Requirements', path: '/about/rules-requirements' },
        { id: 'daily-schedule', label: 'Daily Schedule', path: '/about/daily-schedule' },
        { id: 'critical-thinking', label: 'Critical Thinking', path: '/about/critical-thinking' },
        { id: 'boxing', label: 'Boxing', path: '/about/boxing' },
        { id: 'music-preservation', label: 'Music Preservation', path: '/about/music-preservation' },
        { id: 'afro-cuban-religion', label: 'Afro-Cuban Religion', path: '/about/afro-cuban-religion' },
      ]
    },
    { id: 'plans', label: 'Plans & Pricing', path: '/plans' },
    { 
      id: 'team', 
      label: 'Team',
      path: '/team',
      submenu: [
        { id: 'team-main', label: 'Team', path: '/team' },
        { id: 'special-guests', label: 'Special Guests', path: '/team/special-guests' },
      ]
    },
    { 
      id: 'gallery', 
      label: 'Gallery',
      path: '/gallery',
      submenu: [
        { id: 'photos', label: 'Photos', path: '/gallery/photos' },
        { id: 'videos', label: 'Videos', path: '/gallery/videos' },
      ]
    },
    { id: 'testimonials', label: 'Testimonials', path: '/testimonials' },
    { id: 'contact', label: 'Contact', path: '/contact' },
    { id: 'book-consultation', label: 'Book Consultation', path: '/book-consultation' },
  ];

  const handleDropdownToggle = (itemId: string) => {
    setActiveDropdown(activeDropdown === itemId ? null : itemId);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100" style={{ boxShadow: '0 4px 8px rgba(39, 39, 39, 0.15)' }}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
     <div className="flex-shrink-0">
  <Link to="/" className="flex items-center space-x-2">
    <h1 className="text-2xl font-bold mb-0">
      <span style={{ color: '#28A030' }}>C</span>UBA
      <span style={{ color: '#28A030' }}> N</span>O
      <span style={{ color: '#28A030' }}>W</span>
    </h1>
  </Link>
</div>
          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {menuItems.map((item) => (
                <div key={item.id} className="relative group">
                  {item.submenu ? (
                    <div className="relative">
                      <Button
                        onClick={() => handleDropdownToggle(item.id)}
                        className={`px-4 py-2 text-sm font-medium transition-colors duration-200 flex items-center ${
                          activeSection === item.id
                            ? 'bg-[#28A030] text-white'
                            : 'bg-[#28A030] text-white hover:bg-[#1e8026]'
                        }`}
                        style={{ borderRadius: '19px' }}
                      >
                        {item.label}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                      {activeDropdown === item.id && (
                        <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 z-50">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.id}
                              to={subItem.path}
                              className="block px-4 py-3 text-sm text-[#717171] hover:text-[#222222] hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link to={item.path}>
                      <Button
                        className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                          activeSection === item.id
                            ? 'bg-[#28A030] text-white'
                            : 'bg-[#28A030] text-white hover:bg-[#1e8026]'
                        }`}
                        style={{ borderRadius: '19px' }}
                      >
                        {item.label}
                      </Button>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="border-[#717171] text-[#717171] hover:bg-[#28A030] hover:text-white"
              style={{ borderRadius: '19px' }}
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              {menuItems.map((item) => (
                <div key={item.id}>
                  <Link
                    to={item.path}
                    className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 ${
                      activeSection === item.id
                        ? 'text-[#28A030] bg-green-50'
                        : 'text-[#717171] hover:text-[#222222] hover:bg-gray-50'
                    }`}
                    style={{ borderRadius: '19px' }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.id}
                          to={subItem.path}
                          className="block px-3 py-2 text-sm text-[#717171] hover:text-[#222222] hover:bg-gray-50"
                          style={{ borderRadius: '19px' }}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
