'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FeatureSection = () => {
  const [hoveredCard, setHoveredCard] = useState('topLeft');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample data for all cards with varied content
  const cardData = {
    topLeft: {
      title: "Analytics Dashboard",
      size: "w-56 h-40",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop"
      ],
      preview: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
      position: "top-16 left-4"
    },
    topRight: {
      title: "Team Collaboration",
      size: "w-48 h-36",
      images: [
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
      ],
      preview: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&h=200&fit=crop",
      position: "top-16 right-4"
    },
    leftCenter: {
      title: "Database Management",
      size: "w-52 h-44",
      images: [
        "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=600&h=400&fit=crop"
      ],
      preview: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=300&h=200&fit=crop",
      position: "top-1/2 left-4 transform -translate-y-1/2"
    },
    rightCenter: {
      title: "Cloud Infrastructure",
      size: "w-44 h-38",
      images: [
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop"
      ],
      preview: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop",
      position: "top-1/2 right-4 transform -translate-y-1/2"
    },
    bottomLeft: {
      title: "Security Features",
      size: "w-60 h-42",
      images: [
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop"
      ],
      preview: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop",
      position: "bottom-16 left-4"
    },
    bottomRight: {
      title: "Performance Metrics",
      size: "w-48 h-40",
      images: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
      ],
      preview: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
      position: "bottom-16 right-4"
    }
  };

  // Auto-advance carousel during hover
  useEffect(() => {
    if (!hoveredCard) return;

    const interval = setInterval(() => {
      setCurrentImageIndex(prev => 
        (prev + 1) % cardData[hoveredCard].images.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [hoveredCard]);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [hoveredCard]);

  const handleCardHover = (cardKey) => {
    setHoveredCard(cardKey);
  };

  const cornerCardVariants = {
    initial: { scale: 0.9, opacity: 0.7 },
    hover: { 
      scale: 0.85, 
      opacity: 0.4,
      filter: "blur(4px)",
      transition: { duration: 0.3 }
    },
    normal: { 
      scale: 0.9, 
      opacity: 0.7,
      filter: "blur(0px)",
      transition: { duration: 0.3 }
    }
  };

  const centerCardVariants = {
    initial: { scale: 0.95 },
    animate: { scale: 1, transition: { duration: 0.5 } }
  };

  const imageVariants = {
    enter: { opacity: 0, scale: 1.1 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 }
  };

  return (
    <section className='max-w-[1864px] text-left px-5 py-5 md:py-0 mx-auto md:rounded-2xl border-y md:border-x border-white/10 bg-[linear-gradient(180deg,#07060B_50%,#0A090E_100%)] relative h-[100vh] overflow-hidden'>
      
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      {/* Section Header */}
      <div className="relative z-10 text-center pt-8 pb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Interactive Features
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Explore our comprehensive suite of tools designed to enhance your workflow
        </p>
      </div>

      {/* Animated Tracks */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
          <defs>
            {/* Simple static gradients for each track */}
            <linearGradient id="track1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(202,36,77,0.3)" />
              <stop offset="50%" stopColor="rgba(202,36,77,1)" />
              <stop offset="100%" stopColor="rgba(202,36,77,0.3)" />
            </linearGradient>
            
            <linearGradient id="track2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(139,92,246,0.3)" />
              <stop offset="50%" stopColor="rgba(139,92,246,1)" />
              <stop offset="100%" stopColor="rgba(139,92,246,0.3)" />
            </linearGradient>

            <linearGradient id="track4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(34,197,94,0.3)" />
              <stop offset="50%" stopColor="rgba(34,197,94,1)" />
              <stop offset="100%" stopColor="rgba(34,197,94,0.3)" />
            </linearGradient>

            <linearGradient id="track5" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(245,101,101,0.3)" />
              <stop offset="50%" stopColor="rgba(245,101,101,1)" />
              <stop offset="100%" stopColor="rgba(245,101,101,0.3)" />
            </linearGradient>

            <linearGradient id="track6" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(251,191,36,0.3)" />
              <stop offset="50%" stopColor="rgba(251,191,36,1)" />
              <stop offset="100%" stopColor="rgba(251,191,36,0.3)" />
            </linearGradient>

            <linearGradient id="track7" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="rgba(168,85,247,0.3)" />
              <stop offset="50%" stopColor="rgba(168,85,247,1)" />
              <stop offset="100%" stopColor="rgba(168,85,247,0.3)" />
            </linearGradient>
          </defs>

          {/* Track paths with simple hover color change */}
          
          {/* Top Left - Curved */}
          <path
            d="M 310 200 Q 300 200 600 300"
            stroke={hoveredCard === 'topLeft' ? 'url(#track1)' : 'rgba(100,100,100,0.2)'}
            strokeWidth={hoveredCard === 'topLeft' ? '3' : '2'}
            strokeDasharray="8,4"
            fill="none"
            className="transition-all duration-500"
          />

          {/* Top Right - Straight diagonal */}
          <path
            d="M 915 200 L 500 320"
            stroke={hoveredCard === 'topRight' ? 'url(#track2)' : 'rgba(100,100,100,0.2)'}
            strokeWidth={hoveredCard === 'topRight' ? '3' : '2'}
            strokeDasharray="12,6"
            fill="none"
            className="transition-all duration-500"
          />

          {/* Left Center - Curved right */}
          <path
            d="M 300 360 Q 300 300 600 400"
            stroke={hoveredCard === 'leftCenter' ? 'url(#track4)' : 'rgba(100,100,100,0.2)'}
            strokeWidth={hoveredCard === 'leftCenter' ? '3' : '2'}
            strokeDasharray="10,5"
            fill="none"
            className="transition-all duration-500"
          />

          {/* Right Center - Straight */}
          <path
            d="M 920 350 L 600 300"
            stroke={hoveredCard === 'rightCenter' ? 'url(#track5)' : 'rgba(100,100,100,0.2)'}
            strokeWidth={hoveredCard === 'rightCenter' ? '3' : '2'}
            strokeDasharray="15,8"
            fill="none"
            className="transition-all duration-500"
          />

          {/* Bottom Left - S-curve */}
          <path
            d="M 320 440 Q 300 420 500 440 Q 550 460 700 400"
            stroke={hoveredCard === 'bottomLeft' ? 'url(#track6)' : 'rgba(100,100,100,0.2)'}
            strokeWidth={hoveredCard === 'bottomLeft' ? '3' : '2'}
            strokeDasharray="8,4"
            fill="none"
            className="transition-all duration-500"
          />

          {/* Bottom Right - Curved */}
          <path
            d="M 910 480 Q 850 400 600 300"
            stroke={hoveredCard === 'bottomRight' ? 'url(#track7)' : 'rgba(100,100,100,0.2)'}
            strokeWidth={hoveredCard === 'bottomRight' ? '3' : '2'}
            strokeDasharray="12,6"
            fill="none"
            className="transition-all duration-500"
          />
        </svg>
      </div>

      {/* Cards Container */}
      <div className="relative z-10 h-[600px] max-w-6xl mx-auto">
        
        {/* Center Card */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-64 bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-3xl overflow-hidden shadow-2xl"
          variants={centerCardVariants}
          initial="initial"
          animate="animate"
        >
          <div className="relative w-full h-full">
            <AnimatePresence mode="wait">
              <motion.img
                key={`${hoveredCard}-${currentImageIndex}`}
                src={cardData[hoveredCard]?.images[currentImageIndex]}
                alt="Feature showcase"
                className="w-full h-full object-cover"
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </AnimatePresence>
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-white text-lg font-semibold">
                {cardData[hoveredCard]?.title}
              </h3>
              <div className="flex space-x-2 mt-2">
                {cardData[hoveredCard]?.images.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? 'bg-white w-6' : 'bg-white/40 w-3'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Dynamic Cards */}
        {Object.entries(cardData).map(([key, card]) => (
          <motion.div
            key={key}
            className={`absolute ${card.position} ${card.size} bg-gray-900/70 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden cursor-pointer`}
            variants={cornerCardVariants}
            initial="normal"
            animate={hoveredCard === key ? 'hover' : 'normal'}
            onMouseEnter={() => handleCardHover(key)}
          >
            <img
              src={card.preview}
              alt={card.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
              <span className="text-white text-xs font-medium">{card.title}</span>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default FeatureSection;