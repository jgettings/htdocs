import React from 'react';
import DescriptionBox from 'components/DescriptionBox';
import QuoteDescriptionBox from 'components/QuoteDescriptionBox';
import data from 'data/index';
import HistorySummary from './HistorySummary';
import SkillsSummary from './SkillsSummary';

const Basics: React.FC = () => {
  const { basics } = data;
  if (basics === undefined) {
    return null;
  }

  const { label, location, preferredPronouns, preferredName, summary } = basics;

  return (
    <section className="flex flex-col items-center">
      <h2 className="sr-only">Basics</h2>

      <DescriptionBox>
        <h3 className="text-2xl font-bold">{label}</h3>

        <ul>
          {location && (
            <li>
              Location: {location.city}, {location.region}
            </li>
          )}
          <li>Preferred pronouns: {preferredPronouns}</li>
          <li>Preferred name: {preferredName}</li>
        </ul>
      </DescriptionBox>
      <DescriptionBox>{summary}</DescriptionBox>

      <HistorySummary />
      <SkillsSummary />
      <QuoteDescriptionBox>
        I enjoy the challenges of frontend work, especially making things nice
        to use for everyone even when it's difficult to anticipate how someone
        will use a feature and advocating for accessibility.
      </QuoteDescriptionBox>
    </section>
  );
};

// TODO add a cute map

export default Basics;
