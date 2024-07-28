import React from 'react';
import clsx from 'clsx';
import SocialLinks from './SocialLinks';
import DescriptionBox from '../components/DescriptionBox';
import FlyIn from '../components/FlyIn';
import classes from './index.module.css';

const Header: React.FC = () => (
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
      Jennifer Gettings
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
          <li>Senior Software Engineer</li>
          <li>Location: Buffalo, NY</li>
          <li>Preferred pronouns: she/her</li>
          <li>Preferred name: Jen</li>
        </ul>
      </DescriptionBox>
    </FlyIn>
  </header>
);

export default Header;
