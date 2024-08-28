import { Avatar, Popover, Card } from 'flowbite-react';
import { useMediaQuery } from 'usehooks-ts';

const Footer: React.FC = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <footer className="p-8 text-center md:fixed md:bottom-8 md:left-8 md:z-10 md:p-0 md:text-left">
      <figure>
        <Popover
          placement={isDesktop ? 'right' : 'top'}
          trigger="click"
          arrow={false}
          content={
            <figcaption>
              <Card className="m-0 min-w-96 [&>*]:gap-2 [&>*]:p-4">
                <p className="my-2 text-xs">
                  {isDesktop ? 'Left: ' : 'Below: '}
                  Jen at Hálsanefshellir Cave, Iceland
                </p>
                <p className="my-2 text-xs">
                  <em>Background:</em> Niagara Gorge, downstream of Niagara
                  Falls near the Whirlpool Rapids on the US side
                </p>
              </Card>
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
// TODO fix spacing on avatar popup

export default Footer;
