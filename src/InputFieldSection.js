// @flow
import * as React from "react";
import TextInputField from "./TextInputField";
import FilterableInputField from "./FilterableInputField";
import Section from "./Section";
import FlexColumn from "./FlexColumn";
import CodeDemo from "./CodeDemo";

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
const list = [
  "apple",
  "bannana",
  "cat",
  "caterpillar",
  "dog",
  "band",
  "car",
  "doll",
  "chase",
  "chair"
];
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
