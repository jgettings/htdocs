import useWindowDimensions from 'hooks/useWindowDimensions';
import { Parallax } from 'react-scroll-parallax';
import { useMediaQuery } from 'usehooks-ts';

type HeadingProps = {
  children: string;
};

/*
 There is an issue if you reload the page partially scrolled down, which is most noticeable while
 in dev with hot reloading. I'm not expecting people to be doing that so I'm leaving it for now.
 Maybe I should find a different parallax library or just do it directly here. It just looks
 weird if these headings cover the page header and/or make it so you can't click on the social
 buttons.
*/

const ScrollPageHeading: React.FC<HeadingProps> = ({ children }) => {
  const { height: windowHeight } = useWindowDimensions();
  const isMediumScreenOrLarger = useMediaQuery('(min-width: 768px)');

  return (
    // height is 0 to not overlap the page header
    <div className="top-11 z-30 mx-auto mb-32 mt-10 flex h-0 w-full justify-center md:sticky">
      <Parallax
        // Make it so that it is smaller when it's over the page header so we don't cover buttons
        scaleX={[1, 0]}
        opacity={[1, 0]}
        className="absolute -z-10 h-14 w-full bg-gray-200 opacity-100 dark:bg-gray-700"
        rootMargin={{
          // header height is 192px (h-48), just fade so we don't cover it
          top: 300 - windowHeight,
          // end: make sure it's faded before we cover the rest of the header
          bottom: -100,
          left: 0,
          right: 0,
        }}
        disabled={!isMediumScreenOrLarger}
      />

      <h2 className="w-fit p-2 font-heading text-4xl">{children}</h2>
    </div>
  );
};

export default ScrollPageHeading;
