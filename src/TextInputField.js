// @flow
import * as React from "react";
import COLORS from "./colors";
import type { ColorType } from "./colors";
import "./input.css";

type Props = {
  onChange: (value: *) => void,
  label: React.Element<*> | string,
  placeholder: string | null,
  color: ColorType
};

export default class TextInputField extends React.Component<Props> {
  handleInputChange = (e: { target: { value: * } }) => {
    this.props.onChange(e.target.value);
  };
  render() {
    return (
      <div>
        {this.props.label}
        <input
          style={{ fontSize: "calc(12px + 0.5vw" }}
          className="base-input-style"
          placeholder={this.props.placeholder}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}
