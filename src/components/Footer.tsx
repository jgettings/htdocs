import { Avatar, Popover } from 'flowbite-react';
import { useMediaQuery } from 'usehooks-ts';
import DescriptionBox from 'components/DescriptionBox';

const Footer: React.FC = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <footer className="p-8 text-center md:text-left">
      <figure className="md:w-fit">
        <Popover
          placement={isDesktop ? 'right' : 'top'}
          trigger="click"
          arrow={false}
          content={
            <figcaption>
              <DescriptionBox>
                <p className="my-2 text-xs">
                  {isDesktop ? 'Left: ' : 'Below: '}
                  Jen at Hálsanefshellir Cave, Iceland
                </p>
                <p className="my-2 text-xs">
                  <em>Background:</em> Niagara Gorge, downstream of Niagara
                  Falls near the Whirlpool Rapids on the US side
                </p>
              </DescriptionBox>
            </figcaption>
          }
        >
          <button type="button" title="click for photo info">
            <Avatar
              tabIndex={0}
              img="images/avatar.jpg"
              rounded
              size="xl"
              alt="Jen - close up of face, in a cave on a black sand beach in Iceland"
            />
          </button>
        </Popover>
      </figure>
    </footer>
  );
};

export default Footer;
