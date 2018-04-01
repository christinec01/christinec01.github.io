// @flow
import * as React from "react";
import TextInputField from "../library/TextInputField";
import FilterableInputField from "../library/FilterableInputField";
import Section from "../Section";
import FlexColumn from "../library/FlexColumn";
import CodeDemo from "../CodeDemo";

type Props = {};
type State = { inputFieldValue: ?string, filterableFieldValue: ?string };
const textInputFieldDropdownExample = `
<TextInputField
  label="name"
  onChange={this.handleTextInputChange}
  placeholder="Enter your name here"
  value={this.state.inputFieldValue}
/>
`;

export default class InputFieldSection extends React.Component<Props, State> {
  state = {
    inputFieldValue: "",
    filterableFieldValue: null
  };

  handleTextInputChange = (inputFieldValue: string) => {
    this.setState({ inputFieldValue });
  };

  handleFilterableInputChange = (filterableFieldValue: string) => {
    this.setState({ filterableFieldValue });
  };

  render() {
    return (
      <Section header="Input Fields">
        <CodeDemo code="import TextInputField from 'TextInputField'" />
        <FlexColumn spacing="medium">
          <div>
            <TextInputField
              label="Name"
              onChange={this.handleTextInputChange}
              placeholder="Enter your name here"
              value={this.state.inputFieldValue}
            />
          </div>
          <CodeDemo code={textInputFieldDropdownExample} />
        </FlexColumn>
      </Section>
    );
  }
}
