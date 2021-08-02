import React from "react";

type Props = {
  top: number;
  bottom: number;
};

export const TimeSig = (props: Props) => {
  return (
    <>
      <text x="120" y="25">
        &#xE083;
      </text>
      <text x="120" y="75">
        &#xE084;
      </text>
    </>
  );
};
