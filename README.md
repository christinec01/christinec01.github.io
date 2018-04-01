# Simple Component Library

The purpose of this library is to provide developers with a toolbox of components whose API's are designed with legibility, ease of use and consistancy in mind. This library is ever-growing. Check back often for new components or contact me with specific requests!

## Getting Started

Run NPM install react-component-library

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

Library styles must be imported in the index.js

```
import './library/utilities.css'
```

Import components from the library in your application as follows:

```
import Button from 'Button'
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

| Property |   Type   |   Default |                                                                                                      Description |
| -------- | :------: | --------: | ---------------------------------------------------------------------------------------------------------------: |
| type     |  string  | undefined |                                              Sets style of button to solid when primary or hollow when secondary |
| color    |  string  |      blue |                        Sets the color of the button's background or border and text depending on the button type |
| onClick  | function | undefined |                                                                                                    Click handler |
| disabled | boolean  |     false | Disabled the button by preventing the onClick method. Changes styling to gray out the button and removes pointer |

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

<!-- ## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/ChristineC01/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us. -->

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Christine Casebolt** - _Initial work_ - [ChristineC01](https://github.com/ChristineC01)

<!-- ## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details -->

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
