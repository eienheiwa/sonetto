import React from "react";
import _ from "lodash";
import { Clef } from "./Clef";

type Props = {};

export const Staves = (props: Props) => {
  return (
    <svg
      className="staves"
      width="20em"
      height="1em"
      viewBox="0, 0, 2000, 100"
      overflow="visible"
    >
      <g fontSize="100">
        {_.range(5).map((i) => (
          <line
            key={i}
            stroke="black"
            strokeWidth="1.5"
            x1="0"
            x2="2000"
            y1={i * 25}
            y2={i * 25}
          />
        ))}
        <Clef />
      </g>
    </svg>
  );
};
