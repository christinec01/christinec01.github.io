// @flow
import React from "react";
import Section from "./Section";
import Grid from "./Grid";
import Button from "./Button";
import Dropdown from "./Dropdown";
import FlexRow from "./FlexRow";
import colors from "./colors";
import { capitalizeFirstCharacter } from "./FormatTools";
import type { ColorType } from "./colors";

type Props = {};
type State = { selectedColor: ColorType };

export default class ButtonSection extends React.Component<Props, State> {
  state = {
    selectedColor: "green"
  };

  handleColorSelect = (color: ColorType) => {
    this.setState({ selectedColor: color });
  };
  render() {
    const colorOptions = Object.keys(colors).map(colorName => ({
      name: capitalizeFirstCharacter(colorName),
      value: colorName
    }));
    return (
      <Section header="Buttons">
        <Grid orientation="horizontal">
          <div>
            <div>Primary Button</div>
            <div>
              <Button
                type="primary"
                text="primary button"
                color={this.state.selectedColor}
              />
            </div>
            <div className="padding-vertical-small">
              <FlexRow spacing="medium">
                <div> Colors:</div>
                <Dropdown
                  options={colorOptions}
                  onSelect={this.handleColorSelect}
                  value={this.state.selectedColor}
                />
              </FlexRow>
            </div>
          </div>
          <div>
            <div>Secondary Button</div>
            <div>Secondary Button</div>
          </div>
        </Grid>
      </Section>
    );
  }
}
