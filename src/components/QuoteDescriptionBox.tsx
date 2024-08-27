import React from 'react';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import DescriptionBox, { DescriptionBoxProps } from 'components/DescriptionBox';

const QuoteDescriptionBox: React.FC<DescriptionBoxProps> = ({
  children,
  ...rest
}) => (
  <DescriptionBox {...rest}>
    <div>
      <RiDoubleQuotesL size="2em" className="mr-2 inline" />
      {children}
      <RiDoubleQuotesR size="2em" className="mr-2 inline" />
    </div>
  </DescriptionBox>
);

export default QuoteDescriptionBox;
