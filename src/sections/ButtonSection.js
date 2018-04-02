// @flow
import React from "react";
import Section from "../Section";
import Grid from "../library/Grid";
import Button from "../library/Button";
import Dropdown, { Dropdown as DropdownForDemo } from "../library/Dropdown";
import FlexRow from "../library/FlexRow";
import colors from "../library/colors";
import CodeDemo from "../CodeDemo";
import { capitalizeFirstCharacter } from "../library/FormatTools";
import type { ColorType } from "../library/colors";

type Props = {};
type State = {
  primarySelectedColor: ColorType,
  secondarySelectedColor: ColorType
};

const primaryButtonExample = `
<Button
  type="primary"
  color={this.state.primarySelectedColor}
  onClick={function handlePrimaryButtonClick() {}}
>
  Primary Button
</Button>
`;
const secondaryButtonExample = `
<Button
  type="secondary"
  color={this.state.secondarySelectedColor}
  onClick={function handleSecondaryButtonClick() {}}
>
  Secondary Button
</Button>
`;

const disabledButtonExample = `
<Button
  type="primary"
  color={this.state.primarySelectedColor}
  onClick={this.handleButtonClick}
  disabled={true}
>
  Disabled Button
</Button>`;

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
        <CodeDemo code="import Button from 'Button'" />
        <Grid orientation="horizontal">
          <div>
            <div className="padding-top-small">
              <Button
                type="primary"
                color={this.state.primarySelectedColor}
                onClick={this.handleButtonClick}
                disabled={false}
              >
                Primary Button
              </Button>
            </div>
            <div className="padding-top-small">
              <FlexRow spacing="medium">
                <div> Colors:</div>
                <Dropdown
                  options={colorOptions}
                  onSelect={this.handlePrimaryColorSelect}
                  value={this.state.primarySelectedColor}
                />
              </FlexRow>
            </div>
            <div className="padding-top-small">
              <CodeDemo code={primaryButtonExample} />
            </div>
          </div>
          <div>
            <div className="padding-top-small">
              <Button
                type="secondary"
                color={this.state.secondarySelectedColor}
                onClick={this.handleButtonClick}
                disabled={false}
              >
                Secondary Button
              </Button>
            </div>
            <div className="padding-top-small">
              <FlexRow spacing="medium">
                <div> Colors:</div>
                <Dropdown
                  options={colorOptions}
                  onSelect={this.handleSecondaryColorSelect}
                  value={this.state.secondarySelectedColor}
                />
              </FlexRow>
            </div>
            <div className="padding-top-small">
              <CodeDemo code={secondaryButtonExample} />
            </div>
          </div>
          <div>
            <div className="padding-top-small">
              <Button
                type="primary"
                color={this.state.primarySelectedColor}
                onClick={this.handleButtonClick}
                disabled={true}
              >
                Disabled Button
              </Button>
            </div>
            <div className="padding-top-small">
              <FlexRow spacing="medium">
                <div> Colors:</div>
                <Dropdown disabled={true} options={colorOptions} />
              </FlexRow>
            </div>
            <div className="padding-top-small">
              <CodeDemo code={disabledButtonExample} />
            </div>
          </div>
        </Grid>
      </Section>
    );
  }
}
