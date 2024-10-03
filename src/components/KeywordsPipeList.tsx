import { twMerge } from 'tailwind-merge';

type KeywordsPipeListProps = {
  keywords?: string[];
} & React.HTMLAttributes<HTMLUListElement>;

const KeywordsPipeList: React.FC<KeywordsPipeListProps> = ({
  keywords,
  className,
  ...rest
}) => {
  if (!keywords || !keywords.length) {
    return null;
  }
  return (
    <ul
      className={twMerge('text-gray-500 dark:text-gray-400', className)}
      {...rest}
    >
      {keywords.sort().map((k) => (
        <li
          className="inline after:content-['_|_'] last:after:content-none"
          key={k}
        >
          {k}
        </li>
      ))}
    </ul>
  );
};

export default KeywordsPipeList;
