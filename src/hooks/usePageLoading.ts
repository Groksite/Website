"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLoading } from '@/contexts/LoadingContext';

export const usePageLoading = (pageName?: string) => {
  const { startLoading, updateProgress, finishLoading } = useLoading();
  const pathname = usePathname();

  useEffect(() => {
    const loadPage = async () => {
      const pageDisplayName = pageName || getPageName(pathname);
      
      // Start loading
      startLoading(`Loading ${pageDisplayName}...`);
      
      // Simulate loading steps with realistic progress
      const loadingSteps = [
        { progress: 20, message: 'Initializing page...' },
        { progress: 40, message: 'Loading components...' },
        { progress: 60, message: 'Fetching data...' },
        { progress: 80, message: 'Rendering content...' },
        { progress: 95, message: 'Almost ready...' },
        { progress: 100, message: 'Complete!' },
      ];

      for (let i = 0; i < loadingSteps.length; i++) {
        const step = loadingSteps[i];
        await new Promise(resolve => setTimeout(resolve, 200 + Math.random() * 300));
        updateProgress(step.progress, step.message);
      }

      // Finish loading
      setTimeout(() => {
        finishLoading();
      }, 300);
    };

    loadPage();
  }, [pathname, pageName, startLoading, updateProgress, finishLoading]);
};

const getPageName = (pathname: string): string => {
  const pageNames: { [key: string]: string } = {
    '/': 'Home',
    '/about': 'About',
    '/portfolio': 'Portfolio',
    '/services': 'Services',
    '/blog': 'Blog',
    '/contact': 'Contact',
  };

  return pageNames[pathname] || 'Page';
};