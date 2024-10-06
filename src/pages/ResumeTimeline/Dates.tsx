import { format } from 'date-fns';
import { twMerge } from 'tailwind-merge';

const dateFormat = 'LLL d, yyyy';

type ResumeTimelineDatesProps = {
  className?: string;
  startDate: string;
  endDate: string;
};

const ResumeTimelineDates: React.FC<ResumeTimelineDatesProps> = ({
  className,
  startDate,
  endDate,
}) => (
  <span
    className={twMerge('inline text-gray-400 dark:text-gray-500', className)}
  >
    {/* Timeline.Time except make it context agnostic */}
    <time
      dateTime={startDate}
      className={twMerge('mb-1 text-sm font-normal leading-none', className)}
    >
      {format(startDate, dateFormat)}
    </time>{' '}
    -{' '}
    <time
      dateTime={endDate}
      className={twMerge('mb-1 text-sm font-normal leading-none', className)}
    >
      {' '}
      {format(endDate, dateFormat)}
    </time>
  </span>
);

export default ResumeTimelineDates;
