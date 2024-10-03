import ScrollPageHeading from 'components/ScrollPages/Heading';
import data from 'data/index';
import { Accordion } from 'flowbite-react';
import KeywordsPipeList from 'components/KeywordsPipeList';
import LevelRating from './LevelRating';
import SkillTitle from './Title';
import SkillDescription from './Description';

const Skills: React.FC = () => {
  if (!data.skills) {
    return null;
  }

  return (
    <section id="skills">
      <ScrollPageHeading>Skills</ScrollPageHeading>

      <Accordion className="m-4 mx-auto max-w-3xl" collapseAll>
        {data.skills.map((skill) => (
          <Accordion.Panel key={skill.name}>
            <Accordion.Title as="h3">
              {skill.name && <SkillTitle name={skill.name} />}
              {skill.level && <LevelRating level={skill.level} />}
            </Accordion.Title>
            <Accordion.Content>
              <SkillDescription name={skill.name} />
              {skill.keywords && <KeywordsPipeList keywords={skill.keywords} />}
            </Accordion.Content>
          </Accordion.Panel>
        ))}
      </Accordion>
    </section>
  );
};

// describe similar things, like lambda for azure functions,
// etc and generic terms for these. more important if I add search functionality

// Adjust colors, it's hard to see which headings are open vs what is content, etc
// where can I include data visualizations? d3/highcharts/etc

export default Skills;
