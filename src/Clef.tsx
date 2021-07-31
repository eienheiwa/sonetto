import React from "react";

type Props = {
  kind: "g-clef" | "f-clef";
};

export const Clef = (props: Props) => {
  return (
    <text x="20" y={props.kind === "g-clef" ? "75" : "50"}>
      {props.kind === "g-clef" ? "\u{E050}" : "\u{E062}"}
    </text>
  );
};
