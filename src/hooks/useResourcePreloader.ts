"use client";

import { useEffect, useState } from "react";

interface ResourcePreloaderOptions {
  fonts?: string[];
  images?: string[];
  scripts?: string[];
  onProgress?: (loaded: number, total: number) => void;
  onComplete?: () => void;
}

export const useResourcePreloader = (
  options: ResourcePreloaderOptions = {}
) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadedResources, setLoadedResources] = useState(0);

  useEffect(() => {
    const {
      fonts = [],
      images = [],
      scripts = [],
      onProgress,
      onComplete,
    } = options;
    const totalResources = fonts.length + images.length + scripts.length;

    if (totalResources === 0) {
      setIsLoading(false);
      setProgress(100);
      onComplete?.();
      return;
    }

    let loaded = 0;

    const updateProgress = () => {
      loaded++;
      const progressPercent = Math.round((loaded / totalResources) * 100);
      setProgress(progressPercent);
      setLoadedResources(loaded);
      onProgress?.(loaded, totalResources);

      if (loaded === totalResources) {
        setIsLoading(false);
        onComplete?.();
      }
    };

    // Preload fonts
    fonts.forEach((fontUrl) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = fontUrl;
      link.onload = updateProgress;
      link.onerror = updateProgress; // Count errors as loaded to prevent hanging
      document.head.appendChild(link);
    });

    // Preload images
    images.forEach((imageUrl) => {
      const img = new Image();
      img.onload = updateProgress;
      img.onerror = updateProgress;
      img.src = imageUrl;
    });

    // Preload scripts
    scripts.forEach((scriptUrl) => {
      const script = document.createElement("script");
      script.src = scriptUrl;
      script.onload = updateProgress;
      script.onerror = updateProgress;
      document.head.appendChild(script);
    });

    // Cleanup function
    return () => {
      // Remove dynamically added elements if component unmounts
      fonts.forEach((fontUrl) => {
        const existingLink = document.querySelector(`link[href="${fontUrl}"]`);
        if (existingLink) {
          existingLink.remove();
        }
      });
    };
  }, [options]);

  return {
    isLoading,
    progress,
    loadedResources,
    totalResources:
      (options.fonts?.length || 0) +
      (options.images?.length || 0) +
      (options.scripts?.length || 0),
  };
};

// Hook for critical resource loading
export const useCriticalResourceLoader = () => {
  const [isReady, setIsReady] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const criticalResources = [
      // Check if fonts are loaded
      () => document.fonts.ready,
      // Check if DOM is ready
      () =>
        new Promise<void>((resolve) => {
          if (document.readyState === "complete") {
            resolve();
          } else {
            window.addEventListener("load", () => resolve());
          }
        }),
      // Check if critical images are loaded
      () =>
        new Promise<void>((resolve) => {
          const images = document.querySelectorAll('img[data-critical="true"]');
          if (images.length === 0) {
            resolve();
            return;
          }

          let loadedImages = 0;
          images.forEach((img) => {
            const imageElement = img as HTMLImageElement;
            if (imageElement.complete) {
              loadedImages++;
            } else {
              imageElement.addEventListener("load", () => {
                loadedImages++;
                if (loadedImages === images.length) {
                  resolve();
                }
              });
            }
          });

          if (loadedImages === images.length) {
            resolve();
          }
        }),
    ];

    let completedResources = 0;
    const totalResources = criticalResources.length;

    const updateProgress = () => {
      completedResources++;
      const progressPercent = Math.round(
        (completedResources / totalResources) * 100
      );
      setProgress(progressPercent);

      if (completedResources === totalResources) {
        setIsReady(true);
      }
    };

    // Execute all critical resource checks
    criticalResources.forEach((resourceCheck) => {
      Promise.resolve(resourceCheck()).then(updateProgress);
    });
  }, []);

  return { isReady, progress };
};

// Hook for progressive image loading
export const useProgressiveImageLoader = (imageSources: string[]) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (imageSources.length === 0) return;

    let loaded = 0;
    const imagePromises = imageSources.map((src) => {
      return new Promise<string>((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          loaded++;
          setProgress(Math.round((loaded / imageSources.length) * 100));
          setLoadedImages((prev) => {
            const newSet = new Set(prev);
            newSet.add(src);
            return newSet;
          });
          resolve(src);
        };
        img.onerror = () => {
          loaded++;
          setProgress(Math.round((loaded / imageSources.length) * 100));
          reject(src);
        };
        img.src = src;
      });
    });

    Promise.allSettled(imagePromises);
  }, [imageSources]);

  return {
    loadedImages,
    progress,
    isImageLoaded: (src: string) => loadedImages.has(src),
  };
};
