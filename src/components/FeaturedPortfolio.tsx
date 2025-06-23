"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRightIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { CardSkeleton } from "./SkeletonLoader";

const FeaturedPortfolio = () => {
  // Use refs and inView for more efficient animations
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const featuredProjects = [
    {
      id: 1,
      title: "Modern Notion Dashboard",
      category: "Notion Template",
      description:
        "A comprehensive productivity dashboard with task management, habit tracking, and goal setting features.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      tags: ["Notion", "Productivity", "Dashboard"],
      color: "from-blue-500 to-purple-600",
    },
    {
      id: 2,
      title: "Brand Identity Package",
      category: "Canva Design",
      description:
        "Complete brand identity including logo, business cards, and social media templates.",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=250&fit=crop",
      tags: ["Branding", "Logo", "Identity"],
      color: "from-pink-500 to-rose-600",
    },
    {
      id: 3,
      title: "E-commerce Web App",
      category: "UI/UX Design",
      description:
        "Modern e-commerce interface with seamless user experience and conversion-focused design.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      tags: ["Web Design", "E-commerce", "UI/UX"],
      color: "from-green-500 to-teal-600",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-600 dark:bg-primary-700/30 dark:text-primary-100 text-sm font-medium mb-4"
          >
            ✨ Featured Work
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover some of my latest and most impactful design work across
            different platforms and industries.
          </p>
        </motion.div>

        {/* Projects Grid - Using modern auto-fit grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 auto-rows-fr">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}
                />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading={index === 0 ? undefined : "lazy"}
                  priority={index === 0}
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <EyeIcon className="w-6 h-6 text-gray-800" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-secondary-600 dark:text-secondary-400 bg-secondary-100 dark:bg-secondary-900/40 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Details Link */}
                <Link
                  href={`/portfolio/${project.id}`}
                  className="inline-flex items-center text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 font-medium transition-colors group/link"
                >
                  View Details
                  <ArrowRightIcon className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent-500 rounded-2xl transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/portfolio"
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 dark:hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl dark:shadow-primary-700/20 glow-on-hover group"
            >
              View Full Portfolio
              <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedPortfolio;
