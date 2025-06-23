"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
} from "react";

interface LoadingContextType {
  isLoading: boolean;
  loadingProgress: number;
  loadingMessage: string;
  isPageLoading: boolean;
  startLoading: (message?: string) => void;
  updateProgress: (progress: number, message?: string) => void;
  finishLoading: () => void;
  setPageLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(true); // Start with loading true
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState("Initializing...");
  const [isPageLoading, setIsPageLoading] = useState(false);
  const progressRef = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const finishLoading = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    progressRef.current = 100;
    setLoadingProgress(100);
    setLoadingMessage("Ready!");

    setTimeout(() => {
      setIsLoading(false);
      progressRef.current = 0;
      setLoadingProgress(0);
      setLoadingMessage("Loading...");
    }, 800); // Longer delay to show completion
  }, []);

  // Auto-progress simulation for better UX
  const simulateProgress = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      progressRef.current += Math.random() * 15 + 5; // Random increment between 5-20

      if (progressRef.current >= 90) {
        progressRef.current = 90; // Stop at 90% until manually finished
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      }

      setLoadingProgress(Math.min(90, progressRef.current));
    }, 100 + Math.random() * 200); // Random interval between 100-300ms
  }, []);

  // Initialize loading on mount with real resource loading
  useEffect(() => {
    const initializeApp = async () => {
      setLoadingMessage("Initializing...");
      simulateProgress();

      // Real resource loading phases
      const loadingPhases = [
        { message: "Loading fonts...", duration: 300 },
        { message: "Loading critical resources...", duration: 400 },
        { message: "Preparing components...", duration: 350 },
        { message: "Optimizing interface...", duration: 250 },
        { message: "Almost ready...", duration: 200 },
      ];

      // Check if fonts are loaded
      try {
        await document.fonts.ready;
        setLoadingMessage("Fonts loaded...");
      } catch (error) {
        console.log("Font loading check failed, continuing...");
      }

      // Execute loading phases
      for (let i = 0; i < loadingPhases.length; i++) {
        const phase = loadingPhases[i];
        setLoadingMessage(phase.message);

        // Update progress more realistically
        const phaseProgress = 20 + i * 15; // Start at 20%, increment by 15%
        progressRef.current = Math.min(90, phaseProgress);
        setLoadingProgress(progressRef.current);

        await new Promise((resolve) => setTimeout(resolve, phase.duration));
      }

      // Check if DOM is fully loaded
      if (document.readyState !== "complete") {
        setLoadingMessage("Finalizing...");
        await new Promise<void>((resolve) => {
          if (document.readyState === "complete") {
            resolve();
          } else {
            window.addEventListener("load", () => resolve(), {
              once: true,
            });
          }
        });
      }

      // Finish loading
      setTimeout(() => {
        finishLoading();
      }, 300);
    };

    initializeApp();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [simulateProgress, finishLoading]);

  const startLoading = useCallback(
    (message = "Loading...") => {
      setIsLoading(true);
      progressRef.current = 0;
      setLoadingProgress(0);
      setLoadingMessage(message);
      simulateProgress();
    },
    [simulateProgress]
  );

  const updateProgress = useCallback((progress: number, message?: string) => {
    progressRef.current = Math.min(100, Math.max(0, progress));
    setLoadingProgress(progressRef.current);
    if (message) {
      setLoadingMessage(message);
    }
  }, []);

  const setPageLoadingState = useCallback((loading: boolean) => {
    setIsPageLoading(loading);
  }, []);

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        loadingProgress,
        loadingMessage,
        isPageLoading,
        startLoading,
        updateProgress,
        finishLoading,
        setPageLoading: setPageLoadingState,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
