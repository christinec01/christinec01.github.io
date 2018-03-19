// @flow
import * as React from "react";
import COLORS from "./colors";
import type { ColorType } from "./colors";
import "./Button.css";

type Props = {
  children: React.Element<*> | string,
  type: "primary" | "secondary",
  color: ColorType,
  onClick: () => void
};

function getButtonStyle(type: "primary" | "secondary", color: ColorType) {
  if (type === "primary") {
    return {
      backgroundColor: `${COLORS[color]}`,
      color: "#fff"
    };
  }

  if (type === "secondary") {
    return {
      backgroundColor: "transparent",
      color: `${COLORS[color]}`,
      borderSize: "1px",
      borderStyle: "solid",
      borderColor: `${COLORS[color]}`
    };
  }
}
export default function Button({ children, type, color, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      style={getButtonStyle(type, color)}
      className={"base-button"}
    >
      {children}
    </div>
  );
}
