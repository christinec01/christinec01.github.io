// @flow
import * as React from "react";
import arrow from "./arrow.svg";
import openArrow from "./openArrow.svg";

const NAME_TO_ICON = {
  upArrow: arrow,
  downArrow: openArrow
};

type Props = { name: $Keys<typeof NAME_TO_ICON> };

export default function Icon({ name }: Props) {
  return <img src={NAME_TO_ICON[name]} alt={name} />;
}
