# Simple Component Library

The purpose of this library is to provide developers with a toolbox of components whose APIs are designed with legibility, ease of use and consistency in mind. This library is ever-growing. Check back often for new components or contact me with specific requests!
View a live demo: https://christinec01.github.io/component-library/

### Installing - CANNOT CURRENTLY BE INSTALLED

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

This library provides a simple, clear, developer-friendly component API making it easy to incorporate into your application. To further ease of use, this library is 100% typed using Flow.

```
// @flow
import React from "react";
import {Button} from 'react-component-library'

type State = {
  primarySelectedColor: ColorType,
};
export default class ButtonSection extends React.Component<Props, State> {
  state = {
    primarySelectedColor: "green",
  };

  handlePrimaryColorSelect = (color: ColorType) => {
    this.setState({ primarySelectedColor: color });
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
| disabled | boolean  |   false   | Disables the button by preventing the onClick method. Changes styling to gray out the button and removes pointer |

## Dropdown Props

| Property |   Type   |  Default  | Description                                              |
| -------- | :------: | :-------: | -------------------------------------------------------- |
| onSelect | function | undefined | Handler that passes the value of the selected option     |
| value    |   any    | undefined | The current value of the dropdown                        |
| options  |  array   | undefined | Array of objects containing the contents of the dropdown |

## TextInputField Props

| Property    |   Type   |   Default   | Description                                     |
| ----------- | :------: | :---------: | ----------------------------------------------- |
| label       |  string  |    name     | Sets the label of the input field in the form   |
| onChange    | function |  undefined  | Handler that passes the value of the text field |
| placeholder |  string  | placeholder | Optional placeholder text                       |
| value       |  string  |  undefined  | The current value of the input field            |

### Methods

Use the `getPaletteColor()` method to return the desired color as a background color

```
<div
  className="palette-color"
  style={getPaletteColor("red")}
>
  Red
</div>
```

Use the `capitalizeFirstCharacter()` method to capitalize the first letter in a string

`capitalizeFirstCharacter('hello') === 'Hello'`

## Built With

* [Lodash](https://lodash.com/) - Methods used to create palette table

## Authors

* **Christine Casebolt** - _Initial work_ - [ChristineC01](https://github.com/ChristineC01)

<!-- ## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details -->
