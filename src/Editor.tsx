import React, { useState } from "react";
import { GrandStaff } from "./GrandStaff";
import { DURATIONS, Duration } from "./Note";
import { useKey } from "react-use";

type Props = {};

export const Editor = (props: Props) => {
  const [currentDuration, setCurrentDuration] = useState("1/4" as Duration);

  DURATIONS.forEach((duration, i) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useKey((i + 1).toString(), () => setCurrentDuration(duration as Duration));
  });

  return (
    <div className="editor">
      <GrandStaff currentDuration={currentDuration} />
    </div>
  );
};
