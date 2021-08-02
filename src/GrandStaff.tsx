import React from "react";
import { Staves } from "./Staves";
import { BarLine } from "./BarLine";
import { Brace } from "./Brace";

type Props = {};

export const GrandStaff = (props: Props) => {
  return (
    <svg
      className="staves"
      width="20em"
      height="3em"
      viewBox="0, 0, 2000, 300"
      overflow="visible"
    >
      <g fontSize="100">
        <Staves y="0" clef="g-clef" />
        <Staves y="200" clef="f-clef" />
        <Brace height="300" />
        <BarLine height="300" />
      </g>
    </svg>
  );
};
