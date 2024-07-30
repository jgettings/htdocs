import React from 'react';
import clsx from 'clsx';
import SocialLinks from './SocialLinks';
import FlyIn from '../components/FlyIn';
import classes from './index.module.css';
import { basics } from '../data/resume.json';
import DescriptionBox from '../components/DescriptionBox';

const Header: React.FC = () => {
  const {
    name,
    label: title,
    location: { city, region },
    preferredPronouns,
    preferredName,
  } = basics;

  return (
    <header
      className={clsx(
        classes.layout,
        'grid gap-4 justify-items-center md:justify-items-stretch pt-4 px-8 pb-16 md:px-12 bg-gradient-to-b from-white/75 dark:from-black/75',
      )}
    >
      <h1
        tabIndex={0} // eslint-disable-line jsx-a11y/no-noninteractive-tabindex
        className={clsx(
          classes.title,
          'z-10 font-heading peer text-3xl font-bold mt-5 leading-[4rem]',
        )}
      >
        {name}
      </h1>

      <SocialLinks className={classes.socialLinks} />

      <FlyIn
        down
        className={clsx(
          classes.details,
          'justify-self-stretch md:mx-8 leading-none',
        )}
      >
        <DescriptionBox className="md:w-fit absolute">
          <ul className="[&>li]:mx-4 [&>li]:my-2">
            <li>{title}</li>
            <li>
              Location: {city}, {region}
            </li>
            <li>Preferred pronouns: {preferredPronouns}</li>
            <li>Preferred name: {preferredName}</li>
          </ul>
        </DescriptionBox>
      </FlyIn>
    </header>
  );
};

export default Header;
