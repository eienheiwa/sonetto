import React from "react";
import { Staves } from "./Staves";
import { BarLine } from "./BarLine";
import { Brace } from "./Brace";
import { Duration } from "./Note";

type Props = {
  currentDuration: Duration;
};

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
        <Staves y="0" clef="g-clef" currentDuration={props.currentDuration} />
        <Staves y="200" clef="f-clef" currentDuration={props.currentDuration} />
        <Brace height="300" />
        <BarLine height="300" />
      </g>
    </svg>
  );
};
