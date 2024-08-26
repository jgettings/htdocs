import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import DescriptionBox from 'components/DescriptionBox';
import QuoteDescriptionBox from 'components/QuoteDescriptionBox';
import data from 'data/index';

const Basics: React.FC = () => {
  const { basics } = data;
  if (basics === undefined) {
    return null;
  }

  const {
    label,
    location,
    preferredPronouns,
    preferredName,
    summary,
    highlights,
  } = basics;

  return (
    <div className="flex flex-col items-center">
      <Parallax translateX={[100, 0]}>
        <DescriptionBox>{summary}</DescriptionBox>
      </Parallax>
      <DescriptionBox>
        <ul>
          <li>{label}</li>
          {location && (
            <li>
              Location: {location.city}, {location.region}
            </li>
          )}
          <li>Preferred pronouns: {preferredPronouns}</li>
          <li>Preferred name: {preferredName}</li>
        </ul>
      </DescriptionBox>
      {highlights?.map((h) =>
        h.startsWith('I ') ? (
          <QuoteDescriptionBox>{h}</QuoteDescriptionBox>
        ) : (
          <DescriptionBox>{h}</DescriptionBox>
        ),
      )}
    </div>
  );
};

// TODO cuter layout, maybe some silly parallax scrolling

// TODO DescriptionBox should just be a custom card style in flowbite react
// TODO summary should be in meta description

export default Basics;
