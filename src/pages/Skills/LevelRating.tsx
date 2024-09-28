import { Rating } from 'flowbite-react';

const LevelStars: Record<string, number> = {
  Master: 5,
  Advanced: 4,
  Proficient: 3,
  Competent: 2,
  Beginner: 1,
};

type LevelRatingProps = {
  level: string;
};

const LevelRating: React.FC<LevelRatingProps> = ({ level }) => {
  const starCount = LevelStars[level] ?? 0;

  return (
    <Rating title={level}>
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <Rating.Star filled={i < starCount} />
        ))}
    </Rating>
  );
};

export default LevelRating;
