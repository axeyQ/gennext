'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import InteractiveBentoGrid from '../ui/InteractiveBentoGrid'; // Import the new component

export default function TrainSample() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end end'],
  });
  
  // Train movement - reaches near end with smooth progression
  const trainY = useTransform(scrollYProgress, [0, 1], [100, 600]);
  
  // Train glow intensity
  const trainGlow = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1, 0.4]);

  return (
    <section ref={containerRef} className='max-w-[1864px] text-left px-5 py-5 md:py-0 mx-auto md:rounded-2xl border-y md:border-x border-white/10 bg-[linear-gradient(180deg,#07060B_50%,#0A090E_100%)] relative min-h-[150vh] overflow-hidden'>

      {/* Track and Train Container - Positioned on the left */}
      <div className="absolute left-0 top-0 w-80 h-full flex justify-center">
        
        {/* Background Track SVG */}
        <div className="relative w-full h-full flex justify-center">
          
          {/* Center Rail Gradient */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center">
            <div className="h-full w-[4px] md:w-[6px] bg-[linear-gradient(180deg,#08070C_0%,rgba(194,41,138,0.8)_40%,rgba(194,41,138,0.8)_70%,#08070C_120%)]"></div>
          </div>

          {/* Animated Dot on Rail */}
          <div className="absolute left-1/2 top-40 transform -translate-x-1/2 -translate-y-1/2 z-10">
            {/* Larger Dot with Enhanced Glow */}
            <div className="w-8 h-8 rounded-full bg-[#C2298A] animate-dot-glow animate-dot-pulse relative">
              {/* Large Background Glow */}
              <div className="absolute inset-0 w-20 h-20 -m-6 rounded-full bg-[rgba(194,41,138,0.4)] blur-xl"></div>
              
              {/* Medium Glow Ring */}
              <div className="absolute inset-0 w-12 h-12 -m-2 rounded-full bg-[rgba(194,41,138,0.6)] blur-lg"></div>
              
              {/* Core Bright Center */}
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white via-pink-200 to-[#C2298A] animate-pulse" style={{animationDuration: '1.5s'}}></div>
              
              {/* Inner Shine */}
              <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-white/90 animate-pulse" style={{animationDuration: '2s'}}></div>
            </div>
          </div>
        </div>

        {/* Animated Train */}
        <motion.div
          className="absolute left-1/2 top-0 z-20 transform -translate-x-1/2"
          style={{ y: trainY }}
        >
          {/* Train Glow Effect */}
          <motion.div
            className="absolute inset-0 w-32 h-20 -m-8 rounded-full blur-2xl pointer-events-none"
            style={{ 
              opacity: trainGlow,
              background: 'radial-gradient(ellipse, rgba(202, 36, 77, 0.8) 0%, rgba(202, 36, 77, 0.4) 40%, rgba(202, 36, 77, 0.1) 70%, transparent 100%)'
            }}
          />
          
          {/* Train SVG */}
          <img 
            src="/train2.svg" 
            alt="Railway train"
            style={{left:"-90px"}}
            className="w-[120px] h-[260px] md:w-[180px] max-w-fit scrollable-train hidden md:block absolute z-10"
          />
        </motion.div>
      </div>

      {/* Content - Positioned on the right side */}
      <div className="ml-80 h-full flex flex-col justify-start px-16 py-32 z-30">
        
        {/* Header Content */}
        <div className="mb-12">
          <h4 className='mb-4 text-lg font-medium text-[#C2298A]'>Build and Deploy</h4>
          <h2 className="text-4xl text-white md:text-5xl font-medium max-w-[540px] mb-6">
            <span className="hidden md:inline">Craft a complete full-stack application with a powerful visual canvas</span>
            <span className="inline md:hidden">Craft full-stack applications with a powerful visual canvas</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-[546px]">
            <span className="hidden md:inline">Railway builds and deploys any combination of services, volumes, and databases from GitHub or Docker.</span>
            <span className="inline md:hidden">Railway deploys any combination of services, volumes, and databases from GitHub or Docker.</span>
            <a href="/features#build-and-deploy" target="_blank" rel="noreferrer" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 group text-foreground whitespace-nowrap ml-2">
              <span className="group-hover:underline">Learn More</span>
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </a>
          </p>
        </div>

        {/* Interactive BentoGrid Component */}
        <InteractiveBentoGrid />

      </div>

      {/* Custom CSS for dot effects */}
      <style jsx>{`
        @keyframes dotPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.8;
          }
        }
        
        @keyframes dotGlow {
          0%, 100% {
            box-shadow: 0 0 30px rgba(194, 41, 138, 0.8), 0 0 60px rgba(194, 41, 138, 0.6), 0 0 100px rgba(194, 41, 138, 0.4);
          }
          50% {
            box-shadow: 0 0 40px rgba(194, 41, 138, 1), 0 0 80px rgba(194, 41, 138, 0.8), 0 0 120px rgba(194, 41, 138, 0.6);
          }
        }
        
        .animate-dot-pulse {
          animation: dotPulse 2s ease-in-out infinite;
        }
        
        .animate-dot-glow {
          animation: dotGlow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}