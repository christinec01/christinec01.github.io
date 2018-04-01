// @flow
import * as React from "react";
import Section from "../Section";
import FlexRow from "../library/FlexRow";
import colors, { getPaletteColorStyle } from "../library/colors";
import CodeDemo from "../CodeDemo";
import type { ColorType } from "../library/colors";
import { capitalizeFirstCharacter } from "../library/FormatTools";
import "./colorPalette.css";
type Props = { backgroundColor: string };

const colorPalletCode = `
function getPaletteColor(color: ColorType) {
  return {
    backgroundColor: \`\${colors[color]}\`
  };
}
<div 
  className="palette-color" 
  style={getPaletteColor("red")}
>
  Red 
</div>
`;

export default function ColorPalette({ backgroundColor }: Props) {
  const colorSet = Object.keys(colors);
  return (
    <Section header="Color Palette">
      <CodeDemo code="import colors from 'colors'" />
      <FlexRow spacing="medium">
        {colorSet.map(color => (
          <div className="palette-color" style={getPaletteColorStyle(color)}>
            {capitalizeFirstCharacter(color)}
          </div>
        ))}
      </FlexRow>
      <div className="padding-vertical-small">
        <CodeDemo code={colorPalletCode} />
      </div>
    </Section>
  );
}
