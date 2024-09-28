import ScrollPageHeading from 'components/ScrollPages/Heading';
import data from 'data/index';
import { Accordion, Rating } from 'flowbite-react';
import LevelRating from './LevelRating';

const Skills: React.FC = () => (
  <section id="skills">
    <ScrollPageHeading>Skills</ScrollPageHeading>

    {/* <Accordion className="mx-4">
      {data.skills?.map((skill) => (
        <Accordion.Panel key={skill.name}>
          <Accordion.Title>{skill.name}</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is an open-source library of interactive components built
              on top of Tailwind CSS including buttons, dropdowns, modals,
              navbars, and more.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to&nbsp;
              <a
                href="https://flowbite.com/docs/getting-started/introduction/"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                get started&nbsp;
              </a>
              and start developing websites even faster with components on top
              of Tailwind CSS.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      ))}
    </Accordion> */}
    <Accordion className="mx-4">
      <Accordion.Panel>
        <Accordion.Title>
          <div className="flex w-full flex-row justify-between">
            <div>React</div>
            <LevelRating level="Master" />
          </div>
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to&nbsp;
            <a
              href="https://flowbite.com/docs/getting-started/introduction/"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              get started&nbsp;
            </a>
            and start developing websites even faster with components on top of
            Tailwind CSS.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          Thing <LevelRating level="Advanced" />
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to&nbsp;
            <a
              href="https://flowbite.com/docs/getting-started/introduction/"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              get started&nbsp;
            </a>
            and start developing websites even faster with components on top of
            Tailwind CSS.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  </section>
);

// accordion header isn't letting me do custom styles so I can't get the stars on the right
// fix ts for accordion using an array?
// link to linkedin skills assessment
// level rating
// keywords
// description
// Icons? For overall skill or for keywords within the skill?

export default Skills;
