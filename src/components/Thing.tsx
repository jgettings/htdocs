type ThingProps = {
  title: string;
};

const Thing: React.FC<ThingProps> = ({ title }) => <>Hello {title}!</>;

export default Thing;
