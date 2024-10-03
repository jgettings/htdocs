import { format } from 'date-fns';
import { Timeline } from 'flowbite-react';
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
  <div
    className={twMerge('inline text-gray-400 dark:text-gray-500', className)}
  >
    <Timeline.Time dateTime={startDate} className={className}>
      {format(startDate, dateFormat)}
    </Timeline.Time>{' '}
    -{' '}
    <Timeline.Time dateTime={endDate} className={className}>
      {format(endDate, dateFormat)}
    </Timeline.Time>
  </div>
);

export default ResumeTimelineDates;
