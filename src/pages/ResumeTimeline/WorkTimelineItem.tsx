import { PiBuildingOfficeFill } from 'react-icons/pi';
import { Timeline, Card, Button } from 'flowbite-react';
import { ResumeProfile } from 'data';
import ResumeTimelineDates from './Dates';

type WorkTimelineItemProps = {
  work: NonNullable<ResumeProfile['work']>[0];
};

const logoWidth = 150;

const WorkTimelineItem: React.FC<WorkTimelineItemProps> = ({ work }) => (
  <Timeline.Item key={work.name}>
    <Timeline.Point icon={PiBuildingOfficeFill} />
    <Timeline.Content>
      <Card>
        <ResumeTimelineDates
          startDate={work.startDate as string}
          endDate={work.endDate as string}
        />
        <Timeline.Title className="flex flex-col justify-between gap-6 md:flex-row">
          <div>
            {work.position}
            <div className="font-light italic">{work.name}</div>
          </div>
          <div className="flex-none">
            <a href={work.url}>
              {work.iconDark && (
                <img
                  alt={`${work.name} logo`}
                  src={`/images/company-icons/${work.iconDark}`}
                  width={logoWidth}
                  className="hidden dark:inline"
                />
              )}
              <img
                alt={`${work.name} logo`}
                src={`/images/company-icons/${work.icon}`}
                width={logoWidth}
                className={work.iconDark ? 'inline dark:hidden' : undefined}
              />
            </a>
          </div>
        </Timeline.Title>
        <Timeline.Body>{work.summary}</Timeline.Body>
        <Button>Read more</Button>
      </Card>
    </Timeline.Content>
  </Timeline.Item>
);

export default WorkTimelineItem;
