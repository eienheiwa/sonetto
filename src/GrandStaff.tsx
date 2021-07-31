import React from "react";
import { Staves } from "./Staves";

type Props = {};

export const GrandStaff = (props: Props) => {
  return (
    <>
      <Staves clef="g-clef" />
      <Staves clef="f-clef" />
    </>
  );
};
