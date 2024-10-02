import { twMerge } from 'tailwind-merge';

type LoadingSkeletonProps = {
  className?: string;
};

/**
 *  https://flowbite.com/docs/components/skeleton/
 */
const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ className }) => (
  <div role="status" className={twMerge('max-w-sm animate-pulse', className)}>
    <div className="mb-2.5 h-2 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700" />
    <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700" />
    <div className="mb-2.5 h-2 max-w-[330px] rounded-full bg-gray-200 dark:bg-gray-700" />
    <div className="mb-2.5 h-2 max-w-[300px] rounded-full bg-gray-200 dark:bg-gray-700" />
    <div className="h-2 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700" />
    <span className="sr-only">Loading</span>
  </div>
);

export default LoadingSkeleton;
