import React from 'react';
import {
  DiAtlassian,
  DiCss3,
  DiGithubAlt,
  DiGoogleCloudPlatform,
  DiJava,
  DiHtml5,
  DiMysql,
  DiMongodb,
  DiNpm,
  DiPostgresql,
  DiReact,
  DiScrum,
} from 'react-icons/di';
import {
  SiTypescript,
  SiCsharp,
  SiMui,
  SiDocker,
  SiJavascript,
} from 'react-icons/si';
import { RiFirebaseFill, RiTailwindCssFill } from 'react-icons/ri';
import { TbBrandAzure } from 'react-icons/tb';

import DescriptionBox from 'components/DescriptionBox';
import data from 'data/index';

const icons = [
  { icon: DiReact, title: 'React' },
  { icon: SiTypescript, title: 'TypeScript' },
  { icon: SiJavascript, title: 'JavaScript' },
  { icon: DiHtml5, title: 'HTML' },
  { icon: DiCss3, title: 'CSS' },
  { icon: DiNpm, title: 'NPM' },
  { icon: SiMui, title: 'Material UI' },
  { icon: RiTailwindCssFill, title: 'Tailwind' },

  { icon: DiAtlassian, title: 'Atlassian' },
  { icon: DiScrum, title: 'Agile, Scrum' },
  { icon: DiGithubAlt, title: 'Github' },
  { icon: DiGoogleCloudPlatform, title: 'Google Cloud Platform' },
  { icon: RiFirebaseFill, title: 'Firebase' },
  { icon: TbBrandAzure, title: 'Azure' },

  { icon: DiJava, title: 'Java' },
  { icon: DiMysql, title: 'MySQL' },
  { icon: DiMongodb, title: 'MongoDB' },
  { icon: DiPostgresql, title: 'PostgreSQL' },
  { icon: SiCsharp, title: 'CSharp, .NET Framework, .NETCore' },
  { icon: SiDocker, title: 'Docker' },
];

const SkillsSummary: React.FC = () => {
  const { basics } = data;
  if (basics === undefined) {
    return null;
  }

  return (
    <DescriptionBox>
      Specializing on frontend work in React and Typescript for the past 7
      years, prior to that was all full stack in a few different languages.
      <div className="flex flex-wrap justify-center gap-5">
        {icons.map(({ icon, title }) => (
          <span key={title}>{icon({ size: '2em', title })}</span>
        ))}
      </div>
    </DescriptionBox>
  );
};

// TODO add link to skills section once the section is added

export default SkillsSummary;
