# Simple Component Library

The purpose of this library is to provide developers with a toolbox of components whose API's are designed with legibility, ease of use and consistancy in mind. This library is ever-growing. Check back often for new components or contact me with specific requests!
View a live demo: https://christinec01.github.io/component-library/

## Getting Started

Run NPM install react-component-library

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing -CANNOT CURRENTLY BE INSTALLED

This library is not able to be installed just yet. Please check back shortly. Once it is an NPM package, the install process will look something like this:

```
npm install react-component-library
```

Import components from the library in your application as follows:

```
import {Button} from 'react-component-library'
```

```
<Button
  type="primary"
  color={this.state.primarySelectedColor}
  onClick={function handlePrimaryButtonClick() {}}
>
  Primary Button
</Button>
```

## Usage

This library provides a simple, clear, developer friendly component API making it easy to encorporate into your application. To further ease of use, this library is 100% typed using Flow.

```
// @flow
import React from "react";
import Button from "../library/Button";

type State = {
  primarySelectedColor: ColorType,
  secondarySelectedColor: ColorType
};
export default class ButtonSection extends React.Component<Props, State> {
  state = {
    primarySelectedColor: "green",
    secondarySelectedColor: "blue"
  };

  handlePrimaryColorSelect = (color: ColorType) => {
    this.setState({ primarySelectedColor: color });
  };

  handleSecondaryColorSelect = (color: ColorType) => {
    this.setState({ secondarySelectedColor: color });
  };

  handleButtonClick = () => {
    console.log("button clicked");
  };

  render() {
    const colorOptions = Object.keys(colors).map(colorName => ({
      name: capitalizeFirstCharacter(colorName),
      value: colorName
    }));
    return (
      <Section header="Buttons">
        <CodeDemo code="import Button from 'Button'" />
        <Grid orientation="horizontal">
          <div>
            <div className="padding-top-small">
              <Button
                type="primary"
                color={this.state.primarySelectedColor}
                onClick={this.handleButtonClick}
                disabled={false}
              >
                Primary Button
              </Button>
            </div>
            <div className="padding-top-small">
              <FlexRow spacing="medium">
                <div> Colors:</div>
                <Dropdown
                  options={colorOptions}
                  onSelect={this.handlePrimaryColorSelect}
                  value={this.state.primarySelectedColor}
                />
              </FlexRow>
            </div>
            <div className="padding-top-small">
              <CodeDemo code={primaryButtonExample} />
            </div>
          </div>
         </Grid>
        </Section>
       );
      }
    }
```

You can customize the `type`, `color`,`onClick`and optional `disabled` props of the Button component by importing the color palette inclued in this library or your own.

## Button Props

| Property |   Type   |  Default  | Description                                                                                                      |
| -------- | :------: | :-------: | ---------------------------------------------------------------------------------------------------------------- |
| type     |  string  | undefined | Sets style of button to solid when primary or hollow when secondary                                              |
| color    |  string  |   blue    | Sets the color of the button's background or border and text depending on the button type                        |
| onClick  | function | undefined | Click handler                                                                                                    |
| disabled | boolean  |   false   | Disabled the button by preventing the onClick method. Changes styling to gray out the button and removes pointer |

## Dropdown Props

| Property |   Type   |  Default  | Description                                                                |
| -------- | :------: | :-------: | -------------------------------------------------------------------------- |
| onSelect | function | undefined | Sets the state of selectedOption equalto the option selected               |
| value    | function | undefined | Sets the value of the dropdown to the value of state of the selectedOption |
| options  |  object  | undefined | Array of hashes containing the contents of the dropdown                    |

## TextInputField Props

| Property    |   Type   |   Default   | Description                                   |
| ----------- | :------: | :---------: | --------------------------------------------- |
| label       |  string  |    name     | Sets the label of the input field in the form |
| onChange    | function |  undefined  | Passes the value of e.target.value to props   |
| placeholder |  string  | placeholder | Optional placeholder text                     |
| value       |  string  |  undefined  | The value of the input field in state         |

### Methods

Use the `getPaletteColor()` method to return the desired color as a background

```function getPaletteColor(color: ColorType) {
  return {
    backgroundColor: `${colors[color]}`
  };
}
<div
  className="palette-color"
  style={getPaletteColor("red")}
>
  Red
</div>
```

Use the `capitalizeFirstCharacter()` method to capitalize the first letter in a string

``capitalizeFirstCharacter(text: string)`

## Built With

* [Lodash](https://lodash.com/) - Methods used to create palette table

## Authors

* **Christine Casebolt** - _Initial work_ - [ChristineC01](https://github.com/ChristineC01)

<!-- ## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details -->
