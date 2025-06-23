"use client";

import { motion } from "framer-motion";
import {
  CalendarIcon,
  ClockIcon,
  ArrowRightIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  // Featured blog post
  const featuredPost = {
    id: 1,
    title: "The Ultimate Guide to Creating Notion Templates",
    excerpt:
      "Learn how to design beautiful and functional Notion templates that boost productivity and organization. Discover the secrets behind creating templates that not only look great but also enhance workflow efficiency.",
    content:
      "Discover the secrets behind creating effective Notion templates that transform how you work and organize your life...",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
    category: "Notion",
    author: "Simran",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["Notion", "Productivity", "Templates", "Organization"],
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-800 dark:text-white/90 max-w-2xl mx-auto"
          >
            Discover insights, tips, and trends in UI/UX design, Notion
            templates, and creative workflow.
          </motion.p>
        </div>
      </section>

      {/* Featured Blog Post */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Article
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Dive deep into our latest insights and discover actionable tips to
              enhance your creative workflow.
            </p>
          </motion.div>

          {/* Featured Post */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative rounded-3xl overflow-hidden backdrop-blur-lg bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-2xl">
              {/* Featured Badge */}
              <div className="absolute top-6 left-6 z-10 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                ⭐ Featured Article
              </div>

              {/* Image */}
              <div className="relative h-64 md:h-80 lg:h-96">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12">
                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                  <div className="flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    {formatDate(featuredPost.date)}
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="w-4 h-4 mr-2" />
                    {featuredPost.readTime}
                  </div>
                  <div className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full">
                    {featuredPost.category}
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  {featuredPost.title}
                </h1>

                {/* Excerpt */}
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Author and CTA */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {featuredPost.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {featuredPost.author}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Creative Designer & Writer
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Read Full Article
                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Coming Soon Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-20"
          >
            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 lg:p-12 shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                More Articles Coming Soon!
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Stay tuned for more insights on design, productivity, and
                creative workflows. Subscribe to get notified when new articles
                are published.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
              >
                Get Notified
                <ArrowRightIcon className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
