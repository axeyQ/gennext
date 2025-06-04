'use client';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';

const WordRevealParagraph = ({ text, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  const words = text.split(' ');

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
  };

  const word = {
    hidden: { opacity: 0, color: '#888' },
    visible: {
      opacity: 1,
      color: '#fff',
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="text-lg leading-8 max-w-3xl flex flex-wrap text-left"
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          variants={word}
          className="mr-2 text-2xl font-bold"
        >
          {w}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function TrainSectionOne() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end end'],
  });
  
  // Train movement - reaches near end with smooth progression
  const trainY = useTransform(scrollYProgress, [0, 1], [100, 600]);
  
  // Train glow intensity
  const trainGlow = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1, 0.4]);

  return (
    <section ref={containerRef} className="relative min-h-[120vh] bg-black overflow-hidden flex justify-center items-center">
      {/* Track and Train Container - Positioned on the left */}
      <div className="absolute left-0 top-0 w-96 h-full flex justify-center">
        
        {/* Background Track SVG */}
        <div className="relative w-full h-full flex justify-center">
          <img 
            src="/track1.svg" 
            alt="Railway tracks" 
            loading="lazy" 
            className="hidden md:block absolute "
          />
          
          {/* Center Rail Gradient */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center">
            <div className="h-full w-1 md:w-1.5 bg-gradient-to-b from-[#08070C] via-[rgba(202,36,77,0.8)] to-[#08070C]"></div>
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
            src="/train1.svg" 
            alt="Railway train"
            style={{left:"-90px"}}
            className="w-[120px] h-[260px] md:w-[180px] max-w-fit scrollable-train hidden md:block absolute z-10 [--train-scroll-distance-start:20px] [--train-scroll-distance:640px] [--train-scroll-distance-fallback:240px] [--train-scroll-distance-mobile:280px] [--train-scroll-exit-percentage:110%]"
          />
        </motion.div>
      </div>

      {/* Content - Positioned on the right side */}
      <div className=" h-full flex items-center justify-start px-16 py-32 z-30">
        <div className="space-y-12 max-w-2xl">
          <WordRevealParagraph 
            text="For too long, deploying cloud infrastructure has been the most painful part of the developer toolchain." 
          />
          <WordRevealParagraph 
            text="We're working at the intersection of distributed systems engineering and interface design to rebuild every layer of the stack for speed and developer experience." 
            delay={0.2} 
          />
          <WordRevealParagraph 
            text="With instant deployments and effortless scale, a better way to deploy applications is now boarding." 
            delay={0.4} 
          />
          <WordRevealParagraph 
            text="Welcome to Railway." 
            delay={0.6} 
          />
        </div>
      </div>
    </section>
  );
}