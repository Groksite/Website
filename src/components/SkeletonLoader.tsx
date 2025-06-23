"use client";

import { motion } from "framer-motion";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "circular" | "rectangular";
  width?: string | number;
  height?: string | number;
  animation?: "pulse" | "wave" | "shimmer" | "none";
}

export const Skeleton = ({
  className = "",
  variant = "text",
  width,
  height,
  animation = "shimmer",
}: SkeletonProps) => {
  const baseClasses =
    "bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 relative overflow-hidden";

  const variantClasses = {
    text: "rounded",
    circular: "rounded-full",
    rectangular: "rounded-lg",
  };

  const animationClasses = {
    pulse: "animate-pulse",
    wave: "animate-wave",
    shimmer: "",
    none: "",
  };

  const style = {
    width: width || (variant === "text" ? "100%" : undefined),
    height: height || (variant === "text" ? "1rem" : undefined),
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${animationClasses[animation]}
        ${className}
      `}
      style={style}
    >
      {animation === "shimmer" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}
    </motion.div>
  );
};

// Enhanced predefined skeleton components
export const TextSkeleton = ({
  lines = 3,
  className = "",
  animated = true,
}: {
  lines?: number;
  className?: string;
  animated?: boolean;
}) => (
  <motion.div
    className={`space-y-3 ${className}`}
    initial={animated ? { opacity: 0, y: 10 } : {}}
    animate={animated ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.4, staggerChildren: 0.1 }}
  >
    {Array.from({ length: lines }).map((_, i) => (
      <motion.div
        key={i}
        initial={animated ? { opacity: 0, x: -20 } : {}}
        animate={animated ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: i * 0.1 }}
      >
        <Skeleton
          variant="text"
          width={i === lines - 1 ? `${60 + Math.random() * 25}%` : "100%"}
          height="1rem"
          animation="shimmer"
        />
      </motion.div>
    ))}
  </motion.div>
);

export const CardSkeleton = ({ className = "" }: { className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    className={`p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 shadow-sm ${className}`}
  >
    <Skeleton
      variant="rectangular"
      height="12rem"
      className="mb-4"
      animation="shimmer"
    />
    <Skeleton
      variant="text"
      height="1.5rem"
      className="mb-3"
      animation="shimmer"
    />
    <TextSkeleton lines={2} animated={false} />
    <div className="flex justify-between items-center mt-4">
      <Skeleton variant="text" width="60px" height="1rem" animation="shimmer" />
      <Skeleton
        variant="rectangular"
        width="80px"
        height="32px"
        animation="shimmer"
      />
    </div>
  </motion.div>
);

export const AvatarSkeleton = ({
  size = "md",
  className = "",
  withName = false,
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
  withName?: boolean;
}) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <Skeleton
        variant="circular"
        className={sizeClasses[size]}
        animation="shimmer"
      />
      {withName && (
        <div className="space-y-1">
          <Skeleton
            variant="text"
            width="120px"
            height="1rem"
            animation="shimmer"
          />
          <Skeleton
            variant="text"
            width="80px"
            height="0.75rem"
            animation="shimmer"
          />
        </div>
      )}
    </div>
  );
};

export const ButtonSkeleton = ({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) => {
  const sizeClasses = {
    sm: "w-20 h-8",
    md: "w-32 h-10",
    lg: "w-40 h-12",
  };

  return (
    <Skeleton
      variant="rectangular"
      className={`${sizeClasses[size]} ${className}`}
      animation="shimmer"
    />
  );
};

export const ImageSkeleton = ({
  aspectRatio = "16/9",
  className = "",
  showPlayButton = false,
}: {
  aspectRatio?: string;
  className?: string;
  showPlayButton?: boolean;
}) => (
  <div className={`relative w-full ${className}`} style={{ aspectRatio }}>
    <Skeleton
      variant="rectangular"
      className="w-full h-full"
      animation="shimmer"
    />
    {showPlayButton && (
      <div className="absolute inset-0 flex items-center justify-center">
        <Skeleton variant="circular" className="w-16 h-16" animation="pulse" />
      </div>
    )}
  </div>
);

// New responsive skeleton components
export const HeaderSkeleton = ({ className = "" }: { className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 ${className}`}
  >
    <Skeleton
      variant="rectangular"
      width="150px"
      height="40px"
      animation="shimmer"
    />
    <div className="hidden md:flex space-x-6">
      {[...Array(4)].map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          width="80px"
          height="20px"
          animation="shimmer"
        />
      ))}
    </div>
    <div className="flex space-x-3">
      <ButtonSkeleton size="sm" />
      <Skeleton variant="circular" className="w-8 h-8" animation="shimmer" />
    </div>
  </motion.div>
);

export const HeroSkeleton = ({ className = "" }: { className?: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 ${className}`}
  >
    <div className="text-center space-y-8 max-w-4xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Skeleton
          variant="text"
          height="4rem"
          className="mb-4"
          animation="shimmer"
        />
        <Skeleton
          variant="text"
          height="1.5rem"
          width="80%"
          className="mx-auto mb-8"
          animation="shimmer"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <ButtonSkeleton size="lg" />
        <ButtonSkeleton size="lg" />
      </motion.div>
    </div>
  </motion.div>
);

export const PortfolioGridSkeleton = ({
  items = 6,
  className = "",
}: {
  items?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}
  >
    {[...Array(items)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1, duration: 0.4 }}
      >
        <CardSkeleton />
      </motion.div>
    ))}
  </motion.div>
);

// Legacy component for backward compatibility
const SkeletonLoader = Skeleton;
export default SkeletonLoader;
