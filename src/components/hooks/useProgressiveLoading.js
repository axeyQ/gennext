'use client';
import { useCallback, useEffect, useRef } from 'react';
import { useLoading } from '../providers/LoadingProvider';


export const useProgressiveLoading = (stages = []) => {
  const { setStages, completeStage, updateLoading } = useLoading();
  const stagesRef = useRef(stages);
  const mountedRef = useRef(true);

  useEffect(() => {
    if (stages.length > 0) {
      stagesRef.current = stages;
      setStages(stages);
    }
    
    return () => {
      mountedRef.current = false;
    };
  }, [stages, setStages]);

  const startStage = useCallback((stageName) => {
    if (!mountedRef.current) return;
    updateLoading(null, `Starting: ${stageName}`);
  }, [updateLoading]);

  const finishStage = useCallback((stageName) => {
    if (!mountedRef.current) return;
    completeStage(stageName);
  }, [completeStage]);

  const setProgress = useCallback((progress, stageName = null) => {
    if (!mountedRef.current) return;
    updateLoading(progress, stageName);
  }, [updateLoading]);


  const runStages = useCallback(async (stageConfigs) => {
    for (const config of stageConfigs) {
      if (!mountedRef.current) break;
      
      startStage(config.name);
      
      // Wait for stage duration or condition
      if (config.duration) {
        await new Promise(resolve => setTimeout(resolve, config.duration));
      } else if (config.condition) {
        await config.condition();
      }
      
      finishStage(config.name);
    }
  }, [startStage, finishStage]);


  const markComponentLoaded = useCallback((componentName) => {
    finishStage(`${componentName} loaded`);
  }, [finishStage]);

  const markImageLoaded = useCallback((imageName) => {
    finishStage(`${imageName} image loaded`);
  }, [finishStage]);

  const markDataLoaded = useCallback((dataName) => {
    finishStage(`${dataName} data loaded`);
  }, [finishStage]);

  return {
    startStage,
    finishStage,
    setProgress,
    runStages,
    markComponentLoaded,
    markImageLoaded,
    markDataLoaded,
  };
};


export const useComponentLoading = (componentName) => {
  const { markComponentLoaded } = useProgressiveLoading();

  useEffect(() => {
    const timer = setTimeout(() => {
      markComponentLoaded(componentName);
    }, 100);

    return () => clearTimeout(timer);
  }, [componentName, markComponentLoaded]);

  return { markComponentLoaded };
};


export const useImageLoading = () => {
  const { markImageLoaded } = useProgressiveLoading();

  const trackImageLoad = useCallback((imageSrc, imageName) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        markImageLoaded(imageName || 'image');
        resolve(true);
      };
      img.onerror = () => {
        markImageLoaded(imageName || 'image'); 
        resolve(false);
      };
      img.src = imageSrc;
    });
  }, [markImageLoaded]);

  const preloadImages = useCallback(async (images) => {
    const promises = images.map(({ src, name }) => trackImageLoad(src, name));
    await Promise.all(promises);
  }, [trackImageLoad]);

  return { trackImageLoad, preloadImages };
};