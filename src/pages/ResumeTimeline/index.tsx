import data, { EducationItem, WorkItem } from 'data/index';
import { Timeline } from 'flowbite-react';
import ScrollPageHeading from 'components/ScrollPages/Heading';
import { CarouselContextProvider } from 'components/Carousel/Context';
import { format } from 'date-fns';
import WorkTimelineItem from './WorkTimelineItem';
import EducationTimelineItem from './EducationTimelineItem';
import WorkItemModal from './WorkItemModal';

const getNavLabel = (item: WorkItem | null) => {
  if (!item || !item.name) {
    return '';
  }

  return `${item.position} at ${item.name}, ${format(item.startDate as string, 'yyyy')} - ${format(item.endDate as string, 'yyyy')}`;
};

const ResumeTimeline: React.FC = () => (
  <section id="resume-timeline">
    <ScrollPageHeading>Experience</ScrollPageHeading>
    <CarouselContextProvider
      items={data.work}
      itemKeyField="name"
      getNavLabel={getNavLabel}
    >
      <div className="z-0 flex flex-col items-center">
        <Timeline>
          {/* Really these should be turned into one array and
              sorted by date but this is fine for now */}
          {data.work?.map((work) => (
            <WorkTimelineItem key={work.name} work={work} />
          ))}
          {data.education?.map((ed: EducationItem) => (
            <EducationTimelineItem key={ed.name} education={ed} />
          ))}
        </Timeline>
      </div>
      <WorkItemModal />
    </CarouselContextProvider>
  </section>
);

export default ResumeTimeline;

// I want to write a test for the navigation logic but my
// jest setup is having issues with the local imports
