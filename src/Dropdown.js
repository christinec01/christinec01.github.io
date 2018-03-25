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
  value: *
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
    return (
      <div
        className="light-grey-outline clickable"
        style={{ position: "relative" }}
      >
        <div
          className="dropdown padding-extra-small"
          onClick={() =>
            this.setState(prevState => ({ isOpen: !prevState.isOpen }))
          }
        >
          <FlexRow spacing="none" justifyContent="space-between">
            <div>
              {" "}
              {this.props.multi ? (
                selectedOptions.map(option => (
                  <div
                    style={{
                      padding: 5,
                      border: "1px solid lightgray",
                      borderRadius: 3,
                      backgroundColor: "rgba(53, 140, 241, .45)"
                    }}
                  >
                    {option.name}
                    <Icon
                      onClick={() => this.handleRemoveOption(option.value)}
                      name="remove"
                    />
                  </div>
                ))
              ) : (
                <div>
                  {selectedOptions.length > 0 ? selectedOptions[0].name : null}
                </div>
              )}
            </div>
            <Icon name={this.state.isOpen ? "upArrow" : "downArrow"} />
          </FlexRow>
        </div>
        {this.state.isOpen ? (
          <div
            className="light-grey-outline"
            style={{ position: "absolute", minWidth: 150, background: "white" }}
          >
            {this.props.options.map((option, i) => (
              <OptionListItem
                key={i}
                name={option.name}
                onClick={() => this.handleOptionClick(option.value)}
                selected={this.props.value.includes(option.value)}
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
      <div className="padding-extra-small">{name}</div>
    </div>
  );
}
export default onClickOutside(Dropdown);
