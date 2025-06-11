'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Bookmark, Share2, Play, Mail, Globe } from 'lucide-react';
import { LazyComponent } from '@/components/ui/LazyLoader';
import { GalleryImage } from '@/components/ui/OptimizedImage';

const BlogPage = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Fix hydration by ensuring client-side mounting
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render complex animations until mounted on client
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-[linear-gradient(180deg,#07060B_50%,#0A090E_100%)]">
        <div className="relative z-10">
          {/* Header */}
          <div className="pt-32 pb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
              News Media Website
            </h1>
          </div>

          {/* Profile Section */}
          <div className="max-w-6xl mx-auto px-8 mb-8">
            <div className="flex items-center justify-between">
              {/* Left Side - Profile Info */}
              <div className="flex items-center gap-4">
                {/* Profile Photo */}
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-r from-purple-600 to-cyan-600 p-0.5">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                    <GalleryImage
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
                      alt="Bogdan Failin"
                      width={60}
                      height={60}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>

                {/* Profile Details */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-bold text-white">
                      Bogdan Failin for QClay
                    </h2>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30">
                      Available for work
                    </span>
                    <button className="px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-white text-sm font-medium">
                      Follow
                    </button>
                  </div>

                  {/* Contact Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Mail size={14} />
                      <span>info@qclay.design</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Globe size={14} />
                      <span>qclay.design</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Action Buttons */}
              <div className="flex items-center gap-3">
                <button className="p-3 rounded-full bg-white/10 border border-white/20 text-gray-400">
                  <Heart size={18} />
                </button>
                <button className="p-3 rounded-full bg-white/10 border border-white/20 text-gray-400">
                  <Bookmark size={18} />
                </button>
                <button className="p-3 rounded-full bg-white/10 border border-white/20 text-gray-400">
                  <Share2 size={18} />
                </button>
                <button className="px-6 py-3 bg-gray-900 border border-gray-700 rounded-full text-white font-medium">
                  Get in touch
                </button>
              </div>
            </div>
          </div>

          {/* Main Hero Container */}
          <div className="max-w-6xl mx-auto px-8 mb-16">
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #E8E9F3 0%, #D1D5E8 100%)',
                minHeight: '500px'
              }}
            >
              {/* Video Play Button in Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl border border-white/50">
                  <Play size={28} className="text-gray-700 ml-1" fill="currentColor" />
                </button>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-gray-500/10" />
            </div>
          </div>

          {/* QClay Brand Section */}
          <div className="max-w-6xl mx-auto px-8 py-16">
            <div className="text-center mb-12">
              {/* Logo */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-200 to-orange-300 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-orange-800">Q</span>
                  </div>
                  {/* Green dot indicator */}
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
              </div>

              {/* Brand Name */}
              <h3 className="text-3xl font-bold text-white mb-4">QClay</h3>
              
              {/* Description */}
              <p className="text-lg text-gray-400 mb-8">
                We create awesome designs. Visit our website 🔥
              </p>

              {/* Action Buttons */}
              <div className="flex justify-center gap-4 mb-8">
                <button className="px-6 py-3 bg-gray-900 border border-gray-700 rounded-full text-white font-medium">
                  Get in touch
                </button>
                <button className="px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white font-medium">
                  Schedule a call
                </button>
              </div>

              {/* Contact Info */}
              <div className="flex justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>info@qclay.design</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={16} />
                  <span>qclay.design</span>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Section */}
          <div className="max-w-6xl mx-auto px-8 pb-20">
            <div className="flex items-center justify-between mb-8">
              <h4 className="text-2xl font-bold text-white">More by QClay</h4>
              <button className="text-purple-400 font-medium">
                View profile
              </button>
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item, index) => (
                <div key={item} className="group cursor-pointer">
                  <div
                    className="relative rounded-2xl border border-white/20 overflow-hidden shadow-xl"
                    style={{
                      background: `linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 100%)`,
                      backdropFilter: 'blur(15px)',
                    }}
                  >
                    <div className={`relative aspect-[4/3] p-4 ${
                      index === 0 ? 'bg-gradient-to-br from-gray-800 to-gray-900' :
                      index === 1 ? 'bg-gradient-to-br from-blue-800 to-purple-900' :
                      index === 2 ? 'bg-gradient-to-br from-green-800 to-teal-900' :
                      'bg-gradient-to-br from-yellow-800 to-orange-900'
                    }`}>
                      <GalleryImage
                        src={`https://images.unsplash.com/photo-${
                          index === 0 ? '1460925895917-afdab827c52f' :
                          index === 1 ? '1551288049-bebda4e38f71' :
                          index === 2 ? '1558494949-ef010cbdcc31' :
                          '1504868584819-f8e8b4b6d7e3'
                        }?w=400&h=300&fit=crop&auto=format&q=80`}
                        alt={`Portfolio Project ${item}`}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Global CSS */}
      <style jsx global>{`
        .blog-container {
          opacity: 1;
          transform: none;
        }
      `}</style>

      <div className="min-h-screen bg-[linear-gradient(180deg,#07060B_50%,#0A090E_100%)]" suppressHydrationWarning>
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
          
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

        <div className="relative z-10">
          {/* Header */}
          <motion.div
            className="pt-32 pb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
              News Media Website
            </h1>
          </motion.div>

          {/* Profile Section */}
          <motion.div
            className="max-w-6xl mx-auto px-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center justify-between">
              {/* Left Side - Profile Info */}
              <div className="flex items-center gap-4">
                {/* Profile Photo */}
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-r from-purple-600 to-cyan-600 p-0.5">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                    <GalleryImage
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
                      alt="Bogdan Failin"
                      width={60}
                      height={60}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>

                {/* Profile Details */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-bold text-white">
                      Bogdan Failin for QClay
                    </h2>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30">
                      Available for work
                    </span>
                    <motion.button
                      className="px-4 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-full text-white text-sm font-medium transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Follow
                    </motion.button>
                  </div>

                  {/* Contact Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Mail size={14} />
                      <span>info@qclay.design</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Globe size={14} />
                      <span>qclay.design</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Action Buttons */}
              <div className="flex items-center gap-3">
                {/* Like Button */}
                <motion.button
                  className={`p-3 rounded-full border transition-all duration-300 ${
                    isLiked 
                      ? 'bg-red-500/20 border-red-500/30 text-red-400' 
                      : 'bg-white/10 border-white/20 text-gray-400 hover:bg-white/20 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <Heart size={18} fill={isLiked ? 'currentColor' : 'none'} />
                </motion.button>

                {/* Bookmark Button */}
                <motion.button
                  className={`p-3 rounded-full border transition-all duration-300 ${
                    isBookmarked 
                      ? 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400' 
                      : 'bg-white/10 border-white/20 text-gray-400 hover:bg-white/20 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsBookmarked(!isBookmarked)}
                >
                  <Bookmark size={18} fill={isBookmarked ? 'currentColor' : 'none'} />
                </motion.button>

                {/* Share Button */}
                <motion.button
                  className="p-3 rounded-full bg-white/10 border border-white/20 text-gray-400 hover:bg-white/20 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Share2 size={18} />
                </motion.button>

                {/* Get in Touch Button */}
                <motion.button
                  className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-gray-600 rounded-full text-white font-medium transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get in touch
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Main Hero Container */}
          <motion.div
            className="max-w-6xl mx-auto px-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #E8E9F3 0%, #D1D5E8 100%)',
                minHeight: '500px'
              }}
            >
              {/* Video Play Button in Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl border border-white/50 group"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Play 
                    size={28} 
                    className="text-gray-700 ml-1 group-hover:text-gray-900 transition-colors" 
                    fill="currentColor" 
                  />
                </motion.button>
              </div>

              {/* Subtle Pattern Overlay */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: '60px 60px'
                }}
              />

              {/* Gradient Overlay for Depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-gray-500/10" />
            </div>
          </motion.div>

          {/* QClay Brand Section */}
          <motion.div
            className="max-w-6xl mx-auto px-8 py-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* QClay Logo and Brand */}
            <div className="text-center mb-12">
              {/* Logo */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-200 to-orange-300 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-orange-800">Q</span>
                  </div>
                  {/* Green dot indicator */}
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
              </div>

              {/* Brand Name */}
              <h3 className="text-3xl font-bold text-white mb-4">QClay</h3>
              
              {/* Description */}
              <p className="text-lg text-gray-400 mb-8">
                We create awesome designs. Visit our website 🔥
              </p>

              {/* Action Buttons */}
              <div className="flex justify-center gap-4 mb-8">
                <motion.button
                  className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-gray-600 rounded-full text-white font-medium transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get in touch
                </motion.button>
                <motion.button
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-full text-white font-medium transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Schedule a call
                </motion.button>
              </div>

              {/* Contact Info */}
              <div className="flex justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>info@qclay.design</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={16} />
                  <span>qclay.design</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Portfolio Section */}
          <motion.div
            className="max-w-6xl mx-auto px-8 pb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h4 className="text-2xl font-bold text-white">More by QClay</h4>
              <motion.button
                className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
                whileHover={{ x: 5 }}
              >
                View profile
              </motion.button>
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Portfolio Items */}
              {[1, 2, 3, 4].map((item, index) => (
                <LazyComponent key={item} delay={900 + index * 100}>
                  <motion.div
                    className="group cursor-pointer"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className="relative rounded-2xl border border-white/20 overflow-hidden shadow-xl transition-all duration-300 group-hover:shadow-purple-500/20 group-hover:border-purple-500/30"
                      style={{
                        background: `linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 100%)`,
                        backdropFilter: 'blur(15px)',
                      }}
                    >
                      <div className={`relative aspect-[4/3] p-4 ${
                        index === 0 ? 'bg-gradient-to-br from-gray-800 to-gray-900' :
                        index === 1 ? 'bg-gradient-to-br from-blue-800 to-purple-900' :
                        index === 2 ? 'bg-gradient-to-br from-green-800 to-teal-900' :
                        'bg-gradient-to-br from-yellow-800 to-orange-900'
                      }`}>
                        <GalleryImage
                          src={`https://images.unsplash.com/photo-${
                            index === 0 ? '1460925895917-afdab827c52f' :
                            index === 1 ? '1551288049-bebda4e38f71' :
                            index === 2 ? '1558494949-ef010cbdcc31' :
                            '1504868584819-f8e8b4b6d7e3'
                          }?w=400&h=300&fit=crop&auto=format&q=80`}
                          alt={`Portfolio Project ${item}`}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </motion.div>
                </LazyComponent>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;