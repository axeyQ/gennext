'use client';
import React from 'react';
import { motion } from 'framer-motion';

const PremiumTemplateShowcase = () => {
  // Template cards data
  const templateCards = [
    {
      id: 1,
      title: "Infrastructure templates for modern developers.",
      description: "Easy-to-customize deployment templates that drive performance and scale with you as your applications grow.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      premium: true
    },
    {
      id: 2,
      title: "AutoGen & DevOps Templates for Agencies, Startups & Creators",
      description: "Professional infrastructure solutions designed for rapid deployment and scaling.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      premium: true
    },
    {
      id: 3,
      title: "You need a powerful infrastructure template.",
      description: "Deploy enterprise-grade applications with our pre-configured templates and best practices.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
      premium: true
    },
    {
      id: 4,
      title: "Ultimate DevOps Kit and Deployment System for AutoGen",
      description: "Revolutionary infrastructure templates with AI-powered optimization and scaling capabilities.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      premium: true
    }
  ];

  // Partner/Technology logos
  const partners = [
    {
      name: "CloudBlox",
      description: "Ultimate infrastructure UI kit and prebuilt templates for developers",
      icon: "🔷"
    },
    {
      name: "DeployHub",
      description: "Deployment automation, CI/CD pipelines & Infrastructure Assets",
      icon: "🚀"
    },
    {
      name: "ScaleVault",
      description: "Build Better Infrastructure with Auto-scaling Feedback",
      icon: "⚡"
    },
    {
      name: "DevForge",
      description: "Learn Infrastructure Design and How to Build Scalable Applications",
      icon: "🔨"
    },
    {
      name: "AutoGen",
      description: "The AI platform for intelligent infrastructure management",
      icon: "🤖"
    },
    {
      name: "CloudSync",
      description: "Infrastructure management, get 20% off for 3 months",
      icon: "☁️"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="relative w-full bg-[linear-gradient(180deg,#07060B_50%,#0A090E_100%)] py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Glassmorphism background orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
        
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Premium infrastructure sections
          </h2>
        </motion.div>

        {/* Template Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {templateCards.map((template, index) => (
            <motion.div
              key={template.id}
              className="relative group cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Template Card */}
              <div
                className="relative rounded-3xl border border-white/20 overflow-hidden shadow-2xl transition-all duration-300 group-hover:shadow-purple-500/20 group-hover:border-purple-500/30 h-[380px] flex flex-col"
                style={{
                  background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)`,
                  backdropFilter: 'blur(20px)',
                }}
              >
                {/* Premium Badge */}
                {template.premium && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full">
                      Premium
                    </div>
                  </div>
                )}

                {/* Template Preview Image */}
                <div className="relative h-40 overflow-hidden flex-shrink-0">
                  <img
                    src={template.image}
                    alt={template.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5 space-y-3 flex-1 flex flex-col">
                  <h3 className="text-sm font-bold text-white leading-tight line-clamp-2">
                    {template.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed flex-1 line-clamp-4">
                    {template.description}
                  </p>
                  
                  {/* Action Button */}
                  <button className="text-purple-400 hover:text-purple-300 font-medium text-xs transition-colors self-start">
                    View Template →
                  </button>
                </div>

                {/* Glassmorphism Shine Effect */}
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
          ))}
        </motion.div>

        {/* Partners/Technologies Section */}
        <motion.div
          className="border-t border-white/10 pt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: false }}
                whileHover={{ x: 5 }}
              >
                {/* Partner Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-purple-500/30 transition-all duration-300">
                  <span className="text-xl">{partner.icon}</span>
                </div>
                
                {/* Partner Info */}
                <div className="space-y-1">
                  <h4 className="text-white font-semibold group-hover:text-purple-400 transition-colors">
                    {partner.name}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CSS for text truncation */}
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default PremiumTemplateShowcase;