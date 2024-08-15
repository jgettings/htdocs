import React from 'react';
import { basics } from 'data/resume.json';
import SocialLinks from './SocialLinks';

const Header: React.FC = () => (
  <header className="grid grid-cols-none grid-rows-2 justify-items-center gap-4 bg-gradient-to-b from-white/75 px-8 pb-16 pt-4 md:grid-cols-2 md:grid-rows-none md:justify-items-stretch md:px-12 dark:from-black/75">
    <h1 className="z-10 mt-5 font-heading text-3xl font-bold leading-[4rem]">
      {basics.name}
    </h1>

    <SocialLinks />
  </header>
);

export default Header;
