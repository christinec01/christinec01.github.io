//@flow
import * as React from "react";

type Props = {
  header: string,
  children: Array<React.Element<*>> | React.Element<*>
};
const section = {
  display: "grid"
};
const sectionHeader = {
  fontSize: 24,
  fontWeight: 500,
  paddingBottom: 10
};

export default function Section({ header, children }: Props) {
  return (
    <div style={section}>
      <div style={sectionHeader}>{header}</div>
      <div className={"blue"}>{children}</div>
    </div>
  );
}
