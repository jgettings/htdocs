import clsx from 'clsx';

type DescriptionBoxProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLProps<HTMLDivElement>;

const DescriptionBox: React.FC<DescriptionBoxProps> = ({
  className,
  children,
  ...divProps
}) => {
  const baseClasses =
    'bg-white dark:bg-dkgray text-base p-3 border-2 rounded-lg border-gray-500 dark:border-white text-black dark:text-white';

  return (
    <div className={clsx(baseClasses, className)} {...divProps}>
      {children}
    </div>
  );
};

export default DescriptionBox;
