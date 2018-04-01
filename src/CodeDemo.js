// @flow
import * as React from "react";
import Highlight from "react-highlight";
import colors from "./colors";

export default function CodeDemo({ code }: { code: string }) {
  return (
    <div
      style={{
        backgroundColor: colors.lightGray,
        // boxShadow: "inset -10px -9px 20px 3px #dfdfdfe6",
        border: "1px solid rgb(224, 224, 224)",
        width: 400,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5,
        paddingBottom: 5
      }}
    >
      <pre>
        <code>
          <Highlight className="javascript">{`${trimCode(code)}`}</Highlight>
        </code>
      </pre>
    </div>
  );
}

function trimCode(code: string) {
  const lines = code.split("\n");
  const sliceStart = lines[0].length === 0 ? 1 : 0;
  const sliceEnd =
    lines[lines.length - 1].length === 1 ? lines.length - 2 : lines.length - 1;
  return lines.slice(sliceStart, sliceEnd).join("\n");
}
