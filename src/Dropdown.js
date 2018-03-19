// @flow
import * as React from "react";
import onClickOutside from "react-onclickoutside";
import FlexRow from "./FlexRow";
import Icon from "./Icon";

import "./Dropdown.css";

type Props = {
  options: Array<{ name: string, value: * }>,
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
  handleOptionClick = (value: *) => {
    this.setState({ isOpen: false });
    this.props.onSelect(value);
  };

  render() {
    const selectedOption = this.props.options.find(
      option => this.props.value === option.value
    );
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
            <div>{selectedOption ? selectedOption.name : null}</div>
            <Icon name={this.state.isOpen ? "upArrow" : "downArrow"} />
          </FlexRow>
        </div>
        {this.state.isOpen ? (
          <div
            className="light-grey-outline"
            style={{ position: "absolute", minWidth: 150, background: "white" }}
          >
            {this.props.options.map((option, i) => (
              <div
                key={i}
                className="list-item"
                onClick={() => this.handleOptionClick(option.value)}
              >
                <div className="padding-extra-small">{option.name}</div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}
export default onClickOutside(Dropdown);
