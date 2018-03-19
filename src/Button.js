// @flow
import * as React from "react";
import COLORS from "./colors";
import type { ColorType } from "./colors";
import "./Button.css";

type Props = {
  text: string,
  type: "primary" | "secondary",
  color: ColorType
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
      color: `${COLORS[color]}`
    };
  }
}
export default function Button({ text, type, color }: Props) {
  return (
    <div style={getButtonStyle(type, color)} className={"base-button"}>
      {text}
    </div>
  );
}
