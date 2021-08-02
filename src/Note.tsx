import React from "react";

type Props = {
  x: number;
  line: number;
  duration:
    | "1"
    | "1/2"
    | "1/4"
    | "1/8"
    | "1/16"
    | "1/32"
    | "1/64"
    | "1/128"
    | "1/256"
    | "1/512"
    | "1/1024";
};

const glyphs: { [D in Props["duration"]]: string } = {
  "1": "\u{E1D2}",
  "1/2": "\u{E1D3}",
  "1/4": "\u{E1D5}",
  "1/8": "\u{E1D7}",
  "1/16": "\u{E1D9}",
  "1/32": "\u{E1DB}",
  "1/64": "\u{E1DD}",
  "1/128": "\u{E1DF}",
  "1/256": "\u{E1E1}",
  "1/512": "\u{E1E3}",
  "1/1024": "\u{E1E5}",
};

export const Note = (props: Props) => {
  let y = 100 - props.line * 25;
  return (
    <text x={props.x} y={y} textAnchor="middle">
      {glyphs[props.duration]}
    </text>
  );
};

Note.width = {
  "1":{width: 400},
  "1/2":{width: 200},
  "1/4":{width: 100},
  "1/8":{width: 50},
  "1/16":{width: 50},
  "1/32":{width: 50},
  "1/64":{width: 50},
  "1/128":{width: 50},
  "1/256":{width: 50},
  "1/512":{width: 50},
  "1/1024":{width: 50},
};
