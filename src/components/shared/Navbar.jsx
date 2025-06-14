'use client'
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Logo from "../../../public/logoAuto.webp"
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const [mounted, setMounted] = useState(false);
  const timeoutRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  // Handle client-side mounting to prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(null);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleMouseEnter = (itemName) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setHoveredItem(itemName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
    }, 150);
  };

  // Smooth scroll to section function
  const scrollToSection = (sectionId) => {
    if (pathname !== '/') {
      router.push(`/#${sectionId}`);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Handle section navigation
  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
    setMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const dropdownContent = {
    Company: {
      sections: [
        {
          title: "",
          items: [
            {
              name: "About Us",
              description: "Learn about our investors and what makes us us",
              icon: "🎯",
              sectionId: "aboutus",
              isSection: true
            },
            {
              name: "Careers",
              description: "Come build the future of software development",
              icon: "💼",
              href: "/careers"
            },
            {
              name: "Security",
              description: "Enterprise-grade security, privacy and compliance",
              icon: "🪪",
              href: "/security"
            }
          ]
        },
        {
          title: "",
          items: [
            {
              name: "Blog",
              description: "Latest stories and insights",
              icon: "📝",
              href: "/blogs"
            },
            {
              name: "Partnerships",
              description: "Join our partner ecosystem",
              icon: "🤝",
              href: "/partnerships"
            },
            {
              name: "Contact",
              description: "For the best way to get in touch with us",
              icon: "🤝",
              sectionId: "contact",
              isSection: true
            }
          ]
        }
      ]
    },

    Resources: {
      sections: [
        {
          title: "",
          items: [
            {
              name: "Docs",
              description: "Documentation for AutoGen",
              icon: "📝",
              href: "/docs"
            },
            {
              name: "Community",
              description: "Connect with the AutoGen community",
              icon: "🤝",
              href: "/community"
            },
            {
              name: "Feature Requests",
              description: "Submit and vote on features you desire",
              icon: "🙏",
              href: "/feature-requests"
            }
          ]
        },
        {
          title: "",
          items: [
            {
              name: "Changelog",
              description: "Latest updates and changes for AutoGen",
              icon: "📊",
              href: "/changelog"
            },
            {
              name: "FAQ",
              description: "Find answers to common questions",
              icon: "❓",
              sectionId: "faq",
              isSection: true
            },
            {
              name: "Events",
              description: "Details on upcoming events and sessions",
              icon: "🌃",
              href: "/events"
            }
          ]
        }
      ]
    },
  };

  const navItems = [
    { name: 'Resources', hasDropdown: true },
    { name: 'Company', hasDropdown: true },
    { name: 'Pricing', hasDropdown: false, sectionId: 'pricing' },
    { name: 'Templates', hasDropdown: false, href: '/templates' },
    { name: 'Components', hasDropdown: false, href: '#' }
  ];

  useEffect(() => {
    if (typeof window !== 'undefined' && pathname === '/') {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setTimeout(() => {
          scrollToSection(hash);
        }, 100);
      }
    }
  }, [pathname]);

  // Toggle mobile dropdown
  const toggleMobileDropdown = (itemName) => {
    setMobileDropdownOpen(mobileDropdownOpen === itemName ? null : itemName);
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <nav className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-44 py-4 fixed top-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image 
              src={Logo} 
              width={24} 
              height={24} 
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" 
              alt='Company Logo' 
              loading='lazy'
            />
            <span className="text-base sm:text-lg md:text-xl font-medium text-white ml-2">
              utoGen Labs
            </span>
          </Link>
          <div className="md:hidden w-12 h-12 flex items-center justify-center">
            <div className="w-6 h-6 bg-white/20 rounded"></div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className={`w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-44 py-4 fixed top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[rgb(19_17_28_/_90%)] backdrop-blur-[5px]' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href={"/"} className="flex items-center">
          <Image 
            src={Logo} 
            width={24} 
            height={24} 
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" 
            alt='Company Logo' 
            loading='lazy'
          />
          <span className="text-base sm:text-lg md:text-xl font-medium text-white ml-2">
            utoGen Labs
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8 relative">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              {item.hasDropdown ? (
                <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors py-2">
                  <span className="text-sm font-medium">{item.name}</span>
                  <ChevronDown 
                    className={`w-3 h-3 transition-transform duration-200 ${
                      hoveredItem === item.name ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
              ) : item.sectionId ? (
                <button 
                  onClick={(e) => handleSectionClick(e, item.sectionId)}
                  className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors py-2"
                >
                  <span className="text-sm font-medium">{item.name}</span>
                </button>
              ) : (
                <Link 
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors py-2"
                >
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              )}

              {/* Desktop Dropdown Menu */}
              {item.hasDropdown && hoveredItem === item.name && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2">
                  <div className="bg-[#0A0A0B] border border-gray-800 rounded-xl shadow-2xl p-6 min-w-[400px] max-w-[500px] xl:min-w-[480px] xl:max-w-[600px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8">
                      {dropdownContent[item.name]?.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                            {section.title}
                          </h3>
                          <div className="space-y-1">
                            {section.items.map((dropdownItem, itemIndex) => (
                              dropdownItem.isSection ? (
                                <button
                                  key={itemIndex}
                                  onClick={(e) => {
                                    handleSectionClick(e, dropdownItem.sectionId);
                                    setHoveredItem(null);
                                  }}
                                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors group w-full text-left"
                                >
                                  <span className="text-lg flex-shrink-0 mt-0.5">{dropdownItem.icon}</span>
                                  <div>
                                    <div className="text-white text-sm font-medium group-hover:text-purple-400 transition-colors">
                                      {dropdownItem.name}
                                    </div>
                                    <div className="text-gray-400 text-xs mt-0.5">
                                      {dropdownItem.description}
                                    </div>
                                  </div>
                                </button>
                              ) : (
                                <Link
                                  key={itemIndex}
                                  href={dropdownItem.href}
                                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors group"
                                  onClick={() => setHoveredItem(null)}
                                >
                                  <span className="text-lg flex-shrink-0 mt-0.5">{dropdownItem.icon}</span>
                                  <div>
                                    <div className="text-white text-sm font-medium group-hover:text-purple-400 transition-colors">
                                      {dropdownItem.name}
                                    </div>
                                    <div className="text-gray-400 text-xs mt-0.5">
                                      {dropdownItem.description}
                                    </div>
                                  </div>
                                </Link>
                              )
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Right Side Actions */}
        <div className="hidden md:flex items-center space-x-3 xl:space-x-4">
          <Link 
            href="#" 
            className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
          >
            Sign in
          </Link>
          <Link 
            href="#"
            className="bg-purple-600 hover:bg-purple-700 px-3 py-2 xl:px-4 xl:py-2 rounded-lg transition-colors text-sm font-medium text-white"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 rounded-lg transition-colors border border-white/20 bg-white/5"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <Menu size={24} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
            style={{ top: '80px' }}
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-20 right-0 bottom-0 w-80 max-w-[85vw] bg-[#0A0A0B] border-l border-gray-800 md:hidden z-40 overflow-y-auto"
          >
            <div className="p-6">
              {/* Mobile Navigation Items */}
              <div className="space-y-4">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => toggleMobileDropdown(item.name)}
                          className="flex items-center justify-between w-full text-left p-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors"
                        >
                          <span className="font-medium">{item.name}</span>
                          <ChevronRight 
                            className={`w-4 h-4 transition-transform duration-200 ${
                              mobileDropdownOpen === item.name ? 'rotate-90' : ''
                            }`} 
                          />
                        </button>
                        
                        {/* Mobile Dropdown Content */}
                        <AnimatePresence>
                          {mobileDropdownOpen === item.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="ml-4 mt-2 space-y-2">
                                {dropdownContent[item.name]?.sections.map((section) =>
                                  section.items.map((dropdownItem, itemIndex) => (
                                    dropdownItem.isSection ? (
                                      <button
                                        key={itemIndex}
                                        onClick={(e) => {
                                          handleSectionClick(e, dropdownItem.sectionId);
                                          setMobileDropdownOpen(null);
                                        }}
                                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors group w-full text-left"
                                      >
                                        <span className="text-base flex-shrink-0 mt-0.5">{dropdownItem.icon}</span>
                                        <div>
                                          <div className="text-white text-sm font-medium group-hover:text-purple-400 transition-colors">
                                            {dropdownItem.name}
                                          </div>
                                          <div className="text-gray-400 text-xs mt-0.5 leading-relaxed">
                                            {dropdownItem.description}
                                          </div>
                                        </div>
                                      </button>
                                    ) : (
                                      <Link
                                        key={itemIndex}
                                        href={dropdownItem.href}
                                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors group"
                                        onClick={() => {
                                          setMobileMenuOpen(false);
                                          setMobileDropdownOpen(null);
                                        }}
                                      >
                                        <span className="text-base flex-shrink-0 mt-0.5">{dropdownItem.icon}</span>
                                        <div>
                                          <div className="text-white text-sm font-medium group-hover:text-purple-400 transition-colors">
                                            {dropdownItem.name}
                                          </div>
                                          <div className="text-gray-400 text-xs mt-0.5 leading-relaxed">
                                            {dropdownItem.description}
                                          </div>
                                        </div>
                                      </Link>
                                    )
                                  ))
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : item.sectionId ? (
                      <button 
                        onClick={(e) => handleSectionClick(e, item.sectionId)}
                        className="block w-full text-left p-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors font-medium"
                      >
                        {item.name}
                      </button>
                    ) : (
                      <Link 
                        href={item.href}
                        className="block w-full text-left p-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Actions */}
              <div className="mt-8 pt-6 border-t border-gray-800 space-y-3">
                <Link 
                  href="#" 
                  className="block w-full text-center p-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign in
                </Link>
                <Link 
                  href="#"
                  className="block w-full text-center bg-purple-600 hover:bg-purple-700 p-3 rounded-lg transition-colors font-medium text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;