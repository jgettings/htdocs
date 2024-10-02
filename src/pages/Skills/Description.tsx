import ErrorBoundary from 'components/ErrorBoundary';
import LoadingSkeleton from 'components/LoadingSkeleton';
import React, { Suspense } from 'react';
import Markdown, { Components } from 'react-markdown';
import useSWR from 'swr';

type SkillDescriptionProps = {
  name?: string;
};

const markdownComponents: Components = {
  // a11y lint rules disabled here because they are requiring content,
  // which we don't have until these are used
  p(props) {
    const { node, ...rest } = props;
    return <p className="mb-4" {...rest} />;
  },
  h4(props) {
    const { node, ...rest } = props;
    return <h4 className="mb-2 mt-6 text-xl" {...rest} />; // eslint-disable-line jsx-a11y/heading-has-content
  },
  li(props) {
    const { node, ...rest } = props;
    return <li className="list-inside list-disc" {...rest} />;
  },
  ul(props) {
    const { node, ...rest } = props;
    return <ul className="mb-4" {...rest} />;
  },
  a(props) {
    const { node, ...rest } = props;
    return (
      <a className="text-sky-600 hover:underline dark:text-sky-500" {...rest} /> // eslint-disable-line jsx-a11y/anchor-has-content
    );
  },
};

const textFetcher = (name: string): Promise<string> =>
  import(`../../data/skills/${name}.md`).then(
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
