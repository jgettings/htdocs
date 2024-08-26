import { Card } from 'flowbite-react';
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
  const baseClasses = tw`m-2 md:w-fit max-w-xl text-base`;
  // TODO fix spacing on avatar popup

  return (
    <Card className={twMerge(baseClasses, className)} {...divProps}>
      {children}
    </Card>
  );
};

export default DescriptionBox;
