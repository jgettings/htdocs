import { format } from 'date-fns';
import { Timeline } from 'flowbite-react';

const dateFormat = 'LLL d, yyyy';

type ResumeTimelineDatesProps = {
  startDate: string;
  endDate: string;
};

const ResumeTimelineDates: React.FC<ResumeTimelineDatesProps> = ({
  startDate,
  endDate,
}) => (
  <div className="inline text-gray-400 dark:text-gray-500">
    <Timeline.Time dateTime={startDate}>
      {format(startDate, dateFormat)}
    </Timeline.Time>{' '}
    -{' '}
    <Timeline.Time dateTime={endDate}>
      {format(endDate, dateFormat)}
    </Timeline.Time>
  </div>
);

export default ResumeTimelineDates;
