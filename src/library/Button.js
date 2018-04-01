// @flow
import * as React from "react";
import COLORS from "./colors";
import type { ColorType } from "./colors";
import "./Button.css";

type Props = {
  children: React.Element<*> | string,
  type: "primary" | "secondary",
  color: ColorType,
  onClick: () => void,
  disabled: boolean
};

function getButtonStyle(
  type: "primary" | "secondary",
  color: ColorType,
  disabled: boolean
) {
  if (disabled == true) {
    return {
      backgroundColor: "#d8d8d8",
      color: "#c4c4c4",
      borderColor: "#d8d8d8",
      borderSize: "1px",
      borderStyle: "solid"
    };
  }
  if (type === "primary") {
    return {
      backgroundColor: `${COLORS[color]}`,
      color: "#fff",
      borderColor: `${COLORS[color]}`,
      borderSize: "1px",
      borderStyle: "solid"
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
export default function Button({
  children,
  type,
  color,
  onClick,
  disabled
}: Props) {
  return (
    <div
      onClick={onClick}
      style={getButtonStyle(type, color, disabled)}
      className={disabled ? "disabled base-button" : "base-button"}
    >
      {children}
    </div>
  );
}
