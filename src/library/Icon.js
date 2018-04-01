// @flow
import * as React from "react";
import arrow from "./icons/arrow.svg";
import openArrow from "./icons/openArrow.svg";
import remove from "./icons/delete.svg";
import checkMark from "./icons/checkMark.svg";

const NAME_TO_ICON = {
  upArrow: arrow,
  downArrow: openArrow,
  remove,
  checkMark
};

type Props = {
  name: $Keys<typeof NAME_TO_ICON>,
  onClick?: () => void,
  style?: {}
};

export default function Icon({ name, onClick, style }: Props) {
  return (
    <img src={NAME_TO_ICON[name]} alt={name} onClick={onClick} style={style} />
  );
}
