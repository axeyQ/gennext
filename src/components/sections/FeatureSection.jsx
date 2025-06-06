'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FeatureSection = () => {
  const [hoveredCard, setHoveredCard] = useState('frontend');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Technical service data positioned in grid layout
  const cardData = {
    frontend: {
      title: "frontend",
      url: "frontend-prod.up.railway.app",
      icon: "🌐",
      status: "Just deployed",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=300&fit=crop"
      ],
      preview: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=150&fit=crop",
      gridPosition: { x: 600, y: 80 }, // Top center
      color: "rgba(255,193,7,1)",
      position:{left:50, top:-3}
    },
    apiGateway: {
      title: "api-gateway",
      url: "api-prod.up.railway.app",
      icon: "🔗",
      status: "Just deployed",
      images: [
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
      ],
      preview: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=200&h=150&fit=crop",
      gridPosition: { x: 900, y: 180 }, // Top right
      color: "rgba(79,172,254,1)",
      position:{left:72, top:5}
    },
    analytics: {
      title: "ackee-analytics",
      url: "ackee-prod.up.railway.app",
      icon: "📊",
      status: "Just deployed",
      images: [
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop"
      ],
      preview: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200&h=150&fit=crop",
      gridPosition: { x: 150, y: 220 }, // Left
      color: "rgba(6,182,212,1)",
      position:{left:6, top:15}
    },
    backend: {
      title: "backend",
      url: "backend-prod.up.railway.app",
      icon: "⚙️",
      status: "Just deployed",
      images: [
        "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=400&h=300&fit=crop"
      ],
      preview: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=200&h=150&fit=crop",
      gridPosition: { x: 900, y: 320 }, // Right
      color: "rgba(34,197,94,1)",
      position:{left:74, top:36}
    },
    postgres: {
      title: "postgres",
      url: "pg-data",
      icon: "🐘",
      status: "Just deployed",
      images: [
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop"
      ],
      preview: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&h=150&fit=crop",
      gridPosition: { x: 400, y: 480 }, // Bottom left
      color: "rgba(139,92,246,1)",
      position:{left:15, top:80}
    },
    redis: {
      title: "redis-cache",
      url: "redis-prod.up.railway.app",
      icon: "🔴",
      status: "Just deployed",
      images: [
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop"
      ],
      preview: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200&h=150&fit=crop",
      gridPosition: { x: 800, y: 480 }, // Bottom right
      color: "rgba(245,101,101,1)",
      position:{left:60, top:75}
    },
    monitoring: {
      title: "monitoring",
      url: "monitor-prod.up.railway.app",
      icon: "📈",
      status: "Just deployed",
      images: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop"
      ],
      preview: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=150&fit=crop",
      gridPosition: { x: 900, y: 420 }, // Right side
      color: "rgba(168,85,247,1)",
      position:{left:76, top:60}
    },
    worker: {
      title: "worker-service",
      url: "worker-prod.up.railway.app",
      icon: "🔧",
      status: "Just deployed",
      images: [
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop"
      ],
      preview: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=150&fit=crop",
      gridPosition: { x: 300, y: 180 }, // Top left
      color: "rgba(251,191,36,1)",
      position:{left:34,top:5}
    }
  };

  // Hub points for linear connections
  const hubPoints = {
    topHub: { x: 600, y: 200 },
    leftHub: { x: 450, y: 300 },
    rightHub: { x: 750, y: 300 },
    bottomHub: { x: 600, y: 400 }
  };

  const centerPoint = { x: 600, y: 300 };

  // Auto-advance carousel during hover
  useEffect(() => {
    if (!hoveredCard) return;

    const interval = setInterval(() => {
      setCurrentImageIndex(prev => 
        (prev + 1) % cardData[hoveredCard].images.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [hoveredCard]);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [hoveredCard]);

  const handleCardHover = (cardKey) => {
    setHoveredCard(cardKey);
  };

  const serviceCardVariants = {
    initial: { scale: 0.95, opacity: 0.8 },
    hover: { 
      scale: 0.9, 
      opacity: 0.5,
      filter: "blur(3px)",
      transition: { duration: 0.3 }
    },
    normal: { 
      scale: 0.95, 
      opacity: 0.8,
      filter: "blur(0px)",
      transition: { duration: 0.3 }
    }
  };

  const centerCardVariants = {
    initial: { scale: 0.95 },
    animate: { scale: 1, transition: { duration: 0.5 } }
  };

  const imageVariants = {
    enter: { opacity: 0, scale: 1.1 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 }
  };

  return (
    <section className='max-w-[1864px] text-left px-5 py-5 md:py-0 mx-auto md:rounded-2xl border-y md:border-x border-white/10 bg-[linear-gradient(180deg,#07060B_50%,#0A090E_100%)] relative h-[100vh] overflow-hidden'>
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(100,100,100,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100,100,100,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Section Header */}
      <div className="relative z-10 text-center pt-8 pb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Application Infrastructure
        </h2>
        <p className="text-base text-gray-400 max-w-xl mx-auto">
          Linear microservices network with grid-based routing
        </p>
      </div>

      {/* Linear Network Connections */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
          <defs>
            {/* Connection gradients */}
            {Object.entries(cardData).map(([key, card]) => (
              <linearGradient key={key} id={`track-${key}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={card.color.replace('1)', '0.3)')} />
                <stop offset="50%" stopColor={card.color} />
                <stop offset="100%" stopColor={card.color.replace('1)', '0.3)')} />
              </linearGradient>
            ))}
          </defs>

          {/* Hub Circles */}
          <circle 
            cx={hubPoints.topHub.x} 
            cy={hubPoints.topHub.y} 
            r="6" 
            fill={hoveredCard === 'frontend' ? cardData.frontend.color : 'rgba(100,100,100,0.3)'}
            className="transition-all duration-300"
          />
          <circle 
            cx={hubPoints.leftHub.x} 
            cy={hubPoints.leftHub.y} 
            r="6" 
            fill={hoveredCard === 'analytics' || hoveredCard === 'worker' ? 'rgba(100,255,200,0.8)' : 'rgba(100,100,100,0.3)'}
            className="transition-all duration-300"
          />
          <circle 
            cx={hubPoints.rightHub.x} 
            cy={hubPoints.rightHub.y} 
            r="6" 
            fill={hoveredCard === 'apiGateway' || hoveredCard === 'backend' || hoveredCard === 'monitoring' ? 'rgba(100,200,255,0.8)' : 'rgba(100,100,100,0.3)'}
            className="transition-all duration-300"
          />
          <circle 
            cx={hubPoints.bottomHub.x} 
            cy={hubPoints.bottomHub.y} 
            r="6" 
            fill={hoveredCard === 'postgres' || hoveredCard === 'redis' ? 'rgba(200,100,255,0.8)' : 'rgba(100,100,100,0.3)'}
            className="transition-all duration-300"
          />

          {/* Center Hub */}
          <circle 
            cx={centerPoint.x} 
            cy={centerPoint.y} 
            r="8" 
            fill="rgba(100,150,255,0.8)"
            stroke="rgba(100,150,255,1)"
            strokeWidth="2"
            className="drop-shadow-lg"
          />

          {/* Linear Connections - Frontend */}
          <line
            x1={cardData.frontend.gridPosition.x} y1={cardData.frontend.gridPosition.y + 60}
            x2={cardData.frontend.gridPosition.x} y2={hubPoints.topHub.y}
            stroke={hoveredCard === 'frontend' ? cardData.frontend.color : 'rgba(100,100,100,0.2)'}
            strokeWidth={hoveredCard === 'frontend' ? '3' : '1.5'}
            strokeDasharray="6,3"
            className="transition-all duration-300"
          />
          <line
            x1={hubPoints.topHub.x} y1={hubPoints.topHub.y}
            x2={centerPoint.x} y2={centerPoint.y}
            stroke={hoveredCard === 'frontend' ? cardData.frontend.color : 'rgba(100,100,100,0.2)'}
            strokeWidth={hoveredCard === 'frontend' ? '3' : '1.5'}
            strokeDasharray="6,3"
            className="transition-all duration-300"
          />

          {/* Linear Connections - API Gateway */}
          <line
            x1={cardData.apiGateway.gridPosition.x - 70} y1={cardData.apiGateway.gridPosition.y}
            x2={hubPoints.rightHub.x} y2={cardData.apiGateway.gridPosition.y}
            stroke={hoveredCard === 'apiGateway' ? cardData.apiGateway.color : 'rgba(100,100,100,0.2)'}
            strokeWidth={hoveredCard === 'apiGateway' ? '3' : '1.5'}
            strokeDasharray="8,4"
            className="transition-all duration-300"
          />
          <line
            x1={hubPoints.rightHub.x} y1={cardData.apiGateway.gridPosition.y}
            x2={hubPoints.rightHub.x} y2={hubPoints.rightHub.y}
            stroke={hoveredCard === 'apiGateway' ? cardData.apiGateway.color : 'rgba(100,100,100,0.2)'}
            strokeWidth={hoveredCard === 'apiGateway' ? '3' : '1.5'}
            strokeDasharray="8,4"
            className="transition-all duration-300"
          />
          <line
            x1={hubPoints.rightHub.x} y1={hubPoints.rightHub.y}
            x2={centerPoint.x} y2={centerPoint.y}
            stroke={hoveredCard === 'apiGateway' ? cardData.apiGateway.color : 'rgba(100,100,100,0.2)'}
            strokeWidth={hoveredCard === 'apiGateway' ? '3' : '1.5'}
            strokeDasharray="8,4"
            className="transition-all duration-300"
          />

          {/* Linear Connections - Analytics */}
          <line
            x1={cardData.analytics.gridPosition.x + 160} y1={cardData.analytics.gridPosition.y}
            x2={hubPoints.leftHub.x} y2={cardData.analytics.gridPosition.y}
            stroke={hoveredCard === 'analytics' ? cardData.analytics.color : 'rgba(100,100,100,0.2)'}
            strokeWidth={hoveredCard === 'analytics' ? '3' : '1.5'}
            strokeDasharray="10,5"
            className="transition-all duration-300"
          />
          <line
            x1={hubPoints.leftHub.x} y1={cardData.analytics.gridPosition.y}
            x2={hubPoints.leftHub.x} y2={hubPoints.leftHub.y}
            stroke={hoveredCard === 'analytics' ? cardData.analytics.color : 'rgba(100,100,100,0.2)'}
            strokeWidth={hoveredCard === 'analytics' ? '3' : '1.5'}
            strokeDasharray="10,5"
            className="transition-all duration-300"
          />
          <line
            x1={hubPoints.leftHub.x} y1={hubPoints.leftHub.y}
            x2={centerPoint.x} y2={centerPoint.y}
            stroke={hoveredCard === 'analytics' ? cardData.analytics.color : 'rgba(100,100,100,0.2)'}
            strokeWidth={hoveredCard === 'analytics' ? '3' : '1.5'}
            strokeDasharray="10,5"
            className="transition-all duration-300"
          />

          {/* Linear Connections - Backend */}
          <line
            x1={cardData.backend.gridPosition.x - 70} y1={cardData.backend.gridPosition.y}
            x2={hubPoints.rightHub.x} y2={cardData.backend.gridPosition.y}
            stroke={hoveredCard === 'backend' ? cardData.backend.color : 'rgba(100,100,100,0.2)'}
            strokeWidth={hoveredCard === 'backend' ? '3' : '1.5'}
            strokeDasharray="12,6"
            className="transition-all duration-300"
          />
          <line
            x1={hubPoints.rightHub.x} y1={cardData.backend.gridPosition.y}
            x2={hubPoints.rightHub.x} y2={hubPoints.rightHub.y}
            stroke={hoveredCard === 'backend' ? cardData.backend.color : 'rgba(100,100,100,0.2)'}
            strokeWidth={hoveredCard === 'backend' ? '3' : '1.5'}
            strokeDasharray="12,6"
            className="transition-all duration-300"
          />
          <line
            x1={hubPoints.rightHub.x} y1={hubPoints.rightHub.y}
            x2={centerPoint.x} y2={centerPoint.y}
            stroke={hoveredCard === 'backend' ? cardData.backend.color : 'rgba(100,100,100,0.2)'}
            strokeWidth={hoveredCard === 'backend' ? '3' : '1.5'}
            strokeDasharray="12,6"
            className="transition-all duration-300"
          />

          {/* Linear Connections - Postgres */}
          <line
            x1={cardData.postgres.gridPosition.x} y1={cardData.postgres.gridPosition.y - 30}
            x2={cardData.postgres.gridPosition.x} y2={hubPoints.bottomHub.y}
            stroke={hoveredCard === 'postgres' ? cardData.postgres.color : 'rgba(100,100,100,0.2)'}
            strokeWidth={hoveredCard === 'postgres' ? '3' : '1.5'}
            strokeDasharray="6,3"
            className="transition-all duration-300"
          />
          <line
            x1={cardData.postgres.gridPosition.x} y1={hubPoints.bottomHub.y}
            x2={centerPoint.x} y2={hubPoints.bottomHub.y}
            stroke={hoveredCard === 'postgres' ? cardData.postgres.color : 'rgba(100,100,100,0.2)'}
            strokeWidth={hoveredCard === 'postgres' ? '3' : '1.5'}
            strokeDasharray="6,3"
            className="transition-all duration-300"
          />
          <line
            x1={centerPoint.x} y1={hubPoints.bottomHub.y}
            x2={centerPoint.x} y2={centerPoint.y}
            stroke={hoveredCard === 'postgres' ? cardData.postgres.color : 'rgba(100,100,100,0.2)'}
            strokeWidth={hoveredCard === 'postgres' ? '3' : '1.5'}
            strokeDasharray="6,3"
            className="transition-all duration-300"
          />

          {/* Linear Connections - Redis */}
          <line
            x1={cardData.redis.gridPosition.x} y1={cardData.redis.gridPosition.y - 30}
            x2={cardData.redis.gridPosition.x} y2={hubPoints.bottomHub.y}
            stroke={hoveredCard === 'redis' ? cardData.redis.color : 'rgba(100,100,100,0.2)'}
            strokeWidth={hoveredCard === 'redis' ? '3' : '1.5'}
            strokeDasharray="8,4"
            className="transition-all duration-300"
          />
          <line
            x1={cardData.redis.gridPosition.x} y1={hubPoints.bottomHub.y}
            x2={centerPoint.x} y2={hubPoints.bottomHub.y}
            stroke={hoveredCard === 'redis' ? cardData.redis.color : 'rgba(100,100,100,0.2)'}
            strokeWidth={hoveredCard === 'redis' ? '3' : '1.5'}
            strokeDasharray="8,4"
            className="transition-all duration-300"
          />

          {/* Linear Connections - Monitoring */}
          <line
            x1={cardData.monitoring.gridPosition.x - 70} y1={cardData.monitoring.gridPosition.y}
            x2={hubPoints.rightHub.x} y2={cardData.monitoring.gridPosition.y}
            stroke={hoveredCard === 'monitoring' ? cardData.monitoring.color : 'rgba(100,100,100,0.2)'}
            strokeWidth={hoveredCard === 'monitoring' ? '3' : '1.5'}
            strokeDasharray="10,5"
            className="transition-all duration-300"
          />
          <line
            x1={hubPoints.rightHub.x} y1={cardData.monitoring.gridPosition.y}
            x2={hubPoints.rightHub.x} y2={hubPoints.rightHub.y}
            stroke={hoveredCard === 'monitoring' ? cardData.monitoring.color : 'rgba(100,100,100,0.2)'}
            strokeWidth={hoveredCard === 'monitoring' ? '3' : '1.5'}
            strokeDasharray="10,5"
            className="transition-all duration-300"
          />

          {/* Linear Connections - Worker */}
          <line
            x1={cardData.worker.gridPosition.x + 160} y1={cardData.worker.gridPosition.y}
            x2={hubPoints.leftHub.x} y2={cardData.worker.gridPosition.y}
            stroke={hoveredCard === 'worker' ? cardData.worker.color : 'rgba(100,100,100,0.2)'}
            strokeWidth={hoveredCard === 'worker' ? '3' : '1.5'}
            strokeDasharray="8,4"
            className="transition-all duration-300"
          />
          <line
            x1={hubPoints.leftHub.x} y1={cardData.worker.gridPosition.y}
            x2={hubPoints.leftHub.x} y2={hubPoints.leftHub.y}
            stroke={hoveredCard === 'worker' ? cardData.worker.color : 'rgba(100,100,100,0.2)'}
            strokeWidth={hoveredCard === 'worker' ? '3' : '1.5'}
            strokeDasharray="8,4"
            className="transition-all duration-300"
          />
        </svg>
      </div>

      {/* Cards Container */}
      <div className="relative z-10 h-[500px] max-w-5xl mx-auto flex justify-center items-center">
        
        {/* Center Display Card */}
        <motion.div 
          className=" w-64 h-48 bg-gray-900/90 backdrop-blur-sm border border-gray-700/70 rounded-2xl overflow-hidden shadow-xl"
          style={{
            left: `50%`,
            top: `50%`
          }}
          variants={centerCardVariants}
          initial="initial"
          animate="animate"
        >
          <div className="relative w-full h-full">
            <AnimatePresence mode="wait">
              <motion.img
                key={`${hoveredCard}-${currentImageIndex}`}
                src={cardData[hoveredCard]?.images[currentImageIndex]}
                alt="Service showcase"
                className="w-full h-full object-cover"
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </AnimatePresence>
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
              <h3 className="text-white text-sm font-semibold">
                {cardData[hoveredCard]?.title}
              </h3>
              <div className="flex space-x-1 mt-2">
                {cardData[hoveredCard]?.images.map((_, index) => (
                  <div
                    key={index}
                    className={`h-0.5 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? 'bg-white w-4' : 'bg-white/40 w-2'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grid-Positioned Service Cards */}
        {Object.entries(cardData).map(([key, service]) => (
          <motion.div
            key={key}
            className="absolute w-40 h-28 bg-gray-900/80 backdrop-blur-sm border border-gray-700/60 rounded-xl overflow-hidden cursor-pointer"
            style={{
              left: `${service.position.left}%`,
              top: `${service.position.top}%`
            }}
            variants={serviceCardVariants}
            initial="normal"
            animate={hoveredCard === key ? 'hover' : 'normal'}
            onMouseEnter={() => handleCardHover(key)}
          >
            {/* Preview Image */}
            <div className="relative w-full h-full">
              <img
                src={service.preview}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay with service info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                {/* Service icon and title at top */}
                <div className="absolute top-2 left-2 flex items-center gap-1">
                  <span className="text-sm">{service.icon}</span>
                  <span className="text-white text-xs font-medium">{service.title}</span>
                </div>
                
                
              </div>
            </div>

            {/* Connection Highlight Effect */}
            {hoveredCard === key && (
              <div className="absolute inset-0 border-2 border-opacity-50 rounded-xl pointer-events-none"
                   style={{ borderColor: service.color }} />
            )}
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default FeatureSection;