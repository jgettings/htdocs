import React from 'react';
import DescriptionBox from './DescriptionBox';
import classes from './Tooltip.module.css';

type TooltipProps = {
  id: string;
  tooltipContent: React.ReactNode;
  children: React.ReactNode;
};

// https://developer.chrome.com/blog/anchor-positioning-api#use_anchor_with_top-layer_elements_like_popover_and_dialog
// Should be able to set each anchor with `anchor` property but it's not supported enough yet

const Tooltip: React.FC<TooltipProps> = ({ id, tooltipContent, children }) => {
  const anchorName = `--${id}-anchor`;

  return (
    <span
      className={classes.tooltipAnchor}
      // @ts-expect-error new css features don't seem supported by ts yet
      style={{ anchorName, ariaDetails: id }}
    >
      {children}
      <DescriptionBox
        id={id}
        className={classes.tooltip}
        // @ts-expect-error new css features don't seem supported by ts yet
        style={{ positionAnchor: anchorName }}
      >
        {tooltipContent}
      </DescriptionBox>
    </span>
  );
};

export default Tooltip;
