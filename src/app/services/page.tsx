"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  PaintBrushIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  PhotoIcon,
  CubeIcon,
  ChatBubbleLeftRightIcon,
  CheckIcon,
  ArrowRightIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      icon: PaintBrushIcon,
      title: "UI/UX Design",
      description:
        "Create beautiful, intuitive user interfaces and experiences that delight users and drive conversions.",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Visual Design",
        "Usability Testing",
        "Design Systems",
      ],
      price: "Starting at $500",
      popular: false,
    },
    {
      icon: DocumentTextIcon,
      title: "Notion Templates",
      description:
        "Custom Notion templates designed to boost productivity and organize your life or business efficiently.",
      features: [
        "Custom Database Design",
        "Automated Workflows",
        "Beautiful Layouts",
        "Mobile Optimization",
        "Documentation & Support",
      ],
      price: "Starting at $50",
      popular: true,
    },
    {
      icon: PhotoIcon,
      title: "Canva Designs",
      description:
        "Eye-catching graphics for social media, marketing materials, and brand assets that stand out.",
      features: [
        "Social Media Graphics",
        "Marketing Materials",
        "Brand Assets",
        "Print Designs",
        "Template Creation",
      ],
      price: "Starting at $25",
      popular: false,
    },
    {
      icon: CodeBracketIcon,
      title: "Web Development",
      description:
        "Modern, responsive websites built with the latest technologies for optimal performance.",
      features: [
        "Responsive Design",
        "Modern Frameworks",
        "SEO Optimization",
        "Performance Optimization",
        "Maintenance & Support",
      ],
      price: "Starting at $1000",
      popular: false,
    },
    {
      icon: CubeIcon,
      title: "Brand Identity",
      description:
        "Complete brand identity packages that help your business stand out and connect with customers.",
      features: [
        "Logo Design",
        "Color Palette",
        "Typography Selection",
        "Brand Guidelines",
        "Business Card Design",
      ],
      price: "Starting at $300",
      popular: false,
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: "Design Consultation",
      description:
        "Expert advice and guidance on your design projects, strategy, and creative direction.",
      features: [
        "Design Strategy",
        "Project Planning",
        "Creative Direction",
        "Design Review",
        "Best Practices",
      ],
      price: "Starting at $100/hour",
      popular: false,
    },
  ];

  return (
    <main className="min-h-screen">
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

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            My Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-800 dark:text-white/90 max-w-2xl mx-auto"
          >
            From UI/UX design to Notion templates, I offer a range of creative
            services to help bring your vision to life.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative p-6 rounded-2xl backdrop-blur-lg ${
                  service.popular
                    ? "bg-gradient-to-br from-amber-100 to-yellow-200/95 dark:from-yellow-900/30 dark:to-amber-800/20 ring-2 ring-amber-400 shadow-amber-200/50"
                    : "bg-white/90 dark:bg-gray-800/90"
                } shadow-xl hover:shadow-2xl transition-all duration-300`}
              >
                <div className="absolute -top-4 -right-4">
                  <service.icon className="w-12 h-12 text-primary-500 dark:text-primary-400" />
                </div>{" "}
                {service.popular && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-md">
                    Popular Choice
                  </span>
                )}
                <h3
                  className={`text-xl font-bold mb-4 ${
                    service.popular
                      ? "text-amber-900 dark:text-yellow-100"
                      : "text-gray-900 dark:text-white"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`mb-6 ${
                    service.popular
                      ? "text-amber-800 dark:text-yellow-200"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {service.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {" "}
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-center ${
                        service.popular
                          ? "text-amber-800 dark:text-yellow-200"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      <CheckIcon
                        className={`w-5 h-5 mr-2 ${
                          service.popular
                            ? "text-amber-700 dark:text-yellow-400"
                            : "text-primary-500"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>{" "}
                <div
                  className={`border-t pt-4 mt-4 ${
                    service.popular
                      ? "border-amber-300 dark:border-yellow-700"
                      : "border-gray-200 dark:border-gray-700"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-lg font-semibold ${
                        service.popular
                          ? "text-amber-900 dark:text-yellow-100"
                          : "text-gray-900 dark:text-white"
                      }`}
                    >
                      {service.price}
                    </span>
                    <Link
                      href="/contact"
                      className={`inline-flex items-center ${
                        service.popular
                          ? "text-amber-700 hover:text-amber-800 dark:text-yellow-300 dark:hover:text-yellow-200"
                          : "text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300"
                      }`}
                    >
                      Get Started
                      <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
