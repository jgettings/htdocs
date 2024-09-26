/* eslint-disable react/no-array-index-key */
import React from 'react';
import { tw } from '../../tailwindUtils';

type ScrollPagesProps = {
  children: React.ReactNode[];
};

const classes = tw`mb-12 md:min-h-[calc(100vh_-_40px)]`; // 40px is the top margin of the headings

const ScrollPages: React.FC<ScrollPagesProps> = ({ children }) => (
  <div>
    {children.map((child, i) => (
      <div key={i} className={classes}>
        {child}
      </div>
    ))}
  </div>
);

export default ScrollPages;
