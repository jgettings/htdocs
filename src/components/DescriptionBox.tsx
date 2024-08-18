import { twMerge } from 'tailwind-merge';
import { tw } from '../tailwindUtils';

export type DescriptionBoxProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLProps<HTMLDivElement>;

const DescriptionBox: React.FC<DescriptionBoxProps> = ({
  className,
  children,
  ...divProps
}) => {
  const baseClasses = tw`m-2 max-w-xl rounded-lg border-2 border-gray-500 bg-white p-3 text-base text-black md:w-fit dark:border-white dark:bg-dkgray dark:text-white [&>li]:mx-4 [&>li]:my-2`;

  return (
    <div className={twMerge(baseClasses, className)} {...divProps}>
      {children}
    </div>
  );
};

export default DescriptionBox;
