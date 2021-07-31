import React from "react";

type Props = {
  kind: Kind;
};

export type Kind = "g-clef" | "f-clef";

export const Clef = (props: Props) => {
  return (
    <text x="20" y={props.kind === "g-clef" ? "75" : "25"}>
      {props.kind === "g-clef" ? "\u{E050}" : "\u{E062}"}
    </text>
  );
};
