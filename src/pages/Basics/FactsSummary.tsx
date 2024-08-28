import React from 'react';
import { Card } from 'flowbite-react';
import { twMerge } from 'tailwind-merge';
import { ResumeProfile } from 'data/index';
import BasicsMap from './BasicsMap';

type FactsSummaryProps = Required<Pick<ResumeProfile, 'basics'>>;

const FactsSummary: React.FC<FactsSummaryProps> = ({
  basics: { label, location, preferredPronouns, preferredName },
}) => (
  <Card
    horizontal
    renderImage={
      location && location.coordinates
        ? (theme, horizontal) => (
            <BasicsMap
              locationText={location.city}
              locationCoordinates={location.coordinates}
              className={twMerge(
                theme?.img?.base,
                theme?.img?.horizontal?.[horizontal ? 'on' : 'off'],
                'md:ml-2 md:min-w-56',
              )}
            />
          )
        : undefined
    }
  >
    <h3 className="text-2xl font-bold">{label}</h3>

    <ul>
      {location && (
        <li>
          Location: {location.city}, {location.region}
        </li>
      )}
      <li>Preferred name: {preferredName}</li>
      <li>Preferred pronouns: {preferredPronouns}</li>
      {/* <li>Years of experience: XX</li> */}
    </ul>
  </Card>
);

export default FactsSummary;
