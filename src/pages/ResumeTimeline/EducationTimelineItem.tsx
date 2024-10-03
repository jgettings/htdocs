import { MdSchool } from 'react-icons/md';
import { Timeline, Card } from 'flowbite-react';
import { ResumeProfile } from 'data';
import ResumeTimelineDates from './Dates';

type EducationTimelineItemProps = {
  education: NonNullable<ResumeProfile['education']>[0];
};

const logoWidth = 150;

const EducationTimelineItem: React.FC<EducationTimelineItemProps> = ({
  education,
}) => (
  <Timeline.Item key={education.name}>
    <Timeline.Point icon={MdSchool} />
    <Timeline.Content>
      <Card>
        <ResumeTimelineDates
          startDate={education.startDate as string}
          endDate={education.endDate as string}
        />
        <Timeline.Title className="flex flex-col justify-between gap-6 md:flex-row">
          <div>
            {education.studyType}
            <div className="font-light italic">{education.institution}</div>
          </div>
          <div className="flex-none">
            <a href={education.url}>
              <img
                alt={`${education.name} logo`}
                src={`/images/school-icons/${education.name.toLowerCase()}-dark.svg`}
                width={logoWidth}
                className="hidden dark:inline"
              />
              <img
                alt={`${education.name} logo`}
                src={`/images/school-icons/${education.name.toLowerCase()}.svg`}
                width={logoWidth}
                className="inline dark:hidden"
              />
            </a>
          </div>
        </Timeline.Title>
        <Timeline.Body>
          <ul>
            <li>
              <strong>Major:</strong> {education.area}
            </li>
            <li>
              <strong>Second Major:</strong> {education.secondaryArea}
            </li>
            <li>
              <strong>Minor:</strong> {education.minorArea}
            </li>
            <li>
              <strong>GPA:</strong> {education.score}
            </li>
          </ul>
        </Timeline.Body>
      </Card>
    </Timeline.Content>
  </Timeline.Item>
);

export default EducationTimelineItem;
