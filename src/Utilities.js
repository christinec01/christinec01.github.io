// @flow
import * as React from "react";
import Section from "./Section";
import FlexRow from "./FlexRow";
import FlexColumn from "./FlexColumn";
import COLORS from "./colors";
import type { ColorType } from "./colors";
import "./colorPalette.css";

export default function Utilities() {
  return (
    <Section header="Utilities">
      <Section header="Flex Row">
        <div className="padding-top-small padding-bottom-small">
          <FlexRow spacing="small">
            <div className="light-gray-outline padding-allaround-small">
              Card
            </div>
            <div className="light-gray-outline padding-allaround-small">
              Card
            </div>
            <div className="light-gray-outline padding-allaround-small">
              Card
            </div>
            <div className="light-gray-outline padding-allaround-small">
              Card
            </div>
            <div className="light-gray-outline padding-allaround-small">
              Card
            </div>
            <div className="light-gray-outline padding-allaround-small">
              Card
            </div>
            <div className="light-gray-outline padding-allaround-small">
              Card
            </div>
            <div className="light-gray-outline padding-allaround-small">
              Card
            </div>
          </FlexRow>
        </div>
      </Section>
      <Section header="Flex Column">
        <div className="padding-top-small">
          <FlexColumn spacing="medium">
            <div className="light-gray-outline padding-allaround-small">
              Card
            </div>
            <div className="light-gray-outline padding-allaround-small">
              Card
            </div>
            <div className="light-gray-outline padding-allaround-small">
              Card
            </div>
            <div className="light-gray-outline padding-allaround-small">
              Card
            </div>
            <div className="light-gray-outline padding-allaround-small">
              Card
            </div>
            <div className="light-gray-outline padding-allaround-small">
              Card
            </div>
            <div className="light-gray-outline padding-allaround-small">
              Card
            </div>
            <div className="light-gray-outline padding-allaround-small">
              Card
            </div>
          </FlexColumn>
        </div>
      </Section>
    </Section>
  );
}
