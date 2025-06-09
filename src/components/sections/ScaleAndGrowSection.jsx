'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ScaleAndGrowSection() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end end'],
  });
  
  // Train movement - through the middle
  const trainY = useTransform(scrollYProgress, [0, 1], [50, 400]);

  return (
    <section ref={containerRef} className="relative w-full bg-black py-24 overflow-hidden min-h-screen">
      {/* Track and Train Container - Positioned in the CENTER */}
      <div className="absolute left-1/2 top-0 w-24 h-full flex justify-center transform -translate-x-1/2">
        
        {/* Track - Vertical through center */}
        <div className="relative w-full h-full flex justify-center">
          {/* Center Rail Gradient - Vertical track */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-end">
            <div className="h-10/12 w-[4px] md:w-[6px] bg-[linear-gradient(180deg,#08070C_0%,rgba(202,36,77,0.8)_40%,rgba(202,36,77,0.8)_70%,#08070C_120%)]"></div>
          </div>
        </div>
        
        {/* Animated Train */}
        <motion.div
          className="absolute left-1/2 top-0 z-20 transform -translate-x-1/2"
          style={{ y: trainY }}
        >
          {/* Train SVG */}
          <img
            src="/train1.svg"
            alt="Railway train"
            style={{left:"-90px"}}
            className="w-[120px] h-[260px] md:w-[180px] max-w-fit scrollable-train hidden md:block absolute z-10"
          />
        </motion.div>
      </div>

      {/* Curved Track Extension - Center to sides */}
      <div className="absolute bottom-0 left-0 w-full h-full overflow-visible pointer-events-none">
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 1400 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="centerCurveGradient" x1="50%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(202,36,77,0.6)" stopOpacity="1" />
              <stop offset="70%" stopColor="rgba(202,36,77,0.6)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(202,36,77,0.3)" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="centerDownCurveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(202,36,77,0.3)" stopOpacity="1" />
              <stop offset="70%" stopColor="rgba(202,36,77,0.6)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(202,36,77,0.3)" stopOpacity="1" />
            </linearGradient>
          </defs>
          

          
        
          
          {/* Glow effects */}

          
      
          
          <path
            d="M0 750 Q-50 750 -50 800 L-50 1000"
            stroke="rgba(202,36,77,.4)"
            strokeWidth="8"
            fill="none"
            className="blur-sm"
          />
        </svg>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Glassmorphism background orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl" />
        
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

      {/* Content - Spline Left, Text Right */}
      <div className="relative z-30 px-8 h-full flex flex-col justify-center py-20">
        
        {/* Main Content - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
          
          {/* Left Side - Spline 3D Scene (No Card Container) */}
          <motion.div
            className="relative order-2 lg:order-1 h-[500px]"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            {/* Direct Spline iframe - No glassmorphism container */}
            <iframe 
              src='https://my.spline.design/robotfollowcursorforlandingpagemc-yDQ2KJIJ96N4Mlk7CyhxQfiB/' 
              frameBorder='0' 
              width='100%' 
              height='100%'
              title="AutoGen Labs 3D Scene"
            />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            {/* Section Header */}
            <div>
              <motion.h4 
                className="text-cyan-400 font-medium mb-4 text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: false }}
              >
                Scale and Grow
              </motion.h4>
              
              <motion.h3 
                className="text-3xl md:text-4xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: false }}
              >
                Scale your applications with intuitive vertical and horizontal scaling
              </motion.h3>
              
              <motion.p 
                className="text-gray-300 text-lg leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: false }}
              >
                AutoGen Labs dynamically scales highly performant servers, storage, 
                and networking to meet application demands.
              </motion.p>
              
              {/* Learn More Link */}
              <motion.a
                href="#"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: false }}
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </div>

            {/* Replaces Section */}
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: false }}
            >
              <p className="text-sm text-gray-500 mb-3">Replaces</p>
              <div className="flex gap-3">
                {[
                  { icon: '🔧', label: 'Manual Scaling' },
                  { icon: '📊', label: 'Resource Monitoring' },
                  { icon: '⚙️', label: 'Load Balancers' },
                  { icon: '🔄', label: 'Auto-scaling Tools' },
                  { icon: '📈', label: 'Performance Analytics' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 + (index * 0.1) }}
                    viewport={{ once: false }}
                    title={item.label}
                  >
                    <span className="text-sm">{item.icon}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}