'use client';
import { useState } from 'react';
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

      {/* Custom CSS for progress animation */}
      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        
        .animate-progress {
          animation: progress 5s linear;
        }
      `}</style>
    </div>
  );
};

// Main Interactive BentoGrid Component
export default function InteractiveBentoGrid({ className }) {
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
    <BentoGrid className={cn("max-w-4xl", className)}>
      {bentoItems.map((item, index) => (
        <BentoGridItem
          photos={item.photos}
          className={index === 0 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}