import { useContext } from 'react';
import { PiBuildingOfficeFill } from 'react-icons/pi';
import { Timeline, Card, Button } from 'flowbite-react';
import { WorkItem } from 'data';
import CarouselContext from 'components/Carousel/Context';
import ResumeTimelineDates from './Dates';
import WorkItemLogoLink from './WorkItemLogoLink';

type WorkTimelineItemProps = {
  work: WorkItem;
};

const WorkTimelineItem: React.FC<WorkTimelineItemProps> = ({ work }) => {
  const { setSelectedByKey } = useContext(CarouselContext);

  return (
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
              <span className="sr-only"> at </span>
              <div className="font-light italic">{work.name}</div>
            </div>
            <div className="flex-none">
              <WorkItemLogoLink work={work} />
            </div>
          </Timeline.Title>
          <Timeline.Body>{work.summary}</Timeline.Body>
          <Button onClick={() => setSelectedByKey(work.name)}>Read more</Button>
        </Card>
      </Timeline.Content>
    </Timeline.Item>
  );
};

export default WorkTimelineItem;
