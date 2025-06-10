'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

// Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [hasIntersected, options]);

  return { elementRef, isIntersecting, hasIntersected };
};

// Lazy loaded template card component
const LazyTemplateCard = ({ template, getSizeClasses }) => {
  const { elementRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '100px', // Start loading 100px before the element is visible
  });
  
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <motion.div
      ref={elementRef}
      className={`relative group cursor-pointer ${getSizeClasses(template.size)}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      layout
    >
      {/* Template Card */}
      <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 group-hover:border-white/30 transition-all duration-300">
        
        {/* Featured Badge */}
        {template.featured && (
          <div className="absolute top-4 right-4 z-20">
            <div className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full">
              Featured
            </div>
          </div>
        )}

        {/* Loading Placeholder */}
        {!hasIntersected && (
          <div className="w-full h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 flex items-center justify-center">
            <div className="w-12 h-12 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
          </div>
        )}

        {/* Image Error Placeholder */}
        {imageError && hasIntersected && (
          <div className="w-full h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 flex items-center justify-center">
            <div className="text-gray-400 text-center">
              <div className="w-12 h-12 mx-auto mb-2 bg-gray-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm">Failed to load</p>
            </div>
          </div>
        )}

        {/* Actual Image */}
        {hasIntersected && !imageError && (
          <>
            {/* Loading overlay */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 flex items-center justify-center z-10">
                <div className="w-8 h-8 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
              </div>
            )}
            
            <Image
              src={template.image}
              alt={template.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className={`object-cover transition-all duration-500 group-hover:scale-105 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={handleImageLoad}
              onError={handleImageError}
              priority={template.featured} // Prioritize featured images
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end z-20">
          <div className="p-6 w-full">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold text-lg">
                {template.name}
              </h3>
              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <ArrowUpRight size={16} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
      </div>
    </motion.div>
  );
};

const HeroSectionsGallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Filter categories
  const filters = [
    'All', 'Dark', 'Minimal', 'Bento', '3D', 'Colorful', 
    'Light', 'Video', 'Pastel', 'Illustration', 'Typo', 'Image', 'Gradient'
  ];

  // Template data with different sizes for masonry layout
  const templates = [
    {
      id: 1,
      name: 'LEOLEO Studio',
      category: 'Dark',
      image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&h=600&fit=crop&auto=format&q=75',
      size: 'large', // 2x2
      featured: true
    },
    {
      id: 2,
      name: 'Icon Design Hub',
      category: '3D',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=800&fit=crop&auto=format&q=75',
      size: 'tall', // 1x2
      featured: false
    },
    {
      id: 3,
      name: 'HitHub Minimal',
      category: 'Minimal',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&auto=format&q=75',
      size: 'wide', // 2x1
      featured: false
    },
    {
      id: 4,
      name: 'Framer Canvas',
      category: 'Dark',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&auto=format&q=75',
      size: 'medium', // 1x1
      featured: true
    },
    {
      id: 5,
      name: 'Digital Design Days',
      category: 'Colorful',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop&auto=format&q=75',
      size: 'medium', // 1x1
      featured: false
    },
    {
      id: 6,
      name: 'Learn Web Design',
      category: 'Dark',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop&auto=format&q=75',
      size: 'wide', // 2x1
      featured: false
    },
    {
      id: 7,
      name: 'Portfolio Gallery',
      category: 'Light',
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=800&fit=crop&auto=format&q=75',
      size: 'tall', // 1x2
      featured: false
    },
    {
      id: 8,
      name: 'Creative Studio',
      category: 'Minimal',
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&h=600&fit=crop&auto=format&q=75',
      size: 'medium', // 1x1
      featured: false
    }
  ];

  // Filter templates based on active filter
  const filteredTemplates = activeFilter === 'All' 
    ? templates 
    : templates.filter(template => template.category === activeFilter);

  // Get size classes for masonry layout
  const getSizeClasses = (size) => {
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-2 h-96';
      case 'wide':
        return 'col-span-2 row-span-1 h-48';
      case 'tall':
        return 'col-span-1 row-span-2 h-96';
      case 'medium':
      default:
        return 'col-span-1 row-span-1 h-48';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section className="relative w-full bg-[linear-gradient(180deg,#07060B_50%,#0A090E_100%)] py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Glassmorphism background orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Hero sections
          </h2>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-white text-black'
                    : 'bg-white/10 text-gray-400 hover:bg-white/20 hover:text-white border border-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-min"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="popLayout">
            {filteredTemplates.map((template) => (
              <LazyTemplateCard
                key={template.id}
                template={template}
                getSizeClasses={getSizeClasses}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show more button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
        >
          <motion.button
            className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-xl text-white font-medium transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Load more templates
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSectionsGallery;