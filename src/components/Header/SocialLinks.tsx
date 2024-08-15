import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faInstagram,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import Tooltip from 'components/Tooltip';
import { basics } from 'data/resume.json';

const iconMap: Record<string, IconDefinition> = {
  LinkedIn: faLinkedin,
  Github: faGithub,
  Instagram: faInstagram,
};

const SocialLinks: React.FC = () => (
  <ul className="text-3xl md:my-9 md:justify-self-end [&>li]:inline-block [&>li]:px-2">
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
