// @flow
import * as React from "react";

type Props = {
  orientation: "horizontal" | "vertical",
  children: Array<React.Element<*>>
};

const verticalStyle = {};
const horizontalStyle = {};

function getGridStyle(
  orientation: "horizontal" | "vertical",
  numberOfElements: number
) {
  if (orientation === "horizontal") {
    return {
      gridTemplateColumns: `repeat(${numberOfElements}, 1fr`
    };
  }
  if (orientation === "vertical") {
    return {
      gridTemplateRows: `repeat(${numberOfElements}, 1fr`
    };
  }
}

export default function Grid({ orientation, children }: Props) {
  return (
    <div
      style={{ display: "grid", ...getGridStyle(orientation, children.length) }}
    >
      {children.map(child => <div style={{}}>{child}</div>)}
    </div>
  );
}
