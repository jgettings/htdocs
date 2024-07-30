import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faInstagram,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import clsx from 'clsx';
import Tooltip from '../components/Tooltip';
import { basics } from '../data/resume.json';

type SocialLinksProps = {
  className?: string;
};

const iconMap: Record<string, IconDefinition> = {
  LinkedIn: faLinkedin,
  Github: faGithub,
  Instagram: faInstagram,
};

const SocialLinks: React.FC<SocialLinksProps> = ({ className }) => (
  <ul
    className={clsx(
      className,
      'text-3xl md:justify-self-end md:my-9 [&>li]:inline-block [&>li]:px-2',
    )}
  >
    {basics.profiles.map(({ network, username, url }) => (
      <li key={network}>
        <Tooltip
          id={`${network}-tooltip`}
          tooltipContent={
            <>
              <code>{username}</code> on {network}
            </>
          }
        >
          <a href={url}>
            <FontAwesomeIcon
              icon={iconMap[network]}
              title={`${network} Profile`}
            />
            <span className="sr-only">{network} Profile</span>
          </a>
        </Tooltip>
      </li>
    ))}
  </ul>
);

export default SocialLinks;
