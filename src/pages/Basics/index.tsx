import { Card } from 'flowbite-react';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import data from 'data/index';
import HistorySummary from './HistorySummary';
import SkillsSummary from './SkillsSummary';
import FactsSummary from './FactsSummary';

const Basics: React.FC = () => {
  const { basics } = data;
  if (basics === undefined) {
    return null;
  }

  const linkedInUrl = basics.profiles?.find(
    (p) => p.network === 'LinkedIn',
  )?.url;

  return (
    <section className="flex flex-col items-center">
      <h2 className="sr-only">Basics</h2>

      <FactsSummary basics={basics} />
      <Card>{basics.summary}</Card>

      <HistorySummary linkedInUrl={linkedInUrl} />
      <SkillsSummary />
      <Card>
        <div>
          <RiDoubleQuotesL size="2em" className="mr-2 inline" />
          I enjoy the challenges of frontend work, especially making things nice
          to use for everyone even when it's difficult to anticipate how someone
          will use a feature and advocating for accessibility.
          <RiDoubleQuotesR size="2em" className="mr-2 inline" />
        </div>
      </Card>
    </section>
  );
};

export default Basics;
