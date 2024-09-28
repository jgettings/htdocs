import data from 'data/index';
import { Timeline, Card } from 'flowbite-react';
import { PiBuildingOfficeFill } from 'react-icons/pi';
import ScrollPageHeading from 'components/ScrollPages/Heading';
import ResumeTimelineDates from './Dates';

const logoWidth = 150;

const ResumeTimeline: React.FC = () => (
  <section id="resume-timeline">
    <ScrollPageHeading>Experience</ScrollPageHeading>
    <div className="z-0 flex flex-col items-center">
      <Timeline>
        {data.work?.map((work) => (
          <Timeline.Item key={work.name}>
            <Timeline.Point icon={PiBuildingOfficeFill} />
            <Timeline.Content>
              <Card>
                <ResumeTimelineDates
                  startDate={work.startDate as string}
                  endDate={work.endDate as string}
                />
                <Timeline.Title className="flex flex-col justify-between gap-2 md:flex-row">
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
                        className={
                          work.iconDark ? 'inline dark:hidden' : undefined
                        }
                      />
                    </a>
                  </div>
                </Timeline.Title>
                <Timeline.Body>{work.summary}</Timeline.Body>
                {/* <Button>Read more</Button> */}
              </Card>
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  </section>
);

export default ResumeTimeline;
