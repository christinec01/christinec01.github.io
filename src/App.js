import React, { Component } from "react";
import Section from "./Section";
import FlexColumn from "./FlexColumn";
import ButtonSection from "./ButtonSection";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Component Library</h1>
          </header>
        </div>

        <div className="padding-small">
          <FlexColumn spacing="small">
            <ButtonSection />
            {/* <ModalSection /> */}
            <Section header="Modals">
              <div>content</div>
            </Section>
            <Section header="Input Fields">
              <div>content</div>
            </Section>
          </FlexColumn>
        </div>
      </div>
    );
  }
}

export default App;
