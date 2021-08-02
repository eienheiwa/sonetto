import React from "react";

type Props = {
  x?: string | number;
  top: number;
  bottom: number;
};

export const TimeSig = (props: Props) => {
  let x = props.x || 0;
  return (
    <>
      <text x={x} y="25">
        &#xE083;
      </text>
      <text x={x} y="75">
        &#xE084;
      </text>
    </>
  );
};

TimeSig.width = 100;
