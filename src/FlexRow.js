// @flow
import * as React from "react";

const rowStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "baseline"
};

const SPACING = {
  none: { paddingRight: 0 },
  small: { paddingRight: 5 },
  medium: { paddingRight: 10 },
  large: { paddingRight: 15 }
};

function getRowStyle(justifyContent) {
  if (justifyContent) {
    return {
      ...rowStyle,
      justifyContent
    };
  }
  return rowStyle;
}

type Props = {
  spacing: "none" | "small" | "medium" | "large",
  justifyContent?: "space-around" | "space-between",
  children: Array<React.Element<*>>
};

export default function FlexRow({ spacing, children, justifyContent }: Props) {
  return (
    <div style={getRowStyle(justifyContent)}>
      {children.map((child, i) => (
        <div key={i} style={SPACING[spacing]}>
          {child}
        </div>
      ))}
    </div>
  );
}
