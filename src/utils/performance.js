// Performance monitoring utilities for loading system

class PerformanceMonitor {
    constructor() {
      this.metrics = new Map();
      this.startTimes = new Map();
      this.isEnabled = typeof window !== 'undefined' && 'performance' in window;
    }
  
    // Start timing a specific operation
    start(operationName) {
      if (!this.isEnabled) return;
      
      this.startTimes.set(operationName, {
        startTime: performance.now(),
        timestamp: Date.now()
      });
    }
  
    // End timing and record the metric
    end(operationName, metadata = {}) {
      if (!this.isEnabled) return null;
  
      const startData = this.startTimes.get(operationName);
      if (!startData) {
        console.warn(`No start time found for operation: ${operationName}`);
        return null;
      }
  
      const endTime = performance.now();
      const duration = endTime - startData.startTime;
  
      const metric = {
        name: operationName,
        duration: Math.round(duration * 100) / 100, // Round to 2 decimal places
        startTime: startData.startTime,
        endTime,
        timestamp: startData.timestamp,
        ...metadata
      };
  
      this.metrics.set(operationName, metric);
      this.startTimes.delete(operationName);
  
      return metric;
    }
  
    // Get metric for a specific operation
    getMetric(operationName) {
      return this.metrics.get(operationName);
    }
  
    // Get all metrics
    getAllMetrics() {
      return Array.from(this.metrics.values());
    }
  
    // Get metrics summary
    getSummary() {
      const metrics = this.getAllMetrics();
      
      if (metrics.length === 0) {
        return { totalOperations: 0, totalDuration: 0, averageDuration: 0 };
      }
  
      const totalDuration = metrics.reduce((sum, metric) => sum + metric.duration, 0);
      const averageDuration = totalDuration / metrics.length;
  
      return {
        totalOperations: metrics.length,
        totalDuration: Math.round(totalDuration * 100) / 100,
        averageDuration: Math.round(averageDuration * 100) / 100,
        slowestOperation: metrics.reduce((slowest, current) => 
          current.duration > slowest.duration ? current : slowest
        ),
        fastestOperation: metrics.reduce((fastest, current) => 
          current.duration < fastest.duration ? current : fastest
        )
      };
    }
  
    // Clear all metrics
    clear() {
      this.metrics.clear();
      this.startTimes.clear();
    }
  
