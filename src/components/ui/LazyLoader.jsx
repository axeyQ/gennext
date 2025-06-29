'use client';
import { Suspense, lazy, useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Loading fallback components
export const SkeletonLoader = ({ className = "", height = "h-64" }) => (
  <div className={`relative overflow-hidden bg-gray-900 rounded-lg ${height} ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 animate-pulse">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700/50 to-transparent animate-shimmer"></div>
    </div>
    <style jsx>{`
      @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      .animate-shimmer {
        animation: shimmer 2s infinite;
      }
    `}</style>
  </div>
);

export const VideoSkeleton = () => (
  <div className="relative w-full h-full bg-gray-900 rounded-3xl flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center mb-4 mx-auto">
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
        </svg>
      </div>
      <p className="text-gray-400 text-sm">Loading video...</p>
    </div>
  </div>
);

export const ChatbotSkeleton = () => (
  <motion.div
    className="fixed bottom-6 -right-2 z-50"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 2, duration: 0.5 }}
  >
    <div className="w-20 h-20 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-purple-600 via-cyan-500 to-pink-500 flex items-center justify-center shadow-2xl animate-pulse">
      <div className="w-12 h-12 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
        <span className="text-2xl md:text-4xl">🤖</span>
      </div>
    </div>
  </motion.div>
);

export const GridSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
    {[...Array(6)].map((_, i) => (
      <SkeletonLoader 
        key={i} 
        height={i % 2 === 0 ? "h-48" : "h-64"}
        className="rounded-xl"
      />
    ))}
  </div>
);

export const NetworkDiagramSkeleton = () => (
  <div className="relative w-full h-96 bg-gray-950/30 rounded-xl border border-gray-800/50 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 animate-pulse">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full mx-auto mb-4 animate-spin"></div>
          <p className="text-gray-400 text-sm">Loading network diagram...</p>
        </div>
      </div>
    </div>
  </div>
);

// Intersection Observer Hook for lazy loading
export const useInViewport = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (!hasBeenInView) {
            setHasBeenInView(true);
          }
        } else {
          setIsInView(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px', // Start loading 100px before visible
        ...options,
      }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [hasBeenInView, options]);

  return { elementRef, isInView, hasBeenInView };
};

// Delay Hook for staged loading
export const useDelayedMount = (delay = 1000) => {
  const [shouldMount, setShouldMount] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShouldMount(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return shouldMount;
};

// Main Lazy Component Wrapper
export const LazyComponent = ({ 
  children, 
  fallback = <SkeletonLoader />, 
  delay = 0,
  viewport = true,
  className = "",
  ...props 
}) => {
  const { elementRef, hasBeenInView } = useInViewport();
  const shouldLoadByDelay = useDelayedMount(delay);
  
  const shouldLoad = viewport ? hasBeenInView : shouldLoadByDelay;

  return (
    <div ref={elementRef} className={className} {...props}>
      <Suspense fallback={fallback}>
        {shouldLoad ? children : fallback}
      </Suspense>
    </div>
  );
};

// Specific lazy loaders for different component types
export const LazyVideo = ({ children, ...props }) => (
  <LazyComponent 
    fallback={<VideoSkeleton />} 
    delay={2000}
    {...props}
  >
    {children}
  </LazyComponent>
);

export const LazyChatbot = ({ children, ...props }) => (
  <LazyComponent 
    fallback={<ChatbotSkeleton />} 
    delay={5000}
    viewport={false}
    {...props}
  >
    {children}
  </LazyComponent>
);

export const LazyGrid = ({ children, ...props }) => (
  <LazyComponent 
    fallback={<GridSkeleton />} 
    delay={1000}
    {...props}
  >
    {children}
  </LazyComponent>
);

export const LazyNetworkDiagram = ({ children, ...props }) => (
  <LazyComponent 
    fallback={<NetworkDiagramSkeleton />} 
    delay={1500}
    {...props}
  >
    {children}
  </LazyComponent>
);

export default LazyComponent;