'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

// Masonry Image Card Component
const MasonryImageCard = ({ src, alt, className = "", height = "h-64", delay = 0 }) => {
  return (
    <motion.div
      className={`
        relative bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden
        ${height} ${className}
      `}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.div
        className="w-full h-full"
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        transition={{ 
          duration: 1.2, 
          delay: delay + 0.2,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        viewport={{ once: true }}
      >
        <Image
          width={400}
          height={400}
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading='lazy'
        />
      </motion.div>
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
  
  // Train movement 
  const trainY = useTransform(scrollYProgress, [0, 1], [20, 250]);

  // Masonry grid data with varied heights
  const masonryItems = [
    { id: 1, src: "https://picsum.photos/400/300?random=1", alt: "Create Account Interface", height: "h-48", delay: 0 },
    { id: 2, src: "https://picsum.photos/400/500?random=2", alt: "Sign In Interface", height: "h-80", delay: 0.1 },
    { id: 3, src: "https://picsum.photos/400/350?random=3", alt: "Dashboard Overview", height: "h-56", delay: 0.2 },
    { id: 4, src: "https://picsum.photos/400/600?random=4", alt: "User Profile", height: "h-96", delay: 0.3 },
    { id: 5, src: "https://picsum.photos/400/250?random=5", alt: "Settings Panel", height: "h-40", delay: 0.4 },
    { id: 6, src: "https://picsum.photos/400/450?random=6", alt: "Analytics Dashboard", height: "h-72", delay: 0.5 },
    { id: 7, src: "https://picsum.photos/400/400?random=7", alt: "Team Management", height: "h-64", delay: 0.6 },
    { id: 8, src: "https://picsum.photos/400/550?random=8", alt: "Security Settings", height: "h-88", delay: 0.7 },
    { id: 9, src: "https://picsum.photos/400/300?random=9", alt: "Email Verification", height: "h-48", delay: 0.8 },
    { id: 10, src: "https://picsum.photos/400/500?random=10", alt: "Payment Methods", height: "h-80", delay: 0.9 },
    { id: 11, src: "https://picsum.photos/400/350?random=11", alt: "Notifications", height: "h-56", delay: 1.0 },
    { id: 12, src: "https://picsum.photos/400/450?random=12", alt: "API Keys", height: "h-72", delay: 1.1 },
  ];

  return (
    <section ref={containerRef} className="relative w-full bg-black py-24 overflow-hidden">
      {/* Track and Train Container - Positioned on the right */}
      <div className="absolute right-0 top-0 w-35 h-full flex justify-center">
        
        {/* Track */}
        <div className="relative w-full h-full flex justify-center">
          {/* Center Rail Gradient - Vertical track */}
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
            className="w-[120px] h-[260px] md:w-[180px] max-w-fit scrollable-train hidden md:block absolute z-10"
          />
        </motion.div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.div 
          className="max-w-7xl mx-auto px-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4 className="text-purple-400 font-medium mb-4">Railway Components</h4>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            Pixel-perfect UIs, embedded in minutes
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl">
            Simply add <code className="bg-gray-800 px-2 py-1 rounded text-sm font-mono text-purple-400">&lt;SignIn/&gt;</code>, <code className="bg-gray-800 px-2 py-1 rounded text-sm font-mono text-purple-400">&lt;SignUp/&gt;</code>, <code className="bg-gray-800 px-2 py-1 rounded text-sm font-mono text-purple-400">&lt;UserButton/&gt;</code>, <code className="bg-gray-800 px-2 py-1 rounded text-sm font-mono text-purple-400">&lt;UserProfile/&gt;</code> for complete user management functionality. Match to your brand with any CSS library, then deploy to your own domain — no more jarring redirects!
          </p>
        </motion.div>

        {/* Masonry Container */}
        <div className="relative overflow-hidden">
          <div className="lg:px-24">
            <div className="relative -mx-16 md:-mx-24 lg:-mx-32">
              
              {/* Masonry Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-min">
                {masonryItems.map((item) => (
                  <MasonryImageCard
                    key={item.id}
                    src={item.src}
                    alt={item.alt}
                    height={item.height}
                    delay={item.delay}
                    className="w-full"
                  />
                ))}
              </div>

              <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 lg:w-32 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none z-10" />
              
              <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 lg:w-32 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for additional height classes */}
      <style jsx>{`
        .h-88 {
          height: 22rem; /* 352px */
        }
      `}</style>
    </section>
  );
}