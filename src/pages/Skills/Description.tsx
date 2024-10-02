import ErrorBoundary from 'components/ErrorBoundary';
import LoadingSkeleton from 'components/LoadingSkeleton';
import React, { Suspense } from 'react';
import Markdown, { Components } from 'react-markdown';
import useSWR from 'swr';

type SkillDescriptionProps = {
  name?: string;
};

const markdownComponents: Components = {
  p(props) {
    const { node, ...rest } = props;

    return <p className="mb-4" {...rest} />;
  },
};

const textFetcher = (name: string): Promise<string> =>
  import(/* @vite-ignore */ `/src/data/skills/${name}.md`).then(
    (md: { markdown: string }) => md.markdown,
  );

const SkillDescriptionContent: React.FC<Required<SkillDescriptionProps>> = ({
  name,
}) => {
  const { data } = useSWR(name.replace(/ /g, '_'), textFetcher, {
    suspense: true,
  });

  return <Markdown components={markdownComponents}>{data}</Markdown>;
};

const SkillDescription: React.FC<SkillDescriptionProps> = ({ name = null }) => {
  if (name == null) {
    return null;
  }

  return (
    <ErrorBoundary>
      {/* Squash errors from attempting to load files we don't have */}
      <Suspense fallback={<LoadingSkeleton className="mb-4" />}>
        <SkillDescriptionContent name={name} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default SkillDescription;
