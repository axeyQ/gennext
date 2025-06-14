'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ThreeSteps() {
  const steps = [
    {
      id: 1,
      title: "Install latest version of Visual Studio 2022",
      description: "GitHub Copilot's latest experience is integrated into Visual Studio and combines the capabilities of GitHub Copilot's code completion and GitHub Copilot Chat into one convenient package. Download the latest Visual Studio 2022 to discover the new features and improvements.",
      buttonText: "Download",
      hasDropdown: true,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Start using Copilot for free",
      description: "GitHub Copilot is free to use in Visual Studio, with limited access to select Copilot features. No trial. No credit card required. Just your GitHub account.",
      buttonText: "Get Started",
      hasDropdown: false,
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Sign in with your GitHub account",
      description: "To enable GitHub Copilot, ensure you have added your GitHub account to Visual Studio. For more information, see Work with GitHub accounts in Visual Studio in the Microsoft documentation.",
      buttonText: "Learn more",
      hasDropdown: false,
      image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section className="relative min-h-screen bg-black overflow-hidden py-12 sm:py-16 md:py-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Glassmorphism background orbs */}
        <div className="absolute top-20 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px, 60px 60px'
          }} />
        </div>
      </div>

      {/* Content - Centered */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-full flex flex-col justify-center">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">
            Get started in just 3 steps
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false }}
            >
              {/* Glass Card */}
              <div 
                className="relative rounded-2xl md:rounded-3xl border border-white/20 overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-purple-500/20 hover:border-purple-500/30 h-[420px] sm:h-[450px] md:h-[480px] flex flex-col"
                style={{
                  background: `linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(6,182,212,0.05) 50%, rgba(236,72,153,0.1) 100%)`,
                  backdropFilter: 'blur(20px)',
                }}
              >
                {/* Step Number */}
                <div className="absolute top-4 sm:top-5 md:top-6 left-4 sm:left-5 md:left-6 z-10">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center">
                    <span className="text-white font-bold text-sm sm:text-base md:text-lg">{step.id}</span>
                  </div>
                </div>

                {/* Image */}
                <div className="relative h-32 sm:h-36 md:h-40 lg:h-44 overflow-hidden">
                  <Image
                    width={400}
                    height={176} 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4 flex-1 flex flex-col">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white leading-tight">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed flex-1 line-clamp-4">
                    {step.description}
                  </p>
                  
                  {/* Button */}
                  <div className="pt-2 sm:pt-3 md:pt-4 mt-auto">
                    <motion.button
                      className={`w-full sm:w-auto px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-lg md:rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base ${
                        step.id === 1 
                          ? 'bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white'
                          : 'bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="hidden sm:inline">{step.buttonText}</span>
                      <span className="sm:hidden">
                        {step.buttonText === "Download" ? "Download" : 
                         step.buttonText === "Get Started" ? "Start" : 
                         "Learn"}
                      </span>
                      {step.hasDropdown && (
                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </motion.button>
                  </div>
                </div>

                {/* Glassmorphism shine effect */}
                <div 
                  className="absolute inset-0 rounded-2xl md:rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
        </div>
      </div>

      {/* Custom CSS for text clamping */}
      <style jsx>{`
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}