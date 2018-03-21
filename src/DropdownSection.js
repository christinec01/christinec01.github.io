// @flow
import * as React from "react";
import Dropdown from "./Dropdown";
import Section from "./Section";
import Grid from "./Grid";
import FlexRow from "./FlexRow";

type Props = {};
type State = { selectedOption: string };

export default class DropdownSection extends React.Component<Props, State> {
  state = {
    selectedOption: "Pick an option"
  };

  handleOptionSelect = (selectedOption: string) => {
    this.setState({ selectedOption });
  };

  render() {
    return (
      <Section header="Dropdowns">
        <FlexRow spacing="medium">
          <div> Dropdown:</div>
          <Dropdown
            onSelect={this.handleOptionSelect}
            value={this.state.selectedOption}
            options={[
              { name: "Option 1", value: 1 },
              { name: "Option 2", value: 2 },
              { name: "Option 3", value: 3 }
            ]}
          />
        </FlexRow>
      </Section>
    );
  }
}
