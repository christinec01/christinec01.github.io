// @flow
import * as React from "react";
import Highlight from "react-highlight";
import colors from "./library/colors";

export default function CodeDemo({ code }: { code: string }) {
  return (
    <div
      style={{
        backgroundColor: colors.lightGray,
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
  if (lines.length === 1) {
    return code;
  }
  const sliceStart = lines[0].length === 0 ? 1 : 0;
  const sliceEnd =
    lines[lines.length - 1].length === 0 ? lines.length - 1 : lines.length;
  return lines.slice(sliceStart, sliceEnd).join("\n");
}
