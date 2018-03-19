// @flow
import React from "react";
import Section from "./Section";
import Grid from "./Grid";
import Button from "./Button";
import Dropdown, { Dropdown as DropdownForDemo } from "./Dropdown";
import FlexRow from "./FlexRow";
import colors from "./colors";
import CodeDemo from "./CodeDemo";
import { capitalizeFirstCharacter } from "./FormatTools";
import type { ColorType } from "./colors";

type Props = {};
type State = {
  primarySelectedColor: ColorType,
  secondarySelectedColor: ColorType
};

export default class ButtonSection extends React.Component<Props, State> {
  state = {
    primarySelectedColor: "green",
    secondarySelectedColor: "blue"
  };

  handlePrimaryColorSelect = (color: ColorType) => {
    this.setState({ primarySelectedColor: color });
  };

  handleSecondaryColorSelect = (color: ColorType) => {
    this.setState({ secondarySelectedColor: color });
  };

  handleButtonClick = () => {
    console.log("button clicked");
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
            <div>
              <Button
                type="primary"
                color={this.state.primarySelectedColor}
                onClick={this.handleButtonClick}
              >
                Primary Button
              </Button>
            </div>
            <div className="padding-vertical-small">
              <FlexRow spacing="medium">
                <div> Colors:</div>
                <Dropdown
                  options={colorOptions}
                  onSelect={this.handlePrimaryColorSelect}
                  value={this.state.primarySelectedColor}
                />
              </FlexRow>
            </div>
            <CodeDemo
              code={
                <Button
                  type="primary"
                  color={this.state.primarySelectedColor}
                  onClick={function handlePrimaryButtonClick() {}}
                >
                  Primary Button
                </Button>
              }
            />
          </div>
          <div>
            <div>
              <Button
                type="secondary"
                color={this.state.secondarySelectedColor}
                onClick={this.handleButtonClick}
              >
                Secondary Button
              </Button>
            </div>
            <div className="padding-vertical-small">
              <FlexRow spacing="medium">
                <div> Colors:</div>
                <Dropdown
                  options={colorOptions}
                  onSelect={this.handleSecondaryColorSelect}
                  value={this.state.secondarySelectedColor}
                />
              </FlexRow>
            </div>
            <CodeDemo
              code={
                <Button
                  type="secondary"
                  color={this.state.secondarySelectedColor}
                  onClick={function handleSecondaryButtonClick() {}}
                >
                  Secondary Button
                </Button>
              }
            />
          </div>
        </Grid>
      </Section>
    );
  }
}
