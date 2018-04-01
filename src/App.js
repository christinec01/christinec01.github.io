import React, { Component } from "react";
import Section from "./Section";
import CodeDemo from "./CodeDemo";
import FlexColumn from "./library/FlexColumn";
import ButtonSection from "./sections/ButtonSection";
import InputFieldSection from "./sections/InputFieldSection";
import DropdownSection from "./sections/DropdownSection";
import ColorPalette from "./sections/ColorPalette";
import Utilities from "./sections/Utilities";
import banner from "./assets/banner.png";
import logo from "./assets/logo.svg";
import linkedIn from "./assets/linkedIn.svg";
import github from "./assets/github.svg";
import "./App.css";

const bannerStyle = {
  position: "absolute",
  right: 10,
  bottom: 10,
  display: "flex",
  alignItems: "center"
};
const socalIconStyle = { textDecoration: "none", paddingLeft: 15 };

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="padding-left-medium padding-right-medium padding-top-small padding-bottom-small">
          <FlexColumn spacing="large">
            <Section header="Set Up">
              <div>
                Library styles must be imported in the index.js
                <CodeDemo code="import './library/utilities.css'" />
              </div>
            </Section>
            <ButtonSection />
            <DropdownSection />
            <InputFieldSection />
            <ColorPalette />
            <Utilities />
          </FlexColumn>
        </div>
      </div>
    );
  }
}

export default App;

function Header() {
  return (
    <div className="App">
      <div
        style={{
          position: "relative"
        }}
      >
        <img src={banner} style={{ width: "100%" }} alt="Component Library" />
        <div style={bannerStyle}>
          <a
            href="https://www.linkedin.com/in/ccasebolt/"
            target="_blank"
            style={socalIconStyle}
          >
            <img src={linkedIn} style={{ width: 25 }} />
          </a>
          <a
            href="https://github.com/christinec01"
            target="_blank"
            style={socalIconStyle}
          >
            <img src={github} style={{ width: 25 }} />
          </a>
          <a
            href="http://www.ccasebolt.com/"
            target="_blank"
            style={socalIconStyle}
          >
            <span
              style={{
                color: "#fff",
                fontWeight: 100
              }}
            >
              www.ccasebolt.com
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
