"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  EyeIcon,
  ArrowTopRightOnSquareIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Handle filter change
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  const filters = ["All", "Templates", "Canva", "UI/UX", "Branding"];

  const projects = [
    {
      id: 1,
      title: "Productivity Notion Dashboard",
      category: "Templates",
      description:
        "A comprehensive productivity dashboard with task management, habit tracking, and goal setting features designed for entrepreneurs.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      tags: ["Notion", "Productivity", "Dashboard"],
      link: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Modern Brand Identity",
      category: "Branding",
      description:
        "Complete brand identity package including logo design, color palette, typography, and brand guidelines for a tech startup.",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=250&fit=crop",
      tags: ["Logo", "Branding", "Identity"],
      link: "#",
      featured: true,
    },
    {
      id: 3,
      title: "E-commerce Mobile App",
      category: "UI/UX",
      description:
        "Modern e-commerce mobile application with seamless user experience, intuitive navigation, and conversion-focused design.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      tags: ["Mobile", "E-commerce", "UI/UX"],
      link: "#",
      featured: true,
    },
    {
      id: 4,
      title: "Social Media Templates Pack",
      category: "Canva",
      description:
        "A collection of 50+ Instagram post templates designed for lifestyle brands with consistent visual identity.",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop",
      tags: ["Social Media", "Templates", "Instagram"],
      link: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Student Planner Notion",
      category: "Templates",
      description:
        "Academic planner template with course tracking, assignment management, and study schedule organization.",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
      tags: ["Education", "Planning", "Students"],
      link: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Restaurant Menu Design",
      category: "Canva",
      description:
        "Elegant restaurant menu design with modern typography and appetizing food photography layout.",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop",
      tags: ["Menu", "Restaurant", "Print"],
      link: "#",
      featured: false,
    },
    {
      id: 7,
      title: "SaaS Dashboard Interface",
      category: "UI/UX",
      description:
        "Clean and intuitive dashboard interface for a SaaS platform with data visualization and user management.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      tags: ["SaaS", "Dashboard", "Analytics"],
      link: "#",
      featured: false,
    },
    {
      id: 8,
      title: "Fitness Brand Package",
      category: "Branding",
      description:
        "Complete branding package for a fitness studio including logo, business cards, and promotional materials.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      tags: ["Fitness", "Logo", "Print"],
      link: "#",
      featured: false,
    },
    {
      id: 9,
      title: "Event Flyer Collection",
      category: "Canva",
      description:
        "Modern event flyer templates for conferences, workshops, and corporate events with customizable layouts.",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=250&fit=crop",
      tags: ["Events", "Flyers", "Corporate"],
      link: "#",
      featured: false,
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 gradient-animation"></div>
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 text-white/40"
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
                rotate: [0, 180, 360],
                left: [
                  `${(i + 1) * 12}%`,
                  `${(i + 1) * 12 + 2}%`,
                  `${(i + 1) * 12}%`,
                ],
                top: [
                  `${(i + 1) * 15}%`,
                  `${(i + 1) * 15 + 2}%`,
                  `${(i + 1) * 15}%`,
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            >
              <StarIcon className="w-4 h-4" />
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-gray-900 dark:text-white"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              My Portfolio
            </h1>
            <p className="text-xl text-gray-800 dark:text-white/90 max-w-3xl mx-auto">
              Explore my latest design work across different platforms and
              industries. Each project represents a unique challenge and
              creative solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Content */}
      <section className="py-16">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div
            className="flex flex-wrap justify-center gap-4 mb-12"
            style={{ position: "relative", zIndex: 10 }}
          >
            {filters.map((filter) => (
              <button
                key={filter}
                className={`portfolio-filter-btn px-6 py-3 min-h-[44px] min-w-[44px] rounded-full font-medium cursor-pointer border-0 outline-0 transition-all duration-200 ${
                  activeFilter === filter
                    ? "bg-accent-500 text-gray-dark shadow-lg"
                    : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md"
                }`}
                onClick={() => setActiveFilter(filter)}
                onTouchEnd={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  whileHover={{ y: -10 }}
                  className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4 bg-accent-500 text-gray-dark px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex space-x-3"
                      >
                        <Link
                          href={`/portfolio/${project.id}`}
                          className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full p-3 hover:bg-white dark:hover:bg-gray-800 transition-colors"
                        >
                          <EyeIcon className="w-6 h-6 text-gray-800 dark:text-white" />
                        </Link>
                        <Link
                          href={project.link}
                          className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full p-3 hover:bg-white dark:hover:bg-gray-800 transition-colors"
                        >
                          <ArrowTopRightOnSquareIcon className="w-6 h-6 text-gray-800 dark:text-white" />
                        </Link>
                      </motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-secondary-600 bg-secondary-100 px-3 py-1 rounded-full dark:bg-gray-700 dark:text-secondary-300">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
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
                      className="inline-flex items-center text-accent-600 hover:text-accent-700 font-medium transition-colors group/link dark:text-accent-400 dark:hover:text-accent-300"
                    >
                      View Details
                      <ArrowTopRightOnSquareIcon className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent-500 rounded-2xl transition-all duration-300" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 text-6xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No projects found
              </h3>
              <p className="text-gray-500">
                Try selecting a different category to see more projects.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
