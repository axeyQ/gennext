'use client'
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

  const dropdownContent = {
    Product: {
      sections: [
        {
          title: "Platform",
          items: [
            {
              name: "Features",
              description: "Explore our deployment platform",
              icon: "🚀",
              href: "/features"
            },
            {
              name: "Changelog",
              description: "Discover the latest features and releases", 
              icon: "📋",
              href: "/changelog"
            },
            {
              name: "Templates",
              description: "Deploy popular applications in one click",
              icon: "📦",
              href: "/templates"
            }
          ]
        },
        {
          title: "Solutions",
          items: [
            {
              name: "Startups",
              description: "Scale from idea to IPO",
              icon: "🌱",
              href: "/solutions/startups"
            },
            {
              name: "Enterprise",
              description: "Enterprise-grade infrastructure",
              icon: "🏢",
              href: "/solutions/enterprise"
            }
          ]
        }
      ]
    },
    Developers: {
      sections: [
        {
          title: "Resources",
          items: [
            {
              name: "Documentation",
              description: "Learn how to use Railway",
              icon: "📚",
              href: "/docs"
            },
            {
              name: "API Reference",
              description: "Complete API documentation",
              icon: "⚡",
              href: "/api"
            },
            {
              name: "CLI",
              description: "Command line interface",
              icon: "💻",
              href: "/cli"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              name: "Discord",
              description: "Join our community",
              icon: "💬",
              href: "https://discord.gg/railway"
            },
            {
              name: "GitHub",
              description: "Open source projects",
              icon: "🐙",
              href: "https://github.com/railwayapp"
            }
          ]
        }
      ]
    },
    Resources: {
      sections: [
        {
          title: "Learn",
          items: [
            {
              name: "Blog",
              description: "Latest news and insights",
              icon: "📝",
              href: "/blog"
            },
            {
              name: "Guides",
              description: "Step-by-step tutorials",
              icon: "🎯",
              href: "/guides"
            },
            {
              name: "Help Center",
              description: "Get support and answers",
              icon: "❓",
              href: "/help"
            }
          ]
        },
        {
          title: "Tools",
          items: [
            {
              name: "Status",
              description: "Service status and uptime",
              icon: "📊",
              href: "/status"
            },
            {
              name: "Feedback",
              description: "Share your thoughts",
              icon: "💡",
              href: "/feedback"
            }
          ]
        }
      ]
    },
    Company: {
      sections: [
        {
          title: "About",
          items: [
            {
              name: "About Us",
              description: "Learn about our mission",
              icon: "🎯",
              href: "/about"
            },
            {
              name: "Careers",
              description: "Join our team",
              icon: "💼",
              href: "/careers"
            },
            {
              name: "Press",
              description: "Media resources and news",
              icon: "📰",
              href: "/press"
            }
          ]
        },
        {
          title: "Legal",
          items: [
            {
              name: "Privacy",
              description: "Privacy policy",
              icon: "🔒",
              href: "/privacy"
            },
            {
              name: "Terms",
              description: "Terms of service",
              icon: "📄",
              href: "/terms"
            }
          ]
        }
      ]
    }
  };

  const navItems = [
    { name: 'Product', hasDropdown: true },
    { name: 'Developers', hasDropdown: true },
    { name: 'Resources', hasDropdown: true },
    { name: 'Company', hasDropdown: true },
    { name: 'Pricing', hasDropdown: false }
  ];

  return (
    <nav className={`w-full px-6 md:px-44 py-4 sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[rgb(19_17_28_/_90%)] backdrop-blur-[5px]' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 relative">
            <svg viewBox="0 0 32 32" className="w-full h-full">
              <circle cx="16" cy="16" r="15" fill="none" stroke="white" strokeWidth="2" />
              <path d="M8 16h16M12 11l4 5-4 5M20 11l-4 5 4 5" stroke="white" strokeWidth="2" fill="none" />
            </svg>
          </div>
          <span className="text-xl font-medium text-white">Railway</span>
        </div>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center space-x-8 relative">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors py-2">
                <span className="text-sm font-medium">{item.name}</span>
                {item.hasDropdown && (
                  <ChevronDown 
                    className={`w-3 h-3 transition-transform duration-200 ${
                      hoveredItem === item.name ? 'rotate-180' : ''
                    }`} 
                  />
                )}
              </button>

              {/* Dropdown Menu */}
              {item.hasDropdown && hoveredItem === item.name && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2">
                  <div className="bg-[#0A0A0B] border border-gray-800 rounded-xl shadow-2xl p-6 min-w-[480px] max-w-[600px]">
                    <div className="grid grid-cols-2 gap-8">
                      {dropdownContent[item.name]?.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                            {section.title}
                          </h3>
                          <div className="space-y-1">
                            {section.items.map((dropdownItem, itemIndex) => (
                              <a
                                key={itemIndex}
                                href={dropdownItem.href}
                                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors group"
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
                              </a>
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

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
            Sign in
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors text-sm font-medium text-white">
            Book a demo
          </button>
        </div>
      </div>

      {/* Mobile menu button - you can add mobile menu logic here */}
      <div className="md:hidden">
        {/* Add mobile hamburger menu here if needed */}
      </div>
    </nav>
  );
};

export default Navbar;