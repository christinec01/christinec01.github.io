// @flow
import * as React from "react";
import TextInputField from "./TextInputField";
import Section from "./Section";

export default function InputFieldSection() {
  return (
    <Section header="Input Fields">
      <div>
        <TextInputField onChange={() => {}} placeholder="I'm an input field" />
      </div>
    </Section>
  );
}
