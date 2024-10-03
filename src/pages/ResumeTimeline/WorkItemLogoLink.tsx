import { ResumeProfile } from 'data';

type WorkItemLogoLinkProps = {
  work: NonNullable<ResumeProfile['work']>[0];
};

const logoWidth = 150;

const WorkItemLogoLink: React.FC<WorkItemLogoLinkProps> = ({ work }) => (
  <a href={work.url}>
    {work.iconDark && (
      <img
        alt={`${work.name} logo`}
        src={`/images/company-icons/${work.iconDark}`}
        width={logoWidth}
        className="hidden dark:inline"
      />
    )}
    <img
      alt={`${work.name} logo`}
      src={`/images/company-icons/${work.icon}`}
      width={logoWidth}
      className={work.iconDark ? 'inline dark:hidden' : undefined}
    />
  </a>
);

export default WorkItemLogoLink;
