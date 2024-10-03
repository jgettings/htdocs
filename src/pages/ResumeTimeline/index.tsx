import data from 'data/index';
import { Timeline } from 'flowbite-react';
import ScrollPageHeading from 'components/ScrollPages/Heading';
import WorkTimelineItem from './WorkTimelineItem';
import EducationTimelineItem from './EducationTimelineItem';

const ResumeTimeline: React.FC = () => (
  <section id="resume-timeline">
    <ScrollPageHeading>Experience</ScrollPageHeading>
    <div className="z-0 flex flex-col items-center">
      <Timeline>
        {data.work?.map((work) => <WorkTimelineItem work={work} />)}
        {data.education?.map((ed) => <EducationTimelineItem education={ed} />)}
      </Timeline>
    </div>
  </section>
);

export default ResumeTimeline;
