// @flow
import * as React from "react";
import onClickOutside from "react-onclickoutside";

type Props = {
  options: Array<{ name: string, value: * }>,
  onSelect: (value: *) => void,
  value: *
};
type State = { isOpen: boolean };
export default onClickOutside(
  class Dropdown extends React.Component<Props, State> {
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
        <div>
          <div onClick={() => this.setState({ isOpen: true })}>
            {selectedOption ? selectedOption.name : null}
          </div>
          {this.state.isOpen ? (
            <div>
              {this.props.options.map(option => (
                <div onClick={() => this.handleOptionClick(option.value)}>
                  {option.name}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      );
    }
  }
);
