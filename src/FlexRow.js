// @flow
import * as React from "react";

const columnStyle = {
  display: "flex",
  flexDirection: "row"
};

const SPACING = {
  small: { paddingRight: 5 },
  medium: { paddingRight: 10 },
  large: { paddingRight: 15 }
};

type Props = {
  spacing: "small" | "medium" | "large",
  children: Array<React.Element<*>>
};

export default function FlexRow({ spacing, children }: Props) {
  return (
    <div style={columnStyle}>
      {children.map(child => <div style={SPACING[spacing]}>{child}</div>)}
    </div>
  );
}
