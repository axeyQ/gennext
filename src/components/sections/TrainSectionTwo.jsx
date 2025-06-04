'use client';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { cn } from "@/lib/utils";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

// BentoGrid Components
const BentoGrid = ({ className, children }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 md:auto-rows-[12rem] md:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {children.map((child, index) => 
        React.cloneElement(child, {
          key: index,
          isHovered: hoveredIndex === index,
          isOtherHovered: hoveredIndex !== null && hoveredIndex !== index,
          onHover: () => setHoveredIndex(index),
          onLeave: () => setHoveredIndex(null),
        })
      )}
    </div>
  );
};

const BentoGridItem = ({
  className,
  photos = [],
  isHovered = false,
  isOtherHovered = false,
  onHover,
  onLeave
}) => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  const handleMouseEnter = () => {
    onHover?.();
    if (swiperInstance && photos.length > 0) {
      swiperInstance.autoplay.start();
      setProgressKey(prev => prev + 1); // Restart progress animation
    }
  };

  const handleMouseLeave = () => {
    onLeave?.();
    if (swiperInstance && photos.length > 0) {
      swiperInstance.autoplay.stop();
      swiperInstance.slideTo(0);
      setCurrentSlide(0);
      setProgressKey(0); // Reset progress
    }
  };

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex);
    setProgressKey(prev => prev + 1); // Restart progress animation on slide change
  };

  return (
    <div
      className={cn(
        "group/bento row-span-1 rounded-xl border border-white/10 bg-[#0A090E] transition-all duration-500 ease-out cursor-pointer overflow-hidden relative",
        // Scale and blur effects
        isHovered && "scale-105 shadow-2xl shadow-pink-500/30 z-10",
        isOtherHovered && "scale-95 blur-sm opacity-60",
        !isHovered && !isOtherHovered && "hover:shadow-xl hover:shadow-pink-500/20",
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Progress Bar */}
      {photos.length > 0 && (
        <div 
          className={cn(
            "absolute top-0 left-0 right-0 h-1 bg-white/10 z-20 transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          <div 
            key={progressKey}
            className={cn(
              "h-full bg-gradient-to-r from-[#C2298A] to-pink-400 rounded-full transition-all duration-300",
              isHovered && progressKey > 0 ? "animate-progress" : "w-0"
            )}
          />
        </div>
      )}

      {/* Photo Carousel */}
      <div className="relative w-full h-full rounded-xl overflow-hidden">
        {photos.length > 0 ? (
          <Swiper
            modules={[Autoplay, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            effect="fade"
            autoplay={{
              delay: 5000, // 5 seconds between slides
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            loop={true}
            speed={800}
            className="w-full h-full"
            allowTouchMove={isHovered}
            onSwiper={setSwiperInstance}
            onSlideChange={handleSlideChange}
            autoHeight={false}
            // Disable autoplay by default - will be controlled by hover
          >
            {photos.map((photo, index) => (
              <SwiperSlide key={index}>
                <div 
                  className={cn(
                    "w-full h-full bg-cover bg-center transition-all duration-500",
                    isHovered && "scale-110"
                  )}
                  style={{ backgroundImage: `url(${photo})` }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#C2298A]/20 to-[#C2298A]/5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#C2298A] to-pink-400" />
          </div>
        )}
        
        {/* Hover overlay with slide indicators */}
        {photos.length > 0 && (
          <div 
            className={cn(
              "absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1 transition-opacity duration-300",
              isHovered ? "opacity-100" : "opacity-0"
            )}
          >
            {photos.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full backdrop-blur-sm transition-all duration-300",
                  currentSlide === index ? "bg-white/90 scale-110" : "bg-white/50"
                )}
              />
            ))}
          </div>
        )}

        {/* Subtle overlay for better contrast when not hovered */}
        <div 
          className={cn(
            "absolute inset-0 bg-black/20 transition-opacity duration-500",
            isOtherHovered ? "opacity-40" : "opacity-0"
          )}
        />
      </div>

      {/* Custom CSS for progress animation and dot effects */}
      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        
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
            box-shadow: 0 0 20px rgba(194, 41, 138, 0.6), 0 0 40px rgba(194, 41, 138, 0.4), 0 0 60px rgba(194, 41, 138, 0.2);
          }
          50% {
            box-shadow: 0 0 30px rgba(194, 41, 138, 0.8), 0 0 60px rgba(194, 41, 138, 0.6), 0 0 90px rgba(194, 41, 138, 0.4);
          }
        }
        
        .animate-progress {
          animation: progress 5s linear;
        }
        
        .animate-dot-pulse {
          animation: dotPulse 2s ease-in-out infinite;
        }
        
        .animate-dot-glow {
          animation: dotGlow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default function TrainSectionTwo() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end end'],
  });
  
  // Train movement - reaches near end with smooth progression
  const trainY = useTransform(scrollYProgress, [0, 1], [100, 600]);
  
  // Train glow intensity
  const trainGlow = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1, 0.4]);

  // BentoGrid items - only photos
  const bentoItems = [
    {
      photos: [
        "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=400&h=200&fit=crop",
        "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=200&fit=crop",
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=200&fit=crop"
      ]
    },
    {
      photos: [
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=200&fit=crop",
        "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=200&fit=crop",
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop"
      ]
    },
    {
      photos: [
        "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=200&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop",
        "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=400&h=200&fit=crop"
      ]
    },
    {
      photos: [
        "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=200&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop",
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=200&fit=crop"
      ]
    },
    {
      photos: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=200&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop"
      ]
    },
    {
      photos: [
        "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=400&h=200&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=200&fit=crop"
      ]
    }
  ];

  return (
    <section ref={containerRef} className='max-w-[1864px] text-left px-5 py-5 md:py-0 mx-auto md:rounded-2xl border-y md:border-x border-white/10 bg-[linear-gradient(180deg,#07060B_50%,#0A090E_100%)] relative min-h-[150vh] overflow-hidden'>

      {/* Track and Train Container - Positioned on the left */}
      <div className="absolute left-0 top-0 w-80 h-full flex justify-center">
        
        {/* Background Track SVG */}
        <div className="relative w-full h-full flex justify-center">
          
          {/* Center Rail Gradient */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center">
            <div className="h-full w-[4px] md:w-[6px] bg-[linear-gradient(180deg,#08070C_0%,rgba(194,41,138,0.8)_40%,rgba(194,41,138,0.8)_70%,#08070C_120%)]"></div>
          </div>

          {/* Animated Dot on Rail */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            {/* Outer Glow Ring */}
            <div className="absolute inset-0 w-20 h-20 -m-10 rounded-full bg-[rgba(194,41,138,0.2)] animate-ping" style={{animationDuration: '3s'}}></div>
            
            {/* Middle Glow Ring */}
            <div className="absolute inset-0 w-14 h-14 -m-7 rounded-full bg-[rgba(194,41,138,0.4)] animate-dot-pulse"></div>
            
            {/* Inner Dot with Custom Glow */}
            <div className="w-5 h-5 rounded-full bg-[#C2298A] animate-dot-glow relative overflow-hidden">
              {/* Core Bright Center */}
              <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-white via-pink-200 to-[#C2298A] animate-pulse" style={{animationDuration: '1.5s'}}></div>
              
              {/* Inner Shine */}
              <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-white/80 animate-pulse" style={{animationDuration: '2s'}}></div>
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
              background: 'radial-gradient(ellipse, rgba(202, 36, 77, 0.8) 0%, rgba(202, 36, 77, 0.4) 40%, rgba(202, 36, 77, 0.1) 70%, transparent 100%)'
            }}
          />
          
          {/* Train SVG */}
          <img 
            src="/train2.svg" 
            alt="Railway train"
            style={{left:"-90px"}}
            className="w-[120px] h-[260px] md:w-[180px] max-w-fit scrollable-train hidden md:block absolute z-10"
          />
        </motion.div>
      </div>

      {/* Content - Positioned on the right side */}
      <div className="ml-80 h-full flex flex-col justify-start px-16 py-32 z-30">
        
        {/* Header Content */}
        <div className="mb-12">
          <h4 className='mb-4 text-lg font-medium text-[#C2298A]'>Build and Deploy</h4>
          <h2 className="text-4xl text-white md:text-5xl font-medium max-w-[540px] mb-6">
            <span className="hidden md:inline">Craft a complete full-stack application with a powerful visual canvas</span>
            <span className="inline md:hidden">Craft full-stack applications with a powerful visual canvas</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-[546px]">
            <span className="hidden md:inline">Railway builds and deploys any combination of services, volumes, and databases from GitHub or Docker.</span>
            <span className="inline md:hidden">Railway deploys any combination of services, volumes, and databases from GitHub or Docker.</span>
            <a href="/features#build-and-deploy" target="_blank" rel="noreferrer" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 group text-foreground whitespace-nowrap ml-2">
              <span className="group-hover:underline">Learn More</span>
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </a>
          </p>
        </div>

        {/* BentoGrid */}
        <BentoGrid className="max-w-4xl">
          {bentoItems.map((item, index) => (
            <BentoGridItem
              photos={item.photos}
              className={index === 0 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>

      </div>
    </section>
  );
}