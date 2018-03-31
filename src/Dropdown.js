// @flow
import * as React from "react";
import onClickOutside from "react-onclickoutside";
import FlexRow from "./FlexRow";
import Icon from "./Icon";

import "./Dropdown.css";

type Option = { name: string, value: * };
type Props = {
  options: Array<Option>,
  onSelect: (value: *) => void,
  value: Array<*> | *,
  multi: boolean,
  disabled: boolean
};
type State = { isOpen: boolean };

export class Dropdown extends React.Component<Props, State> {
  state = {
    isOpen: false
  };
  handleClickOutside = () => {
    this.setState({ isOpen: false });
  };
  handleOptionClick = (selectedValue: *) => {
    if (!this.props.multi) {
      this.setState({ isOpen: false });
      this.props.onSelect(selectedValue);
    } else {
      if (this.props.value.includes(selectedValue)) {
        throw "Cannot select option more than once";
      }
      this.props.onSelect([...this.props.value, selectedValue]);
    }
  };
  handleRemoveOption = (selectedValue: *) => {
    const filteredOptions = this.props.value.filter(
      option => option !== selectedValue
    );
    this.props.onSelect(filteredOptions);
  };

  getSelectedOptions = (): Array<Option> => {
    if (this.props.multi) {
      return this.props.options.filter(option =>
        this.props.value.includes(option.value)
      );
    } else {
      const matchingOption = this.props.options.find(
        option => this.props.value === option.value
      );
      return matchingOption ? [matchingOption] : [];
    }
  };

  render() {
    const selectedOptions = this.getSelectedOptions();
    const { value, options, multi, disabled } = this.props;
    const { isOpen } = this.state;
    return (
      <div
        className="light-grey-outline clickable"
        style={{ position: "relative" }}
      >
        <div
          className={"dropdown padding-allaround-extra-small"}
          onClick={() => {
            this.props.disabled
              ? null
              : this.setState(prevState => ({ isOpen: !prevState.isOpen }));
          }}
        >
          <FlexRow spacing="none" justifyContent="space-between">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginRight: 5
              }}
            >
              {multi ? (
                selectedOptions.map((option, i) => (
                  <div
                    key={i}
                    style={{
                      padding: 5,
                      border: "1px solid lightgray",
                      borderRadius: 3,
                      backgroundColor: "rgba(53, 140, 241, .45)",
                      width: "max-content",
                      whiteSpace: "nowrap",
                      fontSize: 12
                    }}
                  >
                    {option.name}
                    <Icon
                      onClick={() => this.handleRemoveOption(option.value)}
                      name="remove"
                      style={{ paddingLeft: 10 }}
                    />
                  </div>
                ))
              ) : (
                <div>
                  {selectedOptions.length > 0 ? selectedOptions[0].name : null}
                </div>
              )}
            </div>
            <Icon name={isOpen ? "upArrow" : "downArrow"} />
          </FlexRow>
        </div>
        {isOpen ? (
          <div
            className="light-grey-outline"
            style={{
              position: "absolute",
              minWidth: 150,
              background: "white"
            }}
          >
            {options.map((option, i) => (
              <OptionListItem
                key={i}
                name={option.name}
                onClick={() => this.handleOptionClick(option.value)}
                selected={
                  multi ? value.includes(option.value) : value === option.value
                }
              />
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}

function OptionListItem({ onClick, name, selected }) {
  return (
    <div className="list-item" onClick={!selected ? onClick : () => null}>
      <div
        className="padding-allaround-extra-small"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        {name}
        {selected ? <Icon name="checkMark" /> : null}
      </div>
    </div>
  );
}
export default onClickOutside(Dropdown);
