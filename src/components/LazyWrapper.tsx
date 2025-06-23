"use client";

import {
  Suspense,
  lazy,
  ComponentType,
  useState,
  useRef,
  useEffect,
} from "react";
import { motion } from "framer-motion";

interface LazyWrapperProps {
  children?: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
}

// Enhanced loading skeleton component
const DefaultSkeleton = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="relative overflow-hidden"
  >
    <div className="space-y-4">
      <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded w-3/4 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded w-1/2 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
            delay: 0.2,
          }}
        />
      </div>
      <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded w-5/6 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
            delay: 0.4,
          }}
        />
      </div>
    </div>
  </motion.div>
);

// Enhanced lazy wrapper component
const LazyWrapper: React.FC<LazyWrapperProps> = ({
  children,
  fallback = <DefaultSkeleton />,
  className = "",
}) => {
  return (
    <Suspense fallback={fallback}>
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
          staggerChildren: 0.1,
        }}
        className={className}
      >
        {children}
      </motion.div>
    </Suspense>
  );
};

// Higher-order component for lazy loading
export const withLazyLoading = <P extends Record<string, any>>(
  Component: ComponentType<P>,
  fallback?: React.ReactNode
) => {
  const LazyComponent = lazy(() => Promise.resolve({ default: Component }));

  const WrappedComponent = (props: P) => (
    <LazyWrapper fallback={fallback}>
      <LazyComponent {...(props as any)} />
    </LazyWrapper>
  );

  WrappedComponent.displayName = `withLazy(${
    Component.displayName || Component.name || "Component"
  })`;

  return WrappedComponent;
};

// Hook for intersection observer based lazy loading
export const useLazyLoad = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
        }
      },
      { threshold }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, hasLoaded]);

  return { ref, isVisible, hasLoaded };
};

// Lazy image component
interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  onLoad?: () => void;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = "",
  placeholder = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1zaXplPSIxOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iIGZpbGw9IiNhYWEiPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+",
  onLoad,
}) => {
  const { ref, isVisible } = useLazyLoad();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(placeholder);

  useEffect(() => {
    if (isVisible && !imageLoaded) {
      const img = new Image();
      img.onload = () => {
        setImageSrc(src);
        setImageLoaded(true);
        onLoad?.();
      };
      img.src = src;
    }
  }, [isVisible, imageLoaded, src, onLoad]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={imageSrc}
        alt={alt}
        className="w-full h-full object-cover"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{
          opacity: imageLoaded ? 1 : 0.7,
          scale: imageLoaded ? 1 : 1.1,
        }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default LazyWrapper;
