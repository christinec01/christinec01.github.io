// @flow
import * as React from "react";
import FlexRow from "./FlexRow";
import "./input.css";

type Props = {
  onChange: (value: *) => void,
  label: React.Element<*> | string,
  placeholder: string | null,
  value: ?string
};

type State = {
  showList: boolean
};

export default class TextInputField extends React.Component<Props, State> {
  handleInputChange = (e: { target: { value: string } }) => {
    this.props.onChange(e.target.value);
  };

  render() {
    const { value, label, placeholder } = this.props;
    return (
      <FlexRow spacing="medium">
        <div>{label}</div>
        <input
          type="text"
          style={{ fontSize: 14 }}
          value={value}
          className="base-input-style"
          placeholder={placeholder}
          onChange={this.handleInputChange}
        />
      </FlexRow>
    );
  }
}
