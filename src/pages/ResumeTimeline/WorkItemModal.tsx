import { ResumeProfile } from 'data';
import { Button, List, Modal } from 'flowbite-react';
import KeywordsPipeList from 'components/KeywordsPipeList';
import React from 'react';
import WorkItemLogoLink from './WorkItemLogoLink';
import ResumeTimelineDates from './Dates';

type WorkItemModalProps = {
  work: NonNullable<ResumeProfile['work']>[0];
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

const keywordListClasses = 'ml-6 text-black dark:text-white';

const Heading: React.FC<{ children: string }> = ({ children }) => (
  <h5 className="mb-4 mt-10 font-heading text-xl">{children}</h5>
);

const WorkItemModal: React.FC<WorkItemModalProps> = ({
  work,
  isOpen,
  setIsOpen,
}) => (
  <Modal show={isOpen} onClose={() => setIsOpen(false)} size="3xl" dismissible>
    <Modal.Header
      as="h4"
      className="flex flex-col justify-between gap-6 md:flex-row"
    >
      <WorkItemLogoLink work={work} />
    </Modal.Header>
    <Modal.Body>
      <p className="mb-4 text-lg font-semibold">
        {work.position}
        <span className="sr-only"> at </span>
        <div className="font-light italic">
          <a href={work.url}>{work.name}</a>
        </div>
        <ResumeTimelineDates
          className="text-gray-500 dark:text-gray-300"
          startDate={work.startDate as string}
          endDate={work.endDate as string}
        />
      </p>

      <p>{work.summary}</p>

      <Heading>Highlights</Heading>
      <List className="ml-6 list-outside text-black dark:text-white">
        {work.highlights?.map((h) => <List.Item>{h}</List.Item>)}
      </List>

      {work.skills && (
        <>
          <Heading>Technical Skills and Tools</Heading>
          <dl className="text-gray-500 dark:text-gray-300">
            {work.skills.primary && (
              <>
                <dt>Primary</dt>
                <dd>
                  <KeywordsPipeList
                    className={keywordListClasses}
                    keywords={work.skills.primary}
                  />
                </dd>
              </>
            )}
            {work.skills.tools && (
              <>
                <dt>Tools</dt>
                <dd>
                  <KeywordsPipeList
                    className={keywordListClasses}
                    keywords={work.skills.tools}
                  />
                </dd>
              </>
            )}
            {work.skills.other && (
              <>
                <dt>Other</dt>
                <dd>
                  <KeywordsPipeList
                    className={keywordListClasses}
                    keywords={work.skills.other}
                  />
                </dd>
              </>
            )}
          </dl>
        </>
      )}

      {/* <Heading>Projects</Heading>
      <List className="ml-6 list-outside text-black dark:text-white">
        {work.projects?.map((p) => <List.Item>{p}</List.Item>)}
      </List> */}
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={() => setIsOpen(false)}>Close</Button>
    </Modal.Footer>
  </Modal>
);

// It'd be cool if you could next/prev through these like a carousel

export default WorkItemModal;
