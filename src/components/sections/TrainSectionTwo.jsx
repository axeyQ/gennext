'use client';
import { motion } from 'framer-motion';

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

// Main Component Showcase with proper edge cutoffs and dark theme
export default function TrainSectionTwo() {
  return (
    <section className="w-full bg-black py-24">
      <div className="">
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