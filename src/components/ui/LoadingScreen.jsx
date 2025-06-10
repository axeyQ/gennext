'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLoading } from '../providers/LoadingProvider';


export const LoadingScreen = () => {
  const { isLoading, loadingProgress, loadingStage } = useLoading();
  const [particles, setParticles] = useState([]);
  const [loadingTips, setLoadingTips] = useState(0);

  // Loading tips carousel
  const tips = [
    "✨ Optimizing images for better performance",
    "🚀 Preparing lightning-fast templates", 
    "🎨 Loading beautiful UI components",
    "⚡ Setting up smooth animations",
    "🔧 Configuring smart lazy loading"
  ];

  // Generate floating particles
  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 3 + 2,
      opacity: Math.random() * 0.6 + 0.2,
      color: ['purple', 'cyan', 'pink'][Math.floor(Math.random() * 3)]
    }));
    setParticles(newParticles);
  }, []);

  // Cycling loading tips
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingTips(prev => (prev + 1) % tips.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [tips.length]);

  if (!isLoading) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-50 bg-[linear-gradient(180deg,#040406_50%,#09080D_100%)] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className={`absolute w-1 h-1 rounded-full ${
                particle.color === 'purple' ? 'bg-purple-400' :
                particle.color === 'cyan' ? 'bg-cyan-400' : 'bg-pink-400'
              }`}
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                opacity: particle.opacity,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [particle.opacity, particle.opacity * 0.3, particle.opacity],
              }}
              transition={{
                duration: particle.speed,
                repeat: Infinity,
                ease: "easeInOut",
                delay: particle.id * 0.1,
              }}
            />
          ))}
        </div>

        {/* Main Loading Content */}
        <div className="relative z-10 text-center max-w-lg mx-auto px-6">
          {/* Animated Logo */}
          <motion.div 
            className="mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative w-24 h-24 mx-auto mb-6">
              {/* Outer spinning ring */}
              <motion.div 
                className="absolute inset-0 border-4 border-purple-500/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Middle ring */}
              <motion.div 
                className="absolute inset-3 border-2 border-cyan-500/50 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Inner pulsing core */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
              </motion.div>
            </div>
            
            <motion.h1 
              className="text-3xl font-bold text-white mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              AutoGen Labs
            </motion.h1>
            
            <motion.p 
              className="text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Preparing your experience...
            </motion.p>
          </motion.div>

          {/* Progress Section */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {/* Progress Info */}
            <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
              <motion.span
                key={loadingStage}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {loadingStage}
              </motion.span>
              <span className="font-mono">{Math.round(loadingProgress)}%</span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${loadingProgress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </motion.div>

          {/* Loading Tips */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={loadingTips}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-sm text-gray-500"
              >
                {tips[loadingTips]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Skip Button (appears after 3 seconds) */}
          <motion.button
            className="mt-8 px-4 py-2 text-sm text-gray-500 hover:text-gray-300 transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.5 }}
            onClick={() => window.location.reload()}
          >
            Taking too long? Refresh page
          </motion.button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};


export const SimpleLoader = ({ text = "Loading...", className = "" }) => (
  <div className={`flex items-center justify-center ${className}`}>
    <div className="text-center">
      <div className="w-8 h-8 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-3"></div>
      <p className="text-gray-400 text-sm">{text}</p>
    </div>
  </div>
);


export const ProgressBar = ({ progress = 0, className = "" }) => (
  <div className={`w-full h-2 bg-gray-800 rounded-full overflow-hidden ${className}`}>
    <motion.div 
      className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
      initial={{ width: "0%" }}
      animate={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    />
  </div>
);