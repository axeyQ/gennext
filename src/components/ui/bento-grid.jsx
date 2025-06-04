'use client';
import { cn } from "@/lib/utils";
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

export const BentoGrid = ({
  className,
  children
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  photos = [] // Array of photo URLs
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none overflow-hidden",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header with Swiper Carousel */}
      <div className="relative h-32 w-full rounded-lg overflow-hidden bg-gradient-to-br from-neutral-200 dark:from-neutral-900 to-neutral-100 dark:to-neutral-800">
        {photos.length > 0 ? (
          <Swiper
            modules={[Autoplay, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            effect="fade"
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            loop={true}
            speed={800}
            className="w-full h-full"
            allowTouchMove={isHovered}
          >
            {photos.map((photo, index) => (
              <SwiperSlide key={index}>
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-300 hover:scale-105"
                  style={{ backgroundImage: `url(${photo})` }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          // Fallback header if no photos provided
          <div className="w-full h-full flex items-center justify-center">
            {header}
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
                className="w-2 h-2 rounded-full bg-white/70 backdrop-blur-sm"
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};

// Usage Example Component
export const ExampleBentoGrid = () => {
  const items = [
    {
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms to analyze your data patterns and provide actionable insights.",
      icon: <div className="w-4 h-4 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500" />,
      photos: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&h=300&fit=crop"
      ]
    },
    {
      title: "Real-time Collaboration",
      description: "Work together seamlessly with your team in real-time, no matter where you are.",
      icon: <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />,
      photos: [
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&h=300&fit=crop"
      ]
    },
    {
      title: "Secure Infrastructure",
      description: "Enterprise-grade security with end-to-end encryption and compliance standards.",
      icon: <div className="w-4 h-4 rounded-full bg-gradient-to-r from-green-500 to-teal-500" />,
      photos: [
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=300&fit=crop"
      ]
    }
  ];

  return (
    <div className="p-8 bg-neutral-100 dark:bg-neutral-900 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8 text-neutral-800 dark:text-neutral-200">
        Our Features
      </h2>
      <BentoGrid>
        {items.map((item, index) => (
          <BentoGridItem
            key={index}
            title={item.title}
            description={item.description}
            icon={item.icon}
            photos={item.photos}
            className={index === 1 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
};