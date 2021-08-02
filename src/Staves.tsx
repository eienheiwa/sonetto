import React from "react";
import _ from "lodash";
import { Clef } from "./Clef";
import { TimeSig } from "./TimeSig";
import * as clef from "./Clef";
import { Note } from "./Note";
import { BarLine } from "./BarLine";

type Props = {
  x?: string | number;
  y?: string | number;
  clef: clef.Kind;
};

export const Staves = (props: Props) => {
  let x = 20;
  const updateX = (component: {width: number}) => {
    let prevX = x;
    x += component.width;
    return prevX;
  };

  return (
    <svg className="staves" overflow="visible" x={props.x} y={props.y}>
      <g fontSize="100">
        {_.range(5).map((i) => (
          <line
            key={i}
            stroke="black"
            strokeWidth="3.25"
            x1="0"
            x2="2000"
            y1={i * 25}
            y2={i * 25}
          />
        ))}
        <Clef x={updateX(Clef)} kind={props.clef} />
        <TimeSig x={updateX(TimeSig)} top={8} bottom={8} />
        <Note x={updateX(Note.width["1/4"])} line={0} duration="1/4" />
        <Note x={updateX(Note.width["1/4"])} line={0.5} duration="1/4" />
        <Note x={updateX(Note.width["1"])} line={1} duration="1" />
        <g textAnchor="end">
          <BarLine x="2000" height="100" />
        </g>
      </g>
    </svg>
  );
};
