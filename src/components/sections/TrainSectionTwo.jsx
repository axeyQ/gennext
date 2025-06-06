'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Dark Image Card Component
const DarkImageCard = ({ src, alt, className = "" }) => {
  return (
    <motion.div
      className={`
        relative bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/50
        ${className}
      `}
      whileHover={{ y: -4 }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};

// Main Component Showcase with train and track
export default function TrainSectionTwo() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end end'],
  });
  
  // Train movement - continues from previous section
  const trainY = useTransform(scrollYProgress, [0, 1], [20, 250]);
  

  return (
    <section ref={containerRef} className="relative w-full bg-black py-24 overflow-hidden">
      {/* Track and Train Container - Positioned on the right */}
      <div className="absolute right-0 top-0 w-35 h-full flex justify-center">
        
        {/* Track */}
        <div className="relative w-full h-full flex justify-center">
          {/* Center Rail Gradient - Vertical track */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center">
            <div className="h-full w-[4px] md:w-[6px] bg-[linear-gradient(180deg,#08070C_0%,rgba(194,41,138,0.8)_40%,rgba(194,41,138,0.8)_70%,#08070C_120%)]"></div>
          </div>
        </div>
        
        {/* Animated Train */}
        <motion.div
          className="absolute left-1/2 top-0 z-20 transform -translate-x-1/2"
          style={{ y: trainY }}
        >
       
          
          {/* Train SVG */}
          <img 
            src="/train2.svg" 
            alt="Railway train"
            style={{left:"-90px"}}
            className="w-[120px] h-[260px] md:w-[180px] max-w-fit scrollable-train hidden md:block absolute z-10"
          />
        </motion.div>
      </div>


      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h4 className="text-purple-400 font-medium mb-4">Railway Components</h4>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            Pixel-perfect UIs, embedded in minutes
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl">
            Simply add <code className="bg-gray-800 px-2 py-1 rounded text-sm font-mono text-purple-400">&lt;SignIn/&gt;</code>, <code className="bg-gray-800 px-2 py-1 rounded text-sm font-mono text-purple-400">&lt;SignUp/&gt;</code>, <code className="bg-gray-800 px-2 py-1 rounded text-sm font-mono text-purple-400">&lt;UserButton/&gt;</code>, <code className="bg-gray-800 px-2 py-1 rounded text-sm font-mono text-purple-400">&lt;UserProfile/&gt;</code> for complete user management functionality. Match to your brand with any CSS library, then deploy to your own domain — no more jarring redirects!
          </p>
        </div>

        {/* Container with overflow hidden for proper cutoffs */}
        <div className="relative overflow-hidden">
          
          {/* First Row with proper edge cutoffs */}
          <div className="flex gap-6 mb-6 -mx-40">
            {/* Cut off on left - starts outside viewport */}
            <DarkImageCard
              src="https://picsum.photos/400/500?random=1"
              alt="Create Account Interface"
              className="w-80 h-96 flex-shrink-0 ml-24"
            />
            
            {/* Center card */}
            <DarkImageCard
              src="https://picsum.photos/600/500?random=2"
              alt="Sign In Interface"
              className="w-96 h-96 flex-shrink-0"
            />
            
            {/* Large card */}
            <DarkImageCard
              src="https://picsum.photos/800/500?random=3"
              alt="Account Dashboard"
              className="w-[500px] h-96 flex-shrink-0"
            />
            
            {/* Cut off on right - extends outside viewport */}
            <DarkImageCard
              src="https://picsum.photos/400/500?random=4"
              alt="Profile Settings"
              className="w-80 h-96 flex-shrink-0"
            />
          </div>

          {/* Second Row with proper edge cutoffs */}
          <div className="flex gap-6 -mx-40">
            {/* Cut off on left */}
            <DarkImageCard
              src="https://picsum.photos/300/400?random=5"
              alt="Email Verification"
              className="w-72 h-80 flex-shrink-0 ml-24"
            />
            
            {/* Medium card */}
            <DarkImageCard
              src="https://picsum.photos/500/400?random=6"
              alt="Security Settings"
              className="w-80 h-80 flex-shrink-0"
            />
            
            {/* Large card */}
            <DarkImageCard
              src="https://picsum.photos/700/400?random=7"
              alt="Team Management"
              className="w-96 h-80 flex-shrink-0"
            />
            
            {/* Cut off on right */}
            <DarkImageCard
              src="https://picsum.photos/400/400?random=8"
              alt="Analytics Dashboard"
              className="w-80 h-80 flex-shrink-0"
            />
          </div>

        </div>
      </div>
    </section>
  );
}