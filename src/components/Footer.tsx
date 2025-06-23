"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import {
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  DribbbleIcon,
  BehanceIcon,
} from "@/components/icons/SocialIcons";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.1 });

  const footerLinks = {
    navigation: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Services", href: "/services" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
    services: [
      { name: "UI/UX Design", href: "/services#uiux" },
      { name: "Notion Templates", href: "/services#notion" },
      { name: "Canva Designs", href: "/services#canva" },
      { name: "Web Development", href: "/services#web" },
      { name: "Brand Identity", href: "/services#branding" },
      { name: "Consultation", href: "/services#consultation" },
    ],
    resources: [
      { name: "Design Process", href: "/blog/design-process" },
      { name: "Free Templates", href: "/resources/templates" },
      { name: "Design Tips", href: "/blog/tips" },
      { name: "Case Studies", href: "/portfolio/case-studies" },
      { name: "FAQ", href: "/faq" },
      { name: "Pricing", href: "/pricing" },
    ],
  };

  const socialLinks = [
    { name: "Twitter", href: "#", icon: TwitterIcon },
    { name: "LinkedIn", href: "#", icon: LinkedinIcon },
    { name: "Instagram", href: "#", icon: InstagramIcon },
    { name: "Dribbble", href: "#", icon: DribbbleIcon },
    { name: "Behance", href: "#", icon: BehanceIcon },
  ];

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      text: "hello@creativedesigner.com",
      href: "mailto:hello@creativedesigner.com",
    },
    { icon: PhoneIcon, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPinIcon, text: "New York, NY", href: "#" },
  ];

  return (
    <footer
      ref={footerRef}
      className="bg-gray-dark dark:bg-gray-900 text-white"
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand & Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="lg:col-span-1"
            >
              <Link
                href="/"
                className="text-2xl font-bold text-white hover:text-accent-500 transition-colors"
              >
                Creative Designer
              </Link>

              <p className="mt-4 text-gray-300 leading-relaxed">
                Passionate UI/UX designer creating beautiful, functional designs
                that help businesses grow and users thrive. Let&apos;s build
                something amazing together!
              </p>

              {/* Contact Info */}
              <div className="mt-6 space-y-3">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3"
                  >
                    <item.icon className="w-5 h-5 text-accent-500 flex-shrink-0" />
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item.text}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-6">Navigation</h3>
              <ul className="space-y-3">
                {footerLinks.navigation.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-accent-500 transition-colors hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-accent-500 transition-colors hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-6">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-accent-500 transition-colors hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="border-t border-gray-600 dark:border-gray-700 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-300">
              <span>© {currentYear} Creative Designer. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <HeartIcon className="w-5 h-5 text-red-500" />
              </motion.div>
              <span>in New York</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <motion.div
                  key={social.name}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={social.href}
                    className="w-10 h-10 bg-gray-600 dark:bg-gray-700 hover:bg-secondary-500 dark:hover:bg-secondary-600 rounded-full flex items-center justify-center transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-6 pt-6 border-t border-gray-700 dark:border-gray-800 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400"
          >
            <Link
              href="/privacy"
              className="hover:text-accent-500 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-accent-500 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="hover:text-accent-500 transition-colors"
            >
              Cookie Policy
            </Link>
            <Link
              href="/sitemap"
              className="hover:text-accent-500 transition-colors"
            >
              Sitemap
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