    // Export metrics for debugging
    export() {
      return {
        metrics: this.getAllMetrics(),
        summary: this.getSummary(),
        exportedAt: new Date().toISOString()
      };
    }
  }
  
  // Global performance monitor instance
  export const performanceMonitor = new PerformanceMonitor();
  
  // Helper functions for common loading operations
  export const measureImageLoad = async (imageSrc, imageName) => {
    const operationName = `image_load_${imageName || 'unknown'}`;
    
    performanceMonitor.start(operationName);
    
    return new Promise((resolve) => {
      const img = new Image();
      
      img.onload = () => {
        const metric = performanceMonitor.end(operationName, {
          type: 'image_load',
          src: imageSrc,
          success: true,
          naturalWidth: img.naturalWidth,
          naturalHeight: img.naturalHeight
        });
        resolve({ success: true, metric });
      };
      
      img.onerror = () => {
        const metric = performanceMonitor.end(operationName, {
          type: 'image_load',
          src: imageSrc,
          success: false,
          error: 'Failed to load image'
        });
        resolve({ success: false, metric });
      };
      
      img.src = imageSrc;
    });
  };
  
  export const measureComponentRender = (componentName, renderFunction) => {
    const operationName = `component_render_${componentName}`;
    
    performanceMonitor.start(operationName);
    
    try {
      const result = renderFunction();
      
      // If it's a promise, wait for it
      if (result && typeof result.then === 'function') {
        return result.finally(() => {
          performanceMonitor.end(operationName, {
            type: 'component_render',
            component: componentName,
            async: true
          });
        });
      } else {
        performanceMonitor.end(operationName, {
          type: 'component_render',
          component: componentName,
          async: false
        });
        return result;
      }
    } catch (error) {
      performanceMonitor.end(operationName, {
        type: 'component_render',
        component: componentName,
        error: error.message
      });
      throw error;
    }
  };
  
  export const measureApiCall = async (apiName, apiCall) => {
    const operationName = `api_call_${apiName}`;
    
    performanceMonitor.start(operationName);
    
    try {
      const result = await apiCall();
      
      performanceMonitor.end(operationName, {
        type: 'api_call',
        api: apiName,
        success: true
      });
      
      return result;
    } catch (error) {
      performanceMonitor.end(operationName, {
        type: 'api_call',
        api: apiName,
        success: false,
        error: error.message
      });
      
      throw error;
    }
  };
  
  // React hook for performance monitoring
  export const usePerformanceMonitor = () => {
    const startOperation = (operationName) => {
      performanceMonitor.start(operationName);
    };
  
    const endOperation = (operationName, metadata) => {
      return performanceMonitor.end(operationName, metadata);
    };
  
    const measureOperation = (operationName, operation) => {
      if (typeof operation === 'function') {
        return measureComponentRender(operationName, operation);
      }
      return operation;
    };
  
    return {
      start: startOperation,
      end: endOperation,
      measure: measureOperation,
      getMetrics: () => performanceMonitor.getAllMetrics(),
      getSummary: () => performanceMonitor.getSummary(),
      clear: () => performanceMonitor.clear(),
      export: () => performanceMonitor.export()
    };
  };
  
  // Loading performance tracker specifically for the loading system
  export class LoadingPerformanceTracker {
    constructor() {
      this.loadingStart = null;
      this.stageMetrics = [];
      this.currentStage = null;
    }
  
    startLoading() {
      this.loadingStart = performance.now();
      this.stageMetrics = [];
      performanceMonitor.start('total_loading');
    }
  
    startStage(stageName) {
      if (this.currentStage) {
        this.endStage(this.currentStage);
      }
      
      this.currentStage = stageName;
      performanceMonitor.start(`stage_${stageName}`);
    }
  
    endStage(stageName) {
      if (this.currentStage === stageName) {
        const metric = performanceMonitor.end(`stage_${stageName}`, {
          type: 'loading_stage',
          stage: stageName
        });
        
        if (metric) {
          this.stageMetrics.push(metric);
        }
        
        this.currentStage = null;
      }
    }
  
    endLoading() {
      if (this.currentStage) {
        this.endStage(this.currentStage);
      }
      
      const totalMetric = performanceMonitor.end('total_loading', {
        type: 'total_loading',
        stageCount: this.stageMetrics.length
      });
  
      return {
        totalDuration: totalMetric?.duration || 0,
        stages: this.stageMetrics,
        summary: this.getStageSummary()
      };
    }
  
    getStageSummary() {
      if (this.stageMetrics.length === 0) return null;
  
      const totalStageDuration = this.stageMetrics.reduce((sum, stage) => sum + stage.duration, 0);
      const averageStageDuration = totalStageDuration / this.stageMetrics.length;
  
      return {
        totalStages: this.stageMetrics.length,
        totalStageDuration: Math.round(totalStageDuration * 100) / 100,
        averageStageDuration: Math.round(averageStageDuration * 100) / 100,
        slowestStage: this.stageMetrics.reduce((slowest, current) => 
          current.duration > slowest.duration ? current : slowest
        ),
        fastestStage: this.stageMetrics.reduce((fastest, current) => 
          current.duration < fastest.duration ? current : fastest
        )
      };
    }
  }
  
  // Export singleton instance for loading performance tracking
  export const loadingPerformanceTracker = new LoadingPerformanceTracker();
  
  // Utility to log performance metrics to console (for debugging)
  export const logPerformanceMetrics = (onlySlowOperations = false, threshold = 1000) => {
    const metrics = performanceMonitor.getAllMetrics();
    const summary = performanceMonitor.getSummary();
  
    console.group('🚀 Performance Metrics');
    
    if (onlySlowOperations) {
      const slowMetrics = metrics.filter(metric => metric.duration > threshold);
      console.log(`Slow operations (>${threshold}ms):`, slowMetrics);
    } else {
      console.log('All metrics:', metrics);
    }
    
    console.log('Summary:', summary);
    console.groupEnd();
  };
  
  // Detect performance issues and provide suggestions
  export const analyzePerformance = () => {
    const summary = performanceMonitor.getSummary();
    const metrics = performanceMonitor.getAllMetrics();
    
    const issues = [];
    const suggestions = [];
  
    // Check for slow operations
    const slowOperations = metrics.filter(metric => metric.duration > 2000);
    if (slowOperations.length > 0) {
      issues.push(`${slowOperations.length} operations took longer than 2 seconds`);
      suggestions.push('Consider optimizing slow operations or breaking them into smaller chunks');
    }
  
    // Check for too many operations
    if (metrics.length > 20) {
      issues.push(`High number of tracked operations (${metrics.length})`);
      suggestions.push('Consider reducing the number of loading operations or combining some stages');
    }
  
    // Check average duration
    if (summary.averageDuration > 1000) {
      issues.push(`Average operation duration is high (${summary.averageDuration}ms)`);
      suggestions.push('Review operation efficiency and consider implementing lazy loading');
    }
  
    return {
      summary,
      issues,
      suggestions,
      hasIssues: issues.length > 0
    };
  };