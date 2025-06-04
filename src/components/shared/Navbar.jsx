'use client'
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Product', hasDropdown: true },
    { name: 'Developers', hasDropdown: true },
    { name: 'Resources', hasDropdown: true },
    { name: 'Company', hasDropdown: true },
    { name: 'Pricing', hasDropdown: false }
  ];

  return (
    <nav className={`w-full px-44 py-4 sticky top-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-[rgb(19_17_28_/_90%)] backdrop-blur-[5px]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 relative">
            <svg viewBox="0 0 32 32" className="w-full h-full">
              <circle cx="16" cy="16" r="15" fill="none" stroke="white" strokeWidth="2" />
              <path d="M8 16h16M12 11l4 5-4 5M20 11l-4 5 4 5" stroke="white" strokeWidth="2" fill="none" />
            </svg>
          </div>
          <span className="text-xl font-medium">AutoGEN</span>
        </div>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <span className="text-sm font-medium">{item.name}</span>
              {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
            </button>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
            Sign in
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors text-sm font-medium">
            Book a demo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
