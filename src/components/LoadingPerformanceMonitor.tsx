"use client";

import { useEffect, useState } from 'react';
import { useLoading } from '@/contexts/LoadingContext';

interface PerformanceMetrics {
  loadStart: number;
  loadEnd: number;
  totalLoadTime: number;
  domContentLoaded: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
}

export const LoadingPerformanceMonitor = () => {
  const { isLoading } = useLoading();
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [showMetrics, setShowMetrics] = useState(false);

  useEffect(() => {
    if (!isLoading && !metrics) {
      // Collect performance metrics after loading is complete
      const collectMetrics = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        
        const loadStart = navigation.loadEventStart;
        const loadEnd = navigation.loadEventEnd;
        const domContentLoaded = navigation.domContentLoadedEventEnd;
        
        let firstContentfulPaint: number | undefined;
        let largestContentfulPaint: number | undefined;
        
        paint.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            firstContentfulPaint = entry.startTime;
          }
        });

        // Try to get LCP from PerformanceObserver if available
        if ('PerformanceObserver' in window) {
          try {
            const observer = new PerformanceObserver((list) => {
              const entries = list.getEntries();
              const lastEntry = entries[entries.length - 1];
              if (lastEntry) {
                largestContentfulPaint = lastEntry.startTime;
              }
            });
            observer.observe({ entryTypes: ['largest-contentful-paint'] });
          } catch (error) {
            console.log('LCP observation not supported');
          }
        }

        const performanceMetrics: PerformanceMetrics = {
          loadStart,
          loadEnd,
          totalLoadTime: loadEnd - loadStart,
          domContentLoaded,
          firstContentfulPaint,
          largestContentfulPaint,
        };

        setMetrics(performanceMetrics);
        
        // Log performance metrics for debugging
        if (process.env.NODE_ENV === 'development') {
          console.log('Loading Performance Metrics:', performanceMetrics);
        }
      };

      // Wait a bit for all metrics to be available
      setTimeout(collectMetrics, 1000);
    }
  }, [isLoading, metrics]);

  // Show metrics in development mode
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setShowMetrics(!showMetrics);
      }
    };

    if (process.env.NODE_ENV === 'development') {
      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    }
  }, [showMetrics]);

  if (!showMetrics || !metrics || process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50 max-w-xs">
      <div className="mb-2 font-bold">Performance Metrics</div>
      <div className="space-y-1">
        <div>Total Load: {metrics.totalLoadTime.toFixed(2)}ms</div>
        <div>DOM Ready: {metrics.domContentLoaded.toFixed(2)}ms</div>
        {metrics.firstContentfulPaint && (
          <div>FCP: {metrics.firstContentfulPaint.toFixed(2)}ms</div>
        )}
        {metrics.largestContentfulPaint && (
          <div>LCP: {metrics.largestContentfulPaint.toFixed(2)}ms</div>
        )}
      </div>
      <div className="mt-2 text-gray-400 text-xs">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

// Hook for component-level performance monitoring
export const useComponentLoadTime = (componentName: string) => {
  useEffect(() => {
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      const loadTime = endTime - startTime;
      
      if (process.env.NODE_ENV === 'development') {
        console.log(`${componentName} load time: ${loadTime.toFixed(2)}ms`);
      }
    };
  }, [componentName]);
};

export default LoadingPerformanceMonitor;