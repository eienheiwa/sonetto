import React from "react";

type Props = {
  height: number | string;
  x?: number | string;
};

export const Brace = (props: Props) => {
  let x = props.x || 0;
  return (
    <g textAnchor="end" transform={`translate(${x}, ${props.height})`}>
      <text
        fontSize={props.height}
        transform={`scale(${300 / +props.height}, 1)`}
      >
        &#xE000;
      </text>
    </g>
  );
};
