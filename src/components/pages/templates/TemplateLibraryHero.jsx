'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star } from 'lucide-react';

const TemplateLibraryHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="relative min-h-screen w-full bg-[linear-gradient(180deg,#040406_50%,#09080D_100%)] text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Glassmorphism background orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full " style={{
            backgroundImage: `
              linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-20 min-h-screen flex items-center">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* Left Side - Main Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            
            {/* Main Heading */}
            <div className="space-y-6">
              <motion.div 
                className="flex items-center gap-3"
                variants={itemVariants}
              >
                {/* Code/Template Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-white/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  AutoGen Labs{' '}
                  <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Template Library
                  </span>
                </h1>
              </motion.div>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl"
                variants={itemVariants}
              >
                Curated collection of infrastructure templates for rapid deployment and scaling.
              </motion.p>
            </div>

            {/* Get Started Section */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <p className="text-gray-500 text-sm">
                Start building with our pre-configured templates — deploy in minutes, not hours.
              </p>
              
              <motion.button
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-semibold text-lg transition-all duration-300 hover:from-purple-700 hover:to-cyan-700 hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
                <ArrowRight size={20} />
              </motion.button>
            </motion.div>

            {/* Stats/Features */}
            <motion.div 
              className="flex gap-8 pt-8"
              variants={itemVariants}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-gray-400">Templates</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">10k+</div>
                <div className="text-sm text-gray-400">Deployments</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Placeholder Promotional Card */}
          <motion.div className="lg:justify-self-end" variants={itemVariants}>
            <div
              className="relative w-full max-w-md rounded-3xl border border-white/20 overflow-hidden shadow-2xl"
              style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)`,
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* Card Header */}
              <div className="relative h-48 bg-gradient-to-br from-purple-600/80 to-cyan-600/80 p-6 flex flex-col justify-between">
                
                {/* Featured Badge */}
                <div className="flex justify-between items-start">
                  <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                    <span className="text-white text-xs font-medium">Featured</span>
                  </div>
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                </div>

                {/* Card Title */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Premium Infrastructure Templates
                  </h3>
                  <p className="text-white/80 text-sm">
                    Deploy enterprise-ready applications in one click
                  </p>
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full" style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }} />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-3">
                  {[
                    { name: 'Next.js + Vercel', status: 'Ready' },
                    { name: 'React + Railway', status: 'Ready' },
                    { name: 'Node.js + Docker', status: 'Ready' }
                  ].map((template, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        </div>
                        <span className="text-white text-sm font-medium">{template.name}</span>
                      </div>
                      <span className="text-green-400 text-xs">{template.status}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-medium transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Play size={16} />
                  Preview Templates
                </motion.button>
              </div>

              {/* Glassmorphism Shine Effect */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background: `linear-gradient(135deg,
                    rgba(255,255,255,0.1) 0%,
                    rgba(255,255,255,0.05) 25%,
                    transparent 50%,
                    rgba(255,255,255,0.05) 75%,
                    rgba(255,255,255,0.1) 100%)`
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TemplateLibraryHero;