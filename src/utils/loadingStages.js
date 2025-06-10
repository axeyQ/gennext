// Loading stage configurations and utilities

// Default loading stages for different scenarios
export const DEFAULT_LOADING_STAGES = [
    { name: 'Initializing Application', duration: 800 },
    { name: 'Loading Core Assets', duration: 1200 },
    { name: 'Preparing Components', duration: 600 },
    { name: 'Final Setup', duration: 400 }
  ];
  
  export const TEMPLATE_LOADING_STAGES = [
    { name: 'Fetching Templates', duration: 1000 },
    { name: 'Loading Images', duration: 2000 },
    { name: 'Processing Metadata', duration: 800 },
    { name: 'Rendering Gallery', duration: 600 }
  ];
  
  export const PAGE_LOADING_STAGES = [
    { name: 'Loading Page Data', duration: 600 },
    { name: 'Preparing Layout', duration: 400 },
    { name: 'Loading Components', duration: 800 },
    { name: 'Finalizing', duration: 200 }
  ];
  
  // Stage templates for common loading scenarios
  export const STAGE_TEMPLATES = {
    // Image loading stages
    IMAGE_LOADING: {
      FETCH: { name: 'Fetching Images', duration: 500 },
      DOWNLOAD: { name: 'Downloading Images', duration: 1500 },
      PROCESS: { name: 'Processing Images', duration: 300 },
      RENDER: { name: 'Rendering Images', duration: 200 }
    },
  
    // API data loading stages  
    API_LOADING: {
      REQUEST: { name: 'Making API Request', duration: 300 },
      FETCH: { name: 'Fetching Data', duration: 1000 },
      PARSE: { name: 'Parsing Response', duration: 200 },
      CACHE: { name: 'Caching Data', duration: 100 }
    },
  
    // Component loading stages
    COMPONENT_LOADING: {
      IMPORT: { name: 'Importing Components', duration: 400 },
      MOUNT: { name: 'Mounting Components', duration: 300 },
      RENDER: { name: 'Rendering UI', duration: 500 },
      HYDRATE: { name: 'Hydrating State', duration: 200 }
    },
  
    // Asset loading stages
    ASSET_LOADING: {
      CSS: { name: 'Loading Stylesheets', duration: 300 },
      FONTS: { name: 'Loading Fonts', duration: 600 },
      ICONS: { name: 'Loading Icons', duration: 400 },
      MEDIA: { name: 'Loading Media Files', duration: 1200 }
    }
  };
  
  // Utility functions for stage management
  export const createStageSequence = (template, customStages = []) => {
    const baseStages = template ? Object.values(STAGE_TEMPLATES[template] || {}) : [];
    return [...baseStages, ...customStages];
  };
  
  export const calculateTotalDuration = (stages) => {
    return stages.reduce((total, stage) => total + (stage.duration || 0), 0);
  };
  
  export const getStageProgress = (currentStageIndex, stages) => {
    const completedDuration = stages
      .slice(0, currentStageIndex)
      .reduce((total, stage) => total + (stage.duration || 0), 0);
    
    const totalDuration = calculateTotalDuration(stages);
    return totalDuration > 0 ? (completedDuration / totalDuration) * 100 : 0;
  };
  
  export const createCustomStage = (name, duration = 500, metadata = {}) => ({
    name,
    duration,
    ...metadata
  });
  
  // Predefined stage sets for different page types
  export const PREDEFINED_STAGE_SETS = {
    HOMEPAGE: [
      { name: 'Loading Homepage', duration: 800 },
      { name: 'Loading Hero Section', duration: 600 },
      { name: 'Loading Features', duration: 400 },
      { name: 'Finalizing', duration: 200 }
    ],
  
    TEMPLATES_PAGE: [
      { name: 'Initializing Templates', duration: 500 },
      { name: 'Fetching Template Data', duration: 1200 },
      { name: 'Loading Preview Images', duration: 2000 },
      { name: 'Building Gallery', duration: 800 },
      { name: 'Setting up Filters', duration: 300 }
    ],
  
    DASHBOARD: [
      { name: 'Authenticating User', duration: 600 },
      { name: 'Loading Dashboard Data', duration: 1000 },
      { name: 'Preparing Charts', duration: 500 },
      { name: 'Loading Recent Activity', duration: 400 }
    ],
  
    PROFILE: [
      { name: 'Loading Profile Data', duration: 800 },
      { name: 'Loading Avatar', duration: 300 },
      { name: 'Loading Settings', duration: 200 },
      { name: 'Finalizing Profile', duration: 100 }
    ]
  };
  
  // Helper to get stages by page type
  export const getStagesByPageType = (pageType) => {
    return PREDEFINED_STAGE_SETS[pageType.toUpperCase()] || DEFAULT_LOADING_STAGES;
  };
  
  // Create progressive loading stages that update smoothly
  export const createProgressiveStages = (baseStages, options = {}) => {
    const { 
      minDuration = 100, 
      maxDuration = 3000,
      smoothTransitions = true 
    } = options;
  
    return baseStages.map((stage, index) => ({
      ...stage,
      duration: Math.max(minDuration, Math.min(maxDuration, stage.duration)),
      index,
      progress: smoothTransitions ? (index + 1) / baseStages.length * 100 : null
    }));
  };