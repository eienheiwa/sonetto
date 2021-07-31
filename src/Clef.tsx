import React from "react";
import _ from "lodash";

type Props = {
  kind: "g-clef" | "f-clef";
};

export const Clef = (props: Props) => {
  return (
    <text x="20" y={props.kind === "g-clef" ? "75" : "50"}>
      {props.kind === "g-clef" ? "&#xE050;" : "&#xE062;"}
    </text>
  );
};
