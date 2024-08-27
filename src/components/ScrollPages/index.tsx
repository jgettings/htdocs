/* eslint-disable react/no-array-index-key */
import React from 'react';
import ScrollPromptIcon from './ScrollPromptIcon';
import { tw } from '../../tailwindUtils';

type ScrollPagesProps = {
  children: React.ReactNode[];
};

const classes = tw`md:h-[calc(100vh_-_6.25rem)]`;

const ScrollPages: React.FC<ScrollPagesProps> = ({ children }) => (
  <div>
    <div className={classes}>
      <ScrollPromptIcon />
    </div>
    {children.map((child, i) => (
      <div key={i} className={classes}>
        {child}
      </div>
    ))}
  </div>
);

export default ScrollPages;
