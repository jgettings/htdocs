import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { twMerge } from 'tailwind-merge';
import {
  faLinkedin,
  faGithub,
  faInstagram,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import { basics } from 'data/resume.json';

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
    className={twMerge(
      'text-3xl md:mb-3 md:mt-9 md:justify-self-end [&>li]:inline-block [&>li]:px-2',
      className,
    )}
  >
    {basics.profiles.map(({ network, username, url }) => (
      <li key={network}>
        <a href={url}>
          <FontAwesomeIcon
            icon={iconMap[network]}
            title={`${username} on ${network}`}
          />
          <span className="sr-only">{network} Profile</span>
        </a>
      </li>
    ))}
  </ul>
);

export default SocialLinks;
