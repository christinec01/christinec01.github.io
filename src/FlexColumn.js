// @flow
import * as React from "react";

const columnStyle = {
  display: "flex",
  flexDirection: "column"
};

const SPACING = {
  small: { paddingTop: 5, paddingBottom: 5 },
  medium: { paddingTop: 10, paddingBottom: 10 },
  large: { paddingTop: 15, paddingBottom: 15 }
};

type Props = {
  spacing: "small" | "medium" | "large",
  children: Array<React.Element<*>>
};

export default function FlexColumn({ spacing, children }: Props) {
  return (
    <div style={columnStyle}>
      {children.map((child, i) => (
        <div key={i} style={SPACING[spacing]}>
          {child}
        </div>
      ))}
    </div>
  );
}
