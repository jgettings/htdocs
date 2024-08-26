import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointDown } from '@fortawesome/free-regular-svg-icons';
import { Parallax } from 'react-scroll-parallax';

const ScrollPromptIcon: React.FC = () => (
  <Parallax
    opacity={[1, -1]}
    className="absolute bottom-20 hidden w-full text-center md:block"
  >
    <FontAwesomeIcon
      className="motion-safe:animation-delay-500 motion-safe:animate-[fadeIn_3s,bounce_1s_infinite] motion-safe:opacity-0" // eslint-disable-line
      size="3x"
      icon={faHandPointDown}
    />
  </Parallax>
);

export default ScrollPromptIcon;
