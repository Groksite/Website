"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckIcon, StarIcon } from "@heroicons/react/24/solid";
import {
  CodeBracketIcon,
  PaintBrushIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const About = () => {
  const skills = [
    { name: "UI/UX Design", level: 95 },
    { name: "Notion Templates", level: 90 },
    { name: "Canva Design", level: 88 },
    { name: "Web Development", level: 85 },
    { name: "Brand Identity", level: 92 },
    { name: "Prototyping", level: 87 },
  ];

  const achievements = [
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "3+", label: "Years Experience" },
    { number: "5★", label: "Average Rating" },
  ];

  const services = [
    {
      icon: PaintBrushIcon,
      title: "Creative Design",
      description:
        "Crafting beautiful and functional designs that tell your story",
    },
    {
      icon: CodeBracketIcon,
      title: "Development",
      description: "Bringing designs to life with clean, efficient code",
    },
    {
      icon: RocketLaunchIcon,
      title: "Strategy",
      description:
        "Strategic thinking to ensure your project achieves its goals",
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/30 to-secondary-600/30 rounded-full blur-xl" />
              <Image
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop"
                alt="Beautiful mountain landscape representing creativity and inspiration"
                width={400}
                height={400}
                className="relative z-10 rounded-xl shadow-xl object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              {/* Landscape Card */}
              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl">
                {/* Card Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />

                {/* Content */}
                <div className="relative z-10">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
                  >
                    About Me
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-800 dark:text-white/90 leading-relaxed"
                  >
                    I&apos;m a passionate designer who combines creativity with
                    strategy to deliver exceptional digital experiences. With
                    expertise in UI/UX design, Notion templates, and brand
                    identity, I help businesses and individuals bring their
                    visions to life.
                  </motion.p>

                  {/* Decorative Elements */}
                  <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-full blur-xl" />
                  <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-br from-secondary-400/20 to-primary-400/20 rounded-full blur-xl" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
          >
            My Skills
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                  <span className="text-primary-500 dark:text-primary-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div
                    className="h-2 bg-primary-500 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-500 dark:text-primary-400 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Services Overview */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
          >
            What I Do
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-lg bg-gray-100 dark:bg-gray-900"
              >
                <service.icon className="w-12 h-12 text-primary-500 dark:text-primary-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
