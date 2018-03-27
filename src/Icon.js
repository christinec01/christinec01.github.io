// @flow
import * as React from "react";
import arrow from "./arrow.svg";
import openArrow from "./openArrow.svg";
import remove from "./delete.svg";
import checkMark from "./checkMark.svg";

const NAME_TO_ICON = {
  upArrow: arrow,
  downArrow: openArrow,
  remove,
  checkMark
};

type Props = {
  name: $Keys<typeof NAME_TO_ICON>,
  onClick?: () => void
};

export default function Icon({ name, onClick, style }: Props) {
  return (
    <img src={NAME_TO_ICON[name]} alt={name} onClick={onClick} style={style} />
  );
}
