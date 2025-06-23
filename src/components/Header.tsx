"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 10;
    if (scrolled !== isScrolled) {
      setIsScrolled(scrolled);
    }
  }, [isScrolled]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Close mobile menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        isMenuOpen &&
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    // Add event listeners when menu is open
    if (isMenuOpen) {
      document.addEventListener(
        "mousedown",
        handleClickOutside as EventListener
      );
      document.addEventListener(
        "touchstart",
        handleClickOutside as EventListener
      );
      document.addEventListener("keydown", handleKeyDown);
    }

    // Cleanup event listeners
    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside as EventListener
      );
      document.removeEventListener(
        "touchstart",
        handleClickOutside as EventListener
      );
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const isCurrentPage = (href: string) => {
    return pathname === href;
  };

  return (
    <motion.header
      ref={headerRef}
      initial={prefersReducedMotion ? { y: 0 } : { y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary-500/95 dark:bg-primary-700/95 backdrop-blur-md shadow-lg"
          : "bg-primary-500 dark:bg-primary-700"
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
          >
            <Link
              href="/"
              className="text-xl font-bold text-white hover:text-accent-500 transition-colors"
              aria-label="Home"
            >
              Creative Designer
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-1"
            aria-label="Main navigation"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={
                  prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -20 }
                }
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  prefetch={true}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isCurrentPage(item.href)
                      ? "bg-accent-500 text-gray-dark"
                      : "text-white hover:bg-accent-500 hover:text-gray-dark"
                  }`}
                  aria-current={isCurrentPage(item.href) ? "page" : undefined}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile menu button */}
          <motion.button
            whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon
                className="h-6 w-6 border-2 border-accent-500 rounded"
                aria-hidden="true"
              />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <>
            {/* Overlay - Click to close (starts below header) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed top-16 left-0 right-0 bottom-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Mobile Menu */}
            <motion.div
              id="mobile-menu"
              role="navigation"
              aria-label="Mobile navigation"
              initial={
                prefersReducedMotion
                  ? { opacity: 1 }
                  : { opacity: 0, height: 0 }
              }
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-primary-600/95 dark:bg-primary-800/95 backdrop-blur-md border-t border-white/10 relative z-50"
            >
              <div className="px-4 py-2 space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      prefetch={true}
                      className={`block px-4 py-2 rounded-lg font-medium transition-colors ${
                        isCurrentPage(item.href)
                          ? "bg-accent-500 text-gray-dark"
                          : "text-white hover:bg-white/10"
                      }`}
                      onClick={() => {
                        setIsMenuOpen(false);
                      }}
                      aria-current={
                        isCurrentPage(item.href) ? "page" : undefined
                      }
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-2 pb-4">
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
