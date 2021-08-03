import React from "react";

type Props = {
  x?: string | number;
  top: number;
  bottom: number;
};

const glyphs = ['\u{E080}','\u{E081}','\u{E082}','\u{E083}','\u{E084}','\u{E085}','\u{E086}','\u{E087}','\u{E088}','\u{E089}'];

export const TimeSig = (props: Props) => {
  let x = props.x || 0;
  return (
    <>
      <text x={x} y="25" textAnchor="middle">
          {glyphs[props.top]}
          </text>
      <text x={x} y="75" textAnchor="middle">
          {glyphs[props.bottom]}
      </text>
    </>
  );
};

TimeSig.width = 100;
