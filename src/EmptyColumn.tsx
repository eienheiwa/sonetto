import React from "react";
import _ from "lodash";
import { NoteSpec } from "./Note";

type Props = {
  x: number | string;
  pushNote: (note: NoteSpec) => void;
};

export const EmptyColumn = (props: Props) => {
  return <>{_.range(-2, 13).map((i) => newNote(i, props))}</>;
};

const newNote = (i: number, props: Props) => {
  let line = i * 0.5;
  let y = 100 - line * 25;
  return (
    <rect
      className="new-note"
      key={i}
      x={+props.x - 25}
      y={y - 6.25}
      width="50"
      height="12.5"
      onClick={(_) => props.pushNote({ line, duration: "1/4" })}
    ></rect>
  );
};

EmptyColumn.width = 25;
