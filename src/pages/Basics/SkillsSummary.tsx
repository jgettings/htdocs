import React from 'react';
import DescriptionBox from 'components/DescriptionBox';

import data from 'data/index';

// const icons = [
//   faReact,
//   faJava,
//   faJs,
//   faHtml5,
//   faCss3Alt,
//   faGithub,
//   faJira,
//   faDocker,
//   faCodeBranch,
//   faCode,
//   faDatabase,
// ];

const SkillsSummary: React.FC = () => {
  const { basics } = data;
  if (basics === undefined) {
    return null;
  }

  return (
    <DescriptionBox>
      Specializing on frontend work in React and Typescript for the past 7
      years, prior to that was all full stack in a few different languages.
      {/* {icons.map((icon) => (
        <FontAwesomeIcon icon={icon} />
      ))} */}
    </DescriptionBox>
  );
};

// TODO add as keywords to meta tags

export default SkillsSummary;
