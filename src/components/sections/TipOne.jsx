'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Play } from 'lucide-react';
import Image from 'next/image';

export default function TipOne() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end end'],
  });
  
  // Train movement - reaches near end with smooth progression
  const trainY = useTransform(scrollYProgress, [0, 1], [100, 600]);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-black overflow-hidden">
      {/* Track and Train Container - Only visible on larger screens */}
      <div className="hidden md:block absolute left-0 top-0 w-48 lg:w-64 xl:w-96 h-full z-10">
        
        {/* Background Track SVG */}
        <div className="relative w-full h-full flex justify-center">
          {/* Fallback track if SVG doesn't load */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center">
            <div className="h-full w-1 lg:w-1.5 bg-gradient-to-b from-[#08070C] via-[rgba(202,36,77,0.8)] to-[#08070C]"></div>
          </div>
          
          {/* Track SVG - with fallback */}
          <Image
            width={250}
            height={400}
            src="/track1.svg" 
            alt="Railway tracks" 
            loading="lazy" 
            className="absolute opacity-50"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
        
        {/* Animated Train */}
        <motion.div
          className="absolute left-1/2 top-0 z-30 transform -translate-x-1/2"
          style={{ y: trainY }}
        >
          {/* Train SVG with fallback */}
          <div className="relative">
            <Image
              width={120}
              height={200} 
              loading="lazy" 
              src="/train1.svg" 
              alt="Railway train"
              className="w-[80px] h-[140px] lg:w-[120px] lg:h-[200px] xl:w-[140px] xl:h-[220px] relative z-30"
              style={{marginLeft:"-40px"}}
              onError={(e) => {
                // Fallback train representation
                e.target.style.display = 'none';
                const fallback = document.createElement('div');
                fallback.className = 'w-8 h-16 bg-gradient-to-b from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-xs font-bold';
                fallback.innerHTML = '🚂';
                fallback.style.marginLeft = '-16px';
                e.target.parentNode.appendChild(fallback);
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Curved Track Extension - Only on larger screens */}
      <div className="hidden lg:block absolute left-0 top-0 w-full h-full overflow-visible pointer-events-none">
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 1520 790"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="curveGradient" x1="0%" y1="0%" x2="50%" y2="0%">
              <stop offset="0%" stopColor="rgba(202,36,77,0.3)" stopOpacity="0.3" />
              <stop offset="70%" stopColor="rgba(202,36,77,0.6)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(202,36,77,0.3)" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="downCurveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(202,36,77,0.3)" stopOpacity="1" />
              <stop offset="70%" stopColor="rgba(202,36,77,0.6)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(202,36,77,0.3)" stopOpacity="1" />
            </linearGradient>
          </defs>
          
          {/* Horizontal curved track */}
          <path
            d="M192 760 Q192 800 242 800 L1400 800"
            stroke="url(#curveGradient)"
            strokeWidth="4"
            fill="none"
            className="drop-shadow-lg"
          />
          
          {/* Downward curved track */}
          <path
            d="M1400 800 Q1450 800 1450 850 L1450 1000"
            stroke="url(#downCurveGradient)"
            strokeWidth="4"
            fill="none"
            className="drop-shadow-lg"
          />
          
          {/* Glow effects */}
          <path
            d="M192 760 Q192 800 242 800 L1400 800"
            stroke="rgba(202,36,77,.4)"
            strokeWidth="8"
            fill="none"
            className="blur-sm"
          />
          
          <path
            d="M1400 800 Q1450 800 1450 850 L1450 1000"
            stroke="rgba(202,36,77,.4)"
            strokeWidth="8"
            fill="none"
            className="blur-sm"
          />
        </svg>
      </div>

      {/* Background Pattern for mobile */}
      <div className="lg:hidden absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(202,36,77,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(202,36,77,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Content Section */}
      <div className="relative z-30 lg:ml-64 xl:ml-96 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 h-full flex flex-col justify-center py-12 sm:py-16 md:py-20">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">
            5 AutoGen Labs tips and tricks
          </h2>
        </motion.div>

        {/* Main Content - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-6xl mx-auto items-center">
          
          {/* Left Side - Text Content */}
          <motion.div
            className="space-y-4 sm:space-y-6 md:space-y-8 order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            {/* Step Number and Title */}
            <div>
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-purple-400/30 leading-none mb-2 sm:mb-3 md:mb-4">
                01
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
                Best practices
              </h3>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 md:mb-8">
                AutoGen is a coding assistant powered by Artificial Intelligence (AI), which can run in various environments and help you be more efficient in your daily coding tasks. In this new series of content, we will show you how AutoGen works in Visual Studio specifically and how it helps you being more productive.
              </p>
              
              {/* Link */}
              <motion.a
                href="#"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors text-sm sm:text-base"
                whileHover={{ x: 5 }}
              >
                View all demos
                <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side - Video Player */}
          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            {/* Video Container */}
            <div 
              className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/20"
              style={{
                background: 'linear-gradient(135deg, rgba(139,92,246,0.8) 0%, rgba(6,182,212,0.6) 50%, rgba(236,72,153,0.8) 100%)',
              }}
            >
              {/* Video Placeholder */}
              <div className="relative aspect-video bg-black/20 flex items-center justify-center">
                {/* Play Button */}
                <motion.button
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8 text-white ml-0.5 sm:ml-1" fill="currentColor" />
                </motion.button>
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full" style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px, 40px 40px'
                  }} />
                </div>
              </div>
              
              {/* Video Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4 md:p-6">
                <h4 className="text-white font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
                  <span className="hidden sm:inline">Comments as prompts in AutoGen Labs for Visual Studio</span>
                  <span className="sm:hidden">AutoGen Labs Prompts</span>
                </h4>
                <p className="text-gray-300 text-xs sm:text-sm">
                  <span className="hidden sm:inline">AutoGen Labs for Visual Studio 2022</span>
                  <span className="sm:hidden">Visual Studio 2022</span>
                </p>
              </div>
              
              {/* Glassmorphism Shine Effect */}
              <div 
                className="absolute inset-0 rounded-2xl md:rounded-3xl pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, 
                    rgba(255,255,255,0.2) 0%, 
                    rgba(255,255,255,0.1) 25%, 
                    transparent 50%, 
                    rgba(255,255,255,0.1) 75%, 
                    rgba(255,255,255,0.2) 100%)`
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}