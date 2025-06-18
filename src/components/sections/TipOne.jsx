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
    <section ref={containerRef} className="relative min-h-[120vh] bg-black overflow-hidden">
      {/* Track and Train Container - Positioned on the left */}
      <div className="absolute left-0 top-0 w-96 h-full flex justify-center">
        
        {/* Background Track SVG */}
        <div className="relative w-full h-full flex justify-center">
          <Image
            width={250}
            height={400}
            src="/track1.svg" 
            alt="Railway tracks" 
            loading="lazy" 
            className="hidden md:block absolute "
          />
          
          {/* Center Rail Gradient */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center">
            <div className=" h-10/12 w-1 md:w-1.5 bg-gradient-to-b from-[#08070C] via-[rgba(202,36,77,0.8)] to-[#08070C]"></div>
          </div>
        </div>
        
        {/* Animated Train */}
        <motion.div
          className="absolute left-1/2 top-0 z-20 transform -translate-x-1/2"
          style={{ y: trainY }}
        >
          {/* Train SVG */}
          <Image
            width={180}
            height={260} 
            loading="lazy" 
            src="/train1.svg" 
            alt="Railway train"
            style={{left:"-90px"}}
            className="w-[120px] h-[260px] md:w-[180px] max-w-fit scrollable-train hidden md:block absolute z-10 [--train-scroll-distance-start:20px] [--train-scroll-distance:640px] [--train-scroll-distance-fallback:240px] [--train-scroll-distance-mobile:280px] [--train-scroll-exit-percentage:110%]"
          />
        </motion.div>
      </div>

      {/* Curved Track Extension */}
      <div className="absolute left-0 top-0 w-full h-full overflow-visible pointer-events-none">
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

      {/* Content - 5 Tips and Tricks Section */}
      <div className="relative z-30 ml-96 pl-8 pr-8 h-full flex flex-col justify-center py-20">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            5 AutoGen Labs tips and tricks
          </h2>
        </motion.div>

        {/* Main Content - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          
          {/* Left Side - Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            {/* Step Number and Title */}
            <div>
              <div className="text-8xl font-bold text-purple-400/30 leading-none mb-4">01</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Best practices

              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
              AutoGen is a coding assistant powered by Artificial Intelligence (AI), which can run in various environments and help you be more efficient in your daily coding tasks. In this new series of content, we will show you how AutoGen works in Visual Studio specifically and how it helps you being more productive.
              </p>
              
              {/* Link */}
              <motion.a
                href="#"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors"
                whileHover={{ x: 5 }}
              >
                View all demos
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side - Video Player */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            {/* Video Container */}
            <div 
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20"
              style={{
                background: 'linear-gradient(135deg, rgba(139,92,246,0.8) 0%, rgba(6,182,212,0.6) 50%, rgba(236,72,153,0.8) 100%)',
              }}
            >
              {/* Video Placeholder */}
              <div className="relative aspect-video bg-black/20 flex items-center justify-center">
                {/* Play Button */}
                <motion.button
                  className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play size={32} className="text-white ml-1" fill="currentColor" />
                </motion.button>
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full" style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                  }} />
                </div>
              </div>
              
              {/* Video Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h4 className="text-white font-bold text-lg mb-2">
                  Comments as prompts in AutoGen Labs for Visual Studio
                </h4>
                <p className="text-gray-300 text-sm">
                  AutoGen Labs for Visual Studio 2022
                </p>
              </div>
              
              {/* Glassmorphism Shine Effect */}
              <div 
                className="absolute inset-0 rounded-3xl pointer-events-none"
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