"use client";

import { useEffect } from "react";

const PerformanceMonitor = () => {
  useEffect(() => {
    // Only run in development mode
    if (process.env.NODE_ENV === "development") {
      // Monitor page load performance
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "navigation") {
            const navEntry = entry as PerformanceNavigationTiming;
            console.log("🚀 Page Load Performance:", {
              "DNS Lookup":
                navEntry.domainLookupEnd - navEntry.domainLookupStart,
              "TCP Connection": navEntry.connectEnd - navEntry.connectStart,
              Request: navEntry.responseStart - navEntry.requestStart,
              Response: navEntry.responseEnd - navEntry.responseStart,
              "DOM Processing":
                navEntry.domContentLoadedEventEnd - navEntry.responseEnd,
              "Total Load Time": navEntry.loadEventEnd - navEntry.fetchStart,
            });
          }
        }
      });

      observer.observe({ entryTypes: ["navigation"] });

      // Monitor largest contentful paint
      const lcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log("🎨 Largest Contentful Paint:", entry.startTime + "ms");
        }
      });

      lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });

      return () => {
        observer.disconnect();
        lcpObserver.disconnect();
      };
    }
  }, []);

  return null;
};

export default PerformanceMonitor;
