"use client";

import { useEffect } from "react";
import {
  HeaderSkeleton,
  HeroSkeleton,
  PortfolioGridSkeleton,
} from "@/components/SkeletonLoader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedPortfolio from "@/components/FeaturedPortfolio";
import Footer from "@/components/Footer";

export default function Home() {
  // Add keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        document.body.classList.add("keyboard-nav");
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove("keyboard-nav");
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  return (
    <main className="min-h-screen" id="main-content">
      <Header />
      <Hero />
      <FeaturedPortfolio />
      <Footer />
    </main>
  );
}
