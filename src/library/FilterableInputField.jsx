// @flow
import * as React from "react";
import COLORS from "./colors";
import type { ColorType } from "./colors";
import TextInputField from "./TextInputField";
import Dropdown from "./Dropdown";
import "./input.css";

// Incomplete!!

type Props = {
  onChange: (value: *) => void,
  label: React.Element<*> | string,
  placeholder: string | null,
  list: Array<*>,
  value: ?string
};

type State = {
  showList: boolean
};

export default class FilterableInputField extends React.Component<
  Props,
  State
> {
  state = { showList: false };

  toggleShowList = () => {
    this.setState(prevState => ({ showList: !prevState.showList }));
  };

  handleFilteredList = (text: string) => {
    const newList = this.props.list.filter(word => word.includes(text));
  };

  render() {
    const { label, placeholder, onChange, value, list } = this.props;
    const { showList } = this.state;
    return (
      <div>
        <TextInputField
          label={label}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        {value && value.length > 0 ? (
          <Dropdown isOpen={true} hideDropdownInput={true} options={list} />
        ) : null}
      </div>
    );
  }
}
