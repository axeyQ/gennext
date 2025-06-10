'use client';
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';


const LoadingContext = createContext(null);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};


export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingStage, setLoadingStage] = useState('Initializing...');
  const [completedStages, setCompletedStages] = useState(new Set());
  const [totalStages, setTotalStages] = useState(0);


  
  const updateLoading = useCallback((progress, stage) => {
    setLoadingProgress(Math.min(Math.max(progress, 0), 100));
    if (stage) setLoadingStage(stage);
    
    if (progress >= 100) {
      setTimeout(() => {
        setIsLoading(false);
      }, 800); 
    }
  }, []);

  const setStages = useCallback((stages) => {
    setTotalStages(stages.length);
    setCompletedStages(new Set());
    setLoadingProgress(0);
  }, []);

  const completeStage = useCallback((stageName) => {
    setCompletedStages(prev => {
      const newCompleted = new Set(prev);
      newCompleted.add(stageName);
      
      const progress = (newCompleted.size / totalStages) * 100;
      setLoadingProgress(progress);
      setLoadingStage(`Completed: ${stageName}`);
      
      if (newCompleted.size >= totalStages) {
        setTimeout(() => setIsLoading(false), 500);
      }
      
      return newCompleted;
    });
  }, [totalStages]);

  const resetLoading = useCallback(() => {
    setIsLoading(true);
    setLoadingProgress(0);
    setLoadingStage('Initializing...');
    setCompletedStages(new Set());
  }, []);

  const skipLoading = useCallback(() => {
    setIsLoading(false);
  }, []);


  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      if (isLoading) {
        console.warn('Loading took too long, auto-completing...');
        setIsLoading(false);
      }
    }, 5000);

    return () => clearTimeout(fallbackTimer);
  }, [isLoading]);


  const value = {
    // State
    isLoading,
    loadingProgress,
    loadingStage,
    completedStages: Array.from(completedStages),
    totalStages,
    
    // Methods
    updateLoading,
    setStages,
    completeStage,
    resetLoading,
    skipLoading,
    
    // Computed
    isComplete: loadingProgress >= 100,
    remainingStages: totalStages - completedStages.size,
  };

  return (
    <LoadingContext.Provider value={value}>
      {children}
    </LoadingContext.Provider>
  );
};