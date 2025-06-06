'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import VideoSection from "../ui/VideoSection";
import TypewriterText from "../ui/TypewriterText"; // Import the typewriter component

export default function HeroSample() {
  const containerRef = useRef(null);
   
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });
   
  // Scale animation - starts small and scales up as you scroll
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
   
  // Optional: Add some opacity fade-in effect
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 1]);
   
  // Optional: Add Y movement for parallax effect - starts higher up
  const y = useTransform(scrollYProgress, [0, 1], [-100, -50]);

  // Typewriter text options
  const typewriterTexts = [
    "Railway simplifies your infrastructure stack from servers to observability with a single.",
    "Deploy applications instantly with zero configuration and automatic .",
    "Build full-stack applications with integrated databases - all in one place.",
    "From prototype to production - Railway handles your entire development.",
    "Ship faster with instant deployments, built-in monitoring team collaboration."
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-[linear-gradient(180deg,_#040406_50%,_#09080D_100%)] text-white relative flex flex-col justify-between items-center">
      {/* Circuit Board Background - Only in Hero Section */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Static Circuit Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='300' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='circuit' x='0' y='0' width='300' height='300' patternUnits='userSpaceOnUse'%3E%3Cg fill='none' stroke='%234ade80' stroke-width='0.4'%3E%3Cline x1='30' y1='75' x2='120' y2='75'/%3E%3Cline x1='180' y1='75' x2='270' y2='75'/%3E%3Cline x1='60' y1='150' x2='150' y2='150'/%3E%3Cline x1='210' y1='150' x2='300' y2='150'/%3E%3Cline x1='0' y1='225' x2='90' y2='225'/%3E%3Cline x1='180' y1='225' x2='270' y2='225'/%3E%3Cline x1='75' y1='30' x2='75' y2='120'/%3E%3Cline x1='75' y1='180' x2='75' y2='270'/%3E%3Cline x1='150' y1='60' x2='150' y2='150'/%3E%3Cline x1='225' y1='0' x2='225' y2='90'/%3E%3Cline x1='225' y1='180' x2='225' y2='300'/%3E%3Cpath d='M120,75 L150,75 L150,105'/%3E%3Cpath d='M150,150 L180,150 L180,180'/%3E%3Cpath d='M90,225 L120,225 L120,195'/%3E%3Ccircle cx='75' cy='75' r='2' fill='%234ade80' fill-opacity='0.3'/%3E%3Ccircle cx='150' cy='150' r='2' fill='%234ade80' fill-opacity='0.3'/%3E%3Ccircle cx='225' cy='225' r='2' fill='%234ade80' fill-opacity='0.3'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23circuit)'/%3E%3C/svg%3E")`
          }}
        />
         
        {/* Animated Current Flow Lines */}
        <div className="absolute inset-0">
          {/* Horizontal flowing lines */}
          <div
            className="absolute top-[25%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent opacity-20 animate-pulse"
            style={{
              animation: 'flowHorizontal 8s ease-in-out infinite',
              animationDelay: '0s'
            }}
          />
          <div
            className="absolute top-[50%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-400/30 to-transparent opacity-20"
            style={{
              animation: 'flowHorizontal 12s ease-in-out infinite',
              animationDelay: '2s'
            }}
          />
          <div
            className="absolute top-[75%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent opacity-20"
            style={{
              animation: 'flowHorizontal 10s ease-in-out infinite',
              animationDelay: '4s'
            }}
          />
           
          {/* Vertical flowing lines */}
          <div
            className="absolute left-[25%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-green-400/30 to-transparent opacity-20"
            style={{
              animation: 'flowVertical 9s ease-in-out infinite',
              animationDelay: '1s'
            }}
          />
          <div
            className="absolute left-[50%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent opacity-20"
            style={{
              animation: 'flowVertical 11s ease-in-out infinite',
              animationDelay: '3s'
            }}
          />
          <div
            className="absolute left-[75%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-green-400/30 to-transparent opacity-20"
            style={{
              animation: 'flowVertical 13s ease-in-out infinite',
              animationDelay: '5s'
            }}
          />
        </div>

        {/* Pulsing Connection Points */}
        <div className="absolute inset-0">
          <div
            className="absolute top-[25%] left-[25%] w-2 h-2 bg-green-400/40 rounded-full"
            style={{ animation: 'pulse 3s ease-in-out infinite' }}
          />
          <div
            className="absolute top-[50%] left-[50%] w-2 h-2 bg-cyan-400/40 rounded-full"
            style={{ animation: 'pulse 4s ease-in-out infinite', animationDelay: '1s' }}
          />
          <div
            className="absolute top-[75%] left-[75%] w-2 h-2 bg-green-400/40 rounded-full"
            style={{ animation: 'pulse 5s ease-in-out infinite', animationDelay: '2s' }}
          />
          <div
            className="absolute top-[30%] left-[70%] w-1.5 h-1.5 bg-cyan-400/30 rounded-full"
            style={{ animation: 'pulse 3.5s ease-in-out infinite', animationDelay: '0.5s' }}
          />
          <div
            className="absolute top-[60%] left-[30%] w-1.5 h-1.5 bg-green-400/30 rounded-full"
            style={{ animation: 'pulse 4.5s ease-in-out infinite', animationDelay: '1.5s' }}
          />
        </div>

        {/* Gentle Glow */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '8s'}} />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '12s'}} />
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes flowHorizontal {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          20% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
          80% {
            opacity: 0.3;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
         
        @keyframes flowVertical {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          20% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
          80% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }
         
        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.5);
          }
        }

        /* Fix for typewriter text wrapping */
        .typewriter-container {
          word-wrap: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
          line-height: 1.6;
        }
      `}</style>

      {/* Hero Section - Your Original Code with Typewriter */}
      <section className="relative z-10 min-h-screen flex items-center justify-start w-full pl-42 overflow-x-clip mb-10">
        <div className="text-left flex flex-col justify-start h-full align-items-start">
          <h1 className="font-tight leading-[1.1875] sm:leading-[1.1875] md:leading-[1.1875] text-[32px] sm:text-5xl md:text-6xl max-w-[900px] font-semibold mb-5 tracking-tight text-start">
            <span className="hidden md:inline">
            Step into the future <br/>of design</span>
          </h1>
           
          {/* Updated subtitle with Typewriter effect */}
          <div className="min-h-[60px] flex items-start justify-start w-full">
            <TypewriterText 
              texts={typewriterTexts}
              typingSpeed={60}
              deletingSpeed={40}
              pauseDuration={3000}
              className=" text-lg max-w-[860px] text-gray-600 text-start typewriter-container"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
              Deploy a new project
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg font-medium border border-gray-700 transition-colors">
              Book a demo
            </button>
          </div>
        </div>
        <iframe
                            src="https://my.spline.design/robotfollowcursorforlandingpagemc-yDQ2KJIJ96N4Mlk7CyhxQfiB/"
                            frameBorder="0"
                            style={{
                                width: '150%',
                                height: '150%',
                                transform: 'scale(0.65)',
                                transformOrigin: 'center center',
                                position: 'absolute',
                                top: '-30%',
                                left: '-5%',
                                zIndex:100
                            }}
                            title="AI Robot Animation"
                            allow="autoplay; fullscreen; vr"
                        />
      </section>

      {/* Scroll-Animated VideoSection */}
      <motion.div
        className="flex justify-center items-center w-10/12 p-10 border-2 border-amber-50 rounded-3xl relative z-10"
        style={{
          scale,
          opacity,
          y
        }}
      >
        <VideoSection/>
      </motion.div>
    </div>
  );
}