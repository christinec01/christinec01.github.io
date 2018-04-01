// @flow
import * as React from "react";
import { times } from "lodash";
import Section from "../Section";
import FlexRow from "../library/FlexRow";
import FlexColumn from "../library/FlexColumn";
import CodeDemo from "../CodeDemo";
import COLORS from "../library/colors";
import type { ColorType } from "../library/colors";
import "./colorPalette.css";

export default function Utilities() {
  return (
    <Section header="Utilities">
      <Section header="Flex Row">
        <CodeDemo code="import FlexRow from 'FlexRow'" />
        <div className="padding-top-small padding-bottom-small">
          <FlexRow spacing="small">
            {times(8, () => (
              <div className="light-gray-outline padding-allaround-small">
                Card
              </div>
            ))}
          </FlexRow>
        </div>
      </Section>
      <Section header="Flex Column">
        <CodeDemo code="import FlexColumn from 'FlexColumn'" />
        <div className="padding-top-small">
          <FlexColumn spacing="medium">
            {times(8, () => (
              <div className="light-gray-outline padding-allaround-small">
                Card
              </div>
            ))}
          </FlexColumn>
        </div>
      </Section>
    </Section>
  );
}
