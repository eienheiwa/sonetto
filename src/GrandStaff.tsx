import React from "react";
import { Staves } from "./Staves";

type Props = {};

export const GrandStaff = (props: Props) => {
  return (
    <svg
      className="staves"
      width="20em"
      height="3em"
      viewBox="0, 0, 2000, 300"
      overflow="visible"
    >
      <Staves y="0" clef="g-clef" />
      <Staves y="200" clef="f-clef" />
      <text fontSize="300" x="-25" y="300">&#xE000;</text>
    </svg>
  );
};
