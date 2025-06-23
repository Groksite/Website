import SkeletonLoader from "@/components/SkeletonLoader";

export default function Loading() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <SkeletonLoader />
    </div>
  );
}