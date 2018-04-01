// @flow
import * as React from "react";
import Section from "./Section";
import FlexRow from "./FlexRow";
import COLORS from "./colors";
import type { ColorType } from "./colors";
import "./colorPalette.css";
type Props = { backgroundColor: string };

function getPaletteColor(color: ColorType) {
  return {
    backgroundColor: `${COLORS[color]}`
  };
}
export default function ColorPalette({ backgroundColor }: Props) {
  return (
    <Section header="Color Palette">
      <FlexRow spacing="medium">
        <div className="palette-color" style={getPaletteColor("red")}>
          Red
        </div>
        <div className="palette-color" style={getPaletteColor("blue")}>
          Blue
        </div>
        <div className="palette-color" style={getPaletteColor("orange")}>
          Orange
        </div>
        <div className="palette-color" style={getPaletteColor("green")}>
          Green
        </div>
        <div className="palette-color" style={getPaletteColor("gray")}>
          Gray
        </div>
        <div className="palette-color" style={getPaletteColor("lightGray")}>
          Light Gray
        </div>
        <div className="palette-color" style={getPaletteColor("black")}>
          Black
        </div>
        <div className="palette-color" style={getPaletteColor("white")}>
          White
        </div>
      </FlexRow>
    </Section>
  );
}
