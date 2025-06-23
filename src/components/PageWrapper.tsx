"use client";

import { usePageLoading } from "@/hooks/usePageLoading";
import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
  pageName?: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, pageName }) => {
  usePageLoading(pageName);

  return <>{children}</>;
};

export default PageWrapper;
