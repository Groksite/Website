"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLoading } from "@/contexts/LoadingContext";
import { CpuChipIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const { isLoading, loadingProgress, loadingMessage } = useLoading();
  const [displayProgress, setDisplayProgress] = useState(0);

  // Smooth progress animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayProgress(loadingProgress);
    }, 50);
    return () => clearTimeout(timer);
  }, [loadingProgress]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{
            duration: 0.4,
            exit: { duration: 0.6, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-800 dark:via-purple-800 dark:to-pink-800"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Gradient orbs - static positions to avoid hydration issues */}
            <motion.div
              className="absolute rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm"
              style={{
                width: "60px",
                height: "60px",
                left: "20%",
                top: "20%",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm"
              style={{
                width: "100px",
                height: "100px",
                left: "50%",
                top: "45%",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm"
              style={{
                width: "140px",
                height: "140px",
                left: "80%",
                top: "70%",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 360],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          {/* Main Loading Content */}
          <div className="relative z-10 text-center px-8 max-w-md mx-auto">
            {/* Logo/Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              className="mb-8"
            >
              <div className="w-20 h-20 mx-auto bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <CpuChipIcon className="w-10 h-10 text-white" />
                </motion.div>
              </div>
            </motion.div>

            {/* Loading Text */}
            <motion.div className="mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-3xl font-bold text-white mb-2"
              >
                Rani&apos;s Portfolio
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="text-white/80 text-lg"
              >
                {loadingMessage}
              </motion.p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mb-6"
            >
              <div className="w-full bg-white/20 rounded-full h-2 mb-3 overflow-hidden backdrop-blur-sm">
                <motion.div
                  className="h-full bg-gradient-to-r from-white via-blue-200 to-purple-200 rounded-full shadow-lg"
                  initial={{ width: "0%" }}
                  animate={{ width: `${displayProgress}%` }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  }}
                />
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex justify-between text-sm text-white/70"
              >
                <span>Loading...</span>
                <motion.span
                  key={displayProgress}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {Math.round(displayProgress)}%
                </motion.span>
              </motion.div>
            </motion.div>

            {/* Loading dots animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex justify-center space-x-2"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-white/60 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
