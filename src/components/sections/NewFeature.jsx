'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';


// Main Component Showcase with train and track
export default function NewFeature() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end end'],
  });
  
  // Train movement - continues from previous section
  const trainY = useTransform(scrollYProgress, [0, 1], [100, 500]);
  

  return (
    <section ref={containerRef} className="relative w-full bg-black py-24 overflow-hidden min-h-screen">
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


      
    </section>
  );
}