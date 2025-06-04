'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

// Service Node Component
const ServiceNode = ({ service, position, connections = [], isActive = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`absolute z-10 cursor-pointer ${position}`}
      whileHover={{ scale: 1.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Connection Lines */}
      {connections.map((connection, index) => (
        <div
          key={index}
          className={`absolute w-px bg-gradient-to-b from-purple-500/50 to-transparent ${connection}`}
          style={{ height: '60px' }}
        />
      ))}
      
      {/* Service Card */}
      <div className={`
        bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg p-3 min-w-[140px]
        transition-all duration-300
        ${isHovered ? 'border-purple-500/70 shadow-lg shadow-purple-500/20' : ''}
        ${isActive ? 'border-green-500/70' : ''}
      `}>
        {/* Service Icon */}
        <div className="flex items-center gap-2 mb-2">
          <div className={`w-3 h-3 rounded-full ${service.color}`}></div>
          <span className="text-white text-sm font-medium">{service.name}</span>
        </div>
        
        {/* Service URL */}
        <div className="text-xs text-blue-400 mb-2">
          {service.url}
        </div>
        
        {/* Status */}
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span className="text-xs text-green-400">Just deployed</span>
        </div>
      </div>
    </motion.div>
  );
};

// Network Diagram Component
const NetworkDiagram = () => {
  const services = [
    {
      name: 'frontend',
      url: 'frontend-prod.up.railway.app',
      color: 'bg-yellow-500',
      position: 'top-16 left-32'
    },
    {
      name: 'api gateway',
      url: 'api-prod.up.railway.app',
      color: 'bg-blue-500',
      position: 'top-16 right-32'
    },
    {
      name: 'ackee analytics',
      url: 'ackee-prod.up.railway.app',
      color: 'bg-cyan-500',
      position: 'top-48 left-16'
    },
    {
      name: 'backend',
      url: 'backend-prod.up.railway.app',
      color: 'bg-yellow-600',
      position: 'bottom-32 right-16'
    },
    {
      name: 'postgres',
      url: '',
      color: 'bg-blue-600',
      position: 'bottom-16 left-48'
    }
  ];

  return (
    <div className="relative w-full h-96 bg-gray-950/30 rounded-xl border border-gray-800/50 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#374151" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Central hub connections */}
        <circle cx="50%" cy="50%" r="60" fill="none" stroke="url(#connectionGradient)" strokeWidth="2" opacity="0.5" />
        
        {/* Service interconnections */}
        <path d="M 150 80 Q 250 120 350 80" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" opacity="0.6" />
        <path d="M 120 200 Q 200 250 400 280" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" opacity="0.6" />
        <path d="M 350 80 L 400 280" stroke="url(#connectionGradient)" strokeWidth="2" opacity="0.4" />
        <path d="M 150 80 L 120 200" stroke="url(#connectionGradient)" strokeWidth="2" opacity="0.4" />
        
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      {/* Central Network Hub */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm">
            <svg className="w-full h-full text-white p-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* Service Nodes */}
      {services.map((service, index) => (
        <ServiceNode
          key={index}
          service={service}
          position={service.position}
          isActive={index % 2 === 0}
        />
      ))}

      {/* Animated Data Flow */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/60 rounded-full"
            style={{
              left: `${20 + i * 12}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default function TrainSectionThree() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end end'],
  });
  
  // Train movement - continues from previous section
  const trainY = useTransform(scrollYProgress, [0, 1], [50, 350]);
  
  // Train glow intensity
  const trainGlow = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1, 0.4]);

  return (
    <section ref={containerRef} className='max-w-[1864px] text-left mx-auto  relative overflow-hidden px-5 py-5 md:py-0'>

      {/* Track and Train Container - Left Side */}
      <div className="absolute left-0 top-0 w-80 h-full flex justify-center">
        
        {/* Background Track SVG */}
        <div className="relative w-full h-full flex justify-center">
          
          {/* Center Rail Gradient */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center">
            <div className="h-full w-[4px] md:w-[6px] bg-[linear-gradient(180deg,#08070C_0%,rgba(139,92,246,0.8)_40%,rgba(139,92,246,0.8)_70%,#08070C_120%)]"></div>
          </div>

          {/* Animated Dot on Rail */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-8 h-8 rounded-full bg-[#8b5cf6] animate-dot-glow animate-dot-pulse relative">
              {/* Large Background Glow */}
              <div className="absolute inset-0 w-20 h-20 -m-6 rounded-full bg-[rgba(139,92,246,0.4)] blur-xl"></div>
              
              {/* Medium Glow Ring */}
              <div className="absolute inset-0 w-12 h-12 -m-2 rounded-full bg-[rgba(139,92,246,0.6)] blur-lg"></div>
              
              {/* Core Bright Center */}
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white via-purple-200 to-[#8b5cf6] animate-pulse" style={{animationDuration: '1.5s'}}></div>
              
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
              background: 'radial-gradient(ellipse, rgba(139, 92, 246, 0.8) 0%, rgba(139, 92, 246, 0.4) 40%, rgba(139, 92, 246, 0.1) 70%, transparent 100%)'
            }}
          />
          
          {/* Train SVG */}
          <img 
            src="/train3.svg" 
            alt="Railway train"
            style={{left:"-90px"}}
            className="w-[120px] h-[260px] md:w-[180px] max-w-fit scrollable-train hidden md:block absolute z-10"
          />
        </motion.div>
      </div>

      {/* Content Layout */}
      <div className="flex items-center min-h-[80vh]">
        
        {/* Left Content */}
        <div className="w-1/2 pl-80 pr-8 z-30">
          <h4 className='mb-4 text-lg font-medium text-[#8b5cf6]'>Network and Connect</h4>
          <h2 className="text-3xl text-white md:text-4xl font-medium mb-6 max-w-md">
            Interconnect your application seamlessly with highly performant networking
          </h2>
          <p className="text-base text-gray-400 mb-6 max-w-lg">
            Railway provides automated service discovery, blazing fast networking, and support for any protocol, all out of the box.
          </p>
          <a href="/features#network-and-connect" className="text-[#8b5cf6] hover:text-purple-400 transition-colors font-medium">
            Learn More →
          </a>

          {/* Replaces Section */}
          <div className="mt-8">
            <p className="text-sm text-gray-500 mb-3">Replaces</p>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-gray-800 rounded border border-gray-700 flex items-center justify-center">
                <span className="text-xs text-gray-400">⚙️</span>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded border border-gray-700 flex items-center justify-center">
                <span className="text-xs text-gray-400">🔗</span>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded border border-gray-700 flex items-center justify-center">
                <span className="text-xs text-gray-400">🌐</span>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded border border-gray-700 flex items-center justify-center">
                <span className="text-xs text-gray-400">⚠️</span>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded border border-gray-700 flex items-center justify-center">
                <span className="text-xs text-gray-400">⚙️</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Network Diagram */}
        <div className="w-1/2 pr-8 z-30">
          <NetworkDiagram />
        </div>
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
            box-shadow: 0 0 30px rgba(139, 92, 246, 0.8), 0 0 60px rgba(139, 92, 246, 0.6), 0 0 100px rgba(139, 92, 246, 0.4);
          }
          50% {
            box-shadow: 0 0 40px rgba(139, 92, 246, 1), 0 0 80px rgba(139, 92, 246, 0.8), 0 0 120px rgba(139, 92, 246, 0.6);
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