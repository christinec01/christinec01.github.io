import React, { Component } from "react";
import Section from "./Section";
import FlexColumn from "./FlexColumn";
import ButtonSection from "./ButtonSection";
import InputFieldSection from "./InputFieldSection";
import DropdownSection from "./DropdownSection";
import banner from "./banner.png";
import logo from "./logo.svg";
import linkedIn from "./linkedIn.svg";
import github from "./github.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <div
            style={{
              position: "relative"
            }}
          >
            <img
              src={banner}
              style={{ width: "100%" }}
              alt="Component Library"
            />
            <div
              style={{
                position: "absolute",
                right: 10,
                bottom: 10,
                display: "flex"
              }}
            >
              <a
                href="https://www.linkedin.com/in/ccasebolt/"
                target="_blank"
                style={{ textDecoration: "none", paddingLeft: 5 }}
              >
                {" "}
                <img src={linkedIn} style={{ width: 15 }} />
              </a>
              <a
                href="https://github.com/christinec01"
                target="_blank"
                style={{ textDecoration: "none", paddingLeft: 5 }}
              >
                {" "}
                <img src={github} style={{ width: 15 }} />
              </a>
              <a
                href="http://www.ccasebolt.com/"
                target="_blank"
                style={{ textDecoration: "none", paddingLeft: 5 }}
              >
                <span
                  style={{
                    color: "#fff",

                    fontWeight: 100
                  }}
                >
                  {" "}
                  www.ccasebolt.com
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="padding-allaround-xlarge">
          <FlexColumn spacing="small">
            <ButtonSection />

            <DropdownSection />
            <InputFieldSection />
          </FlexColumn>
        </div>
      </div>
    );
  }
}

export default App;
