"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import * as HeroIcons from "@heroicons/react/24/outline";
const { ArrowRightIcon, SparklesIcon, StarIcon } = HeroIcons;
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  // Use refs and inView for more efficient rendering
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Rotating text state
  const rotatingWords = ["Notion", "Canva", "UI/UX"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Rotate words every 3.5 seconds for better readability
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  // Rotating Text Component
  const RotatingText = () => (
    <span className="relative inline-block rotating-text-container">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWordIndex}
          className="relative z-10 inline-block rotating-text-word gradient-text font-bold"
          initial={{
            opacity: 0,
            y: 30,
            rotateX: -90,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -30,
            rotateX: 90,
            scale: 0.8,
          }}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
            opacity: { duration: 0.4 },
            scale: { duration: 0.5 },
          }}
        >
          {rotatingWords[currentWordIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );

  // Precompute random positions for floating elements to avoid layout shifts
  const floatingElements = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    left: `${Math.floor(Math.random() * 100)}%`,
    top: `${Math.floor(Math.random() * 100)}%`,
    duration: 3 + Math.floor(Math.random() * 2),
    delay: Math.floor(Math.random() * 2),
  }));

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-animation"></div>

      {/* Floating Elements - only render when in view */}
      {isInView && (
        <div className="absolute inset-0 overflow-hidden">
          {floatingElements.map((element) => (
            <motion.div
              key={element.id}
              className="absolute w-4 h-4 text-white/40"
              style={{
                left: element.left,
                top: element.top,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: element.duration,
                repeat: Infinity,
                delay: element.delay,
              }}
            >
              <StarIcon className="w-4 h-4" />
            </motion.div>
          ))}
        </div>
      )}

      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-gray-900 dark:text-white text-sm font-medium mb-6"
            >
              <SparklesIcon className="w-4 h-4 mr-2" />
              Available for Freelance Work
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Creative <RotatingText />
              <span className="blinking-cursor text-accent-500 ml-1">
                |
              </span>{" "}
              Designer
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl text-gray-800 dark:text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              I design stunning Notion templates, eye-catching Canva flyers, and
              modern web interfaces that captivate and convert. Let&apos;s bring
              your vision to life!
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/portfolio"
                  className="inline-flex items-center px-8 py-4 bg-accent-500 text-gray-dark font-semibold rounded-xl hover:bg-accent-600 transition-all duration-300 shadow-lg hover:shadow-xl glow-on-hover group"
                >
                  View Portfolio
                  <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-gray-900 dark:text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300 border border-white/30 hover:border-white/50"
                >
                  Contact Me
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="flex justify-center lg:justify-start space-x-8 mt-12"
            >
              {[
                { number: "50+", label: "Projects Completed" },
                { number: "25+", label: "Happy Clients" },
                { number: "5★", label: "Average Rating" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-700 dark:text-white/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Element - Optimized with responsive images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block hero-image-container"
          >
            <div className="relative w-full h-96 rounded-2xl overflow-hidden">
              {/* Design showcase with optimized image loading */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80"
                    alt="Designer workspace"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={true}
                    fill
                    className="object-cover opacity-60 mix-blend-overlay"
                  />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 flex items-center justify-center w-32 h-32 border-4 border-accent-500 border-t-transparent rounded-full m-auto"
                  />
                </div>
              </div>

              {/* Floating Cards - limited to 3 for performance */}
              {isInView &&
                [...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-20 h-20 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
                    style={{
                      left: `${20 + i * 25}%`,
                      top: `${20 + i * 15}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
