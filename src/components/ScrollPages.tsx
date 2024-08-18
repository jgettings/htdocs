import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointDown } from '@fortawesome/free-regular-svg-icons';
import { tw } from '../tailwindUtils';
// import styles from './ScrollPages.module.css';

type ScrollPagesProps = {
  children: React.ReactNode[];
};

const classes = tw`md:h-[calc(100vh_-_6.25rem)]`;

const ScrollPrompt: React.FC = () => (
  <div className="absolute bottom-20 hidden w-full text-center md:block">
    <FontAwesomeIcon
      className="animate-bounce"
      size="3x"
      icon={faHandPointDown}
      // className={styles.indicator}
    />
  </div>
);

const ScrollPages: React.FC<ScrollPagesProps> = ({ children }) => (
  <div>
    <div className={classes}>
      <ScrollPrompt />
    </div>
    {children.map((child) => (
      <div className={classes}>{child}</div>
    ))}
  </div>
);

// don't show hand/arrow on load, show up after a few seconds
// bounce a few times then stay there
// fade out when user scrolls
// what happens if user is navigating via keyboard?
// https://stackoverflow.com/questions/68306441/fade-transition-tailwind-class-to-something-else-over-certain-amount-of-time

export default ScrollPages;
