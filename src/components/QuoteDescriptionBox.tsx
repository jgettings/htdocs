import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import DescriptionBox, { DescriptionBoxProps } from 'components/DescriptionBox';

const QuoteDescriptionBox: React.FC<DescriptionBoxProps> = ({
  children,
  ...rest
}) => (
  <DescriptionBox {...rest}>
    <FontAwesomeIcon size="xl" className="mr-2" icon={faQuoteLeft} />
    {children}
    <FontAwesomeIcon size="xl" className="ml-2" icon={faQuoteRight} />
  </DescriptionBox>
);

export default QuoteDescriptionBox;
