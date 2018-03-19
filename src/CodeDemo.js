// @flow
import * as React from "react";
import reactElementToJSXString from "react-element-to-jsx-string";

export default function CodeDemo({ code }) {
  return (
    <pre>
      <code>
        {reactElementToJSXString(
          code,
          // $FlowFixMe
          {
            showDefaultProps: false,
            useBooleanShorthandSyntax: false,
            functionValue: fn => {
              return fn.name;
            }
          }
        )}
      </code>
    </pre>
  );
}
