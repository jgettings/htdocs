import clsx from 'clsx';

type FlyInProps = {
  children: React.ReactNode;
  /** defaults to false and will enter from the left */
  down?: boolean;
  className?: string;
};

/** Fly in children on hover of peer element
 * To show details, captions, etc.
 *
 * Also shows on focus of peer element for better keyboard accessibility
 * Will show by default (no hover effect) when:
 * - < md size screen
 * - no hover enabled on device (touch screen)
 * - prefers-reduced-motion is set
 *
 * Note: Add class "peer" to direct sibling element that should trigger the fly-in
 */
const FlyIn: React.FC<FlyInProps> = ({ children, className, down = false }) => {
  // position: absolute

  const classes = [
    'overflow-hidden',
    'can-hover:*:transition can-hover:*:opacity-0 can-hover:*:duration-1000',
    'peer-hover:*:opacity-100 peer-focus:*:opacity-100',
  ];

  return (
    <div
      className={clsx(classes, className, {
        'can-hover:*:translate-y-[-100%] peer-hover:*:translate-y-0 peer-focus:*:translate-y-0':
          down,
        'can-hover:*:translate-x-[-100%] peer-hover:*:translate-x-0 peer-focus:*:translate-x-0':
          !down,
      })}
    >
      {children}
    </div>
  );
};

export default FlyIn;
