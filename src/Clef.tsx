import React from "react";

type Props = {
  x?: string | number;
  kind: Kind;
};

export type Kind = "g-clef" | "f-clef";

export const Clef = (props: Props) => {
  let x = props.x || 0;
  return (
    <text x={x} y={props.kind === "g-clef" ? "75" : "25"}>
      {props.kind === "g-clef" ? "\u{E050}" : "\u{E062}"}
    </text>
  );
};

Clef.width = 100;
