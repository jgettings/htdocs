import React from 'react';
import { FaHandPointDown } from 'react-icons/fa';
import { Parallax } from 'react-scroll-parallax';

const ScrollPromptIcon: React.FC = () => (
  <Parallax
    opacity={[1, -0.25]}
    className="absolute bottom-20 hidden w-full text-center md:block"
  >
    <FaHandPointDown
      className="motion-safe:animate-[fadeIn_3s,bounce_1s_infinite] motion-safe:opacity-0 motion-safe:animation-delay-500"
      size="3em"
    />
  </Parallax>
);

// TODO clickable to scroll to next item?

export default ScrollPromptIcon;
