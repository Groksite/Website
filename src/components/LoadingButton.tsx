"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon, SparklesIcon } from "@heroicons/react/24/outline";

interface LoadingButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  loadingMessage?: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
  onClick,
  children,
  className = "",
  loadingMessage = "Processing...",
  variant = "primary",
  disabled = false,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    if (disabled || isLoading) return;

    setIsLoading(true);

    try {
      // Execute the actual onClick function if provided
      if (onClick) {
        await onClick();
      }

      // Simulate some processing time
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } finally {
      setIsLoading(false);
    }
  };

  const baseClasses = `
    relative inline-flex items-center justify-center px-6 py-3 rounded-full font-medium 
    transition-all duration-300 transform hover:scale-105 active:scale-95
    focus:outline-none focus:ring-4 focus:ring-opacity-50
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
  `;

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-primary-500 to-primary-600 
      hover:from-primary-600 hover:to-primary-700 
      text-white shadow-lg hover:shadow-xl
      focus:ring-primary-300
    `,
    secondary: `
      bg-white dark:bg-gray-800 border-2 border-primary-500 
      text-primary-500 dark:text-primary-400
      hover:bg-primary-50 dark:hover:bg-gray-700
      focus:ring-primary-300
    `,
  };

  return (
    <motion.button
      onClick={handleClick}
      disabled={disabled || isLoading}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      whileHover={{ scale: disabled || isLoading ? 1 : 1.05 }}
      whileTap={{ scale: disabled || isLoading ? 1 : 0.95 }}
    >
      {/* Loading State */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 flex items-center justify-center bg-inherit rounded-full"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
          />
        </motion.div>
      )}

      {/* Button Content */}
      <motion.div
        className={`flex items-center space-x-2 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        transition={{ duration: 0.2 }}
      >
        <SparklesIcon className="w-5 h-5" />
        <span>{children}</span>
        <ArrowRightIcon className="w-4 h-4" />
      </motion.div>
    </motion.button>
  );
};

export default LoadingButton;
