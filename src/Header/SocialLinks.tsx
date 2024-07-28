import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import clsx from 'clsx';
import Tooltip from '../components/Tooltip';

type SocialLinksProps = {
  className?: string;
};

const SocialLinks: React.FC<SocialLinksProps> = ({ className }) => (
  <ul
    className={clsx(
      className,
      'text-3xl md:justify-self-end md:my-9 [&>li]:inline-block [&>li]:px-2',
    )}
  >
    <li>
      <Tooltip
        id="linkedin-tooltip"
        tooltipContent={
          <>
            <code>jen-gettings</code> on LinkedIn
          </>
        }
      >
        <a href="http://www.linkedin.com/in/jen-gettings">
          <FontAwesomeIcon icon={faLinkedin} title="LinkedIn Profile" />
          <span className="sr-only">LinkedIn Profile</span>
        </a>
      </Tooltip>
    </li>
    <li>
      <Tooltip
        id="github-tooltip"
        tooltipContent={
          <>
            <code>jgettings</code> on GitHub
          </>
        }
      >
        <a href="https://github.com/jgettings">
          <FontAwesomeIcon icon={faGithub} title="Github Profile" />
          <span className="sr-only">Github Profile</span>
        </a>
      </Tooltip>
    </li>
    <li>
      <Tooltip
        id="instagram-tooltip"
        tooltipContent={
          <>
            <code>pretzelcabin</code> on Instagram
          </>
        }
      >
        <a href="https://www.instagram.com/pretzelcabin/">
          <FontAwesomeIcon icon={faInstagram} title="Instagram Profile" />
          <span className="sr-only">Instagram Profile</span>
        </a>
      </Tooltip>
    </li>
  </ul>
);

export default SocialLinks;
