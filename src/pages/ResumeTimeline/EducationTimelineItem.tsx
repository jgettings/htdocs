import { MdSchool } from 'react-icons/md';
import { Timeline, Card } from 'flowbite-react';
import { EducationItem } from 'data';
import KeywordsPipeList from 'components/KeywordsPipeList';
import ResumeTimelineDates from './Dates';

type EducationTimelineItemProps = {
  education: EducationItem;
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
            <div className="font-light italic">
              <a href={education.url}>{education.institution}</a>
            </div>
          </div>
          <div className="flex-none">
            <a href={education.url}>
              {education.name ? (
                <>
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
                </>
              ) : null}
            </a>
          </div>
        </Timeline.Title>
        <Timeline.Body>
          <ul className="mb-4">
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
          <KeywordsPipeList keywords={education.skills} />
        </Timeline.Body>
      </Card>
    </Timeline.Content>
  </Timeline.Item>
);

export default EducationTimelineItem;
