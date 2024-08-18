import React from 'react';
import { useMediaQuery } from 'usehooks-ts';
import { basics } from 'data/resume.json';
import SocialLinks from './SocialLinks';

const Header: React.FC = () => {
  const reduceTransparency = useMediaQuery('(prefers-reduced-transparency)');

  return (
    <header className="md:sticky md:top-0 md:z-10">
      <div className="relative grid grid-cols-none grid-rows-2 justify-items-center gap-4 px-8 pt-4 md:grid-cols-2 md:grid-rows-none md:justify-items-stretch md:px-12">
        {/* bg gradient is taller than the actual heading for more readability */}
        {reduceTransparency ? (
          <div className="absolute z-0 h-36 w-full bg-white dark:bg-dkgray" />
        ) : (
          <div className="absolute z-0 h-48 w-full bg-gradient-to-b from-white/75 via-white/75 via-75% md:via-60% dark:from-black/75 dark:via-black/75" />
        )}
        <h1 className="relative z-10 font-heading text-3xl font-bold leading-[4rem] md:mt-5">
          {basics.name}
        </h1>

        <SocialLinks className="z-10" />
      </div>
    </header>
  );
};

export default Header;
